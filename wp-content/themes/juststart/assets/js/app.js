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
/* harmony import */ var _modules_timeline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timeline */ "./src/js/modules/timeline.js");
/* harmony import */ var _modules_timeline__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_timeline__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_course_java_sliders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/course-java-sliders */ "./src/js/modules/course-java-sliders.js");
/* harmony import */ var _modules_course_java_sliders__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_course_java_sliders__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_mailchimp_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mailchimp-popup */ "./src/js/modules/mailchimp-popup.js");
/* harmony import */ var _modules_mailchimp_popup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_mailchimp_popup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_handle_sidebar_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/handle-sidebar-nav */ "./src/js/modules/handle-sidebar-nav.js");
/* harmony import */ var _modules_handle_sidebar_nav__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_handle_sidebar_nav__WEBPACK_IMPORTED_MODULE_4__);






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
/******/ 	__webpack_require__("./src/js/modules/handle-sidebar-nav.js");
/******/ 	__webpack_require__("./src/js/modules/mailchimp-popup.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/modules/timeline.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpQztBQUNMO0FBQ1c7QUFDSjs7Ozs7Ozs7Ozs7QUNIbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7Ozs7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsR0FBRztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELEdBQUc7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLElBQUk7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLEtBQUssR0FBRyxRQUFRLFVBQVUsUUFBUTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7QUN6SUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQy9EQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSxlQUFlLDRCQUE0QjtXQUMzQyxlQUFlO1dBQ2YsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBLDhDQUE4Qzs7Ozs7V0NBOUM7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2p1c3RpZGVhLXRlbXBsYXRlLXRoZW1lLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9qdXN0aWRlYS10ZW1wbGF0ZS10aGVtZS8uL3NyYy9qcy9tb2R1bGVzL2NvdXJzZS1qYXZhLXNsaWRlcnMuanMiLCJ3ZWJwYWNrOi8vanVzdGlkZWEtdGVtcGxhdGUtdGhlbWUvLi9zcmMvanMvbW9kdWxlcy9mYXEtYWNjb3JkaW9uLmpzIiwid2VicGFjazovL2p1c3RpZGVhLXRlbXBsYXRlLXRoZW1lLy4vc3JjL2pzL21vZHVsZXMvaGFuZGxlLXNpZGViYXItbmF2LmpzIiwid2VicGFjazovL2p1c3RpZGVhLXRlbXBsYXRlLXRoZW1lLy4vc3JjL2pzL21vZHVsZXMvbWFpbGNoaW1wLXBvcHVwLmpzIiwid2VicGFjazovL2p1c3RpZGVhLXRlbXBsYXRlLXRoZW1lLy4vc3JjL2pzL21vZHVsZXMvdGltZWxpbmUuanMiLCJ3ZWJwYWNrOi8vanVzdGlkZWEtdGVtcGxhdGUtdGhlbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanVzdGlkZWEtdGVtcGxhdGUtdGhlbWUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vanVzdGlkZWEtdGVtcGxhdGUtdGhlbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2p1c3RpZGVhLXRlbXBsYXRlLXRoZW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanVzdGlkZWEtdGVtcGxhdGUtdGhlbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qdXN0aWRlYS10ZW1wbGF0ZS10aGVtZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2p1c3RpZGVhLXRlbXBsYXRlLXRoZW1lL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9qdXN0aWRlYS10ZW1wbGF0ZS10aGVtZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9tb2R1bGVzL2ZhcS1hY2NvcmRpb25cIjtcbmltcG9ydCBcIi4vbW9kdWxlcy90aW1lbGluZVwiO1xuaW1wb3J0IFwiLi9tb2R1bGVzL2NvdXJzZS1qYXZhLXNsaWRlcnNcIjtcbmltcG9ydCBcIi4vbW9kdWxlcy9tYWlsY2hpbXAtcG9wdXBcIjtcbmltcG9ydCBcIi4vbW9kdWxlcy9oYW5kbGUtc2lkZWJhci1uYXZcIjsiLCJjb25zdCBzd2lwZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXInKTtcclxuXHJcbmlmIChzd2lwZXJFbCkge1xyXG4gIGNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXInLCB7XHJcbiAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICBzbGlkZVBlclZpZXc6IDEsXHJcbiAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuICAgIH0sXHJcbiAgfSlcclxufVxyXG4iLCJjb25zdCBhbGxGYXFFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmFxLWVsZW1lbnRcIik7XHJcblxyXG5cclxuZnVuY3Rpb24gaGFuZGxlT3BlbihlKSB7XHJcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gZS5jdXJyZW50VGFyZ2V0O1xyXG4gIGNvbnN0IGNyb3NzU2lnbiA9IGUuY3VycmVudFRhcmdldC5xdWVyeVNlbGVjdG9yKCcuZmFxX19wbHVzLW1pbnVzLXRvZ2dsZScpO1xyXG4gIGNyb3NzU2lnbi5jbGFzc0xpc3QudG9nZ2xlKCdjb2xsYXBzZWQnKTtcclxuICBjdXJyZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XHJcbn1cclxuXHJcbmlmIChhbGxGYXFFbC5sZW5ndGggPiAwKSB7XHJcbiAgYWxsRmFxRWwuZm9yRWFjaChlbCA9PiB7XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU9wZW4pO1xyXG4gIH0pXHJcbn1cclxuIiwiY29uc3QgY291cnNlc1NpZGViYXJOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudS1qYXZhLWNvdXJzZS1zaWRlYmFyJyk7XHJcbmNvbnN0IHdvcmtXaXRoVXNTaWRlYmFyTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUtd29yay13aXRoLXVzLXNpZGViYXItbWVudScpO1xyXG5cclxuXHJcblxyXG5jb25zdCBzZXRGaXJzdEVsZW1lbnRBY3RpdmUgPSAgKHNpZGViYXIpID0+IHtcclxuICBpZihzaWRlYmFyKXtcclxuICAgIGNvbnN0IGZpcnN0RWwgPSBzaWRlYmFyLnF1ZXJ5U2VsZWN0b3IoJ2xpOmZpcnN0LW9mLXR5cGUnKTtcclxuICAgIGZpcnN0RWwgJiYgZmlyc3RFbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICB9XHJcbn07XHJcblxyXG5zZXRGaXJzdEVsZW1lbnRBY3RpdmUoY291cnNlc1NpZGViYXJOYXYpO1xyXG5zZXRGaXJzdEVsZW1lbnRBY3RpdmUod29ya1dpdGhVc1NpZGViYXJOYXYpO1xyXG5cclxuXHJcbmNvbnN0IHNjcmVlbklzV2lkZXJUaGFuWEwgPSB3aW5kb3cubWF0Y2hNZWRpYShgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweClgKS5tYXRjaGVzO1xyXG5cclxuXHJcbmNvbnN0IHJlbW92ZU5vdEFjdGl2ZUxpbmsgPSAoKSA9PiB7XHJcbiAgY29uc3QgbGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpLmFjdGl2ZScpO1xyXG5cclxuICBsaW5rICYmIGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUFjdGl2ZUxpbmsoZSl7XHJcbiAgY29uc3QgcGFyZW50ID0gZS50YXJnZXQucGFyZW50Tm9kZTtcclxuICByZW1vdmVOb3RBY3RpdmVMaW5rKCk7XHJcbiAgcGFyZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG59XHJcblxyXG5pZiAoc2NyZWVuSXNXaWRlclRoYW5YTCkge1xyXG4gIGNvbnN0IGNvdXJzZXNBbGxTaWRlYmFyTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZWJhci1uYXYgYScpO1xyXG5cclxuICBjb3Vyc2VzQWxsU2lkZWJhckxpbmtzLmZvckVhY2goIGxpbmsgPT4ge1xyXG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZUFjdGl2ZUxpbmspXHJcbiAgfSlcclxuXHJcbiAgY29uc3Qgd29ya1dpdGhVc0FsbFNpZGViYXJMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53b3JrX19zaWRlYmFyIGEnKTtcclxuXHJcbiAgd29ya1dpdGhVc0FsbFNpZGViYXJMaW5rcy5mb3JFYWNoKCBsaW5rID0+IHtcclxuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VBY3RpdmVMaW5rKVxyXG4gIH0pXHJcbn1cclxuXHJcbiIsImNvbnN0IGNvbnRhY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAnLm1lbnUtaXRlbS0yOTAyID4gYScpO1xyXG5jb25zdCBjb3Vyc2VzQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3Vyc2VfX2J0bicpO1xyXG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLW92ZXJsYXknKTtcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVBvcHVwVmlzaWJpbGl0eShlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwJyk7XHJcbiAgcG9wdXAuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbmVkJyk7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCduby1zY3JvbGwnKTtcclxufVxyXG5pZiAoY29udGFjdEJ0bnMubGVuZ3RoID4gMCkge1xyXG4gIGNvbnRhY3RCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVBvcHVwVmlzaWJpbGl0eSkpO1xyXG59XHJcblxyXG5pZiAoY291cnNlc0J0bnMubGVuZ3RoID4gMCkge1xyXG4gIGNvdXJzZXNCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVBvcHVwVmlzaWJpbGl0eSkpO1xyXG59XHJcblxyXG5cclxuaWYgKG92ZXJsYXkpIHtcclxuICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUG9wdXBWaXNpYmlsaXR5KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlSW5wdXRGb2N1cygpIHtcclxuICBjb25zdCBpZCA9IHRoaXMuaWQ7XHJcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsYWJlbFtmb3I9JyR7aWR9J2ApO1xyXG5cclxuICBpZiAoIWxhYmVsLmNsYXNzTGlzdC5jb250YWlucygnZm9jdXNlZCcpKSB7XHJcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdmb2N1c2VkJyk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVJbnB1dEJsdXIoKSB7XHJcbiAgY29uc3QgaWQgPSB0aGlzLmlkO1xyXG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGFiZWxbZm9yPScke2lkfSdgKTtcclxuXHJcbiAgaWYgKHRoaXMudmFsdWUgIT09ICcnKSB7XHJcbiAgICBpZiAoIWxhYmVsLmNsYXNzTGlzdC5jb250YWlucygnZm9jdXNlZCcpKSB7XHJcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2ZvY3VzZWQnKTtcclxuICAgIH1cclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICBpZiAobGFiZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdmb2N1c2VkJykpIHtcclxuICAgICAgbGFiZWwuY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXNlZCcpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IGFkZEZvY3VzTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IHRleHRJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXAgaW5wdXRbdHlwZT1cInRleHRcIl0nKTtcclxuICBjb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21jZS1FTUFJTCcpO1xyXG5cclxuICB0ZXh0SW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xyXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBoYW5kbGVJbnB1dEZvY3VzKTtcclxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBoYW5kbGVJbnB1dEJsdXIpO1xyXG4gIH0pXHJcblxyXG4gIGVtYWlsSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBoYW5kbGVJbnB1dEZvY3VzKTtcclxuICBlbWFpbElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBoYW5kbGVJbnB1dEJsdXIpO1xyXG59KCk7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCB0b2dnbGVQb3B1cCA9ICgpID0+IHtcclxuICBpZihwb3B1cCl7XHJcbiAgICBwb3B1cC5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuZWQnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnbm8tc2Nyb2xsJyk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBwYXJzZUNvb2tpZSA9IHN0ciA9PlxyXG4gIHN0clxyXG4gICAgLnNwbGl0KCc7JylcclxuICAgIC5tYXAodiA9PiB2LnNwbGl0KCc9JykpXHJcbiAgICAucmVkdWNlKChhY2MsIHYpID0+IHtcclxuICAgICAgaWYgKHZbMF0gJiYgdlsxXSkge1xyXG4gICAgICAgIGFjY1tkZWNvZGVVUklDb21wb25lbnQodlswXS50cmltKCkpXSA9IGRlY29kZVVSSUNvbXBvbmVudCh2WzFdLnRyaW0oKSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGFjYztcclxuICAgIH0sIHt9KTtcclxuXHJcbmNvbnN0IGdldENvb2tpZSA9IG5hbWUgPT4ge1xyXG4gIGxldCBjb29raWVzID0gZG9jdW1lbnQuY29va2llO1xyXG4gIGNvbnN0IHBhcnNlZENvb2tpZXMgPSBwYXJzZUNvb2tpZShjb29raWVzKTtcclxuXHJcbiAgcmV0dXJuIHBhcnNlZENvb2tpZXNbbmFtZV07XHJcbn1cclxuXHJcbmNvbnN0IG5ld3NsZXR0ZXJDb29raWVFeGlzdCA9IGdldENvb2tpZSgnbmV3c2xldHRlclBvcHVwQ29va2llJyk7XHJcblxyXG5jb25zdCBjaGVja0Nvb2tpZUV4cGlyYXRpb24gPSAoKSA9PiB7XHJcbiAgY29uc3Qgbm93VGltZXN0YW1wID0gRGF0ZS5ub3coKTtcclxuICBjb25zdCBvZmZzZXRUaW1lc3RhbXAgPSBuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMDtcclxuICAvLyBnZXRUaW1lWm9uZU9mZnNldCByZXR1cm4gb2Zmc2V0IGluIG1pbnV0ZXNcclxuICAvLyBtdWx0aXBsZSBpdCBieSA2MDAwMCBnaXZlIHVzIG1pbGlzZWNvbmRzXHJcbiAgaWYgKG5ld3NsZXR0ZXJDb29raWVFeGlzdCkge1xyXG4gICAgY29va2llU3RvcmUuZ2V0KCduZXdzbGV0dGVyUG9wdXBDb29raWUnKVxyXG4gICAgICAudGhlbihjb29raWUgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvb2tpZUFscmVhZHlFeHBpcmVkID0gKG5vd1RpbWVzdGFtcCAtIGNvb2tpZS5leHBpcmVzIC0gb2Zmc2V0VGltZXN0YW1wKSA+IDA7XHJcbiAgICAgICAgaWYgKGNvb2tpZUFscmVhZHlFeHBpcmVkKSB7XHJcbiAgICAgICAgICB0b2dnbGVQb3B1cCgpO1xyXG4gICAgICAgICAgY3JlYXRlQ29va2llKCduZXdzbGV0dGVyUG9wdXBDb29raWUnLCAndmFsdWUnLCBnZXREYXRlQWZ0ZXI3RGF5cygpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgY3JlYXRlQ29va2llID0gKG5hbWUsIHZhbHVlLCBleHBpcmVzKSA9PiB7XHJcbiAgZG9jdW1lbnQuY29va2llID0gYCR7bmFtZX09JHt2YWx1ZX07IGV4cGlyZXM9JHtleHBpcmVzfWBcclxufVxyXG5cclxuY29uc3QgZ2V0RGF0ZUFmdGVyN0RheXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgdG9kYXlUaW1lc3RhbXAgPSBEYXRlLm5vdygpO1xyXG4gIGNvbnN0IHRvZGF5RGF0ZSA9IG5ldyBEYXRlKHRvZGF5VGltZXN0YW1wKS50b1N0cmluZygpO1xyXG4gIC8vIDcgZGF5cyA9IDYwNCA4MDAgMDAwIG1zXHJcbiAgY29uc3QgZXhwaXJhdGlvblRpbWVzdGFtcCA9IHRvZGF5VGltZXN0YW1wICsgNjA0ODAwMDAwO1xyXG4gIC8vIDEgbWludXRlID0gNjAwMDAgbXNcclxuICAvLyBjb25zdCBleHBpcmF0aW9uVGltZXN0YW1wID0gdG9kYXlUaW1lc3RhbXAgKyA2MDAwMDtcclxuICBjb25zdCBleHBpcmF0aW9uZERhdGUgPSBuZXcgRGF0ZShleHBpcmF0aW9uVGltZXN0YW1wKS50b1N0cmluZygpO1xyXG5cclxuICByZXR1cm4gZXhwaXJhdGlvbmREYXRlO1xyXG59XHJcblxyXG5jb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cCcpO1xyXG5cclxuXHJcbmNvbnN0IGhhbmRsZUluaXRpYWxQb3B1cFZpc2liaWxpdHkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKG5ld3NsZXR0ZXJDb29raWVFeGlzdCAmJiBwb3B1cCkge1xyXG4gICAgY2hlY2tDb29raWVFeHBpcmF0aW9uKCk7XHJcbiAgfVxyXG4gIGlmICghbmV3c2xldHRlckNvb2tpZUV4aXN0ICYmIHBvcHVwKSB7XHJcbiAgICB0b2dnbGVQb3B1cCgpO1xyXG4gICAgY3JlYXRlQ29va2llKCduZXdzbGV0dGVyUG9wdXBDb29raWUnLCAndmFsdWUnLCBnZXREYXRlQWZ0ZXI3RGF5cygpKTtcclxuICB9O1xyXG59KCk7IiwiY29uc3QgdGltZWxpbmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZWxpbmVfX2J0bicpO1xyXG5jb25zdCB0aW1lbGluZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZWxpbmUtaXRlbXMnKTtcclxubGV0IGNvbGxhcHNlZEZsYWcgPSBmYWxzZTtcclxuXHJcbmNvbnN0IHNob3dIaWRkZW5JdGVtcyA9IGl0ZW1zID0+IGl0ZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpKTtcclxuXHJcbmNvbnN0IGhpZGVFbGVtZW50cyA9ICgpID0+IHtcclxuICBjb25zdCBhbGxFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aW1lbGluZS1pdGVtJyk7XHJcblxyXG4gIGFsbEVsZW1lbnRzLmZvckVhY2goIChlbCwgaSkgPT4ge1xyXG4gICAgaWYoaT49NCAmJiAhZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSl7XHJcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbmNvbnN0IGNoYW5nZUJ0blRleHQgPSAoKSA9PiB7XHJcbiAgaWYgKHRpbWVsaW5lQnRuLnRleHRDb250ZW50ID09IFwiUm96d2nFhFwiKSB7XHJcbiAgICB0aW1lbGluZUJ0bi50ZXh0Q29udGVudCA9IFwiWndpxYRcIlxyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIHRpbWVsaW5lQnRuLnRleHRDb250ZW50ID0gXCJSb3p3acWEXCI7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBjb25zdCBzY3JvbGxUb0xpc3QgPSAoKSA9PiB7XHJcbi8vICAgaWYoY29sbGFwc2VkRmxhZyl7XHJcbi8vICAgICB0aW1lbGluZUxpc3Quc2Nyb2xsSW50b1ZpZXcoXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIiwgXHJcbi8vICAgICAgICAgYmxvY2s6ICdlbmQnXHJcbi8vICAgICAgIH0pXHJcbi8vICAgfVxyXG4vLyAgIGlmKCFjb2xsYXBzZWRGbGFnKXtcclxuLy8gICAgIHRpbWVsaW5lTGlzdC5zY3JvbGxJbnRvVmlldyhcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLCBcclxuLy8gICAgICAgICBibG9jazogJ2VuZCdcclxuLy8gICAgICAgfSlcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbmNvbnN0IGNoYW5nZVRpbWVMaW5lSGVpZ2h0ID0gKCkgPT4gdGltZWxpbmVMaXN0LmNsYXNzTGlzdC50b2dnbGUoXCJjb2xsYXBzZWRcIik7XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVUaW1lbGluZUNvbGFwc2UoKSB7XHJcbiAgXHJcbiAgY29uc3QgaGlkZGVuSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGltZWxpbmUtaXRlbS5oaWRkZW4nKTtcclxuXHJcbiAgaWYoY29sbGFwc2VkRmxhZyl7XHJcbiAgICBoaWRlRWxlbWVudHMoKTtcclxuICB9XHJcbiAgaWYoIWNvbGxhcHNlZEZsYWcpe1xyXG4gICAgc2hvd0hpZGRlbkl0ZW1zKGhpZGRlbkl0ZW1zKTtcclxuICB9XHJcbiAgY2hhbmdlVGltZUxpbmVIZWlnaHQoKTtcclxuICBjaGFuZ2VCdG5UZXh0KCk7XHJcbiAgLy8gc2Nyb2xsVG9MaXN0KCk7XHJcblxyXG4gIGNvbGxhcHNlZEZsYWcgPSAhY29sbGFwc2VkRmxhZztcclxufVxyXG5cclxuaWYgKHRpbWVsaW5lQnRuKSB7XHJcbiAgdGltZWxpbmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVUaW1lbGluZUNvbGFwc2UpXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IixudWxsLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9qcy9hcHAuanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2pzL21vZHVsZXMvY291cnNlLWphdmEtc2xpZGVycy5qc1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9qcy9tb2R1bGVzL2ZhcS1hY2NvcmRpb24uanNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvanMvbW9kdWxlcy9oYW5kbGUtc2lkZWJhci1uYXYuanNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvanMvbW9kdWxlcy9tYWlsY2hpbXAtcG9wdXAuanNcIik7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9qcy9tb2R1bGVzL3RpbWVsaW5lLmpzXCIpO1xuIixudWxsXSwibmFtZXMiOltdLCJwcmVFeGlzdGluZ0NvbW1lbnQiOiIvLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJXRnBiaTVxY3lJc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPenM3T3pzN096czdPenM3UVVGQmFVTTdRVUZEVER0QlFVTlhPMEZCUTBvN096czdPenM3T3pzN08wRkRTRzVETzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVEN4SFFVRkhPMEZCUTBnN096czdPenM3T3pzN08wRkRXRUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHM3T3pzN096czdPenM3UVVObVFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEdEJRVU5CT3pzN096czdPenM3T3p0QlF6VkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2NVUkJRWEZFTEVkQlFVYzdRVUZEZUVRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMSEZFUVVGeFJDeEhRVUZITzBGQlEzaEVPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEdEJRVU5CTzBGQlEwRTdRVUZEUVN4RFFVRkRPMEZCUTBRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeGhRVUZoTzBGQlEySTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUzBGQlN5eEpRVUZKTzBGQlExUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFOUJRVTg3UVVGRFVEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMSFZDUVVGMVFpeExRVUZMTEVkQlFVY3NVVUZCVVN4VlFVRlZMRkZCUVZFN1FVRkRla1E3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hEUVVGRE96czdPenM3T3pzN08wRkRla2xFTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hWUVVGVk8wRkJRMVk3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1ZVRkJWVHRCUVVOV08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenM3T3pzN1ZVTXZSRUU3VlVGRFFUczdWVUZGUVR0VlFVTkJPMVZCUTBFN1ZVRkRRVHRWUVVOQk8xVkJRMEU3VlVGRFFUdFZRVU5CTzFWQlEwRTdWVUZEUVR0VlFVTkJPMVZCUTBFN1ZVRkRRVHM3VlVGRlFUdFZRVU5CT3p0VlFVVkJPMVZCUTBFN1ZVRkRRVHM3T3pzN1YwTjBRa0U3VjBGRFFUdFhRVU5CTzFkQlEwRXNaVUZCWlN3MFFrRkJORUk3VjBGRE0wTXNaVUZCWlR0WFFVTm1MR2xEUVVGcFF5eFhRVUZYTzFkQlF6VkRPMWRCUTBFN096czdPMWREVUVFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFTeDVRMEZCZVVNc2QwTkJRWGRETzFkQlEycEdPMWRCUTBFN1YwRkRRVHM3T3pzN1YwTlFRU3c0UTBGQk9FTTdPenM3TzFkRFFUbERPMWRCUTBFN1YwRkRRVHRYUVVOQkxIVkVRVUYxUkN4cFFrRkJhVUk3VjBGRGVFVTdWMEZEUVN4blJFRkJaMFFzWVVGQllUdFhRVU0zUkRzN096czdWVVZPUVR0VlFVTkJPMVZCUTBFN1ZVRkRRVHRWUVVOQk8xVkJRMEU3VlVGRFFUdFZRVU5CTzFWQlEwRWlMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk5cWRYTjBhV1JsWVMxMFpXMXdiR0YwWlMxMGFHVnRaUzh1TDNOeVl5OXFjeTloY0hBdWFuTWlMQ0ozWldKd1lXTnJPaTh2YW5WemRHbGtaV0V0ZEdWdGNHeGhkR1V0ZEdobGJXVXZMaTl6Y21NdmFuTXZiVzlrZFd4bGN5OWpiM1Z5YzJVdGFtRjJZUzF6Ykdsa1pYSnpMbXB6SWl3aWQyVmljR0ZqYXpvdkwycDFjM1JwWkdWaExYUmxiWEJzWVhSbExYUm9aVzFsTHk0dmMzSmpMMnB6TDIxdlpIVnNaWE12Wm1GeExXRmpZMjl5WkdsdmJpNXFjeUlzSW5kbFluQmhZMnM2THk5cWRYTjBhV1JsWVMxMFpXMXdiR0YwWlMxMGFHVnRaUzh1TDNOeVl5OXFjeTl0YjJSMWJHVnpMMmhoYm1Sc1pTMXphV1JsWW1GeUxXNWhkaTVxY3lJc0luZGxZbkJoWTJzNkx5OXFkWE4wYVdSbFlTMTBaVzF3YkdGMFpTMTBhR1Z0WlM4dUwzTnlZeTlxY3k5dGIyUjFiR1Z6TDIxaGFXeGphR2x0Y0Mxd2IzQjFjQzVxY3lJc0luZGxZbkJoWTJzNkx5OXFkWE4wYVdSbFlTMTBaVzF3YkdGMFpTMTBhR1Z0WlM4dUwzTnlZeTlxY3k5dGIyUjFiR1Z6TDNScGJXVnNhVzVsTG1weklpd2lkMlZpY0dGamF6b3ZMMnAxYzNScFpHVmhMWFJsYlhCc1lYUmxMWFJvWlcxbEwzZGxZbkJoWTJzdlltOXZkSE4wY21Gd0lpd2lkMlZpY0dGamF6b3ZMMnAxYzNScFpHVmhMWFJsYlhCc1lYUmxMWFJvWlcxbEwzZGxZbkJoWTJzdmNuVnVkR2x0WlM5amIyMXdZWFFnWjJWMElHUmxabUYxYkhRZ1pYaHdiM0owSWl3aWQyVmljR0ZqYXpvdkwycDFjM1JwWkdWaExYUmxiWEJzWVhSbExYUm9aVzFsTDNkbFluQmhZMnN2Y25WdWRHbHRaUzlrWldacGJtVWdjSEp2Y0dWeWRIa2daMlYwZEdWeWN5SXNJbmRsWW5CaFkyczZMeTlxZFhOMGFXUmxZUzEwWlcxd2JHRjBaUzEwYUdWdFpTOTNaV0p3WVdOckwzSjFiblJwYldVdmFHRnpUM2R1VUhKdmNHVnlkSGtnYzJodmNuUm9ZVzVrSWl3aWQyVmljR0ZqYXpvdkwycDFjM1JwWkdWaExYUmxiWEJzWVhSbExYUm9aVzFsTDNkbFluQmhZMnN2Y25WdWRHbHRaUzl0WVd0bElHNWhiV1Z6Y0dGalpTQnZZbXBsWTNRaUxDSjNaV0p3WVdOck9pOHZhblZ6ZEdsa1pXRXRkR1Z0Y0d4aGRHVXRkR2hsYldVdmQyVmljR0ZqYXk5aVpXWnZjbVV0YzNSaGNuUjFjQ0lzSW5kbFluQmhZMnM2THk5cWRYTjBhV1JsWVMxMFpXMXdiR0YwWlMxMGFHVnRaUzkzWldKd1lXTnJMM04wWVhKMGRYQWlMQ0ozWldKd1lXTnJPaTh2YW5WemRHbGtaV0V0ZEdWdGNHeGhkR1V0ZEdobGJXVXZkMlZpY0dGamF5OWhablJsY2kxemRHRnlkSFZ3SWwwc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCY0lpNHZiVzlrZFd4bGN5OW1ZWEV0WVdOamIzSmthVzl1WENJN1hHNXBiWEJ2Y25RZ1hDSXVMMjF2WkhWc1pYTXZkR2x0Wld4cGJtVmNJanRjYm1sdGNHOXlkQ0JjSWk0dmJXOWtkV3hsY3k5amIzVnljMlV0YW1GMllTMXpiR2xrWlhKelhDSTdYRzVwYlhCdmNuUWdYQ0l1TDIxdlpIVnNaWE12YldGcGJHTm9hVzF3TFhCdmNIVndYQ0k3WEc1cGJYQnZjblFnWENJdUwyMXZaSFZzWlhNdmFHRnVaR3hsTFhOcFpHVmlZWEl0Ym1GMlhDSTdJaXdpWTI5dWMzUWdjM2RwY0dWeVJXd2dQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDY3VjM2RwY0dWeUp5azdYSEpjYmx4eVhHNXBaaUFvYzNkcGNHVnlSV3dwSUh0Y2NseHVJQ0JqYjI1emRDQnpkMmx3WlhJZ1BTQnVaWGNnVTNkcGNHVnlLQ2N1YzNkcGNHVnlKeXdnZTF4eVhHNGdJQ0FnWkdseVpXTjBhVzl1T2lBbmFHOXlhWHB2Ym5SaGJDY3NYSEpjYmlBZ0lDQnNiMjl3T2lCMGNuVmxMRnh5WEc0Z0lDQWdjMnhwWkdWUVpYSldhV1YzT2lBeExGeHlYRzRnSUNBZ2NHRm5hVzVoZEdsdmJqb2dlMXh5WEc0Z0lDQWdJQ0JsYkRvZ0p5NXpkMmx3WlhJdGNHRm5hVzVoZEdsdmJpY3NYSEpjYmlBZ0lDQjlMRnh5WEc0Z0lIMHBYSEpjYm4xY2NseHVJaXdpWTI5dWMzUWdZV3hzUm1GeFJXd2dQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eVFXeHNLRndpTG1aaGNTMWxiR1Z0Wlc1MFhDSXBPMXh5WEc1Y2NseHVYSEpjYm1aMWJtTjBhVzl1SUdoaGJtUnNaVTl3Wlc0b1pTa2dlMXh5WEc0Z0lHVXVjM1J2Y0ZCeWIzQmhaMkYwYVc5dUtDbGNjbHh1SUNCamIyNXpkQ0JqZFhKeVpXNTBSV3hsYldWdWRDQTlJR1V1WTNWeWNtVnVkRlJoY21kbGREdGNjbHh1SUNCamIyNXpkQ0JqY205emMxTnBaMjRnUFNCbExtTjFjbkpsYm5SVVlYSm5aWFF1Y1hWbGNubFRaV3hsWTNSdmNpZ25MbVpoY1Y5ZmNHeDFjeTF0YVc1MWN5MTBiMmRuYkdVbktUdGNjbHh1SUNCamNtOXpjMU5wWjI0dVkyeGhjM05NYVhOMExuUnZaMmRzWlNnblkyOXNiR0Z3YzJWa0p5azdYSEpjYmlBZ1kzVnljbVZ1ZEVWc1pXMWxiblF1WTJ4aGMzTk1hWE4wTG5SdloyZHNaU2duYjNCbGJpY3BPMXh5WEc1OVhISmNibHh5WEc1cFppQW9ZV3hzUm1GeFJXd3ViR1Z1WjNSb0lENGdNQ2tnZTF4eVhHNGdJR0ZzYkVaaGNVVnNMbVp2Y2tWaFkyZ29aV3dnUFQ0Z2UxeHlYRzRnSUNBZ1pXd3VZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25ZMnhwWTJzbkxDQm9ZVzVrYkdWUGNHVnVLVHRjY2x4dUlDQjlLVnh5WEc1OVhISmNiaUlzSW1OdmJuTjBJR052ZFhKelpYTlRhV1JsWW1GeVRtRjJJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25JMjFsYm5VdGFtRjJZUzFqYjNWeWMyVXRjMmxrWldKaGNpY3BPMXh5WEc1amIyNXpkQ0IzYjNKclYybDBhRlZ6VTJsa1pXSmhjazVoZGlBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvSnlOdFpXNTFMWGR2Y21zdGQybDBhQzExY3kxemFXUmxZbUZ5TFcxbGJuVW5LVHRjY2x4dVhISmNibHh5WEc1Y2NseHVZMjl1YzNRZ2MyVjBSbWx5YzNSRmJHVnRaVzUwUVdOMGFYWmxJRDBnSUNoemFXUmxZbUZ5S1NBOVBpQjdYSEpjYmlBZ2FXWW9jMmxrWldKaGNpbDdYSEpjYmlBZ0lDQmpiMjV6ZENCbWFYSnpkRVZzSUQwZ2MybGtaV0poY2k1eGRXVnllVk5sYkdWamRHOXlLQ2RzYVRwbWFYSnpkQzF2WmkxMGVYQmxKeWs3WEhKY2JpQWdJQ0JtYVhKemRFVnNJQ1ltSUdacGNuTjBSV3d1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25ZV04wYVhabEp5azdYSEpjYmlBZ2ZWeHlYRzU5TzF4eVhHNWNjbHh1YzJWMFJtbHljM1JGYkdWdFpXNTBRV04wYVhabEtHTnZkWEp6WlhOVGFXUmxZbUZ5VG1GMktUdGNjbHh1YzJWMFJtbHljM1JGYkdWdFpXNTBRV04wYVhabEtIZHZjbXRYYVhSb1ZYTlRhV1JsWW1GeVRtRjJLVHRjY2x4dVhISmNibHh5WEc1amIyNXpkQ0J6WTNKbFpXNUpjMWRwWkdWeVZHaGhibGhNSUQwZ2QybHVaRzkzTG0xaGRHTm9UV1ZrYVdFb1lHOXViSGtnYzJOeVpXVnVJR0Z1WkNBb2JXbHVMWGRwWkhSb09pQXhNakF3Y0hncFlDa3ViV0YwWTJobGN6dGNjbHh1WEhKY2JseHlYRzVqYjI1emRDQnlaVzF2ZG1WT2IzUkJZM1JwZG1WTWFXNXJJRDBnS0NrZ1BUNGdlMXh5WEc0Z0lHTnZibk4wSUd4cGJtc2dQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDZHNhUzVoWTNScGRtVW5LVHRjY2x4dVhISmNiaUFnYkdsdWF5QW1KaUJzYVc1ckxtTnNZWE56VEdsemRDNXlaVzF2ZG1Vb0oyRmpkR2wyWlNjcE8xeHlYRzU5WEhKY2JseHlYRzVtZFc1amRHbHZiaUJqYUdGdVoyVkJZM1JwZG1WTWFXNXJLR1VwZTF4eVhHNGdJR052Ym5OMElIQmhjbVZ1ZENBOUlHVXVkR0Z5WjJWMExuQmhjbVZ1ZEU1dlpHVTdYSEpjYmlBZ2NtVnRiM1psVG05MFFXTjBhWFpsVEdsdWF5Z3BPMXh5WEc0Z0lIQmhjbVZ1ZEM1amJHRnpjMHhwYzNRdVlXUmtLQ2RoWTNScGRtVW5LVHRjY2x4dWZWeHlYRzVjY2x4dWFXWWdLSE5qY21WbGJrbHpWMmxrWlhKVWFHRnVXRXdwSUh0Y2NseHVJQ0JqYjI1emRDQmpiM1Z5YzJWelFXeHNVMmxrWldKaGNreHBibXR6SUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZja0ZzYkNnbkxuTnBaR1ZpWVhJdGJtRjJJR0VuS1R0Y2NseHVYSEpjYmlBZ1kyOTFjbk5sYzBGc2JGTnBaR1ZpWVhKTWFXNXJjeTVtYjNKRllXTm9LQ0JzYVc1cklEMCtJSHRjY2x4dUlDQWdJR3hwYm1zdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblkyeHBZMnNuTENCamFHRnVaMlZCWTNScGRtVk1hVzVyS1Z4eVhHNGdJSDBwWEhKY2JseHlYRzRnSUdOdmJuTjBJSGR2Y210WGFYUm9WWE5CYkd4VGFXUmxZbUZ5VEdsdWEzTWdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eVFXeHNLQ2N1ZDI5eWExOWZjMmxrWldKaGNpQmhKeWs3WEhKY2JseHlYRzRnSUhkdmNtdFhhWFJvVlhOQmJHeFRhV1JsWW1GeVRHbHVhM011Wm05eVJXRmphQ2dnYkdsdWF5QTlQaUI3WEhKY2JpQWdJQ0JzYVc1ckxtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0oyTnNhV05ySnl3Z1kyaGhibWRsUVdOMGFYWmxUR2x1YXlsY2NseHVJQ0I5S1Z4eVhHNTlYSEpjYmx4eVhHNGlMQ0pqYjI1emRDQmpiMjUwWVdOMFFuUnVjeUE5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSkJiR3dvWEhKY2JpQWdKeTV0Wlc1MUxXbDBaVzB0TWprd01pQStJR0VuS1R0Y2NseHVZMjl1YzNRZ1kyOTFjbk5sYzBKMGJuTWdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eVFXeHNLQ2N1WTI5MWNuTmxYMTlpZEc0bktUdGNjbHh1WTI5dWMzUWdiM1psY214aGVTQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5NXdiM0IxY0MxdmRtVnliR0Y1SnlrN1hISmNibHh5WEc1bWRXNWpkR2x2YmlCb1lXNWtiR1ZRYjNCMWNGWnBjMmxpYVd4cGRIa29aU2tnZTF4eVhHNGdJR1V1Y0hKbGRtVnVkRVJsWm1GMWJIUW9LVHRjY2x4dUlDQmpiMjV6ZENCd2IzQjFjQ0E5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9KeTV3YjNCMWNDY3BPMXh5WEc0Z0lIQnZjSFZ3TG1Oc1lYTnpUR2x6ZEM1MGIyZG5iR1VvSjI5d1pXNWxaQ2NwTzF4eVhHNGdJR1J2WTNWdFpXNTBMbUp2WkhrdVkyeGhjM05NYVhOMExuUnZaMmRzWlNnbmJtOHRjMk55YjJ4c0p5azdYSEpjYm4xY2NseHVhV1lnS0dOdmJuUmhZM1JDZEc1ekxteGxibWQwYUNBK0lEQXBJSHRjY2x4dUlDQmpiMjUwWVdOMFFuUnVjeTVtYjNKRllXTm9LR0owYmlBOVBpQmlkRzR1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduWTJ4cFkyc25MQ0JvWVc1a2JHVlFiM0IxY0ZacGMybGlhV3hwZEhrcEtUdGNjbHh1ZlZ4eVhHNWNjbHh1YVdZZ0tHTnZkWEp6WlhOQ2RHNXpMbXhsYm1kMGFDQStJREFwSUh0Y2NseHVJQ0JqYjNWeWMyVnpRblJ1Y3k1bWIzSkZZV05vS0dKMGJpQTlQaUJpZEc0dVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblkyeHBZMnNuTENCb1lXNWtiR1ZRYjNCMWNGWnBjMmxpYVd4cGRIa3BLVHRjY2x4dWZWeHlYRzVjY2x4dVhISmNibWxtSUNodmRtVnliR0Y1S1NCN1hISmNiaUFnYjNabGNteGhlUzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RqYkdsamF5Y3NJR2hoYm1Sc1pWQnZjSFZ3Vm1semFXSnBiR2wwZVNrN1hISmNibjFjY2x4dVhISmNibVoxYm1OMGFXOXVJR2hoYm1Sc1pVbHVjSFYwUm05amRYTW9LU0I3WEhKY2JpQWdZMjl1YzNRZ2FXUWdQU0IwYUdsekxtbGtPMXh5WEc0Z0lHTnZibk4wSUd4aFltVnNJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpaGdiR0ZpWld4YlptOXlQU2NrZTJsa2ZTZGdLVHRjY2x4dVhISmNiaUFnYVdZZ0tDRnNZV0psYkM1amJHRnpjMHhwYzNRdVkyOXVkR0ZwYm5Nb0oyWnZZM1Z6WldRbktTa2dlMXh5WEc0Z0lDQWdiR0ZpWld3dVkyeGhjM05NYVhOMExtRmtaQ2duWm05amRYTmxaQ2NwTzF4eVhHNGdJSDFjY2x4dWZWeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2FHRnVaR3hsU1c1d2RYUkNiSFZ5S0NrZ2UxeHlYRzRnSUdOdmJuTjBJR2xrSUQwZ2RHaHBjeTVwWkR0Y2NseHVJQ0JqYjI1emRDQnNZV0psYkNBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvWUd4aFltVnNXMlp2Y2owbkpIdHBaSDBuWUNrN1hISmNibHh5WEc0Z0lHbG1JQ2gwYUdsekxuWmhiSFZsSUNFOVBTQW5KeWtnZTF4eVhHNGdJQ0FnYVdZZ0tDRnNZV0psYkM1amJHRnpjMHhwYzNRdVkyOXVkR0ZwYm5Nb0oyWnZZM1Z6WldRbktTa2dlMXh5WEc0Z0lDQWdJQ0JzWVdKbGJDNWpiR0Z6YzB4cGMzUXVZV1JrS0NkbWIyTjFjMlZrSnlrN1hISmNiaUFnSUNCOVhISmNiaUFnZlZ4eVhHNGdJR1ZzYzJVZ2UxeHlYRzRnSUNBZ2FXWWdLR3hoWW1Wc0xtTnNZWE56VEdsemRDNWpiMjUwWVdsdWN5Z25abTlqZFhObFpDY3BLU0I3WEhKY2JpQWdJQ0FnSUd4aFltVnNMbU5zWVhOelRHbHpkQzV5WlcxdmRtVW9KMlp2WTNWelpXUW5LVHRjY2x4dUlDQWdJSDFjY2x4dUlDQjlYSEpjYm4xY2NseHVYSEpjYmx4eVhHNWpiMjV6ZENCaFpHUkdiMk4xYzB4cGMzUmxibVZ5Y3lBOUlHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dUlDQmpiMjV6ZENCMFpYaDBTVzV3ZFhSeklEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDZ25MbkJ2Y0hWd0lHbHVjSFYwVzNSNWNHVTlYQ0owWlhoMFhDSmRKeWs3WEhKY2JpQWdZMjl1YzNRZ1pXMWhhV3hKYm5CMWRDQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5TnRZMlV0UlUxQlNVd25LVHRjY2x4dVhISmNiaUFnZEdWNGRFbHVjSFYwY3k1bWIzSkZZV05vS0dsdWNIVjBJRDArSUh0Y2NseHVJQ0FnSUdsdWNIVjBMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMlp2WTNWekp5d2dhR0Z1Wkd4bFNXNXdkWFJHYjJOMWN5azdYSEpjYmlBZ0lDQnBibkIxZEM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkaWJIVnlKeXdnYUdGdVpHeGxTVzV3ZFhSQ2JIVnlLVHRjY2x4dUlDQjlLVnh5WEc1Y2NseHVJQ0JsYldGcGJFbHVjSFYwTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJadlkzVnpKeXdnYUdGdVpHeGxTVzV3ZFhSR2IyTjFjeWs3WEhKY2JpQWdaVzFoYVd4SmJuQjFkQzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RpYkhWeUp5d2dhR0Z1Wkd4bFNXNXdkWFJDYkhWeUtUdGNjbHh1ZlNncE8xeHlYRzVjY2x4dVhISmNibHh5WEc1Y2NseHVZMjl1YzNRZ2RHOW5aMnhsVUc5d2RYQWdQU0FvS1NBOVBpQjdYSEpjYmlBZ2FXWW9jRzl3ZFhBcGUxeHlYRzRnSUNBZ2NHOXdkWEF1WTJ4aGMzTk1hWE4wTG5SdloyZHNaU2duYjNCbGJtVmtKeWs3WEhKY2JpQWdJQ0JrYjJOMWJXVnVkQzVpYjJSNUxtTnNZWE56VEdsemRDNTBiMmRuYkdVb0oyNXZMWE5qY205c2JDY3BPMXh5WEc0Z0lIMWNjbHh1ZlZ4eVhHNWNjbHh1WTI5dWMzUWdjR0Z5YzJWRGIyOXJhV1VnUFNCemRISWdQVDVjY2x4dUlDQnpkSEpjY2x4dUlDQWdJQzV6Y0d4cGRDZ25PeWNwWEhKY2JpQWdJQ0F1YldGd0tIWWdQVDRnZGk1emNHeHBkQ2duUFNjcEtWeHlYRzRnSUNBZ0xuSmxaSFZqWlNnb1lXTmpMQ0IyS1NBOVBpQjdYSEpjYmlBZ0lDQWdJR2xtSUNoMld6QmRJQ1ltSUhaYk1WMHBJSHRjY2x4dUlDQWdJQ0FnSUNCaFkyTmJaR1ZqYjJSbFZWSkpRMjl0Y0c5dVpXNTBLSFpiTUYwdWRISnBiU2dwS1YwZ1BTQmtaV052WkdWVlVrbERiMjF3YjI1bGJuUW9kbHN4WFM1MGNtbHRLQ2twTzF4eVhHNGdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lISmxkSFZ5YmlCaFkyTTdYSEpjYmlBZ0lDQjlMQ0I3ZlNrN1hISmNibHh5WEc1amIyNXpkQ0JuWlhSRGIyOXJhV1VnUFNCdVlXMWxJRDArSUh0Y2NseHVJQ0JzWlhRZ1kyOXZhMmxsY3lBOUlHUnZZM1Z0Wlc1MExtTnZiMnRwWlR0Y2NseHVJQ0JqYjI1emRDQndZWEp6WldSRGIyOXJhV1Z6SUQwZ2NHRnljMlZEYjI5cmFXVW9ZMjl2YTJsbGN5azdYSEpjYmx4eVhHNGdJSEpsZEhWeWJpQndZWEp6WldSRGIyOXJhV1Z6VzI1aGJXVmRPMXh5WEc1OVhISmNibHh5WEc1amIyNXpkQ0J1WlhkemJHVjBkR1Z5UTI5dmEybGxSWGhwYzNRZ1BTQm5aWFJEYjI5cmFXVW9KMjVsZDNOc1pYUjBaWEpRYjNCMWNFTnZiMnRwWlNjcE8xeHlYRzVjY2x4dVkyOXVjM1FnWTJobFkydERiMjlyYVdWRmVIQnBjbUYwYVc5dUlEMGdLQ2tnUFQ0Z2UxeHlYRzRnSUdOdmJuTjBJRzV2ZDFScGJXVnpkR0Z0Y0NBOUlFUmhkR1V1Ym05M0tDazdYSEpjYmlBZ1kyOXVjM1FnYjJabWMyVjBWR2x0WlhOMFlXMXdJRDBnYm1WM0lFUmhkR1VvS1M1blpYUlVhVzFsZW05dVpVOW1abk5sZENncElDb2dOakF3TURBN1hISmNiaUFnTHk4Z1oyVjBWR2x0WlZwdmJtVlBabVp6WlhRZ2NtVjBkWEp1SUc5bVpuTmxkQ0JwYmlCdGFXNTFkR1Z6WEhKY2JpQWdMeThnYlhWc2RHbHdiR1VnYVhRZ1lua2dOakF3TURBZ1oybDJaU0IxY3lCdGFXeHBjMlZqYjI1a2MxeHlYRzRnSUdsbUlDaHVaWGR6YkdWMGRHVnlRMjl2YTJsbFJYaHBjM1FwSUh0Y2NseHVJQ0FnSUdOdmIydHBaVk4wYjNKbExtZGxkQ2duYm1WM2MyeGxkSFJsY2xCdmNIVndRMjl2YTJsbEp5bGNjbHh1SUNBZ0lDQWdMblJvWlc0b1kyOXZhMmxsSUQwK0lIdGNjbHh1SUNBZ0lDQWdJQ0JqYjI1emRDQmpiMjlyYVdWQmJISmxZV1I1Ulhod2FYSmxaQ0E5SUNodWIzZFVhVzFsYzNSaGJYQWdMU0JqYjI5cmFXVXVaWGh3YVhKbGN5QXRJRzltWm5ObGRGUnBiV1Z6ZEdGdGNDa2dQaUF3TzF4eVhHNGdJQ0FnSUNBZ0lHbG1JQ2hqYjI5cmFXVkJiSEpsWVdSNVJYaHdhWEpsWkNrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnZEc5bloyeGxVRzl3ZFhBb0tUdGNjbHh1SUNBZ0lDQWdJQ0FnSUdOeVpXRjBaVU52YjJ0cFpTZ25ibVYzYzJ4bGRIUmxjbEJ2Y0hWd1EyOXZhMmxsSnl3Z0ozWmhiSFZsSnl3Z1oyVjBSR0YwWlVGbWRHVnlOMFJoZVhNb0tTazdYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNCOUtUdGNjbHh1SUNCOVhISmNibjFjY2x4dVhISmNibU52Ym5OMElHTnlaV0YwWlVOdmIydHBaU0E5SUNodVlXMWxMQ0IyWVd4MVpTd2daWGh3YVhKbGN5a2dQVDRnZTF4eVhHNGdJR1J2WTNWdFpXNTBMbU52YjJ0cFpTQTlJR0FrZTI1aGJXVjlQU1I3ZG1Gc2RXVjlPeUJsZUhCcGNtVnpQU1I3Wlhod2FYSmxjMzFnWEhKY2JuMWNjbHh1WEhKY2JtTnZibk4wSUdkbGRFUmhkR1ZCWm5SbGNqZEVZWGx6SUQwZ0tDa2dQVDRnZTF4eVhHNGdJR052Ym5OMElIUnZaR0Y1VkdsdFpYTjBZVzF3SUQwZ1JHRjBaUzV1YjNjb0tUdGNjbHh1SUNCamIyNXpkQ0IwYjJSaGVVUmhkR1VnUFNCdVpYY2dSR0YwWlNoMGIyUmhlVlJwYldWemRHRnRjQ2t1ZEc5VGRISnBibWNvS1R0Y2NseHVJQ0F2THlBM0lHUmhlWE1nUFNBMk1EUWdPREF3SURBd01DQnRjMXh5WEc0Z0lHTnZibk4wSUdWNGNHbHlZWFJwYjI1VWFXMWxjM1JoYlhBZ1BTQjBiMlJoZVZScGJXVnpkR0Z0Y0NBcklEWXdORGd3TURBd01EdGNjbHh1SUNBdkx5QXhJRzFwYm5WMFpTQTlJRFl3TURBd0lHMXpYSEpjYmlBZ0x5OGdZMjl1YzNRZ1pYaHdhWEpoZEdsdmJsUnBiV1Z6ZEdGdGNDQTlJSFJ2WkdGNVZHbHRaWE4wWVcxd0lDc2dOakF3TURBN1hISmNiaUFnWTI5dWMzUWdaWGh3YVhKaGRHbHZibVJFWVhSbElEMGdibVYzSUVSaGRHVW9aWGh3YVhKaGRHbHZibFJwYldWemRHRnRjQ2t1ZEc5VGRISnBibWNvS1R0Y2NseHVYSEpjYmlBZ2NtVjBkWEp1SUdWNGNHbHlZWFJwYjI1a1JHRjBaVHRjY2x4dWZWeHlYRzVjY2x4dVkyOXVjM1FnY0c5d2RYQWdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDY3VjRzl3ZFhBbktUdGNjbHh1WEhKY2JseHlYRzVqYjI1emRDQm9ZVzVrYkdWSmJtbDBhV0ZzVUc5d2RYQldhWE5wWW1sc2FYUjVJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzRnSUdsbUlDaHVaWGR6YkdWMGRHVnlRMjl2YTJsbFJYaHBjM1FnSmlZZ2NHOXdkWEFwSUh0Y2NseHVJQ0FnSUdOb1pXTnJRMjl2YTJsbFJYaHdhWEpoZEdsdmJpZ3BPMXh5WEc0Z0lIMWNjbHh1SUNCcFppQW9JVzVsZDNOc1pYUjBaWEpEYjI5cmFXVkZlR2x6ZENBbUppQndiM0IxY0NrZ2UxeHlYRzRnSUNBZ2RHOW5aMnhsVUc5d2RYQW9LVHRjY2x4dUlDQWdJR055WldGMFpVTnZiMnRwWlNnbmJtVjNjMnhsZEhSbGNsQnZjSFZ3UTI5dmEybGxKeXdnSjNaaGJIVmxKeXdnWjJWMFJHRjBaVUZtZEdWeU4wUmhlWE1vS1NrN1hISmNiaUFnZlR0Y2NseHVmU2dwT3lJc0ltTnZibk4wSUhScGJXVnNhVzVsUW5SdUlEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkxuUnBiV1ZzYVc1bFgxOWlkRzRuS1R0Y2NseHVZMjl1YzNRZ2RHbHRaV3hwYm1WTWFYTjBJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25MblJwYldWc2FXNWxMV2wwWlcxekp5azdYSEpjYm14bGRDQmpiMnhzWVhCelpXUkdiR0ZuSUQwZ1ptRnNjMlU3WEhKY2JseHlYRzVqYjI1emRDQnphRzkzU0dsa1pHVnVTWFJsYlhNZ1BTQnBkR1Z0Y3lBOVBpQnBkR1Z0Y3k1bWIzSkZZV05vS0dsMFpXMGdQVDRnYVhSbGJTNWpiR0Z6YzB4cGMzUXVjbVZ0YjNabEtDZG9hV1JrWlc0bktTazdYSEpjYmx4eVhHNWpiMjV6ZENCb2FXUmxSV3hsYldWdWRITWdQU0FvS1NBOVBpQjdYSEpjYmlBZ1kyOXVjM1FnWVd4c1JXeGxiV1Z1ZEhNZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5UVd4c0tDY3VkR2x0Wld4cGJtVXRhWFJsYlNjcE8xeHlYRzVjY2x4dUlDQmhiR3hGYkdWdFpXNTBjeTVtYjNKRllXTm9LQ0FvWld3c0lHa3BJRDArSUh0Y2NseHVJQ0FnSUdsbUtHaytQVFFnSmlZZ0lXVnNMbU5zWVhOelRHbHpkQzVqYjI1MFlXbHVjeWduYUdsa1pHVnVKeWtwZTF4eVhHNGdJQ0FnSUNCbGJDNWpiR0Z6YzB4cGMzUXVZV1JrS0Nkb2FXUmtaVzRuS1R0Y2NseHVJQ0FnSUgxY2NseHVJQ0I5S1Z4eVhHNTlYSEpjYmx4eVhHNWpiMjV6ZENCamFHRnVaMlZDZEc1VVpYaDBJRDBnS0NrZ1BUNGdlMXh5WEc0Z0lHbG1JQ2gwYVcxbGJHbHVaVUowYmk1MFpYaDBRMjl1ZEdWdWRDQTlQU0JjSWxKdmVuZHB4WVJjSWlrZ2UxeHlYRzRnSUNBZ2RHbHRaV3hwYm1WQ2RHNHVkR1Y0ZEVOdmJuUmxiblFnUFNCY0lscDNhY1dFWENKY2NseHVJQ0I5WEhKY2JpQWdaV3h6WlNCN1hISmNiaUFnSUNCMGFXMWxiR2x1WlVKMGJpNTBaWGgwUTI5dWRHVnVkQ0E5SUZ3aVVtOTZkMm5GaEZ3aU8xeHlYRzRnSUgxY2NseHVmVnh5WEc1Y2NseHVMeThnWTI5dWMzUWdjMk55YjJ4c1ZHOU1hWE4wSUQwZ0tDa2dQVDRnZTF4eVhHNHZMeUFnSUdsbUtHTnZiR3hoY0hObFpFWnNZV2NwZTF4eVhHNHZMeUFnSUNBZ2RHbHRaV3hwYm1WTWFYTjBMbk5qY205c2JFbHVkRzlXYVdWM0tGeHlYRzR2THlBZ0lDQWdJQ0I3WEhKY2JpOHZJQ0FnSUNBZ0lDQWdZbVZvWVhacGIzSTZJRndpYzIxdmIzUm9YQ0lzSUZ4eVhHNHZMeUFnSUNBZ0lDQWdJR0pzYjJOck9pQW5aVzVrSjF4eVhHNHZMeUFnSUNBZ0lDQjlLVnh5WEc0dkx5QWdJSDFjY2x4dUx5OGdJQ0JwWmlnaFkyOXNiR0Z3YzJWa1JteGhaeWw3WEhKY2JpOHZJQ0FnSUNCMGFXMWxiR2x1WlV4cGMzUXVjMk55YjJ4c1NXNTBiMVpwWlhjb1hISmNiaTh2SUNBZ0lDQWdJSHRjY2x4dUx5OGdJQ0FnSUNBZ0lDQmlaV2hoZG1sdmNqb2dYQ0p6Ylc5dmRHaGNJaXdnWEhKY2JpOHZJQ0FnSUNBZ0lDQWdZbXh2WTJzNklDZGxibVFuWEhKY2JpOHZJQ0FnSUNBZ0lIMHBYSEpjYmk4dklDQWdmVnh5WEc0dkx5QjlYSEpjYmx4eVhHNWpiMjV6ZENCamFHRnVaMlZVYVcxbFRHbHVaVWhsYVdkb2RDQTlJQ2dwSUQwK0lIUnBiV1ZzYVc1bFRHbHpkQzVqYkdGemMweHBjM1F1ZEc5bloyeGxLRndpWTI5c2JHRndjMlZrWENJcE8xeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2FHRnVaR3hsVkdsdFpXeHBibVZEYjJ4aGNITmxLQ2tnZTF4eVhHNGdJRnh5WEc0Z0lHTnZibk4wSUdocFpHUmxia2wwWlcxeklEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDZ25MblJwYldWc2FXNWxMV2wwWlcwdWFHbGtaR1Z1SnlrN1hISmNibHh5WEc0Z0lHbG1LR052Ykd4aGNITmxaRVpzWVdjcGUxeHlYRzRnSUNBZ2FHbGtaVVZzWlcxbGJuUnpLQ2s3WEhKY2JpQWdmVnh5WEc0Z0lHbG1LQ0ZqYjJ4c1lYQnpaV1JHYkdGbktYdGNjbHh1SUNBZ0lITm9iM2RJYVdSa1pXNUpkR1Z0Y3lob2FXUmtaVzVKZEdWdGN5azdYSEpjYmlBZ2ZWeHlYRzRnSUdOb1lXNW5aVlJwYldWTWFXNWxTR1ZwWjJoMEtDazdYSEpjYmlBZ1kyaGhibWRsUW5SdVZHVjRkQ2dwTzF4eVhHNGdJQzh2SUhOamNtOXNiRlJ2VEdsemRDZ3BPMXh5WEc1Y2NseHVJQ0JqYjJ4c1lYQnpaV1JHYkdGbklEMGdJV052Ykd4aGNITmxaRVpzWVdjN1hISmNibjFjY2x4dVhISmNibWxtSUNoMGFXMWxiR2x1WlVKMGJpa2dlMXh5WEc0Z0lIUnBiV1ZzYVc1bFFuUnVMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMk5zYVdOckp5d2dhR0Z1Wkd4bFZHbHRaV3hwYm1WRGIyeGhjSE5sS1Z4eVhHNTlJaXdpTHk4Z1ZHaGxJRzF2WkhWc1pTQmpZV05vWlZ4dWRtRnlJRjlmZDJWaWNHRmphMTl0YjJSMWJHVmZZMkZqYUdWZlh5QTlJSHQ5TzF4dVhHNHZMeUJVYUdVZ2NtVnhkV2x5WlNCbWRXNWpkR2x2Ymx4dVpuVnVZM1JwYjI0Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aHRiMlIxYkdWSlpDa2dlMXh1WEhRdkx5QkRhR1ZqYXlCcFppQnRiMlIxYkdVZ2FYTWdhVzRnWTJGamFHVmNibHgwZG1GeUlHTmhZMmhsWkUxdlpIVnNaU0E5SUY5ZmQyVmljR0ZqYTE5dGIyUjFiR1ZmWTJGamFHVmZYMXR0YjJSMWJHVkpaRjA3WEc1Y2RHbG1JQ2hqWVdOb1pXUk5iMlIxYkdVZ0lUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4dVhIUmNkSEpsZEhWeWJpQmpZV05vWldSTmIyUjFiR1V1Wlhod2IzSjBjenRjYmx4MGZWeHVYSFF2THlCRGNtVmhkR1VnWVNCdVpYY2diVzlrZFd4bElDaGhibVFnY0hWMElHbDBJR2x1ZEc4Z2RHaGxJR05oWTJobEtWeHVYSFIyWVhJZ2JXOWtkV3hsSUQwZ1gxOTNaV0p3WVdOclgyMXZaSFZzWlY5allXTm9aVjlmVzIxdlpIVnNaVWxrWFNBOUlIdGNibHgwWEhRdkx5QnVieUJ0YjJSMWJHVXVhV1FnYm1WbFpHVmtYRzVjZEZ4MEx5OGdibThnYlc5a2RXeGxMbXh2WVdSbFpDQnVaV1ZrWldSY2JseDBYSFJsZUhCdmNuUnpPaUI3ZlZ4dVhIUjlPMXh1WEc1Y2RDOHZJRVY0WldOMWRHVWdkR2hsSUcxdlpIVnNaU0JtZFc1amRHbHZibHh1WEhSZlgzZGxZbkJoWTJ0ZmJXOWtkV3hsYzE5ZlcyMXZaSFZzWlVsa1hTaHRiMlIxYkdVc0lHMXZaSFZzWlM1bGVIQnZjblJ6TENCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktUdGNibHh1WEhRdkx5QlNaWFIxY200Z2RHaGxJR1Y0Y0c5eWRITWdiMllnZEdobElHMXZaSFZzWlZ4dVhIUnlaWFIxY200Z2JXOWtkV3hsTG1WNGNHOXlkSE03WEc1OVhHNWNiaUlzSWk4dklHZGxkRVJsWm1GMWJIUkZlSEJ2Y25RZ1puVnVZM1JwYjI0Z1ptOXlJR052YlhCaGRHbGlhV3hwZEhrZ2QybDBhQ0J1YjI0dGFHRnliVzl1ZVNCdGIyUjFiR1Z6WEc1ZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtNGdQU0JtZFc1amRHbHZiaWh0YjJSMWJHVXBJSHRjYmx4MGRtRnlJR2RsZEhSbGNpQTlJRzF2WkhWc1pTQW1KaUJ0YjJSMWJHVXVYMTlsYzAxdlpIVnNaU0EvWEc1Y2RGeDBablZ1WTNScGIyNG9LU0I3SUhKbGRIVnliaUJ0YjJSMWJHVmJKMlJsWm1GMWJIUW5YVHNnZlNBNlhHNWNkRngwWm5WdVkzUnBiMjRvS1NCN0lISmxkSFZ5YmlCdGIyUjFiR1U3SUgwN1hHNWNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WkNoblpYUjBaWElzSUhzZ1lUb2daMlYwZEdWeUlIMHBPMXh1WEhSeVpYUjFjbTRnWjJWMGRHVnlPMXh1ZlRzaUxDSXZMeUJrWldacGJtVWdaMlYwZEdWeUlHWjFibU4wYVc5dWN5Qm1iM0lnYUdGeWJXOXVlU0JsZUhCdmNuUnpYRzVmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1RZ1BTQm1kVzVqZEdsdmJpaGxlSEJ2Y25SekxDQmtaV1pwYm1sMGFXOXVLU0I3WEc1Y2RHWnZjaWgyWVhJZ2EyVjVJR2x1SUdSbFptbHVhWFJwYjI0cElIdGNibHgwWEhScFppaGZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbThvWkdWbWFXNXBkR2x2Yml3Z2EyVjVLU0FtSmlBaFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXZLR1Y0Y0c5eWRITXNJR3RsZVNrcElIdGNibHgwWEhSY2RFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hsZUhCdmNuUnpMQ0JyWlhrc0lIc2daVzUxYldWeVlXSnNaVG9nZEhKMVpTd2daMlYwT2lCa1pXWnBibWwwYVc5dVcydGxlVjBnZlNrN1hHNWNkRngwZlZ4dVhIUjlYRzU5T3lJc0lsOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVieUE5SUdaMWJtTjBhVzl1S0c5aWFpd2djSEp2Y0NrZ2V5QnlaWFIxY200Z1QySnFaV04wTG5CeWIzUnZkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c0tHOWlhaXdnY0hKdmNDazdJSDBpTENJdkx5QmtaV1pwYm1VZ1gxOWxjMDF2WkhWc1pTQnZiaUJsZUhCdmNuUnpYRzVmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5JZ1BTQm1kVzVqZEdsdmJpaGxlSEJ2Y25SektTQjdYRzVjZEdsbUtIUjVjR1Z2WmlCVGVXMWliMndnSVQwOUlDZDFibVJsWm1sdVpXUW5JQ1ltSUZONWJXSnZiQzUwYjFOMGNtbHVaMVJoWnlrZ2UxeHVYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQlRlVzFpYjJ3dWRHOVRkSEpwYm1kVVlXY3NJSHNnZG1Gc2RXVTZJQ2ROYjJSMWJHVW5JSDBwTzF4dVhIUjlYRzVjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQW5YMTlsYzAxdlpIVnNaU2NzSUhzZ2RtRnNkV1U2SUhSeWRXVWdmU2s3WEc1OU95SXNJaUlzSWk4dklITjBZWEowZFhCY2JpOHZJRXh2WVdRZ1pXNTBjbmtnYlc5a2RXeGxJR0Z1WkNCeVpYUjFjbTRnWlhod2IzSjBjMXh1WDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHloY0lpNHZjM0pqTDJwekwyRndjQzVxYzF3aUtUdGNiaTh2SUZSb2FYTWdaVzUwY25rZ2JXOWtkV3hsSUdseklISmxabVZ5Wlc1alpXUWdZbmtnYjNSb1pYSWdiVzlrZFd4bGN5QnpieUJwZENCallXNG5kQ0JpWlNCcGJteHBibVZrWEc1ZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktGd2lMaTl6Y21NdmFuTXZiVzlrZFd4bGN5OWpiM1Z5YzJVdGFtRjJZUzF6Ykdsa1pYSnpMbXB6WENJcE8xeHVYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWhjSWk0dmMzSmpMMnB6TDIxdlpIVnNaWE12Wm1GeExXRmpZMjl5WkdsdmJpNXFjMXdpS1R0Y2JsOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9YQ0l1TDNOeVl5OXFjeTl0YjJSMWJHVnpMMmhoYm1Sc1pTMXphV1JsWW1GeUxXNWhkaTVxYzF3aUtUdGNibDlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvWENJdUwzTnlZeTlxY3k5dGIyUjFiR1Z6TDIxaGFXeGphR2x0Y0Mxd2IzQjFjQzVxYzF3aUtUdGNiblpoY2lCZlgzZGxZbkJoWTJ0ZlpYaHdiM0owYzE5ZklEMGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWhjSWk0dmMzSmpMMnB6TDIxdlpIVnNaWE12ZEdsdFpXeHBibVV1YW5OY0lpazdYRzRpTENJaVhTd2libUZ0WlhNaU9sdGRMQ0p6YjNWeVkyVlNiMjkwSWpvaUluMD0ifQ==
