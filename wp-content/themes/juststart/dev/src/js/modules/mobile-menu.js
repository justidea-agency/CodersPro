const hamburgerBtn = document.querySelector('.hamburger__button');
const mobileMenu = document.querySelector('.header-burger');

function handleNavOpen(){
  const isClosed = mobileMenu.classList.contains('closed');
  const isOpen = mobileMenu.classList.contains('opened');

  if(isClosed){
    mobileMenu.classList.remove("closed");
    mobileMenu.classList.add("opened");

  }
  if(isOpen){
    mobileMenu.classList.remove("opened");
    mobileMenu.classList.add("closed");
  }
}

hamburgerBtn.addEventListener('click', handleNavOpen);