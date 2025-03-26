using System;
using System.Collections;
using UnityEngine;

public class Tree : MonoBehaviour
{
    private Material _material;
    private Color _originalColor;
    private Color _flashColor = Color.red;

    [SerializeField] private float flashSpeed = 0.3f;            
    [SerializeField] private float pauseBetweenFlashes = 0.1f;   
    [SerializeField] private int flashCount = 3;

    private void Start()
    {
        if (TryGetComponent<Renderer>(out Renderer renderer))
        {
            _material = renderer.material;
            _originalColor = _material.color;
            StartCoroutine(FlashColorRoutine());
        }
    }

    private void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.GetComponent<Wall>() != null)
        {
            transform.SetParent(null);
        }
    }

    private IEnumerator FlashColorRoutine()
    {
        yield return new WaitForSeconds(3f); 

        for (int i = 0; i < flashCount; i++)
        {
            float t = 0f;
            while (t < 1f)
            {
                t += Time.deltaTime / flashSpeed;
                _material.color = Color.Lerp(_originalColor, _flashColor, t);
                yield return null;
            }

            yield return new WaitForSeconds(pauseBetweenFlashes);

            t = 0f;
            while (t < 1f)
            {
                t += Time.deltaTime / flashSpeed;
                _material.color = Color.Lerp(_flashColor, _originalColor, t);
                yield return null;
            }

            yield return new WaitForSeconds(pauseBetweenFlashes);
        }
    }

    public void Take()
    {
        Destroy(gameObject);
    }
}