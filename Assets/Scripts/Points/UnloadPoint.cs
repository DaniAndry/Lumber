using UnityEngine;

public class UnloadPoint : MovePoint
{
    [SerializeField] private Truck _targetTruck;
    [SerializeField] private bool _allowForkliftToLoadHalfFullTrucks = false; // Новый параметр

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
        
        // Запрещаем разгрузку, если грузовик в движении или находится на точке разгрузки
        bool canUnload = _targetTruck.RemainingCapacity > 0 && !truckMoving && !truckAtUnloadPoint;
        
        return canUnload;
    }
    
    // Проверка доступности точки разгрузки для конкретного персонажа
    public bool CanUnload(GameObject character)
    {
        if (!CanUnload())
        {
            return false;
        }
        
        bool isChopper = character.GetComponent<Chopper>() != null;
        bool isForklift = character.GetComponent<Forklift>() != null;
        
        // Если это Chopper, проверяем, является ли грузовик целевым для Chopper'ов
        if (isChopper)
        {
            // Проверяем через ChopperManager, является ли этот грузовик целевым
            if (ChopperManager.Instance != null)
            {
                // Если целевой грузовик уже выбран, проверяем, является ли текущий грузовик целевым
                if (ChopperManager.Instance.IsTargetTruck(_targetTruck) || 
                    ChopperManager.Instance.GetTargetTruck() == _targetTruck)
                {
                    return true;
                }
                
                // Если не смогли найти грузовик через ChopperManager, разрешаем использовать любой
                if (ChopperManager.Instance.GetTargetTruck() == null)
                {
                    return true;
                }
                
                return false;
            }
            // Если ChopperManager не доступен, разрешаем использовать любой грузовик
            return true;
        }
        
        // Если это Forklift, проверяем не загружается ли грузовик Chopper'ами
        if (isForklift)
        {
            // Проверяем, загружается ли грузовик Chopper'ами
            if (_targetTruck.IsBeingLoadedByChopper)
            {
                return false;
            }
            
            // Проверяем, наполовину ли заполнен грузовик
            if (!_allowForkliftToLoadHalfFullTrucks && _targetTruck.CurrentCargoCount > 0)
            {
                return false;
            }
        }
        
        return true;
    }
}