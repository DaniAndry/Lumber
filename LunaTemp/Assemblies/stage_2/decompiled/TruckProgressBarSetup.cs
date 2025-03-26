using UnityEngine;
using UnityEngine.UI;

public class TruckProgressBarSetup : MonoBehaviour
{
	[SerializeField]
	private Vector3 _offsetPosition = new Vector3(0f, 2.5f, 0f);

	private void Start()
	{
		Truck[] trucks = Object.FindObjectsOfType<Truck>();
		Truck[] array = trucks;
		foreach (Truck truck in array)
		{
			AssignProgressBar(truck);
		}
	}

	private void AssignProgressBar(Truck truck)
	{
		Image progressBarImage = truck.GetComponentInChildren<Image>();
		if (progressBarImage != null)
		{
			truck.progressBarImage = progressBarImage;
			progressBarImage.transform.localPosition = _offsetPosition;
		}
		else
		{
			Debug.LogWarning("Прогресс бар не найден для грузовика " + truck.name + ".");
		}
	}
}
