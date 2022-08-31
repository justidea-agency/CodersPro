<?php

function justidea_files()
{
	wp_enqueue_script('scripts', get_theme_file_uri('/assets/js/app.js'), null, '1.0', true);
	wp_enqueue_script('customs', get_theme_file_uri('/assets/js/custom.js'), null, '1.0', true);
	wp_enqueue_script('ios-scroll-polyfill', get_theme_file_uri('/assets/js/scroll-polyfill.js'), null, '1.0', true);
	wp_enqueue_style('styles', get_theme_file_uri('/assets/css/app.css'));
	wp_enqueue_style('customs', get_theme_file_uri('/assets/css/custom.css'));

	wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&display=swap', false);

	wp_enqueue_style('mailchimp-popup-basic-styles', '//cdn-images.mailchimp.com/embedcode/classic-071822.css', false);

	wp_enqueue_script('mailchimp-integration', 	"https://chimpstatic.com/mcjs-connected/js/users/0059ea58e7ce77f971b62de73/12d24091e2085c706353d9c6c.js", false);

	// only java-courses page
	if (is_page(1444)) {
		wp_enqueue_script('swiperjs', 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js', false);
		wp_enqueue_style('swiperstyles', 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css', false);
	};

	if (is_front_page()) {
		wp_enqueue_script('lottie-player', 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js', false);
	};

	//only registration page
	if (is_page(21)) {
		wp_enqueue_script('activenow', 'https://app.activenow.io/external/signup_form/load_by_js?city_id=&code=xyQzSP5iaXQWStEw&instructor_id=&proficiency_id=&school_id=7272&signup_form_id=42982&venue_id=&zz=', false);
	};

	// Creating a variable in html file and nounce for secure log - rootData.root_url
	wp_localize_script('justIdea', 'rootData', array(
		'root_url' => get_site_url(),
		'nonce' => wp_create_nonce('wp_rest')
	));
}
add_action('wp_enqueue_scripts', 'justidea_files');

if (function_exists('acf_add_options_page')) {
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
	add_theme_support('responsive-embeds');
	add_theme_support('html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	));
}
add_action('after_setup_theme', 'justidea_features');


// Creating a custom menu
function custom_new_menu()
{
	register_nav_menu('main-menu', __('Main Menu'));
	register_nav_menu('footer-menu', __('Footer Menu'));
	register_nav_menu('courses-java-sidebar', __('Sidebar'));
	register_nav_menu('work-with-us-sidebar', __('Work With Us Menu'));
}
add_action('init', 'custom_new_menu');


// Svg File available in WP admin panel
function add_file_types_to_uploads($file_types)
{
	$new_filetypes = array();
	$new_filetypes['svg'] = 'image/svg+xml';
	$file_types = array_merge($file_types, $new_filetypes);
	return $file_types;
}
add_filter('upload_mimes', 'add_file_types_to_uploads');


add_action('admin_init', 'disable_autosave');
function disable_autosave()
{
	wp_deregister_script('autosave');
}

// More wider gutenberg editor
function wp436784723890_expand_gutenberg_edit_area()
{
?>
	<style type="text/css">
		.wp-block {
			max-width: 1280px !important;
		}
	</style>
<?php
}
add_action('admin_head', 'wp436784723890_expand_gutenberg_edit_area');

function wpdocs_custom_excerpt_length($length)
{
	return 30;
}

function my_secure_generator($generator, $type)
{
	return '';
}

function my_remove_src_version($src)
{
	global $wp_version;
	$version_str = '?ver=' . $wp_version;
	$offset = strlen($src) - strlen($version_str);
	if ($offset >= 0 && strpos($src, $version_str, $offset) !== FALSE)
		return substr($src, 0, $offset);
	return $src;
}

add_filter('script_loader_src', 'my_remove_src_version');
add_filter('style_loader_src', 'my_remove_src_version');

add_filter('the_generator', 'my_secure_generator', 10, 2);

add_filter('excerpt_length', 'wpdocs_custom_excerpt_length', 999);
remove_action('wp_head', 'wp_generator');

update_option('siteurl', 'https://coderspro.pl');
update_option('home', 'https://coderspro.pl');
