/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");





function UI(){
    

     let addProject = document.querySelector(".addProject");
     let taskNew = document.querySelector(".task")
     
taskNew.addEventListener("click", function(){
        let form = document.createElement("div")
        form.className = "form"
        let taskList = document.querySelector(".taskList")
        taskList.appendChild(form)
        let input = document.createElement("input")
        input.className = "input"
        form.appendChild(input);
        let addBtn = document.createElement("button")
        addBtn.type = "button"
        addBtn.innerText = "Add Project"
        addBtn.className = "addButton"
        let cancelBtn = document.createElement("button")
        cancelBtn.type = "button"
        cancelBtn.innerText = "Cancel"
        cancelBtn.className = "cancelButton"
        form.appendChild(addBtn)
        form.appendChild(cancelBtn)
})
     

    addProject.addEventListener("click", function(){
        let form = document.createElement("div")
        form.className = "form"
        let projectList = document.querySelector(".projectLists")
        projectList.appendChild(form)
        let input = document.createElement("input")
        input.className = "input"
        form.appendChild(input);
        let addBtn = document.createElement("button")
        addBtn.type = "button"
        addBtn.innerText = "Add Project"
        addBtn.className = "addButton"
        let cancelBtn = document.createElement("button")
        cancelBtn.type = "button"
        cancelBtn.innerText = "Cancel"
        cancelBtn.className = "cancelButton"
        form.appendChild(addBtn)
        form.appendChild(cancelBtn)


       // clickable cancel button
    cancelBtn.addEventListener("click", function(){
        form.remove()

    })
        // add button


       
    addBtn.addEventListener("click", function(){
        
        let newProj = new _project__WEBPACK_IMPORTED_MODULE_0__["default"](input.value)
        
        _storage__WEBPACK_IMPORTED_MODULE_2__["default"].setProject(newProj.name, JSON.stringify(newProj))
            form.remove()
        let newListItem = document.createElement("li")
        newListItem.innerText = input.value
        projectList.appendChild(newListItem)

        newListItem.addEventListener("click", function(){
           let storedObj = localStorage.getItem(newListItem.innerText)
           let parsedObj = JSON.parse(storedObj)
           let listName = document.querySelector(".listName")
           listName.innerText = parsedObj.name
           console.log(newListItem.innerText)
           console.log(parsedObj)

            for(let i=0; i < parsedObj.task; i++){
                let taskName = parsedObj.task[i]
               let listPlace = document.createElement("li")
                listPlace.innerText = taskName
                let placeholder = document.querySelector(".taskList")
                placeholder.appendChild(listPlace)
            }
        })

            
    })
    
        
    })
  
}

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//import { toDate, isToday, isThisWeek, subDays } from "date-fns";

class Project{

