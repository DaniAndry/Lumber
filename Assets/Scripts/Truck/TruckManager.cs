using System.Collections.Generic;
using UnityEngine;
using System;

public class TruckManager : MonoBehaviour
{
    public static TruckManager Instance { get; private set; }

    [SerializeField] private List<Truck> _trucks;
    [SerializeField] private TruckUnloadPoint _unloadPoint;
    [SerializeField] private bool _sendAllTrucksWhenAllFull = false;

    private List<Truck> _fullTrucks = new List<Truck>();
    private bool _areAllTrucksFull = false;

    public List<Truck> Trucks => _trucks;
    public System.Action OnAllTrucksFull;
    public System.Action<Truck> OnTruckReadyToSend;

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
        foreach (Truck truck in _trucks)
        {
            if (truck.GetComponent<TruckMover>() == null)
            {
                Debug.LogWarning($"Truck {truck.name} does not have a TruckMover component. Auto-unloading will not work for this truck.");
            }
            
            // Подписываемся на событие заполнения грузовика
            truck.OnTruckFull += () => HandleTruckFull(truck);
        }
    }

    private void OnDestroy()
    {
        foreach (Truck truck in _trucks)
        {
            truck.OnTruckFull -= () => HandleTruckFull(truck);
        }
    }

    // Обработчик события заполнения грузовика
    private void HandleTruckFull(Truck truck)
    {
        if (!_fullTrucks.Contains(truck))
        {
            _fullTrucks.Add(truck);
        }
        
        // Проверяем, все ли грузовики заполнены
        if (_sendAllTrucksWhenAllFull)
        {
            CheckAndSendTrucks();
        }
        else
        {
            // Если не нужно ждать заполнения всех грузовиков, отправляем этот
            OnTruckReadyToSend?.Invoke(truck);
        }
    }
    
    // Проверяет, все ли грузовики заполнены, и если да, отправляет их
    private void CheckAndSendTrucks()
    {
        if (_fullTrucks.Count >= 3) // Предполагаем, что у нас 3 грузовика
        {
            _areAllTrucksFull = true;
            OnAllTrucksFull?.Invoke();
            
            // Отправляем все заполненные грузовики
            foreach (Truck truck in _fullTrucks)
            {
                OnTruckReadyToSend?.Invoke(truck);
            }
            
            // Очищаем список заполненных грузовиков
            _fullTrucks.Clear();
            _areAllTrucksFull = false;
        }
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
            return _trucks[index];

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
    
    // Добавляет грузовик в список заполненных и проверяет, можно ли отправить все грузовики
    public void AddFullTruck(Truck truck)
    {
        if (!_fullTrucks.Contains(truck))
        {
            _fullTrucks.Add(truck);
            CheckAndSendTrucks();
        }
    }
    
    // Удаляет грузовик из списка заполненных
    public void RemoveFullTruck(Truck truck)
    {
        if (_fullTrucks.Contains(truck))
        {
            _fullTrucks.Remove(truck);
        }
    }
}