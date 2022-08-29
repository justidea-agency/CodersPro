const timelineBtn = document.querySelector('.timeline__btn');
const timelineList = document.querySelector('.timeline-items');
let collapsedFlag = false;

const showHiddenItems = items => items.forEach(item => item.classList.remove('hidden'));

const hideElements = () => {
  const allElements = document.querySelectorAll('.timeline-item');

  allElements.forEach( (el, i) => {
    if(i>=4 && !el.classList.contains('hidden')){
      el.classList.add('hidden');
    }
  })
}

const changeBtnText = () => {
  if (timelineBtn.textContent == "Rozwiń") {
    timelineBtn.textContent = "Zwiń"
  }
  else {
    timelineBtn.textContent = "Rozwiń";
  }
}

// const scrollToList = () => {
//   if(collapsedFlag){
//     timelineList.scrollIntoView(
//       {
//         behavior: "smooth", 
//         block: 'end'
//       })
//   }
//   if(!collapsedFlag){
//     timelineList.scrollIntoView(
//       {
//         behavior: "smooth", 
//         block: 'end'
//       })
//   }
// }

const changeTimeLineHeight = () => timelineList.classList.toggle("collapsed");

function handleTimelineColapse() {
  
  const hiddenItems = document.querySelectorAll('.timeline-item.hidden');

  if(collapsedFlag){
    hideElements();
  }
  if(!collapsedFlag){
    showHiddenItems(hiddenItems);
  }
  changeTimeLineHeight();
  changeBtnText();
  // scrollToList();

  collapsedFlag = !collapsedFlag;
}

if (timelineBtn) {
  timelineBtn.addEventListener('click', handleTimelineColapse)
}