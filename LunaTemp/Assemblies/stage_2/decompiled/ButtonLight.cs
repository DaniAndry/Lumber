using System.Collections;
using UnityEngine;

public class ButtonLight : MonoBehaviour
{
	private Material _material;

	private Color _originalColor;

	private Color _flashColor = Color.yellow;

	[SerializeField]
	private float flashSpeed = 0.3f;

	[SerializeField]
	private float pauseBetweenFlashes = 0.1f;

	[SerializeField]
	private int flashCount = 3;

	private void Start()
	{
		if (TryGetComponent<Renderer>(out var renderer))
		{
			_material = renderer.material;
			_originalColor = _material.color;
			StartCoroutine(FlashColorRoutine());
		}
	}

	private IEnumerator FlashColorRoutine()
	{
		for (int i = 0; i < flashCount; i++)
		{
			float t2 = 0f;
			while (t2 < 1f)
			{
				t2 += Time.deltaTime / flashSpeed;
				_material.color = Color.Lerp(_originalColor, _flashColor, t2);
				yield return null;
			}
			yield return new WaitForSeconds(pauseBetweenFlashes);
			t2 = 0f;
			while (t2 < 1f)
			{
				t2 += Time.deltaTime / flashSpeed;
				_material.color = Color.Lerp(_flashColor, _originalColor, t2);
				yield return null;
			}
			yield return new WaitForSeconds(pauseBetweenFlashes);
		}
		SimpleAudioManager.Instance?.PlayButtonClickSound();
	}
}
