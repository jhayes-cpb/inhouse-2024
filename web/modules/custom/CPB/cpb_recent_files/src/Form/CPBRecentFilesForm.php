<?php

namespace Drupal\cpb_recent_files\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Component\Utility\Html;

/**
 * Defines the class for the CPB Recent Files Form.
 */
class CPBRecentFilesForm extends ConfigFormBase {
  /**
   * Config settings.
   *
   * @var string
   */
  const SETTINGS = 'cpb_recent_files.settings';

  /**
   * Get form ID.
   *
   * {@inheritdoc}.
   */
  public function getFormId() {
    return 'cpb_recent_files_form';
  }

  /**
   * Build form.
   *
   * {@inheritdoc}.
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    // Default settings.
    $config = $this->config(static::SETTINGS);
    // Form constructor.
    $form = parent::buildForm($form, $form_state);
    // The $config variable is where we store our current settings.
    // Then we define our form fields and return the form:
    // Block title field.
    $form['block_title'] = [
      '#default_value' => $config->get('cpb_recent_files.block_title'),
      '#description' => $this->t('Give your CPB Recent Files block a title.'),
      '#maxlength' => 255,
      '#size' => 30,
      '#title' => $this->t('CPB Recent Files block title:'),
      '#type' => 'textfield',
    ];
    // Number of Recent files field.
    $form['num_files'] = [
      '#default_value' => $config->get('cpb_recent_files.num_files'),
      '#description' => $this->t('How many files do you want to show in the Recent Files block?'),
      '#maxlength' => 255,
      '#size' => 3,
      '#title' => $this->t('Number of files to show in the CPB Recent Files block:'),
      '#type' => 'textfield',
    ];

    return $form;
  }

  /**
   * Validate form.
   *
   * {@inheritdoc}.
   */
  public function validateForm(array &$form, FormStateInterface $form_state) {
    if (!is_numeric($form_state->getValue('num_files'))) {
      $form_state->setErrorByName('num_files', $this->t("The number of files must be an integer"));
    }
  }

  /**
   * Submit Form.
   *
   * {@inheritdoc}.
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $config = $this->config(static::SETTINGS);
    $config->set('cpb_recent_files.num_files', Html::escape($form_state->getValue('num_files')));
    $config->set('cpb_recent_files.block_title', Html::escape($form_state->getValue('block_title')));
    $config->save();
    return parent::submitForm($form, $form_state);
  }

  /**
   * Get Editable Config Names.
   *
   * {@inheritdoc}.
   *
   * We must also declare validateForm(), submitForm() and
   * getEditableConfigNames(), even if we're not using them.
   */
  protected function getEditableConfigNames() {
    return [
      'cpb_recent_files.settings',
    ];
  }

}
