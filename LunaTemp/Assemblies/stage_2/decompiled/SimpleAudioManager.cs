using UnityEngine;

public class SimpleAudioManager : MonoBehaviour
{
	[SerializeField]
	private AudioClip progressBarSound;

	[SerializeField]
	private AudioClip conveyorAnimationSound;

	[SerializeField]
	private AudioClip logLoadSound;

	[SerializeField]
	private AudioClip buttonClickSound;

	[SerializeField]
	private AudioClip houseAppearSound;

	private AudioSource audioSource;

	private float gameStartTime;

	private bool soundsEnabled = false;

	private const float INITIAL_SOUND_DELAY = 2f;

	public static SimpleAudioManager Instance { get; private set; }

	private void Awake()
	{
		if (Instance == null)
		{
			Instance = this;
			Object.DontDestroyOnLoad(base.gameObject);
			audioSource = base.gameObject.AddComponent<AudioSource>();
			gameStartTime = Time.time;
		}
		else
		{
			Object.Destroy(base.gameObject);
		}
	}

	private void Update()
	{
		if (!soundsEnabled && Time.time - gameStartTime >= 2f)
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
		if (clip != null && soundsEnabled)
		{
			audioSource.PlayOneShot(clip);
		}
	}
}
