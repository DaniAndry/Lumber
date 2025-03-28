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
        // Возвращаем задержку перед анимацией
        yield return new WaitForSeconds(duration);
        
        if (moneyTween != null && moneyTween.IsActive())
            moneyTween.Kill();

        int startValue = _money;

        // Вызываем событие только один раз - в конце твина
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
            })
            .SetUpdate(true); // Установка обновления независимо от Time.timeScale

        // Убираем двойной вызов события, который может вызывать проблемы
        // OnMoneyChanged?.Invoke(targetValue); 
        
        yield break;
    }
}