using System.Collections.Generic;
using UnityEngine;

public class ChopperManager : MonoBehaviour
{
    public static ChopperManager Instance { get; private set; }

    [SerializeField] private List<Chopper> _choppers;
    
    private Truck _targetTruck;
    private bool _isTargetTruckSelected;

    private void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
        }
        else
        {
            Destroy(gameObject);
        }
    }

    public void ResetTargetTruck()
    {
        _isTargetTruckSelected = false;
        _targetTruck = null;
    }

    public Truck GetTargetTruck()
    {
        if (_isTargetTruckSelected && _targetTruck != null && !_targetTruck.IsFull)
        {
            return _targetTruck;
        }

        Truck availableTruck = TruckManager.Instance?.GetAvailableTruck();
        
        if (availableTruck != null)
        {
            _targetTruck = availableTruck;
            _isTargetTruckSelected = true;
            return availableTruck;
        }
        
        return null;
    }

    public bool IsTargetTruck(Truck truck)
    {
        return _isTargetTruckSelected && _targetTruck == truck;
    }
}
