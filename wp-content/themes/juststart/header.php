<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package justidea-theme
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<header class="header wrapper">
		<nav class="header__nav">
			<a class="header__logo-wrapper" href="<?php echo get_home_url() ?>/">
				<img src="<?php echo get_template_directory_uri(); ?>/assets/img/logo.svg" alt="coderspro logo" class="header__logo">
			</a>
			<?php wp_nav_menu(array(
				'theme_location' => 'main-menu'
			)); ?>
		</nav>
	</header>

	<header class="header-burger closed wrapper">
		<div class="hamburger">
			<a class="header__logo--mobile" href="<?php echo get_home_url() ?>/">
				<img src="<?php echo get_template_directory_uri(); ?>/assets/img/logo.svg" alt="coderspro logo" class="header__logo">
			</a>
			<button class="menu-button hamburger__button js-menu__toggle">
				<span class="hamburger__label"></span>
			</button>
		</div>
		<?php wp_nav_menu(
			array(
				'theme_location' => 'main-menu'
			)
		) ?>
	</header>