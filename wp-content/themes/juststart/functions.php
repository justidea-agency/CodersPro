<?php

function justidea_files()
{
  wp_enqueue_script('scripts', get_theme_file_uri('/assets/js/app.js'), null, '1.0', true);
  wp_enqueue_script('customs', get_theme_file_uri('/assets/js/custom.js'), null, '1.0', true);
	wp_enqueue_style('styles', get_theme_file_uri('/assets/css/app.css'));
	wp_enqueue_style('customs', get_theme_file_uri('/assets/css/custom.css'));
	wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&display=swap', false);

	if(is_page(1444)){
		wp_enqueue_script('swiperjs', 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js', false);
		wp_enqueue_style('swiperstyles', 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css', false);
		
	};
	
	if(is_front_page()){
		wp_enqueue_script('lottie-player', 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js', false);
	};
	// Creating a variable in html file and nounce for secure log - rootData.root_url
	wp_localize_script('justIdea', 'rootData', array(
		'root_url' => get_site_url(),
		'nonce' => wp_create_nonce('wp_rest')
	));
}
add_action('wp_enqueue_scripts', 'justidea_files');


if( function_exists('acf_add_options_page') ) {
	acf_add_options_page(array(
		'page_title' => 'Site Information',
		'menu_title' => 'Site Information',
		'menu_slug' => 'site-information',
		'capability' => 'edit_posts',
		'redirect' => false
	));
};


function justidea_features()
{
	add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
  add_theme_support('custom-header');
  add_theme_support('align-wide');
  add_theme_support( 'responsive-embeds' );
  add_theme_support( 'html5', array(
    'search-form',
    'comment-form',
    'comment-list',
    'gallery',
    'caption',
  ));
}
add_action('after_setup_theme', 'justidea_features');


// Creating a custom menu
function custom_new_menu() {
  register_nav_menu('main-menu',__( 'Main Menu' ));
  register_nav_menu('footer-menu',__( 'Footer Menu' ));
  register_nav_menu('courses-java-sidebar',__( 'Sidebar' ));
}
add_action( 'init', 'custom_new_menu' );


// Svg File available in WP admin panel
function add_file_types_to_uploads($file_types){
  $new_filetypes = array();
  $new_filetypes['svg'] = 'image/svg+xml';
  $file_types = array_merge($file_types, $new_filetypes );
  return $file_types;
  }
add_filter('upload_mimes', 'add_file_types_to_uploads');


add_action( 'admin_init', 'disable_autosave' );
  function disable_autosave() {
  wp_deregister_script( 'autosave' );
}

// More wider gutenberg editor
function wp436784723890_expand_gutenberg_edit_area() {
	?>
	<style type="text/css">
    .wp-block {
			max-width: 1280px !important;
		}
	</style>
	<?php
}
add_action( 'admin_head', 'wp436784723890_expand_gutenberg_edit_area' );


//Remove the slug from published post permalinks for our custom post types.
// add_filter( 'post_type_link', function( $post_link, $post, $leavename ) {

// 	$post_types = array(
// 		'trasy',
// 	);

// 	if ( in_array( $post->post_type, $post_types ) && 'publish' === $post->post_status ) {
// 		$post_link = str_replace( '/' . $post->post_type . '/', '/', $post_link );
// 	}

// 	return $post_link;

// }, 10, 3 );

/**
 * Some hackery to have WordPress match postname to any of our public post types.
 *
 * All of our public post types can have /post-name/ as the slug, so they better be unique across all posts
 * Typically core only accounts for posts and pages where the slug is /post-name/
 */
// add_action( 'pre_get_posts', function( $query ) {

	// Only noop the main query.
	// if ( ! $query->is_main_query() ) {
	// 	return;
	// }

	// Only noop our very specific rewrite rule match.
	// if ( 2 != count( $query->query ) || ! isset( $query->query['page'] ) ) {
	// 	return;
	// }

	// 'name' will be set if post permalinks are just post_name, otherwise the page rule will match.
// 	if ( ! empty( $query->query['name'] ) ) {

// 			$post_types = array(
// 			'post', // important to  not break your standard posts
// 			'page', // important to  not break your standard pages
// 			'trasy',
// 		);

// 		$query->set( 'post_type', $post_types );

// 	}

// } );




