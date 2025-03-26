using System.Collections;
using UnityEngine;
using UnityEngine.UI;

public class GameManager : MonoBehaviour
{
	[Header("Туториал")]
	[SerializeField]
	private GameObject tutorialObject;

	[SerializeField]
	private Animator tutorialAnimator;

	[SerializeField]
	private float idleTimeForTutorial = 3f;

	[Header("Баланс и улучшения")]
	[SerializeField]
	private Button upgradeButton;

	[SerializeField]
	private GameObject upgradeButtonGameObject;

	[SerializeField]
	private Button secondRequiredButton;

	[SerializeField]
	private GameObject packShotObject;

	[Header("Привязки к игровым объектам")]
	[SerializeField]
	private MoneyController moneyController;

	[SerializeField]
	private BuildManager buildManager;

	private const int TUTORIAL2_BALANCE_THRESHOLD = 20;

	private const int UPGRADE_BUTTON_BALANCE_THRESHOLD = 100;

	private bool tutorialShown = false;

	private bool tutorial2Shown = false;

	private bool upgradeButtonEnabled = false;

	private bool userIdle = true;

	private float idleTimer = 0f;

	private float idleTimerForPackShot = 0f;

	private bool secondBuildingActive = false;

	private bool userClickedButton = false;

	private Coroutine packShotCoroutine;

	private Coroutine idleCoroutine;

	private Coroutine tutorial2Coroutine;

	private bool isUpgradeClicked = false;

	private bool isSecondButtonClicked = false;

	public static GameManager Instance { get; private set; }

	private void Awake()
	{
		if (Instance == null)
		{
			Instance = this;
			Object.DontDestroyOnLoad(base.gameObject);
		}
		else
		{
			Object.Destroy(base.gameObject);
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
		if (moneyController != null && moneyController.GetBalance() >= 100)
		{
			EnableUpgradeButton();
		}
		StartIdleCoroutine();
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
			if (idleTimer >= idleTimeForTutorial && !tutorialShown && !secondBuildingActive && !userClickedButton)
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
		if (tutorialObject != null && tutorialAnimator != null && !tutorial2Shown && !secondBuildingActive)
		{
			tutorialObject.SetActive(true);
			tutorialAnimator.Play("Tutorial2");
			tutorial2Shown = true;
		}
	}

	private IEnumerator Tutorial2Coroutine()
	{
		yield return new WaitForSeconds(1f);
		if (!tutorial2Shown && !secondBuildingActive)
		{
			ShowSecondTutorial();
		}
	}

	private void CheckBalanceThresholds(int newBalance)
	{
		if (newBalance >= 20 && !tutorial2Shown && !secondBuildingActive)
		{
			if (tutorial2Coroutine != null)
			{
				StopCoroutine(tutorial2Coroutine);
			}
			tutorial2Coroutine = StartCoroutine(Tutorial2Coroutine());
		}
		if (newBalance >= 100 && !upgradeButtonEnabled)
		{
			EnableUpgradeButton();
		}
		if (newBalance >= 100 && secondRequiredButton != null)
		{
			secondRequiredButton.interactable = true;
		}
	}

	private void CheckSecondBuilding(GameObject builtObject)
	{
		if (builtObject != null)
		{
			secondBuildingActive = true;
			if (tutorialObject != null)
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
			StartPackShotCoroutine();
			upgradeButtonEnabled = true;
			idleTimerForPackShot = 0f;
		}
	}

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
		isSecondButtonClicked = true;
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
