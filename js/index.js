/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 145:
/***/ (() => {

function checkVisibility() {
  const blocks = document.querySelectorAll('.animate-block');
  blocks.forEach(block => {
    const rect = block.getBoundingClientRect();
    const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
    if (isVisible && !block.classList.contains('animated')) {
      const delay = block.dataset.delay || 100;
      setTimeout(() => {
        block.classList.add('animated');
      }, delay);
    }
  });
}
window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);
const header = document.querySelector('header');
const toggleScrolledClass = () => {
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
};
window.addEventListener('scroll', toggleScrolledClass);
toggleScrolledClass();
document.querySelector('.mobile-menu-btn').onclick = function () {
  const mainMenu = document.querySelector('.main-menu');
  const menuButton = document.querySelector('.mobile-menu-btn');
  mainMenu.classList.toggle('show');
  menuButton.classList.toggle('active');
  function closeMenuOnClickOutside(event) {
    if (!mainMenu.contains(event.target) && !event.target.closest('.mobile-menu-btn')) {
      mainMenu.classList.remove('show');
      menuButton.classList.remove('active');
      document.body.style.overflow = '';
      document.removeEventListener('click', closeMenuOnClickOutside);
    }
  }
  if (mainMenu.classList.contains('show')) {
    document.body.style.overflow = 'hidden';
    document.addEventListener('click', closeMenuOnClickOutside);
  } else {
    document.body.style.overflow = '';
  }
};

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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(145);
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_script__WEBPACK_IMPORTED_MODULE_0__);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNpQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVVLHVCQUF1QixDQUFDO0VBQy9ELENBQUMsTUFBTTtJQUNIM0IsUUFBUSxDQUFDK0IsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFFBQVEsR0FBRyxFQUFFO0VBQ3JDO0FBQ0osQ0FBQzs7Ozs7O1VDekREO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zb3VyY2UvanMvc2NyaXB0LmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zb3VyY2UvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY2hlY2tWaXNpYmlsaXR5KCkge1xyXG4gICAgY29uc3QgYmxvY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFuaW1hdGUtYmxvY2snKTtcclxuXHJcbiAgICBibG9ja3MuZm9yRWFjaChibG9jayA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVjdCA9IGJsb2NrLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY29uc3QgaXNWaXNpYmxlID0gcmVjdC50b3AgPD0gd2luZG93LmlubmVySGVpZ2h0ICYmIHJlY3QuYm90dG9tID49IDA7XHJcblxyXG4gICAgaWYgKGlzVmlzaWJsZSAmJiAhYmxvY2suY2xhc3NMaXN0LmNvbnRhaW5zKCdhbmltYXRlZCcpKSB7XHJcbiAgICAgICAgY29uc3QgZGVsYXkgPSBibG9jay5kYXRhc2V0LmRlbGF5IHx8IDEwMDtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgYmxvY2suY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZWQnKTtcclxuICAgIH0sIGRlbGF5KTtcclxuICAgIH1cclxufSk7XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBjaGVja1Zpc2liaWxpdHkpO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGNoZWNrVmlzaWJpbGl0eSk7XHJcblxyXG5cclxuXHJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xyXG5cclxuY29uc3QgdG9nZ2xlU2Nyb2xsZWRDbGFzcyA9ICgpID0+IHtcclxuICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDApIHtcclxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbGVkJyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdG9nZ2xlU2Nyb2xsZWRDbGFzcyk7XHJcblxyXG50b2dnbGVTY3JvbGxlZENsYXNzKCk7XHJcblxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYmlsZS1tZW51LWJ0bicpLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBtYWluTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW1lbnUnKTtcclxuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9iaWxlLW1lbnUtYnRuJyk7XHJcbiAgICBtYWluTWVudS5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XHJcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNsb3NlTWVudU9uQ2xpY2tPdXRzaWRlKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKCFtYWluTWVudS5jb250YWlucyhldmVudC50YXJnZXQpICYmICFldmVudC50YXJnZXQuY2xvc2VzdCgnLm1vYmlsZS1tZW51LWJ0bicpKSB7XHJcbiAgICAgICAgICAgIG1haW5NZW51LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICAgICAgICAgICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTWVudU9uQ2xpY2tPdXRzaWRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1haW5NZW51LmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNZW51T25DbGlja091dHNpZGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcbiAgICB9XHJcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIlxuaW1wb3J0ICcuL3NjcmlwdCc7XG4iXSwibmFtZXMiOlsiY2hlY2tWaXNpYmlsaXR5IiwiYmxvY2tzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJsb2NrIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImlzVmlzaWJsZSIsInRvcCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiYm90dG9tIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJkZWxheSIsImRhdGFzZXQiLCJzZXRUaW1lb3V0IiwiYWRkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhlYWRlciIsInF1ZXJ5U2VsZWN0b3IiLCJ0b2dnbGVTY3JvbGxlZENsYXNzIiwic2Nyb2xsWSIsInJlbW92ZSIsIm9uY2xpY2siLCJtYWluTWVudSIsIm1lbnVCdXR0b24iLCJ0b2dnbGUiLCJjbG9zZU1lbnVPbkNsaWNrT3V0c2lkZSIsImV2ZW50IiwidGFyZ2V0IiwiY2xvc2VzdCIsImJvZHkiLCJzdHlsZSIsIm92ZXJmbG93IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=