<?php
$informator_header_1 = get_field('informator_header_first_line', 'options');
$informator_header_2 = get_field('informator_header_second_line', 'options');
$informator_text = get_field('informator_text', 'options');
?>

<section class="informator">
  <div class="informator__container">
    <div class="informator__books-container col-xl-4">
      <img src="<?php echo get_template_directory_uri(); ?>/assets/img/footer/footer-books.png" alt="Coders Pro Informator" class="informator__img">
    </div>
    <div class="informator__content col-xl-7 offset-xl-1">
      <span class="informator__header"><?php echo esc_html($informator_header_1); ?> </span>
      <span class="informator__header">
        <?php echo esc_html($informator_header_2); ?>
      </span>
      <p class="informator__text"><?php echo esc_html($informator_text); ?></p>
      <a href="/coders-pro/informator.pdf"
      class="informator__btn">Pobierz informator</a>
    </div>
  </div>
</section>