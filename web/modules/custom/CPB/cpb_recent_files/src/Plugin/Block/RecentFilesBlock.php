<?php

namespace Drupal\cpb_recent_files\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Link;
use Drupal\Core\Url;
use Drupal\Core\Datetime\DrupalDateTime;
use Drupal\Core\Config\ConfigFactoryInterface;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Drupal\Core\File\FileUrlGeneratorInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Database\Connection;

/* use Drupal\cpb_recent_files\Services\RecentFilesSettingsService; */

/**
 * Provides a 'Recent Files' Block.
 *
 * Excludes files with filemime 'image/something', because we are only
 * interested in PDFs, XLS, DOC, etc.
 *
 * @Block(
 *   id = "cpb_recent_files",
 *   admin_label = @Translation("Recent Files"),
 * )
 */
class RecentFilesBlock extends BlockBase implements ContainerFactoryPluginInterface {
  
  /**
   * The configuration factory service.
   *
   * @var \Drupal\Core\Config\ConfigFactoryInterface
   */
  protected $configFactory;

  /**
   * The database connection service.
   *
   * @var \Drupal\Core\Database\Connection
   */
  private $connection;

  /**
   * The file URL generator service.
   *
   * @var \Drupal\Core\File\FileUrlGeneratorInterface
   */
  protected $fileUrlGenerator;

  /**
   * Constructs a new RecentFilesBlock object.
   *
   * @param array $configuration
   *   A configuration array containing information about the plugin instance.
   * @param string $plugin_id
   *   The plugin_id for the plugin instance.
   * @param mixed $plugin_definition
   *   The plugin implementation definition.
   * @param \Drupal\Core\Config\ConfigFactoryInterface $config_factory
   *   The factory for configuration objects.
   * @param \Drupal\Core\Database\Connection $connection
   *   The database connection.
   * @param \Drupal\Core\File\FileUrlGeneratorInterface $file_url_generator
   *   The file URL generator service.
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, ConfigFactoryInterface $config_factory, Connection $connection, FileUrlGeneratorInterface $file_url_generator) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);
    $this->configFactory = $config_factory;
    $this->connection = $connection;
    $this->fileUrlGenerator = $file_url_generator;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->get('config.factory'),
      $container->get('database'),
      $container->get('file_url_generator')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    /*
     * SELECT a.field_cpb_file_description,
     * FROM_UNIXTIME(f.changed) AS changed_h,
     * fid, filename from file_managed f
     * JOIN node__field_cpb_file a ON a.field_cpb_file_target_id=f.fid
     * WHERE filemime NOT RLIKE 'image' ORDER BY changed DESC LIMIT 10;
     *
     *
     * https://www.drupal.org/forum/support/module-development-and-code-questions/2016-07-22/solved-need-some-help-with-a-simple
     */

    $config = $this->configFactory->get('cpb_recent_files.settings');
    // Before DI: $config = \Drupal::config('cpb_recent_files.settings');.
    $num_files = $config->get('cpb_recent_files.num_files');
    $max = !empty($num_files) ? $num_files : '10';

    $config_title = $config->get('cpb_recent_files.block_title');
    $block_title = !empty($config_title) ? $this->t($config_title) : $this->t('Recently Updated Files');

    $select = $this->connection->select('file_managed', 'f');
    $select->fields('f', ['fid', 'filename', 'uri', 'changed']);
    $select->condition('f.filemime', 'image', 'NOT RLIKE');
    $select->orderby('f.changed', 'DESC');
    $select->innerJoin('node__field_cpb_file', 'a', 'a.field_cpb_file_target_id = f.fid');
    $select->fields('a', ['field_cpb_file_description']);
    $select->range(0, $max);

    $entries = $select->execute();

    $variables = [];

    foreach ($entries as $result) {
      $dateChanged = DrupalDateTime::createFromFormat('U', $result->changed);
      $dateChangedFinal = $dateChanged->format('m/d/y');

      // Replace file_create_url() with the file_url_generator service.
      $theUrl = $this->fileUrlGenerator->generateAbsoluteString($result->uri);
      $theUrlAlias = str_replace("/sites/default/files", "/files", $theUrl);
      $href_uri = Url::fromUri($theUrlAlias);
      $link = $result->field_cpb_file_description . " (" . $dateChangedFinal . ")";
      $href = Link::fromTextAndUrl($this->t($link), $href_uri)->toString();
      $variables[] = $href;
    }

    $output = [];
    $output['basic'] = [
      '#title' => $block_title,
      '#theme' => 'item_list',
      '#items' => $variables,
    ];
    return $output;
  }

}
