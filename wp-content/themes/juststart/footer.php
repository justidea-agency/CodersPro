<?php

/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package justidea-theme
 */
?>

<?php
$email = get_field('Email', 'options');
$phone = get_field('Phone', 'options');
?>

<footer class="footer">
	<div class="footer__coderspro-wrapper">
		<div class="footer__left-column col-lg-4 col-xl-6">
			<div class="footer__logos">
				<a href="<?php echo get_home_url() ?>/">
					<img src="<?php echo get_template_directory_uri(); ?>/assets/img/white-logo.svg" alt="coderspro logo" class="footer__logo">
				</a>
				<a href="https://pl.linkedin.com/company/coderspro" target="blank">
					<img src="<?php echo get_template_directory_uri(); ?>/assets/img/footer/linkedin-icon.svg" alt="linkedin" class="footer__linkedin-icon">
				</a>
			</div>
			<div class="footer__info">
				<a href="tel:<?php echo $phone ?>">
					<div class="single-info">
						<spaan class="single-info__icon phone">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/img/footer/phone-icon.svg" alt="Phone" class="footer__phone-icon">
						</spaan>
						<span class="single-info__text"><?php echo esc_html($phone); ?></span>
					</div>
				</a>
				<a href="mailto:<?php echo $mail ?>">
					<div class="single-info">
						<span class="single-info__icon email">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/img/footer/email-icon.svg" alt="Mail" class="footer__mail-icon">
						</span>
						<span class="single-info__text"><?php echo esc_html($email); ?></span>
					</div>
				</a>
			</div>
		</div>
		<div class="footer__menu col-lg-4">
			<?php wp_nav_menu(
				array(
					'theme_location' => 'footer-menu'
				)
			) ?>
			<img src="<?php echo get_template_directory_uri(); ?>/assets/img/footer/footer-decorator.svg" alt="Decorator" class="footer__decorator">
		</div>
		<div class="footer__regulations col-lg-4 col-xl-2">
			<a href="/terms-of-use.pdf" class="regulation__link">Regulamin serwisu</a>
			<a href="/terms-of-use-trainings.pdf" class="regulation__link">Regulamin kursu</a>
			<a href="/privacy-policy.pdf" class="regulation__link">Polityka prywatności</a>
			<div class="footer__regulations-decorator"></div>
		</div>
	</div>

	<div class="footer__justidea-wrapper wrapper">
		<div class="footer__copyrights">
			Copyright @ Coderspro <?php echo date("Y") ?>
		</div>
		<div class="footer__justidea">
			<div class="footer__justidea-text-wrapper">
				<span class="footer__justidea-text">
					Created with love by
				</span>
				<span class="footer__justidea-links">
					<a href="https://justidea.agency/pl/" title="Agencja Interaktywna Kraków" target="blank_">JustIdea</a> - <a href="https://justidea.agency/pl/" title="Agencja Interaktywna Kraków" target="_blank">Agencja Interaktywna Kraków</a>
				</span>
			</div>
			<a href="https://justidea.agency/pl/" target="blank">
				<img class="footer__justidea-logo" src="<?php echo get_template_directory_uri(); ?>/assets/img/footer/justidea-logo.svg" alt="Agencja Interaktywna">
			</a>
		</div>
	</div>
</footer>


<?php
include(locate_template("components/newsletter-popup.php", false, false));
?>
<?php wp_footer(); ?>

</body>

</html>