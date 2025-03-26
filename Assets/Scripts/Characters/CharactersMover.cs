using DG.Tweening;
using UnityEngine;
using System.Collections;

public class CharactersMover : MonoBehaviour
{
    [SerializeField] private MovePoint[] _normalRoutePoints;
    [SerializeField] private UnloadPoint[] _unloadPoints;
    [SerializeField] private UnloadPoint _defaultUnloadPoint;

    private int _currentPointIndex = 0;
    private float _initialRotationX;
    private float _initialRotationZ;
    private Character _character;
    private MovePoint[] _currentRoute;
    private bool _isUnloading = false;
    private bool _waitingForTruck = false;
    private float _checkTruckAvailabilityInterval = 2.0f;
    private bool _visitedDefaultPointBeforeUnload = false;

    private void Start()
    {
        _character = GetComponent<Character>();
        _initialRotationX = transform.rotation.eulerAngles.x;
        _initialRotationZ = transform.rotation.eulerAngles.z;
        _currentRoute = _normalRoutePoints;

        _character.OnCargoFull += HandleCargoFull;
        _character.OnCargoEmpty += HandleCargoEmpty;

        if (TruckManager.Instance != null)
        {
            TruckManager.Instance.OnAllTrucksFull += HandleAllTrucksFull;
        }

        MoveToNextPoint();
    }

    private void OnDestroy()
    {
        if (_character != null)
        {
            _character.OnCargoFull -= HandleCargoFull;
            _character.OnCargoEmpty -= HandleCargoEmpty;
        }

        if (TruckManager.Instance != null)
        {
            TruckManager.Instance.OnAllTrucksFull -= HandleAllTrucksFull;
        }

        transform.DOKill();
        CancelInvoke();
    }

    private void HandleAllTrucksFull()
    {
        if (_waitingForTruck)
        {
            _waitingForTruck = false;
            _isUnloading = false;
            _currentRoute = new MovePoint[] { _defaultUnloadPoint };
            _currentPointIndex = 0;
            transform.DOKill();
            MoveToNextPoint();
        }
    }

    private void HandleRetryUnloading()
    {
        if (_waitingForTruck)
        {
            UnloadPoint targetPoint = FindNextAvailableUnloadPoint(null);
            if (targetPoint != null)
            {
                _waitingForTruck = false;
                _currentRoute = new MovePoint[] { targetPoint };
                _currentPointIndex = 0;
                transform.DOKill();
                MoveToNextPoint();
            }
            else
            {
                CancelInvoke(nameof(HandleRetryUnloading));
                Invoke(nameof(HandleRetryUnloading), _checkTruckAvailabilityInterval);
            }
        }
    }

    private void HandleCargoFull()
    {
        if (!_isUnloading && _character != null && _character.IsFull)
        {
            _isUnloading = true;
            _visitedDefaultPointBeforeUnload = false;
            _currentRoute = new MovePoint[] { _defaultUnloadPoint };
            _currentPointIndex = 0;
            transform.DOKill();
            MoveToNextPoint();
        }
    }

    private void HandleCargoEmpty()
    {
        if (_isUnloading)
        {
            _isUnloading = false;
            _waitingForTruck = false;
            _currentRoute = new MovePoint[] { _defaultUnloadPoint };
            _currentPointIndex = 0;
            transform.DOKill();
            MoveToNextPoint();
        }
    }

