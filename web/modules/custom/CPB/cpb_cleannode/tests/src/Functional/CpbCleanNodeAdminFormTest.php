<?php

namespace Drupal\Tests\cpb_cleannode\Functional;

use Drupal\Core\Entity\EntityStorageException;
use Drupal\Core\Url;
use Drupal\Tests\BrowserTestBase;

/**
 * Test the module settings page.
 *
 * @group cpb_cleannode
 */
class CpbCleanNodeAdminFormTest extends BrowserTestBase {

  /**
   * The default theme as required by Drupal 9.
   *
   * @var string
   */
  protected $defaultTheme = 'stark';

  /**
   * Modules to enable.
   *
   * @var array
   */
  public static $modules = [
    'file',
    'node',
    'field',
    'cpb_cleannode',
  ];

  /**
   * A user with permission to administer site configuration.
   *
   * @var \Drupal\user\UserInterface
   */
  protected $user;

  /**
   * {@inheritdoc}
   */
  protected function setUp() {
    parent::setUp();
    try {
      $this->user = $this->drupalCreateUser(['administer site configuration']);
    }
    catch (EntityStorageException $e) {
    }
    $this->drupalLogin($this->user);
  }

  /**
   * Tests the admin settings form.
   *
   * @throws \Drupal\Core\Entity\EntityStorageException
   */
  public function testForm() {
    // Get the settings form path from the route.
    $settings_form_path = Url::fromRoute('cpb_cleannode.admin_settings_form');

    // Navigate to the processing form.
    $this->drupalGet($settings_form_path);

    // Start the session.
    $session = $this->assertSession();
    // Assure we loaded the form with proper permissions.
    $session->statusCodeEquals(200);

    // Update our text field with a new value.
    $edit = [
      'strings_to_clean' => 'pubic',
      'cleaned_strings' => 'public',
    ];
    $this->drupalPostForm($settings_form_path, $edit, 'Save configuration');

    // Reload the page.
    $this->drupalGet($settings_form_path);
    $strings_to_clean = $session->fieldExists('strings_to_clean')->getValue();
    $cleaned_strings = $session->fieldExists('cleaned_strings')->getValue();

    $this->assertTrue($strings_to_clean == 'pubic');
    $this->assertTrue($cleaned_strings == 'public');
  }

}
