using System;
using System.Collections;
using UnityEngine;

public class MoneyController : MonoBehaviour
{
    [SerializeField] private MoneyBalance _moneyBalance;
    [SerializeField] private MoneyFlyAnimation _moneyFlyAnimation;
    
    private static MoneyController _instance;
    public static MoneyController Instance => _instance;
    
    public event Action<GameObject> OnBuildSuccess;
    public event Action<int> OnBalanceChanged;
    
    private void Awake()
    {
        if (_instance != null && _instance != this)
        {
            Destroy(gameObject);
            return;
        }

        _instance = this;
    }

    private void Start()
    {
        if (_moneyBalance != null)
        {
            Debug.Log("MoneyController: Начальный баланс: " + _moneyBalance.Money);
            _moneyBalance.OnMoneyChanged += HandleMoneyChanged;
        }
    }

    private void OnDestroy()
    {
        if (_moneyBalance != null)
        {
            _moneyBalance.OnMoneyChanged -= HandleMoneyChanged;
        }
    }

    private void HandleMoneyChanged(int newBalance)
    {
        SimpleAudioManager.Instance?.PlayProgressBarSound();
        OnBalanceChanged?.Invoke(newBalance);
    }

    public void TryBuild(int price, GameObject buildObject)
    {
        if (_moneyBalance.Money >= price)
        {
            _moneyFlyAnimation?.FlyCoinsFromUIToWorld(buildObject.transform.position); 
            _moneyBalance.TakeMoney(price);
            StartCoroutine(ActivateBuildWithDelay(buildObject, 1f));
        }
    }

    private IEnumerator ActivateBuildWithDelay(GameObject buildObject, float delay)
    {
        yield return new WaitForSeconds(delay);
        buildObject.SetActive(true);
        OnBuildSuccess?.Invoke(buildObject);
    }

    public void ChangeBalance(int money, bool isSpending)
    {
        if (!isSpending)
        {
            _moneyBalance.SetMoney(money);
        }
        else if (_moneyBalance.Money >= money)
        {
            _moneyBalance.TakeMoney(money);
        }
    }
    
    public void ChangeBalance(int money, bool isSpending, Vector3 position)
    {
        if (!isSpending)
        {
            _moneyBalance.SetMoney(money);
        }
        else if (_moneyBalance.Money >= money)
        {
            _moneyBalance.TakeMoney(money);
        }
    }
    
    public void ChangeBalanceWithVisual(int money, Vector3 worldStartPosition, bool isSpending = false)
    {
        if (_moneyFlyAnimation != null)
        {
            _moneyFlyAnimation.worldStartPoint.position = worldStartPosition;
            _moneyFlyAnimation.FlyCoins();
        }
        
        ChangeBalance(money, isSpending);
    }
    
    public void ChangeBalanceWithVisual(int money, RectTransform uiStartElement, Vector3 worldTarget,
        bool isSpending = false)
    {
        if (_moneyFlyAnimation != null)
        {
            if (isSpending)
            {
                _moneyFlyAnimation.FlyCoins();
            }
            else
            {
                _moneyFlyAnimation.FlyCoins();
            }
        }
        
        ChangeBalance(money, isSpending);
    }
    
    public int GetBalance()
    {
        return _moneyBalance != null ? _moneyBalance.Money : 0;
    }
}