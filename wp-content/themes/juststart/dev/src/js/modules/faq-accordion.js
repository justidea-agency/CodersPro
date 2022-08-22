const allFaqEl = document.querySelectorAll(".faq-element");


function handleOpen(e) {
  e.stopPropagation()
  const currentElement = e.currentTarget;

  currentElement.classList.toggle('open');
}

if (allFaqEl.length > 0) {
  allFaqEl.forEach(el => {
    el.addEventListener('click', handleOpen);
  })
}
