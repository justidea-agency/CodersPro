const contactBtns = document.querySelectorAll(
  '.menu-item-2902 > a');
const coursesBtns = document.querySelectorAll('.course__btn');
const overlay = document.querySelector('.popup-overlay');

function handlePopupVisibility(e) {
  e.preventDefault();
  const popup = document.querySelector('.popup');
  popup.classList.toggle('opened');
  document.body.classList.toggle('no-scroll');
}
if (contactBtns.length > 0) {
  contactBtns.forEach(btn => btn.addEventListener('click', handlePopupVisibility));
}

if (coursesBtns.length > 0) {
  coursesBtns.forEach(btn => btn.addEventListener('click', handlePopupVisibility));
}


if (overlay) {
  overlay.addEventListener('click', handlePopupVisibility);
}

function handleInputFocus() {
  const id = this.id;
  const label = document.querySelector(`label[for='${id}'`);

  if (!label.classList.contains('focused')) {
    label.classList.add('focused');
  }
}

function handleInputBlur() {
  const id = this.id;
  const label = document.querySelector(`label[for='${id}'`);

  if (this.value !== '') {
    if (!label.classList.contains('focused')) {
      label.classList.add('focused');
    }
  }
  else {
    if (label.classList.contains('focused')) {
      label.classList.remove('focused');
    }
  }
}


const addFocusListeners = function () {
  const textInputs = document.querySelectorAll('.popup input[type="text"]');
  const emailInput = document.querySelector('#mce-EMAIL');

  textInputs.forEach(input => {
    input.addEventListener('focus', handleInputFocus);
    input.addEventListener('blur', handleInputBlur);
  })

  emailInput.addEventListener('focus', handleInputFocus);
  emailInput.addEventListener('blur', handleInputBlur);
}();




const togglePopup = () => {
  if(popup){
    popup.classList.toggle('opened');
    document.body.classList.toggle('no-scroll');
  }
}

const parseCookie = str =>
  str
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, v) => {
      if (v[0] && v[1]) {
        acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      }
      return acc;
    }, {});

const getCookie = name => {
  let cookies = document.cookie;
  const parsedCookies = parseCookie(cookies);

  return parsedCookies[name];
}

const newsletterCookieExist = getCookie('newsletterPopupCookie');

const checkCookieExpiration = () => {
  const nowTimestamp = Date.now();
  const offsetTimestamp = new Date().getTimezoneOffset() * 60000;
  // getTimeZoneOffset return offset in minutes
  // multiple it by 60000 give us miliseconds
  if (newsletterCookieExist) {
    cookieStore.get('newsletterPopupCookie')
      .then(cookie => {
        const cookieAlreadyExpired = (nowTimestamp - cookie.expires - offsetTimestamp) > 0;
        if (cookieAlreadyExpired) {
          togglePopup();
          createCookie('newsletterPopupCookie', 'value', getDateAfter7Days());
        }
      });
  }
}

const createCookie = (name, value, expires) => {
  document.cookie = `${name}=${value}; expires=${expires}`
}

const getDateAfter7Days = () => {
  const todayTimestamp = Date.now();
  const todayDate = new Date(todayTimestamp).toString();
  // 7 days = 604 800 000 ms
  const expirationTimestamp = todayTimestamp + 604800000;
  // 1 minute = 60000 ms
  // const expirationTimestamp = todayTimestamp + 60000;
  const expirationdDate = new Date(expirationTimestamp).toString();

  return expirationdDate;
}

const popup = document.querySelector('.popup');


const handleInitialPopupVisibility = function () {
  if (newsletterCookieExist && popup) {
    checkCookieExpiration();
  }
  if (!newsletterCookieExist && popup) {
    togglePopup();
    createCookie('newsletterPopupCookie', 'value', getDateAfter7Days());
  };
}();