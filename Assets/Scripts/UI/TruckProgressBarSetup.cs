using UnityEngine;
using UnityEngine.UI;

public class TruckProgressBarSetup : MonoBehaviour
{
    [SerializeField] private Vector3 _offsetPosition = new Vector3(0, 2.5f, 0); // Позиция над грузовиком
    
    private void Start()
    {
        Truck[] trucks = FindObjectsOfType<Truck>();
        
        foreach (Truck truck in trucks)
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
            Debug.LogWarning($"Прогресс бар не найден для грузовика {truck.name}.");
        }
    }
}
