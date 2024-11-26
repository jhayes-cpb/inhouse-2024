<?php

$databases['default']['default'] = array(
  'database' => getenv('MYSQL_DATABASE'),
  'username' => getenv('MYSQL_USER'),
  'password' => getenv('MYSQL_PASS'),
  'host' => "localhost",
  'driver' => "mysql",
  'port' => 3306,
  'prefix' => "",
);

$settings['hash_salt'] = 'FlcbGl803pAYC-cUmn78WA9oY4uiSwHYgnStEWnNL0d0bR8CuW6xhYVNTOOF0OVl42sByB9Nig';

// This will ensure the site can only be accessed through the intended host
// names. Additional host patterns can be added for custom configurations.
$settings['trusted_host_patterns'] = [
  '^cpb-inhousedev2-new$',
  '^10.100.11.26$',
];

$settings['config_sync_directory'] = '/var/www/html/config/sync';
$config['config_split.config_split.dev']['status'] = TRUE;
