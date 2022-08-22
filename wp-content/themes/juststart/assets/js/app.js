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

const swiper = new Swiper('.swiper', {
  direction: 'horizontal', 
  loop: true,
  slidePerView: 1,
  pagination: {
    el: '.swiper-pagination',
  },
})


console.log('swiper initializated pagg');

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ0w7QUFDVzs7Ozs7Ozs7Ozs7O0FDRnZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUN2QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsZUFBZSw0QkFBNEI7V0FDM0MsZUFBZTtXQUNmLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQSw4Q0FBOEM7Ozs7O1dDQTlDO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanVzdGlkZWEtdGVtcGxhdGUtdGhlbWUvLi9zcmMvanMvYXBwLmpzIiwid2VicGFjazovL2p1c3RpZGVhLXRlbXBsYXRlLXRoZW1lLy4vc3JjL2pzL21vZHVsZXMvY291cnNlLWphdmEtc2xpZGVycy5qcyIsIndlYnBhY2s6Ly9qdXN0aWRlYS10ZW1wbGF0ZS10aGVtZS8uL3NyYy9qcy9tb2R1bGVzL2ZhcS1hY2NvcmRpb24uanMiLCJ3ZWJwYWNrOi8vanVzdGlkZWEtdGVtcGxhdGUtdGhlbWUvLi9zcmMvanMvbW9kdWxlcy9tb2JpbGUtbWVudS5qcyIsIndlYnBhY2s6Ly9qdXN0aWRlYS10ZW1wbGF0ZS10aGVtZS8uL3NyYy9qcy9tb2R1bGVzL3RpbWVsaW5lLmpzIiwid2VicGFjazovL2p1c3RpZGVhLXRlbXBsYXRlLXRoZW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2p1c3RpZGVhLXRlbXBsYXRlLXRoZW1lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2p1c3RpZGVhLXRlbXBsYXRlLXRoZW1lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qdXN0aWRlYS10ZW1wbGF0ZS10aGVtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2p1c3RpZGVhLXRlbXBsYXRlLXRoZW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanVzdGlkZWEtdGVtcGxhdGUtdGhlbWUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9qdXN0aWRlYS10ZW1wbGF0ZS10aGVtZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vanVzdGlkZWEtdGVtcGxhdGUtdGhlbWUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vbW9kdWxlcy9mYXEtYWNjb3JkaW9uXCI7XG5pbXBvcnQgXCIuL21vZHVsZXMvdGltZWxpbmVcIjtcbmltcG9ydCBcIi4vbW9kdWxlcy9jb3Vyc2UtamF2YS1zbGlkZXJzXCI7XG5cbiIsImNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXInLCB7XHJcbiAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsIFxyXG4gIGxvb3A6IHRydWUsXHJcbiAgc2xpZGVQZXJWaWV3OiAxLFxyXG4gIHBhZ2luYXRpb246IHtcclxuICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuICB9LFxyXG59KVxyXG5cclxuXHJcbmNvbnNvbGUubG9nKCdzd2lwZXIgaW5pdGlhbGl6YXRlZCBwYWdnJyk7IiwiY29uc3QgYWxsRmFxRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZhcS1lbGVtZW50XCIpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZU9wZW4oZSkge1xyXG4gIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICBjb25zdCBjdXJyZW50RWxlbWVudCA9IGUuY3VycmVudFRhcmdldDtcclxuXHJcbiAgY3VycmVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xyXG59XHJcblxyXG5pZiAoYWxsRmFxRWwubGVuZ3RoID4gMCkge1xyXG4gIGFsbEZhcUVsLmZvckVhY2goZWwgPT4ge1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVPcGVuKTtcclxuICB9KVxyXG59XHJcbiIsImNvbnN0IGhhbWJ1cmdlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXJfX2J1dHRvbicpO1xyXG5jb25zdCBtb2JpbGVNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1idXJnZXInKTtcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZU5hdk9wZW4oKXtcclxuICBjb25zdCBpc0Nsb3NlZCA9IG1vYmlsZU1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdjbG9zZWQnKTtcclxuICBjb25zdCBpc09wZW4gPSBtb2JpbGVNZW51LmNsYXNzTGlzdC5jb250YWlucygnb3BlbmVkJyk7XHJcblxyXG4gIGlmKGlzQ2xvc2VkKXtcclxuICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImNsb3NlZFwiKTtcclxuICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LmFkZChcIm9wZW5lZFwiKTtcclxuXHJcbiAgfVxyXG4gIGlmKGlzT3Blbil7XHJcbiAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuZWRcIik7XHJcbiAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC5hZGQoXCJjbG9zZWRcIik7XHJcbiAgfVxyXG59XHJcblxyXG5oYW1idXJnZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVOYXZPcGVuKTsiLCJjb25zdCB0aW1lbGluZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lbGluZV9fYnRuJyk7XHJcblxyXG5jb25zdCBzaG93SGlkZGVuSXRlbXMgPSBpdGVtcyA9PiBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKSk7XHJcblxyXG5jb25zdCBjaGFuZ2VCdG5UZXh0ID0gKCkgPT4ge1xyXG4gIGlmICh0aW1lbGluZUJ0bi50ZXh0Q29udGVudCA9PSBcIlJvendpxYRcIikge1xyXG4gICAgdGltZWxpbmVCdG4udGV4dENvbnRlbnQgPSBcIlp3acWEXCJcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICB0aW1lbGluZUJ0bi50ZXh0Q29udGVudCA9IFwiUm96d2nFhFwiO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlVGltZWxpbmVDb2xhcHNlKCkge1xyXG4gIGNvbnN0IGhpZGRlbkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRpbWVsaW5lLWl0ZW0uaGlkZGVuJyk7XHJcblxyXG4gIHNob3dIaWRkZW5JdGVtcyhoaWRkZW5JdGVtcyk7XHJcblxyXG4gIGNoYW5nZUJ0blRleHQoKTtcclxufVxyXG5cclxuaWYgKHRpbWVsaW5lQnRuKSB7XHJcbiAgdGltZWxpbmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVUaW1lbGluZUNvbGFwc2UpXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IixudWxsLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9qcy9hcHAuanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2pzL21vZHVsZXMvY291cnNlLWphdmEtc2xpZGVycy5qc1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9qcy9tb2R1bGVzL2ZhcS1hY2NvcmRpb24uanNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvanMvbW9kdWxlcy9tb2JpbGUtbWVudS5qc1wiKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2pzL21vZHVsZXMvdGltZWxpbmUuanNcIik7XG4iLG51bGxdLCJuYW1lcyI6W10sInByZUV4aXN0aW5nQ29tbWVudCI6Ii8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYldGcGJpNXFjeUlzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdPenM3T3p0QlFVRnBRenRCUVVOTU8wRkJRMWM3T3pzN096czdPenM3T3p0QlEwWjJRenRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnc1EwRkJRenRCUVVORU8wRkJRMEU3UVVGRFFUczdPenM3T3pzN096dEJRMVpCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU96czdPenM3T3pzN096dEJRMlJCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN096czdPenM3TzBGRGJFSkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdPenM3TzFWRGRrSkJPMVZCUTBFN08xVkJSVUU3VlVGRFFUdFZRVU5CTzFWQlEwRTdWVUZEUVR0VlFVTkJPMVZCUTBFN1ZVRkRRVHRWUVVOQk8xVkJRMEU3VlVGRFFUdFZRVU5CTzFWQlEwRTdPMVZCUlVFN1ZVRkRRVHM3VlVGRlFUdFZRVU5CTzFWQlEwRTdPenM3TzFkRGRFSkJPMWRCUTBFN1YwRkRRVHRYUVVOQkxHVkJRV1VzTkVKQlFUUkNPMWRCUXpORExHVkJRV1U3VjBGRFppeHBRMEZCYVVNc1YwRkJWenRYUVVNMVF6dFhRVU5CT3pzN096dFhRMUJCTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFc2VVTkJRWGxETEhkRFFVRjNRenRYUVVOcVJqdFhRVU5CTzFkQlEwRTdPenM3TzFkRFVFRXNPRU5CUVRoRE96czdPenRYUTBFNVF6dFhRVU5CTzFkQlEwRTdWMEZEUVN4MVJFRkJkVVFzYVVKQlFXbENPMWRCUTNoRk8xZEJRMEVzWjBSQlFXZEVMR0ZCUVdFN1YwRkROMFE3T3pzN08xVkZUa0U3VlVGRFFUdFZRVU5CTzFWQlEwRTdWVUZEUVR0VlFVTkJPMVZCUTBFN1ZVRkRRU0lzSW5OdmRYSmpaWE1pT2xzaWQyVmljR0ZqYXpvdkwycDFjM1JwWkdWaExYUmxiWEJzWVhSbExYUm9aVzFsTHk0dmMzSmpMMnB6TDJGd2NDNXFjeUlzSW5kbFluQmhZMnM2THk5cWRYTjBhV1JsWVMxMFpXMXdiR0YwWlMxMGFHVnRaUzh1TDNOeVl5OXFjeTl0YjJSMWJHVnpMMk52ZFhKelpTMXFZWFpoTFhOc2FXUmxjbk11YW5NaUxDSjNaV0p3WVdOck9pOHZhblZ6ZEdsa1pXRXRkR1Z0Y0d4aGRHVXRkR2hsYldVdkxpOXpjbU12YW5NdmJXOWtkV3hsY3k5bVlYRXRZV05qYjNKa2FXOXVMbXB6SWl3aWQyVmljR0ZqYXpvdkwycDFjM1JwWkdWaExYUmxiWEJzWVhSbExYUm9aVzFsTHk0dmMzSmpMMnB6TDIxdlpIVnNaWE12Ylc5aWFXeGxMVzFsYm5VdWFuTWlMQ0ozWldKd1lXTnJPaTh2YW5WemRHbGtaV0V0ZEdWdGNHeGhkR1V0ZEdobGJXVXZMaTl6Y21NdmFuTXZiVzlrZFd4bGN5OTBhVzFsYkdsdVpTNXFjeUlzSW5kbFluQmhZMnM2THk5cWRYTjBhV1JsWVMxMFpXMXdiR0YwWlMxMGFHVnRaUzkzWldKd1lXTnJMMkp2YjNSemRISmhjQ0lzSW5kbFluQmhZMnM2THk5cWRYTjBhV1JsWVMxMFpXMXdiR0YwWlMxMGFHVnRaUzkzWldKd1lXTnJMM0oxYm5ScGJXVXZZMjl0Y0dGMElHZGxkQ0JrWldaaGRXeDBJR1Y0Y0c5eWRDSXNJbmRsWW5CaFkyczZMeTlxZFhOMGFXUmxZUzEwWlcxd2JHRjBaUzEwYUdWdFpTOTNaV0p3WVdOckwzSjFiblJwYldVdlpHVm1hVzVsSUhCeWIzQmxjblI1SUdkbGRIUmxjbk1pTENKM1pXSndZV05yT2k4dmFuVnpkR2xrWldFdGRHVnRjR3hoZEdVdGRHaGxiV1V2ZDJWaWNHRmpheTl5ZFc1MGFXMWxMMmhoYzA5M2JsQnliM0JsY25SNUlITm9iM0owYUdGdVpDSXNJbmRsWW5CaFkyczZMeTlxZFhOMGFXUmxZUzEwWlcxd2JHRjBaUzEwYUdWdFpTOTNaV0p3WVdOckwzSjFiblJwYldVdmJXRnJaU0J1WVcxbGMzQmhZMlVnYjJKcVpXTjBJaXdpZDJWaWNHRmphem92TDJwMWMzUnBaR1ZoTFhSbGJYQnNZWFJsTFhSb1pXMWxMM2RsWW5CaFkyc3ZZbVZtYjNKbExYTjBZWEowZFhBaUxDSjNaV0p3WVdOck9pOHZhblZ6ZEdsa1pXRXRkR1Z0Y0d4aGRHVXRkR2hsYldVdmQyVmljR0ZqYXk5emRHRnlkSFZ3SWl3aWQyVmljR0ZqYXpvdkwycDFjM1JwWkdWaExYUmxiWEJzWVhSbExYUm9aVzFsTDNkbFluQmhZMnN2WVdaMFpYSXRjM1JoY25SMWNDSmRMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdYQ0l1TDIxdlpIVnNaWE12Wm1GeExXRmpZMjl5WkdsdmJsd2lPMXh1YVcxd2IzSjBJRndpTGk5dGIyUjFiR1Z6TDNScGJXVnNhVzVsWENJN1hHNXBiWEJ2Y25RZ1hDSXVMMjF2WkhWc1pYTXZZMjkxY25ObExXcGhkbUV0YzJ4cFpHVnljMXdpTzF4dVhHNGlMQ0pqYjI1emRDQnpkMmx3WlhJZ1BTQnVaWGNnVTNkcGNHVnlLQ2N1YzNkcGNHVnlKeXdnZTF4eVhHNGdJR1JwY21WamRHbHZiam9nSjJodmNtbDZiMjUwWVd3bkxDQmNjbHh1SUNCc2IyOXdPaUIwY25WbExGeHlYRzRnSUhOc2FXUmxVR1Z5Vm1sbGR6b2dNU3hjY2x4dUlDQndZV2RwYm1GMGFXOXVPaUI3WEhKY2JpQWdJQ0JsYkRvZ0p5NXpkMmx3WlhJdGNHRm5hVzVoZEdsdmJpY3NYSEpjYmlBZ2ZTeGNjbHh1ZlNsY2NseHVYSEpjYmx4eVhHNWpiMjV6YjJ4bExteHZaeWduYzNkcGNHVnlJR2x1YVhScFlXeHBlbUYwWldRZ2NHRm5aeWNwT3lJc0ltTnZibk4wSUdGc2JFWmhjVVZzSUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZja0ZzYkNoY0lpNW1ZWEV0Wld4bGJXVnVkRndpS1R0Y2NseHVYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQm9ZVzVrYkdWUGNHVnVLR1VwSUh0Y2NseHVJQ0JsTG5OMGIzQlFjbTl3WVdkaGRHbHZiaWdwWEhKY2JpQWdZMjl1YzNRZ1kzVnljbVZ1ZEVWc1pXMWxiblFnUFNCbExtTjFjbkpsYm5SVVlYSm5aWFE3WEhKY2JseHlYRzRnSUdOMWNuSmxiblJGYkdWdFpXNTBMbU5zWVhOelRHbHpkQzUwYjJkbmJHVW9KMjl3Wlc0bktUdGNjbHh1ZlZ4eVhHNWNjbHh1YVdZZ0tHRnNiRVpoY1VWc0xteGxibWQwYUNBK0lEQXBJSHRjY2x4dUlDQmhiR3hHWVhGRmJDNW1iM0pGWVdOb0tHVnNJRDArSUh0Y2NseHVJQ0FnSUdWc0xtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0oyTnNhV05ySnl3Z2FHRnVaR3hsVDNCbGJpazdYSEpjYmlBZ2ZTbGNjbHh1ZlZ4eVhHNGlMQ0pqYjI1emRDQm9ZVzFpZFhKblpYSkNkRzRnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2N1YUdGdFluVnlaMlZ5WDE5aWRYUjBiMjRuS1R0Y2NseHVZMjl1YzNRZ2JXOWlhV3hsVFdWdWRTQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5NW9aV0ZrWlhJdFluVnlaMlZ5SnlrN1hISmNibHh5WEc1bWRXNWpkR2x2YmlCb1lXNWtiR1ZPWVhaUGNHVnVLQ2w3WEhKY2JpQWdZMjl1YzNRZ2FYTkRiRzl6WldRZ1BTQnRiMkpwYkdWTlpXNTFMbU5zWVhOelRHbHpkQzVqYjI1MFlXbHVjeWduWTJ4dmMyVmtKeWs3WEhKY2JpQWdZMjl1YzNRZ2FYTlBjR1Z1SUQwZ2JXOWlhV3hsVFdWdWRTNWpiR0Z6YzB4cGMzUXVZMjl1ZEdGcGJuTW9KMjl3Wlc1bFpDY3BPMXh5WEc1Y2NseHVJQ0JwWmlocGMwTnNiM05sWkNsN1hISmNiaUFnSUNCdGIySnBiR1ZOWlc1MUxtTnNZWE56VEdsemRDNXlaVzF2ZG1Vb1hDSmpiRzl6WldSY0lpazdYSEpjYmlBZ0lDQnRiMkpwYkdWTlpXNTFMbU5zWVhOelRHbHpkQzVoWkdRb1hDSnZjR1Z1WldSY0lpazdYSEpjYmx4eVhHNGdJSDFjY2x4dUlDQnBaaWhwYzA5d1pXNHBlMXh5WEc0Z0lDQWdiVzlpYVd4bFRXVnVkUzVqYkdGemMweHBjM1F1Y21WdGIzWmxLRndpYjNCbGJtVmtYQ0lwTzF4eVhHNGdJQ0FnYlc5aWFXeGxUV1Z1ZFM1amJHRnpjMHhwYzNRdVlXUmtLRndpWTJ4dmMyVmtYQ0lwTzF4eVhHNGdJSDFjY2x4dWZWeHlYRzVjY2x4dWFHRnRZblZ5WjJWeVFuUnVMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMk5zYVdOckp5d2dhR0Z1Wkd4bFRtRjJUM0JsYmlrN0lpd2lZMjl1YzNRZ2RHbHRaV3hwYm1WQ2RHNGdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDY3VkR2x0Wld4cGJtVmZYMkowYmljcE8xeHlYRzVjY2x4dVkyOXVjM1FnYzJodmQwaHBaR1JsYmtsMFpXMXpJRDBnYVhSbGJYTWdQVDRnYVhSbGJYTXVabTl5UldGamFDaHBkR1Z0SUQwK0lHbDBaVzB1WTJ4aGMzTk1hWE4wTG5KbGJXOTJaU2duYUdsa1pHVnVKeWtwTzF4eVhHNWNjbHh1WTI5dWMzUWdZMmhoYm1kbFFuUnVWR1Y0ZENBOUlDZ3BJRDArSUh0Y2NseHVJQ0JwWmlBb2RHbHRaV3hwYm1WQ2RHNHVkR1Y0ZEVOdmJuUmxiblFnUFQwZ1hDSlNiM3AzYWNXRVhDSXBJSHRjY2x4dUlDQWdJSFJwYldWc2FXNWxRblJ1TG5SbGVIUkRiMjUwWlc1MElEMGdYQ0phZDJuRmhGd2lYSEpjYmlBZ2ZWeHlYRzRnSUdWc2MyVWdlMXh5WEc0Z0lDQWdkR2x0Wld4cGJtVkNkRzR1ZEdWNGRFTnZiblJsYm5RZ1BTQmNJbEp2ZW5kcHhZUmNJanRjY2x4dUlDQjlYSEpjYm4xY2NseHVYSEpjYm1aMWJtTjBhVzl1SUdoaGJtUnNaVlJwYldWc2FXNWxRMjlzWVhCelpTZ3BJSHRjY2x4dUlDQmpiMjV6ZENCb2FXUmtaVzVKZEdWdGN5QTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNKQmJHd29KeTUwYVcxbGJHbHVaUzFwZEdWdExtaHBaR1JsYmljcE8xeHlYRzVjY2x4dUlDQnphRzkzU0dsa1pHVnVTWFJsYlhNb2FHbGtaR1Z1U1hSbGJYTXBPMXh5WEc1Y2NseHVJQ0JqYUdGdVoyVkNkRzVVWlhoMEtDazdYSEpjYm4xY2NseHVYSEpjYm1sbUlDaDBhVzFsYkdsdVpVSjBiaWtnZTF4eVhHNGdJSFJwYldWc2FXNWxRblJ1TG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJOc2FXTnJKeXdnYUdGdVpHeGxWR2x0Wld4cGJtVkRiMnhoY0hObEtWeHlYRzU5SWl3aUx5OGdWR2hsSUcxdlpIVnNaU0JqWVdOb1pWeHVkbUZ5SUY5ZmQyVmljR0ZqYTE5dGIyUjFiR1ZmWTJGamFHVmZYeUE5SUh0OU8xeHVYRzR2THlCVWFHVWdjbVZ4ZFdseVpTQm1kVzVqZEdsdmJseHVablZ1WTNScGIyNGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWh0YjJSMWJHVkpaQ2tnZTF4dVhIUXZMeUJEYUdWamF5QnBaaUJ0YjJSMWJHVWdhWE1nYVc0Z1kyRmphR1ZjYmx4MGRtRnlJR05oWTJobFpFMXZaSFZzWlNBOUlGOWZkMlZpY0dGamExOXRiMlIxYkdWZlkyRmphR1ZmWDF0dGIyUjFiR1ZKWkYwN1hHNWNkR2xtSUNoallXTm9aV1JOYjJSMWJHVWdJVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVYSFJjZEhKbGRIVnliaUJqWVdOb1pXUk5iMlIxYkdVdVpYaHdiM0owY3p0Y2JseDBmVnh1WEhRdkx5QkRjbVZoZEdVZ1lTQnVaWGNnYlc5a2RXeGxJQ2hoYm1RZ2NIVjBJR2wwSUdsdWRHOGdkR2hsSUdOaFkyaGxLVnh1WEhSMllYSWdiVzlrZFd4bElEMGdYMTkzWldKd1lXTnJYMjF2WkhWc1pWOWpZV05vWlY5ZlcyMXZaSFZzWlVsa1hTQTlJSHRjYmx4MFhIUXZMeUJ1YnlCdGIyUjFiR1V1YVdRZ2JtVmxaR1ZrWEc1Y2RGeDBMeThnYm04Z2JXOWtkV3hsTG14dllXUmxaQ0J1WldWa1pXUmNibHgwWEhSbGVIQnZjblJ6T2lCN2ZWeHVYSFI5TzF4dVhHNWNkQzh2SUVWNFpXTjFkR1VnZEdobElHMXZaSFZzWlNCbWRXNWpkR2x2Ymx4dVhIUmZYM2RsWW5CaFkydGZiVzlrZFd4bGMxOWZXMjF2WkhWc1pVbGtYU2h0YjJSMWJHVXNJRzF2WkhWc1pTNWxlSEJ2Y25SekxDQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLVHRjYmx4dVhIUXZMeUJTWlhSMWNtNGdkR2hsSUdWNGNHOXlkSE1nYjJZZ2RHaGxJRzF2WkhWc1pWeHVYSFJ5WlhSMWNtNGdiVzlrZFd4bExtVjRjRzl5ZEhNN1hHNTlYRzVjYmlJc0lpOHZJR2RsZEVSbFptRjFiSFJGZUhCdmNuUWdablZ1WTNScGIyNGdabTl5SUdOdmJYQmhkR2xpYVd4cGRIa2dkMmwwYUNCdWIyNHRhR0Z5Ylc5dWVTQnRiMlIxYkdWelhHNWZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbTRnUFNCbWRXNWpkR2x2YmlodGIyUjFiR1VwSUh0Y2JseDBkbUZ5SUdkbGRIUmxjaUE5SUcxdlpIVnNaU0FtSmlCdGIyUjFiR1V1WDE5bGMwMXZaSFZzWlNBL1hHNWNkRngwWm5WdVkzUnBiMjRvS1NCN0lISmxkSFZ5YmlCdGIyUjFiR1ZiSjJSbFptRjFiSFFuWFRzZ2ZTQTZYRzVjZEZ4MFpuVnVZM1JwYjI0b0tTQjdJSEpsZEhWeWJpQnRiMlIxYkdVN0lIMDdYRzVjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDaG5aWFIwWlhJc0lIc2dZVG9nWjJWMGRHVnlJSDBwTzF4dVhIUnlaWFIxY200Z1oyVjBkR1Z5TzF4dWZUc2lMQ0l2THlCa1pXWnBibVVnWjJWMGRHVnlJR1oxYm1OMGFXOXVjeUJtYjNJZ2FHRnliVzl1ZVNCbGVIQnZjblJ6WEc1ZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtUWdQU0JtZFc1amRHbHZiaWhsZUhCdmNuUnpMQ0JrWldacGJtbDBhVzl1S1NCN1hHNWNkR1p2Y2loMllYSWdhMlY1SUdsdUlHUmxabWx1YVhScGIyNHBJSHRjYmx4MFhIUnBaaWhmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG04b1pHVm1hVzVwZEdsdmJpd2dhMlY1S1NBbUppQWhYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV2S0dWNGNHOXlkSE1zSUd0bGVTa3BJSHRjYmx4MFhIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENCclpYa3NJSHNnWlc1MWJXVnlZV0pzWlRvZ2RISjFaU3dnWjJWME9pQmtaV1pwYm1sMGFXOXVXMnRsZVYwZ2ZTazdYRzVjZEZ4MGZWeHVYSFI5WEc1OU95SXNJbDlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YnlBOUlHWjFibU4wYVc5dUtHOWlhaXdnY0hKdmNDa2dleUJ5WlhSMWNtNGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNW9ZWE5QZDI1UWNtOXdaWEowZVM1allXeHNLRzlpYWl3Z2NISnZjQ2s3SUgwaUxDSXZMeUJrWldacGJtVWdYMTlsYzAxdlpIVnNaU0J2YmlCbGVIQnZjblJ6WEc1ZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuSWdQU0JtZFc1amRHbHZiaWhsZUhCdmNuUnpLU0I3WEc1Y2RHbG1LSFI1Y0dWdlppQlRlVzFpYjJ3Z0lUMDlJQ2QxYm1SbFptbHVaV1FuSUNZbUlGTjViV0p2YkM1MGIxTjBjbWx1WjFSaFp5a2dlMXh1WEhSY2RFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hsZUhCdmNuUnpMQ0JUZVcxaWIyd3VkRzlUZEhKcGJtZFVZV2NzSUhzZ2RtRnNkV1U2SUNkTmIyUjFiR1VuSUgwcE8xeHVYSFI5WEc1Y2RFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hsZUhCdmNuUnpMQ0FuWDE5bGMwMXZaSFZzWlNjc0lIc2dkbUZzZFdVNklIUnlkV1VnZlNrN1hHNTlPeUlzSWlJc0lpOHZJSE4wWVhKMGRYQmNiaTh2SUV4dllXUWdaVzUwY25rZ2JXOWtkV3hsSUdGdVpDQnlaWFIxY200Z1pYaHdiM0owYzF4dVgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aGNJaTR2YzNKakwycHpMMkZ3Y0M1cWMxd2lLVHRjYmk4dklGUm9hWE1nWlc1MGNua2diVzlrZFd4bElHbHpJSEpsWm1WeVpXNWpaV1FnWW5rZ2IzUm9aWElnYlc5a2RXeGxjeUJ6YnlCcGRDQmpZVzRuZENCaVpTQnBibXhwYm1Wa1hHNWZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLRndpTGk5emNtTXZhbk12Ylc5a2RXeGxjeTlqYjNWeWMyVXRhbUYyWVMxemJHbGtaWEp6TG1welhDSXBPMXh1WDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHloY0lpNHZjM0pqTDJwekwyMXZaSFZzWlhNdlptRnhMV0ZqWTI5eVpHbHZiaTVxYzF3aUtUdGNibDlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvWENJdUwzTnlZeTlxY3k5dGIyUjFiR1Z6TDIxdlltbHNaUzF0Wlc1MUxtcHpYQ0lwTzF4dWRtRnlJRjlmZDJWaWNHRmphMTlsZUhCdmNuUnpYMThnUFNCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktGd2lMaTl6Y21NdmFuTXZiVzlrZFd4bGN5OTBhVzFsYkdsdVpTNXFjMXdpS1R0Y2JpSXNJaUpkTENKdVlXMWxjeUk2VzEwc0luTnZkWEpqWlZKdmIzUWlPaUlpZlE9PSJ9
