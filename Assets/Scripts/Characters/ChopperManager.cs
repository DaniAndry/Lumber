using System.Collections.Generic;
using UnityEngine;

public class ChopperManager : MonoBehaviour
{
    public static ChopperManager Instance { get; private set; }
    
    [SerializeField] private List<Chopper> _choppers = new List<Chopper>();
    
    private Truck _targetTruck;
    private bool _isTargetTruckSelected = false;
    
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
    
    private void Start()
    {
        if (_choppers.Count == 0)
        {
            Chopper[] foundChoppers = FindObjectsOfType<Chopper>();
            _choppers.AddRange(foundChoppers);
        }
    }
    
    public Truck GetTargetTruck()
    {
        if (_isTargetTruckSelected && _targetTruck != null && !_targetTruck.IsFull)
        {
            return _targetTruck;
        }
        
        _targetTruck = FindAvailableTruck();
        _isTargetTruckSelected = _targetTruck != null;
        
        return _targetTruck;
    }
    
    private Truck FindAvailableTruck()
    {
        if (TruckManager.Instance != null)
        {
            return TruckManager.Instance.GetAvailableTruck();
        }
        
        Truck[] trucks = FindObjectsOfType<Truck>();
        foreach (Truck truck in trucks)
        {
            TruckMover mover = truck.GetComponent<TruckMover>();
            bool isMoving = mover != null && mover.IsMoving;
            
            if (truck.RemainingCapacity > 0 && !isMoving)
            {
                return truck;
            }
        }
        
        return null;
    }
    
    public void ResetTargetTruck()
    {
        _targetTruck = null;
        _isTargetTruckSelected = false;
    }
    
    public bool IsTargetTruck(Truck truck)
    {
        return _isTargetTruckSelected && _targetTruck == truck;
    }
}
