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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_modules_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/modules/project */ \"./src/modules/project.js\");\n/* harmony import */ var _src_modules_todolist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/modules/todolist */ \"./src/modules/todolist.js\");\n\n\n(0,_src_modules_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_src_modules_todolist__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n \n    \n    \n\n\n//# sourceURL=webpack://honeydo/./src/index.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//import eventListeners from \"../modules/todolist\"\n\nfunction projectAppend(){\n\n\nlet projectAdd = document.querySelector(\".add\");\n\nprojectAdd.addEventListener(\"click\", function(){\n    let form = document.createElement(\"form\");\n    let projects = document.querySelector(\".projects\")\n    projects.appendChild(form)\n    let input = document.createElement(\"input\");\n    input.className = (\"newInput\")\n    form.appendChild(input);\n    let box = document.createElement(\"div\");\n    box.className = \"box\"\n    form.appendChild(box);\n    let button = document.createElement(\"div\");\n    button.innerText = \"Add\"\n    button.className = \"button\"\n    button.id = \"addButton\"\n    box.appendChild(button);\n    let cancel = document.createElement(\"div\");\n    cancel.className = \"button\"\n    cancel.id = \"cancelButton\"\n    cancel.innerText = \"Cancel\"\n    box.appendChild(cancel)\n    \n\n    let addButton = document.querySelector(\"#addButton\");\naddButton.addEventListener(\"click\", function(){\n    let newProject = document.createElement(\"li\");\n    newProject.innerText = document.querySelector(\".newInput\").value;\n    let list = document.querySelector(\".projectLists\");\n    list.appendChild(newProject)\n    form.remove();\n\n    \n\n})\n})\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectAppend);\n\n//# sourceURL=webpack://honeydo/./src/modules/project.js?");

/***/ }),

/***/ "./src/modules/todolist.js":
/*!*********************************!*\
  !*** ./src/modules/todolist.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nfunction eventListeners(){\n\n    class Todo{\n        constructor(name){\n            this.name = name\n            document.querySelector(\".name\").innerText = name\n        }\n    }\n    let inbox = document.querySelector(\".inbox\")\n    let today = document.querySelector(\".today\")\n    let week = document.querySelector(\".week\")\n    \n    inbox.addEventListener(\"click\", function (){\n        new Todo(inbox.innerText)\n    })\n    \n    today.addEventListener(\"click\", function (){\n        new Todo(today.innerText)\n    })\n    week.addEventListener(\"click\", function (){\n        new Todo(week.innerText)\n    })\n    \n    }\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventListeners);\n\n//# sourceURL=webpack://honeydo/./src/modules/todolist.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;