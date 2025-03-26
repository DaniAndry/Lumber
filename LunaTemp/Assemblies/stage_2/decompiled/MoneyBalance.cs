using System;
using System.Collections;
using DG.Tweening;
using TMPro;
using UnityEngine;

public class MoneyBalance : MonoBehaviour
{
	[SerializeField]
	private TextMeshProUGUI _text;

	private int _money = 15;

	private Tween moneyTween;

	public int Money => _money;

	public event Action<int> OnMoneyChanged;

	private void Start()
	{
		UpdateText(_money);
	}

	public void SetMoney(int money)
	{
		StartCoroutine(AnimateMoneyChange(_money + money));
	}

	public void TakeMoney(int money)
	{
		StartCoroutine(AnimateMoneyChange(_money - money));
	}

	private void UpdateText(int value)
	{
		_text.text = value.ToString();
	}

	private IEnumerator AnimateMoneyChange(int targetValue, float duration = 0.5f)
	{
		yield return new WaitForSeconds(duration);
		if (moneyTween != null && moneyTween.IsActive())
		{
			moneyTween.Kill();
		}
		int startValue = _money;
		moneyTween = DOTween.To(() => startValue, delegate(int x)
		{
			startValue = x;
			UpdateText(x);
		}, targetValue, duration).OnComplete(delegate
		{
			_money = targetValue;
			UpdateText(_money);
			this.OnMoneyChanged?.Invoke(_money);
		});
		this.OnMoneyChanged?.Invoke(targetValue);
	}
}
