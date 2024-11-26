<?php

namespace Drupal\cpb_views_search_term\Plugin\views\field;

use Drupal\views\Plugin\views\field\FieldPluginBase;
use Drupal\views\ResultRow;

/**
 * Default implementation of the base field plugin.
 *
 * @ingroup views_field_handlers
 *
 * @ViewsField("search_term")
 */
class SearchTerm extends FieldPluginBase {

  /**
   * Query.
   *
   * @{inheritdoc}
   */
  public function query() {
    // Leave empty to avoid a query on this field.
  }

  /**
   * Render.
   *
   * @{inheritdoc}
   */
  public function render(ResultRow $values) {
    // Display a placeholder (i.e. field id) when editing the view.
    /* $path = 'admin/structure/views/nojs/preview/'; */
    /* $placeholder = strpos($current_path, $path . $this->view->id() . '/'); */
    /* if ($placeholder) === 0) { */
    /*   return " "; */
    /* } */
    $output = " ";
    parse_str($_SERVER["QUERY_STRING"], $q_items);
    // Don't include useless "q=" that some servers return.
    unset($q_items['q']);
    // $output =  UrlHelper::buildQuery($q_items);
    foreach ($q_items as $key => $value) {
      if ($key == 'search_api_fulltext') {
        $output = $value;
      }
    }
    return $output;
  }

}
