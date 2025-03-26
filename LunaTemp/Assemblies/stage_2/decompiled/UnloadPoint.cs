using UnityEngine;

public class UnloadPoint : MovePoint
{
	[SerializeField]
	private Truck _targetTruck;

	[SerializeField]
	private bool _allowForkliftToLoadHalfFullTrucks = false;

	public Truck TargetTruck => _targetTruck;

	public bool CanUnload()
	{
		if (_targetTruck == null)
		{
			return false;
		}
		TruckMover mover = _targetTruck.GetComponent<TruckMover>();
		bool truckMoving = mover != null && mover.IsMoving;
		bool truckAtUnloadPoint = _targetTruck.IsAtUnloadPoint;
		return _targetTruck.RemainingCapacity > 0 && !truckMoving && !truckAtUnloadPoint;
	}

	public bool CanUnload(GameObject character)
	{
		if (!CanUnload())
		{
			return false;
		}
		bool isChopper = character.GetComponent<Chopper>() != null;
		bool isForklift = character.GetComponent<Forklift>() != null;
		if (isChopper)
		{
			if (ChopperManager.Instance != null)
			{
				if (ChopperManager.Instance.IsTargetTruck(_targetTruck) || ChopperManager.Instance.GetTargetTruck() == _targetTruck)
				{
					return true;
				}
				if (ChopperManager.Instance.GetTargetTruck() == null)
				{
					return true;
				}
				return false;
			}
			return true;
		}
		if (isForklift)
		{
			if (_targetTruck.IsBeingLoadedByChopper)
			{
				return false;
			}
			if (!_allowForkliftToLoadHalfFullTrucks && _targetTruck.CurrentCargoCount > 0)
			{
				return false;
			}
		}
		return true;
	}
}
