<?php

namespace Drupal\cpb_cleannode\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\cpb_cleannode\Services\CpbLoggerService;

/**
 * Configure CPB Clean Node settings.
 */
class CPBCleanNodeAdminSettingsForm extends ConfigFormBase {
  /**
   * Config settings.
   *
   * @var string
   */
  const SETTINGS = 'cpb_cleannode.settings';

  /**
   * Custom logging service from CpbLoggerService.
   *
   * @var Drupal\cpb_cleannode\Services\CpbLoggerService
   */
  protected $debugLogger;

  /**
   * {@inheritdoc}
   */
  public function __construct(CpbLoggerService $logger) {
    $this->debugLogger = $logger;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    // Instantiates this form class.
    return new static(
      // Load the service required to construct this class.
      $container->get('cpb_cleannode.log_service')
    );
  }

  /**
   * Get form ID.
   *
   * {@inheritdoc}.
   */
  public function getFormId() {
    return 'cpb_cleannode_admin_settings';
  }

  /**
   * Get Editable Config Names.
   *
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return [
      static::SETTINGS,
    ];
  }

  /**
   * Build form.
   *
   * {@inheritdoc}.
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $form = parent::buildForm($form, $form_state);
    $config = $this->config(static::SETTINGS);

    $debugString = 'cpb_cleannode test: ' . $config->get('strings_to_clean');
    $debugString2 = 'cpb_cleanode test2: ' . $config->get('cleaned_strings');
    // \Drupal::service('cpb_cleannode.log_service')->logDebug($debugString);
    // $this->debugLogger->logDebug($debugString);
    // $this->debugLogger->logDebug($debugString2);
    $form['strings_to_clean'] = [
      '#default_value' => $config->get('strings_to_clean'),
      '#description' => $this->t('The strings to clean. Please separate strings with a comma.'),
      '#maxlength' => 255,
      '#required' => TRUE,
      '#title' => $this->t('The strings to clean'),
      '#type' => 'textfield',
    ];
    $form['cleaned_strings'] = [
      '#default_value' => $config->get('cleaned_strings'),
      '#description' => $this->t('Cleaned strings. Please separate strings with a comma.'),
      '#maxlength' => 255,
      '#required' => TRUE,
      '#title' => $this->t('Cleaned strings'),
      '#type' => 'textfield',
    ];
    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state) {
    $strings_to_clean = $form['strings_to_clean']['#value'];
    $array_of_words_to_clean = explode(",", $strings_to_clean);
    foreach ($array_of_words_to_clean as $string) {
      $strings_preg = preg_match("/[a-zA-Z]+/", trim($string),
        $matches);
      if ($strings_preg === FALSE || strlen(trim($string)) > 20) {
        $form_state->setErrorByName('strings_to_clean',
          $this->t('This is not a valid string.'));
      }
    }
    $cleaned_strings = $form['cleaned_strings']['#value'];
    $array_of_cleaned_strings = explode(",", $cleaned_strings);
    foreach ($array_of_cleaned_strings as $string) {
      $strings_preg = preg_match("/[a-zA-Z]+/", trim($string),
        $matches);
      if ($strings_preg === FALSE || strlen(trim($string)) > 20) {
        $form_state->setErrorByName('cleaned_strings',
          $this->t('This is not a valid string.'));
      }
    }
    if (count($array_of_words_to_clean) != count($array_of_cleaned_strings)) {
      $form_state->setErrorByName(
        'cleaned_strings',
        $this->t('The number of items in the string fields should be identical')
      );
    }
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $config = $this->config('cpb_cleannode.settings');
    $config->set('strings_to_clean', $form_state->getValue('strings_to_clean'));
    $config->set('cleaned_strings', $form_state->getValue('cleaned_strings'));
    $config->save();
    parent::submitForm($form, $form_state);
  }

}
