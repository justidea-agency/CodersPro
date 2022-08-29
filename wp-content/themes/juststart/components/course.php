<article class="course">

  <div class="course__data">
    <span class="course__data-label">Data</span>
    <span class="course__data-content">
      <?php echo $args['date'] ?>
    </span>
  </div>
  <div class="course__data">
    <span class="course__data-label">Tryb</span>
    <span class="course__data-content">
      <?php echo $args['mode_weekly'] ?>
    </span>
  </div>
  <div class="course__data">
    <span class="course__data-label">Tryb</span>
    <span class="course__data-content">
      <?php echo $args['mode_online'] ?>
    </span>
  </div>

  <div class="course__data">
    <span class="course__data-label">Czas trwania</span>
    <span class="course__data-content">
      <?php echo $args['duration'] ?>
    </span>
  </div>
  <div class="course__data">
    <span class="course__data-label">Cena</span>
    <span class="course__data-content">
      <?php echo $args['price'] ?>
      <?php
      if ($args['regular_price']) { ?>
        <span class="course__regular-price"><?php echo $args['regular_price']; ?></span>
      <?php }
      ?>
    </span>
  </div>
  <?php if ($args['popup_button']) { ?>
    <div class="course__data course-btn__container">

      <button class="course__btn">Więcej o kursie</button>
    </div>
  <?php } ?>
  <?php
  if ($args['regular_price']) { ?>
    <span class="course__promotion-label">PROMOCJA</span>
  <?php }
  ?>
</article>