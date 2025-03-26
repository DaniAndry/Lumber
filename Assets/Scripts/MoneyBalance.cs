using TMPro;
using UnityEngine;
using DG.Tweening;
using System;
using System.Collections;
using System.Collections.Generic;

public class MoneyBalance : MonoBehaviour
{
    [SerializeField] private TextMeshProUGUI _text;
    private int _money = 15;
    public int Money => _money;
    private Tween moneyTween;

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
            moneyTween.Kill();

        int startValue = _money;

        moneyTween = DOTween.To(() => startValue, x =>
            {
                startValue = x;
                UpdateText(x);
            }, targetValue, duration)
            .OnComplete(() =>
            {
                _money = targetValue;
                UpdateText(_money);
                OnMoneyChanged?.Invoke(_money);
            });

        // Вызываем событие немедленно, чтобы обеспечить реакцию на изменение баланса
        OnMoneyChanged?.Invoke(targetValue);
    }
}