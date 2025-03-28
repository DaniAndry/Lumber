using UnityEngine;
using UnityEngine.UI;

public class BuildManager : MonoBehaviour
{
	[SerializeField]
	public Button _buildButton1;

	[SerializeField]
	public Button _buildButton2;

	[SerializeField]
	public Button _buildButton3;

	[SerializeField]
	public GameObject _buildButtonObject1;

	[SerializeField]
	public GameObject _buildButtonObject2;

	[SerializeField]
	public GameObject _build1;

	[SerializeField]
	public GameObject _build2;

	[SerializeField]
	public GameObject _build3;

	[SerializeField]
	private MoneyController _moneyController;

	private Animator _animator;

	private void Awake()
	{
		_buildButton1.onClick.AddListener(delegate
		{
			_moneyController.TryBuild(8, _build1);
		});
		_buildButton2.onClick.AddListener(delegate
		{
			_moneyController.TryBuild(20, _build2);
		});
		_buildButton3.onClick.AddListener(delegate
		{
			_moneyController.TryBuild(100, _build3);
		});
		_moneyController.OnBuildSuccess += OnBuildSuccess;
		_moneyController.OnBuildSuccess += OnBuildSuccess;
		_animator = GetComponent<Animator>();
	}

	private void OnDestroy()
	{
		_moneyController.OnBuildSuccess -= OnBuildSuccess;
	}

	private void OnBuildSuccess(GameObject buildObject)
	{
		SimpleAudioManager.Instance?.PlayHouseAppearSound();
		if (buildObject == _build1)
		{
			_buildButton1.gameObject.SetActive(false);
			_buildButtonObject1.SetActive(false);
			GameManager.Instance?.DisableTutorial();
		}
		else if (buildObject == _build2)
		{
			_buildButton2.gameObject.SetActive(false);
			_buildButtonObject2.SetActive(false);
			GameManager.Instance?.DisableTutorial();
		}
		else if (buildObject == _build3)
		{
			_buildButton3.gameObject.SetActive(false);
		}
	}

	public int GetConstructedBuildingsCount()
	{
		int count = 0;
		if (_buildButton1 != null && !_buildButton1.gameObject.activeInHierarchy)
		{
			count++;
		}
		if (_buildButton2 != null && !_buildButton2.gameObject.activeInHierarchy)
		{
			count++;
		}
		if (_buildButton3 != null && !_buildButton3.gameObject.activeInHierarchy)
		{
			count++;
		}
		return count;
	}
}
