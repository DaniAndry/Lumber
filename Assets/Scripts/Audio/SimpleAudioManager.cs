using UnityEngine;

public class SimpleAudioManager : MonoBehaviour
{
    public static SimpleAudioManager Instance { get; private set; }

    [SerializeField] private AudioClip progressBarSound;
    [SerializeField] private AudioClip conveyorAnimationSound;
    [SerializeField] private AudioClip logLoadSound;
    [SerializeField] private AudioClip buttonClickSound;
    [SerializeField] private AudioClip houseAppearSound;

    private AudioSource audioSource;
    private float gameStartTime;
    private bool soundsEnabled = false;
    private const float INITIAL_SOUND_DELAY = 2.0f; 

    private void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
            DontDestroyOnLoad(gameObject);
            audioSource = gameObject.AddComponent<AudioSource>();
            gameStartTime = Time.time;
        }
        else
        {
            Destroy(gameObject);
        }
    }

    private void Update()
    {
        // Включаем звуки только через 2 секунды после запуска
        if (!soundsEnabled && Time.time - gameStartTime >= INITIAL_SOUND_DELAY)
        {
            soundsEnabled = true;
            Debug.Log("Звуки включены после начальной задержки");
        }
    }

    public void PlayProgressBarSound()
    {
        PlaySound(progressBarSound);
    }

    public void PlayConveyorAnimationSound()
    {
        PlaySound(conveyorAnimationSound);
    }

    public void PlayLogLoadSound()
    {
        PlaySound(logLoadSound);
    }

    public void PlayButtonClickSound()
    {
        PlaySound(buttonClickSound);
    }

    public void PlayHouseAppearSound()
    {
        PlaySound(houseAppearSound);
    }

    private void PlaySound(AudioClip clip)
    {
        // Воспроизводим звук только если прошло 2 секунды с начала игры
        if (clip != null && soundsEnabled)
        {
            audioSource.PlayOneShot(clip);
        }
    }
}
