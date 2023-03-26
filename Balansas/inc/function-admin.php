

<?php
// adminpage
function zp_add_admin_page()
{
    // generate admin page balansas
    add_menu_page("Balansas", "Metų Balansas", "manage_options", "balansas", "balansas_theme_create_page", 110);

    // generate submeniu page balansas
    add_submenu_page("balansas","Balansas", "Forma","manage_options","balansas","balansas_theme_create_page");

    add_submenu_page("balansas","Balansas", "Įrašai","manage_options","balansas-įrašai","balansas_theme_create_records");
}

add_action("admin_menu", "zp_add_admin_page");



function balansas_theme_create_page(){

 wp_enqueue_style( 'custom-css', get_template_directory_uri() . '/css/admin.css', null, null, 'all');
    require_once(get_template_directory() . '/inc/templates/balansas-admin.php');
}


function balansas_theme_create_records(){
 wp_enqueue_style( 'custom-css', get_template_directory_uri() . '/css/style.css', null, null, 'all');
 wp_register_script( 'custom-js', get_template_directory_uri() . '/js/adminjs.js', array(), '1.0.0', true );
 wp_enqueue_script('custom-js');

require_once(get_template_directory() . '/inc/templates/my-data-table.php');
}
