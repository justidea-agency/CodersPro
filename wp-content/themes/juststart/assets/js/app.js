/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_faq_accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/faq-accordion */ "./src/js/modules/faq-accordion.js");
/* harmony import */ var _modules_faq_accordion__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_faq_accordion__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_mobile_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/mobile-menu */ "./src/js/modules/mobile-menu.js");
/* harmony import */ var _modules_mobile_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_mobile_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_timeline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timeline */ "./src/js/modules/timeline.js");
/* harmony import */ var _modules_timeline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_timeline__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_course_java_sliders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/course-java-sliders */ "./src/js/modules/course-java-sliders.js");
/* harmony import */ var _modules_course_java_sliders__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_course_java_sliders__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_mailchimp_popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/mailchimp-popup */ "./src/js/modules/mailchimp-popup.js");
/* harmony import */ var _modules_mailchimp_popup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_mailchimp_popup__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_form_labels_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/form-labels-animation */ "./src/js/modules/form-labels-animation.js");
/* harmony import */ var _modules_form_labels_animation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_form_labels_animation__WEBPACK_IMPORTED_MODULE_5__);







/***/ }),

/***/ "./src/js/modules/course-java-sliders.js":
/*!***********************************************!*\
  !*** ./src/js/modules/course-java-sliders.js ***!
  \***********************************************/
/***/ (function() {

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


/***/ }),

/***/ "./src/js/modules/faq-accordion.js":
/*!*****************************************!*\
  !*** ./src/js/modules/faq-accordion.js ***!
  \*****************************************/
/***/ (function() {

const allFaqEl = document.querySelectorAll(".faq-element");


function handleOpen(e) {
  e.stopPropagation()
  const currentElement = e.currentTarget;
  const crossSign = e.currentTarget.querySelector('.faq__plus-minus-toggle');
  crossSign.classList.toggle('collapsed');
  currentElement.classList.toggle('open');
}

if (allFaqEl.length > 0) {
  allFaqEl.forEach(el => {
    el.addEventListener('click', handleOpen);
  })
}


/***/ }),

/***/ "./src/js/modules/form-labels-animation.js":
/*!*************************************************!*\
  !*** ./src/js/modules/form-labels-animation.js ***!
  \*************************************************/
/***/ (function() {

function createLabel(text, nameAttr) {
  const newLabel = document.createElement('label');
  const newContent = document.createTextNode(text);
  newLabel.appendChild(newContent);
  newLabel.setAttribute('for', nameAttr);
  return newLabel;
}

function injectLabelToDom(label, parent, input) {
  parent.insertBefore(label, input);
}

function handleBlur(e) {
  const parent = e.target.parentNode;
  const input = e.target;
  if (input.value == '' && parent.classList.contains('focused')) {
    parent.classList.remove('focused');
  }
}
function handleFocus(e) {
  const parent = e.target.parentNode;

  if (!parent.classList.contains('focused')) {
    parent.classList.add('focused');
  }
}

function handleInputFile(e) {
  const input = e.target;
  const parent = input.parentNode;
  const fileUploaded = input.files.length > 0;

  if (fileUploaded) {
    const spanFileName = document.querySelector('span.file-name');
    const newSpan = document.createElement('span');
    newSpan.classList.add('file-name');
    newSpan.textContent = input.files[0].name;
    if (spanFileName !== null) {
      spanFileName.parentElement.removeChild(spanFileName);
    }
    injectLabelToDom(newSpan, parent, input);
  }

  if (!fileUploaded) {
    const fileNameSpan = document.querySelector('span.file-name');
    fileNameSpan && fileNameSpan.delete();
  }

  if (fileUploaded && !parent.classList.contains('focused')) {
    parent.classList.add('focused');
  }

  else if (!fileUploaded && parent.classList.contains('focused')) {
    parent.classList.remove('focused');
  }
}

function handleSelectChange(e) {
  const courseIsSelected = e.target.value !== '';
  const parent = e.target.parentNode;
  const parentIsFocused = parent.classList.contains('focused');


  if (courseIsSelected && !parentIsFocused) {
    parent.classList.add('focused');
  }

  if (!courseIsSelected && parentIsFocused) {
    parent.classList.remove('focused');
  }
}

function listenForFocus(inputs) {
  inputs.forEach(input => input.addEventListener('focus', handleFocus));
}

function listenForBlur(inputs) {
  inputs.forEach(input => input.addEventListener('blur', handleBlur));
}

function handleRegistrationForm() {
  const allTextInputs = document.querySelectorAll('.activenow-required-field > input[type="text"]');

  const select = document.querySelector('#eventable_id');

  if (allTextInputs) {
    allTextInputs.forEach(input => {
      const newText = input.placeholder;
      const nameAttr = input.getAttribute('name');
      const parentNode = input.parentNode;

      const label = createLabel(newText, nameAttr);

      injectLabelToDom(label, parentNode, input);
    })
  }

  if (select) {
    const newText = select.firstChild.textContent;
    const nameAttr = select.getAttribute('name');
    const parentNode = select.parentNode;

    const label = createLabel(newText, nameAttr);
    injectLabelToDom(label, parentNode, select);

    select.addEventListener('change', handleSelectChange);
  }

  listenForFocus(allTextInputs);
  listenForBlur(allTextInputs);
}


function handleWorkWithUsForm() {
  const formInputs = document.querySelectorAll('.wpcf7-form-control-wrap input');
  const fileInput = document.querySelector(".wpcf7-form-control-wrap input[type='file']");

  if (formInputs) {
    formInputs.forEach(input => {
      if (input.type !== "checkbox" && input.type !== "file") {
        const newText = input.placeholder;
        const nameAttr = input.getAttribute('name');
        const parentNode = input.parentNode;

        const label = createLabel(newText, nameAttr);
        injectLabelToDom(label, parentNode, input);
        input.addEventListener('focus', handleFocus);
        input.addEventListener('blur', handleBlur);
      }
    })
  }

  if (fileInput) {
    const newText = "Dodaj CV"
    const nameAttr = fileInput.getAttribute('name');
    const parentNode = fileInput.parentNode;

    const label = createLabel(newText, nameAttr);
    injectLabelToDom(label, parentNode, fileInput);

    fileInput.addEventListener('change', handleInputFile);
  }

}

handleWorkWithUsForm();
window.setTimeout(handleRegistrationForm, 600);

/***/ }),

/***/ "./src/js/modules/handle-sidebar-nav.js":
/*!**********************************************!*\
  !*** ./src/js/modules/handle-sidebar-nav.js ***!
  \**********************************************/
/***/ (function() {

const coursesSidebarNav = document.querySelector('#menu-java-course-sidebar');
const workWithUsSidebarNav = document.querySelector('#menu-work-with-us-sidebar-menu');



const setFirstElementActive =  (sidebar) => {
  if(sidebar){
    const firstEl = sidebar.querySelector('li:first-of-type');
    firstEl && firstEl.classList.add('active');
  }
};

setFirstElementActive(coursesSidebarNav);
setFirstElementActive(workWithUsSidebarNav);


const screenIsWiderThanXL = window.matchMedia(`only screen and (min-width: 1200px)`).matches;


const removeNotActiveLink = () => {
  const link = document.querySelector('li.active');

  link && link.classList.remove('active');
}

function changeActiveLink(e){
  const parent = e.target.parentNode;
  removeNotActiveLink();
  parent.classList.add('active');
}

if (screenIsWiderThanXL) {
  const coursesAllSidebarLinks = document.querySelectorAll('.sidebar-nav a');

  coursesAllSidebarLinks.forEach( link => {
    link.addEventListener('click', changeActiveLink)
  })

  const workWithUsAllSidebarLinks = document.querySelectorAll('.work__sidebar a');

  workWithUsAllSidebarLinks.forEach( link => {
    link.addEventListener('click', changeActiveLink)
  })
}



/***/ }),

/***/ "./src/js/modules/mailchimp-popup.js":
/*!*******************************************!*\
  !*** ./src/js/modules/mailchimp-popup.js ***!
  \*******************************************/
