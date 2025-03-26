using DG.Tweening;
using UnityEngine;

public class CharactersMover : MonoBehaviour
{
    [Header("Точки маршрута")] [SerializeField]
    private MovePoint[] _normalRoutePoints;

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
            _currentRoute = _normalRoutePoints;
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
                if (ChopperManager.Instance != null && _character is Chopper)
                {
                    if (ChopperManager.Instance.GetTargetTruck() == null)
                    {
                        ChopperManager.Instance.ResetTargetTruck();
                    }
                }

                CancelInvoke(nameof(HandleRetryUnloading));
                Invoke(nameof(HandleRetryUnloading), _checkTruckAvailabilityInterval);
            }
        }
    }

    private void HandleCargoFull()
    {
        if (!_isUnloading)
        {
            _isUnloading = true;

            if (_defaultUnloadPoint != null)
            {
                _currentRoute = new MovePoint[] { _defaultUnloadPoint };
                _currentPointIndex = 0;

                transform.DOKill();
                MoveToNextPoint();
            }
            else
            {
                UnloadPoint targetPoint = FindNextAvailableUnloadPoint(null);

                if (targetPoint != null)
                {
                    _currentRoute = new MovePoint[] { targetPoint };
                    _currentPointIndex = 0;

                    transform.DOKill();
                    MoveToNextPoint();
                }
                else
                {
                    _waitingForTruck = true;
                    CancelInvoke(nameof(HandleRetryUnloading));
                    Invoke(nameof(HandleRetryUnloading), _checkTruckAvailabilityInterval);
                }
            }
        }
    }

    private void HandleCargoEmpty()
    {
        if (_isUnloading)
        {
            _isUnloading = false;
            _waitingForTruck = false;
            _currentRoute = _normalRoutePoints;
            _currentPointIndex = 0;
        }
    }

    private UnloadPoint FindNearestAvailableUnloadPoint()
    {
        float closestDistance = float.MaxValue;
        UnloadPoint closestPoint = null;

        foreach (UnloadPoint point in _unloadPoints)
        {
            if (point.TargetTruck == null)
            {
                continue;
            }


            TruckMover mover = point.TargetTruck.GetComponent<TruckMover>();
            bool truckMoving = mover != null && mover.IsMoving;

            bool canUnload = point.CanUnload(_character.gameObject);

            if (canUnload)
            {
                float distance = Vector3.Distance(transform.position, point.transform.position);
                if (distance < closestDistance)
                {
                    closestDistance = distance;
                    closestPoint = point;
                }
            }
        }

        return closestPoint;
    }

    private void MoveToNextPoint()
    {
        if (_currentPointIndex >= _currentRoute.Length)
        {
            _currentPointIndex = 0;
        }

        MovePoint currentPoint = _currentRoute[_currentPointIndex];
        Vector3 targetPos = currentPoint.transform.position;
        float moveDuration = currentPoint.MoveDuration;
        Vector3 lookDirection = targetPos - transform.position;
        lookDirection.y = 0f;

        if (lookDirection != Vector3.zero)
        {
            Quaternion targetRotation = Quaternion.LookRotation(lookDirection);
            float yRotation = targetRotation.eulerAngles.y;
            Quaternion finalRotation = Quaternion.Euler(_initialRotationX, yRotation, _initialRotationZ);
            transform.DORotateQuaternion(finalRotation, 0.5f);
        }

        transform.DOMove(targetPos, moveDuration)
            .SetEase(Ease.InOutSine)
            .OnComplete(() =>
            {
                if (currentPoint is UnloadPoint unloadPoint)
                {
                    if (unloadPoint.TargetTruck != null)
                    {
                        bool truckIsFullBefore = unloadPoint.TargetTruck.IsFull;

                        int logsUnloaded = _character.UnloadToTruck(unloadPoint.TargetTruck);

                        if (logsUnloaded == 0 && _character.CargoCount > 0)
                        {
                            UnloadPoint nextPoint = FindNextAvailableUnloadPoint(unloadPoint);

                            if (nextPoint != null && nextPoint != unloadPoint)
                            {
                                _currentRoute = new MovePoint[] { nextPoint };
                                _currentPointIndex = -1;
                            }
                            else
                            {
                                _isUnloading = false;
                                _currentRoute = _normalRoutePoints;
                                _currentPointIndex = 0;

                                _waitingForTruck = true;
                                Invoke(nameof(HandleRetryUnloading), _checkTruckAvailabilityInterval);
                            }
                        }
                    }
                    else
                    {
                        _character.Unload();
                    }
                }

                _currentPointIndex++;
                DOVirtual.DelayedCall(currentPoint.Delay, MoveToNextPoint);
            });
    }

    private UnloadPoint FindNextAvailableUnloadPoint(UnloadPoint currentPoint = null)
    {
        foreach (UnloadPoint point in _unloadPoints)
        {
            if (point != currentPoint && point.TargetTruck != null)
            {
                TruckMover mover = point.TargetTruck.GetComponent<TruckMover>();
                bool truckMoving = mover != null && mover.IsMoving;

                bool canUnload = point.CanUnload(_character.gameObject);

                if (canUnload)
                {
                    return point;
                }
            }
        }

        return null;
    }
}