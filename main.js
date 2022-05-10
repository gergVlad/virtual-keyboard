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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys.js */ \"./js/keys.js\");\n\r\n\r\nlet lang = 'en';\r\nlet capsLock = false;\r\nlet shift = false;\r\nlet ctrl = false;\r\n\r\nconst body = document.body;\r\nconst main = document.createElement('main');\r\nconst container = document.createElement('div');\r\ncontainer.classList.add('container');\r\nconst textArea = document.createElement('textarea');\r\ntextArea.classList.add('text');\r\nconst keyboard = document.createElement('div');\r\nkeyboard.classList.add('keyboard_wrapp');\r\nconst title = document.createElement('h1');\r\ntitle.textContent = 'RSS Виртуальная клавиатура';\r\nconst descriptin = document.createElement('p');\r\ndescriptin.classList.add('descriptin');\r\ndescriptin.textContent = 'Клавиатура создана в операционной системе Windows';\r\nconst language = document.createElement('p');\r\nlanguage.classList.add('language');\r\nlanguage.textContent = 'Для переключения языка комбинация: левыe ctrl + alt';;\r\n\r\n\r\nbody.append(main);\r\nmain.append(container);\r\ncontainer.append(title);\r\ncontainer.append(textArea);\r\ncontainer.append(keyboard);\r\ncontainer.append(descriptin);\r\ncontainer.append(language);\r\n\r\nfunction renderKeys(langValue, capsLock) {\r\n    keyboard.innerHTML = '';\r\n    _keys_js__WEBPACK_IMPORTED_MODULE_0__.keys.forEach((item, i) => {\r\n        const span = document.createElement('span');\r\n        span.classList.add('keys');\r\n        span.setAttribute('data-key', item.code);\r\n        if (item.en == 'Backspace') {\r\n            span.classList.add('backspace_key');\r\n        } else if (item.en == 'Tab') {\r\n            span.classList.add('tab_key');\r\n        } else if (item.en == '/') {\r\n            span.classList.add('slash_key');\r\n        } else if (item.en == 'Caps Lock') {\r\n            span.classList.add('caps_lock_key');\r\n        } else if (item.en == 'Enter') {\r\n            span.classList.add('enter_key');\r\n        } else if (item.en == 'Shift') {\r\n            span.classList.add('shift_key');\r\n        } else if (item.en == 'Space') {\r\n            span.classList.add('space_key');\r\n        }\r\n\r\n        if (capsLock && item.en != 'Ctrl' && item.en != 'Backspace' && item.en != 'Space' && item.en != 'Tab' && item.en != 'Alt' && item.en != 'Enter' && item.en != 'Del' && item.en != 'Shift' && item.en != 'Win' && item.en != 'Caps Lock') {\r\n            span.textContent = item[langValue].toUpperCase();\r\n            \r\n        } else {\r\n            span.textContent = item[langValue];\r\n        }\r\n        keyboard.append(span);\r\n    });\r\n}\r\n\r\nrenderKeys(lang, capsLock);\r\n\r\nfunction writeText(symbol) {\r\n    if (symbol == \"Backspace\") {\r\n\r\n    } else if (symbol == \"Space\") {\r\n        textArea.value += \" \";\r\n    } else if (symbol == \"Enter\") {\r\n        textArea.value += \"\\n\";\r\n    } else if (symbol == \"Tab\") {\r\n        textArea.value += \"    \";\r\n    } else if (symbol == \"Win\") {\r\n        // кнопка виндов не будет работать\r\n    } else if (symbol == \"Caps Lock\") {\r\n        capsLock = !capsLock;\r\n        renderKeys(lang, capsLock);\r\n    } else if (symbol == \"Shift\") {\r\n        // кнопка виндов не будет работать\r\n    } else if (symbol == \"Del\") {\r\n        \r\n    } else if (symbol == \"Ctrl\") {\r\n        // key ctrl\r\n    } else if (symbol == \"Alt\") {\r\n        \r\n    } else {\r\n        textArea.value += symbol;\r\n    }\r\n}\r\n\r\n//Write with mouse\r\n\r\nkeyboard.addEventListener(\"click\", (e) => {\r\n    let button = document.querySelectorAll('.keyboard_wrapp span');\r\n    const target = e.target;\r\n    button.forEach(item => {\r\n        if (target == item) {\r\n            writeText(item.textContent);\r\n        }\r\n    });\r\n});\r\nkeyboard.addEventListener(\"mousedown\", (e) => {\r\n    let button = document.querySelectorAll('.keyboard_wrapp span');\r\n    const target = e.target;\r\n    button.forEach(item => {\r\n        if (target == item) {\r\n            item.classList.add(\"active\");\r\n            \r\n            if (item.textContent == 'Shift') {\r\n                shift = true;\r\n                item.classList.add(\"active\");\r\n                button.forEach((shiftItem, i) => {\r\n                    if (_keys_js__WEBPACK_IMPORTED_MODULE_0__.keys[i].code == shiftItem.getAttribute('data-key') && _keys_js__WEBPACK_IMPORTED_MODULE_0__.keys[i].shift) {\r\n                        if (lang == 'ru') {\r\n                            if (shiftItem.getAttribute('data-key').match(/Digit/gi) || shiftItem.getAttribute('data-key') == 'Backslash' || shiftItem.getAttribute('data-key') == 'NumpadSubtract' || shiftItem.getAttribute('data-key') == 'Equal') {\r\n                                shiftItem.textContent = _keys_js__WEBPACK_IMPORTED_MODULE_0__.keys[i].shift;\r\n                            } else {\r\n                                shiftItem.textContent = _keys_js__WEBPACK_IMPORTED_MODULE_0__.keys[i][lang].toUpperCase();\r\n                            }\r\n                        } else {\r\n                            shiftItem.textContent = _keys_js__WEBPACK_IMPORTED_MODULE_0__.keys[i].shift; \r\n                        }\r\n                    } else if (_keys_js__WEBPACK_IMPORTED_MODULE_0__.keys[i].code == shiftItem.getAttribute('data-key') && shiftItem.getAttribute('data-key').match(/Key/gi)) {\r\n                        shiftItem.textContent = shiftItem.textContent.toUpperCase();\r\n                    }\r\n                });\r\n            }\r\n        }\r\n    });\r\n});\r\nkeyboard.addEventListener(\"mouseup\", (e) => {\r\n    let button = document.querySelectorAll('.keyboard_wrapp span');\r\n    const target = e.target;\r\n    button.forEach(item => {\r\n        if (target == item) {\r\n            item.classList.remove(\"active\");\r\n\r\n            if (item.textContent == 'Shift') {\r\n                shift = true;\r\n                item.classList.remove(\"active\");\r\n                button.forEach((shiftItem, i) => {\r\n                    if (_keys_js__WEBPACK_IMPORTED_MODULE_0__.keys[i].code == shiftItem.getAttribute('data-key') && _keys_js__WEBPACK_IMPORTED_MODULE_0__.keys[i].shift) {\r\n                        shiftItem.textContent = _keys_js__WEBPACK_IMPORTED_MODULE_0__.keys[i][lang];\r\n                    } else if (_keys_js__WEBPACK_IMPORTED_MODULE_0__.keys[i].code == shiftItem.getAttribute('data-key') && shiftItem.getAttribute('data-key').match(/Key/gi)) {\r\n                        shiftItem.textContent = shiftItem.textContent.toLowerCase();\r\n                    }\r\n                });\r\n            }\r\n        }\r\n    });\r\n});\r\n\r\n//Write with keyboard\r\nbody.addEventListener(\"keydown\", (e) => {\r\n    let button = document.querySelectorAll('.keyboard_wrapp span');\r\n    e.preventDefault();\r\n    button.forEach(item => {\r\n        if (item.dataset.key === e.code) {\r\n            item.classList.add(\"active\");\r\n            writeText(item.textContent);\r\n\r\n            if (item.textContent == 'Shift') {\r\n                shift = true;\r\n                item.classList.add(\"active\");\r\n                button.forEach((shiftItem, i) => {\r\n                    if (_keys_js__WEBPACK_IMPORTED_MODULE_0__.keys[i].code == shiftItem.getAttribute('data-key') && _keys_js__WEBPACK_IMPORTED_MODULE_0__.keys[i].shift) {\r\n                        if (lang == 'ru') {\r\n                            if (shiftItem.getAttribute('data-key').match(/Digit/gi) || shiftItem.getAttribute('data-key') == 'Backslash' || shiftItem.getAttribute('data-key') == 'NumpadSubtract' || shiftItem.getAttribute('data-key') == 'Equal') {\r\n                                shiftItem.textContent = _keys_js__WEBPACK_IMPORTED_MODULE_0__.keys[i].shift;\r\n                            } else {\r\n                                shiftItem.textContent = _keys_js__WEBPACK_IMPORTED_MODULE_0__.keys[i][lang].toUpperCase();\r\n                            }\r\n                            \r\n                        } else {\r\n                            shiftItem.textContent = _keys_js__WEBPACK_IMPORTED_MODULE_0__.keys[i].shift;\r\n                        }\r\n                        \r\n                    } else if (_keys_js__WEBPACK_IMPORTED_MODULE_0__.keys[i].code == shiftItem.getAttribute('data-key') && shiftItem.getAttribute('data-key').match(/Key/gi)) {\r\n                        shiftItem.textContent = shiftItem.textContent.toUpperCase();\r\n                    }\r\n                });\r\n            } else if (item.textContent == 'Ctrl') {\r\n                ctrl = true;\r\n            } else if (item.textContent == 'Alt' && ctrl) {\r\n                if (lang == 'ru') {\r\n                    lang = 'en';\r\n                } else {\r\n                    lang = 'ru';\r\n                }\r\n                button.forEach((langItem, i) => {\r\n                    if (_keys_js__WEBPACK_IMPORTED_MODULE_0__.keys[i].code == langItem.getAttribute('data-key') && (langItem.getAttribute('data-key').match(/Key/gi) || langItem.getAttribute('data-key').match(/Bracket/gi) || langItem.getAttribute('data-key') == 'Semicolon' || langItem.getAttribute('data-key') == 'Quote' || langItem.getAttribute('data-key') == 'NumpadDecimal' || langItem.getAttribute('data-key') == 'Period')) {\r\n                        langItem.textContent = _keys_js__WEBPACK_IMPORTED_MODULE_0__.keys[i][lang];\r\n                    } else if (langItem.getAttribute('data-key') == 'Backquote') {\r\n                        langItem.textContent = _keys_js__WEBPACK_IMPORTED_MODULE_0__.keys[i][lang];\r\n                    }\r\n                });\r\n            }\r\n        }\r\n    });\r\n});\r\n\r\nbody.addEventListener(\"keyup\", (e) => {\r\n    let button = document.querySelectorAll('.keyboard_wrapp span');\r\n    e.preventDefault();\r\n    button.forEach(item => {\r\n        if (item.dataset.key === e.code) {\r\n            item.classList.remove(\"active\");\r\n\r\n            if (item.textContent == 'Shift') {\r\n                shift = true;\r\n                item.classList.remove(\"active\");\r\n                button.forEach((shiftItem, i) => {\r\n                    if (_keys_js__WEBPACK_IMPORTED_MODULE_0__.keys[i].code == shiftItem.getAttribute('data-key') && _keys_js__WEBPACK_IMPORTED_MODULE_0__.keys[i].shift) {\r\n                        shiftItem.textContent = _keys_js__WEBPACK_IMPORTED_MODULE_0__.keys[i][lang];\r\n                    } else if (_keys_js__WEBPACK_IMPORTED_MODULE_0__.keys[i].code == shiftItem.getAttribute('data-key') && shiftItem.getAttribute('data-key').match(/Key/gi)) {\r\n                        shiftItem.textContent = shiftItem.textContent.toLowerCase();\r\n                    }\r\n                });\r\n            }\r\n        }\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./js/keys.js":
/*!********************!*\
  !*** ./js/keys.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"keys\": () => (/* binding */ keys)\n/* harmony export */ });\nconst keys = [\r\n    {\r\n        \"en\": \"`\",\r\n        \"ru\": \"ё\",\r\n        \"shift\": \"~\",\r\n        \"keyCode\": 192,\r\n        \"code\": \"Backquote\"\r\n    },\r\n    {\r\n        \"en\": \"1\",\r\n        \"ru\": \"1\",\r\n        \"shift\": \"!\",\r\n        \"keyCode\": 49,\r\n        \"code\": \"Digit1\"\r\n    },\r\n    {\r\n        \"en\": \"2\",\r\n        \"ru\": \"2\",\r\n        \"shift\": \"@\",\r\n        \"keyCode\": 50,\r\n        \"code\": \"Digit2\",\r\n    },\r\n    {\r\n        \"en\": \"3\",\r\n        \"ru\": \"3\",\r\n        \"shift\": \"#\",\r\n        \"keyCode\": 51,\r\n        \"code\": \"Digit3\"\r\n    },\r\n    {\r\n        \"en\": \"4\",\r\n        \"ru\": \"4\",\r\n        \"shift\": \"$\",\r\n        \"keyCode\": 52,\r\n        \"code\": \"Digit4\"\r\n    },\r\n    {\r\n        \"en\": \"5\",\r\n        \"ru\": \"5\",\r\n        \"shift\": \"%\",\r\n        \"keyCode\": 53,\r\n        \"code\": \"Digit5\"\r\n    },\r\n    {\r\n        \"en\": \"6\",\r\n        \"ru\": \"6\",\r\n        \"shift\": \"^\",\r\n        \"keyCode\": 54,\r\n        \"code\": \"Digit6\"\r\n    },\r\n    {\r\n        \"en\": \"7\",\r\n        \"ru\": \"7\",\r\n        \"shift\": \"&\",\r\n        \"keyCode\": 55,\r\n        \"code\": \"Digit7\"\r\n    },\r\n    {\r\n        \"en\": \"8\",\r\n        \"ru\": \"8\",\r\n        \"shift\": \"*\",\r\n        \"keyCode\": 56,\r\n        \"code\": \"Digit8\"\r\n    },\r\n    {\r\n        \"en\": \"9\",\r\n        \"ru\": \"9\",\r\n        \"shift\": \"(\",\r\n        \"keyCode\": 57,\r\n        \"code\": \"Digit9\"\r\n    },\r\n    {\r\n        \"en\": \"0\",\r\n        \"ru\": \"0\",\r\n        \"shift\": \")\",\r\n        \"keyCode\": 48,\r\n        \"code\": \"Digit0\"\r\n    },\r\n    {\r\n        \"en\": \"-\",\r\n        \"ru\": \"-\",\r\n        \"shift\": \"_\",\r\n        \"keyCode\": 109,\r\n        \"code\": \"NumpadSubtract\"\r\n    },\r\n    {\r\n        \"en\": \"=\",\r\n        \"ru\": \"=\",\r\n        \"shift\": \"+\",\r\n        \"keyCode\": 61,\r\n        \"code\": \"Equal\"\r\n    },\r\n    {\r\n        \"en\": \"Backspace\",\r\n        \"ru\": \"Backspace\",\r\n        \"keyCode\": 8,\r\n        \"code\": \"Backspace\"\r\n    },\r\n    {\r\n        \"en\": \"Tab\",\r\n        \"ru\": \"Tab\",\r\n        \"keyCode\": 9,\r\n        \"code\": \"Tab\"\r\n    },\r\n    {\r\n        \"en\": \"q\",\r\n        \"ru\": \"й\",\r\n        \"keyCode\": 81,\r\n        \"code\": \"KeyQ\"\r\n    },\r\n    {\r\n        \"en\": \"w\",\r\n        \"ru\": \"ц\",\r\n        \"keyCode\": 87,\r\n        \"code\": \"KeyW\"\r\n    },\r\n    {\r\n        \"en\": \"e\",\r\n        \"ru\": \"у\",\r\n        \"keyCode\": 69,\r\n        \"code\": \"KeyE\"\r\n    },\r\n    {\r\n        \"en\": \"r\",\r\n        \"ru\": \"к\",\r\n        \"keyCode\": 82,\r\n        \"code\": \"KeyR\"\r\n    },\r\n    {\r\n        \"en\": \"t\",\r\n        \"ru\": \"е\",\r\n        \"keyCode\": 84,\r\n        \"code\": \"KeyT\"\r\n    },\r\n    {\r\n        \"en\": \"y\",\r\n        \"ru\": \"н\",\r\n        \"keyCode\": 89,\r\n        \"code\": \"KeyY\"\r\n    },\r\n    {\r\n        \"en\": \"u\",\r\n        \"ru\": \"г\",\r\n        \"keyCode\": 85,\r\n        \"code\": \"KeyU\"\r\n    },\r\n    {\r\n        \"en\": \"i\",\r\n        \"ru\": \"ш\",\r\n        \"keyCode\": 73,\r\n        \"code\": \"KeyI\"\r\n    },\r\n    {\r\n        \"en\": \"o\",\r\n        \"ru\": \"щ\",\r\n        \"keyCode\": 79,\r\n        \"code\": \"KeyO\"\r\n    },\r\n    {\r\n        \"en\": \"p\",\r\n        \"ru\": \"з\",\r\n        \"keyCode\": 80,\r\n        \"code\": \"KeyP\"\r\n    },\r\n    {\r\n        \"en\": \"[\",\r\n        \"ru\": \"х\",\r\n        \"shift\": \"{\",\r\n        \"keyCode\": 160,\r\n        \"code\": \"BracketLeft\"\r\n    },\r\n    {\r\n        \"en\": \"]\",\r\n        \"ru\": \"ъ\",\r\n        \"shift\": \"}\",\r\n        \"keyCode\": 221,\r\n        \"code\": \"BracketRight\"\r\n    },\r\n    {\r\n        \"en\": \"\\\\\",\r\n        \"ru\": \"\\\\\",\r\n        \"shift\": \"|\",\r\n        \"keyCode\": 220,\r\n        \"code\": \"Backslash\"\r\n    },\r\n    {\r\n        \"en\": \"Del\",\r\n        \"ru\": \"Del\",\r\n        \"keyCode\": 46,\r\n        \"code\": \"Delete\"\r\n    },\r\n    {\r\n        \"en\": \"Caps Lock\",\r\n        \"ru\": \"Caps Lock\",\r\n        \"keyCode\": 20,\r\n        \"code\": \"CapsLock\"\r\n    },\r\n    {\r\n        \"en\": \"a\",\r\n        \"ru\": \"ф\",\r\n        \"keyCode\": 65,\r\n        \"code\": \"KeyA\"\r\n    },\r\n    {\r\n        \"en\": \"s\",\r\n        \"ru\": \"ы\",\r\n        \"keyCode\": 83,\r\n        \"code\": \"KeyS\"\r\n    },\r\n    {\r\n        \"en\": \"d\",\r\n        \"ru\": \"в\",\r\n        \"keyCode\": 68,\r\n        \"code\": \"KeyD\"\r\n    },\r\n    {\r\n        \"en\": \"f\",\r\n        \"ru\": \"а\",\r\n        \"keyCode\": 70,\r\n        \"code\": \"KeyF\"\r\n    },\r\n    {\r\n        \"en\": \"g\",\r\n        \"ru\": \"п\",\r\n        \"keyCode\": 71,\r\n        \"code\": \"KeyG\"\r\n    },\r\n    {\r\n        \"en\": \"h\",\r\n        \"ru\": \"р\",\r\n        \"keyCode\": 72,\r\n        \"code\": \"KeyH\"\r\n    },\r\n    {\r\n        \"en\": \"j\",\r\n        \"ru\": \"о\",\r\n        \"keyCode\": 74,\r\n        \"code\": \"KeyJ\"\r\n    },\r\n    {\r\n        \"en\": \"k\",\r\n        \"ru\": \"л\",\r\n        \"keyCode\": 75,\r\n        \"code\": \"KeyK\"\r\n    },\r\n    {\r\n        \"en\": \"l\",\r\n        \"ru\": \"д\",\r\n        \"keyCode\": 76,\r\n        \"code\": \"KeyL\"\r\n    },\r\n    {\r\n        \"en\": \";\",\r\n        \"ru\": \"ж\",\r\n        \"shift\": \":\",\r\n        \"keyCode\": 59,\r\n        \"code\": \"Semicolon\"\r\n    },\r\n    {\r\n        \"en\": \"'\",\r\n        \"ru\": \"э\",\r\n        \"shift\": \"\\\"\",\r\n        \"keyCode\": 222,\r\n        \"code\": \"Quote\"\r\n    },\r\n    {\r\n        \"en\": \"Enter\",\r\n        \"ru\": \"Enter\",\r\n        \"keyCode\": 13,\r\n        \"code\": \"Enter\"\r\n    },\r\n    {\r\n        \"en\": \"Shift\",\r\n        \"ru\": \"Shift\",\r\n        \"keyCode\": 16,\r\n        \"code\": \"ShiftLeft\"\r\n    },\r\n    {\r\n        \"en\": \"z\",\r\n        \"ru\": \"я\",\r\n        \"keyCode\": 90,\r\n        \"code\": \"KeyZ\"\r\n    },\r\n    {\r\n        \"en\": \"x\",\r\n        \"ru\": \"ч\",\r\n        \"keyCode\": 88,\r\n        \"code\": \"KeyX\"\r\n    },\r\n    {\r\n        \"en\": \"c\",\r\n        \"ru\": \"с\",\r\n        \"keyCode\": 67,\r\n        \"code\": \"KeyC\"\r\n    },\r\n    {\r\n        \"en\": \"v\",\r\n        \"ru\": \"м\",\r\n        \"keyCode\": 86,\r\n        \"code\": \"KeyV\"\r\n    },\r\n    {\r\n        \"en\": \"b\",\r\n        \"ru\": \"и\",\r\n        \"keyCode\": 66,\r\n        \"code\": \"KeyB\"\r\n    },\r\n    {\r\n        \"en\": \"n\",\r\n        \"ru\": \"т\",\r\n        \"keyCode\": 78,\r\n        \"code\": \"KeyN\"\r\n    },\r\n    {\r\n        \"en\": \"m\",\r\n        \"ru\": \"ь\",\r\n        \"keyCode\": 77,\r\n        \"code\": \"KeyM\"\r\n    },\r\n    {\r\n        \"en\": \",\",\r\n        \"ru\": \"б\",\r\n        \"shift\": \"<\",\r\n        \"keyCode\": 108,\r\n        \"code\": \"NumpadDecimal\"\r\n    },\r\n    {\r\n        \"en\": \".\",\r\n        \"ru\": \"ю\",\r\n        \"shift\": \">\",\r\n        \"keyCode\": 190,\r\n        \"code\": \"Period\"\r\n    },\r\n    {\r\n        \"en\": \"/\",\r\n        \"ru\": \".\",\r\n        \"shift\": \"?\",\r\n        \"keyCode\": 191,\r\n        \"code\": \"Slash\"\r\n    },\r\n    {\r\n        \"en\": \"▲\",\r\n        \"ru\": \"▲\",\r\n        \"keyCode\": 38,\r\n        \"code\": \"ArrowUp\"\r\n    },\r\n    {\r\n        \"en\": \"Shift\",\r\n        \"ru\": \"Shift\",\r\n        \"keyCode\": 16,\r\n        \"code\": \"ShiftRight\"\r\n    },\r\n    {\r\n        \"en\": \"Ctrl\",\r\n        \"ru\": \"Ctrl\",\r\n        \"keyCode\": 17,\r\n        \"code\": \"ControlLeft\"\r\n    },\r\n    {\r\n        \"en\": \"Win\",\r\n        \"ru\": \"Win\",\r\n        \"keyCode\": 91,\r\n        \"code\": \"MetaLeft\"\r\n    },\r\n    {\r\n        \"en\": \"Alt\",\r\n        \"ru\": \"Alt\",\r\n        \"keyCode\": 18,\r\n        \"code\": \"AltLeft\"\r\n    },\r\n    {\r\n        \"en\": \"Space\",\r\n        \"ru\": \"Space\",\r\n        \"keyCode\": 32,\r\n        \"code\": \"Space\"\r\n    },\r\n    {\r\n        \"en\": \"Alt\",\r\n        \"ru\": \"Alt\",\r\n        \"keyCode\": 18,\r\n        \"code\": \"AltRight\"\r\n    },\r\n    {\r\n        \"en\": \"◄\",\r\n        \"ru\": \"◄\",\r\n        \"keyCode\": 37,\r\n        \"code\": \"ArrowLeft\"\r\n    },\r\n    {\r\n        \"en\": \"▼\",\r\n        \"ru\": \"▼\",\r\n        \"keyCode\": 40,\r\n        \"code\": \"ArrowDown\"\r\n    },\r\n    {\r\n        \"en\": \"►\",\r\n        \"ru\": \"►\",\r\n        \"keyCode\": 39,\r\n        \"code\": \"ArrowRight\"\r\n    },\r\n    {\r\n        \"en\": \"Ctrl\",\r\n        \"ru\": \"Ctrl\",\r\n        \"keyCode\": 17,\r\n        \"code\": \"ControlRight\"\r\n    }\r\n];\n\n//# sourceURL=webpack:///./js/keys.js?");

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
