<?php
/*
 Template Name: Kursy Java 
 */
?>

<?php get_header(); ?>

<header class="java-header page-header wrapper">
  <img src="<?php echo get_template_directory_uri(); ?>/assets/img/java-icon-white.svg" alt="Java Ikona" class="java-header__icon">
  <h1 class="page-header__heading"><?php the_title(); ?>
  </h1>

  <div class="page-header__img-wrapper">
    <img src="<?php echo get_template_directory_uri(); ?>/assets/img/course-java-bg.png" alt="Tło" class="page-header__bg-img" />
    <div class="primary-image-layer"></div>
  </div>
</header>

<section class="java-info container">

  <?php if ($subtitle = get_field('subtitle')) : ?>
    <p class="primary__text java-info__text"><?php echo esc_html($subtitle); ?></p>
  <?php endif; ?>
  <a href="" class="java-info__btn primary-btn">Pobierz informator</a>
</section>

<section class="java-timeline container">

  <?php if (have_rows('timeline_steps')) : ?>
    <div class="timeline-items">
      <?php $count = 0; ?>
      <?php while (have_rows('timeline_steps')) :
        the_row(); ?>
        <?php $count++ ?>
        <div class="timeline-item <?php if ($count > 4) {
                                    echo 'hidden';
                                  }; ?>">
          <div class="timeline-item__row">
            <?php if ($numer_kroku = get_sub_field('numer_kroku')) : ?>
              <span class="step__number"><?php echo $numer_kroku; ?></span>
            <?php endif; ?>

            <div class="timeline-item__header">
              <?php if ($title = get_sub_field('title')) : ?>
                <span class="step__title"><?php echo esc_html($title); ?></span>
              <?php endif; ?>

              <?php if ($subtitle = get_sub_field('subtitle')) : ?>
                <span class="step__subtitle"><?php echo esc_html($subtitle); ?></span>
              <?php endif; ?>
            </div>
          </div>

          <?php if ($opis_etapu = get_sub_field('opis_etapu')) : ?>
            <p class="timeline-item__content primary__text">
              <?php echo esc_html($opis_etapu); ?>
            </p>
          <?php endif; ?>
        </div>
      <?php endwhile; ?>
    </div>
  <?php endif; ?>

  <button class="timeline__btn primary-btn">Rozwiń</button>

  <div class="timeline-courses__table">
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

<section class="java-benefits container">

  <article class="java-why" id="why-java">
    <sidebar class="sidebar-nav col-xl-3">
      <?php wp_nav_menu(array(
        'theme_location' => 'courses-java-sidebar',
        'add_li_class' => 'sidebar-nav__item'
      )); ?>
    </sidebar>

    <div class="java-why__content col-xl-9">

      <?php if ($why_java_header = get_field('why_java_header')) : ?>
        <h2 class="java-why__header secondary-header"> <?php echo esc_html($why_java_header); ?></h2>
      <?php endif; ?>

      <?php if ($why_java_text = get_field('why_java_text')) : ?>
        <p class="java-why__content primary__text">
          <?php echo esc_html($why_java_text); ?>
        </p>
      <?php endif; ?>
      <?php if ($why_java_text_2 = get_field('why_java_text_2')) : ?>
        <p class="java-why__content primary__text"><?php echo esc_html($why_java_text_2); ?></p>
      <?php endif; ?>
    </div>
  </article>


  <article class="java-learning col-xl-9 offset-xl-3">
    <?php if ($learning_header = get_field('learning_header')) : ?>
      <h3 class="java-learning__header secondary-header">
        <?php echo esc_html($learning_header); ?>

      </h3>
    <?php endif; ?>


    <?php if (have_rows('learning_section')) : ?>
      <?php while (have_rows('learning_section')) :
        the_row(); ?>
        <div class="java-learning__tile" id="learning">

          <?php
          $logo = get_sub_field('logo');
          if ($logo) : ?>
            <img class="java-learning__logo" src="<?php echo esc_url($logo['url']); ?>" alt="<?php echo esc_attr($logo['alt']); ?>" />
          <?php endif; ?>
          <?php if (have_rows('podpunkty')) : ?>
            <ul class="java-learning__list">
              <?php while (have_rows('podpunkty')) :
                the_row(); ?>
                <?php if ($podpunkt = get_sub_field('podpunkt')) : ?>
                  <li class="java-learning__list-item"> <?php echo esc_html($podpunkt); ?></li>
                <?php endif; ?>
              <?php endwhile; ?>
            </ul>
          <?php endif; ?>
        </div>
      <?php endwhile; ?>
    <?php endif; ?>
  </article>

  <article class="mentors-slider col-xl-9 offset-xl-3">
    <h2 class="mentors-slider__header">Kim są nasi mentorzy</h2>
    <section class="slider swiper">
      <div class="slider__slides swiper-wrapper">
        <?php
        $allMentors = new WP_Query(array(
          'post_type' => 'mentors',
          'post_status' => 'publish',
          'posts_per_page' => 15,
          'orderby'   => 'meta_value',
          'order' => 'ASC',
        ));

        while (($allMentors)->have_posts()) :
          $allMentors->the_post();

          $name = get_field('name');
          $job = get_field('job');
          $about = get_field('about');
          $picture = get_field('picture');


          $args = array(
            'name' => $name,
            'picture' => $picture,
            'job-title' => $job,
            'description' => $about
          );

          include(locate_template("components/each-slide-template.php", false, false));
        endwhile;
        ?>

      </div>
      <div class="slider__dots swiper-pagination">
      </div>
    </section>
  </article>

</section>





<?php
include(locate_template("components/informator-section.php", false, false));
?>
<?php get_footer(); ?>