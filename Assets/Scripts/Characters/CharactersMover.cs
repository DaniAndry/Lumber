using DG.Tweening;
using UnityEngine;
using System.Collections;

public class CharactersMover : MonoBehaviour
{
    [SerializeField] private MovePoint[] _normalRoutePoints;
    [SerializeField] private UnloadPoint[] _unloadPoints;
    [SerializeField] private UnloadPoint _defaultUnloadPoint;
    [SerializeField] private float _checkTruckAvailabilityInterval = 1.0f;

    private int _currentPointIndex = 0;
    private float _initialRotationX;
    private float _initialRotationZ;
    private MovePoint[] _currentRoute;
    private bool _isUnloading = false;
    private bool _waitingForTruck = false;
    private bool _visitedDefaultPointBeforeUnload = false;
    private Character _character;

    private void Start()
    {
        _character = GetComponent<Character>();
        
        if (_character != null)
        {
            _character.OnCargoFull += HandleCargoFull;
            _character.OnCargoEmpty += HandleCargoEmpty;
        }
        
        _initialRotationX = transform.rotation.eulerAngles.x;
        _initialRotationZ = transform.rotation.eulerAngles.z;
        
        if (_normalRoutePoints != null && _normalRoutePoints.Length > 0)
        {
            _currentRoute = _normalRoutePoints;
        }

        MoveToNextPoint();

        InvokeRepeating(nameof(CheckForStuckState), 3.0f, 3.0f);
    }

    private void OnDestroy()
    {
        if (_character != null)
        {
            _character.OnCargoFull -= HandleCargoFull;
            _character.OnCargoEmpty -= HandleCargoEmpty;
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

        float moveDuration;

        if (_isUnloading && currentPoint is UnloadPoint && _visitedDefaultPointBeforeUnload)
        {
            float customSpeed = 5f;
            float distance = Vector3.Distance(transform.position, currentPoint.transform.position);
            moveDuration = distance / customSpeed;
        }
        else
        {
            moveDuration = currentPoint.MoveDuration;
        }

        Vector3 direction = targetPos - transform.position;
        direction.y = 0f;

        if (direction != Vector3.zero)
        {
            Quaternion targetRotation = Quaternion.LookRotation(direction);
            float yRotation = targetRotation.eulerAngles.y;
            Quaternion finalRotation = Quaternion.Euler(_initialRotationX, yRotation, _initialRotationZ);
            transform.DORotateQuaternion(finalRotation, 0.3f); 
        }

        bool isUnloadingOperation =
            _isUnloading && (currentPoint is UnloadPoint || currentPoint == _defaultUnloadPoint);

        if (isUnloadingOperation && Vector3.Distance(transform.position, targetPos) < 0.5f)
        {
            moveDuration = 0.3f; 
        }

        transform.DOMove(targetPos, moveDuration)
            .SetEase(Ease.InOutSine)
            .OnComplete(() => HandleArrivalAtPoint(currentPoint));
    }

    private void HandleArrivalAtPoint(MovePoint currentPoint)
    {
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

            _currentRoute = new MovePoint[] { _defaultUnloadPoint };
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

        _currentPointIndex++;

        DOVirtual.DelayedCall(0.05f, MoveToNextPoint);
    }

    private void CheckForStuckState()
    {
        if (_isUnloading && _character != null && _character.CargoCount > 0)
        {
            if (_waitingForTruck)
            {
                UnloadPoint availablePoint = FindNextAvailableUnloadPoint(null);
                if (availablePoint != null)
                {
                    _waitingForTruck = false;
                    _currentRoute = new MovePoint[] { availablePoint };
                    _currentPointIndex = 0;
                    transform.DOKill();
                    MoveToNextPoint();
                    return;
                }
            }


            if (IsAtDestination() && _currentRoute != null && _currentRoute.Length > 0 && 
                _currentPointIndex < _currentRoute.Length && _currentRoute[_currentPointIndex] is UnloadPoint)
            {
                UnloadPoint currentPoint = _currentRoute[_currentPointIndex] as UnloadPoint;
                UnloadPoint availablePoint = FindNextAvailableUnloadPoint(currentPoint);
                
                if (availablePoint != null)
                {
                    _currentRoute = new MovePoint[] { availablePoint };
                    _currentPointIndex = 0;
                    transform.DOKill();
                    MoveToNextPoint();
                    return;
                }
            }
            
            if (!_visitedDefaultPointBeforeUnload)
            {
                bool movingToDefaultPoint = false;
                if (_currentRoute != null && _currentRoute.Length > 0 && _currentPointIndex < _currentRoute.Length)
                {
                    movingToDefaultPoint = _currentRoute[_currentPointIndex] == _defaultUnloadPoint;
                }
                
                if (movingToDefaultPoint)
                {
                    return;
                }
            }
            
            UnloadPoint anyAvailablePoint = FindNextAvailableUnloadPoint(null);
            if (anyAvailablePoint != null && (!IsAtDestination() || _waitingForTruck))
            {
                _waitingForTruck = false;
                _currentRoute = new MovePoint[] { anyAvailablePoint };
                _currentPointIndex = 0;
                transform.DOKill();
                MoveToNextPoint();
            }
        }
    }
    
    private bool IsAtDestination()
    {
        if (_currentRoute == null || _currentRoute.Length == 0 || _currentPointIndex >= _currentRoute.Length)
            return false;
        
        MovePoint currentTarget = _currentRoute[_currentPointIndex];
        return Vector3.Distance(transform.position, currentTarget.transform.position) < 0.2f;
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