using UnityEngine;
using System;

public class BalanceManager : MonoBehaviour
{
    public static BalanceManager Instance { get; private set; }

    [SerializeField] private int _initialBalance = 100;
    [SerializeField] private bool _debugLogs = true;

    private int _currentBalance;

    public int CurrentBalance => _currentBalance;

    // Событие, которое вызывается при изменении баланса
    public event Action<int> OnBalanceChanged;

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

        _currentBalance = _initialBalance;
    }

    /// <summary>
    /// Добавляет указанную сумму к балансу
    /// </summary>
    /// <param name="amount">Сумма для добавления</param>
    /// <returns>Новый баланс</returns>
    public int AddMoney(int amount)
    {
        if (amount <= 0)
        {
            Debug.LogWarning($"<color=orange>[BalanceManager]</color> Попытка добавить отрицательную или нулевую сумму: {amount}");
            return _currentBalance;
        }

        _currentBalance += amount;
        
        if (_debugLogs)
        {
            Debug.Log($"<color=green>[BalanceManager]</color> Добавлено ${amount}. Новый баланс: ${_currentBalance}");
        }
        
        OnBalanceChanged?.Invoke(_currentBalance);
        
        return _currentBalance;
    }

    /// <summary>
    /// Вычитает указанную сумму из баланса, если достаточно средств
    /// </summary>
    /// <param name="amount">Сумма для вычитания</param>
    /// <returns>true, если операция успешна, false, если недостаточно средств</returns>
    public bool SpendMoney(int amount)
    {
        if (amount <= 0)
        {
            Debug.LogWarning($"<color=orange>[BalanceManager]</color> Попытка потратить отрицательную или нулевую сумму: {amount}");
            return false;
        }

        if (_currentBalance < amount)
        {
            if (_debugLogs)
            {
                Debug.LogWarning($"<color=orange>[BalanceManager]</color> Недостаточно средств. Требуется: ${amount}, Доступно: ${_currentBalance}");
            }
            return false;
        }

        _currentBalance -= amount;
        
        if (_debugLogs)
        {
            Debug.Log($"<color=yellow>[BalanceManager]</color> Потрачено ${amount}. Новый баланс: ${_currentBalance}");
        }
        
        OnBalanceChanged?.Invoke(_currentBalance);
        
        return true;
    }
}
