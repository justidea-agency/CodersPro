<div class="slide swiper-slide">
  <div class="slide__picture">
    <img src="<?php echo esc_url($picture['url']); ?>" alt="<?php echo esc_attr($picture['alt']); ?>" />
  </div>
  <div class="slide__header">
    <h3 class="slide__name"><?php echo $args['name'] ?></h3>
    <h3 class="slide__job-title"><?php echo $args['job-title'] ?></h3>
    <p class="slide__description--desktop primary__text"><?php echo $args['description'] ?></p>
  </div>
  <p class="slide__description primary__text"><?php echo $args['description'] ?></p>
</div>