    constructor(projectName){
        this.name = projectName
        this.task = []
    }
   setName(Newname){
        this.name = Newname
    }
    getName(){
        return this.name
    }
    setTask(task){
        this.task.push(task)
    }
    getTask(){
        return this.task
    }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Storage = {
    
   
    setProject(project, value){
        localStorage.setItem(project, value)
    },
   getProject(project){
        localStorage.getItem(project)
    }
    
    
});

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Task{
    constructor(name, dueDate = "No due date"){
        this.name = name
        this.dueDate = dueDate
    }
    setName(name){
        this.name = name
    }
    getName(){
        return this.name
    }
    setDueDate(dueDate){
        this.dueDate = dueDate
    }
    getDueDate(){
        return this.dueDate
    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");


(0,_modules_UI__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFnQztBQUNOO0FBQ007QUFDVTs7QUFFM0I7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0RBQU87QUFDakM7QUFDQSxRQUFRLDJEQUFrQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsb0JBQW9CO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzlGQSxXQUFXLHVDQUF1Qzs7QUFFbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCaUI7QUFDTjs7QUFFMUIsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpRUFBZTs7Ozs7O1VDcEJmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNONkI7O0FBRTdCLHVEQUFFLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob25leWRvLy4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vaG9uZXlkby8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vaG9uZXlkby8uL3NyYy9tb2R1bGVzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vaG9uZXlkby8uL3NyYy9tb2R1bGVzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vaG9uZXlkby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ob25leWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ob25leWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaG9uZXlkby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2hvbmV5ZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSBcIi4vc3RvcmFnZVwiO1xuaW1wb3J0IHsgYWRkLCBwYXJzZUpTT04gfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVUkoKXtcbiAgICBcblxuICAgICBsZXQgYWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkUHJvamVjdFwiKTtcbiAgICAgbGV0IHRhc2tOZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tcIilcbiAgICAgXG50YXNrTmV3LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgZm9ybS5jbGFzc05hbWUgPSBcImZvcm1cIlxuICAgICAgICBsZXQgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tMaXN0XCIpXG4gICAgICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKGZvcm0pXG4gICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgICAgICBpbnB1dC5jbGFzc05hbWUgPSBcImlucHV0XCJcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgIGxldCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICAgIGFkZEJ0bi50eXBlID0gXCJidXR0b25cIlxuICAgICAgICBhZGRCdG4uaW5uZXJUZXh0ID0gXCJBZGQgUHJvamVjdFwiXG4gICAgICAgIGFkZEJ0bi5jbGFzc05hbWUgPSBcImFkZEJ1dHRvblwiXG4gICAgICAgIGxldCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICAgIGNhbmNlbEJ0bi50eXBlID0gXCJidXR0b25cIlxuICAgICAgICBjYW5jZWxCdG4uaW5uZXJUZXh0ID0gXCJDYW5jZWxcIlxuICAgICAgICBjYW5jZWxCdG4uY2xhc3NOYW1lID0gXCJjYW5jZWxCdXR0b25cIlxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGFkZEJ0bilcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjYW5jZWxCdG4pXG59KVxuICAgICBcblxuICAgIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBmb3JtLmNsYXNzTmFtZSA9IFwiZm9ybVwiXG4gICAgICAgIGxldCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdExpc3RzXCIpXG4gICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGZvcm0pXG4gICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgICAgICBpbnB1dC5jbGFzc05hbWUgPSBcImlucHV0XCJcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgIGxldCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICAgIGFkZEJ0bi50eXBlID0gXCJidXR0b25cIlxuICAgICAgICBhZGRCdG4uaW5uZXJUZXh0ID0gXCJBZGQgUHJvamVjdFwiXG4gICAgICAgIGFkZEJ0bi5jbGFzc05hbWUgPSBcImFkZEJ1dHRvblwiXG4gICAgICAgIGxldCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICAgIGNhbmNlbEJ0bi50eXBlID0gXCJidXR0b25cIlxuICAgICAgICBjYW5jZWxCdG4uaW5uZXJUZXh0ID0gXCJDYW5jZWxcIlxuICAgICAgICBjYW5jZWxCdG4uY2xhc3NOYW1lID0gXCJjYW5jZWxCdXR0b25cIlxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGFkZEJ0bilcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjYW5jZWxCdG4pXG5cblxuICAgICAgIC8vIGNsaWNrYWJsZSBjYW5jZWwgYnV0dG9uXG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICBmb3JtLnJlbW92ZSgpXG5cbiAgICB9KVxuICAgICAgICAvLyBhZGQgYnV0dG9uXG5cblxuICAgICAgIFxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgXG4gICAgICAgIGxldCBuZXdQcm9qID0gbmV3IFByb2plY3QoaW5wdXQudmFsdWUpXG4gICAgICAgIFxuICAgICAgICBTdG9yYWdlLnNldFByb2plY3QobmV3UHJvai5uYW1lLCBKU09OLnN0cmluZ2lmeShuZXdQcm9qKSlcbiAgICAgICAgICAgIGZvcm0ucmVtb3ZlKClcbiAgICAgICAgbGV0IG5ld0xpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgICAgIG5ld0xpc3RJdGVtLmlubmVyVGV4dCA9IGlucHV0LnZhbHVlXG4gICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKG5ld0xpc3RJdGVtKVxuXG4gICAgICAgIG5ld0xpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAgICBsZXQgc3RvcmVkT2JqID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0obmV3TGlzdEl0ZW0uaW5uZXJUZXh0KVxuICAgICAgICAgICBsZXQgcGFyc2VkT2JqID0gSlNPTi5wYXJzZShzdG9yZWRPYmopXG4gICAgICAgICAgIGxldCBsaXN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdE5hbWVcIilcbiAgICAgICAgICAgbGlzdE5hbWUuaW5uZXJUZXh0ID0gcGFyc2VkT2JqLm5hbWVcbiAgICAgICAgICAgY29uc29sZS5sb2cobmV3TGlzdEl0ZW0uaW5uZXJUZXh0KVxuICAgICAgICAgICBjb25zb2xlLmxvZyhwYXJzZWRPYmopXG5cbiAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpIDwgcGFyc2VkT2JqLnRhc2s7IGkrKyl7XG4gICAgICAgICAgICAgICAgbGV0IHRhc2tOYW1lID0gcGFyc2VkT2JqLnRhc2tbaV1cbiAgICAgICAgICAgICAgIGxldCBsaXN0UGxhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICAgICAgICAgICAgICBsaXN0UGxhY2UuaW5uZXJUZXh0ID0gdGFza05hbWVcbiAgICAgICAgICAgICAgICBsZXQgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tMaXN0XCIpXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQobGlzdFBsYWNlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgICAgICBcbiAgICB9KVxuICAgIFxuICAgICAgICBcbiAgICB9KVxuICBcbn0iLCIvL2ltcG9ydCB7IHRvRGF0ZSwgaXNUb2RheSwgaXNUaGlzV2Vlaywgc3ViRGF5cyB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5jbGFzcyBQcm9qZWN0e1xuXG4gICAgY29uc3RydWN0b3IocHJvamVjdE5hbWUpe1xuICAgICAgICB0aGlzLm5hbWUgPSBwcm9qZWN0TmFtZVxuICAgICAgICB0aGlzLnRhc2sgPSBbXVxuICAgIH1cbiAgIHNldE5hbWUoTmV3bmFtZSl7XG4gICAgICAgIHRoaXMubmFtZSA9IE5ld25hbWVcbiAgICB9XG4gICAgZ2V0TmFtZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lXG4gICAgfVxuICAgIHNldFRhc2sodGFzayl7XG4gICAgICAgIHRoaXMudGFzay5wdXNoKHRhc2spXG4gICAgfVxuICAgIGdldFRhc2soKXtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza1xuICAgIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdCIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcblxuZXhwb3J0IGRlZmF1bHQgU3RvcmFnZSA9IHtcbiAgICBcbiAgIFxuICAgIHNldFByb2plY3QocHJvamVjdCwgdmFsdWUpe1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0LCB2YWx1ZSlcbiAgICB9LFxuICAgZ2V0UHJvamVjdChwcm9qZWN0KXtcbiAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvamVjdClcbiAgICB9XG4gICAgXG4gICAgXG59IiwiY2xhc3MgVGFza3tcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkdWVEYXRlID0gXCJObyBkdWUgZGF0ZVwiKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXG4gICAgfVxuICAgIHNldE5hbWUobmFtZSl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB9XG4gICAgZ2V0TmFtZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lXG4gICAgfVxuICAgIHNldER1ZURhdGUoZHVlRGF0ZSl7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcbiAgICB9XG4gICAgZ2V0RHVlRGF0ZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5kdWVEYXRlXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2siLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBVSSBmcm9tIFwiLi9tb2R1bGVzL1VJXCJcblxuVUkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=