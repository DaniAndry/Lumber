using UnityEngine;

public class UnloadPoint : MovePoint
{
    [SerializeField] private Truck _targetTruck;
    [SerializeField] protected bool _allowForkliftToLoadHalfFullTrucks = false;

    public Truck TargetTruck => _targetTruck;

    public bool CanUnload()
    {
        if (_targetTruck == null || !_targetTruck.IsAtUnloadPoint)
        {
            return false;
        }

        TruckMover mover = _targetTruck.GetComponent<TruckMover>();
        bool truckMoving = mover != null && mover.IsMoving;
        
        return _targetTruck.RemainingCapacity > 0 && !truckMoving;
    }
    
    public bool CanUnload(GameObject character)
    {
        if (_targetTruck == null)
        {
            return false;
        }

        TruckMover mover = _targetTruck.GetComponent<TruckMover>();
        bool truckMoving = mover != null && mover.IsMoving;
        
        bool canUnload = _targetTruck.RemainingCapacity > 0 && !truckMoving;
        
        bool isForklift = character.GetComponent<Forklift>() != null;
        bool isChopper = character.GetComponent<Chopper>() != null;
        
        if (isForklift)
        {
            if (_targetTruck.CurrentCargoCount > 0 && !_allowForkliftToLoadHalfFullTrucks)
            {
                return false;
            }
        }
        
        return canUnload;
    }
}