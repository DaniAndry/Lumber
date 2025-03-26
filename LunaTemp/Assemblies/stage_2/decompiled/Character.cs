using System;
using System.Collections.Generic;
using UnityEngine;

public abstract class Character : MonoBehaviour
{
	[SerializeField]
	private List<GameObject> _cargo;

	private int _currentCargoIndex = 0;

	private bool _isFull = false;

	public bool IsFull => _isFull;

	public int CargoCount => _currentCargoIndex;

	public event Action OnCargoFull;

	public event Action OnCargoEmpty;

	private void OnTriggerEnter(Collider other)
	{
		if (!_isFull && other.TryGetComponent<Tree>(out var tree))
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
				this.OnCargoFull?.Invoke();
			}
		}
	}

	public int UnloadToTruck(Truck truck)
	{
		if (_currentCargoIndex == 0)
		{
			return 0;
		}
		int logsUnloaded = truck.LoadLogs(_currentCargoIndex, base.gameObject);
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
			this.OnCargoEmpty?.Invoke();
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
		this.OnCargoEmpty?.Invoke();
	}
}
