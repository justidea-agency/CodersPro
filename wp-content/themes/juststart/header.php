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
			<?php wp_nav_menu(); ?>
		</nav>
	</header>

	<header class="header-burger closed wrapper">
		<!--<img src="<?php echo get_template_directory_uri(); ?>/assets/img/menu-bg-small.png"
         class="header-burger__white-bg" alt="Logo header">-->
		<!-- <a href="<?php echo get_home_url(); ?>/" aria-label="Justidea homepage">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/logo-mobile.png" alt="logo"
                class="header-burger__logo">
        </a> -->
		<div class="hamburger">
			<a class="header__logo--mobile" href="<?php echo get_home_url() ?>/">
				<img src="<?php echo get_template_directory_uri(); ?>/assets/img/logo.svg" alt="coderspro logo" class="header__logo">
			</a>
			<button class="menu-button hamburger__button js-menu__toggle">
				<span class="hamburger__label"></span>
			</button>
		</div>
		<?php wp_nav_menu() ?>
	</header>