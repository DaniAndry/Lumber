using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class GameManager : MonoBehaviour
{
    public static GameManager Instance { get; private set; }

    [Header("Туториал")] [SerializeField] private GameObject tutorialObject;
    [SerializeField] private Animator tutorialAnimator;
    [SerializeField] private float idleTimeForTutorial = 3f;
    
    [Header("Подсветка кнопок")]
    [SerializeField] private List<ButtonLight> buildButtonLights = new List<ButtonLight>();

    [Header("Баланс и улучшения")] [SerializeField]
    private Button upgradeButton;

    [SerializeField] private GameObject upgradeButtonGameObject;

    [SerializeField] private Button secondRequiredButton;
    [SerializeField] private GameObject packShotObject;

    [Header("Привязки к игровым объектам")] [SerializeField]
    private MoneyController moneyController;

    [SerializeField] private BuildManager buildManager;

    private const int TUTORIAL2_BALANCE_THRESHOLD = 20;
    private const int UPGRADE_BUTTON_BALANCE_THRESHOLD = 100;

    private bool tutorialShown = false;
    private bool tutorial2Shown = false;
    private bool upgradeButtonEnabled = false;
    private bool userIdle = true;
    private bool isLight;
    private float idleTimer = 0f;
    private float idleTimerForPackShot = 0f;
    
    private bool firstBuildingActive = false;
    private bool secondBuildingActive = false;
    private bool thirdBuildingActive = false;
    
    private bool userClickedButton = false;

    private Coroutine packShotCoroutine;
    private Coroutine idleCoroutine;
    private Coroutine tutorial2Coroutine;

    private void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
            DontDestroyOnLoad(gameObject);
        }
        else
        {
            Destroy(gameObject);
        }

        if (upgradeButton != null)
        {
            upgradeButton.gameObject.SetActive(false);
            upgradeButton.onClick.AddListener(OnUpgradeButtonClicked);
        }

        if (secondRequiredButton != null)
        {
            secondRequiredButton.interactable = false;
            secondRequiredButton.onClick.AddListener(OnSecondButtonClicked);
        }

        if (packShotObject != null)
        {
            packShotObject.SetActive(false);
        }

        if (tutorialObject != null)
        {
            tutorialObject.SetActive(false);
        }
    }

    private void Start()
    {
        if (moneyController == null)
        {
            moneyController = MoneyController.Instance;
        }

        if (moneyController != null)
        {
            moneyController.OnBalanceChanged += CheckBalanceThresholds;
            moneyController.OnBuildSuccess += CheckSecondBuilding;
        }

        if (moneyController != null && moneyController.GetBalance() >= UPGRADE_BUTTON_BALANCE_THRESHOLD)
        {
            EnableUpgradeButton();
        }
        
        // Проверяем наличие построенных зданий при старте
        if (buildManager != null && buildManager.GetConstructedBuildingsCount() > 0)
        {
            tutorialShown = true;
            userClickedButton = true;
            
            // Проверяем состояние каждого здания
            CheckBuiltBuildingsStatus();
        }
        
        // Инициализируем кнопки с подсветкой (но не запускаем подсветку)
        InitializeBuildButtons();

        StartIdleCoroutine();
        HighlightActiveBuildButtons();
    }
    
    // Проверяет, какие здания уже построены
    private void CheckBuiltBuildingsStatus()
    {
        if (buildManager != null)
        {
            if (!buildManager._buildButton1.gameObject.activeInHierarchy)
                firstBuildingActive = true;
                
            if (!buildManager._buildButton2.gameObject.activeInHierarchy)
                secondBuildingActive = true;
                
            if (!buildManager._buildButton3.gameObject.activeInHierarchy)
                thirdBuildingActive = true;
        }
    }

    private void InitializeBuildButtons()
    {
        if (buildButtonLights.Count == 0)
        {
            ButtonLight[] allLights = FindObjectsOfType<ButtonLight>();
            foreach (ButtonLight light in allLights)
            {
                if (light != null && light.gameObject.activeInHierarchy)
                {
                    buildButtonLights.Add(light);
                    Debug.Log($"Добавлена кнопка подсветки: {light.gameObject.name}");
                }
            }
        }
    }

    private void OnDestroy()
    {
        if (moneyController != null)
        {
            moneyController.OnBalanceChanged -= CheckBalanceThresholds;
            moneyController.OnBuildSuccess -= CheckSecondBuilding;
        }

        if (upgradeButton != null)
        {
            upgradeButton.onClick.RemoveListener(OnUpgradeButtonClicked);
        }

        if (secondRequiredButton != null)
        {
            secondRequiredButton.onClick.RemoveListener(OnSecondButtonClicked);
        }
    }

    public void RegisterUserActivity()
    {
        ResetIdleTimer();
    }

    private void ResetIdleTimer()
    {
        userIdle = false;
        idleTimer = 0f;

        if (tutorialObject != null && tutorialObject.activeSelf)
        {
            tutorialObject.SetActive(false);
        }

        if (idleCoroutine != null)
        {
            StopCoroutine(idleCoroutine);
        }

        StartIdleCoroutine();
    }

    private void StartIdleCoroutine()
    {
        idleCoroutine = StartCoroutine(IdleCoroutine());
    }

    private IEnumerator IdleCoroutine()
    {
        while (true)
        {
            yield return new WaitForSeconds(1f);
            idleTimer += 1f;
            userIdle = true;

            if (idleTimer >= idleTimeForTutorial && !tutorialShown && !secondBuildingActive && !thirdBuildingActive && !userClickedButton)
            {
                ShowFirstTutorial();
            }
        }
    }

    private void ShowFirstTutorial()
    {
        tutorialObject.SetActive(true);
        tutorialAnimator.Play("Tutorial");
        tutorialShown = true;
    }

    private void ShowSecondTutorial()
    {
        if (tutorialObject != null && tutorialAnimator != null && !tutorial2Shown && !secondBuildingActive && !thirdBuildingActive)
        {
            tutorialObject.SetActive(true);
            tutorialAnimator.Play("Tutorial2");
            tutorial2Shown = true;
        }
    }

    private IEnumerator Tutorial2Coroutine()
    {
        InitializeBuildButtons();
        
        HighlightActiveBuildButtons();
        isLight = true; 
        
        yield return new WaitForSeconds(3f);
        
        ShowSecondTutorial();
    }

    private void HighlightActiveBuildButtons()
    {
        
        if (buildButtonLights.Count == 0&& !isLight)
        {
            InitializeBuildButtons();
        }
        
        foreach (ButtonLight button in buildButtonLights)
        {
            if (button != null && button.gameObject.activeInHierarchy)
            {
                button.StartFlashing();
            }
        }
    }

    private void CheckBalanceThresholds(int newBalance)
    {
        // Добавим дополнительную проверку для отладки
        Debug.Log($"Проверка баланса: {newBalance}, порог: {TUTORIAL2_BALANCE_THRESHOLD}, tutorial2Shown: {tutorial2Shown}, firstBuilding: {firstBuildingActive}, secondBuilding: {secondBuildingActive}");
        
        // Показ второго туториала при достижении порога, если не показан и построено не более 1 здания
        if (newBalance >= TUTORIAL2_BALANCE_THRESHOLD && !tutorial2Shown && !secondBuildingActive && !thirdBuildingActive)
        {
            Debug.Log("Условие для показа второго туториала выполнено!");
            
            if (tutorial2Coroutine != null)
            {
                StopCoroutine(tutorial2Coroutine);
            }
            
            tutorial2Coroutine = StartCoroutine(Tutorial2Coroutine());
        }

        if (newBalance >= UPGRADE_BUTTON_BALANCE_THRESHOLD && !upgradeButtonEnabled)
        {
            EnableUpgradeButton();
        }

        if (newBalance >= UPGRADE_BUTTON_BALANCE_THRESHOLD && secondRequiredButton != null)
        {
            secondRequiredButton.interactable = true;
        }
    }

    private void CheckSecondBuilding(GameObject builtObject)
    {
        if (builtObject != null)
        {
            userClickedButton = true;
            
            // Определяем, какое здание было построено
            if (buildManager != null)
            {
                if (builtObject == buildManager._build1)
                    firstBuildingActive = true;
                else if (builtObject == buildManager._build2)
                    secondBuildingActive = true;
                else if (builtObject == buildManager._build3)
                    thirdBuildingActive = true;
            }
            
            // Скрываем туториал, если он активен
            if (tutorialObject != null && tutorialObject.activeSelf)
            {
                tutorialObject.SetActive(false);
            }
        }
    }

    private void EnableUpgradeButton()
    {
        if (upgradeButton != null)
        {
            upgradeButton.gameObject.SetActive(true);
            upgradeButtonGameObject.SetActive(true);
            HighlightActiveBuildButtons();
            StartPackShotCoroutine();
            upgradeButtonEnabled = true;
            idleTimerForPackShot = 0f;
        }
    }

    private bool isUpgradeClicked = false;
    private bool isSecondButtonClicked = false;

    private void OnUpgradeButtonClicked()
    {
        isUpgradeClicked = true;
        userClickedButton = true;
        CheckPackShotActivation();


        if (packShotCoroutine != null)
        {
            StopCoroutine(packShotCoroutine);
        }

        StartPackShotCoroutine();
    }

    private void OnSecondButtonClicked()
    {
        if (tutorialObject != null)
        {
            tutorialObject.SetActive(false);
        }

        secondBuildingActive = true;
        userClickedButton = true;
        CheckPackShotActivation();

        if (packShotCoroutine != null)
        {
            StopCoroutine(packShotCoroutine);
        }
    }

    private void StartPackShotCoroutine()
    {
        packShotCoroutine = StartCoroutine(PackShotIdleCoroutine());
    }

    private IEnumerator PackShotIdleCoroutine()
    {
        yield return new WaitForSeconds(3f);
        CheckPackShotActivation();
        tutorialObject.SetActive(false);
    }

    private void CheckPackShotActivation()
    {
        if (idleTimer >= 3f)
        {
            packShotObject.SetActive(true);
        }
    }

    public void DisableTutorial()
    {
        if (tutorialObject != null)
        {
            tutorialObject.SetActive(false);
        }
    }
}