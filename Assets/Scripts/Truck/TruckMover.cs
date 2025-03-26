using UnityEngine;
using DG.Tweening;
using System.Collections;

public class TruckMover : MonoBehaviour
{
    private float _moveDuration = 2.0f;

    [SerializeField] private Ease _moveEase = Ease.InOutSine;
    
    private TruckUnloadPoint _unloadPoint;

    [SerializeField] private Transform _startPosition;

    [SerializeField] private AudioSource _engineSound;

    private Truck _truck;
    private Vector3 _initialPosition;
    private Quaternion _initialRotation;
    private bool _isMoving = false;

    public bool IsMoving => _isMoving;

    private void Awake()
    {
        if (_truck == null)
            _truck = GetComponent<Truck>();

        if (_startPosition == null)
            _startPosition = transform;
        _truck = GetComponent<Truck>();
        _initialPosition = _startPosition.position;
        _initialRotation = _startPosition.rotation;
        _truck.OnTruckFull += HandleTruckFull;
        
        if (TruckManager.Instance != null)
        {
            TruckManager.Instance.OnTruckReadyToSend += HandleTruckReadyToSend;
        }
        
        _unloadPoint = FindObjectOfType<TruckUnloadPoint>();
    }

    private void Start()
    {
    }

    private void OnDestroy()
    {
        if (_truck != null)
        {
            _truck.OnTruckFull -= HandleTruckFull;
        }
        
        if (TruckManager.Instance != null)
        {
            TruckManager.Instance.OnTruckReadyToSend -= HandleTruckReadyToSend;
        }

        transform.DOKill();
    }

    private void HandleTruckReadyToSend(Truck truck)
    {
        if (truck == _truck && !_isMoving && _unloadPoint != null)
        {
            StartCoroutine(MoveToUnloadAndBackRoutine(_unloadPoint.StopPosition));
        }
    }
    
    private void HandleTruckFull()
    {
        if (!_isMoving && _unloadPoint != null)
        {
            StartCoroutine(MoveToUnloadAndBackRoutine(_unloadPoint.StopPosition));
        }
    }

    private IEnumerator MoveToUnloadAndBackRoutine(Transform targetPositionTransform)
    {
        _isMoving = true;

        if (_engineSound != null)
        {
            _engineSound.Play();
        }

        Vector3 targetPosition = targetPositionTransform.position;
        Tween moveTween = transform.DOMove(targetPosition, _moveDuration).SetEase(_moveEase);
        yield return moveTween.WaitForCompletion();

        // Устанавливаем флаг, что грузовик находится в точке разгрузки
        _truck.SetAtUnloadPoint(true);
        
        yield return StartCoroutine(UnloadTruckRoutine());

        // Сбрасываем флаг после разгрузки
        _truck.SetAtUnloadPoint(false);
        
        moveTween = transform.DOMove(_initialPosition, _moveDuration).SetEase(_moveEase);
        yield return moveTween.WaitForCompletion();

        if (_engineSound != null)
        {
            _engineSound.Stop();
        }

        // Добавляем небольшую задержку перед тем, как грузовик станет доступным для загрузки
        yield return new WaitForSeconds(0.5f);
        
        _isMoving = false;
    }

    private IEnumerator UnloadTruckRoutine()
    {

        yield return new WaitForSeconds(_unloadPoint.UnloadDuration);

        bool wasFull = true;
        int logsUnloaded = _truck.MaxCapacity - _truck.RemainingCapacity;

        _truck.Clear();

        if (wasFull)
        {
            MoneyController moneyController = MoneyController.Instance;

            if (moneyController != null)
            {
                int reward = 20;
                moneyController.ChangeBalanceWithVisual(reward, transform.position, false);
            }
        }
    }
}