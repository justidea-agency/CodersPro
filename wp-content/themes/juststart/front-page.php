<?php
/*
    Template Name: Homepage
    */
?>

<?php get_header(); ?>

<?php
$hero_header = get_field('hero_header');
$hero_text = get_field('text_hero');

?>

<main id="main">
  <section class="hero">
    <h1 class="hero__title"><?php echo esc_html($hero_header); ?></h1>
    <p class="hero__text"><?php echo esc_html($hero_text); ?></p>
    <div class="hero__scroll">
    <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_0msniqpo.json"  background="transparent"  speed="1"  style="width: 110px; height: 110px;" loop  autoplay></lottie-player>
    </div>
    <div class="hero__overlay"></div>
  </section>

  <section class="home-about wrapper">
    <?php
    $home_about_header = get_field('home_about_header');
    $text_1 = get_field('text_1');
    $text_2 = get_field('text_2');
    $image_1 = get_field('image_1');
    ?>
    <h2 class="home-about__header secondary-header">
      <?php echo esc_html($home_about_header); ?>
    </h2>

    <p class="home-about__text"> <?php echo esc_html($text_1); ?></p>
    <p class="home-about__text"> <?php echo esc_html($text_2); ?></p>

    <div class="home-about__img-container">
      <?php
      if ($image_1) : ?>
        <img src="<?php echo esc_url($image_1['url']); ?>" alt="<?php echo esc_attr($image_1['alt']); ?>" />
      <?php endif; ?>
      <div class="primary-image-layer"></div>
    </div>
  </section>
</main>

<?php get_footer(); ?>