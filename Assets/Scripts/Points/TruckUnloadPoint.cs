using UnityEngine;

public class TruckUnloadPoint : MovePoint
{
    [SerializeField] private float _unloadDuration = 3.0f;
    [SerializeField] private Transform _truckStopPosition;
    
    public float UnloadDuration => _unloadDuration;
    public Transform StopPosition => _truckStopPosition ? _truckStopPosition : transform;
}