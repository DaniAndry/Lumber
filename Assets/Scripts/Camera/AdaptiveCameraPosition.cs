using UnityEngine;
using System.Collections;

[RequireComponent(typeof(Camera))]
public class AdaptiveCameraPosition : MonoBehaviour
{
    [System.Serializable]
    public class CameraSettings
    {
        public Vector3 position;
        public Vector3 rotation;
        public float orthographicSize = 5f; // Для ортографической камеры
        public float fieldOfView = 60f;      // Для перспективной камеры
    }

    [Header("Настройки ориентации")]
    [Tooltip("Настройки камеры для портретного режима")]
    public CameraSettings portraitSettings;

    [Tooltip("Настройки камеры для горизонтального режима")]
    public CameraSettings landscapeSettings;

    [Header("Дополнительные настройки")]
    [Tooltip("Скорость перемещения камеры при изменении ориентации")]
    public float transitionSpeed = 2.0f;

    [Tooltip("Порог соотношения сторон для определения ориентации (portrait < threshold < landscape)")]
    public float aspectRatioThreshold = 1.0f;

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
        
        // Устанавливаем начальные значения
        UpdateCameraMode(GetIsPortrait());
    }

    private void Update()
    {
        // Проверяем изменение ориентации
        bool currentIsPortrait = GetIsPortrait();
        if (currentIsPortrait != _isPortrait || Screen.orientation != _lastOrientation)
        {
            if (debugMode)
            {
                Debug.Log($"Ориентация изменилась: {(currentIsPortrait ? "портрет" : "ландшафт")}, " + 
                          $"соотношение сторон: {(float)Screen.width / Screen.height}");
            }
            
            UpdateCameraMode(currentIsPortrait);
            _lastOrientation = Screen.orientation;
        }

        // Плавно перемещаем камеру к целевой позиции
        if (_isTransitioning)
        {
            transform.position = Vector3.Lerp(transform.position, _targetPosition, Time.deltaTime * transitionSpeed);
            transform.rotation = Quaternion.Slerp(transform.rotation, _targetRotation, Time.deltaTime * transitionSpeed);
            
            if (_camera.orthographic)
            {
                _camera.orthographicSize = Mathf.Lerp(_camera.orthographicSize, _targetOrthoSize, Time.deltaTime * transitionSpeed);
            }
            else
            {
                _camera.fieldOfView = Mathf.Lerp(_camera.fieldOfView, _targetFOV, Time.deltaTime * transitionSpeed);
            }

            // Проверяем, завершен ли переход
            if (Vector3.Distance(transform.position, _targetPosition) < 0.01f &&
                Quaternion.Angle(transform.rotation, _targetRotation) < 0.1f)
            {
                if (_camera.orthographic)
                {
                    if (Mathf.Abs(_camera.orthographicSize - _targetOrthoSize) < 0.01f)
                    {
                        _isTransitioning = false;
                    }
                }
                else
                {
                    if (Mathf.Abs(_camera.fieldOfView - _targetFOV) < 0.1f)
                    {
                        _isTransitioning = false;
                    }
                }
            }
        }
    }

    // Определяет, является ли текущая ориентация портретной
    private bool GetIsPortrait()
    {
        float aspectRatio = (float)Screen.width / Screen.height;
        return aspectRatio < aspectRatioThreshold;
    }

    // Обновляет настройки камеры в зависимости от ориентации
    private void UpdateCameraMode(bool isPortrait)
    {
        _isPortrait = isPortrait;
        CameraSettings settings = isPortrait ? portraitSettings : landscapeSettings;

        _targetPosition = settings.position;
        _targetRotation = Quaternion.Euler(settings.rotation);
        _targetOrthoSize = settings.orthographicSize;
        _targetFOV = settings.fieldOfView;

        _isTransitioning = true;
        
        if (debugMode)
        {
            Debug.Log($"Переключение на {(isPortrait ? "портретный" : "ландшафтный")} режим. " +
                      $"Целевая позиция: {_targetPosition}, Поворот: {settings.rotation}");
        }
    }

    // Публичный метод для принудительного обновления
    public void ForceUpdate()
    {
        UpdateCameraMode(GetIsPortrait());
    }

#if UNITY_EDITOR
    // Вспомогательная функция для более удобной настройки в редакторе
    [ContextMenu("Сохранить текущую позицию как Portrait")]
    private void SaveCurrentAsPortrait()
    {
        portraitSettings.position = transform.position;
        portraitSettings.rotation = transform.eulerAngles;
        
        if (_camera.orthographic)
            portraitSettings.orthographicSize = _camera.orthographicSize;
        else
            portraitSettings.fieldOfView = _camera.fieldOfView;
            
        Debug.Log("Сохранены текущие настройки камеры как портретные");
    }

    [ContextMenu("Сохранить текущую позицию как Landscape")]
    private void SaveCurrentAsLandscape()
    {
        landscapeSettings.position = transform.position;
        landscapeSettings.rotation = transform.eulerAngles;
        
        if (_camera.orthographic)
            landscapeSettings.orthographicSize = _camera.orthographicSize;
        else
            landscapeSettings.fieldOfView = _camera.fieldOfView;
            
        Debug.Log("Сохранены текущие настройки камеры как ландшафтные");
    }
#endif
}
