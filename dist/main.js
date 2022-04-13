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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_modules_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/modules/project */ \"./src/modules/project.js\");\n/* harmony import */ var _src_modules_todolist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/modules/todolist */ \"./src/modules/todolist.js\");\n/* harmony import */ var _src_modules_task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/modules/task.js */ \"./src/modules/task.js\");\n/* harmony import */ var _src_modules_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/modules/form */ \"./src/modules/form.js\");\n\n\n\n\n\n(0,_src_modules_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_src_modules_todolist__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_src_modules_task_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n \n    \n    \n\n\n//# sourceURL=webpack://honeydo/./src/index.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ObjectStorage{\n    constructor(name){\n        this.name = name;\n        this.cancel = \"X\"\n        this.complete =\"<>\"\n    }\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ObjectStorage);\n\n//# sourceURL=webpack://honeydo/./src/modules/UI.js?");

/***/ }),

/***/ "./src/modules/form.js":
/*!*****************************!*\
  !*** ./src/modules/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction formCreator(newButtonforForm){\n        //Create a form\n    let form = document.createElement(\"form\");\n            form.className = \"newForm\"\n            let task = newButtonforForm;\n            task.appendChild(form)  \n        \n            //Adding div to make formatting easier\n            let box = document.createElement(\"div\");\n            box.className = \"box\"\n            form.appendChild(box);\n            // Input area for name of new project \n        \n            let input = document.createElement(\"input\");\n            input.className = (\"formInput\")\n            box.appendChild(input);\n\n        \n            // submit button (Avoided regular button so it doesn't refresh page)\n        \n            let button = document.createElement(\"div\");\n            button.innerText = \"Add\"\n            button.className = \"formAddButton\"\n            box.appendChild(button);\n        \n            // Cancel button \n        \n            let cancel = document.createElement(\"div\");\n            cancel.className = \"formCancelButton\"\n            cancel.innerText = \"Cancel\"\n            box.appendChild(cancel)\n            \n    \n            let cancelButton = document.querySelector(\".formCancelButton\")\n            cancelButton.addEventListener(\"click\", function(){\n                \n                form.remove();\n                \n            })\n        };\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formCreator);\n\n//# sourceURL=webpack://honeydo/./src/modules/form.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/modules/storage.js\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ \"./src/modules/form.js\");\n\n\nfunction projectAppend(){\n\n\nlet projectAdd = document.querySelector(\".addProject\");\n\nprojectAdd.addEventListener(\"click\", function(){\n\n    //Create a new form once button is clicked\n    (0,_form__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(projectAdd)\n    \n    // Button to add new projects\n\n    let addButton = document.querySelector(\".formAddButton\");\naddButton.addEventListener(\"click\", function(){\n    let newProject = document.createElement(\"li\");\n    newProject.className = \"newProject\"\n    newProject.innerText = document.querySelector(\".formInput\").value;\n    let list = document.querySelector(\".projects\");\n    list.appendChild(newProject)\n    form.remove();\n\n    newProject.addEventListener(\"click\", function (){\n        new _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"](newProject.innerText)\n        document.querySelector(\".task\").style = \"display:flex;\"\n    })\n\n\n\n})\n})\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectAppend);\n\n//# sourceURL=webpack://honeydo/./src/modules/project.js?");

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ \"./src/modules/task.js\");\n\nclass TaskConstructor{\n\n    constructor(name){\n        this.name = name;\n        let newName = document.querySelector(\".name\");\n        newName.innerText = name;\n\n        \n    }\n}\n\n\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskConstructor);\n\n//# sourceURL=webpack://honeydo/./src/modules/storage.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ \"./src/modules/UI.js\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ \"./src/modules/form.js\");\n\n\n\nfunction addTask(){\n\n\n    let taskAdd = document.querySelector(\".task\");\n    \n    taskAdd.addEventListener(\"click\", function(){\n        (0,_form__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(taskAdd);\n        console.log('This working?')\n    })\n    /*{\n    \n        \n        // Button to add new tasks\n    \n        let taskButton = document.querySelector(\"#taskButton\");\n    taskButton.addEventListener(\"click\", function(){\n        let taskObj = new ObjectStorage(document.querySelector(\".taskInput\").value);\n        let taskRow = document.createElement(\"ul\");\n        taskRow.id = \"taskRow\"\n        let newTask = document.createElement(\"li\");\n        newTask.className = \"taskObj\"\n        newTask.innerText = taskObj.name\n        newTask.className = \"anotherTask\"\n        let completeO = document.createElement(\"li\")\n        completeO.innerText = taskObj.complete;\n        completeO.className = \"completeO\"\n        let cancelX = document.createElement(\"li\")\n        cancelX.innerText = taskObj.cancel;\n        cancelX.className = \"cancelX\"\n        let list = document.querySelector(\".taskBar\");\n        list.appendChild(taskRow)\n        taskRow.append(completeO)\n        taskRow.append(newTask)\n        taskRow.append(cancelX)\n        form.remove();\n \n    })\n    })\n    }*/\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTask);\n\n//# sourceURL=webpack://honeydo/./src/modules/task.js?");

/***/ }),

/***/ "./src/modules/todolist.js":
/*!*********************************!*\
  !*** ./src/modules/todolist.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/modules/storage.js\");\n\nfunction eventListeners(){\n\n    let inbox = document.querySelector(\".inbox\")\n    let today = document.querySelector(\".today\")\n    let week = document.querySelector(\".week\")\n    \n    inbox.addEventListener(\"click\", function (){\n        new _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"](inbox.innerText)\n        document.querySelector(\".task\").style = \"display:flex;\"\n    })\n    \n    today.addEventListener(\"click\", function (){\n        new _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"](today.innerText)\n        document.querySelector(\".task\").style = \"display:none;\"\n    })\n    week.addEventListener(\"click\", function (){\n        new _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"](week.innerText)\n        document.querySelector(\".task\").style = \"display: none;\"\n    })\n\n    \n    }\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventListeners);\n\n//# sourceURL=webpack://honeydo/./src/modules/todolist.js?");

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