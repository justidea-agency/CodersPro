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
  <a href="/coders-pro/informator.pdf" class="java-info__btn primary-btn">Pobierz informator</a>
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

  <button class="primary-btn timeline__btn">Rozwiń</button>

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
        'popup_button' => true
      );

      include(locate_template("components/course.php", false, false));
    endwhile;

    wp_reset_postdata();
    ?>
  </div>
</section>

<section class="java-benefits container">
  <sidebar class="sidebar-nav col-xl-3">
    <?php wp_nav_menu(array(
      'theme_location' => 'courses-java-sidebar',
      'add_li_class' => 'sidebar-nav__item'
    )); ?>
  </sidebar>

  <article class="java-why col-xl-9" id="why-java">
    <div class="java-why__content">
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


  <article class="java-learning col-xl-9 offset-xl-3" id="learning">
    <?php if ($learning_header = get_field('learning_header')) : ?>
      <h3 class="java-learning__header secondary-header">
        <?php echo esc_html($learning_header); ?>

      </h3>
    <?php endif; ?>


    <?php if (have_rows('learning_section')) : ?>
      <?php while (have_rows('learning_section')) :
        the_row(); ?>
        <div class="java-learning__tile">

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



  <article class="mentors-slider col-xl-9 offset-xl-3" id="mentors">
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
        wp_reset_postdata();
        ?>

      </div>
      <div class="slider__dots swiper-pagination">
      </div>
    </section>
  </article>



  <article class="course-include col-xl-9 offset-xl-3" id="bonuses">

    <h2 class="course-include__header">Co otrzymasz?</h2>

    <?php if (have_rows('what_you_get_tile')) : ?>
      <div class="course-include__list">
        <?php while (have_rows('what_you_get_tile')) :
          the_row(); ?>
          <div class="course-include__element">
            <?php if ($name = get_sub_field('name')) : ?>
              <h3 class="course-include__element-header col-lg-4"><?php echo esc_html($name); ?></h3>
            <?php endif; ?>

            <?php if ($description = get_sub_field('description')) : ?>
              <p class="course-include__element-text primary__text col-lg-8">
                <?php echo esc_html($description); ?>
              </p>
            <?php endif; ?>
          </div>
        <?php endwhile; ?>
      </div>
    <?php endif; ?>
  </article>



  <!-- SHOW COURSE GRADUATES -->
  <?php
  $show_graduates = get_field('show_graduates');
  if ($show_graduates) { ?>
    <article class="graduates-slider col-xl-9 offset-xl-3" id="graduates">
      <h2 class="graduates-slider__header">Kim są nasi absolwenci</h2>
      <section class="slider swiper">
        <div class="slider__slides swiper-wrapper">
          <?php
          $allGraduates = new WP_Query(array(
            'post_type' => 'graduates',
            'post_status' => 'publish',
            'posts_per_page' => 15,
            'orderby'   => 'meta_value',
            'order' => 'ASC',
          ));

          while (($allGraduates)->have_posts()) :
            $allGraduates->the_post();

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
          wp_reset_postdata();
          ?>
        </div>
        <div class="slider__dots swiper-pagination">
        </div>
      </section>
    </article>
  <?php }
  ?>

  <article class="java-payments col-xl-9 offset-xl-3" id="payments">

    <?php
    $payment_title = get_field('payment_title');
    ?>
    <h2 class="java-payments__header">
      <?php echo esc_html($payment_title); ?>
    </h2>

    <div class="payment__container">
      <?php if ($price = get_field('price')) : ?>
        <div class="payment__amount col-lg-4"><?php echo $price; ?> zł</div>
      <?php endif; ?>


      <?php if (have_rows('payment_parts')) : ?>
        <ul class="payment__list col-lg-8 col-xl-6">
          <?php while (have_rows('payment_parts')) :
            the_row(); ?>
            <?php if ($part_description = get_sub_field('part_description')) : ?>
              <li class="payment__item"><?php echo esc_html($part_description); ?></li>
            <?php endif; ?>
          <?php endwhile; ?>
        </ul>
      <?php endif; ?>

    </div>
  </article>




</section>





<?php
include(locate_template("components/informator-section.php", false, false));
?>
<?php get_footer(); ?>