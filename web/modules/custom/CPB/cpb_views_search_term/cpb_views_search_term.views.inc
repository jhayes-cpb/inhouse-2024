<?php

/**
 * @file
 * Passes the search term to search results pages.
 *
 * Example: the /forms page where the front end JS grabs the Solr result
 * for further refinement. However, this depended on views_current_path
 * contributed module, which is currently not Drupal 8/9 conformant, so
 * I've disabled both it and this module for now.
 */

/**
 * Implements hook_views_data_alter().
 */
function cpb_views_search_term_views_data_alter(array &$data) {
  $data['views']['search_term'] = [
    'title' => t('Search Term'),
    'group' => t('Global'),
    'help' => t('The search string, i.e. the search_api_fulltext parameter value.'),
    'field' => [
      'title' => t('Search term'),
      'id' => 'search_term',
    ],
  ];
}
