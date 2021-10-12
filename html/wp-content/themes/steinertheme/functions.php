<?php

function load_stylesheets()
{
    wp_register_style('style', get_template_directory_uri() . '/style.css', array(), rand(111,9999), 'all');
    wp_enqueue_style('style');
    wp_enqueue_script('hamburger', get_template_directory_uri() . '/hamburger.js', '', '', true);
}
add_action('wp_enqueue_scripts', 'load_stylesheets');

add_theme_support(
    'custom-logo',
    array(
        'height'      => 100,
        'width'       => 300,
        'flex-width'  => true,
        'flex-height' => true,
    )
);

add_theme_support('menus');

register_nav_menus(

    array(

        'nav' => _('nav', 'theme'),
    )
);