const contactBtns = document.querySelectorAll(
  '.menu-item-2902 > a');
  
const overlay = document.querySelector('.popup-overlay');

function handlePopupVisibility(e) {
  e.preventDefault();
  const popup = document.querySelector('.popup');
  popup.classList.toggle('opened');
}
if (contactBtns.length > 0) {
  contactBtns.forEach( btn => btn.addEventListener('click', handlePopupVisibility));
}

if (overlay) {
  overlay.addEventListener('click', handlePopupVisibility);
}

function handleInputFocus(){
  const id = this.id;
  const label = document.querySelector(`label[for='${id}'`);

  if(!label.classList.contains('focused')){
    label.classList.add('focused');
  }
}

function handleInputBlur(){
  const id = this.id;
  const label = document.querySelector(`label[for='${id}'`);

  if(this.value !== ''){
    if(!label.classList.contains('focused')){
      label.classList.add('focused');
    }
  }
  else {
    if(label.classList.contains('focused')){
      label.classList.remove('focused');
    }
  }
}


const addFocusListeners = function(){
  const textInputs = document.querySelectorAll('.popup input[type="text"]');
  const emailInput = document.querySelector('#mce-EMAIL');

  textInputs.forEach( input => {
    input.addEventListener('focus', handleInputFocus);
    input.addEventListener('blur', handleInputBlur);
  })

  emailInput.addEventListener('focus', handleInputFocus);
  emailInput.addEventListener('blur', handleInputBlur);
}();