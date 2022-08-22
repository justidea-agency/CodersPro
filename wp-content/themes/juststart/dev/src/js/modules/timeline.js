const timelineBtn = document.querySelector('.timeline__btn');

const showHiddenItems = items => items.forEach(item => item.classList.remove('hidden'));

const changeBtnText = () => {
  if (timelineBtn.textContent == "Rozwiń") {
    timelineBtn.textContent = "Zwiń"
  }
  else {
    timelineBtn.textContent = "Rozwiń";
  }
}

function handleTimelineColapse() {
  const hiddenItems = document.querySelectorAll('.timeline-item.hidden');

  showHiddenItems(hiddenItems);

  changeBtnText();
}

if (timelineBtn) {
  timelineBtn.addEventListener('click', handleTimelineColapse)
}