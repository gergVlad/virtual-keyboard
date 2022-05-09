/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys.js */ \"./js/keys.js\");\n\r\n\r\nlet lang = 'en';\r\nlet capsLock = false;\r\nconst body = document.body;\r\nconst main = document.createElement('main');\r\nconst container = document.createElement('div');\r\ncontainer.classList.add('container');\r\nconst textArea = document.createElement('textarea');\r\ntextArea.classList.add('text');\r\nconst keyboard = document.createElement('div');\r\nkeyboard.classList.add('keyboard_wrapp');\r\nconst title = document.createElement('h1');\r\ntitle.textContent = 'RSS Виртуальная клавиатура';\r\nconst descriptin = document.createElement('p');\r\ndescriptin.classList.add('descriptin');\r\ndescriptin.textContent = 'Клавиатура создана в операционной системе Windows';\r\nconst language = document.createElement('p');\r\nlanguage.classList.add('language');\r\nlanguage.textContent = 'Для переключения языка комбинация: левыe ctrl + alt';;\r\n\r\n\r\nbody.append(main);\r\nmain.append(container);\r\ncontainer.append(title);\r\ncontainer.append(textArea);\r\ncontainer.append(keyboard);\r\ncontainer.append(descriptin);\r\ncontainer.append(language);\r\n\r\nfunction renderKeys(langValue, capsLock) {\r\n    _keys_js__WEBPACK_IMPORTED_MODULE_0__.keys.forEach((item, i) => {\r\n        const span = document.createElement('span');\r\n        span.classList.add('keys');\r\n        if (item.en == 'Backspace') {\r\n            span.classList.add('backspace_key');\r\n        } else if (item.en == 'Tab') {\r\n            span.classList.add('tab_key');\r\n        } else if (item.en == '/') {\r\n            span.classList.add('slash_key');\r\n        } else if (item.en == 'Caps Lock') {\r\n            span.classList.add('caps_lock_key');\r\n        } else if (item.en == 'Enter') {\r\n            span.classList.add('enter_key');\r\n        } else if (item.en == 'Shift') {\r\n            span.classList.add('shift_key');\r\n        } else if (item.en == 'Space') {\r\n            span.classList.add('space_key');\r\n        }\r\n\r\n        if (capsLock && (item.en != 'Backspace')) {\r\n            span.textContent = item[langValue].toUpperCase();\r\n        } else {\r\n            span.textContent = item[langValue];\r\n        }\r\n        keyboard.append(span);\r\n    });\r\n}\r\n\r\nrenderKeys(lang, capsLock);\r\n\r\n\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./js/keys.js":
/*!********************!*\
  !*** ./js/keys.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"keys\": () => (/* binding */ keys)\n/* harmony export */ });\nconst keys = [\r\n    {\r\n        \"en\": \"`\",\r\n        \"ru\": \"ё\",\r\n        \"shift\": \"~\",\r\n        \"keyCode\": 192\r\n    },\r\n    {\r\n        \"en\": \"1\",\r\n        \"ru\": \"1\",\r\n        \"shift\": \"!\",\r\n        \"keyCode\": 49\r\n    },\r\n    {\r\n        \"en\": \"2\",\r\n        \"ru\": \"2\",\r\n        \"shift\": \"@\",\r\n        \"keyCode\": 50\r\n    },\r\n    {\r\n        \"en\": \"3\",\r\n        \"ru\": \"3\",\r\n        \"shift\": \"#\",\r\n        \"keyCode\": 51\r\n    },\r\n    {\r\n        \"en\": \"4\",\r\n        \"ru\": \"4\",\r\n        \"shift\": \"$\",\r\n        \"keyCode\": 52\r\n    },\r\n    {\r\n        \"en\": \"5\",\r\n        \"ru\": \"5\",\r\n        \"shift\": \"%\",\r\n        \"keyCode\": 53\r\n    },\r\n    {\r\n        \"en\": \"6\",\r\n        \"ru\": \"6\",\r\n        \"shift\": \"^\",\r\n        \"keyCode\": 54\r\n    },\r\n    {\r\n        \"en\": \"7\",\r\n        \"ru\": \"7\",\r\n        \"shift\": \"&\",\r\n        \"keyCode\": 55\r\n    },\r\n    {\r\n        \"en\": \"8\",\r\n        \"ru\": \"8\",\r\n        \"shift\": \"*\",\r\n        \"keyCode\": 56\r\n    },\r\n    {\r\n        \"en\": \"9\",\r\n        \"ru\": \"9\",\r\n        \"shift\": \"(\",\r\n        \"keyCode\": 57\r\n    },\r\n    {\r\n        \"en\": \"0\",\r\n        \"ru\": \"0\",\r\n        \"shift\": \")\",\r\n        \"keyCode\": 48\r\n    },\r\n    {\r\n        \"en\": \"-\",\r\n        \"ru\": \"-\",\r\n        \"shift\": \"_\",\r\n        \"keyCode\": 109\r\n    },\r\n    {\r\n        \"en\": \"=\",\r\n        \"ru\": \"=\",\r\n        \"shift\": \"+\",\r\n        \"keyCode\": 61\r\n    },\r\n    {\r\n        \"en\": \"Backspace\",\r\n        \"ru\": \"Backspace\",\r\n        \"keyCode\": 8\r\n    },\r\n    {\r\n        \"en\": \"Tab\",\r\n        \"ru\": \"Tab\",\r\n        \"keyCode\": 9\r\n    },\r\n    {\r\n        \"en\": \"q\",\r\n        \"ru\": \"й\",\r\n        \"keyCode\": 81\r\n    },\r\n    {\r\n        \"en\": \"w\",\r\n        \"ru\": \"ц\",\r\n        \"keyCode\": 87\r\n    },\r\n    {\r\n        \"en\": \"e\",\r\n        \"ru\": \"у\",\r\n        \"keyCode\": 69\r\n    },\r\n    {\r\n        \"en\": \"r\",\r\n        \"ru\": \"к\",\r\n        \"keyCode\": 82\r\n    },\r\n    {\r\n        \"en\": \"t\",\r\n        \"ru\": \"е\",\r\n        \"keyCode\": 84\r\n    },\r\n    {\r\n        \"en\": \"y\",\r\n        \"ru\": \"н\",\r\n        \"keyCode\": 89\r\n    },\r\n    {\r\n        \"en\": \"u\",\r\n        \"ru\": \"г\",\r\n        \"keyCode\": 85\r\n    },\r\n    {\r\n        \"en\": \"i\",\r\n        \"ru\": \"ш\",\r\n        \"keyCode\": 73\r\n    },\r\n    {\r\n        \"en\": \"o\",\r\n        \"ru\": \"щ\",\r\n        \"keyCode\": 79\r\n    },\r\n    {\r\n        \"en\": \"p\",\r\n        \"ru\": \"з\",\r\n        \"keyCode\": 80\r\n    },\r\n    {\r\n        \"en\": \"[\",\r\n        \"ru\": \"х\",\r\n        \"shift\": \"{\",\r\n        \"keyCode\": 160\r\n    },\r\n    {\r\n        \"en\": \"]\",\r\n        \"ru\": \"ъ\",\r\n        \"shift\": \"}\",\r\n        \"keyCode\": 221\r\n    },\r\n    {\r\n        \"en\": \"\\\\\",\r\n        \"ru\": \"\\\\\",\r\n        \"shift\": \"|\",\r\n        \"keyCode\": 220\r\n    },\r\n    {\r\n        \"en\": \"Del\",\r\n        \"ru\": \"Del\",\r\n        \"keyCode\": 46\r\n    },\r\n    {\r\n        \"en\": \"Caps Lock\",\r\n        \"ru\": \"Caps Lock\",\r\n        \"keyCode\": 20\r\n    },\r\n    {\r\n        \"en\": \"a\",\r\n        \"ru\": \"ф\",\r\n        \"keyCode\": 65\r\n    },\r\n    {\r\n        \"en\": \"s\",\r\n        \"ru\": \"ы\",\r\n        \"keyCode\": 83\r\n    },\r\n    {\r\n        \"en\": \"d\",\r\n        \"ru\": \"в\",\r\n        \"keyCode\": 68\r\n    },\r\n    {\r\n        \"en\": \"f\",\r\n        \"ru\": \"а\",\r\n        \"keyCode\": 70\r\n    },\r\n    {\r\n        \"en\": \"g\",\r\n        \"ru\": \"п\",\r\n        \"keyCode\": 71\r\n    },\r\n    {\r\n        \"en\": \"h\",\r\n        \"ru\": \"р\",\r\n        \"keyCode\": 72\r\n    },\r\n    {\r\n        \"en\": \"j\",\r\n        \"ru\": \"о\",\r\n        \"keyCode\": 74\r\n    },\r\n    {\r\n        \"en\": \"k\",\r\n        \"ru\": \"л\",\r\n        \"keyCode\": 75\r\n    },\r\n    {\r\n        \"en\": \"l\",\r\n        \"ru\": \"д\",\r\n        \"keyCode\": 76\r\n    },\r\n    {\r\n        \"en\": \";\",\r\n        \"ru\": \"ж\",\r\n        \"shift\": \":\",\r\n        \"keyCode\": 59\r\n    },\r\n    {\r\n        \"en\": \"'\",\r\n        \"ru\": \"э\",\r\n        \"shift\": \"\\\"\",\r\n        \"keyCode\": 222\r\n    },\r\n    {\r\n        \"en\": \"Enter\",\r\n        \"ru\": \"Enter\",\r\n        \"keyCode\": 13\r\n    },\r\n    {\r\n        \"en\": \"Shift\",\r\n        \"ru\": \"Shift\",\r\n        \"keyCode\": 16\r\n    },\r\n    {\r\n        \"en\": \"z\",\r\n        \"ru\": \"я\",\r\n        \"keyCode\": 90\r\n    },\r\n    {\r\n        \"en\": \"x\",\r\n        \"ru\": \"ч\",\r\n        \"keyCode\": 88\r\n    },\r\n    {\r\n        \"en\": \"c\",\r\n        \"ru\": \"с\",\r\n        \"keyCode\": 67\r\n    },\r\n    {\r\n        \"en\": \"v\",\r\n        \"ru\": \"м\",\r\n        \"keyCode\": 86\r\n    },\r\n    {\r\n        \"en\": \"b\",\r\n        \"ru\": \"и\",\r\n        \"keyCode\": 66\r\n    },\r\n    {\r\n        \"en\": \"n\",\r\n        \"ru\": \"т\",\r\n        \"keyCode\": 78\r\n    },\r\n    {\r\n        \"en\": \"m\",\r\n        \"ru\": \"ь\",\r\n        \"keyCode\": 77\r\n    },\r\n    {\r\n        \"en\": \",\",\r\n        \"ru\": \"б\",\r\n        \"shift\": \"<\",\r\n        \"keyCode\": 108\r\n    },\r\n    {\r\n        \"en\": \".\",\r\n        \"ru\": \"ю\",\r\n        \"shift\": \">\",\r\n        \"keyCode\": 190\r\n    },\r\n    {\r\n        \"en\": \"/\",\r\n        \"ru\": \".\",\r\n        \"shift\": \"?\",\r\n        \"keyCode\": 191\r\n    },\r\n    {\r\n        \"en\": \"▲\",\r\n        \"ru\": \"▲\",\r\n        \"keyCode\": 38\r\n    },\r\n    {\r\n        \"en\": \"Shift\",\r\n        \"ru\": \"Shift\",\r\n        \"keyCode\": 16,\r\n        \"which\": 16\r\n    },\r\n    {\r\n        \"en\": \"Ctrl\",\r\n        \"ru\": \"Ctrl\",\r\n        \"keyCode\": 17\r\n    },\r\n    {\r\n        \"en\": \"Win\",\r\n        \"ru\": \"Win\",\r\n        \"keyCode\": 91\r\n    },\r\n    {\r\n        \"en\": \"Alt\",\r\n        \"ru\": \"Alt\",\r\n        \"keyCode\": 18\r\n    },\r\n    {\r\n        \"en\": \"Space\",\r\n        \"ru\": \"Space\",\r\n        \"keyCode\": 32\r\n    },\r\n    {\r\n        \"en\": \"Alt\",\r\n        \"ru\": \"Alt\",\r\n        \"keyCode\": 18\r\n    },\r\n    {\r\n        \"en\": \"◄\",\r\n        \"ru\": \"◄\",\r\n        \"keyCode\": 37\r\n    },\r\n    {\r\n        \"en\": \"▼\",\r\n        \"ru\": \"▼\",\r\n        \"keyCode\": 40\r\n    },\r\n    {\r\n        \"en\": \"►\",\r\n        \"ru\": \"►\",\r\n        \"keyCode\": 39\r\n    },\r\n    {\r\n        \"en\": \"Ctrl\",\r\n        \"ru\": \"Ctrl\",\r\n        \"keyCode\": 17\r\n    }\r\n];\n\n//# sourceURL=webpack:///./js/keys.js?");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;