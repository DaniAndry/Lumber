using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Truck : MonoBehaviour
{
    public Image progressBarImage;
    [SerializeField] private List<GameObject> _cargoSlots;
    [SerializeField] private int _maxCapacity = 5;
    
    [Header("Audio")]
    [SerializeField] private string _logLoadSoundName = "LogLoaded";
    [SerializeField] private string _truckFullSoundName = "TruckFull";
    [SerializeField] private bool _playCargoSounds = true;

    private int _currentCargoCount = 0;
    private bool _isBeingLoadedByChopper = false;
    private GameObject _firstChopper = null;
    private GameObject _secondChopper = null;
    private bool _isAtUnloadPoint = false;

    public bool IsFull => _currentCargoCount >= _maxCapacity;
    public int RemainingCapacity => _maxCapacity - _currentCargoCount;
    public int MaxCapacity => _maxCapacity;
    public bool IsBeingLoadedByChopper => _isBeingLoadedByChopper;
    public int CurrentCargoCount => _currentCargoCount;
    public bool IsAtUnloadPoint { get; set; } // Добавляем set для возможности изменения

    public event Action OnTruckFull;
    public event Action OnCargoChanged;

    private void Start()
    {
        int halfCapacity = Mathf.FloorToInt(_maxCapacity / 2f);
        LoadLogs(halfCapacity);
        UpdateProgressBar();
    }

    public bool LoadLog()
    {
        if (IsFull)
        {
            return false;
        }

        if (_currentCargoCount < _cargoSlots.Count)
        {
            _cargoSlots[_currentCargoCount].SetActive(true);
        }

        _currentCargoCount++;

        OnCargoChanged?.Invoke();
        UpdateProgressBar();
        
        // Звуковые эффекты временно отключены
        //if (_playCargoSounds && AudioManager.Instance != null)
        //{
        //    AudioManager.Instance.PlaySoundAtPosition(_logLoadSoundName, transform.position);
        //}
        SimpleAudioManager.Instance?.PlayLogLoadSound();

        if (IsFull)
        {
            OnTruckFull?.Invoke();
            
            // Звуковые эффекты временно отключены
            //if (_playCargoSounds && AudioManager.Instance != null)
            //{
            //    AudioManager.Instance.PlaySoundAtPosition(_truckFullSoundName, transform.position);
            //}
        }

        return true;
    }

    public int LoadLogs(int count)
    {
        int logsLoaded = 0;

        for (int i = 0; i < count; i++)
        {
            if (LoadLog())
                logsLoaded++;
            else
                break;
        }

        return logsLoaded;
    }

    public int LoadLogs(int count, GameObject loader)
    {
        bool isChopper = loader.GetComponent<Chopper>() != null;
        bool isForklift = loader.GetComponent<Forklift>() != null;

        if (isForklift && _isBeingLoadedByChopper)
        {
            return 0;
        }

        if (isChopper)
        {
            if (_firstChopper == null)
            {
                _firstChopper = loader;
                _isBeingLoadedByChopper = true;
            }

            else if (_secondChopper == null && loader != _firstChopper)
            {
                _secondChopper = loader;
            }

            else if (loader != _firstChopper && loader != _secondChopper)
            {
                return 0;
            }
        }

        int logsLoaded = LoadLogs(count);


        if (IsFull)
        {
            ResetChoppers();
        }

        return logsLoaded;
    }

    private void ResetChoppers()
    {
        _firstChopper = null;
        _secondChopper = null;
        _isBeingLoadedByChopper = false;

        if (ChopperManager.Instance != null)
        {
            ChopperManager.Instance.ResetTargetTruck();
        }
    }

    public void Clear()
    {
        foreach (GameObject slot in _cargoSlots)
        {
            slot.SetActive(false);
        }

        _currentCargoCount = 0;
        ResetChoppers();
        UpdateProgressBar();

        if (TruckManager.Instance != null)
        {
            TruckManager.Instance.RemoveFullTruck(this);
        }
    }

    public void SetAtUnloadPoint(bool isAtUnloadPoint)
    {
        IsAtUnloadPoint = isAtUnloadPoint;
    }

    private void OnEnable()
    {
        OnTruckFull += NotifyTruckManagerOnFull;
    }

    private void OnDisable()
    {
        OnTruckFull -= NotifyTruckManagerOnFull;
    }

    private void NotifyTruckManagerOnFull()
    {
        if (TruckManager.Instance != null)
        {
            TruckManager.Instance.AddFullTruck(this);
        }
    }

    private void UpdateProgressBar()
    {
        if (progressBarImage != null)
        {
            float fillAmount = (float)_currentCargoCount / _maxCapacity;
            progressBarImage.fillAmount = fillAmount;
        }
    }
}