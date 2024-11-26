<?php


$databases['default']['default'] = array(
  'database' => getenv("MYSQL_NAME"),
  'username' => getenv("MYSQL_USER"),
  'password' => getenv("MYSQL_PASS"),
  'host' => "db",
  'driver' => "mysql",
  'port' => 3306,
  'prefix' => "",
);

$settings['hash_salt'] = 'AELqNTzmphEYzfDdSJteXZCjPqbsyXcKZVCDyfSyGkXGvUzJOMHVrAsWWZTsATFh';

// This will prevent Drupal from setting read-only permissions on sites/default.
$settings['skip_permissions_hardening'] = TRUE;

// This will ensure the site can only be accessed through the intended host
// names. Additional host patterns can be added for custom configurations.
$settings['trusted_host_patterns'] = ['.*'];


$settings['config_sync_directory'] = '/var/www/config/sync';
$config['config_split.config_split.local']['status'] = TRUE;
$conf['stage_file_proxy_origin'] = 'http://inhouse.cpb.org'; // no trailing slash
