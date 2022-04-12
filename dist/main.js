/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("class Todo{\n    constructor(name){\n        this.name = name\n        document.querySelector(\".name\").innerText = name\n    }\n}\nlet inbox = document.querySelector(\".inbox\")\nlet today = document.querySelector(\".today\")\nlet week = document.querySelector(\".week\")\n\ninbox.addEventListener(\"click\", function (){\n    new Todo(inbox.innerText)\n})\n\ntoday.addEventListener(\"click\", function (){\n    new Todo(today.innerText)\n})\nweek.addEventListener(\"click\", function (){\n    new Todo(week.innerText)\n})\n\n\nclass AddTask{\n    constructor(name){\n        this.name = name\n        document.createElement(\".task\").innerText = name\n        \n    }\n}\n\nnew AddTask('task');\n\n//# sourceURL=webpack://honeydo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;