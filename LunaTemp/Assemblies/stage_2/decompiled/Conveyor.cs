using System.Collections;
using UnityEngine;

public class Conveyor : MonoBehaviour
{
	[SerializeField]
	private Animator canvasAnimator;

	private const string StateName = "Conveyor2";

	private const string StateName2 = "Conveyor3";

	private Animator animator;

	private void Start()
	{
		animator = GetComponent<Animator>();
		StartCoroutine(StartCanvasAnimationAfterDelay());
		StartCoroutine(StartAnimationAfterDelay(10f, "Conveyor2"));
		StartCoroutine(StartAnimationAfterDelay(35f, "Conveyor3"));
	}

	private IEnumerator StartAnimationAfterDelay(float delay, string name)
	{
		yield return new WaitForSeconds(delay);
		animator.Play(name);
		SimpleAudioManager.Instance?.PlayConveyorAnimationSound();
		StartCoroutine(StartCanvasAnimationAfterDelay());
	}

	private IEnumerator StartCanvasAnimationAfterDelay()
	{
		yield return new WaitForSeconds(1.5f);
		canvasAnimator.Play("Exclamation");
	}
}
