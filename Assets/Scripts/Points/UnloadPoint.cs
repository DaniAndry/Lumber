using UnityEngine;

public class UnloadPoint : MovePoint
{
    [SerializeField] private Truck _targetTruck;
    [SerializeField] private bool _allowForkliftToLoadHalfFullTrucks = false; // Новый параметр

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
    
    // Проверка доступности точки разгрузки для конкретного персонажа
    public bool CanUnload(GameObject character)
    {
        if (_targetTruck == null)
        {
            Debug.Log($"[{character.name}] Точка разгрузки {name} не имеет целевого грузовика");
            return false;
        }

        TruckMover mover = _targetTruck.GetComponent<TruckMover>();
        bool truckMoving = mover != null && mover.IsMoving;
        
        // Грузовик должен быть НЕ в движении и иметь место для груза
        bool canUnload = _targetTruck.RemainingCapacity > 0 && !truckMoving;
        
        bool isForklift = character.GetComponent<Forklift>() != null;
        bool isChopper = character.GetComponent<Chopper>() != null;
        
        // Специальные правила для Forklift
        if (isForklift)
        {
            // Разрешаем погрузчикам загружать только пустые или частично загруженные грузовики,
            // если это разрешено настройкой
            if (_targetTruck.CurrentCargoCount > 0 && !_allowForkliftToLoadHalfFullTrucks)
            {
                Debug.Log($"[{character.name}] Грузовик {_targetTruck.name} уже частично загружен, погрузчик не может разгрузиться");
                return false;
            }
        }
        
        // Убираем специальные правила для Chopper, чтобы они могли разгружаться на любой доступной точке
        // Специальные правила для Chopper
        /*
        if (isChopper)
        {
            // Проверяем через ChopperManager, является ли этот грузовик целевым
            if (ChopperManager.Instance != null)
            {
                if (!(ChopperManager.Instance.IsTargetTruck(_targetTruck) || 
                     ChopperManager.Instance.GetTargetTruck() == _targetTruck))
                {
                    Debug.Log($"[{character.name}] Грузовик {_targetTruck.name} не является целевым для Chopper");
                    return false;
                }
            }
        }
        */
        
        // Отладочное сообщение
        if (canUnload)
        {
            Debug.Log($"[{character.name}] Может разгрузиться в точке {name}, грузовик {_targetTruck.name}, оставшаяся емкость: {_targetTruck.RemainingCapacity}");
        }
        else
        {
            Debug.Log($"[{character.name}] НЕ может разгрузиться в точке {name}, грузовик {_targetTruck.name}, в движении: {truckMoving}, оставшаяся емкость: {_targetTruck.RemainingCapacity}");
        }
        
        return canUnload;
    }
}