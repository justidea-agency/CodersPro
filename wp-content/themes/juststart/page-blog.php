<?php
/*
 Template Name: Blog
 */
?>
<?php get_header(); ?>

<header class="work-with-us__header page-header wrapper">
  <h1 class="page-header__heading"><?php the_title(); ?>
  </h1>

  <div class="page-header__img-wrapper">
    <img src="<?php echo get_template_directory_uri(); ?>/assets/img/blog-bg.png" alt="Tło" class="page-header__bg-img" />
    <div class="primary-image-layer"></div>
  </div>
</header>

<section class="posts container wrapper">

  <?php
  $currentPage = get_query_var('paged');
  $posts = new WP_Query(array(
    'post_type' => 'blog',
    'posts_per_page' => 9,
  ));
  ?>
  <?php while ($posts->have_posts()) : $posts->the_post(); ?>
    <article class="posts__post col-md-6 col-xl-4 js-filter">
      <a href="<?php the_permalink(); ?>" class="posts__image-link">
        <div class="posts__post-background" style="background-image: url(<?php the_post_thumbnail_url(); ?>)">
        </div>
        <div class="primary-image-layer"></div>
      </a>

      <div class="posts__post-header">
        <div class="posts__post-header-title">
          <h2>
            <a class="posts__title secondary-header" title="<?php the_title(); ?>" href="<?php the_permalink(); ?>">
              <?php the_title(); ?>
            </a>
          </h2>
        </div>
      </div>
      <div class="posts__post-content">
        <?php echo the_excerpt(); ?>
      </div>
      <a href="<?php the_permalink(); ?>" class="primary-btn posts__btn">Zobacz więcej</a>
    </article>
  <?php endwhile;
  wp_reset_query(); ?>


</section>

<?php get_footer(); ?>