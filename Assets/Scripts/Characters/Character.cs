using System;
using System.Collections.Generic;
using UnityEngine;

public abstract class Character : MonoBehaviour
{
    [SerializeField] private List<GameObject> _cargo;
    
    private int _currentCargoIndex = 0;
    private bool _isFull = false;
    
    public event Action OnCargoFull;
    public event Action OnCargoEmpty;
    
    public bool IsFull => _isFull;
    public int CargoCount => _currentCargoIndex;
    
    private void OnTriggerEnter(Collider other)
    {
        if (_isFull) return;
        
        if (other.TryGetComponent(out Tree tree))
        {
            tree.Take();
            TakeTree(tree);
        }
    }
    
    private void TakeTree(Tree tree)
    {
        if (_currentCargoIndex < _cargo.Count)
        {
            _cargo[_currentCargoIndex].SetActive(true);
            _currentCargoIndex++;
            
            if (_currentCargoIndex >= _cargo.Count)
            {
                _isFull = true;
                OnCargoFull?.Invoke();
            }
        }
    }
    
    public int UnloadToTruck(Truck truck)
    {
        if (_currentCargoIndex == 0)
            return 0;
            
        int logsUnloaded = truck.LoadLogs(_currentCargoIndex, gameObject);
        
        for (int i = 0; i < logsUnloaded; i++)
        {
            if (_currentCargoIndex > 0)
            {
                _currentCargoIndex--;
                _cargo[_currentCargoIndex].SetActive(false);
            }
        }
        
        _isFull = _currentCargoIndex >= _cargo.Count;
        
        if (_currentCargoIndex == 0)
        {
            OnCargoEmpty?.Invoke();
        }
        
        return logsUnloaded;
    }
    
    public void Unload()
    {
        foreach (GameObject go in _cargo)
        {
            go.SetActive(false);
        }
        _currentCargoIndex = 0;
        _isFull = false;
        OnCargoEmpty?.Invoke();
    }
}