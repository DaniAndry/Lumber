using System;
using UnityEngine;

[RequireComponent(typeof(Camera))]
public class AdaptiveCameraPosition : MonoBehaviour
{
	[Serializable]
	public class CameraSettings
	{
		public Vector3 position;

		public Vector3 rotation;

		public float orthographicSize = 5f;

		public float fieldOfView = 60f;
	}

	[Header("Настройки ориентации")]
	[Tooltip("Настройки камеры для портретного режима")]
	public CameraSettings portraitSettings;

	[Tooltip("Настройки камеры для горизонтального режима")]
	public CameraSettings landscapeSettings;

	[Header("Дополнительные настройки")]
	[Tooltip("Скорость перемещения камеры при изменении ориентации")]
	public float transitionSpeed = 2f;

	[Tooltip("Порог соотношения сторон для определения ориентации (portrait < threshold < landscape)")]
	public float aspectRatioThreshold = 1f;

	[Tooltip("Включить режим отладки")]
	public bool debugMode = false;

	private Camera _camera;

	private bool _isPortrait = false;

	private Vector3 _targetPosition;

	private Quaternion _targetRotation;

	private float _targetOrthoSize;

	private float _targetFOV;

	private bool _isTransitioning = false;

	private ScreenOrientation _lastOrientation;

	private void Awake()
	{
		_camera = GetComponent<Camera>();
		_lastOrientation = Screen.orientation;
		UpdateCameraMode(GetIsPortrait());
	}

	private void Update()
	{
		bool currentIsPortrait = GetIsPortrait();
		if (currentIsPortrait != _isPortrait || Screen.orientation != _lastOrientation)
		{
			if (debugMode)
			{
				Debug.Log("Ориентация изменилась: " + (currentIsPortrait ? "портрет" : "ландшафт") + ", " + $"соотношение сторон: {(float)Screen.width / (float)Screen.height}");
			}
			UpdateCameraMode(currentIsPortrait);
			_lastOrientation = Screen.orientation;
		}
		if (!_isTransitioning)
		{
			return;
		}
		base.transform.position = Vector3.Lerp(base.transform.position, _targetPosition, Time.deltaTime * transitionSpeed);
		base.transform.rotation = Quaternion.Slerp(base.transform.rotation, _targetRotation, Time.deltaTime * transitionSpeed);
		if (_camera.orthographic)
		{
			_camera.orthographicSize = Mathf.Lerp(_camera.orthographicSize, _targetOrthoSize, Time.deltaTime * transitionSpeed);
		}
		else
		{
			_camera.fieldOfView = Mathf.Lerp(_camera.fieldOfView, _targetFOV, Time.deltaTime * transitionSpeed);
		}
		if (!(Vector3.Distance(base.transform.position, _targetPosition) < 0.01f) || !(Quaternion.Angle(base.transform.rotation, _targetRotation) < 0.1f))
		{
			return;
		}
		if (_camera.orthographic)
		{
			if (Mathf.Abs(_camera.orthographicSize - _targetOrthoSize) < 0.01f)
			{
				_isTransitioning = false;
			}
		}
		else if (Mathf.Abs(_camera.fieldOfView - _targetFOV) < 0.1f)
		{
			_isTransitioning = false;
		}
	}

	private bool GetIsPortrait()
	{
		float aspectRatio = (float)Screen.width / (float)Screen.height;
		return aspectRatio < aspectRatioThreshold;
	}

	private void UpdateCameraMode(bool isPortrait)
	{
		_isPortrait = isPortrait;
		CameraSettings settings = (isPortrait ? portraitSettings : landscapeSettings);
		_targetPosition = settings.position;
		_targetRotation = Quaternion.Euler(settings.rotation);
		_targetOrthoSize = settings.orthographicSize;
		_targetFOV = settings.fieldOfView;
		_isTransitioning = true;
		if (debugMode)
		{
			Debug.Log("Переключение на " + (isPortrait ? "портретный" : "ландшафтный") + " режим. " + $"Целевая позиция: {_targetPosition}, Поворот: {settings.rotation}");
		}
	}

	public void ForceUpdate()
	{
		UpdateCameraMode(GetIsPortrait());
	}
}
