<?php

namespace Drupal\cpb_xframe\EventSubscriber;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\ResponseEvent;
use Symfony\Component\HttpKernel\KernelEvents;

/**
 * Defines the class for the CPB RemoveXFrameOptions to make Matomo work.
 *
 * If this module is currently disabled, that's probably because a more
 * efficient Apache conf file or settings.php file solution is in place.
 */
class RemoveXFrameOptionsSubscriber implements EventSubscriberInterface {

  /**
   * Remove XFrame Options.
   */
  public function removeXframeOptions(ResponseEvent $event) {
    $response = $event->getResponse();
    $response->headers->set('X-Frame-Options', 'ALLOW-FROM http://cpb-inhouse-stats.cpbnet.org/');
  }

  /**
   * Get Subscribed Events.
   */
  public static function getSubscribedEvents() {
    $events[KernelEvents::RESPONSE][] = ['RemoveXFrameOptions', -10];
    return $events;
  }

}
