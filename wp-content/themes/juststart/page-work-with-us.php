<?php
/*
 Template Name: Pracuj z Nami
 */
?>

<?php get_header(); ?>

<header class="work-with-us__header page-header wrapper">
  <h1 class="page-header__heading"><?php the_title(); ?>
  </h1>

  <div class="page-header__img-wrapper">
    <img src="<?php echo get_template_directory_uri(); ?>/assets/img/work-with-us-bg.png" alt="Tło" class="page-header__bg-img" />
    <div class="primary-image-layer"></div>
  </div>
</header>

<section class="work container wrapper">
  <sidebar class="work__sidebar col-xl-3">
    <?php wp_nav_menu(array(
      'theme_location' => 'work-with-us-sidebar'
    )); ?>
  </sidebar>
  <div class="work__content col-12 col-xl-9">
    <article class="work__offer" id="offer">
      <?php if ($offer_header = get_field('offer_header')) : ?>
        <h2 class="work__offer-header secondary-header"><?php echo esc_html($offer_header); ?></h2>
      <?php endif; ?>

      <?php if (have_rows('offer_list')) : ?>
        <ul class="work__list">

          <?php while (have_rows('offer_list')) :
            the_row(); ?>

            <?php if ($element = get_sub_field('element')) : ?>
              <li class="work__element primary__text">
                <?php echo esc_html($element); ?>
              </li>
            <?php endif; ?>

          <?php endwhile; ?>
        </ul>
      <?php endif; ?>
    </article>

    <article id="recruitment" class="work__recr">
      <?php if ($recruitment_header = get_field('recruitment_header')) : ?>
        <h2 class="work__recr-header secondary-header"><?php echo esc_html($recruitment_header); ?></h2>
      <?php endif; ?>

      <?php $steps_count = 0 ?>
      <?php if (have_rows('recruitment_steps')) : ?>
        <div class="work__recr-steps">
          <?php while (have_rows('recruitment_steps')) :
            the_row(); ?>
            <?php $steps_count++; ?>
            <?php if ($element = get_sub_field('element')) : ?>
              <div class="work__recr-step">
                <span class="work__recr-step-number">
                  <?php echo $steps_count; ?>
                </span>
                <div class="work__recr-step-content">
                  <?php if ($el_header = get_sub_field('element_header')) : ?>
                    <span class="work__recr-step-header">
                      <span class="work__recr-step-number--mobile">
                        <?php echo $steps_count; ?>
                      </span>
                      <?php echo $el_header; ?>
                    </span>
                  <?php endif; ?>
                  <span class="work__recr-step-text">
                    <?php echo esc_html($element); ?>
                  </span>
                </div>
              </div>
            <?php endif; ?>
          <?php endwhile; ?>
        </div>
      <?php endif; ?>
    </article>



    <article id="apply" class="work__form">
      <?php if ($form_header = get_field('form_header')) : ?>
        <h3 class="work__form-header secondary-header"><?php echo esc_html($form_header); ?></h3>
      <?php endif; ?>
      <div class="apply__form-wrapper col-12 col-xl-8">
        <?php
        echo do_shortcode('[contact-form-7 id="2058" title="Work With Us - Form"]');
        ?>
      </div>

    </article>
  </div>
</section>
<?php get_footer(); ?>