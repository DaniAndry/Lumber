using System;
using UnityEngine;

public class BalanceManager : MonoBehaviour
{
	[SerializeField]
	private int _initialBalance = 100;

	[SerializeField]
	private bool _debugLogs = true;

	private int _currentBalance;

	public static BalanceManager Instance { get; private set; }

	public int CurrentBalance => _currentBalance;

	public event Action<int> OnBalanceChanged;

	private void Awake()
	{
		if (Instance == null)
		{
			Instance = this;
			UnityEngine.Object.DontDestroyOnLoad(base.gameObject);
		}
		else
		{
			UnityEngine.Object.Destroy(base.gameObject);
		}
		_currentBalance = _initialBalance;
	}

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
		this.OnBalanceChanged?.Invoke(_currentBalance);
		return _currentBalance;
	}

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
		this.OnBalanceChanged?.Invoke(_currentBalance);
		return true;
	}
}