    private void MoveToNextPoint()
    {
        if (_currentPointIndex >= _currentRoute.Length)
        {
            _currentPointIndex = 0;
        }

        MovePoint currentPoint = _currentRoute[_currentPointIndex];
        Vector3 targetPos = currentPoint.transform.position;

        // Используем более умеренную скорость для точек разгрузки
        // Сохраняем баланс между скоростью и плавностью
        float moveDuration = currentPoint.MoveDuration;

        Vector3 direction = targetPos - transform.position;
        direction.y = 0f;

        if (direction != Vector3.zero)
        {
            Quaternion targetRotation = Quaternion.LookRotation(direction);
            float yRotation = targetRotation.eulerAngles.y;
            Quaternion finalRotation = Quaternion.Euler(_initialRotationX, yRotation, _initialRotationZ);
            transform.DORotateQuaternion(finalRotation, 0.3f); 
        }

        // Убираем мгновенное перемещение - вместо этого используем ускоренную анимацию
        bool isUnloadingOperation =
            _isUnloading && (currentPoint is UnloadPoint || currentPoint == _defaultUnloadPoint);

        // Если персонаж очень близко к точке, ускоряем движение, но не телепортируем
        if (isUnloadingOperation && Vector3.Distance(transform.position, targetPos) < 0.5f)
        {
            moveDuration = 0.3f; // Быстрое, но все еще заметное движение
        }

        transform.DOMove(targetPos, moveDuration)
            .SetEase(Ease.InOutSine)
            .OnComplete(() => HandleArrivalAtPoint(currentPoint));
    }

    // Выделяем логику обработки прибытия в отдельный метод для лучшей организации
    private void HandleArrivalAtPoint(MovePoint currentPoint)
    {
        // Логика для точек разгрузки не меняется
        if (_isUnloading && currentPoint == _defaultUnloadPoint && !_visitedDefaultPointBeforeUnload)
        {
            _visitedDefaultPointBeforeUnload = true;

            if (_defaultUnloadPoint.CanUnload(_character.gameObject))
            {
                int logsUnloaded = _character.UnloadToTruck(_defaultUnloadPoint.TargetTruck);

                if (logsUnloaded == 0 && _character.CargoCount > 0)
                {
                    UnloadPoint nextPoint = FindNextAvailableUnloadPoint(_defaultUnloadPoint);
                    if (nextPoint != null)
                    {
                        _currentRoute = new MovePoint[] { nextPoint };
                        _currentPointIndex = 0;
                        transform.DOKill();
                        MoveToNextPoint();
                    }
                    else
                    {
                        _waitingForTruck = true;
                        Invoke(nameof(HandleRetryUnloading), _checkTruckAvailabilityInterval);
                    }

                    return;
                }
                else
                {
                    // Если разгрузка на дефолтной точке успешна, переходим к нормальному маршруту
                    _isUnloading = false;
                    _currentRoute = _normalRoutePoints;
                    _currentPointIndex = 0;
                    transform.DOKill();
                    MoveToNextPoint();
                    return;
                }
            }
            else
            {
                UnloadPoint nextPoint = FindNextAvailableUnloadPoint(_defaultUnloadPoint);
                if (nextPoint != null)
                {
                    _currentRoute = new MovePoint[] { nextPoint };
                    _currentPointIndex = 0;
                    transform.DOKill();
                    MoveToNextPoint();
                }
                else
                {
                    _waitingForTruck = true;
                    Invoke(nameof(HandleRetryUnloading), _checkTruckAvailabilityInterval);
                }

                return;
            }
        }
        else if (_isUnloading && currentPoint is UnloadPoint unloadPoint && unloadPoint != _defaultUnloadPoint)
        {
            _character.UnloadToTruck(unloadPoint.TargetTruck);

            // После успешной разгрузки сразу переходим к нормальному маршруту
            _isUnloading = false;
            _currentRoute = _normalRoutePoints;
            _currentPointIndex = 0;
            transform.DOKill();
            MoveToNextPoint();
            return;
        }
        else if (!_isUnloading && currentPoint == _defaultUnloadPoint)
        {
            _currentRoute = _normalRoutePoints;
            _currentPointIndex = 0;
            transform.DOKill();
            MoveToNextPoint();
            return;
        }

        // Увеличиваем плавность движения по нормальному маршруту
        _currentPointIndex++;

        // Немного увеличиваем задержку для более плавного движения
        // Но сохраняем ее достаточно малой, чтобы не было заметной паузы
        DOVirtual.DelayedCall(0.05f, MoveToNextPoint);
    }

    private UnloadPoint FindNextAvailableUnloadPoint(UnloadPoint currentPoint = null)
    {
        foreach (UnloadPoint point in _unloadPoints)
        {
            if (point != currentPoint && point.TargetTruck != null)
            {
                if (point.CanUnload(_character.gameObject))
                {
                    return point;
                }
            }
        }

        return null;
    }
}