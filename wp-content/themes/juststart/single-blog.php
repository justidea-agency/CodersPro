<?php
get_header();
the_post();

$bgImg = get_field('fullwidth_img');
?>

<header class="section-blog__header page-header wrapper">
  <h1 class="section-blog__heading page-header__heading"><?php the_title(); ?>
  </h1>

  <div class="page-header__img-wrapper">
    <?php
    if ($bgImg) : ?>
      <img class="page-header__bg-img" src="<?php echo esc_url($bgImg['url']); ?>" alt="<?php echo esc_attr($bgImg['alt']); ?>" />
    <?php endif; ?>

    <div class="primary-image-layer"></div>
  </div>
</header>


<section class="section-blog wrapper container">
  <?php the_content(); ?>
</section>


<section class="section-blog__similar-posts">
  <h3 class="section-blog__similar-posts-header">Zobacz inne artykuły</h3>

  <div class="section-blog__similar-posts-container">
    <?php
    $random_posts = new WP_Query(array(
      'post_type' => 'blog',
      'posts_per_page' => 2,
      'orderby' => 'rand'
    )); ?>

    <?php while ($random_posts->have_posts()) : $random_posts->the_post(); ?>

      <a href="<?php the_permalink(); ?>" class="posts__image-link section-blog__similar-posts-post col-12 col-md-6">
        <h4 class="section-blog__similar-posts-title"><?php the_title(); ?></h4>
        <div class="posts__post-background" style="background-image: url(<?php the_post_thumbnail_url(); ?>)">
        </div>
        <div class="primary-image-layer"></div>
      </a>


    <?php endwhile; ?>
  </div>
</section>

<?php
include(locate_template("components/informator-section.php", false, false));
?>
<?php get_footer(); ?>