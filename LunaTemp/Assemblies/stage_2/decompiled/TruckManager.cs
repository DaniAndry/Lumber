using System;
using System.Collections.Generic;
using UnityEngine;

public class TruckManager : MonoBehaviour
{
	[SerializeField]
	private List<Truck> _trucks;

	[SerializeField]
	private TruckUnloadPoint _unloadPoint;

	[SerializeField]
	private bool _sendAllTrucksWhenAllFull = false;

	private List<Truck> _fullTrucks = new List<Truck>();

	private bool _areAllTrucksFull = false;

	public Action OnAllTrucksFull;

	public Action<Truck> OnTruckReadyToSend;

	public static TruckManager Instance { get; private set; }

	public List<Truck> Trucks => _trucks;

	private void Awake()
	{
		if (Instance == null)
		{
			Instance = this;
		}
		else
		{
			UnityEngine.Object.Destroy(base.gameObject);
		}
	}

	private void Start()
	{
		foreach (Truck truck in _trucks)
		{
			if (truck.GetComponent<TruckMover>() == null)
			{
				Debug.LogWarning("Truck " + truck.name + " does not have a TruckMover component. Auto-unloading will not work for this truck.");
			}
			truck.OnTruckFull += delegate
			{
				HandleTruckFull(truck);
			};
		}
	}

	private void OnDestroy()
	{
		foreach (Truck truck in _trucks)
		{
			truck.OnTruckFull -= delegate
			{
				HandleTruckFull(truck);
			};
		}
	}

	private void HandleTruckFull(Truck truck)
	{
		if (!_fullTrucks.Contains(truck))
		{
			_fullTrucks.Add(truck);
		}
		if (_sendAllTrucksWhenAllFull)
		{
			CheckAndSendTrucks();
		}
		else
		{
			OnTruckReadyToSend?.Invoke(truck);
		}
	}

	private void CheckAndSendTrucks()
	{
		if (_fullTrucks.Count < 3)
		{
			return;
		}
		_areAllTrucksFull = true;
		OnAllTrucksFull?.Invoke();
		foreach (Truck truck in _fullTrucks)
		{
			OnTruckReadyToSend?.Invoke(truck);
		}
		_fullTrucks.Clear();
		_areAllTrucksFull = false;
	}

	public Truck GetAvailableTruck()
	{
		foreach (Truck truck in _trucks)
		{
			TruckMover mover = truck.GetComponent<TruckMover>();
			bool isMoving = mover != null && mover.IsMoving;
			if (truck.RemainingCapacity > 0 && !isMoving)
			{
				return truck;
			}
		}
		OnAllTrucksFull?.Invoke();
		return null;
	}

	public Truck GetTruckByIndex(int index)
	{
		if (index >= 0 && index < _trucks.Count)
		{
			return _trucks[index];
		}
		return null;
	}

	public List<Truck> GetAllTrucks()
	{
		return _trucks;
	}

	public bool AreAllTrucksFull()
	{
		return _areAllTrucksFull;
	}

	public void AddFullTruck(Truck truck)
	{
		if (!_fullTrucks.Contains(truck))
		{
			_fullTrucks.Add(truck);
			CheckAndSendTrucks();
		}
	}

	public void RemoveFullTruck(Truck truck)
	{
		if (_fullTrucks.Contains(truck))
		{
			_fullTrucks.Remove(truck);
		}
	}
}
