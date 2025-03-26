using UnityEngine;

public class Build : MonoBehaviour
{
    [SerializeField] private GameObject building;

    public void SpawnBuild()
    {
        building.SetActive(true);
    }
}
