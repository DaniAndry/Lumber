using System;
using DG.Tweening;
using UnityEngine;

public class CharactersMover : MonoBehaviour
{
	[Header("Точки маршрута")]
	[SerializeField]
	private MovePoint[] _normalRoutePoints;

	[SerializeField]
	private UnloadPoint[] _unloadPoints;

	[SerializeField]
	private UnloadPoint _defaultUnloadPoint;

	private int _currentPointIndex = 0;

	private float _initialRotationX;

	private float _initialRotationZ;

	private Character _character;

	private MovePoint[] _currentRoute;

	private bool _isUnloading = false;

	private bool _waitingForTruck = false;

	private float _checkTruckAvailabilityInterval = 2f;

	private void Start()
	{
		_character = GetComponent<Character>();
		_initialRotationX = base.transform.rotation.eulerAngles.x;
		_initialRotationZ = base.transform.rotation.eulerAngles.z;
		_currentRoute = _normalRoutePoints;
		_character.OnCargoFull += HandleCargoFull;
		_character.OnCargoEmpty += HandleCargoEmpty;
		if (TruckManager.Instance != null)
		{
			TruckManager instance = TruckManager.Instance;
			instance.OnAllTrucksFull = (Action)Delegate.Combine(instance.OnAllTrucksFull, new Action(HandleAllTrucksFull));
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
			TruckManager instance = TruckManager.Instance;
			instance.OnAllTrucksFull = (Action)Delegate.Remove(instance.OnAllTrucksFull, new Action(HandleAllTrucksFull));
		}
		base.transform.DOKill();
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
			base.transform.DOKill();
			MoveToNextPoint();
		}
	}

	private void HandleRetryUnloading()
	{
		if (!_waitingForTruck)
		{
			return;
		}
		UnloadPoint targetPoint = FindNextAvailableUnloadPoint();
		if (targetPoint != null)
		{
			_waitingForTruck = false;
			_currentRoute = new MovePoint[1] { targetPoint };
			_currentPointIndex = 0;
			base.transform.DOKill();
			MoveToNextPoint();
		}
		else
		{
			if (ChopperManager.Instance != null && _character is Chopper && ChopperManager.Instance.GetTargetTruck() == null)
			{
				ChopperManager.Instance.ResetTargetTruck();
			}
			CancelInvoke("HandleRetryUnloading");
			Invoke("HandleRetryUnloading", _checkTruckAvailabilityInterval);
		}
	}

	private void HandleCargoFull()
	{
		if (_isUnloading)
		{
			return;
		}
		_isUnloading = true;
		if (_defaultUnloadPoint != null)
		{
			_currentRoute = new MovePoint[1] { _defaultUnloadPoint };
			_currentPointIndex = 0;
			base.transform.DOKill();
			MoveToNextPoint();
			return;
		}
		UnloadPoint targetPoint = FindNextAvailableUnloadPoint();
		if (targetPoint != null)
		{
			_currentRoute = new MovePoint[1] { targetPoint };
			_currentPointIndex = 0;
			base.transform.DOKill();
			MoveToNextPoint();
		}
		else
		{
			_waitingForTruck = true;
			CancelInvoke("HandleRetryUnloading");
			Invoke("HandleRetryUnloading", _checkTruckAvailabilityInterval);
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
		UnloadPoint[] unloadPoints = _unloadPoints;
		foreach (UnloadPoint point in unloadPoints)
		{
			if (point.TargetTruck == null)
			{
				continue;
			}
			TruckMover mover = point.TargetTruck.GetComponent<TruckMover>();
			bool truckMoving = mover != null && mover.IsMoving;
			if (point.CanUnload(_character.gameObject))
			{
				float distance = Vector3.Distance(base.transform.position, point.transform.position);
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
		Vector3 lookDirection = targetPos - base.transform.position;
		lookDirection.y = 0f;
		if (lookDirection != Vector3.zero)
		{
			float yRotation = Quaternion.LookRotation(lookDirection).eulerAngles.y;
			Quaternion finalRotation = Quaternion.Euler(_initialRotationX, yRotation, _initialRotationZ);
			base.transform.DORotateQuaternion(finalRotation, 0.5f);
		}
		base.transform.DOMove(targetPos, moveDuration).SetEase(Ease.InOutSine).OnComplete(delegate
		{
			if (currentPoint is UnloadPoint unloadPoint)
			{
				if (unloadPoint.TargetTruck != null)
				{
					bool isFull = unloadPoint.TargetTruck.IsFull;
					if (_character.UnloadToTruck(unloadPoint.TargetTruck) == 0 && _character.CargoCount > 0)
					{
						UnloadPoint unloadPoint2 = FindNextAvailableUnloadPoint(unloadPoint);
						if (unloadPoint2 != null && unloadPoint2 != unloadPoint)
						{
							_currentRoute = new MovePoint[1] { unloadPoint2 };
							_currentPointIndex = -1;
						}
						else
						{
							_isUnloading = false;
							_currentRoute = _normalRoutePoints;
							_currentPointIndex = 0;
							_waitingForTruck = true;
							Invoke("HandleRetryUnloading", _checkTruckAvailabilityInterval);
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
		UnloadPoint[] unloadPoints = _unloadPoints;
		foreach (UnloadPoint point in unloadPoints)
		{
			if (point != currentPoint && point.TargetTruck != null)
			{
				TruckMover mover = point.TargetTruck.GetComponent<TruckMover>();
				bool truckMoving = mover != null && mover.IsMoving;
				if (point.CanUnload(_character.gameObject))
				{
					return point;
				}
			}
		}
		return null;
	}
}
