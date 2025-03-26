using UnityEngine;
using UnityEngine.Serialization;

public class Garage : MonoBehaviour
{
    [SerializeField] private GameObject chopper;

    private void OnEnable()
    {
        Invoke(nameof(OnChoper), 1f);
    }

    private void OnChoper()
    {
        chopper.gameObject.SetActive(true);
    }
}