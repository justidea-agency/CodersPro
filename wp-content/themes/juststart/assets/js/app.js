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

/***/ "./src/js/modules/mailchimp-popup.js":
/*!*******************************************!*\
  !*** ./src/js/modules/mailchimp-popup.js ***!
  \*******************************************/
/***/ (function() {

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

/***/ }),

/***/ "./src/js/modules/mobile-menu.js":
/*!***************************************!*\
  !*** ./src/js/modules/mobile-menu.js ***!
  \***************************************/
/***/ (function() {

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

/***/ }),

/***/ "./src/js/modules/timeline.js":
/*!************************************!*\
  !*** ./src/js/modules/timeline.js ***!
  \************************************/
/***/ (function() {

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
/******/ 	__webpack_require__("./src/js/modules/mailchimp-popup.js");
/******/ 	__webpack_require__("./src/js/modules/mobile-menu.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/modules/timeline.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFDTDtBQUNXOzs7Ozs7Ozs7OztBQ0Z2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOzs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxHQUFHO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsR0FBRztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7OztBQ3ZERDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ3ZCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSxlQUFlLDRCQUE0QjtXQUMzQyxlQUFlO1dBQ2YsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBLDhDQUE4Qzs7Ozs7V0NBOUM7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2p1c3RpZGVhLXRlbXBsYXRlLXRoZW1lLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9qdXN0aWRlYS10ZW1wbGF0ZS10aGVtZS8uL3NyYy9qcy9tb2R1bGVzL2NvdXJzZS1qYXZhLXNsaWRlcnMuanMiLCJ3ZWJwYWNrOi8vanVzdGlkZWEtdGVtcGxhdGUtdGhlbWUvLi9zcmMvanMvbW9kdWxlcy9mYXEtYWNjb3JkaW9uLmpzIiwid2VicGFjazovL2p1c3RpZGVhLXRlbXBsYXRlLXRoZW1lLy4vc3JjL2pzL21vZHVsZXMvbWFpbGNoaW1wLXBvcHVwLmpzIiwid2VicGFjazovL2p1c3RpZGVhLXRlbXBsYXRlLXRoZW1lLy4vc3JjL2pzL21vZHVsZXMvbW9iaWxlLW1lbnUuanMiLCJ3ZWJwYWNrOi8vanVzdGlkZWEtdGVtcGxhdGUtdGhlbWUvLi9zcmMvanMvbW9kdWxlcy90aW1lbGluZS5qcyIsIndlYnBhY2s6Ly9qdXN0aWRlYS10ZW1wbGF0ZS10aGVtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qdXN0aWRlYS10ZW1wbGF0ZS10aGVtZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qdXN0aWRlYS10ZW1wbGF0ZS10aGVtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vanVzdGlkZWEtdGVtcGxhdGUtdGhlbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qdXN0aWRlYS10ZW1wbGF0ZS10aGVtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2p1c3RpZGVhLXRlbXBsYXRlLXRoZW1lL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vanVzdGlkZWEtdGVtcGxhdGUtdGhlbWUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2p1c3RpZGVhLXRlbXBsYXRlLXRoZW1lL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL21vZHVsZXMvZmFxLWFjY29yZGlvblwiO1xuaW1wb3J0IFwiLi9tb2R1bGVzL3RpbWVsaW5lXCI7XG5pbXBvcnQgXCIuL21vZHVsZXMvY291cnNlLWphdmEtc2xpZGVyc1wiO1xuaW1wb3J0IFwiLi9tb2R1bGVzL21haWxjaGltcC1wb3B1cFwiOyIsImNvbnN0IHN3aXBlckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXBlcicpO1xyXG5cclxuaWYgKHN3aXBlckVsKSB7XHJcbiAgY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcignLnN3aXBlcicsIHtcclxuICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIHNsaWRlUGVyVmlldzogMSxcclxuICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgfSxcclxuICB9KVxyXG59XHJcbiIsImNvbnN0IGFsbEZhcUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mYXEtZWxlbWVudFwiKTtcclxuXHJcblxyXG5mdW5jdGlvbiBoYW5kbGVPcGVuKGUpIHtcclxuICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgY29uc3QgY3VycmVudEVsZW1lbnQgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgY29uc3QgY3Jvc3NTaWduID0gZS5jdXJyZW50VGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5mYXFfX3BsdXMtbWludXMtdG9nZ2xlJyk7XHJcbiAgY3Jvc3NTaWduLmNsYXNzTGlzdC50b2dnbGUoJ2NvbGxhcHNlZCcpO1xyXG4gIGN1cnJlbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcclxufVxyXG5cclxuaWYgKGFsbEZhcUVsLmxlbmd0aCA+IDApIHtcclxuICBhbGxGYXFFbC5mb3JFYWNoKGVsID0+IHtcclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlT3Blbik7XHJcbiAgfSlcclxufVxyXG4iLCJjb25zdCBjb250YWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgJy5tZW51LWl0ZW0tMjkwMiA+IGEnKTtcclxuICBcclxuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1vdmVybGF5Jyk7XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVQb3B1cFZpc2liaWxpdHkoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cCcpO1xyXG4gIHBvcHVwLmNsYXNzTGlzdC50b2dnbGUoJ29wZW5lZCcpO1xyXG59XHJcbmlmIChjb250YWN0QnRucy5sZW5ndGggPiAwKSB7XHJcbiAgY29udGFjdEJ0bnMuZm9yRWFjaCggYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVBvcHVwVmlzaWJpbGl0eSkpO1xyXG59XHJcblxyXG5pZiAob3ZlcmxheSkge1xyXG4gIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVQb3B1cFZpc2liaWxpdHkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVJbnB1dEZvY3VzKCl7XHJcbiAgY29uc3QgaWQgPSB0aGlzLmlkO1xyXG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGFiZWxbZm9yPScke2lkfSdgKTtcclxuXHJcbiAgaWYoIWxhYmVsLmNsYXNzTGlzdC5jb250YWlucygnZm9jdXNlZCcpKXtcclxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2ZvY3VzZWQnKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUlucHV0Qmx1cigpe1xyXG4gIGNvbnN0IGlkID0gdGhpcy5pZDtcclxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxhYmVsW2Zvcj0nJHtpZH0nYCk7XHJcblxyXG4gIGlmKHRoaXMudmFsdWUgIT09ICcnKXtcclxuICAgIGlmKCFsYWJlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZvY3VzZWQnKSl7XHJcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2ZvY3VzZWQnKTtcclxuICAgIH1cclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICBpZihsYWJlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZvY3VzZWQnKSl7XHJcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3VzZWQnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5jb25zdCBhZGRGb2N1c0xpc3RlbmVycyA9IGZ1bmN0aW9uKCl7XHJcbiAgY29uc3QgdGV4dElucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cCBpbnB1dFt0eXBlPVwidGV4dFwiXScpO1xyXG4gIGNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWNlLUVNQUlMJyk7XHJcblxyXG4gIHRleHRJbnB1dHMuZm9yRWFjaCggaW5wdXQgPT4ge1xyXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBoYW5kbGVJbnB1dEZvY3VzKTtcclxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBoYW5kbGVJbnB1dEJsdXIpO1xyXG4gIH0pXHJcblxyXG4gIGVtYWlsSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBoYW5kbGVJbnB1dEZvY3VzKTtcclxuICBlbWFpbElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBoYW5kbGVJbnB1dEJsdXIpO1xyXG59KCk7IiwiY29uc3QgaGFtYnVyZ2VyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlcl9fYnV0dG9uJyk7XHJcbmNvbnN0IG1vYmlsZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLWJ1cmdlcicpO1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlTmF2T3Blbigpe1xyXG4gIGNvbnN0IGlzQ2xvc2VkID0gbW9iaWxlTWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2Nsb3NlZCcpO1xyXG4gIGNvbnN0IGlzT3BlbiA9IG1vYmlsZU1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuZWQnKTtcclxuXHJcbiAgaWYoaXNDbG9zZWQpe1xyXG4gICAgbW9iaWxlTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiY2xvc2VkXCIpO1xyXG4gICAgbW9iaWxlTWVudS5jbGFzc0xpc3QuYWRkKFwib3BlbmVkXCIpO1xyXG5cclxuICB9XHJcbiAgaWYoaXNPcGVuKXtcclxuICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5lZFwiKTtcclxuICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LmFkZChcImNsb3NlZFwiKTtcclxuICB9XHJcbn1cclxuXHJcbmhhbWJ1cmdlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU5hdk9wZW4pOyIsImNvbnN0IHRpbWVsaW5lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWVsaW5lX19idG4nKTtcclxuXHJcbmNvbnN0IHNob3dIaWRkZW5JdGVtcyA9IGl0ZW1zID0+IGl0ZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpKTtcclxuXHJcbmNvbnN0IGNoYW5nZUJ0blRleHQgPSAoKSA9PiB7XHJcbiAgaWYgKHRpbWVsaW5lQnRuLnRleHRDb250ZW50ID09IFwiUm96d2nFhFwiKSB7XHJcbiAgICB0aW1lbGluZUJ0bi50ZXh0Q29udGVudCA9IFwiWndpxYRcIlxyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIHRpbWVsaW5lQnRuLnRleHRDb250ZW50ID0gXCJSb3p3acWEXCI7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVUaW1lbGluZUNvbGFwc2UoKSB7XHJcbiAgY29uc3QgaGlkZGVuSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGltZWxpbmUtaXRlbS5oaWRkZW4nKTtcclxuXHJcbiAgc2hvd0hpZGRlbkl0ZW1zKGhpZGRlbkl0ZW1zKTtcclxuXHJcbiAgY2hhbmdlQnRuVGV4dCgpO1xyXG59XHJcblxyXG5pZiAodGltZWxpbmVCdG4pIHtcclxuICB0aW1lbGluZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVRpbWVsaW5lQ29sYXBzZSlcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLG51bGwsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2pzL2FwcC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvanMvbW9kdWxlcy9jb3Vyc2UtamF2YS1zbGlkZXJzLmpzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2pzL21vZHVsZXMvZmFxLWFjY29yZGlvbi5qc1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9qcy9tb2R1bGVzL21haWxjaGltcC1wb3B1cC5qc1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9qcy9tb2R1bGVzL21vYmlsZS1tZW51LmpzXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvanMvbW9kdWxlcy90aW1lbGluZS5qc1wiKTtcbiIsbnVsbF0sIm5hbWVzIjpbXSwicHJlRXhpc3RpbmdDb21tZW50IjoiLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liV0ZwYmk1cWN5SXNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN096czdPenM3TzBGQlFXbERPMEZCUTB3N1FVRkRWenM3T3pzN096czdPenM3UVVOR2RrTTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNTMEZCU3p0QlFVTk1MRWRCUVVjN1FVRkRTRHM3T3pzN096czdPenM3UVVOWVFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU96czdPenM3T3pzN096dEJRMlpCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4eFJFRkJjVVFzUjBGQlJ6dEJRVU40UkR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNjVVJCUVhGRUxFZEJRVWM3UVVGRGVFUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEU3UVVGRFFUdEJRVU5CTEVOQlFVTTdPenM3T3pzN096czdRVU4yUkVRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN096czdPenM3T3pzN1FVTnNRa0U3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenM3T3pzN1ZVTjJRa0U3VlVGRFFUczdWVUZGUVR0VlFVTkJPMVZCUTBFN1ZVRkRRVHRWUVVOQk8xVkJRMEU3VlVGRFFUdFZRVU5CTzFWQlEwRTdWVUZEUVR0VlFVTkJPMVZCUTBFN1ZVRkRRVHM3VlVGRlFUdFZRVU5CT3p0VlFVVkJPMVZCUTBFN1ZVRkRRVHM3T3pzN1YwTjBRa0U3VjBGRFFUdFhRVU5CTzFkQlEwRXNaVUZCWlN3MFFrRkJORUk3VjBGRE0wTXNaVUZCWlR0WFFVTm1MR2xEUVVGcFF5eFhRVUZYTzFkQlF6VkRPMWRCUTBFN096czdPMWREVUVFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFTeDVRMEZCZVVNc2QwTkJRWGRETzFkQlEycEdPMWRCUTBFN1YwRkRRVHM3T3pzN1YwTlFRU3c0UTBGQk9FTTdPenM3TzFkRFFUbERPMWRCUTBFN1YwRkRRVHRYUVVOQkxIVkVRVUYxUkN4cFFrRkJhVUk3VjBGRGVFVTdWMEZEUVN4blJFRkJaMFFzWVVGQllUdFhRVU0zUkRzN096czdWVVZPUVR0VlFVTkJPMVZCUTBFN1ZVRkRRVHRWUVVOQk8xVkJRMEU3VlVGRFFUdFZRVU5CTzFWQlEwRWlMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk5cWRYTjBhV1JsWVMxMFpXMXdiR0YwWlMxMGFHVnRaUzh1TDNOeVl5OXFjeTloY0hBdWFuTWlMQ0ozWldKd1lXTnJPaTh2YW5WemRHbGtaV0V0ZEdWdGNHeGhkR1V0ZEdobGJXVXZMaTl6Y21NdmFuTXZiVzlrZFd4bGN5OWpiM1Z5YzJVdGFtRjJZUzF6Ykdsa1pYSnpMbXB6SWl3aWQyVmljR0ZqYXpvdkwycDFjM1JwWkdWaExYUmxiWEJzWVhSbExYUm9aVzFsTHk0dmMzSmpMMnB6TDIxdlpIVnNaWE12Wm1GeExXRmpZMjl5WkdsdmJpNXFjeUlzSW5kbFluQmhZMnM2THk5cWRYTjBhV1JsWVMxMFpXMXdiR0YwWlMxMGFHVnRaUzh1TDNOeVl5OXFjeTl0YjJSMWJHVnpMMjFoYVd4amFHbHRjQzF3YjNCMWNDNXFjeUlzSW5kbFluQmhZMnM2THk5cWRYTjBhV1JsWVMxMFpXMXdiR0YwWlMxMGFHVnRaUzh1TDNOeVl5OXFjeTl0YjJSMWJHVnpMMjF2WW1sc1pTMXRaVzUxTG1weklpd2lkMlZpY0dGamF6b3ZMMnAxYzNScFpHVmhMWFJsYlhCc1lYUmxMWFJvWlcxbEx5NHZjM0pqTDJwekwyMXZaSFZzWlhNdmRHbHRaV3hwYm1VdWFuTWlMQ0ozWldKd1lXTnJPaTh2YW5WemRHbGtaV0V0ZEdWdGNHeGhkR1V0ZEdobGJXVXZkMlZpY0dGamF5OWliMjkwYzNSeVlYQWlMQ0ozWldKd1lXTnJPaTh2YW5WemRHbGtaV0V0ZEdWdGNHeGhkR1V0ZEdobGJXVXZkMlZpY0dGamF5OXlkVzUwYVcxbEwyTnZiWEJoZENCblpYUWdaR1ZtWVhWc2RDQmxlSEJ2Y25RaUxDSjNaV0p3WVdOck9pOHZhblZ6ZEdsa1pXRXRkR1Z0Y0d4aGRHVXRkR2hsYldVdmQyVmljR0ZqYXk5eWRXNTBhVzFsTDJSbFptbHVaU0J3Y205d1pYSjBlU0JuWlhSMFpYSnpJaXdpZDJWaWNHRmphem92TDJwMWMzUnBaR1ZoTFhSbGJYQnNZWFJsTFhSb1pXMWxMM2RsWW5CaFkyc3ZjblZ1ZEdsdFpTOW9ZWE5QZDI1UWNtOXdaWEowZVNCemFHOXlkR2hoYm1RaUxDSjNaV0p3WVdOck9pOHZhblZ6ZEdsa1pXRXRkR1Z0Y0d4aGRHVXRkR2hsYldVdmQyVmljR0ZqYXk5eWRXNTBhVzFsTDIxaGEyVWdibUZ0WlhOd1lXTmxJRzlpYW1WamRDSXNJbmRsWW5CaFkyczZMeTlxZFhOMGFXUmxZUzEwWlcxd2JHRjBaUzEwYUdWdFpTOTNaV0p3WVdOckwySmxabTl5WlMxemRHRnlkSFZ3SWl3aWQyVmljR0ZqYXpvdkwycDFjM1JwWkdWaExYUmxiWEJzWVhSbExYUm9aVzFsTDNkbFluQmhZMnN2YzNSaGNuUjFjQ0lzSW5kbFluQmhZMnM2THk5cWRYTjBhV1JsWVMxMFpXMXdiR0YwWlMxMGFHVnRaUzkzWldKd1lXTnJMMkZtZEdWeUxYTjBZWEowZFhBaVhTd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElGd2lMaTl0YjJSMWJHVnpMMlpoY1MxaFkyTnZjbVJwYjI1Y0lqdGNibWx0Y0c5eWRDQmNJaTR2Ylc5a2RXeGxjeTkwYVcxbGJHbHVaVndpTzF4dWFXMXdiM0owSUZ3aUxpOXRiMlIxYkdWekwyTnZkWEp6WlMxcVlYWmhMWE5zYVdSbGNuTmNJanRjYm1sdGNHOXlkQ0JjSWk0dmJXOWtkV3hsY3k5dFlXbHNZMmhwYlhBdGNHOXdkWEJjSWpzaUxDSmpiMjV6ZENCemQybHdaWEpGYkNBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvSnk1emQybHdaWEluS1R0Y2NseHVYSEpjYm1sbUlDaHpkMmx3WlhKRmJDa2dlMXh5WEc0Z0lHTnZibk4wSUhOM2FYQmxjaUE5SUc1bGR5QlRkMmx3WlhJb0p5NXpkMmx3WlhJbkxDQjdYSEpjYmlBZ0lDQmthWEpsWTNScGIyNDZJQ2RvYjNKcGVtOXVkR0ZzSnl4Y2NseHVJQ0FnSUd4dmIzQTZJSFJ5ZFdVc1hISmNiaUFnSUNCemJHbGtaVkJsY2xacFpYYzZJREVzWEhKY2JpQWdJQ0J3WVdkcGJtRjBhVzl1T2lCN1hISmNiaUFnSUNBZ0lHVnNPaUFuTG5OM2FYQmxjaTF3WVdkcGJtRjBhVzl1Snl4Y2NseHVJQ0FnSUgwc1hISmNiaUFnZlNsY2NseHVmVnh5WEc0aUxDSmpiMjV6ZENCaGJHeEdZWEZGYkNBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0pCYkd3b1hDSXVabUZ4TFdWc1pXMWxiblJjSWlrN1hISmNibHh5WEc1Y2NseHVablZ1WTNScGIyNGdhR0Z1Wkd4bFQzQmxiaWhsS1NCN1hISmNiaUFnWlM1emRHOXdVSEp2Y0dGbllYUnBiMjRvS1Z4eVhHNGdJR052Ym5OMElHTjFjbkpsYm5SRmJHVnRaVzUwSUQwZ1pTNWpkWEp5Wlc1MFZHRnlaMlYwTzF4eVhHNGdJR052Ym5OMElHTnliM056VTJsbmJpQTlJR1V1WTNWeWNtVnVkRlJoY21kbGRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NjdVptRnhYMTl3YkhWekxXMXBiblZ6TFhSdloyZHNaU2NwTzF4eVhHNGdJR055YjNOelUybG5iaTVqYkdGemMweHBjM1F1ZEc5bloyeGxLQ2RqYjJ4c1lYQnpaV1FuS1R0Y2NseHVJQ0JqZFhKeVpXNTBSV3hsYldWdWRDNWpiR0Z6YzB4cGMzUXVkRzluWjJ4bEtDZHZjR1Z1SnlrN1hISmNibjFjY2x4dVhISmNibWxtSUNoaGJHeEdZWEZGYkM1c1pXNW5kR2dnUGlBd0tTQjdYSEpjYmlBZ1lXeHNSbUZ4Uld3dVptOXlSV0ZqYUNobGJDQTlQaUI3WEhKY2JpQWdJQ0JsYkM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkamJHbGpheWNzSUdoaGJtUnNaVTl3Wlc0cE8xeHlYRzRnSUgwcFhISmNibjFjY2x4dUlpd2lZMjl1YzNRZ1kyOXVkR0ZqZEVKMGJuTWdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eVFXeHNLRnh5WEc0Z0lDY3ViV1Z1ZFMxcGRHVnRMVEk1TURJZ1BpQmhKeWs3WEhKY2JpQWdYSEpjYm1OdmJuTjBJRzkyWlhKc1lYa2dQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDY3VjRzl3ZFhBdGIzWmxjbXhoZVNjcE8xeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2FHRnVaR3hsVUc5d2RYQldhWE5wWW1sc2FYUjVLR1VwSUh0Y2NseHVJQ0JsTG5CeVpYWmxiblJFWldaaGRXeDBLQ2s3WEhKY2JpQWdZMjl1YzNRZ2NHOXdkWEFnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2N1Y0c5d2RYQW5LVHRjY2x4dUlDQndiM0IxY0M1amJHRnpjMHhwYzNRdWRHOW5aMnhsS0NkdmNHVnVaV1FuS1R0Y2NseHVmVnh5WEc1cFppQW9ZMjl1ZEdGamRFSjBibk11YkdWdVozUm9JRDRnTUNrZ2UxeHlYRzRnSUdOdmJuUmhZM1JDZEc1ekxtWnZja1ZoWTJnb0lHSjBiaUE5UGlCaWRHNHVZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25ZMnhwWTJzbkxDQm9ZVzVrYkdWUWIzQjFjRlpwYzJsaWFXeHBkSGtwS1R0Y2NseHVmVnh5WEc1Y2NseHVhV1lnS0c5MlpYSnNZWGtwSUh0Y2NseHVJQ0J2ZG1WeWJHRjVMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMk5zYVdOckp5d2dhR0Z1Wkd4bFVHOXdkWEJXYVhOcFltbHNhWFI1S1R0Y2NseHVmVnh5WEc1Y2NseHVablZ1WTNScGIyNGdhR0Z1Wkd4bFNXNXdkWFJHYjJOMWN5Z3BlMXh5WEc0Z0lHTnZibk4wSUdsa0lEMGdkR2hwY3k1cFpEdGNjbHh1SUNCamIyNXpkQ0JzWVdKbGJDQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb1lHeGhZbVZzVzJadmNqMG5KSHRwWkgwbllDazdYSEpjYmx4eVhHNGdJR2xtS0NGc1lXSmxiQzVqYkdGemMweHBjM1F1WTI5dWRHRnBibk1vSjJadlkzVnpaV1FuS1NsN1hISmNiaUFnSUNCc1lXSmxiQzVqYkdGemMweHBjM1F1WVdSa0tDZG1iMk4xYzJWa0p5azdYSEpjYmlBZ2ZWeHlYRzU5WEhKY2JseHlYRzVtZFc1amRHbHZiaUJvWVc1a2JHVkpibkIxZEVKc2RYSW9LWHRjY2x4dUlDQmpiMjV6ZENCcFpDQTlJSFJvYVhNdWFXUTdYSEpjYmlBZ1kyOXVjM1FnYkdGaVpXd2dQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtHQnNZV0psYkZ0bWIzSTlKeVI3YVdSOUoyQXBPMXh5WEc1Y2NseHVJQ0JwWmloMGFHbHpMblpoYkhWbElDRTlQU0FuSnlsN1hISmNiaUFnSUNCcFppZ2hiR0ZpWld3dVkyeGhjM05NYVhOMExtTnZiblJoYVc1ektDZG1iMk4xYzJWa0p5a3BlMXh5WEc0Z0lDQWdJQ0JzWVdKbGJDNWpiR0Z6YzB4cGMzUXVZV1JrS0NkbWIyTjFjMlZrSnlrN1hISmNiaUFnSUNCOVhISmNiaUFnZlZ4eVhHNGdJR1ZzYzJVZ2UxeHlYRzRnSUNBZ2FXWW9iR0ZpWld3dVkyeGhjM05NYVhOMExtTnZiblJoYVc1ektDZG1iMk4xYzJWa0p5a3BlMXh5WEc0Z0lDQWdJQ0JzWVdKbGJDNWpiR0Z6YzB4cGMzUXVjbVZ0YjNabEtDZG1iMk4xYzJWa0p5azdYSEpjYmlBZ0lDQjlYSEpjYmlBZ2ZWeHlYRzU5WEhKY2JseHlYRzVjY2x4dVkyOXVjM1FnWVdSa1JtOWpkWE5NYVhOMFpXNWxjbk1nUFNCbWRXNWpkR2x2YmlncGUxeHlYRzRnSUdOdmJuTjBJSFJsZUhSSmJuQjFkSE1nUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlRV3hzS0NjdWNHOXdkWEFnYVc1d2RYUmJkSGx3WlQxY0luUmxlSFJjSWwwbktUdGNjbHh1SUNCamIyNXpkQ0JsYldGcGJFbHVjSFYwSUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduSTIxalpTMUZUVUZKVENjcE8xeHlYRzVjY2x4dUlDQjBaWGgwU1c1d2RYUnpMbVp2Y2tWaFkyZ29JR2x1Y0hWMElEMCtJSHRjY2x4dUlDQWdJR2x1Y0hWMExtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0oyWnZZM1Z6Snl3Z2FHRnVaR3hsU1c1d2RYUkdiMk4xY3lrN1hISmNiaUFnSUNCcGJuQjFkQzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RpYkhWeUp5d2dhR0Z1Wkd4bFNXNXdkWFJDYkhWeUtUdGNjbHh1SUNCOUtWeHlYRzVjY2x4dUlDQmxiV0ZwYkVsdWNIVjBMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMlp2WTNWekp5d2dhR0Z1Wkd4bFNXNXdkWFJHYjJOMWN5azdYSEpjYmlBZ1pXMWhhV3hKYm5CMWRDNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGliSFZ5Snl3Z2FHRnVaR3hsU1c1d2RYUkNiSFZ5S1R0Y2NseHVmU2dwT3lJc0ltTnZibk4wSUdoaGJXSjFjbWRsY2tKMGJpQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5NW9ZVzFpZFhKblpYSmZYMkoxZEhSdmJpY3BPMXh5WEc1amIyNXpkQ0J0YjJKcGJHVk5aVzUxSUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduTG1obFlXUmxjaTFpZFhKblpYSW5LVHRjY2x4dVhISmNibVoxYm1OMGFXOXVJR2hoYm1Sc1pVNWhkazl3Wlc0b0tYdGNjbHh1SUNCamIyNXpkQ0JwYzBOc2IzTmxaQ0E5SUcxdlltbHNaVTFsYm5VdVkyeGhjM05NYVhOMExtTnZiblJoYVc1ektDZGpiRzl6WldRbktUdGNjbHh1SUNCamIyNXpkQ0JwYzA5d1pXNGdQU0J0YjJKcGJHVk5aVzUxTG1Oc1lYTnpUR2x6ZEM1amIyNTBZV2x1Y3lnbmIzQmxibVZrSnlrN1hISmNibHh5WEc0Z0lHbG1LR2x6UTJ4dmMyVmtLWHRjY2x4dUlDQWdJRzF2WW1sc1pVMWxiblV1WTJ4aGMzTk1hWE4wTG5KbGJXOTJaU2hjSW1Oc2IzTmxaRndpS1R0Y2NseHVJQ0FnSUcxdlltbHNaVTFsYm5VdVkyeGhjM05NYVhOMExtRmtaQ2hjSW05d1pXNWxaRndpS1R0Y2NseHVYSEpjYmlBZ2ZWeHlYRzRnSUdsbUtHbHpUM0JsYmlsN1hISmNiaUFnSUNCdGIySnBiR1ZOWlc1MUxtTnNZWE56VEdsemRDNXlaVzF2ZG1Vb1hDSnZjR1Z1WldSY0lpazdYSEpjYmlBZ0lDQnRiMkpwYkdWTlpXNTFMbU5zWVhOelRHbHpkQzVoWkdRb1hDSmpiRzl6WldSY0lpazdYSEpjYmlBZ2ZWeHlYRzU5WEhKY2JseHlYRzVvWVcxaWRYSm5aWEpDZEc0dVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblkyeHBZMnNuTENCb1lXNWtiR1ZPWVhaUGNHVnVLVHNpTENKamIyNXpkQ0IwYVcxbGJHbHVaVUowYmlBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvSnk1MGFXMWxiR2x1WlY5ZlluUnVKeWs3WEhKY2JseHlYRzVqYjI1emRDQnphRzkzU0dsa1pHVnVTWFJsYlhNZ1BTQnBkR1Z0Y3lBOVBpQnBkR1Z0Y3k1bWIzSkZZV05vS0dsMFpXMGdQVDRnYVhSbGJTNWpiR0Z6YzB4cGMzUXVjbVZ0YjNabEtDZG9hV1JrWlc0bktTazdYSEpjYmx4eVhHNWpiMjV6ZENCamFHRnVaMlZDZEc1VVpYaDBJRDBnS0NrZ1BUNGdlMXh5WEc0Z0lHbG1JQ2gwYVcxbGJHbHVaVUowYmk1MFpYaDBRMjl1ZEdWdWRDQTlQU0JjSWxKdmVuZHB4WVJjSWlrZ2UxeHlYRzRnSUNBZ2RHbHRaV3hwYm1WQ2RHNHVkR1Y0ZEVOdmJuUmxiblFnUFNCY0lscDNhY1dFWENKY2NseHVJQ0I5WEhKY2JpQWdaV3h6WlNCN1hISmNiaUFnSUNCMGFXMWxiR2x1WlVKMGJpNTBaWGgwUTI5dWRHVnVkQ0E5SUZ3aVVtOTZkMm5GaEZ3aU8xeHlYRzRnSUgxY2NseHVmVnh5WEc1Y2NseHVablZ1WTNScGIyNGdhR0Z1Wkd4bFZHbHRaV3hwYm1WRGIyeGhjSE5sS0NrZ2UxeHlYRzRnSUdOdmJuTjBJR2hwWkdSbGJrbDBaVzF6SUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZja0ZzYkNnbkxuUnBiV1ZzYVc1bExXbDBaVzB1YUdsa1pHVnVKeWs3WEhKY2JseHlYRzRnSUhOb2IzZElhV1JrWlc1SmRHVnRjeWhvYVdSa1pXNUpkR1Z0Y3lrN1hISmNibHh5WEc0Z0lHTm9ZVzVuWlVKMGJsUmxlSFFvS1R0Y2NseHVmVnh5WEc1Y2NseHVhV1lnS0hScGJXVnNhVzVsUW5SdUtTQjdYSEpjYmlBZ2RHbHRaV3hwYm1WQ2RHNHVZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25ZMnhwWTJzbkxDQm9ZVzVrYkdWVWFXMWxiR2x1WlVOdmJHRndjMlVwWEhKY2JuMGlMQ0l2THlCVWFHVWdiVzlrZFd4bElHTmhZMmhsWEc1MllYSWdYMTkzWldKd1lXTnJYMjF2WkhWc1pWOWpZV05vWlY5ZklEMGdlMzA3WEc1Y2JpOHZJRlJvWlNCeVpYRjFhWEpsSUdaMWJtTjBhVzl1WEc1bWRXNWpkR2x2YmlCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktHMXZaSFZzWlVsa0tTQjdYRzVjZEM4dklFTm9aV05ySUdsbUlHMXZaSFZzWlNCcGN5QnBiaUJqWVdOb1pWeHVYSFIyWVhJZ1kyRmphR1ZrVFc5a2RXeGxJRDBnWDE5M1pXSndZV05yWDIxdlpIVnNaVjlqWVdOb1pWOWZXMjF2WkhWc1pVbGtYVHRjYmx4MGFXWWdLR05oWTJobFpFMXZaSFZzWlNBaFBUMGdkVzVrWldacGJtVmtLU0I3WEc1Y2RGeDBjbVYwZFhKdUlHTmhZMmhsWkUxdlpIVnNaUzVsZUhCdmNuUnpPMXh1WEhSOVhHNWNkQzh2SUVOeVpXRjBaU0JoSUc1bGR5QnRiMlIxYkdVZ0tHRnVaQ0J3ZFhRZ2FYUWdhVzUwYnlCMGFHVWdZMkZqYUdVcFhHNWNkSFpoY2lCdGIyUjFiR1VnUFNCZlgzZGxZbkJoWTJ0ZmJXOWtkV3hsWDJOaFkyaGxYMTliYlc5a2RXeGxTV1JkSUQwZ2UxeHVYSFJjZEM4dklHNXZJRzF2WkhWc1pTNXBaQ0J1WldWa1pXUmNibHgwWEhRdkx5QnVieUJ0YjJSMWJHVXViRzloWkdWa0lHNWxaV1JsWkZ4dVhIUmNkR1Y0Y0c5eWRITTZJSHQ5WEc1Y2RIMDdYRzVjYmx4MEx5OGdSWGhsWTNWMFpTQjBhR1VnYlc5a2RXeGxJR1oxYm1OMGFXOXVYRzVjZEY5ZmQyVmljR0ZqYTE5dGIyUjFiR1Z6WDE5YmJXOWtkV3hsU1dSZEtHMXZaSFZzWlN3Z2JXOWtkV3hsTG1WNGNHOXlkSE1zSUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4cE8xeHVYRzVjZEM4dklGSmxkSFZ5YmlCMGFHVWdaWGh3YjNKMGN5QnZaaUIwYUdVZ2JXOWtkV3hsWEc1Y2RISmxkSFZ5YmlCdGIyUjFiR1V1Wlhod2IzSjBjenRjYm4xY2JseHVJaXdpTHk4Z1oyVjBSR1ZtWVhWc2RFVjRjRzl5ZENCbWRXNWpkR2x2YmlCbWIzSWdZMjl0Y0dGMGFXSnBiR2wwZVNCM2FYUm9JRzV2Ymkxb1lYSnRiMjU1SUcxdlpIVnNaWE5jYmw5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJpQTlJR1oxYm1OMGFXOXVLRzF2WkhWc1pTa2dlMXh1WEhSMllYSWdaMlYwZEdWeUlEMGdiVzlrZFd4bElDWW1JRzF2WkhWc1pTNWZYMlZ6VFc5a2RXeGxJRDljYmx4MFhIUm1kVzVqZEdsdmJpZ3BJSHNnY21WMGRYSnVJRzF2WkhWc1pWc25aR1ZtWVhWc2RDZGRPeUI5SURwY2JseDBYSFJtZFc1amRHbHZiaWdwSUhzZ2NtVjBkWEp1SUcxdlpIVnNaVHNnZlR0Y2JseDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrS0dkbGRIUmxjaXdnZXlCaE9pQm5aWFIwWlhJZ2ZTazdYRzVjZEhKbGRIVnliaUJuWlhSMFpYSTdYRzU5T3lJc0lpOHZJR1JsWm1sdVpTQm5aWFIwWlhJZ1puVnVZM1JwYjI1eklHWnZjaUJvWVhKdGIyNTVJR1Y0Y0c5eWRITmNibDlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WkNBOUlHWjFibU4wYVc5dUtHVjRjRzl5ZEhNc0lHUmxabWx1YVhScGIyNHBJSHRjYmx4MFptOXlLSFpoY2lCclpYa2dhVzRnWkdWbWFXNXBkR2x2YmlrZ2UxeHVYSFJjZEdsbUtGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVieWhrWldacGJtbDBhVzl1TENCclpYa3BJQ1ltSUNGZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtOG9aWGh3YjNKMGN5d2dhMlY1S1NrZ2UxeHVYSFJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJR3RsZVN3Z2V5QmxiblZ0WlhKaFlteGxPaUIwY25WbExDQm5aWFE2SUdSbFptbHVhWFJwYjI1YmEyVjVYU0I5S1R0Y2JseDBYSFI5WEc1Y2RIMWNibjA3SWl3aVgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXZJRDBnWm5WdVkzUnBiMjRvYjJKcUxDQndjbTl3S1NCN0lISmxkSFZ5YmlCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd3b2IySnFMQ0J3Y205d0tUc2dmU0lzSWk4dklHUmxabWx1WlNCZlgyVnpUVzlrZFd4bElHOXVJR1Y0Y0c5eWRITmNibDlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y2lBOUlHWjFibU4wYVc5dUtHVjRjRzl5ZEhNcElIdGNibHgwYVdZb2RIbHdaVzltSUZONWJXSnZiQ0FoUFQwZ0ozVnVaR1ZtYVc1bFpDY2dKaVlnVTNsdFltOXNMblJ2VTNSeWFXNW5WR0ZuS1NCN1hHNWNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lGTjViV0p2YkM1MGIxTjBjbWx1WjFSaFp5d2dleUIyWVd4MVpUb2dKMDF2WkhWc1pTY2dmU2s3WEc1Y2RIMWNibHgwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lDZGZYMlZ6VFc5a2RXeGxKeXdnZXlCMllXeDFaVG9nZEhKMVpTQjlLVHRjYm4wN0lpd2lJaXdpTHk4Z2MzUmhjblIxY0Z4dUx5OGdURzloWkNCbGJuUnllU0J0YjJSMWJHVWdZVzVrSUhKbGRIVnliaUJsZUhCdmNuUnpYRzVmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0Z3aUxpOXpjbU12YW5NdllYQndMbXB6WENJcE8xeHVMeThnVkdocGN5QmxiblJ5ZVNCdGIyUjFiR1VnYVhNZ2NtVm1aWEpsYm1ObFpDQmllU0J2ZEdobGNpQnRiMlIxYkdWeklITnZJR2wwSUdOaGJpZDBJR0psSUdsdWJHbHVaV1JjYmw5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b1hDSXVMM055WXk5cWN5OXRiMlIxYkdWekwyTnZkWEp6WlMxcVlYWmhMWE5zYVdSbGNuTXVhbk5jSWlrN1hHNWZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLRndpTGk5emNtTXZhbk12Ylc5a2RXeGxjeTltWVhFdFlXTmpiM0prYVc5dUxtcHpYQ0lwTzF4dVgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aGNJaTR2YzNKakwycHpMMjF2WkhWc1pYTXZiV0ZwYkdOb2FXMXdMWEJ2Y0hWd0xtcHpYQ0lwTzF4dVgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aGNJaTR2YzNKakwycHpMMjF2WkhWc1pYTXZiVzlpYVd4bExXMWxiblV1YW5OY0lpazdYRzUyWVhJZ1gxOTNaV0p3WVdOclgyVjRjRzl5ZEhOZlh5QTlJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvWENJdUwzTnlZeTlxY3k5dGIyUjFiR1Z6TDNScGJXVnNhVzVsTG1welhDSXBPMXh1SWl3aUlsMHNJbTVoYldWeklqcGJYU3dpYzI5MWNtTmxVbTl2ZENJNklpSjkifQ==
