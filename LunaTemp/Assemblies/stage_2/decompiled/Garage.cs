using UnityEngine;

public class Garage : MonoBehaviour
{
	[SerializeField]
	private GameObject chopper;

	private void OnEnable()
	{
		Invoke("OnChoper", 1f);
	}

	private void OnChoper()
	{
		chopper.gameObject.SetActive(true);
	}
}
