const swiperEl = document.querySelector('.swiper');

if (swiperEl) {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidePerView: 1,
    pagination: {
      el: '.swiper-pagination',
    },
  })
}
