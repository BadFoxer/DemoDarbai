<?php
require get_template_directory() . '/inc/function-admin.php';
//require_once(get_template_directory() . '/inc/show-records.php');
function myCustomCssJs() {
    if( is_front_page() )
    {
        wp_enqueue_style( 'custom-css', get_template_directory_uri() . '/css/style.css', null, null, 'all');
        wp_register_script( 'custom-js', get_template_directory_uri() . '/js/myjs.js', array(), '1.0.0', true );
        wp_enqueue_script('custom-js');

    }
}
add_action( 'wp_enqueue_scripts', 'myCustomCssJs' );

/* Create Custom Endpoint */
add_action( 'rest_api_init', 'create_custon_endpoint' );
 
function create_custon_endpoint(){
    // route to api wp-json/wp/v2/custom-ep
    register_rest_route(
        'wp/v2',
        '/custom-ep',
        array(
            'methods' => 'GET',
            'callback' => 'get_response',
        )
    );
}
 
function get_response() {
    // your code

global $wpdb;
$table_name = $wpdb->prefix . "balansas";
$results = $wpdb->get_results("SELECT *,
CASE WHEN my_month = 'Sausis' THEN 1
WHEN my_month = 'Vasaris' THEN 2
WHEN my_month = 'Kovas' THEN 3
WHEN my_month = 'Balandis' THEN 4
WHEN my_month = 'Gegužė' THEN 5
WHEN my_month = 'Birželis' THEN 6
WHEN my_month = 'Liepa' THEN 7
WHEN my_month = 'Rugpjūtis' THEN 8
WHEN my_month = 'Rugsėjis' THEN 9
WHEN my_month = 'Spalis' THEN 10
WHEN my_month = 'Lapkritis' THEN 11
ELSE 12
END AS men_nr
FROM  $table_name ORDER BY men_nr" );
     if ($results) {
      $json = json_encode($results,JSON_UNESCAPED_UNICODE);
      print_r($json);
   }
  //  return 'This is your data!';
}

?>

