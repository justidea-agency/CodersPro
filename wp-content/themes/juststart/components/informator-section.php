<section class="informator">
  <div class="informator__container">
    <div class="informator__books-container col-xl-4">
      <img src="<?php echo get_template_directory_uri(); ?>/assets/img/footer/footer-books.png" alt="Coders Pro Informator" class="informator__img">
    </div>
    <div class="informator__content col-xl-7 offset-xl-1">
      <?php
      if ($informator_header_1 = get_field('informator_header_first_line', 'options')) : ?>
        <span class="informator__header"><?php echo esc_html($informator_header_1); ?> </span>
      <?php endif; ?>
      <?php
      if ($informator_header_2 = get_field('informator_header_second_line', 'options')) : ?>
        <span class="informator__header">
          <?php echo esc_html($informator_header_2); ?>
        </span>
      <?php endif; ?>
      <?php
      if ($informator_text = get_field('informator_text', 'options')) : ?>
        <p class="informator__text"><?php echo esc_html($informator_text); ?></p>
      <?php endif; ?>
      <a href="/coders-pro/informator.pdf" class="informator__btn">Pobierz informator</a>
    </div>
  </div>
</section>