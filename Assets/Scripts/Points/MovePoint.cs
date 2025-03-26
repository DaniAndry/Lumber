using UnityEngine;

public abstract class MovePoint : MonoBehaviour
{
    [SerializeField] private float delay;
    [SerializeField] private float moveDuration;
    public float Delay => delay;
    public float MoveDuration => moveDuration;
}