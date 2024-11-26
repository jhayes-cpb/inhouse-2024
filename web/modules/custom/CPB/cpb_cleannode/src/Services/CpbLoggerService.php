<?php

namespace Drupal\cpb_cleannode\Services;

use Drupal\Core\Logger\LoggerChannelFactory;

/**
 * Logging for debugging purposes to dblog() as a d7 Watchdog replacement.
 *
 * @package Drupal\cpb_cleannode\Services
 */
class CpbLoggerService {
  /**
   * Logger Factory.
   *
   * @var \Drupal\Core\Logger\LoggerChannelFactory
   */
  protected $loggerFactory;

  /**
   * Constructor.
   */
  public function __construct(LoggerChannelFactory $loggerFactory) {
    // $this->loggerFactory = $loggerFactory->get('cpb_cleannode.log_service');
    $this->loggerFactory = $loggerFactory->get('cpb_cleannode');
  }

  /**
   * Logging for debugging purposes to dblog() as a d7 Watchdog replacement.
   *
   * @param string $debugString
   *   Debug string.
   * @param array $debugObj
   *   Debug object, such as an array, json_obj or drupal_http_response object.
   */
  public function logDebug(string $debugString, array $debugObj = NULL) {
    if (empty($debugObj)) {
      $this->loggerFactory->notice('@moduleName: @debugString', [
        '@moduleName' => 'cpb_cleannode',
        '@debugString' => $debugString,
      ]);
    }
    else {
      $this->loggerFactory->notice('@moduleName: @debugString and @debugObj', [
        '@moduleName' => 'cpb_cleannode',
        '@debugString' => $debugString,
        '@debugObj' => $debugObj,
      ]);
    }
  }

}