/***/ (function() {

const contactBtns = document.querySelectorAll(
  '.menu-item-2902 > a');
const coursesBtns = document.querySelectorAll('.course__btn');
const overlay = document.querySelector('.popup-overlay');
const footerContantctBtn = document.querySelector("#menu-item-4083");

function handlePopupVisibility(e) {
  e.preventDefault();
  const popup = document.querySelector('.popup');
  popup.classList.toggle('opened');
  document.body.classList.toggle('no-scroll');
}
if (contactBtns.length > 0) {
  contactBtns.forEach(btn => btn.addEventListener('click', handlePopupVisibility));
}

if(footerContantctBtn){
  footerContantctBtn.addEventListener('click', handlePopupVisibility)
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

/***/ }),

/***/ "./src/js/modules/mobile-menu.js":
/*!***************************************!*\
  !*** ./src/js/modules/mobile-menu.js ***!
  \***************************************/
/***/ (function() {

const hamburgerBtn = document.querySelector('.hamburger__button');
const mobileMenu = document.querySelector('.header-burger');
const allMenuLinks = document.querySelectorAll('#menu-main-menu-1 a');

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

function addListenersToMenuLinks(){
  allMenuLinks.forEach( link => link.addEventListener('click', handleNavOpen));
}

addListenersToMenuLinks();

/***/ }),

/***/ "./src/js/modules/timeline.js":
/*!************************************!*\
  !*** ./src/js/modules/timeline.js ***!
  \************************************/
/***/ (function() {

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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./src/js/app.js");
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/js/modules/course-java-sliders.js");
/******/ 	__webpack_require__("./src/js/modules/faq-accordion.js");
/******/ 	__webpack_require__("./src/js/modules/form-labels-animation.js");
/******/ 	__webpack_require__("./src/js/modules/handle-sidebar-nav.js");
/******/ 	__webpack_require__("./src/js/modules/mailchimp-popup.js");
/******/ 	__webpack_require__("./src/js/modules/mobile-menu.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/modules/timeline.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ0Y7QUFDSDtBQUNXO0FBQ0o7Ozs7Ozs7Ozs7O0FDSm5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7Ozs7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELEdBQUc7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxHQUFHO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxJQUFJO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixLQUFLLEdBQUcsUUFBUSxVQUFVLFFBQVE7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7O0FDOUlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQy9EQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSxlQUFlLDRCQUE0QjtXQUMzQyxlQUFlO1dBQ2YsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBLDhDQUE4Qzs7Ozs7V0NBOUM7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qdXN0aWRlYS10ZW1wbGF0ZS10aGVtZS8uL3NyYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vanVzdGlkZWEtdGVtcGxhdGUtdGhlbWUvLi9zcmMvanMvbW9kdWxlcy9jb3Vyc2UtamF2YS1zbGlkZXJzLmpzIiwid2VicGFjazovL2p1c3RpZGVhLXRlbXBsYXRlLXRoZW1lLy4vc3JjL2pzL21vZHVsZXMvZmFxLWFjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly9qdXN0aWRlYS10ZW1wbGF0ZS10aGVtZS8uL3NyYy9qcy9tb2R1bGVzL2Zvcm0tbGFiZWxzLWFuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly9qdXN0aWRlYS10ZW1wbGF0ZS10aGVtZS8uL3NyYy9qcy9tb2R1bGVzL2hhbmRsZS1zaWRlYmFyLW5hdi5qcyIsIndlYnBhY2s6Ly9qdXN0aWRlYS10ZW1wbGF0ZS10aGVtZS8uL3NyYy9qcy9tb2R1bGVzL21haWxjaGltcC1wb3B1cC5qcyIsIndlYnBhY2s6Ly9qdXN0aWRlYS10ZW1wbGF0ZS10aGVtZS8uL3NyYy9qcy9tb2R1bGVzL21vYmlsZS1tZW51LmpzIiwid2VicGFjazovL2p1c3RpZGVhLXRlbXBsYXRlLXRoZW1lLy4vc3JjL2pzL21vZHVsZXMvdGltZWxpbmUuanMiLCJ3ZWJwYWNrOi8vanVzdGlkZWEtdGVtcGxhdGUtdGhlbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanVzdGlkZWEtdGVtcGxhdGUtdGhlbWUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vanVzdGlkZWEtdGVtcGxhdGUtdGhlbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2p1c3RpZGVhLXRlbXBsYXRlLXRoZW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanVzdGlkZWEtdGVtcGxhdGUtdGhlbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qdXN0aWRlYS10ZW1wbGF0ZS10aGVtZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2p1c3RpZGVhLXRlbXBsYXRlLXRoZW1lL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9qdXN0aWRlYS10ZW1wbGF0ZS10aGVtZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9tb2R1bGVzL2ZhcS1hY2NvcmRpb25cIjtcbmltcG9ydCBcIi4vbW9kdWxlcy9tb2JpbGUtbWVudVwiO1xuaW1wb3J0IFwiLi9tb2R1bGVzL3RpbWVsaW5lXCI7XG5pbXBvcnQgXCIuL21vZHVsZXMvY291cnNlLWphdmEtc2xpZGVyc1wiO1xuaW1wb3J0IFwiLi9tb2R1bGVzL21haWxjaGltcC1wb3B1cFwiO1xuaW1wb3J0IFwiLi9tb2R1bGVzL2Zvcm0tbGFiZWxzLWFuaW1hdGlvblwiOyIsImNvbnN0IHN3aXBlckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXBlcicpO1xyXG5cclxuaWYgKHN3aXBlckVsKSB7XHJcbiAgY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcignLnN3aXBlcicsIHtcclxuICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIHNsaWRlUGVyVmlldzogMSxcclxuICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgfSxcclxuICB9KVxyXG59XHJcbiIsImNvbnN0IGFsbEZhcUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mYXEtZWxlbWVudFwiKTtcclxuXHJcblxyXG5mdW5jdGlvbiBoYW5kbGVPcGVuKGUpIHtcclxuICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgY29uc3QgY3VycmVudEVsZW1lbnQgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgY29uc3QgY3Jvc3NTaWduID0gZS5jdXJyZW50VGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5mYXFfX3BsdXMtbWludXMtdG9nZ2xlJyk7XHJcbiAgY3Jvc3NTaWduLmNsYXNzTGlzdC50b2dnbGUoJ2NvbGxhcHNlZCcpO1xyXG4gIGN1cnJlbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcclxufVxyXG5cclxuaWYgKGFsbEZhcUVsLmxlbmd0aCA+IDApIHtcclxuICBhbGxGYXFFbC5mb3JFYWNoKGVsID0+IHtcclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlT3Blbik7XHJcbiAgfSlcclxufVxyXG4iLCJmdW5jdGlvbiBjcmVhdGVMYWJlbCh0ZXh0LCBuYW1lQXR0cikge1xyXG4gIGNvbnN0IG5ld0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICBjb25zdCBuZXdDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCk7XHJcbiAgbmV3TGFiZWwuYXBwZW5kQ2hpbGQobmV3Q29udGVudCk7XHJcbiAgbmV3TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBuYW1lQXR0cik7XHJcbiAgcmV0dXJuIG5ld0xhYmVsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbmplY3RMYWJlbFRvRG9tKGxhYmVsLCBwYXJlbnQsIGlucHV0KSB7XHJcbiAgcGFyZW50Lmluc2VydEJlZm9yZShsYWJlbCwgaW5wdXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVCbHVyKGUpIHtcclxuICBjb25zdCBwYXJlbnQgPSBlLnRhcmdldC5wYXJlbnROb2RlO1xyXG4gIGNvbnN0IGlucHV0ID0gZS50YXJnZXQ7XHJcbiAgaWYgKGlucHV0LnZhbHVlID09ICcnICYmIHBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZvY3VzZWQnKSkge1xyXG4gICAgcGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3VzZWQnKTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gaGFuZGxlRm9jdXMoZSkge1xyXG4gIGNvbnN0IHBhcmVudCA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XHJcblxyXG4gIGlmICghcGFyZW50LmNsYXNzTGlzdC5jb250YWlucygnZm9jdXNlZCcpKSB7XHJcbiAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgnZm9jdXNlZCcpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlSW5wdXRGaWxlKGUpIHtcclxuICBjb25zdCBpbnB1dCA9IGUudGFyZ2V0O1xyXG4gIGNvbnN0IHBhcmVudCA9IGlucHV0LnBhcmVudE5vZGU7XHJcbiAgY29uc3QgZmlsZVVwbG9hZGVkID0gaW5wdXQuZmlsZXMubGVuZ3RoID4gMDtcclxuXHJcbiAgaWYgKGZpbGVVcGxvYWRlZCkge1xyXG4gICAgY29uc3Qgc3BhbkZpbGVOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3Bhbi5maWxlLW5hbWUnKTtcclxuICAgIGNvbnN0IG5ld1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBuZXdTcGFuLmNsYXNzTGlzdC5hZGQoJ2ZpbGUtbmFtZScpO1xyXG4gICAgbmV3U3Bhbi50ZXh0Q29udGVudCA9IGlucHV0LmZpbGVzWzBdLm5hbWU7XHJcbiAgICBpZiAoc3BhbkZpbGVOYW1lICE9PSBudWxsKSB7XHJcbiAgICAgIHNwYW5GaWxlTmFtZS5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHNwYW5GaWxlTmFtZSk7XHJcbiAgICB9XHJcbiAgICBpbmplY3RMYWJlbFRvRG9tKG5ld1NwYW4sIHBhcmVudCwgaW5wdXQpO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFmaWxlVXBsb2FkZWQpIHtcclxuICAgIGNvbnN0IGZpbGVOYW1lU3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4uZmlsZS1uYW1lJyk7XHJcbiAgICBmaWxlTmFtZVNwYW4gJiYgZmlsZU5hbWVTcGFuLmRlbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGZpbGVVcGxvYWRlZCAmJiAhcGFyZW50LmNsYXNzTGlzdC5jb250YWlucygnZm9jdXNlZCcpKSB7XHJcbiAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgnZm9jdXNlZCcpO1xyXG4gIH1cclxuXHJcbiAgZWxzZSBpZiAoIWZpbGVVcGxvYWRlZCAmJiBwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmb2N1c2VkJykpIHtcclxuICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdmb2N1c2VkJyk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVTZWxlY3RDaGFuZ2UoZSkge1xyXG4gIGNvbnN0IGNvdXJzZUlzU2VsZWN0ZWQgPSBlLnRhcmdldC52YWx1ZSAhPT0gJyc7XHJcbiAgY29uc3QgcGFyZW50ID0gZS50YXJnZXQucGFyZW50Tm9kZTtcclxuICBjb25zdCBwYXJlbnRJc0ZvY3VzZWQgPSBwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmb2N1c2VkJyk7XHJcblxyXG5cclxuICBpZiAoY291cnNlSXNTZWxlY3RlZCAmJiAhcGFyZW50SXNGb2N1c2VkKSB7XHJcbiAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgnZm9jdXNlZCcpO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFjb3Vyc2VJc1NlbGVjdGVkICYmIHBhcmVudElzRm9jdXNlZCkge1xyXG4gICAgcGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3VzZWQnKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpc3RlbkZvckZvY3VzKGlucHV0cykge1xyXG4gIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgaGFuZGxlRm9jdXMpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbGlzdGVuRm9yQmx1cihpbnB1dHMpIHtcclxuICBpbnB1dHMuZm9yRWFjaChpbnB1dCA9PiBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgaGFuZGxlQmx1cikpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVSZWdpc3RyYXRpb25Gb3JtKCkge1xyXG4gIGNvbnN0IGFsbFRleHRJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWN0aXZlbm93LXJlcXVpcmVkLWZpZWxkID4gaW5wdXRbdHlwZT1cInRleHRcIl0nKTtcclxuXHJcbiAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2V2ZW50YWJsZV9pZCcpO1xyXG5cclxuICBpZiAoYWxsVGV4dElucHV0cykge1xyXG4gICAgYWxsVGV4dElucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcclxuICAgICAgY29uc3QgbmV3VGV4dCA9IGlucHV0LnBsYWNlaG9sZGVyO1xyXG4gICAgICBjb25zdCBuYW1lQXR0ciA9IGlucHV0LmdldEF0dHJpYnV0ZSgnbmFtZScpO1xyXG4gICAgICBjb25zdCBwYXJlbnROb2RlID0gaW5wdXQucGFyZW50Tm9kZTtcclxuXHJcbiAgICAgIGNvbnN0IGxhYmVsID0gY3JlYXRlTGFiZWwobmV3VGV4dCwgbmFtZUF0dHIpO1xyXG5cclxuICAgICAgaW5qZWN0TGFiZWxUb0RvbShsYWJlbCwgcGFyZW50Tm9kZSwgaW5wdXQpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGlmIChzZWxlY3QpIHtcclxuICAgIGNvbnN0IG5ld1RleHQgPSBzZWxlY3QuZmlyc3RDaGlsZC50ZXh0Q29udGVudDtcclxuICAgIGNvbnN0IG5hbWVBdHRyID0gc2VsZWN0LmdldEF0dHJpYnV0ZSgnbmFtZScpO1xyXG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IHNlbGVjdC5wYXJlbnROb2RlO1xyXG5cclxuICAgIGNvbnN0IGxhYmVsID0gY3JlYXRlTGFiZWwobmV3VGV4dCwgbmFtZUF0dHIpO1xyXG4gICAgaW5qZWN0TGFiZWxUb0RvbShsYWJlbCwgcGFyZW50Tm9kZSwgc2VsZWN0KTtcclxuXHJcbiAgICBzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlU2VsZWN0Q2hhbmdlKTtcclxuICB9XHJcblxyXG4gIGxpc3RlbkZvckZvY3VzKGFsbFRleHRJbnB1dHMpO1xyXG4gIGxpc3RlbkZvckJsdXIoYWxsVGV4dElucHV0cyk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBoYW5kbGVXb3JrV2l0aFVzRm9ybSgpIHtcclxuICBjb25zdCBmb3JtSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndwY2Y3LWZvcm0tY29udHJvbC13cmFwIGlucHV0Jyk7XHJcbiAgY29uc3QgZmlsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53cGNmNy1mb3JtLWNvbnRyb2wtd3JhcCBpbnB1dFt0eXBlPSdmaWxlJ11cIik7XHJcblxyXG4gIGlmIChmb3JtSW5wdXRzKSB7XHJcbiAgICBmb3JtSW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xyXG4gICAgICBpZiAoaW5wdXQudHlwZSAhPT0gXCJjaGVja2JveFwiICYmIGlucHV0LnR5cGUgIT09IFwiZmlsZVwiKSB7XHJcbiAgICAgICAgY29uc3QgbmV3VGV4dCA9IGlucHV0LnBsYWNlaG9sZGVyO1xyXG4gICAgICAgIGNvbnN0IG5hbWVBdHRyID0gaW5wdXQuZ2V0QXR0cmlidXRlKCduYW1lJyk7XHJcbiAgICAgICAgY29uc3QgcGFyZW50Tm9kZSA9IGlucHV0LnBhcmVudE5vZGU7XHJcblxyXG4gICAgICAgIGNvbnN0IGxhYmVsID0gY3JlYXRlTGFiZWwobmV3VGV4dCwgbmFtZUF0dHIpO1xyXG4gICAgICAgIGluamVjdExhYmVsVG9Eb20obGFiZWwsIHBhcmVudE5vZGUsIGlucHV0KTtcclxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGhhbmRsZUZvY3VzKTtcclxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgaGFuZGxlQmx1cik7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBpZiAoZmlsZUlucHV0KSB7XHJcbiAgICBjb25zdCBuZXdUZXh0ID0gXCJEb2RhaiBDVlwiXHJcbiAgICBjb25zdCBuYW1lQXR0ciA9IGZpbGVJbnB1dC5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcclxuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBmaWxlSW5wdXQucGFyZW50Tm9kZTtcclxuXHJcbiAgICBjb25zdCBsYWJlbCA9IGNyZWF0ZUxhYmVsKG5ld1RleHQsIG5hbWVBdHRyKTtcclxuICAgIGluamVjdExhYmVsVG9Eb20obGFiZWwsIHBhcmVudE5vZGUsIGZpbGVJbnB1dCk7XHJcblxyXG4gICAgZmlsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZUlucHV0RmlsZSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuaGFuZGxlV29ya1dpdGhVc0Zvcm0oKTtcclxud2luZG93LnNldFRpbWVvdXQoaGFuZGxlUmVnaXN0cmF0aW9uRm9ybSwgNjAwKTsiLCJjb25zdCBjb3Vyc2VzU2lkZWJhck5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51LWphdmEtY291cnNlLXNpZGViYXInKTtcclxuY29uc3Qgd29ya1dpdGhVc1NpZGViYXJOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudS13b3JrLXdpdGgtdXMtc2lkZWJhci1tZW51Jyk7XHJcblxyXG5cclxuXHJcbmNvbnN0IHNldEZpcnN0RWxlbWVudEFjdGl2ZSA9ICAoc2lkZWJhcikgPT4ge1xyXG4gIGlmKHNpZGViYXIpe1xyXG4gICAgY29uc3QgZmlyc3RFbCA9IHNpZGViYXIucXVlcnlTZWxlY3RvcignbGk6Zmlyc3Qtb2YtdHlwZScpO1xyXG4gICAgZmlyc3RFbCAmJiBmaXJzdEVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gIH1cclxufTtcclxuXHJcbnNldEZpcnN0RWxlbWVudEFjdGl2ZShjb3Vyc2VzU2lkZWJhck5hdik7XHJcbnNldEZpcnN0RWxlbWVudEFjdGl2ZSh3b3JrV2l0aFVzU2lkZWJhck5hdik7XHJcblxyXG5cclxuY29uc3Qgc2NyZWVuSXNXaWRlclRoYW5YTCA9IHdpbmRvdy5tYXRjaE1lZGlhKGBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KWApLm1hdGNoZXM7XHJcblxyXG5cclxuY29uc3QgcmVtb3ZlTm90QWN0aXZlTGluayA9ICgpID0+IHtcclxuICBjb25zdCBsaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGkuYWN0aXZlJyk7XHJcblxyXG4gIGxpbmsgJiYgbGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlQWN0aXZlTGluayhlKXtcclxuICBjb25zdCBwYXJlbnQgPSBlLnRhcmdldC5wYXJlbnROb2RlO1xyXG4gIHJlbW92ZU5vdEFjdGl2ZUxpbmsoKTtcclxuICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbn1cclxuXHJcbmlmIChzY3JlZW5Jc1dpZGVyVGhhblhMKSB7XHJcbiAgY29uc3QgY291cnNlc0FsbFNpZGViYXJMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlYmFyLW5hdiBhJyk7XHJcblxyXG4gIGNvdXJzZXNBbGxTaWRlYmFyTGlua3MuZm9yRWFjaCggbGluayA9PiB7XHJcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlQWN0aXZlTGluaylcclxuICB9KVxyXG5cclxuICBjb25zdCB3b3JrV2l0aFVzQWxsU2lkZWJhckxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndvcmtfX3NpZGViYXIgYScpO1xyXG5cclxuICB3b3JrV2l0aFVzQWxsU2lkZWJhckxpbmtzLmZvckVhY2goIGxpbmsgPT4ge1xyXG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZUFjdGl2ZUxpbmspXHJcbiAgfSlcclxufVxyXG5cclxuIiwiY29uc3QgY29udGFjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICcubWVudS1pdGVtLTI5MDIgPiBhJyk7XHJcbmNvbnN0IGNvdXJzZXNCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvdXJzZV9fYnRuJyk7XHJcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtb3ZlcmxheScpO1xyXG5jb25zdCBmb290ZXJDb250YW50Y3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtaXRlbS00MDgzXCIpO1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlUG9wdXBWaXNpYmlsaXR5KGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAnKTtcclxuICBwb3B1cC5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuZWQnKTtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ25vLXNjcm9sbCcpO1xyXG59XHJcbmlmIChjb250YWN0QnRucy5sZW5ndGggPiAwKSB7XHJcbiAgY29udGFjdEJ0bnMuZm9yRWFjaChidG4gPT4gYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUG9wdXBWaXNpYmlsaXR5KSk7XHJcbn1cclxuXHJcbmlmKGZvb3RlckNvbnRhbnRjdEJ0bil7XHJcbiAgZm9vdGVyQ29udGFudGN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUG9wdXBWaXNpYmlsaXR5KVxyXG59XHJcblxyXG5pZiAoY291cnNlc0J0bnMubGVuZ3RoID4gMCkge1xyXG4gIGNvdXJzZXNCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVBvcHVwVmlzaWJpbGl0eSkpO1xyXG59XHJcblxyXG5cclxuaWYgKG92ZXJsYXkpIHtcclxuICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUG9wdXBWaXNpYmlsaXR5KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlSW5wdXRGb2N1cygpIHtcclxuICBjb25zdCBpZCA9IHRoaXMuaWQ7XHJcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsYWJlbFtmb3I9JyR7aWR9J2ApO1xyXG5cclxuICBpZiAoIWxhYmVsLmNsYXNzTGlzdC5jb250YWlucygnZm9jdXNlZCcpKSB7XHJcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdmb2N1c2VkJyk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVJbnB1dEJsdXIoKSB7XHJcbiAgY29uc3QgaWQgPSB0aGlzLmlkO1xyXG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGFiZWxbZm9yPScke2lkfSdgKTtcclxuXHJcbiAgaWYgKHRoaXMudmFsdWUgIT09ICcnKSB7XHJcbiAgICBpZiAoIWxhYmVsLmNsYXNzTGlzdC5jb250YWlucygnZm9jdXNlZCcpKSB7XHJcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2ZvY3VzZWQnKTtcclxuICAgIH1cclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICBpZiAobGFiZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdmb2N1c2VkJykpIHtcclxuICAgICAgbGFiZWwuY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXNlZCcpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IGFkZEZvY3VzTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IHRleHRJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXAgaW5wdXRbdHlwZT1cInRleHRcIl0nKTtcclxuICBjb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21jZS1FTUFJTCcpO1xyXG5cclxuICB0ZXh0SW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xyXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBoYW5kbGVJbnB1dEZvY3VzKTtcclxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBoYW5kbGVJbnB1dEJsdXIpO1xyXG4gIH0pXHJcblxyXG4gIGVtYWlsSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBoYW5kbGVJbnB1dEZvY3VzKTtcclxuICBlbWFpbElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBoYW5kbGVJbnB1dEJsdXIpO1xyXG59KCk7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCB0b2dnbGVQb3B1cCA9ICgpID0+IHtcclxuICBpZihwb3B1cCl7XHJcbiAgICBwb3B1cC5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuZWQnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnbm8tc2Nyb2xsJyk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBwYXJzZUNvb2tpZSA9IHN0ciA9PlxyXG4gIHN0clxyXG4gICAgLnNwbGl0KCc7JylcclxuICAgIC5tYXAodiA9PiB2LnNwbGl0KCc9JykpXHJcbiAgICAucmVkdWNlKChhY2MsIHYpID0+IHtcclxuICAgICAgaWYgKHZbMF0gJiYgdlsxXSkge1xyXG4gICAgICAgIGFjY1tkZWNvZGVVUklDb21wb25lbnQodlswXS50cmltKCkpXSA9IGRlY29kZVVSSUNvbXBvbmVudCh2WzFdLnRyaW0oKSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGFjYztcclxuICAgIH0sIHt9KTtcclxuXHJcbmNvbnN0IGdldENvb2tpZSA9IG5hbWUgPT4ge1xyXG4gIGxldCBjb29raWVzID0gZG9jdW1lbnQuY29va2llO1xyXG4gIGNvbnN0IHBhcnNlZENvb2tpZXMgPSBwYXJzZUNvb2tpZShjb29raWVzKTtcclxuXHJcbiAgcmV0dXJuIHBhcnNlZENvb2tpZXNbbmFtZV07XHJcbn1cclxuXHJcbmNvbnN0IG5ld3NsZXR0ZXJDb29raWVFeGlzdCA9IGdldENvb2tpZSgnbmV3c2xldHRlclBvcHVwQ29va2llJyk7XHJcblxyXG5jb25zdCBjaGVja0Nvb2tpZUV4cGlyYXRpb24gPSAoKSA9PiB7XHJcbiAgY29uc3Qgbm93VGltZXN0YW1wID0gRGF0ZS5ub3coKTtcclxuICBjb25zdCBvZmZzZXRUaW1lc3RhbXAgPSBuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMDtcclxuICAvLyBnZXRUaW1lWm9uZU9mZnNldCByZXR1cm4gb2Zmc2V0IGluIG1pbnV0ZXNcclxuICAvLyBtdWx0aXBsZSBpdCBieSA2MDAwMCBnaXZlIHVzIG1pbGlzZWNvbmRzXHJcbiAgaWYgKG5ld3NsZXR0ZXJDb29raWVFeGlzdCkge1xyXG4gICAgY29va2llU3RvcmUuZ2V0KCduZXdzbGV0dGVyUG9wdXBDb29raWUnKVxyXG4gICAgICAudGhlbihjb29raWUgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvb2tpZUFscmVhZHlFeHBpcmVkID0gKG5vd1RpbWVzdGFtcCAtIGNvb2tpZS5leHBpcmVzIC0gb2Zmc2V0VGltZXN0YW1wKSA+IDA7XHJcbiAgICAgICAgaWYgKGNvb2tpZUFscmVhZHlFeHBpcmVkKSB7XHJcbiAgICAgICAgICB0b2dnbGVQb3B1cCgpO1xyXG4gICAgICAgICAgY3JlYXRlQ29va2llKCduZXdzbGV0dGVyUG9wdXBDb29raWUnLCAndmFsdWUnLCBnZXREYXRlQWZ0ZXI3RGF5cygpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgY3JlYXRlQ29va2llID0gKG5hbWUsIHZhbHVlLCBleHBpcmVzKSA9PiB7XHJcbiAgZG9jdW1lbnQuY29va2llID0gYCR7bmFtZX09JHt2YWx1ZX07IGV4cGlyZXM9JHtleHBpcmVzfWBcclxufVxyXG5cclxuY29uc3QgZ2V0RGF0ZUFmdGVyN0RheXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgdG9kYXlUaW1lc3RhbXAgPSBEYXRlLm5vdygpO1xyXG4gIGNvbnN0IHRvZGF5RGF0ZSA9IG5ldyBEYXRlKHRvZGF5VGltZXN0YW1wKS50b1N0cmluZygpO1xyXG4gIC8vIDcgZGF5cyA9IDYwNCA4MDAgMDAwIG1zXHJcbiAgY29uc3QgZXhwaXJhdGlvblRpbWVzdGFtcCA9IHRvZGF5VGltZXN0YW1wICsgNjA0ODAwMDAwO1xyXG4gIC8vIDEgbWludXRlID0gNjAwMDAgbXNcclxuICAvLyBjb25zdCBleHBpcmF0aW9uVGltZXN0YW1wID0gdG9kYXlUaW1lc3RhbXAgKyA2MDAwMDtcclxuICBjb25zdCBleHBpcmF0aW9uZERhdGUgPSBuZXcgRGF0ZShleHBpcmF0aW9uVGltZXN0YW1wKS50b1N0cmluZygpO1xyXG5cclxuICByZXR1cm4gZXhwaXJhdGlvbmREYXRlO1xyXG59XHJcblxyXG5jb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cCcpO1xyXG5cclxuXHJcbmNvbnN0IGhhbmRsZUluaXRpYWxQb3B1cFZpc2liaWxpdHkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKG5ld3NsZXR0ZXJDb29raWVFeGlzdCAmJiBwb3B1cCkge1xyXG4gICAgY2hlY2tDb29raWVFeHBpcmF0aW9uKCk7XHJcbiAgfVxyXG4gIGlmICghbmV3c2xldHRlckNvb2tpZUV4aXN0ICYmIHBvcHVwKSB7XHJcbiAgICB0b2dnbGVQb3B1cCgpO1xyXG4gICAgY3JlYXRlQ29va2llKCduZXdzbGV0dGVyUG9wdXBDb29raWUnLCAndmFsdWUnLCBnZXREYXRlQWZ0ZXI3RGF5cygpKTtcclxuICB9O1xyXG59KCk7IiwiY29uc3QgaGFtYnVyZ2VyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlcl9fYnV0dG9uJyk7XHJcbmNvbnN0IG1vYmlsZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLWJ1cmdlcicpO1xyXG5jb25zdCBhbGxNZW51TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjbWVudS1tYWluLW1lbnUtMSBhJyk7XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVOYXZPcGVuKCl7XHJcbiAgY29uc3QgaXNDbG9zZWQgPSBtb2JpbGVNZW51LmNsYXNzTGlzdC5jb250YWlucygnY2xvc2VkJyk7XHJcbiAgY29uc3QgaXNPcGVuID0gbW9iaWxlTWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW5lZCcpO1xyXG5cclxuICBpZihpc0Nsb3NlZCl7XHJcbiAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJjbG9zZWRcIik7XHJcbiAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC5hZGQoXCJvcGVuZWRcIik7XHJcblxyXG4gIH1cclxuICBpZihpc09wZW4pe1xyXG4gICAgbW9iaWxlTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwib3BlbmVkXCIpO1xyXG4gICAgbW9iaWxlTWVudS5jbGFzc0xpc3QuYWRkKFwiY2xvc2VkXCIpO1xyXG4gIH1cclxufVxyXG5cclxuaGFtYnVyZ2VyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlTmF2T3Blbik7XHJcblxyXG5mdW5jdGlvbiBhZGRMaXN0ZW5lcnNUb01lbnVMaW5rcygpe1xyXG4gIGFsbE1lbnVMaW5rcy5mb3JFYWNoKCBsaW5rID0+IGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVOYXZPcGVuKSk7XHJcbn1cclxuXHJcbmFkZExpc3RlbmVyc1RvTWVudUxpbmtzKCk7IiwiY29uc3QgdGltZWxpbmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZWxpbmVfX2J0bicpO1xyXG5jb25zdCB0aW1lbGluZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZWxpbmUtaXRlbXMnKTtcclxubGV0IGNvbGxhcHNlZEZsYWcgPSBmYWxzZTtcclxuXHJcbmNvbnN0IHNob3dIaWRkZW5JdGVtcyA9IGl0ZW1zID0+IGl0ZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpKTtcclxuXHJcbmNvbnN0IGhpZGVFbGVtZW50cyA9ICgpID0+IHtcclxuICBjb25zdCBhbGxFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aW1lbGluZS1pdGVtJyk7XHJcblxyXG4gIGFsbEVsZW1lbnRzLmZvckVhY2goIChlbCwgaSkgPT4ge1xyXG4gICAgaWYoaT49NCAmJiAhZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSl7XHJcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbmNvbnN0IGNoYW5nZUJ0blRleHQgPSAoKSA9PiB7XHJcbiAgaWYgKHRpbWVsaW5lQnRuLnRleHRDb250ZW50ID09IFwiUm96d2nFhFwiKSB7XHJcbiAgICB0aW1lbGluZUJ0bi50ZXh0Q29udGVudCA9IFwiWndpxYRcIlxyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIHRpbWVsaW5lQnRuLnRleHRDb250ZW50ID0gXCJSb3p3acWEXCI7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBjb25zdCBzY3JvbGxUb0xpc3QgPSAoKSA9PiB7XHJcbi8vICAgaWYoY29sbGFwc2VkRmxhZyl7XHJcbi8vICAgICB0aW1lbGluZUxpc3Quc2Nyb2xsSW50b1ZpZXcoXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIiwgXHJcbi8vICAgICAgICAgYmxvY2s6ICdlbmQnXHJcbi8vICAgICAgIH0pXHJcbi8vICAgfVxyXG4vLyAgIGlmKCFjb2xsYXBzZWRGbGFnKXtcclxuLy8gICAgIHRpbWVsaW5lTGlzdC5zY3JvbGxJbnRvVmlldyhcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLCBcclxuLy8gICAgICAgICBibG9jazogJ2VuZCdcclxuLy8gICAgICAgfSlcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbmNvbnN0IGNoYW5nZVRpbWVMaW5lSGVpZ2h0ID0gKCkgPT4gdGltZWxpbmVMaXN0LmNsYXNzTGlzdC50b2dnbGUoXCJjb2xsYXBzZWRcIik7XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVUaW1lbGluZUNvbGFwc2UoKSB7XHJcbiAgXHJcbiAgY29uc3QgaGlkZGVuSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGltZWxpbmUtaXRlbS5oaWRkZW4nKTtcclxuXHJcbiAgaWYoY29sbGFwc2VkRmxhZyl7XHJcbiAgICBoaWRlRWxlbWVudHMoKTtcclxuICB9XHJcbiAgaWYoIWNvbGxhcHNlZEZsYWcpe1xyXG4gICAgc2hvd0hpZGRlbkl0ZW1zKGhpZGRlbkl0ZW1zKTtcclxuICB9XHJcbiAgY2hhbmdlVGltZUxpbmVIZWlnaHQoKTtcclxuICBjaGFuZ2VCdG5UZXh0KCk7XHJcbiAgLy8gc2Nyb2xsVG9MaXN0KCk7XHJcblxyXG4gIGNvbGxhcHNlZEZsYWcgPSAhY29sbGFwc2VkRmxhZztcclxufVxyXG5cclxuaWYgKHRpbWVsaW5lQnRuKSB7XHJcbiAgdGltZWxpbmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVUaW1lbGluZUNvbGFwc2UpXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IixudWxsLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9qcy9hcHAuanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2pzL21vZHVsZXMvY291cnNlLWphdmEtc2xpZGVycy5qc1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9qcy9tb2R1bGVzL2ZhcS1hY2NvcmRpb24uanNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvanMvbW9kdWxlcy9mb3JtLWxhYmVscy1hbmltYXRpb24uanNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvanMvbW9kdWxlcy9oYW5kbGUtc2lkZWJhci1uYXYuanNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvanMvbW9kdWxlcy9tYWlsY2hpbXAtcG9wdXAuanNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvanMvbW9kdWxlcy9tb2JpbGUtbWVudS5qc1wiKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2pzL21vZHVsZXMvdGltZWxpbmUuanNcIik7XG4iLG51bGxdLCJuYW1lcyI6W10sInByZUV4aXN0aW5nQ29tbWVudCI6Ii8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYldGcGJpNXFjeUlzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdPenM3T3pzN096czdPenRCUVVGcFF6dEJRVU5HTzBGQlEwZzdRVUZEVnp0QlFVTktPenM3T3pzN096czdPenRCUTBwdVF6dEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwd3NSMEZCUnp0QlFVTklPenM3T3pzN096czdPenRCUTFoQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN096czdPenM3T3pzN08wRkRaa0U3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN096czdPenM3T3p0QlEyeEtRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQk96czdPenM3T3pzN096dEJRelZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxIRkVRVUZ4UkN4SFFVRkhPMEZCUTNoRU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3h4UkVGQmNVUXNSMEZCUnp0QlFVTjRSRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVR0QlFVTkJPMEZCUTBFc1EwRkJRenRCUVVORU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNZVUZCWVR0QlFVTmlPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEV0QlFVc3NTVUZCU1R0QlFVTlVPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFBRVUZQTzBGQlExQTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3gxUWtGQmRVSXNTMEZCU3l4SFFVRkhMRkZCUVZFc1ZVRkJWU3hSUVVGUk8wRkJRM3BFTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUTBGQlF6czdPenM3T3pzN096dEJRemxKUkR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN096czdPenM3TzBGRGVrSkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFZRVUZWTzBGQlExWTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVlVGQlZUdEJRVU5XTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96czdPenM3VlVNdlJFRTdWVUZEUVRzN1ZVRkZRVHRWUVVOQk8xVkJRMEU3VlVGRFFUdFZRVU5CTzFWQlEwRTdWVUZEUVR0VlFVTkJPMVZCUTBFN1ZVRkRRVHRWUVVOQk8xVkJRMEU3VlVGRFFUczdWVUZGUVR0VlFVTkJPenRWUVVWQk8xVkJRMEU3VlVGRFFUczdPenM3VjBOMFFrRTdWMEZEUVR0WFFVTkJPMWRCUTBFc1pVRkJaU3cwUWtGQk5FSTdWMEZETTBNc1pVRkJaVHRYUVVObUxHbERRVUZwUXl4WFFVRlhPMWRCUXpWRE8xZEJRMEU3T3pzN08xZERVRUU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVN4NVEwRkJlVU1zZDBOQlFYZERPMWRCUTJwR08xZEJRMEU3VjBGRFFUczdPenM3VjBOUVFTdzRRMEZCT0VNN096czdPMWREUVRsRE8xZEJRMEU3VjBGRFFUdFhRVU5CTEhWRVFVRjFSQ3hwUWtGQmFVSTdWMEZEZUVVN1YwRkRRU3huUkVGQlowUXNZVUZCWVR0WFFVTTNSRHM3T3pzN1ZVVk9RVHRWUVVOQk8xVkJRMEU3VlVGRFFUdFZRVU5CTzFWQlEwRTdWVUZEUVR0VlFVTkJPMVZCUTBFN1ZVRkRRVHRWUVVOQklpd2ljMjkxY21ObGN5STZXeUozWldKd1lXTnJPaTh2YW5WemRHbGtaV0V0ZEdWdGNHeGhkR1V0ZEdobGJXVXZMaTl6Y21NdmFuTXZZWEJ3TG1weklpd2lkMlZpY0dGamF6b3ZMMnAxYzNScFpHVmhMWFJsYlhCc1lYUmxMWFJvWlcxbEx5NHZjM0pqTDJwekwyMXZaSFZzWlhNdlkyOTFjbk5sTFdwaGRtRXRjMnhwWkdWeWN5NXFjeUlzSW5kbFluQmhZMnM2THk5cWRYTjBhV1JsWVMxMFpXMXdiR0YwWlMxMGFHVnRaUzh1TDNOeVl5OXFjeTl0YjJSMWJHVnpMMlpoY1MxaFkyTnZjbVJwYjI0dWFuTWlMQ0ozWldKd1lXTnJPaTh2YW5WemRHbGtaV0V0ZEdWdGNHeGhkR1V0ZEdobGJXVXZMaTl6Y21NdmFuTXZiVzlrZFd4bGN5OW1iM0p0TFd4aFltVnNjeTFoYm1sdFlYUnBiMjR1YW5NaUxDSjNaV0p3WVdOck9pOHZhblZ6ZEdsa1pXRXRkR1Z0Y0d4aGRHVXRkR2hsYldVdkxpOXpjbU12YW5NdmJXOWtkV3hsY3k5b1lXNWtiR1V0YzJsa1pXSmhjaTF1WVhZdWFuTWlMQ0ozWldKd1lXTnJPaTh2YW5WemRHbGtaV0V0ZEdWdGNHeGhkR1V0ZEdobGJXVXZMaTl6Y21NdmFuTXZiVzlrZFd4bGN5OXRZV2xzWTJocGJYQXRjRzl3ZFhBdWFuTWlMQ0ozWldKd1lXTnJPaTh2YW5WemRHbGtaV0V0ZEdWdGNHeGhkR1V0ZEdobGJXVXZMaTl6Y21NdmFuTXZiVzlrZFd4bGN5OXRiMkpwYkdVdGJXVnVkUzVxY3lJc0luZGxZbkJoWTJzNkx5OXFkWE4wYVdSbFlTMTBaVzF3YkdGMFpTMTBhR1Z0WlM4dUwzTnlZeTlxY3k5dGIyUjFiR1Z6TDNScGJXVnNhVzVsTG1weklpd2lkMlZpY0dGamF6b3ZMMnAxYzNScFpHVmhMWFJsYlhCc1lYUmxMWFJvWlcxbEwzZGxZbkJoWTJzdlltOXZkSE4wY21Gd0lpd2lkMlZpY0dGamF6b3ZMMnAxYzNScFpHVmhMWFJsYlhCc1lYUmxMWFJvWlcxbEwzZGxZbkJoWTJzdmNuVnVkR2x0WlM5amIyMXdZWFFnWjJWMElHUmxabUYxYkhRZ1pYaHdiM0owSWl3aWQyVmljR0ZqYXpvdkwycDFjM1JwWkdWaExYUmxiWEJzWVhSbExYUm9aVzFsTDNkbFluQmhZMnN2Y25WdWRHbHRaUzlrWldacGJtVWdjSEp2Y0dWeWRIa2daMlYwZEdWeWN5SXNJbmRsWW5CaFkyczZMeTlxZFhOMGFXUmxZUzEwWlcxd2JHRjBaUzEwYUdWdFpTOTNaV0p3WVdOckwzSjFiblJwYldVdmFHRnpUM2R1VUhKdmNHVnlkSGtnYzJodmNuUm9ZVzVrSWl3aWQyVmljR0ZqYXpvdkwycDFjM1JwWkdWaExYUmxiWEJzWVhSbExYUm9aVzFsTDNkbFluQmhZMnN2Y25WdWRHbHRaUzl0WVd0bElHNWhiV1Z6Y0dGalpTQnZZbXBsWTNRaUxDSjNaV0p3WVdOck9pOHZhblZ6ZEdsa1pXRXRkR1Z0Y0d4aGRHVXRkR2hsYldVdmQyVmljR0ZqYXk5aVpXWnZjbVV0YzNSaGNuUjFjQ0lzSW5kbFluQmhZMnM2THk5cWRYTjBhV1JsWVMxMFpXMXdiR0YwWlMxMGFHVnRaUzkzWldKd1lXTnJMM04wWVhKMGRYQWlMQ0ozWldKd1lXTnJPaTh2YW5WemRHbGtaV0V0ZEdWdGNHeGhkR1V0ZEdobGJXVXZkMlZpY0dGamF5OWhablJsY2kxemRHRnlkSFZ3SWwwc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCY0lpNHZiVzlrZFd4bGN5OW1ZWEV0WVdOamIzSmthVzl1WENJN1hHNXBiWEJ2Y25RZ1hDSXVMMjF2WkhWc1pYTXZiVzlpYVd4bExXMWxiblZjSWp0Y2JtbHRjRzl5ZENCY0lpNHZiVzlrZFd4bGN5OTBhVzFsYkdsdVpWd2lPMXh1YVcxd2IzSjBJRndpTGk5dGIyUjFiR1Z6TDJOdmRYSnpaUzFxWVhaaExYTnNhV1JsY25OY0lqdGNibWx0Y0c5eWRDQmNJaTR2Ylc5a2RXeGxjeTl0WVdsc1kyaHBiWEF0Y0c5d2RYQmNJanRjYm1sdGNHOXlkQ0JjSWk0dmJXOWtkV3hsY3k5bWIzSnRMV3hoWW1Wc2N5MWhibWx0WVhScGIyNWNJanNpTENKamIyNXpkQ0J6ZDJsd1pYSkZiQ0E5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9KeTV6ZDJsd1pYSW5LVHRjY2x4dVhISmNibWxtSUNoemQybHdaWEpGYkNrZ2UxeHlYRzRnSUdOdmJuTjBJSE4zYVhCbGNpQTlJRzVsZHlCVGQybHdaWElvSnk1emQybHdaWEluTENCN1hISmNiaUFnSUNCa2FYSmxZM1JwYjI0NklDZG9iM0pwZW05dWRHRnNKeXhjY2x4dUlDQWdJR3h2YjNBNklIUnlkV1VzWEhKY2JpQWdJQ0J6Ykdsa1pWQmxjbFpwWlhjNklERXNYSEpjYmlBZ0lDQndZV2RwYm1GMGFXOXVPaUI3WEhKY2JpQWdJQ0FnSUdWc09pQW5Mbk4zYVhCbGNpMXdZV2RwYm1GMGFXOXVKeXhjY2x4dUlDQWdJSDBzWEhKY2JpQWdmU2xjY2x4dWZWeHlYRzRpTENKamIyNXpkQ0JoYkd4R1lYRkZiQ0E5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSkJiR3dvWENJdVptRnhMV1ZzWlcxbGJuUmNJaWs3WEhKY2JseHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2FHRnVaR3hsVDNCbGJpaGxLU0I3WEhKY2JpQWdaUzV6ZEc5d1VISnZjR0ZuWVhScGIyNG9LVnh5WEc0Z0lHTnZibk4wSUdOMWNuSmxiblJGYkdWdFpXNTBJRDBnWlM1amRYSnlaVzUwVkdGeVoyVjBPMXh5WEc0Z0lHTnZibk4wSUdOeWIzTnpVMmxuYmlBOUlHVXVZM1Z5Y21WdWRGUmhjbWRsZEM1eGRXVnllVk5sYkdWamRHOXlLQ2N1Wm1GeFgxOXdiSFZ6TFcxcGJuVnpMWFJ2WjJkc1pTY3BPMXh5WEc0Z0lHTnliM056VTJsbmJpNWpiR0Z6YzB4cGMzUXVkRzluWjJ4bEtDZGpiMnhzWVhCelpXUW5LVHRjY2x4dUlDQmpkWEp5Wlc1MFJXeGxiV1Z1ZEM1amJHRnpjMHhwYzNRdWRHOW5aMnhsS0NkdmNHVnVKeWs3WEhKY2JuMWNjbHh1WEhKY2JtbG1JQ2hoYkd4R1lYRkZiQzVzWlc1bmRHZ2dQaUF3S1NCN1hISmNiaUFnWVd4c1JtRnhSV3d1Wm05eVJXRmphQ2hsYkNBOVBpQjdYSEpjYmlBZ0lDQmxiQzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RqYkdsamF5Y3NJR2hoYm1Sc1pVOXdaVzRwTzF4eVhHNGdJSDBwWEhKY2JuMWNjbHh1SWl3aVpuVnVZM1JwYjI0Z1kzSmxZWFJsVEdGaVpXd29kR1Y0ZEN3Z2JtRnRaVUYwZEhJcElIdGNjbHh1SUNCamIyNXpkQ0J1WlhkTVlXSmxiQ0E5SUdSdlkzVnRaVzUwTG1OeVpXRjBaVVZzWlcxbGJuUW9KMnhoWW1Wc0p5azdYSEpjYmlBZ1kyOXVjM1FnYm1WM1EyOXVkR1Z1ZENBOUlHUnZZM1Z0Wlc1MExtTnlaV0YwWlZSbGVIUk9iMlJsS0hSbGVIUXBPMXh5WEc0Z0lHNWxkMHhoWW1Wc0xtRndjR1Z1WkVOb2FXeGtLRzVsZDBOdmJuUmxiblFwTzF4eVhHNGdJRzVsZDB4aFltVnNMbk5sZEVGMGRISnBZblYwWlNnblptOXlKeXdnYm1GdFpVRjBkSElwTzF4eVhHNGdJSEpsZEhWeWJpQnVaWGRNWVdKbGJEdGNjbHh1ZlZ4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnYVc1cVpXTjBUR0ZpWld4VWIwUnZiU2hzWVdKbGJDd2djR0Z5Wlc1MExDQnBibkIxZENrZ2UxeHlYRzRnSUhCaGNtVnVkQzVwYm5ObGNuUkNaV1p2Y21Vb2JHRmlaV3dzSUdsdWNIVjBLVHRjY2x4dWZWeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2FHRnVaR3hsUW14MWNpaGxLU0I3WEhKY2JpQWdZMjl1YzNRZ2NHRnlaVzUwSUQwZ1pTNTBZWEpuWlhRdWNHRnlaVzUwVG05a1pUdGNjbHh1SUNCamIyNXpkQ0JwYm5CMWRDQTlJR1V1ZEdGeVoyVjBPMXh5WEc0Z0lHbG1JQ2hwYm5CMWRDNTJZV3gxWlNBOVBTQW5KeUFtSmlCd1lYSmxiblF1WTJ4aGMzTk1hWE4wTG1OdmJuUmhhVzV6S0NkbWIyTjFjMlZrSnlrcElIdGNjbHh1SUNBZ0lIQmhjbVZ1ZEM1amJHRnpjMHhwYzNRdWNtVnRiM1psS0NkbWIyTjFjMlZrSnlrN1hISmNiaUFnZlZ4eVhHNTlYSEpjYm1aMWJtTjBhVzl1SUdoaGJtUnNaVVp2WTNWektHVXBJSHRjY2x4dUlDQmpiMjV6ZENCd1lYSmxiblFnUFNCbExuUmhjbWRsZEM1d1lYSmxiblJPYjJSbE8xeHlYRzVjY2x4dUlDQnBaaUFvSVhCaGNtVnVkQzVqYkdGemMweHBjM1F1WTI5dWRHRnBibk1vSjJadlkzVnpaV1FuS1NrZ2UxeHlYRzRnSUNBZ2NHRnlaVzUwTG1Oc1lYTnpUR2x6ZEM1aFpHUW9KMlp2WTNWelpXUW5LVHRjY2x4dUlDQjlYSEpjYm4xY2NseHVYSEpjYm1aMWJtTjBhVzl1SUdoaGJtUnNaVWx1Y0hWMFJtbHNaU2hsS1NCN1hISmNiaUFnWTI5dWMzUWdhVzV3ZFhRZ1BTQmxMblJoY21kbGREdGNjbHh1SUNCamIyNXpkQ0J3WVhKbGJuUWdQU0JwYm5CMWRDNXdZWEpsYm5ST2IyUmxPMXh5WEc0Z0lHTnZibk4wSUdacGJHVlZjR3h2WVdSbFpDQTlJR2x1Y0hWMExtWnBiR1Z6TG14bGJtZDBhQ0ErSURBN1hISmNibHh5WEc0Z0lHbG1JQ2htYVd4bFZYQnNiMkZrWldRcElIdGNjbHh1SUNBZ0lHTnZibk4wSUhOd1lXNUdhV3hsVG1GdFpTQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0ozTndZVzR1Wm1sc1pTMXVZVzFsSnlrN1hISmNiaUFnSUNCamIyNXpkQ0J1WlhkVGNHRnVJRDBnWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDZ25jM0JoYmljcE8xeHlYRzRnSUNBZ2JtVjNVM0JoYmk1amJHRnpjMHhwYzNRdVlXUmtLQ2RtYVd4bExXNWhiV1VuS1R0Y2NseHVJQ0FnSUc1bGQxTndZVzR1ZEdWNGRFTnZiblJsYm5RZ1BTQnBibkIxZEM1bWFXeGxjMXN3WFM1dVlXMWxPMXh5WEc0Z0lDQWdhV1lnS0hOd1lXNUdhV3hsVG1GdFpTQWhQVDBnYm5Wc2JDa2dlMXh5WEc0Z0lDQWdJQ0J6Y0dGdVJtbHNaVTVoYldVdWNHRnlaVzUwUld4bGJXVnVkQzV5WlcxdmRtVkRhR2xzWkNoemNHRnVSbWxzWlU1aGJXVXBPMXh5WEc0Z0lDQWdmVnh5WEc0Z0lDQWdhVzVxWldOMFRHRmlaV3hVYjBSdmJTaHVaWGRUY0dGdUxDQndZWEpsYm5Rc0lHbHVjSFYwS1R0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUdsbUlDZ2habWxzWlZWd2JHOWhaR1ZrS1NCN1hISmNiaUFnSUNCamIyNXpkQ0JtYVd4bFRtRnRaVk53WVc0Z1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NkemNHRnVMbVpwYkdVdGJtRnRaU2NwTzF4eVhHNGdJQ0FnWm1sc1pVNWhiV1ZUY0dGdUlDWW1JR1pwYkdWT1lXMWxVM0JoYmk1a1pXeGxkR1VvS1R0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUdsbUlDaG1hV3hsVlhCc2IyRmtaV1FnSmlZZ0lYQmhjbVZ1ZEM1amJHRnpjMHhwYzNRdVkyOXVkR0ZwYm5Nb0oyWnZZM1Z6WldRbktTa2dlMXh5WEc0Z0lDQWdjR0Z5Wlc1MExtTnNZWE56VEdsemRDNWhaR1FvSjJadlkzVnpaV1FuS1R0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUdWc2MyVWdhV1lnS0NGbWFXeGxWWEJzYjJGa1pXUWdKaVlnY0dGeVpXNTBMbU5zWVhOelRHbHpkQzVqYjI1MFlXbHVjeWduWm05amRYTmxaQ2NwS1NCN1hISmNiaUFnSUNCd1lYSmxiblF1WTJ4aGMzTk1hWE4wTG5KbGJXOTJaU2duWm05amRYTmxaQ2NwTzF4eVhHNGdJSDFjY2x4dWZWeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2FHRnVaR3hsVTJWc1pXTjBRMmhoYm1kbEtHVXBJSHRjY2x4dUlDQmpiMjV6ZENCamIzVnljMlZKYzFObGJHVmpkR1ZrSUQwZ1pTNTBZWEpuWlhRdWRtRnNkV1VnSVQwOUlDY25PMXh5WEc0Z0lHTnZibk4wSUhCaGNtVnVkQ0E5SUdVdWRHRnlaMlYwTG5CaGNtVnVkRTV2WkdVN1hISmNiaUFnWTI5dWMzUWdjR0Z5Wlc1MFNYTkdiMk4xYzJWa0lEMGdjR0Z5Wlc1MExtTnNZWE56VEdsemRDNWpiMjUwWVdsdWN5Z25abTlqZFhObFpDY3BPMXh5WEc1Y2NseHVYSEpjYmlBZ2FXWWdLR052ZFhKelpVbHpVMlZzWldOMFpXUWdKaVlnSVhCaGNtVnVkRWx6Um05amRYTmxaQ2tnZTF4eVhHNGdJQ0FnY0dGeVpXNTBMbU5zWVhOelRHbHpkQzVoWkdRb0oyWnZZM1Z6WldRbktUdGNjbHh1SUNCOVhISmNibHh5WEc0Z0lHbG1JQ2doWTI5MWNuTmxTWE5UWld4bFkzUmxaQ0FtSmlCd1lYSmxiblJKYzBadlkzVnpaV1FwSUh0Y2NseHVJQ0FnSUhCaGNtVnVkQzVqYkdGemMweHBjM1F1Y21WdGIzWmxLQ2RtYjJOMWMyVmtKeWs3WEhKY2JpQWdmVnh5WEc1OVhISmNibHh5WEc1bWRXNWpkR2x2YmlCc2FYTjBaVzVHYjNKR2IyTjFjeWhwYm5CMWRITXBJSHRjY2x4dUlDQnBibkIxZEhNdVptOXlSV0ZqYUNocGJuQjFkQ0E5UGlCcGJuQjFkQzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RtYjJOMWN5Y3NJR2hoYm1Sc1pVWnZZM1Z6S1NrN1hISmNibjFjY2x4dVhISmNibVoxYm1OMGFXOXVJR3hwYzNSbGJrWnZja0pzZFhJb2FXNXdkWFJ6S1NCN1hISmNiaUFnYVc1d2RYUnpMbVp2Y2tWaFkyZ29hVzV3ZFhRZ1BUNGdhVzV3ZFhRdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnbllteDFjaWNzSUdoaGJtUnNaVUpzZFhJcEtUdGNjbHh1ZlZ4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnYUdGdVpHeGxVbVZuYVhOMGNtRjBhVzl1Um05eWJTZ3BJSHRjY2x4dUlDQmpiMjV6ZENCaGJHeFVaWGgwU1c1d2RYUnpJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNrRnNiQ2duTG1GamRHbDJaVzV2ZHkxeVpYRjFhWEpsWkMxbWFXVnNaQ0ErSUdsdWNIVjBXM1I1Y0dVOVhDSjBaWGgwWENKZEp5azdYSEpjYmx4eVhHNGdJR052Ym5OMElITmxiR1ZqZENBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvSnlObGRtVnVkR0ZpYkdWZmFXUW5LVHRjY2x4dVhISmNiaUFnYVdZZ0tHRnNiRlJsZUhSSmJuQjFkSE1wSUh0Y2NseHVJQ0FnSUdGc2JGUmxlSFJKYm5CMWRITXVabTl5UldGamFDaHBibkIxZENBOVBpQjdYSEpjYmlBZ0lDQWdJR052Ym5OMElHNWxkMVJsZUhRZ1BTQnBibkIxZEM1d2JHRmpaV2h2YkdSbGNqdGNjbHh1SUNBZ0lDQWdZMjl1YzNRZ2JtRnRaVUYwZEhJZ1BTQnBibkIxZEM1blpYUkJkSFJ5YVdKMWRHVW9KMjVoYldVbktUdGNjbHh1SUNBZ0lDQWdZMjl1YzNRZ2NHRnlaVzUwVG05a1pTQTlJR2x1Y0hWMExuQmhjbVZ1ZEU1dlpHVTdYSEpjYmx4eVhHNGdJQ0FnSUNCamIyNXpkQ0JzWVdKbGJDQTlJR055WldGMFpVeGhZbVZzS0c1bGQxUmxlSFFzSUc1aGJXVkJkSFJ5S1R0Y2NseHVYSEpjYmlBZ0lDQWdJR2x1YW1WamRFeGhZbVZzVkc5RWIyMG9iR0ZpWld3c0lIQmhjbVZ1ZEU1dlpHVXNJR2x1Y0hWMEtUdGNjbHh1SUNBZ0lIMHBYSEpjYmlBZ2ZWeHlYRzVjY2x4dUlDQnBaaUFvYzJWc1pXTjBLU0I3WEhKY2JpQWdJQ0JqYjI1emRDQnVaWGRVWlhoMElEMGdjMlZzWldOMExtWnBjbk4wUTJocGJHUXVkR1Y0ZEVOdmJuUmxiblE3WEhKY2JpQWdJQ0JqYjI1emRDQnVZVzFsUVhSMGNpQTlJSE5sYkdWamRDNW5aWFJCZEhSeWFXSjFkR1VvSjI1aGJXVW5LVHRjY2x4dUlDQWdJR052Ym5OMElIQmhjbVZ1ZEU1dlpHVWdQU0J6Wld4bFkzUXVjR0Z5Wlc1MFRtOWtaVHRjY2x4dVhISmNiaUFnSUNCamIyNXpkQ0JzWVdKbGJDQTlJR055WldGMFpVeGhZbVZzS0c1bGQxUmxlSFFzSUc1aGJXVkJkSFJ5S1R0Y2NseHVJQ0FnSUdsdWFtVmpkRXhoWW1Wc1ZHOUViMjBvYkdGaVpXd3NJSEJoY21WdWRFNXZaR1VzSUhObGJHVmpkQ2s3WEhKY2JseHlYRzRnSUNBZ2MyVnNaV04wTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJOb1lXNW5aU2NzSUdoaGJtUnNaVk5sYkdWamRFTm9ZVzVuWlNrN1hISmNiaUFnZlZ4eVhHNWNjbHh1SUNCc2FYTjBaVzVHYjNKR2IyTjFjeWhoYkd4VVpYaDBTVzV3ZFhSektUdGNjbHh1SUNCc2FYTjBaVzVHYjNKQ2JIVnlLR0ZzYkZSbGVIUkpibkIxZEhNcE8xeHlYRzU5WEhKY2JseHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2FHRnVaR3hsVjI5eWExZHBkR2hWYzBadmNtMG9LU0I3WEhKY2JpQWdZMjl1YzNRZ1ptOXliVWx1Y0hWMGN5QTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNKQmJHd29KeTUzY0dObU55MW1iM0p0TFdOdmJuUnliMnd0ZDNKaGNDQnBibkIxZENjcE8xeHlYRzRnSUdOdmJuTjBJR1pwYkdWSmJuQjFkQ0E5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9YQ0l1ZDNCalpqY3RabTl5YlMxamIyNTBjbTlzTFhkeVlYQWdhVzV3ZFhSYmRIbHdaVDBuWm1sc1pTZGRYQ0lwTzF4eVhHNWNjbHh1SUNCcFppQW9abTl5YlVsdWNIVjBjeWtnZTF4eVhHNGdJQ0FnWm05eWJVbHVjSFYwY3k1bWIzSkZZV05vS0dsdWNIVjBJRDArSUh0Y2NseHVJQ0FnSUNBZ2FXWWdLR2x1Y0hWMExuUjVjR1VnSVQwOUlGd2lZMmhsWTJ0aWIzaGNJaUFtSmlCcGJuQjFkQzUwZVhCbElDRTlQU0JjSW1acGJHVmNJaWtnZTF4eVhHNGdJQ0FnSUNBZ0lHTnZibk4wSUc1bGQxUmxlSFFnUFNCcGJuQjFkQzV3YkdGalpXaHZiR1JsY2p0Y2NseHVJQ0FnSUNBZ0lDQmpiMjV6ZENCdVlXMWxRWFIwY2lBOUlHbHVjSFYwTG1kbGRFRjBkSEpwWW5WMFpTZ25ibUZ0WlNjcE8xeHlYRzRnSUNBZ0lDQWdJR052Ym5OMElIQmhjbVZ1ZEU1dlpHVWdQU0JwYm5CMWRDNXdZWEpsYm5ST2IyUmxPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQmpiMjV6ZENCc1lXSmxiQ0E5SUdOeVpXRjBaVXhoWW1Wc0tHNWxkMVJsZUhRc0lHNWhiV1ZCZEhSeUtUdGNjbHh1SUNBZ0lDQWdJQ0JwYm1wbFkzUk1ZV0psYkZSdlJHOXRLR3hoWW1Wc0xDQndZWEpsYm5ST2IyUmxMQ0JwYm5CMWRDazdYSEpjYmlBZ0lDQWdJQ0FnYVc1d2RYUXVZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25abTlqZFhNbkxDQm9ZVzVrYkdWR2IyTjFjeWs3WEhKY2JpQWdJQ0FnSUNBZ2FXNXdkWFF1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduWW14MWNpY3NJR2hoYm1Sc1pVSnNkWElwTzF4eVhHNGdJQ0FnSUNCOVhISmNiaUFnSUNCOUtWeHlYRzRnSUgxY2NseHVYSEpjYmlBZ2FXWWdLR1pwYkdWSmJuQjFkQ2tnZTF4eVhHNGdJQ0FnWTI5dWMzUWdibVYzVkdWNGRDQTlJRndpUkc5a1lXb2dRMVpjSWx4eVhHNGdJQ0FnWTI5dWMzUWdibUZ0WlVGMGRISWdQU0JtYVd4bFNXNXdkWFF1WjJWMFFYUjBjbWxpZFhSbEtDZHVZVzFsSnlrN1hISmNiaUFnSUNCamIyNXpkQ0J3WVhKbGJuUk9iMlJsSUQwZ1ptbHNaVWx1Y0hWMExuQmhjbVZ1ZEU1dlpHVTdYSEpjYmx4eVhHNGdJQ0FnWTI5dWMzUWdiR0ZpWld3Z1BTQmpjbVZoZEdWTVlXSmxiQ2h1WlhkVVpYaDBMQ0J1WVcxbFFYUjBjaWs3WEhKY2JpQWdJQ0JwYm1wbFkzUk1ZV0psYkZSdlJHOXRLR3hoWW1Wc0xDQndZWEpsYm5ST2IyUmxMQ0JtYVd4bFNXNXdkWFFwTzF4eVhHNWNjbHh1SUNBZ0lHWnBiR1ZKYm5CMWRDNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGphR0Z1WjJVbkxDQm9ZVzVrYkdWSmJuQjFkRVpwYkdVcE8xeHlYRzRnSUgxY2NseHVYSEpjYm4xY2NseHVYSEpjYm1oaGJtUnNaVmR2Y210WGFYUm9WWE5HYjNKdEtDazdYSEpjYm5kcGJtUnZkeTV6WlhSVWFXMWxiM1YwS0doaGJtUnNaVkpsWjJsemRISmhkR2x2YmtadmNtMHNJRFl3TUNrN0lpd2lZMjl1YzNRZ1kyOTFjbk5sYzFOcFpHVmlZWEpPWVhZZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NjamJXVnVkUzFxWVhaaExXTnZkWEp6WlMxemFXUmxZbUZ5SnlrN1hISmNibU52Ym5OMElIZHZjbXRYYVhSb1ZYTlRhV1JsWW1GeVRtRjJJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25JMjFsYm5VdGQyOXlheTEzYVhSb0xYVnpMWE5wWkdWaVlYSXRiV1Z1ZFNjcE8xeHlYRzVjY2x4dVhISmNibHh5WEc1amIyNXpkQ0J6WlhSR2FYSnpkRVZzWlcxbGJuUkJZM1JwZG1VZ1BTQWdLSE5wWkdWaVlYSXBJRDArSUh0Y2NseHVJQ0JwWmloemFXUmxZbUZ5S1h0Y2NseHVJQ0FnSUdOdmJuTjBJR1pwY25OMFJXd2dQU0J6YVdSbFltRnlMbkYxWlhKNVUyVnNaV04wYjNJb0oyeHBPbVpwY25OMExXOW1MWFI1Y0dVbktUdGNjbHh1SUNBZ0lHWnBjbk4wUld3Z0ppWWdabWx5YzNSRmJDNWpiR0Z6YzB4cGMzUXVZV1JrS0NkaFkzUnBkbVVuS1R0Y2NseHVJQ0I5WEhKY2JuMDdYSEpjYmx4eVhHNXpaWFJHYVhKemRFVnNaVzFsYm5SQlkzUnBkbVVvWTI5MWNuTmxjMU5wWkdWaVlYSk9ZWFlwTzF4eVhHNXpaWFJHYVhKemRFVnNaVzFsYm5SQlkzUnBkbVVvZDI5eWExZHBkR2hWYzFOcFpHVmlZWEpPWVhZcE8xeHlYRzVjY2x4dVhISmNibU52Ym5OMElITmpjbVZsYmtselYybGtaWEpVYUdGdVdFd2dQU0IzYVc1a2IzY3ViV0YwWTJoTlpXUnBZU2hnYjI1c2VTQnpZM0psWlc0Z1lXNWtJQ2h0YVc0dGQybGtkR2c2SURFeU1EQndlQ2xnS1M1dFlYUmphR1Z6TzF4eVhHNWNjbHh1WEhKY2JtTnZibk4wSUhKbGJXOTJaVTV2ZEVGamRHbDJaVXhwYm1zZ1BTQW9LU0E5UGlCN1hISmNiaUFnWTI5dWMzUWdiR2x1YXlBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvSjJ4cExtRmpkR2wyWlNjcE8xeHlYRzVjY2x4dUlDQnNhVzVySUNZbUlHeHBibXN1WTJ4aGMzTk1hWE4wTG5KbGJXOTJaU2duWVdOMGFYWmxKeWs3WEhKY2JuMWNjbHh1WEhKY2JtWjFibU4wYVc5dUlHTm9ZVzVuWlVGamRHbDJaVXhwYm1zb1pTbDdYSEpjYmlBZ1kyOXVjM1FnY0dGeVpXNTBJRDBnWlM1MFlYSm5aWFF1Y0dGeVpXNTBUbTlrWlR0Y2NseHVJQ0J5WlcxdmRtVk9iM1JCWTNScGRtVk1hVzVyS0NrN1hISmNiaUFnY0dGeVpXNTBMbU5zWVhOelRHbHpkQzVoWkdRb0oyRmpkR2wyWlNjcE8xeHlYRzU5WEhKY2JseHlYRzVwWmlBb2MyTnlaV1Z1U1hOWGFXUmxjbFJvWVc1WVRDa2dlMXh5WEc0Z0lHTnZibk4wSUdOdmRYSnpaWE5CYkd4VGFXUmxZbUZ5VEdsdWEzTWdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eVFXeHNLQ2N1YzJsa1pXSmhjaTF1WVhZZ1lTY3BPMXh5WEc1Y2NseHVJQ0JqYjNWeWMyVnpRV3hzVTJsa1pXSmhja3hwYm10ekxtWnZja1ZoWTJnb0lHeHBibXNnUFQ0Z2UxeHlYRzRnSUNBZ2JHbHVheTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RqYkdsamF5Y3NJR05vWVc1blpVRmpkR2wyWlV4cGJtc3BYSEpjYmlBZ2ZTbGNjbHh1WEhKY2JpQWdZMjl1YzNRZ2QyOXlhMWRwZEdoVmMwRnNiRk5wWkdWaVlYSk1hVzVyY3lBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0pCYkd3b0p5NTNiM0pyWDE5emFXUmxZbUZ5SUdFbktUdGNjbHh1WEhKY2JpQWdkMjl5YTFkcGRHaFZjMEZzYkZOcFpHVmlZWEpNYVc1cmN5NW1iM0pGWVdOb0tDQnNhVzVySUQwK0lIdGNjbHh1SUNBZ0lHeHBibXN1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduWTJ4cFkyc25MQ0JqYUdGdVoyVkJZM1JwZG1WTWFXNXJLVnh5WEc0Z0lIMHBYSEpjYm4xY2NseHVYSEpjYmlJc0ltTnZibk4wSUdOdmJuUmhZM1JDZEc1eklEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDaGNjbHh1SUNBbkxtMWxiblV0YVhSbGJTMHlPVEF5SUQ0Z1lTY3BPMXh5WEc1amIyNXpkQ0JqYjNWeWMyVnpRblJ1Y3lBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0pCYkd3b0p5NWpiM1Z5YzJWZlgySjBiaWNwTzF4eVhHNWpiMjV6ZENCdmRtVnliR0Y1SUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduTG5CdmNIVndMVzkyWlhKc1lYa25LVHRjY2x4dVkyOXVjM1FnWm05dmRHVnlRMjl1ZEdGdWRHTjBRblJ1SUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWhjSWlOdFpXNTFMV2wwWlcwdE5EQTRNMXdpS1R0Y2NseHVYSEpjYm1aMWJtTjBhVzl1SUdoaGJtUnNaVkJ2Y0hWd1ZtbHphV0pwYkdsMGVTaGxLU0I3WEhKY2JpQWdaUzV3Y21WMlpXNTBSR1ZtWVhWc2RDZ3BPMXh5WEc0Z0lHTnZibk4wSUhCdmNIVndJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25MbkJ2Y0hWd0p5azdYSEpjYmlBZ2NHOXdkWEF1WTJ4aGMzTk1hWE4wTG5SdloyZHNaU2duYjNCbGJtVmtKeWs3WEhKY2JpQWdaRzlqZFcxbGJuUXVZbTlrZVM1amJHRnpjMHhwYzNRdWRHOW5aMnhsS0NkdWJ5MXpZM0p2Ykd3bktUdGNjbHh1ZlZ4eVhHNXBaaUFvWTI5dWRHRmpkRUowYm5NdWJHVnVaM1JvSUQ0Z01Da2dlMXh5WEc0Z0lHTnZiblJoWTNSQ2RHNXpMbVp2Y2tWaFkyZ29ZblJ1SUQwK0lHSjBiaTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RqYkdsamF5Y3NJR2hoYm1Sc1pWQnZjSFZ3Vm1semFXSnBiR2wwZVNrcE8xeHlYRzU5WEhKY2JseHlYRzVwWmlobWIyOTBaWEpEYjI1MFlXNTBZM1JDZEc0cGUxeHlYRzRnSUdadmIzUmxja052Ym5SaGJuUmpkRUowYmk1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkamJHbGpheWNzSUdoaGJtUnNaVkJ2Y0hWd1ZtbHphV0pwYkdsMGVTbGNjbHh1ZlZ4eVhHNWNjbHh1YVdZZ0tHTnZkWEp6WlhOQ2RHNXpMbXhsYm1kMGFDQStJREFwSUh0Y2NseHVJQ0JqYjNWeWMyVnpRblJ1Y3k1bWIzSkZZV05vS0dKMGJpQTlQaUJpZEc0dVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblkyeHBZMnNuTENCb1lXNWtiR1ZRYjNCMWNGWnBjMmxpYVd4cGRIa3BLVHRjY2x4dWZWeHlYRzVjY2x4dVhISmNibWxtSUNodmRtVnliR0Y1S1NCN1hISmNiaUFnYjNabGNteGhlUzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RqYkdsamF5Y3NJR2hoYm1Sc1pWQnZjSFZ3Vm1semFXSnBiR2wwZVNrN1hISmNibjFjY2x4dVhISmNibVoxYm1OMGFXOXVJR2hoYm1Sc1pVbHVjSFYwUm05amRYTW9LU0I3WEhKY2JpQWdZMjl1YzNRZ2FXUWdQU0IwYUdsekxtbGtPMXh5WEc0Z0lHTnZibk4wSUd4aFltVnNJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpaGdiR0ZpWld4YlptOXlQU2NrZTJsa2ZTZGdLVHRjY2x4dVhISmNiaUFnYVdZZ0tDRnNZV0psYkM1amJHRnpjMHhwYzNRdVkyOXVkR0ZwYm5Nb0oyWnZZM1Z6WldRbktTa2dlMXh5WEc0Z0lDQWdiR0ZpWld3dVkyeGhjM05NYVhOMExtRmtaQ2duWm05amRYTmxaQ2NwTzF4eVhHNGdJSDFjY2x4dWZWeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2FHRnVaR3hsU1c1d2RYUkNiSFZ5S0NrZ2UxeHlYRzRnSUdOdmJuTjBJR2xrSUQwZ2RHaHBjeTVwWkR0Y2NseHVJQ0JqYjI1emRDQnNZV0psYkNBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvWUd4aFltVnNXMlp2Y2owbkpIdHBaSDBuWUNrN1hISmNibHh5WEc0Z0lHbG1JQ2gwYUdsekxuWmhiSFZsSUNFOVBTQW5KeWtnZTF4eVhHNGdJQ0FnYVdZZ0tDRnNZV0psYkM1amJHRnpjMHhwYzNRdVkyOXVkR0ZwYm5Nb0oyWnZZM1Z6WldRbktTa2dlMXh5WEc0Z0lDQWdJQ0JzWVdKbGJDNWpiR0Z6YzB4cGMzUXVZV1JrS0NkbWIyTjFjMlZrSnlrN1hISmNiaUFnSUNCOVhISmNiaUFnZlZ4eVhHNGdJR1ZzYzJVZ2UxeHlYRzRnSUNBZ2FXWWdLR3hoWW1Wc0xtTnNZWE56VEdsemRDNWpiMjUwWVdsdWN5Z25abTlqZFhObFpDY3BLU0I3WEhKY2JpQWdJQ0FnSUd4aFltVnNMbU5zWVhOelRHbHpkQzV5WlcxdmRtVW9KMlp2WTNWelpXUW5LVHRjY2x4dUlDQWdJSDFjY2x4dUlDQjlYSEpjYm4xY2NseHVYSEpjYmx4eVhHNWpiMjV6ZENCaFpHUkdiMk4xYzB4cGMzUmxibVZ5Y3lBOUlHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dUlDQmpiMjV6ZENCMFpYaDBTVzV3ZFhSeklEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDZ25MbkJ2Y0hWd0lHbHVjSFYwVzNSNWNHVTlYQ0owWlhoMFhDSmRKeWs3WEhKY2JpQWdZMjl1YzNRZ1pXMWhhV3hKYm5CMWRDQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5TnRZMlV0UlUxQlNVd25LVHRjY2x4dVhISmNiaUFnZEdWNGRFbHVjSFYwY3k1bWIzSkZZV05vS0dsdWNIVjBJRDArSUh0Y2NseHVJQ0FnSUdsdWNIVjBMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMlp2WTNWekp5d2dhR0Z1Wkd4bFNXNXdkWFJHYjJOMWN5azdYSEpjYmlBZ0lDQnBibkIxZEM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkaWJIVnlKeXdnYUdGdVpHeGxTVzV3ZFhSQ2JIVnlLVHRjY2x4dUlDQjlLVnh5WEc1Y2NseHVJQ0JsYldGcGJFbHVjSFYwTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJadlkzVnpKeXdnYUdGdVpHeGxTVzV3ZFhSR2IyTjFjeWs3WEhKY2JpQWdaVzFoYVd4SmJuQjFkQzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RpYkhWeUp5d2dhR0Z1Wkd4bFNXNXdkWFJDYkhWeUtUdGNjbHh1ZlNncE8xeHlYRzVjY2x4dVhISmNibHh5WEc1Y2NseHVZMjl1YzNRZ2RHOW5aMnhsVUc5d2RYQWdQU0FvS1NBOVBpQjdYSEpjYmlBZ2FXWW9jRzl3ZFhBcGUxeHlYRzRnSUNBZ2NHOXdkWEF1WTJ4aGMzTk1hWE4wTG5SdloyZHNaU2duYjNCbGJtVmtKeWs3WEhKY2JpQWdJQ0JrYjJOMWJXVnVkQzVpYjJSNUxtTnNZWE56VEdsemRDNTBiMmRuYkdVb0oyNXZMWE5qY205c2JDY3BPMXh5WEc0Z0lIMWNjbHh1ZlZ4eVhHNWNjbHh1WTI5dWMzUWdjR0Z5YzJWRGIyOXJhV1VnUFNCemRISWdQVDVjY2x4dUlDQnpkSEpjY2x4dUlDQWdJQzV6Y0d4cGRDZ25PeWNwWEhKY2JpQWdJQ0F1YldGd0tIWWdQVDRnZGk1emNHeHBkQ2duUFNjcEtWeHlYRzRnSUNBZ0xuSmxaSFZqWlNnb1lXTmpMQ0IyS1NBOVBpQjdYSEpjYmlBZ0lDQWdJR2xtSUNoMld6QmRJQ1ltSUhaYk1WMHBJSHRjY2x4dUlDQWdJQ0FnSUNCaFkyTmJaR1ZqYjJSbFZWSkpRMjl0Y0c5dVpXNTBLSFpiTUYwdWRISnBiU2dwS1YwZ1BTQmtaV052WkdWVlVrbERiMjF3YjI1bGJuUW9kbHN4WFM1MGNtbHRLQ2twTzF4eVhHNGdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lISmxkSFZ5YmlCaFkyTTdYSEpjYmlBZ0lDQjlMQ0I3ZlNrN1hISmNibHh5WEc1amIyNXpkQ0JuWlhSRGIyOXJhV1VnUFNCdVlXMWxJRDArSUh0Y2NseHVJQ0JzWlhRZ1kyOXZhMmxsY3lBOUlHUnZZM1Z0Wlc1MExtTnZiMnRwWlR0Y2NseHVJQ0JqYjI1emRDQndZWEp6WldSRGIyOXJhV1Z6SUQwZ2NHRnljMlZEYjI5cmFXVW9ZMjl2YTJsbGN5azdYSEpjYmx4eVhHNGdJSEpsZEhWeWJpQndZWEp6WldSRGIyOXJhV1Z6VzI1aGJXVmRPMXh5WEc1OVhISmNibHh5WEc1amIyNXpkQ0J1WlhkemJHVjBkR1Z5UTI5dmEybGxSWGhwYzNRZ1BTQm5aWFJEYjI5cmFXVW9KMjVsZDNOc1pYUjBaWEpRYjNCMWNFTnZiMnRwWlNjcE8xeHlYRzVjY2x4dVkyOXVjM1FnWTJobFkydERiMjlyYVdWRmVIQnBjbUYwYVc5dUlEMGdLQ2tnUFQ0Z2UxeHlYRzRnSUdOdmJuTjBJRzV2ZDFScGJXVnpkR0Z0Y0NBOUlFUmhkR1V1Ym05M0tDazdYSEpjYmlBZ1kyOXVjM1FnYjJabWMyVjBWR2x0WlhOMFlXMXdJRDBnYm1WM0lFUmhkR1VvS1M1blpYUlVhVzFsZW05dVpVOW1abk5sZENncElDb2dOakF3TURBN1hISmNiaUFnTHk4Z1oyVjBWR2x0WlZwdmJtVlBabVp6WlhRZ2NtVjBkWEp1SUc5bVpuTmxkQ0JwYmlCdGFXNTFkR1Z6WEhKY2JpQWdMeThnYlhWc2RHbHdiR1VnYVhRZ1lua2dOakF3TURBZ1oybDJaU0IxY3lCdGFXeHBjMlZqYjI1a2MxeHlYRzRnSUdsbUlDaHVaWGR6YkdWMGRHVnlRMjl2YTJsbFJYaHBjM1FwSUh0Y2NseHVJQ0FnSUdOdmIydHBaVk4wYjNKbExtZGxkQ2duYm1WM2MyeGxkSFJsY2xCdmNIVndRMjl2YTJsbEp5bGNjbHh1SUNBZ0lDQWdMblJvWlc0b1kyOXZhMmxsSUQwK0lIdGNjbHh1SUNBZ0lDQWdJQ0JqYjI1emRDQmpiMjlyYVdWQmJISmxZV1I1Ulhod2FYSmxaQ0E5SUNodWIzZFVhVzFsYzNSaGJYQWdMU0JqYjI5cmFXVXVaWGh3YVhKbGN5QXRJRzltWm5ObGRGUnBiV1Z6ZEdGdGNDa2dQaUF3TzF4eVhHNGdJQ0FnSUNBZ0lHbG1JQ2hqYjI5cmFXVkJiSEpsWVdSNVJYaHdhWEpsWkNrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnZEc5bloyeGxVRzl3ZFhBb0tUdGNjbHh1SUNBZ0lDQWdJQ0FnSUdOeVpXRjBaVU52YjJ0cFpTZ25ibVYzYzJ4bGRIUmxjbEJ2Y0hWd1EyOXZhMmxsSnl3Z0ozWmhiSFZsSnl3Z1oyVjBSR0YwWlVGbWRHVnlOMFJoZVhNb0tTazdYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNCOUtUdGNjbHh1SUNCOVhISmNibjFjY2x4dVhISmNibU52Ym5OMElHTnlaV0YwWlVOdmIydHBaU0E5SUNodVlXMWxMQ0IyWVd4MVpTd2daWGh3YVhKbGN5a2dQVDRnZTF4eVhHNGdJR1J2WTNWdFpXNTBMbU52YjJ0cFpTQTlJR0FrZTI1aGJXVjlQU1I3ZG1Gc2RXVjlPeUJsZUhCcGNtVnpQU1I3Wlhod2FYSmxjMzFnWEhKY2JuMWNjbHh1WEhKY2JtTnZibk4wSUdkbGRFUmhkR1ZCWm5SbGNqZEVZWGx6SUQwZ0tDa2dQVDRnZTF4eVhHNGdJR052Ym5OMElIUnZaR0Y1VkdsdFpYTjBZVzF3SUQwZ1JHRjBaUzV1YjNjb0tUdGNjbHh1SUNCamIyNXpkQ0IwYjJSaGVVUmhkR1VnUFNCdVpYY2dSR0YwWlNoMGIyUmhlVlJwYldWemRHRnRjQ2t1ZEc5VGRISnBibWNvS1R0Y2NseHVJQ0F2THlBM0lHUmhlWE1nUFNBMk1EUWdPREF3SURBd01DQnRjMXh5WEc0Z0lHTnZibk4wSUdWNGNHbHlZWFJwYjI1VWFXMWxjM1JoYlhBZ1BTQjBiMlJoZVZScGJXVnpkR0Z0Y0NBcklEWXdORGd3TURBd01EdGNjbHh1SUNBdkx5QXhJRzFwYm5WMFpTQTlJRFl3TURBd0lHMXpYSEpjYmlBZ0x5OGdZMjl1YzNRZ1pYaHdhWEpoZEdsdmJsUnBiV1Z6ZEdGdGNDQTlJSFJ2WkdGNVZHbHRaWE4wWVcxd0lDc2dOakF3TURBN1hISmNiaUFnWTI5dWMzUWdaWGh3YVhKaGRHbHZibVJFWVhSbElEMGdibVYzSUVSaGRHVW9aWGh3YVhKaGRHbHZibFJwYldWemRHRnRjQ2t1ZEc5VGRISnBibWNvS1R0Y2NseHVYSEpjYmlBZ2NtVjBkWEp1SUdWNGNHbHlZWFJwYjI1a1JHRjBaVHRjY2x4dWZWeHlYRzVjY2x4dVkyOXVjM1FnY0c5d2RYQWdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDY3VjRzl3ZFhBbktUdGNjbHh1WEhKY2JseHlYRzVqYjI1emRDQm9ZVzVrYkdWSmJtbDBhV0ZzVUc5d2RYQldhWE5wWW1sc2FYUjVJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzRnSUdsbUlDaHVaWGR6YkdWMGRHVnlRMjl2YTJsbFJYaHBjM1FnSmlZZ2NHOXdkWEFwSUh0Y2NseHVJQ0FnSUdOb1pXTnJRMjl2YTJsbFJYaHdhWEpoZEdsdmJpZ3BPMXh5WEc0Z0lIMWNjbHh1SUNCcFppQW9JVzVsZDNOc1pYUjBaWEpEYjI5cmFXVkZlR2x6ZENBbUppQndiM0IxY0NrZ2UxeHlYRzRnSUNBZ2RHOW5aMnhsVUc5d2RYQW9LVHRjY2x4dUlDQWdJR055WldGMFpVTnZiMnRwWlNnbmJtVjNjMnhsZEhSbGNsQnZjSFZ3UTI5dmEybGxKeXdnSjNaaGJIVmxKeXdnWjJWMFJHRjBaVUZtZEdWeU4wUmhlWE1vS1NrN1hISmNiaUFnZlR0Y2NseHVmU2dwT3lJc0ltTnZibk4wSUdoaGJXSjFjbWRsY2tKMGJpQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5NW9ZVzFpZFhKblpYSmZYMkoxZEhSdmJpY3BPMXh5WEc1amIyNXpkQ0J0YjJKcGJHVk5aVzUxSUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduTG1obFlXUmxjaTFpZFhKblpYSW5LVHRjY2x4dVkyOXVjM1FnWVd4c1RXVnVkVXhwYm10eklEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDZ25JMjFsYm5VdGJXRnBiaTF0Wlc1MUxURWdZU2NwTzF4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnYUdGdVpHeGxUbUYyVDNCbGJpZ3BlMXh5WEc0Z0lHTnZibk4wSUdselEyeHZjMlZrSUQwZ2JXOWlhV3hsVFdWdWRTNWpiR0Z6YzB4cGMzUXVZMjl1ZEdGcGJuTW9KMk5zYjNObFpDY3BPMXh5WEc0Z0lHTnZibk4wSUdselQzQmxiaUE5SUcxdlltbHNaVTFsYm5VdVkyeGhjM05NYVhOMExtTnZiblJoYVc1ektDZHZjR1Z1WldRbktUdGNjbHh1WEhKY2JpQWdhV1lvYVhORGJHOXpaV1FwZTF4eVhHNGdJQ0FnYlc5aWFXeGxUV1Z1ZFM1amJHRnpjMHhwYzNRdWNtVnRiM1psS0Z3aVkyeHZjMlZrWENJcE8xeHlYRzRnSUNBZ2JXOWlhV3hsVFdWdWRTNWpiR0Z6YzB4cGMzUXVZV1JrS0Z3aWIzQmxibVZrWENJcE8xeHlYRzVjY2x4dUlDQjlYSEpjYmlBZ2FXWW9hWE5QY0dWdUtYdGNjbHh1SUNBZ0lHMXZZbWxzWlUxbGJuVXVZMnhoYzNOTWFYTjBMbkpsYlc5MlpTaGNJbTl3Wlc1bFpGd2lLVHRjY2x4dUlDQWdJRzF2WW1sc1pVMWxiblV1WTJ4aGMzTk1hWE4wTG1Ga1pDaGNJbU5zYjNObFpGd2lLVHRjY2x4dUlDQjlYSEpjYm4xY2NseHVYSEpjYm1oaGJXSjFjbWRsY2tKMGJpNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGpiR2xqYXljc0lHaGhibVJzWlU1aGRrOXdaVzRwTzF4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnWVdSa1RHbHpkR1Z1WlhKelZHOU5aVzUxVEdsdWEzTW9LWHRjY2x4dUlDQmhiR3hOWlc1MVRHbHVhM011Wm05eVJXRmphQ2dnYkdsdWF5QTlQaUJzYVc1ckxtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0oyTnNhV05ySnl3Z2FHRnVaR3hsVG1GMlQzQmxiaWtwTzF4eVhHNTlYSEpjYmx4eVhHNWhaR1JNYVhOMFpXNWxjbk5VYjAxbGJuVk1hVzVyY3lncE95SXNJbU52Ym5OMElIUnBiV1ZzYVc1bFFuUnVJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25MblJwYldWc2FXNWxYMTlpZEc0bktUdGNjbHh1WTI5dWMzUWdkR2x0Wld4cGJtVk1hWE4wSUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduTG5ScGJXVnNhVzVsTFdsMFpXMXpKeWs3WEhKY2JteGxkQ0JqYjJ4c1lYQnpaV1JHYkdGbklEMGdabUZzYzJVN1hISmNibHh5WEc1amIyNXpkQ0J6YUc5M1NHbGtaR1Z1U1hSbGJYTWdQU0JwZEdWdGN5QTlQaUJwZEdWdGN5NW1iM0pGWVdOb0tHbDBaVzBnUFQ0Z2FYUmxiUzVqYkdGemMweHBjM1F1Y21WdGIzWmxLQ2RvYVdSa1pXNG5LU2s3WEhKY2JseHlYRzVqYjI1emRDQm9hV1JsUld4bGJXVnVkSE1nUFNBb0tTQTlQaUI3WEhKY2JpQWdZMjl1YzNRZ1lXeHNSV3hsYldWdWRITWdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eVFXeHNLQ2N1ZEdsdFpXeHBibVV0YVhSbGJTY3BPMXh5WEc1Y2NseHVJQ0JoYkd4RmJHVnRaVzUwY3k1bWIzSkZZV05vS0NBb1pXd3NJR2twSUQwK0lIdGNjbHh1SUNBZ0lHbG1LR2srUFRRZ0ppWWdJV1ZzTG1Oc1lYTnpUR2x6ZEM1amIyNTBZV2x1Y3lnbmFHbGtaR1Z1SnlrcGUxeHlYRzRnSUNBZ0lDQmxiQzVqYkdGemMweHBjM1F1WVdSa0tDZG9hV1JrWlc0bktUdGNjbHh1SUNBZ0lIMWNjbHh1SUNCOUtWeHlYRzU5WEhKY2JseHlYRzVqYjI1emRDQmphR0Z1WjJWQ2RHNVVaWGgwSUQwZ0tDa2dQVDRnZTF4eVhHNGdJR2xtSUNoMGFXMWxiR2x1WlVKMGJpNTBaWGgwUTI5dWRHVnVkQ0E5UFNCY0lsSnZlbmRweFlSY0lpa2dlMXh5WEc0Z0lDQWdkR2x0Wld4cGJtVkNkRzR1ZEdWNGRFTnZiblJsYm5RZ1BTQmNJbHAzYWNXRVhDSmNjbHh1SUNCOVhISmNiaUFnWld4elpTQjdYSEpjYmlBZ0lDQjBhVzFsYkdsdVpVSjBiaTUwWlhoMFEyOXVkR1Z1ZENBOUlGd2lVbTk2ZDJuRmhGd2lPMXh5WEc0Z0lIMWNjbHh1ZlZ4eVhHNWNjbHh1THk4Z1kyOXVjM1FnYzJOeWIyeHNWRzlNYVhOMElEMGdLQ2tnUFQ0Z2UxeHlYRzR2THlBZ0lHbG1LR052Ykd4aGNITmxaRVpzWVdjcGUxeHlYRzR2THlBZ0lDQWdkR2x0Wld4cGJtVk1hWE4wTG5OamNtOXNiRWx1ZEc5V2FXVjNLRnh5WEc0dkx5QWdJQ0FnSUNCN1hISmNiaTh2SUNBZ0lDQWdJQ0FnWW1Wb1lYWnBiM0k2SUZ3aWMyMXZiM1JvWENJc0lGeHlYRzR2THlBZ0lDQWdJQ0FnSUdKc2IyTnJPaUFuWlc1a0oxeHlYRzR2THlBZ0lDQWdJQ0I5S1Z4eVhHNHZMeUFnSUgxY2NseHVMeThnSUNCcFppZ2hZMjlzYkdGd2MyVmtSbXhoWnlsN1hISmNiaTh2SUNBZ0lDQjBhVzFsYkdsdVpVeHBjM1F1YzJOeWIyeHNTVzUwYjFacFpYY29YSEpjYmk4dklDQWdJQ0FnSUh0Y2NseHVMeThnSUNBZ0lDQWdJQ0JpWldoaGRtbHZjam9nWENKemJXOXZkR2hjSWl3Z1hISmNiaTh2SUNBZ0lDQWdJQ0FnWW14dlkyczZJQ2RsYm1RblhISmNiaTh2SUNBZ0lDQWdJSDBwWEhKY2JpOHZJQ0FnZlZ4eVhHNHZMeUI5WEhKY2JseHlYRzVqYjI1emRDQmphR0Z1WjJWVWFXMWxUR2x1WlVobGFXZG9kQ0E5SUNncElEMCtJSFJwYldWc2FXNWxUR2x6ZEM1amJHRnpjMHhwYzNRdWRHOW5aMnhsS0Z3aVkyOXNiR0Z3YzJWa1hDSXBPMXh5WEc1Y2NseHVablZ1WTNScGIyNGdhR0Z1Wkd4bFZHbHRaV3hwYm1WRGIyeGhjSE5sS0NrZ2UxeHlYRzRnSUZ4eVhHNGdJR052Ym5OMElHaHBaR1JsYmtsMFpXMXpJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNrRnNiQ2duTG5ScGJXVnNhVzVsTFdsMFpXMHVhR2xrWkdWdUp5azdYSEpjYmx4eVhHNGdJR2xtS0dOdmJHeGhjSE5sWkVac1lXY3BlMXh5WEc0Z0lDQWdhR2xrWlVWc1pXMWxiblJ6S0NrN1hISmNiaUFnZlZ4eVhHNGdJR2xtS0NGamIyeHNZWEJ6WldSR2JHRm5LWHRjY2x4dUlDQWdJSE5vYjNkSWFXUmtaVzVKZEdWdGN5aG9hV1JrWlc1SmRHVnRjeWs3WEhKY2JpQWdmVnh5WEc0Z0lHTm9ZVzVuWlZScGJXVk1hVzVsU0dWcFoyaDBLQ2s3WEhKY2JpQWdZMmhoYm1kbFFuUnVWR1Y0ZENncE8xeHlYRzRnSUM4dklITmpjbTlzYkZSdlRHbHpkQ2dwTzF4eVhHNWNjbHh1SUNCamIyeHNZWEJ6WldSR2JHRm5JRDBnSVdOdmJHeGhjSE5sWkVac1lXYzdYSEpjYm4xY2NseHVYSEpjYm1sbUlDaDBhVzFsYkdsdVpVSjBiaWtnZTF4eVhHNGdJSFJwYldWc2FXNWxRblJ1TG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJOc2FXTnJKeXdnYUdGdVpHeGxWR2x0Wld4cGJtVkRiMnhoY0hObEtWeHlYRzU5SWl3aUx5OGdWR2hsSUcxdlpIVnNaU0JqWVdOb1pWeHVkbUZ5SUY5ZmQyVmljR0ZqYTE5dGIyUjFiR1ZmWTJGamFHVmZYeUE5SUh0OU8xeHVYRzR2THlCVWFHVWdjbVZ4ZFdseVpTQm1kVzVqZEdsdmJseHVablZ1WTNScGIyNGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWh0YjJSMWJHVkpaQ2tnZTF4dVhIUXZMeUJEYUdWamF5QnBaaUJ0YjJSMWJHVWdhWE1nYVc0Z1kyRmphR1ZjYmx4MGRtRnlJR05oWTJobFpFMXZaSFZzWlNBOUlGOWZkMlZpY0dGamExOXRiMlIxYkdWZlkyRmphR1ZmWDF0dGIyUjFiR1ZKWkYwN1hHNWNkR2xtSUNoallXTm9aV1JOYjJSMWJHVWdJVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVYSFJjZEhKbGRIVnliaUJqWVdOb1pXUk5iMlIxYkdVdVpYaHdiM0owY3p0Y2JseDBmVnh1WEhRdkx5QkRjbVZoZEdVZ1lTQnVaWGNnYlc5a2RXeGxJQ2hoYm1RZ2NIVjBJR2wwSUdsdWRHOGdkR2hsSUdOaFkyaGxLVnh1WEhSMllYSWdiVzlrZFd4bElEMGdYMTkzWldKd1lXTnJYMjF2WkhWc1pWOWpZV05vWlY5ZlcyMXZaSFZzWlVsa1hTQTlJSHRjYmx4MFhIUXZMeUJ1YnlCdGIyUjFiR1V1YVdRZ2JtVmxaR1ZrWEc1Y2RGeDBMeThnYm04Z2JXOWtkV3hsTG14dllXUmxaQ0J1WldWa1pXUmNibHgwWEhSbGVIQnZjblJ6T2lCN2ZWeHVYSFI5TzF4dVhHNWNkQzh2SUVWNFpXTjFkR1VnZEdobElHMXZaSFZzWlNCbWRXNWpkR2x2Ymx4dVhIUmZYM2RsWW5CaFkydGZiVzlrZFd4bGMxOWZXMjF2WkhWc1pVbGtYU2h0YjJSMWJHVXNJRzF2WkhWc1pTNWxlSEJ2Y25SekxDQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLVHRjYmx4dVhIUXZMeUJTWlhSMWNtNGdkR2hsSUdWNGNHOXlkSE1nYjJZZ2RHaGxJRzF2WkhWc1pWeHVYSFJ5WlhSMWNtNGdiVzlrZFd4bExtVjRjRzl5ZEhNN1hHNTlYRzVjYmlJc0lpOHZJR2RsZEVSbFptRjFiSFJGZUhCdmNuUWdablZ1WTNScGIyNGdabTl5SUdOdmJYQmhkR2xpYVd4cGRIa2dkMmwwYUNCdWIyNHRhR0Z5Ylc5dWVTQnRiMlIxYkdWelhHNWZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbTRnUFNCbWRXNWpkR2x2YmlodGIyUjFiR1VwSUh0Y2JseDBkbUZ5SUdkbGRIUmxjaUE5SUcxdlpIVnNaU0FtSmlCdGIyUjFiR1V1WDE5bGMwMXZaSFZzWlNBL1hHNWNkRngwWm5WdVkzUnBiMjRvS1NCN0lISmxkSFZ5YmlCdGIyUjFiR1ZiSjJSbFptRjFiSFFuWFRzZ2ZTQTZYRzVjZEZ4MFpuVnVZM1JwYjI0b0tTQjdJSEpsZEhWeWJpQnRiMlIxYkdVN0lIMDdYRzVjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDaG5aWFIwWlhJc0lIc2dZVG9nWjJWMGRHVnlJSDBwTzF4dVhIUnlaWFIxY200Z1oyVjBkR1Z5TzF4dWZUc2lMQ0l2THlCa1pXWnBibVVnWjJWMGRHVnlJR1oxYm1OMGFXOXVjeUJtYjNJZ2FHRnliVzl1ZVNCbGVIQnZjblJ6WEc1ZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtUWdQU0JtZFc1amRHbHZiaWhsZUhCdmNuUnpMQ0JrWldacGJtbDBhVzl1S1NCN1hHNWNkR1p2Y2loMllYSWdhMlY1SUdsdUlHUmxabWx1YVhScGIyNHBJSHRjYmx4MFhIUnBaaWhmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG04b1pHVm1hVzVwZEdsdmJpd2dhMlY1S1NBbUppQWhYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV2S0dWNGNHOXlkSE1zSUd0bGVTa3BJSHRjYmx4MFhIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENCclpYa3NJSHNnWlc1MWJXVnlZV0pzWlRvZ2RISjFaU3dnWjJWME9pQmtaV1pwYm1sMGFXOXVXMnRsZVYwZ2ZTazdYRzVjZEZ4MGZWeHVYSFI5WEc1OU95SXNJbDlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YnlBOUlHWjFibU4wYVc5dUtHOWlhaXdnY0hKdmNDa2dleUJ5WlhSMWNtNGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNW9ZWE5QZDI1UWNtOXdaWEowZVM1allXeHNLRzlpYWl3Z2NISnZjQ2s3SUgwaUxDSXZMeUJrWldacGJtVWdYMTlsYzAxdlpIVnNaU0J2YmlCbGVIQnZjblJ6WEc1ZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuSWdQU0JtZFc1amRHbHZiaWhsZUhCdmNuUnpLU0I3WEc1Y2RHbG1LSFI1Y0dWdlppQlRlVzFpYjJ3Z0lUMDlJQ2QxYm1SbFptbHVaV1FuSUNZbUlGTjViV0p2YkM1MGIxTjBjbWx1WjFSaFp5a2dlMXh1WEhSY2RFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hsZUhCdmNuUnpMQ0JUZVcxaWIyd3VkRzlUZEhKcGJtZFVZV2NzSUhzZ2RtRnNkV1U2SUNkTmIyUjFiR1VuSUgwcE8xeHVYSFI5WEc1Y2RFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hsZUhCdmNuUnpMQ0FuWDE5bGMwMXZaSFZzWlNjc0lIc2dkbUZzZFdVNklIUnlkV1VnZlNrN1hHNTlPeUlzSWlJc0lpOHZJSE4wWVhKMGRYQmNiaTh2SUV4dllXUWdaVzUwY25rZ2JXOWtkV3hsSUdGdVpDQnlaWFIxY200Z1pYaHdiM0owYzF4dVgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aGNJaTR2YzNKakwycHpMMkZ3Y0M1cWMxd2lLVHRjYmk4dklGUm9hWE1nWlc1MGNua2diVzlrZFd4bElHbHpJSEpsWm1WeVpXNWpaV1FnWW5rZ2IzUm9aWElnYlc5a2RXeGxjeUJ6YnlCcGRDQmpZVzRuZENCaVpTQnBibXhwYm1Wa1hHNWZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLRndpTGk5emNtTXZhbk12Ylc5a2RXeGxjeTlqYjNWeWMyVXRhbUYyWVMxemJHbGtaWEp6TG1welhDSXBPMXh1WDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHloY0lpNHZjM0pqTDJwekwyMXZaSFZzWlhNdlptRnhMV0ZqWTI5eVpHbHZiaTVxYzF3aUtUdGNibDlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvWENJdUwzTnlZeTlxY3k5dGIyUjFiR1Z6TDJadmNtMHRiR0ZpWld4ekxXRnVhVzFoZEdsdmJpNXFjMXdpS1R0Y2JsOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9YQ0l1TDNOeVl5OXFjeTl0YjJSMWJHVnpMMmhoYm1Sc1pTMXphV1JsWW1GeUxXNWhkaTVxYzF3aUtUdGNibDlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvWENJdUwzTnlZeTlxY3k5dGIyUjFiR1Z6TDIxaGFXeGphR2x0Y0Mxd2IzQjFjQzVxYzF3aUtUdGNibDlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvWENJdUwzTnlZeTlxY3k5dGIyUjFiR1Z6TDIxdlltbHNaUzF0Wlc1MUxtcHpYQ0lwTzF4dWRtRnlJRjlmZDJWaWNHRmphMTlsZUhCdmNuUnpYMThnUFNCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktGd2lMaTl6Y21NdmFuTXZiVzlrZFd4bGN5OTBhVzFsYkdsdVpTNXFjMXdpS1R0Y2JpSXNJaUpkTENKdVlXMWxjeUk2VzEwc0luTnZkWEpqWlZKdmIzUWlPaUlpZlE9PSJ9
