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

  currentElement.classList.toggle('open');
}

if (allFaqEl.length > 0) {
  allFaqEl.forEach(el => {
    el.addEventListener('click', handleOpen);
  })
}


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
/******/ 	__webpack_require__("./src/js/modules/mobile-menu.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/modules/timeline.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ0w7QUFDVzs7Ozs7Ozs7Ozs7O0FDRnZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUN2QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsZUFBZSw0QkFBNEI7V0FDM0MsZUFBZTtXQUNmLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQSw4Q0FBOEM7Ozs7O1dDQTlDO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanVzdGlkZWEtdGVtcGxhdGUtdGhlbWUvLi9zcmMvanMvYXBwLmpzIiwid2VicGFjazovL2p1c3RpZGVhLXRlbXBsYXRlLXRoZW1lLy4vc3JjL2pzL21vZHVsZXMvY291cnNlLWphdmEtc2xpZGVycy5qcyIsIndlYnBhY2s6Ly9qdXN0aWRlYS10ZW1wbGF0ZS10aGVtZS8uL3NyYy9qcy9tb2R1bGVzL2ZhcS1hY2NvcmRpb24uanMiLCJ3ZWJwYWNrOi8vanVzdGlkZWEtdGVtcGxhdGUtdGhlbWUvLi9zcmMvanMvbW9kdWxlcy9tb2JpbGUtbWVudS5qcyIsIndlYnBhY2s6Ly9qdXN0aWRlYS10ZW1wbGF0ZS10aGVtZS8uL3NyYy9qcy9tb2R1bGVzL3RpbWVsaW5lLmpzIiwid2VicGFjazovL2p1c3RpZGVhLXRlbXBsYXRlLXRoZW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2p1c3RpZGVhLXRlbXBsYXRlLXRoZW1lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2p1c3RpZGVhLXRlbXBsYXRlLXRoZW1lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qdXN0aWRlYS10ZW1wbGF0ZS10aGVtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2p1c3RpZGVhLXRlbXBsYXRlLXRoZW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanVzdGlkZWEtdGVtcGxhdGUtdGhlbWUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9qdXN0aWRlYS10ZW1wbGF0ZS10aGVtZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vanVzdGlkZWEtdGVtcGxhdGUtdGhlbWUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vbW9kdWxlcy9mYXEtYWNjb3JkaW9uXCI7XG5pbXBvcnQgXCIuL21vZHVsZXMvdGltZWxpbmVcIjtcbmltcG9ydCBcIi4vbW9kdWxlcy9jb3Vyc2UtamF2YS1zbGlkZXJzXCI7XG5cbiIsImNvbnN0IHN3aXBlckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXBlcicpO1xyXG5cclxuaWYgKHN3aXBlckVsKSB7XHJcbiAgY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcignLnN3aXBlcicsIHtcclxuICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIHNsaWRlUGVyVmlldzogMSxcclxuICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgfSxcclxuICB9KVxyXG59XHJcbiIsImNvbnN0IGFsbEZhcUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mYXEtZWxlbWVudFwiKTtcclxuXHJcblxyXG5mdW5jdGlvbiBoYW5kbGVPcGVuKGUpIHtcclxuICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgY29uc3QgY3VycmVudEVsZW1lbnQgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcblxyXG4gIGN1cnJlbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcclxufVxyXG5cclxuaWYgKGFsbEZhcUVsLmxlbmd0aCA+IDApIHtcclxuICBhbGxGYXFFbC5mb3JFYWNoKGVsID0+IHtcclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlT3Blbik7XHJcbiAgfSlcclxufVxyXG4iLCJjb25zdCBoYW1idXJnZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyX19idXR0b24nKTtcclxuY29uc3QgbW9iaWxlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItYnVyZ2VyJyk7XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVOYXZPcGVuKCl7XHJcbiAgY29uc3QgaXNDbG9zZWQgPSBtb2JpbGVNZW51LmNsYXNzTGlzdC5jb250YWlucygnY2xvc2VkJyk7XHJcbiAgY29uc3QgaXNPcGVuID0gbW9iaWxlTWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW5lZCcpO1xyXG5cclxuICBpZihpc0Nsb3NlZCl7XHJcbiAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJjbG9zZWRcIik7XHJcbiAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC5hZGQoXCJvcGVuZWRcIik7XHJcblxyXG4gIH1cclxuICBpZihpc09wZW4pe1xyXG4gICAgbW9iaWxlTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwib3BlbmVkXCIpO1xyXG4gICAgbW9iaWxlTWVudS5jbGFzc0xpc3QuYWRkKFwiY2xvc2VkXCIpO1xyXG4gIH1cclxufVxyXG5cclxuaGFtYnVyZ2VyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlTmF2T3Blbik7IiwiY29uc3QgdGltZWxpbmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZWxpbmVfX2J0bicpO1xyXG5cclxuY29uc3Qgc2hvd0hpZGRlbkl0ZW1zID0gaXRlbXMgPT4gaXRlbXMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJykpO1xyXG5cclxuY29uc3QgY2hhbmdlQnRuVGV4dCA9ICgpID0+IHtcclxuICBpZiAodGltZWxpbmVCdG4udGV4dENvbnRlbnQgPT0gXCJSb3p3acWEXCIpIHtcclxuICAgIHRpbWVsaW5lQnRuLnRleHRDb250ZW50ID0gXCJad2nFhFwiXHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgdGltZWxpbmVCdG4udGV4dENvbnRlbnQgPSBcIlJvendpxYRcIjtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVRpbWVsaW5lQ29sYXBzZSgpIHtcclxuICBjb25zdCBoaWRkZW5JdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aW1lbGluZS1pdGVtLmhpZGRlbicpO1xyXG5cclxuICBzaG93SGlkZGVuSXRlbXMoaGlkZGVuSXRlbXMpO1xyXG5cclxuICBjaGFuZ2VCdG5UZXh0KCk7XHJcbn1cclxuXHJcbmlmICh0aW1lbGluZUJ0bikge1xyXG4gIHRpbWVsaW5lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlVGltZWxpbmVDb2xhcHNlKVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsbnVsbCwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvanMvYXBwLmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9qcy9tb2R1bGVzL2NvdXJzZS1qYXZhLXNsaWRlcnMuanNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvanMvbW9kdWxlcy9mYXEtYWNjb3JkaW9uLmpzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2pzL21vZHVsZXMvbW9iaWxlLW1lbnUuanNcIik7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9qcy9tb2R1bGVzL3RpbWVsaW5lLmpzXCIpO1xuIixudWxsXSwibmFtZXMiOltdLCJwcmVFeGlzdGluZ0NvbW1lbnQiOiIvLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJXRnBiaTVxY3lJc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPenM3T3pzN096dEJRVUZwUXp0QlFVTk1PMEZCUTFjN096czdPenM3T3pzN096dEJRMFoyUXp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3c1IwRkJSenRCUVVOSU96czdPenM3T3pzN096dEJRMWhCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU96czdPenM3T3pzN096dEJRMlJCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN096czdPenM3TzBGRGJFSkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdPenM3TzFWRGRrSkJPMVZCUTBFN08xVkJSVUU3VlVGRFFUdFZRVU5CTzFWQlEwRTdWVUZEUVR0VlFVTkJPMVZCUTBFN1ZVRkRRVHRWUVVOQk8xVkJRMEU3VlVGRFFUdFZRVU5CTzFWQlEwRTdPMVZCUlVFN1ZVRkRRVHM3VlVGRlFUdFZRVU5CTzFWQlEwRTdPenM3TzFkRGRFSkJPMWRCUTBFN1YwRkRRVHRYUVVOQkxHVkJRV1VzTkVKQlFUUkNPMWRCUXpORExHVkJRV1U3VjBGRFppeHBRMEZCYVVNc1YwRkJWenRYUVVNMVF6dFhRVU5CT3pzN096dFhRMUJCTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFc2VVTkJRWGxETEhkRFFVRjNRenRYUVVOcVJqdFhRVU5CTzFkQlEwRTdPenM3TzFkRFVFRXNPRU5CUVRoRE96czdPenRYUTBFNVF6dFhRVU5CTzFkQlEwRTdWMEZEUVN4MVJFRkJkVVFzYVVKQlFXbENPMWRCUTNoRk8xZEJRMEVzWjBSQlFXZEVMR0ZCUVdFN1YwRkROMFE3T3pzN08xVkZUa0U3VlVGRFFUdFZRVU5CTzFWQlEwRTdWVUZEUVR0VlFVTkJPMVZCUTBFN1ZVRkRRU0lzSW5OdmRYSmpaWE1pT2xzaWQyVmljR0ZqYXpvdkwycDFjM1JwWkdWaExYUmxiWEJzWVhSbExYUm9aVzFsTHk0dmMzSmpMMnB6TDJGd2NDNXFjeUlzSW5kbFluQmhZMnM2THk5cWRYTjBhV1JsWVMxMFpXMXdiR0YwWlMxMGFHVnRaUzh1TDNOeVl5OXFjeTl0YjJSMWJHVnpMMk52ZFhKelpTMXFZWFpoTFhOc2FXUmxjbk11YW5NaUxDSjNaV0p3WVdOck9pOHZhblZ6ZEdsa1pXRXRkR1Z0Y0d4aGRHVXRkR2hsYldVdkxpOXpjbU12YW5NdmJXOWtkV3hsY3k5bVlYRXRZV05qYjNKa2FXOXVMbXB6SWl3aWQyVmljR0ZqYXpvdkwycDFjM1JwWkdWaExYUmxiWEJzWVhSbExYUm9aVzFsTHk0dmMzSmpMMnB6TDIxdlpIVnNaWE12Ylc5aWFXeGxMVzFsYm5VdWFuTWlMQ0ozWldKd1lXTnJPaTh2YW5WemRHbGtaV0V0ZEdWdGNHeGhkR1V0ZEdobGJXVXZMaTl6Y21NdmFuTXZiVzlrZFd4bGN5OTBhVzFsYkdsdVpTNXFjeUlzSW5kbFluQmhZMnM2THk5cWRYTjBhV1JsWVMxMFpXMXdiR0YwWlMxMGFHVnRaUzkzWldKd1lXTnJMMkp2YjNSemRISmhjQ0lzSW5kbFluQmhZMnM2THk5cWRYTjBhV1JsWVMxMFpXMXdiR0YwWlMxMGFHVnRaUzkzWldKd1lXTnJMM0oxYm5ScGJXVXZZMjl0Y0dGMElHZGxkQ0JrWldaaGRXeDBJR1Y0Y0c5eWRDSXNJbmRsWW5CaFkyczZMeTlxZFhOMGFXUmxZUzEwWlcxd2JHRjBaUzEwYUdWdFpTOTNaV0p3WVdOckwzSjFiblJwYldVdlpHVm1hVzVsSUhCeWIzQmxjblI1SUdkbGRIUmxjbk1pTENKM1pXSndZV05yT2k4dmFuVnpkR2xrWldFdGRHVnRjR3hoZEdVdGRHaGxiV1V2ZDJWaWNHRmpheTl5ZFc1MGFXMWxMMmhoYzA5M2JsQnliM0JsY25SNUlITm9iM0owYUdGdVpDSXNJbmRsWW5CaFkyczZMeTlxZFhOMGFXUmxZUzEwWlcxd2JHRjBaUzEwYUdWdFpTOTNaV0p3WVdOckwzSjFiblJwYldVdmJXRnJaU0J1WVcxbGMzQmhZMlVnYjJKcVpXTjBJaXdpZDJWaWNHRmphem92TDJwMWMzUnBaR1ZoTFhSbGJYQnNZWFJsTFhSb1pXMWxMM2RsWW5CaFkyc3ZZbVZtYjNKbExYTjBZWEowZFhBaUxDSjNaV0p3WVdOck9pOHZhblZ6ZEdsa1pXRXRkR1Z0Y0d4aGRHVXRkR2hsYldVdmQyVmljR0ZqYXk5emRHRnlkSFZ3SWl3aWQyVmljR0ZqYXpvdkwycDFjM1JwWkdWaExYUmxiWEJzWVhSbExYUm9aVzFsTDNkbFluQmhZMnN2WVdaMFpYSXRjM1JoY25SMWNDSmRMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdYQ0l1TDIxdlpIVnNaWE12Wm1GeExXRmpZMjl5WkdsdmJsd2lPMXh1YVcxd2IzSjBJRndpTGk5dGIyUjFiR1Z6TDNScGJXVnNhVzVsWENJN1hHNXBiWEJ2Y25RZ1hDSXVMMjF2WkhWc1pYTXZZMjkxY25ObExXcGhkbUV0YzJ4cFpHVnljMXdpTzF4dVhHNGlMQ0pqYjI1emRDQnpkMmx3WlhKRmJDQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5NXpkMmx3WlhJbktUdGNjbHh1WEhKY2JtbG1JQ2h6ZDJsd1pYSkZiQ2tnZTF4eVhHNGdJR052Ym5OMElITjNhWEJsY2lBOUlHNWxkeUJUZDJsd1pYSW9KeTV6ZDJsd1pYSW5MQ0I3WEhKY2JpQWdJQ0JrYVhKbFkzUnBiMjQ2SUNkb2IzSnBlbTl1ZEdGc0p5eGNjbHh1SUNBZ0lHeHZiM0E2SUhSeWRXVXNYSEpjYmlBZ0lDQnpiR2xrWlZCbGNsWnBaWGM2SURFc1hISmNiaUFnSUNCd1lXZHBibUYwYVc5dU9pQjdYSEpjYmlBZ0lDQWdJR1ZzT2lBbkxuTjNhWEJsY2kxd1lXZHBibUYwYVc5dUp5eGNjbHh1SUNBZ0lIMHNYSEpjYmlBZ2ZTbGNjbHh1ZlZ4eVhHNGlMQ0pqYjI1emRDQmhiR3hHWVhGRmJDQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNKQmJHd29YQ0l1Wm1GeExXVnNaVzFsYm5SY0lpazdYSEpjYmx4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnYUdGdVpHeGxUM0JsYmlobEtTQjdYSEpjYmlBZ1pTNXpkRzl3VUhKdmNHRm5ZWFJwYjI0b0tWeHlYRzRnSUdOdmJuTjBJR04xY25KbGJuUkZiR1Z0Wlc1MElEMGdaUzVqZFhKeVpXNTBWR0Z5WjJWME8xeHlYRzVjY2x4dUlDQmpkWEp5Wlc1MFJXeGxiV1Z1ZEM1amJHRnpjMHhwYzNRdWRHOW5aMnhsS0NkdmNHVnVKeWs3WEhKY2JuMWNjbHh1WEhKY2JtbG1JQ2hoYkd4R1lYRkZiQzVzWlc1bmRHZ2dQaUF3S1NCN1hISmNiaUFnWVd4c1JtRnhSV3d1Wm05eVJXRmphQ2hsYkNBOVBpQjdYSEpjYmlBZ0lDQmxiQzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RqYkdsamF5Y3NJR2hoYm1Sc1pVOXdaVzRwTzF4eVhHNGdJSDBwWEhKY2JuMWNjbHh1SWl3aVkyOXVjM1FnYUdGdFluVnlaMlZ5UW5SdUlEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkxtaGhiV0oxY21kbGNsOWZZblYwZEc5dUp5azdYSEpjYm1OdmJuTjBJRzF2WW1sc1pVMWxiblVnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2N1YUdWaFpHVnlMV0oxY21kbGNpY3BPMXh5WEc1Y2NseHVablZ1WTNScGIyNGdhR0Z1Wkd4bFRtRjJUM0JsYmlncGUxeHlYRzRnSUdOdmJuTjBJR2x6UTJ4dmMyVmtJRDBnYlc5aWFXeGxUV1Z1ZFM1amJHRnpjMHhwYzNRdVkyOXVkR0ZwYm5Nb0oyTnNiM05sWkNjcE8xeHlYRzRnSUdOdmJuTjBJR2x6VDNCbGJpQTlJRzF2WW1sc1pVMWxiblV1WTJ4aGMzTk1hWE4wTG1OdmJuUmhhVzV6S0NkdmNHVnVaV1FuS1R0Y2NseHVYSEpjYmlBZ2FXWW9hWE5EYkc5elpXUXBlMXh5WEc0Z0lDQWdiVzlpYVd4bFRXVnVkUzVqYkdGemMweHBjM1F1Y21WdGIzWmxLRndpWTJ4dmMyVmtYQ0lwTzF4eVhHNGdJQ0FnYlc5aWFXeGxUV1Z1ZFM1amJHRnpjMHhwYzNRdVlXUmtLRndpYjNCbGJtVmtYQ0lwTzF4eVhHNWNjbHh1SUNCOVhISmNiaUFnYVdZb2FYTlBjR1Z1S1h0Y2NseHVJQ0FnSUcxdlltbHNaVTFsYm5VdVkyeGhjM05NYVhOMExuSmxiVzkyWlNoY0ltOXdaVzVsWkZ3aUtUdGNjbHh1SUNBZ0lHMXZZbWxzWlUxbGJuVXVZMnhoYzNOTWFYTjBMbUZrWkNoY0ltTnNiM05sWkZ3aUtUdGNjbHh1SUNCOVhISmNibjFjY2x4dVhISmNibWhoYldKMWNtZGxja0owYmk1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkamJHbGpheWNzSUdoaGJtUnNaVTVoZGs5d1pXNHBPeUlzSW1OdmJuTjBJSFJwYldWc2FXNWxRblJ1SUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduTG5ScGJXVnNhVzVsWDE5aWRHNG5LVHRjY2x4dVhISmNibU52Ym5OMElITm9iM2RJYVdSa1pXNUpkR1Z0Y3lBOUlHbDBaVzF6SUQwK0lHbDBaVzF6TG1admNrVmhZMmdvYVhSbGJTQTlQaUJwZEdWdExtTnNZWE56VEdsemRDNXlaVzF2ZG1Vb0oyaHBaR1JsYmljcEtUdGNjbHh1WEhKY2JtTnZibk4wSUdOb1lXNW5aVUowYmxSbGVIUWdQU0FvS1NBOVBpQjdYSEpjYmlBZ2FXWWdLSFJwYldWc2FXNWxRblJ1TG5SbGVIUkRiMjUwWlc1MElEMDlJRndpVW05NmQybkZoRndpS1NCN1hISmNiaUFnSUNCMGFXMWxiR2x1WlVKMGJpNTBaWGgwUTI5dWRHVnVkQ0E5SUZ3aVduZHB4WVJjSWx4eVhHNGdJSDFjY2x4dUlDQmxiSE5sSUh0Y2NseHVJQ0FnSUhScGJXVnNhVzVsUW5SdUxuUmxlSFJEYjI1MFpXNTBJRDBnWENKU2IzcDNhY1dFWENJN1hISmNiaUFnZlZ4eVhHNTlYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQm9ZVzVrYkdWVWFXMWxiR2x1WlVOdmJHRndjMlVvS1NCN1hISmNiaUFnWTI5dWMzUWdhR2xrWkdWdVNYUmxiWE1nUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlRV3hzS0NjdWRHbHRaV3hwYm1VdGFYUmxiUzVvYVdSa1pXNG5LVHRjY2x4dVhISmNiaUFnYzJodmQwaHBaR1JsYmtsMFpXMXpLR2hwWkdSbGJrbDBaVzF6S1R0Y2NseHVYSEpjYmlBZ1kyaGhibWRsUW5SdVZHVjRkQ2dwTzF4eVhHNTlYSEpjYmx4eVhHNXBaaUFvZEdsdFpXeHBibVZDZEc0cElIdGNjbHh1SUNCMGFXMWxiR2x1WlVKMGJpNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGpiR2xqYXljc0lHaGhibVJzWlZScGJXVnNhVzVsUTI5c1lYQnpaU2xjY2x4dWZTSXNJaTh2SUZSb1pTQnRiMlIxYkdVZ1kyRmphR1ZjYm5aaGNpQmZYM2RsWW5CaFkydGZiVzlrZFd4bFgyTmhZMmhsWDE4Z1BTQjdmVHRjYmx4dUx5OGdWR2hsSUhKbGNYVnBjbVVnWm5WdVkzUnBiMjVjYm1aMWJtTjBhVzl1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b2JXOWtkV3hsU1dRcElIdGNibHgwTHk4Z1EyaGxZMnNnYVdZZ2JXOWtkV3hsSUdseklHbHVJR05oWTJobFhHNWNkSFpoY2lCallXTm9aV1JOYjJSMWJHVWdQU0JmWDNkbFluQmhZMnRmYlc5a2RXeGxYMk5oWTJobFgxOWJiVzlrZFd4bFNXUmRPMXh1WEhScFppQW9ZMkZqYUdWa1RXOWtkV3hsSUNFOVBTQjFibVJsWm1sdVpXUXBJSHRjYmx4MFhIUnlaWFIxY200Z1kyRmphR1ZrVFc5a2RXeGxMbVY0Y0c5eWRITTdYRzVjZEgxY2JseDBMeThnUTNKbFlYUmxJR0VnYm1WM0lHMXZaSFZzWlNBb1lXNWtJSEIxZENCcGRDQnBiblJ2SUhSb1pTQmpZV05vWlNsY2JseDBkbUZ5SUcxdlpIVnNaU0E5SUY5ZmQyVmljR0ZqYTE5dGIyUjFiR1ZmWTJGamFHVmZYMXR0YjJSMWJHVkpaRjBnUFNCN1hHNWNkRngwTHk4Z2JtOGdiVzlrZFd4bExtbGtJRzVsWldSbFpGeHVYSFJjZEM4dklHNXZJRzF2WkhWc1pTNXNiMkZrWldRZ2JtVmxaR1ZrWEc1Y2RGeDBaWGh3YjNKMGN6b2dlMzFjYmx4MGZUdGNibHh1WEhRdkx5QkZlR1ZqZFhSbElIUm9aU0J0YjJSMWJHVWdablZ1WTNScGIyNWNibHgwWDE5M1pXSndZV05yWDIxdlpIVnNaWE5mWDF0dGIyUjFiR1ZKWkYwb2JXOWtkV3hsTENCdGIyUjFiR1V1Wlhod2IzSjBjeXdnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlrN1hHNWNibHgwTHk4Z1VtVjBkWEp1SUhSb1pTQmxlSEJ2Y25SeklHOW1JSFJvWlNCdGIyUjFiR1ZjYmx4MGNtVjBkWEp1SUcxdlpIVnNaUzVsZUhCdmNuUnpPMXh1ZlZ4dVhHNGlMQ0l2THlCblpYUkVaV1poZFd4MFJYaHdiM0owSUdaMWJtTjBhVzl1SUdadmNpQmpiMjF3WVhScFltbHNhWFI1SUhkcGRHZ2dibTl1TFdoaGNtMXZibmtnYlc5a2RXeGxjMXh1WDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dUlEMGdablZ1WTNScGIyNG9iVzlrZFd4bEtTQjdYRzVjZEhaaGNpQm5aWFIwWlhJZ1BTQnRiMlIxYkdVZ0ppWWdiVzlrZFd4bExsOWZaWE5OYjJSMWJHVWdQMXh1WEhSY2RHWjFibU4wYVc5dUtDa2dleUJ5WlhSMWNtNGdiVzlrZFd4bFd5ZGtaV1poZFd4MEoxMDdJSDBnT2x4dVhIUmNkR1oxYm1OMGFXOXVLQ2tnZXlCeVpYUjFjbTRnYlc5a2RXeGxPeUI5TzF4dVhIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbVFvWjJWMGRHVnlMQ0I3SUdFNklHZGxkSFJsY2lCOUtUdGNibHgwY21WMGRYSnVJR2RsZEhSbGNqdGNibjA3SWl3aUx5OGdaR1ZtYVc1bElHZGxkSFJsY2lCbWRXNWpkR2x2Ym5NZ1ptOXlJR2hoY20xdmJua2daWGh3YjNKMGMxeHVYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrSUQwZ1puVnVZM1JwYjI0b1pYaHdiM0owY3l3Z1pHVm1hVzVwZEdsdmJpa2dlMXh1WEhSbWIzSW9kbUZ5SUd0bGVTQnBiaUJrWldacGJtbDBhVzl1S1NCN1hHNWNkRngwYVdZb1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXZLR1JsWm1sdWFYUnBiMjRzSUd0bGVTa2dKaVlnSVY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJ5aGxlSEJ2Y25SekxDQnJaWGtwS1NCN1hHNWNkRngwWEhSUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29aWGh3YjNKMGN5d2dhMlY1TENCN0lHVnVkVzFsY21GaWJHVTZJSFJ5ZFdVc0lHZGxkRG9nWkdWbWFXNXBkR2x2Ymx0clpYbGRJSDBwTzF4dVhIUmNkSDFjYmx4MGZWeHVmVHNpTENKZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtOGdQU0JtZFc1amRHbHZiaWh2WW1vc0lIQnliM0FwSUhzZ2NtVjBkWEp1SUU5aWFtVmpkQzV3Y205MGIzUjVjR1V1YUdGelQzZHVVSEp2Y0dWeWRIa3VZMkZzYkNodlltb3NJSEJ5YjNBcE95QjlJaXdpTHk4Z1pHVm1hVzVsSUY5ZlpYTk5iMlIxYkdVZ2IyNGdaWGh3YjNKMGMxeHVYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV5SUQwZ1puVnVZM1JwYjI0b1pYaHdiM0owY3lrZ2UxeHVYSFJwWmloMGVYQmxiMllnVTNsdFltOXNJQ0U5UFNBbmRXNWtaV1pwYm1Wa0p5QW1KaUJUZVcxaWIyd3VkRzlUZEhKcGJtZFVZV2NwSUh0Y2JseDBYSFJQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb1pYaHdiM0owY3l3Z1UzbHRZbTlzTG5SdlUzUnlhVzVuVkdGbkxDQjdJSFpoYkhWbE9pQW5UVzlrZFd4bEp5QjlLVHRjYmx4MGZWeHVYSFJQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb1pYaHdiM0owY3l3Z0oxOWZaWE5OYjJSMWJHVW5MQ0I3SUhaaGJIVmxPaUIwY25WbElIMHBPMXh1ZlRzaUxDSWlMQ0l2THlCemRHRnlkSFZ3WEc0dkx5Qk1iMkZrSUdWdWRISjVJRzF2WkhWc1pTQmhibVFnY21WMGRYSnVJR1Y0Y0c5eWRITmNibDlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvWENJdUwzTnlZeTlxY3k5aGNIQXVhbk5jSWlrN1hHNHZMeUJVYUdseklHVnVkSEo1SUcxdlpIVnNaU0JwY3lCeVpXWmxjbVZ1WTJWa0lHSjVJRzkwYUdWeUlHMXZaSFZzWlhNZ2MyOGdhWFFnWTJGdUozUWdZbVVnYVc1c2FXNWxaRnh1WDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHloY0lpNHZjM0pqTDJwekwyMXZaSFZzWlhNdlkyOTFjbk5sTFdwaGRtRXRjMnhwWkdWeWN5NXFjMXdpS1R0Y2JsOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9YQ0l1TDNOeVl5OXFjeTl0YjJSMWJHVnpMMlpoY1MxaFkyTnZjbVJwYjI0dWFuTmNJaWs3WEc1ZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktGd2lMaTl6Y21NdmFuTXZiVzlrZFd4bGN5OXRiMkpwYkdVdGJXVnVkUzVxYzF3aUtUdGNiblpoY2lCZlgzZGxZbkJoWTJ0ZlpYaHdiM0owYzE5ZklEMGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWhjSWk0dmMzSmpMMnB6TDIxdlpIVnNaWE12ZEdsdFpXeHBibVV1YW5OY0lpazdYRzRpTENJaVhTd2libUZ0WlhNaU9sdGRMQ0p6YjNWeVkyVlNiMjkwSWpvaUluMD0ifQ==
