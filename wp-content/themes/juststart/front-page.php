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
      <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_0msniqpo.json" background="transparent" speed="1" style="width: 110px; height: 110px; margin: 0 auto;" loop autoplay></lottie-player>
    </div>
    <div class="hero__overlay"></div>
  </section>

  <section class="home-about wrapper container" id="kim-jestesmy">
    <?php
    $home_about_header = get_field('home_about_header');
    $text_1 = get_field('text_1');
    $text_2 = get_field('text_2');
    $image_1 = get_field('image_1');
    ?>
    <div class="home-about__text-wrapper col-xl-5 offset-xl-1">
      <h2 class="home-about__header secondary-header">
        <?php echo esc_html($home_about_header); ?>
      </h2>
      <p class="home-about__text primary__text"> <?php echo esc_html($text_1); ?></p>
      <p class="home-about__text primary__text"> <?php echo esc_html($text_2); ?></p>
    </div>

    <div class="home-about__img-container col-xl-6">
      <?php
      if ($image_1) : ?>
        <img src="<?php echo esc_url($image_1['url']); ?>" alt="<?php echo esc_attr($image_1['alt']); ?>" />
      <?php endif; ?>
      <div class="primary-image-layer home-about__layer"></div>
    </div>

  </section>

  <section class="home-courses wrapper container" id="kursy-java">
    <?php
    $text_java_course = get_field('text_java_course');
    $btn_text_java_course = get_field('btn_text_java_course');
    ?>

    <h3 class="home-courses__header secondary-header">Kurs Java</h3>
    <div class="home-courses__content">
      <p class="home-courses__text primary__text col-lg-8"><?php echo esc_html($text_java_course); ?></p>
      <a href="<?php echo get_page_link(1444); ?>" class="home-courses__btn primary-btn"><?php echo esc_html($btn_text_java_course); ?></a>
    </div>

    <div class="home-courses__table">
      <?php

      $allCourses = new WP_Query(array(
        'post_type' => 'course',
        'post_status' => 'publish',
        'posts_per_page' => 10,
        'orderby'   => 'meta_value',
        'order' => 'ASC',
      ));

      while ($allCourses->have_posts()) : $allCourses->the_post();

        $date = get_field('date');
        $mode_weekly = get_field('course_mode_weekly');
        $mode_online = get_field('course_mode_online');
        $duration = get_field('course_duration');
        $price = get_field('promotional_price');
        $regular_price = get_field('regular_price');

        $args = array(
          'date' => $date,
          'mode_weekly' => $mode_weekly,
          'mode_online' => $mode_online,
          'duration' => $duration,
          'price' => $price,
          'regular_price' => $regular_price,
        );

        include(locate_template("components/course.php", false, false));
      endwhile;

      wp_reset_postdata();
      ?>
    </div>
  </section>

  <section class="home-benefits container wrapper" id="co-nas-wyroznia">
    <div class="home-benefits__content col-xl-5">

      <?php if ($section_under_courses_header = get_field('section_under_courses_header')) : ?>
        <h3 class="home-benefits__header secondary-header"><?php echo esc_html($section_under_courses_header); ?></h3>
      <?php endif; ?>

      <?php if ($section_under_courses_text = get_field('section_under_courses_text')) : ?>
        <p class="home-benefits__text primary__text"> <?php echo esc_html($section_under_courses_text); ?></p>
      <?php endif ?>
      <?php if ($section_under_courses_text_2 = get_field('section_under_courses_text_2')) : ?>
        <p class="home-benefits__text primary__text"><?php echo esc_html($section_under_courses_text_2); ?></p>
      <?php endif; ?>
    </div>
    <div class="home-benefits__img-container col-xl-6 offset-xl-1">
      <?php if ($section_under_courses_image = get_field('section_under_courses_image')) : ?>
        <img src="<?php echo esc_url($section_under_courses_image['url']); ?>" alt="<?php echo esc_attr($section_under_courses_image['alt']); ?>" />
      <?php endif; ?>
      <div class="primary-image-layer"></div>
    </div>
  </section>

  <section class="home-work container wrapper" id="praca-po-kursie">
    <div class="home-work__content col-xl-5 offset-xl-1">

      <?php if ($section_work_header = get_field('section_under_courses_2_header')) : ?>
        <h3 class="home-work__header secondary-header "><?php echo esc_html($section_work_header); ?></h3>
      <?php endif; ?>
      <?php if ($section_work_text = get_field('section_under_courses_2_text')) : ?>
        <p class="home-work__text primary__text"> <?php echo esc_html($section_work_text); ?></p>
      <?php endif; ?>
      <?php if ($section_work_text_2 = get_field('section_under_courses_2_text_2')) : ?>
        <p class="home-work__text primary__text"><?php echo esc_html($section_work_text_2); ?></p>
      <?php endif; ?>
      <?php if ($section_work_text_3 = get_field('section_under_courses_2_text_3')) : ?>
        <p class="home-work__text primary__text"><?php echo esc_html($section_work_text_3); ?></p>
      <?php endif; ?>

    </div>
    <div class="home-work__img-container col-xl-6">
      <?php if ($section_work_image = get_field('section_under_courses_2_img')) : ?>
        <img src="<?php echo esc_url($section_work_image['url']); ?>" alt="<?php echo esc_attr($section_work_image['alt']); ?>" />
      <?php endif; ?>
      <div class="primary-image-layer"></div>
    </div>
  </section>

  <section class="home-finances wrapper" id="finansowanie">
    <img src="<?php echo get_template_directory_uri(); ?>/assets/img/finances/finances-decorator-1.svg" alt="Decorative Image" class="home-finances__decorator dec-1">
    <img src="<?php echo get_template_directory_uri(); ?>/assets/img/finances/finances-decorator-2.svg" alt="Decorative Image" class="home-finances__decorator dec-2">
    <img src="<?php echo get_template_directory_uri(); ?>/assets/img/finances/finances-decorator-3.svg" alt="Decorative Image" class="home-finances__decorator dec-3">
    <div class="home-finances__decorator dec-4"></div>
    <img src="<?php echo get_template_directory_uri(); ?>/assets/img/finances/finances-decorator-4.svg" alt="Decorative Image" class="home-finances__decorator dec-5">

    <h4 class="home-finances__header">
      <?php if ($finanse_header = get_field('finanse_header')) : ?>
        <?php echo esc_html($finanse_header); ?>
      <?php endif; ?>
    </h4>
    <p class="home-finances__subtitle">
      <?php if ($finanse_parts_header = get_field('finanse_parts_header')) : ?>
        <?php echo esc_html($finanse_parts_header); ?>
      <?php endif; ?>
    </p>


    <?php if (have_rows('finanse_elements')) : ?>
      <ul class="home-finances__parts">

        <?php while (have_rows('finanse_elements')) :
          the_row(); ?>

          <?php if ($finanse_element = get_sub_field('finanse_element')) : ?>
            <li class="home-finances__part">
              <?php echo esc_html($finanse_element); ?>
            </li>
          <?php endif; ?>
        <?php endwhile; ?>
      </ul>
    <?php endif; ?>

    <?php if ($finanse_payment_options_header = get_field('finanse_payment_options_header')) : ?>
      <h5 class="home-finances__options-header">
        <?php echo esc_html($finanse_payment_options_header); ?>
      </h5>
    <?php endif; ?>

    <?php if (have_rows('finanse_payment_options')) : ?>
      <div class="home-finances__options">
        <?php while (have_rows('finanse_payment_options')) :
          the_row(); ?>

          <div class="finances-option">
            <?php
            $icon = get_sub_field('icon');
            if ($icon) : ?>
              <div class="finances-option__logo">
                <img src="<?php echo esc_url($icon['url']); ?>" alt="<?php echo esc_attr($icon['alt']); ?>" />
              </div>
            <?php endif; ?>

            <?php if ($header = get_sub_field('header')) : ?>
              <div class="finances-option__header">
                <?php echo esc_html($header); ?>
              </div>
            <?php endif; ?>

            <?php if ($subtitle = get_sub_field('subtitle')) : ?>
              <p class="finances-option__text primary__text">
                <?php echo esc_html($subtitle); ?>
              </p>
          </div>
        <?php endif; ?>
      <?php endwhile; ?>
      </div>
    <?php endif; ?>



  </section>
</main>
<?php
include(locate_template("components/informator-section.php", false, false));
?>
<?php get_footer(); ?>