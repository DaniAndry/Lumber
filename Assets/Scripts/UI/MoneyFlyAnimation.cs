using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class MoneyFlyAnimation : MonoBehaviour
{
    [Header("General Settings")]
    [SerializeField] private GameObject moneyPrefab3D;
    [SerializeField] private int poolSize = 10;
    [SerializeField] private float minDuration = 0.5f;
    [SerializeField] private float maxDuration = 1.2f;
    [SerializeField] private float spread = 1f;

    [Header("From-To Settings")]
    [SerializeField] public Transform worldStartPoint;
    [SerializeField] private RectTransform uiTargetPoint;

    private Camera mainCamera;
    private List<GameObject> coinPool3D = new List<GameObject>();

    private void Awake()
    {
        mainCamera = Camera.main;
        InitPool();
    }

    private void InitPool()
    {
        for (int i = 0; i < poolSize; i++)
        {
            GameObject coin = Instantiate(moneyPrefab3D);
            coin.SetActive(false);
            coinPool3D.Add(coin);
        }
    }

    public void FlyCoins()
    {
        if (worldStartPoint == null || uiTargetPoint == null)
        {
            Debug.LogWarning("MoneyFlyAnimation: Assign start and target points in inspector.");
            return;
        }

        StartCoroutine(FlyCoinsFromWorldToUI(worldStartPoint.position, uiTargetPoint));
    }

    public void FlyCoinsFromUIToWorld(Vector3 worldTarget)
    {
        if (uiTargetPoint == null)
        {
            Debug.LogWarning("MoneyFlyAnimation: Assign UI target point in inspector.");
            return;
        }

        StartCoroutine(FlyCoinsFromUIToWorldCoroutine(uiTargetPoint, worldTarget));
    }

    private IEnumerator FlyCoinsFromWorldToUI(Vector3 worldStart, RectTransform uiTarget)
    {
        Vector3 targetWorldPos = mainCamera.ScreenToWorldPoint(new Vector3(uiTarget.position.x, uiTarget.position.y, mainCamera.nearClipPlane + 5f));

        for (int i = 0; i < poolSize; i++)
        {
            GameObject coin = GetCoinFromPool();
            if (coin == null) yield break;

            Vector3 startPos = worldStart + Random.insideUnitSphere * spread;
            coin.transform.position = startPos;
            coin.SetActive(true);

            float duration = Random.Range(minDuration, maxDuration);

            coin.transform.DOMove(targetWorldPos, duration)
                .SetEase(Ease.InOutQuad)
                .OnComplete(() => coin.SetActive(false));

            yield return new WaitForSeconds(0.05f);
        }
    }

    private IEnumerator FlyCoinsFromUIToWorldCoroutine(RectTransform uiStart, Vector3 worldTarget)
    {
        Vector3 screenPos = new Vector3(uiStart.position.x, uiStart.position.y, mainCamera.nearClipPlane + 5f);
        Vector3 startWorldPos = mainCamera.ScreenToWorldPoint(screenPos);

        for (int i = 0; i < poolSize; i++)
        {
            GameObject coin = GetCoinFromPool();
            if (coin == null) yield break;

            Vector3 startPos = startWorldPos + Random.insideUnitSphere * spread;
            coin.transform.position = startPos;
            coin.SetActive(true);

            float duration = Random.Range(minDuration, maxDuration);

            coin.transform.DOMove(worldTarget, duration)
                .SetEase(Ease.InOutQuad)
                .OnComplete(() => coin.SetActive(false));

            yield return new WaitForSeconds(0.05f);
        }
    }

    private GameObject GetCoinFromPool()
    {
        foreach (var coin in coinPool3D)
        {
            if (!coin.activeInHierarchy)
                return coin;
        }
        return null;
    }
}
