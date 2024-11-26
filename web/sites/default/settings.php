<?php

use Dotenv\Dotenv;
use Dotenv\Exception\InvalidPathException;
$dotenv = Dotenv::createUnsafeImmutable('../config');
$dotenv->safeLoad();

$site_env = getenv('CPB_ENV');

$settings['update_free_access'] = FALSE;
$settings['container_yamls'][] = $app_root . '/' . $site_path . '/services.yml';

$settings['file_scan_ignore_directories'] = [
  'node_modules',
  'bower_components',
];
$settings['entity_update_batch_size'] = 50;
$settings['entity_update_backup'] = TRUE;
$settings['migrate_node_migrate_type_classic'] = FALSE;

$ddev_settings = dirname(__FILE__) . '/settings.ddev.php';
if (getenv('IS_DDEV_PROJECT') == 'true' && is_readable($ddev_settings)) {
  $settings["config_sync_directory"] = '../config/sync';
  require 'settings.shared-local.php';
  require $ddev_settings;
} else {
  switch ($site_env) {
    case 'cpb-inhousedev2-new':
      require 'settings.dev.php';
      break;
    case 'cpb-inhousestage2':
      require 'settings.stage.php';
      break;
    case 'cpb-inhouse2':
    case 'inhouse.cpb.org':
      require 'settings.prod.php';
      break;
    default:
      require 'settings.shared-local.php';
      require 'settings.flightdeck.php';
      break;
  }
}

if (file_exists(__DIR__ . '/settings.local.php')) {
  include __DIR__ . '/settings.local.php';
}
