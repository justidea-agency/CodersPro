<?php
/*
    Template Name: FAQ
    */
?>

<?php get_header(); ?>

<header class="faq-header page-header wrapper">
  <h1 class="page-header__heading"><?php the_title(); ?></h1>

  <div class="page-header__img-wrapper">
    <img src="<?php echo get_template_directory_uri(); ?>/assets/img/faq-bg.png" alt="Tło" class="page-header__bg-img" />
    <div class="primary-image-layer"></div>
  </div>
</header>

<main class="faq-container container">
  <?php if ($faq_subtitle = get_field('faq_subtitle')) : ?>
    <h2 class="faq-subtitle"><?php echo esc_html($faq_subtitle); ?></h2>
  <?php endif; ?>

  <?php if (have_rows('faq')) : ?>
    <ul class="faq-list">
      <?php while (have_rows('faq')) :
        the_row(); ?>

        <li class="faq-element">
          <div class="faq-element__content">
            <?php if ($question = get_sub_field('question')) : ?>
              <span class="faq-element__question"><?php echo esc_html($question); ?></span>
            <?php endif; ?>

            <?php if ($answer = get_sub_field('answer')) : ?>
              <span class="faq-element__answer">
                <?php echo esc_html($answer); ?>
              </span>
            <?php endif; ?>
          </div>
          <div class="faq-element__btn">
            <div class="faq__plus-minus-toggle collapsed"></div>
          </div>
        </li>
      <?php endwhile; ?>
    </ul>
  <?php endif; ?>
</main>
<?php
include(locate_template("components/informator-section.php", false, false));
?>
<?php get_footer(); ?>