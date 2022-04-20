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
    
    cancelBtn.addEventListener("click", function(){
        form.remove()
    })

    addBtn.addEventListener("click", function(){
        let newTaskName = input.value;
        let newListTask = document.createElement("li");
        newListTask.innerText = newTaskName;
        let newTaskObj = new _task__WEBPACK_IMPORTED_MODULE_1__["default"](newTaskName)
        console.log(newTaskObj)
        let objName = document.querySelector(".listName").innerText
        console.log(objName)
        let stored = JSON.parse(localStorage.getItem(objName))
        console.log(stored)
        stored.task.push(newTaskObj)
        _storage__WEBPACK_IMPORTED_MODULE_2__["default"].setProject(objName, JSON.stringify(stored))
        form.remove()
        console.log(stored.task[0].name)
        console.log(stored.task.length)
        for(let i=0; i < stored.task.length; i++){
            let box = document.createElement("div")
            let taskName = stored.task[i].name
           let listPlace = document.createElement("li")
            listPlace.innerText = taskName
            let placeholder = document.querySelector(".taskList")
            placeholder.appendChild(box)
            box.appendChild(listPlace)
        }
      
    })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFnQztBQUNOO0FBQ007QUFDVTs7QUFFM0I7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDZDQUFJO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkRBQWtCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix3QkFBd0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnREFBTztBQUNqQztBQUNBLFFBQVEsMkRBQWtCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5QixvQkFBb0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDN0hBLFdBQVcsdUNBQXVDOztBQUVsRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEJpQjtBQUNOOztBQUUxQixpRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlFQUFlOzs7Ozs7VUNwQmY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ042Qjs7QUFFN0IsdURBQUUsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbmV5ZG8vLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly9ob25leWRvLy4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9ob25leWRvLy4vc3JjL21vZHVsZXMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9ob25leWRvLy4vc3JjL21vZHVsZXMvdGFzay5qcyIsIndlYnBhY2s6Ly9ob25leWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2hvbmV5ZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2hvbmV5ZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ob25leWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaG9uZXlkby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgU3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5pbXBvcnQgeyBhZGQsIHBhcnNlSlNPTiB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVSSgpe1xuICAgIFxuXG4gICAgIGxldCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRQcm9qZWN0XCIpO1xuICAgICBsZXQgdGFza05ldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza1wiKVxuICAgICBcbnRhc2tOZXcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBmb3JtLmNsYXNzTmFtZSA9IFwiZm9ybVwiXG4gICAgICAgIGxldCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza0xpc3RcIilcbiAgICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQoZm9ybSlcbiAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgICAgIGlucHV0LmNsYXNzTmFtZSA9IFwiaW5wdXRcIlxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgbGV0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICAgICAgYWRkQnRuLnR5cGUgPSBcImJ1dHRvblwiXG4gICAgICAgIGFkZEJ0bi5pbm5lclRleHQgPSBcIkFkZCBQcm9qZWN0XCJcbiAgICAgICAgYWRkQnRuLmNsYXNzTmFtZSA9IFwiYWRkQnV0dG9uXCJcbiAgICAgICAgbGV0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICAgICAgY2FuY2VsQnRuLnR5cGUgPSBcImJ1dHRvblwiXG4gICAgICAgIGNhbmNlbEJ0bi5pbm5lclRleHQgPSBcIkNhbmNlbFwiXG4gICAgICAgIGNhbmNlbEJ0bi5jbGFzc05hbWUgPSBcImNhbmNlbEJ1dHRvblwiXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoYWRkQnRuKVxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGNhbmNlbEJ0bilcbiAgICBcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGZvcm0ucmVtb3ZlKClcbiAgICB9KVxuXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICBsZXQgbmV3VGFza05hbWUgPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgbGV0IG5ld0xpc3RUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBuZXdMaXN0VGFzay5pbm5lclRleHQgPSBuZXdUYXNrTmFtZTtcbiAgICAgICAgbGV0IG5ld1Rhc2tPYmogPSBuZXcgVGFzayhuZXdUYXNrTmFtZSlcbiAgICAgICAgY29uc29sZS5sb2cobmV3VGFza09iailcbiAgICAgICAgbGV0IG9iak5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3ROYW1lXCIpLmlubmVyVGV4dFxuICAgICAgICBjb25zb2xlLmxvZyhvYmpOYW1lKVxuICAgICAgICBsZXQgc3RvcmVkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShvYmpOYW1lKSlcbiAgICAgICAgY29uc29sZS5sb2coc3RvcmVkKVxuICAgICAgICBzdG9yZWQudGFzay5wdXNoKG5ld1Rhc2tPYmopXG4gICAgICAgIFN0b3JhZ2Uuc2V0UHJvamVjdChvYmpOYW1lLCBKU09OLnN0cmluZ2lmeShzdG9yZWQpKVxuICAgICAgICBmb3JtLnJlbW92ZSgpXG4gICAgICAgIGNvbnNvbGUubG9nKHN0b3JlZC50YXNrWzBdLm5hbWUpXG4gICAgICAgIGNvbnNvbGUubG9nKHN0b3JlZC50YXNrLmxlbmd0aClcbiAgICAgICAgZm9yKGxldCBpPTA7IGkgPCBzdG9yZWQudGFzay5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBsZXQgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICAgICAgbGV0IHRhc2tOYW1lID0gc3RvcmVkLnRhc2tbaV0ubmFtZVxuICAgICAgICAgICBsZXQgbGlzdFBsYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgICAgICAgICBsaXN0UGxhY2UuaW5uZXJUZXh0ID0gdGFza05hbWVcbiAgICAgICAgICAgIGxldCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza0xpc3RcIilcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyLmFwcGVuZENoaWxkKGJveClcbiAgICAgICAgICAgIGJveC5hcHBlbmRDaGlsZChsaXN0UGxhY2UpXG4gICAgICAgIH1cbiAgICAgIFxuICAgIH0pXG59KVxuICAgICBcblxuICAgIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBmb3JtLmNsYXNzTmFtZSA9IFwiZm9ybVwiXG4gICAgICAgIGxldCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdExpc3RzXCIpXG4gICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGZvcm0pXG4gICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgICAgICBpbnB1dC5jbGFzc05hbWUgPSBcImlucHV0XCJcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgIGxldCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICAgIGFkZEJ0bi50eXBlID0gXCJidXR0b25cIlxuICAgICAgICBhZGRCdG4uaW5uZXJUZXh0ID0gXCJBZGQgUHJvamVjdFwiXG4gICAgICAgIGFkZEJ0bi5jbGFzc05hbWUgPSBcImFkZEJ1dHRvblwiXG4gICAgICAgIGxldCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICAgIGNhbmNlbEJ0bi50eXBlID0gXCJidXR0b25cIlxuICAgICAgICBjYW5jZWxCdG4uaW5uZXJUZXh0ID0gXCJDYW5jZWxcIlxuICAgICAgICBjYW5jZWxCdG4uY2xhc3NOYW1lID0gXCJjYW5jZWxCdXR0b25cIlxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGFkZEJ0bilcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjYW5jZWxCdG4pXG5cblxuICAgICAgIC8vIGNsaWNrYWJsZSBjYW5jZWwgYnV0dG9uXG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICBmb3JtLnJlbW92ZSgpXG5cbiAgICB9KVxuICAgICAgICAvLyBhZGQgYnV0dG9uXG5cblxuICAgICAgIFxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgXG4gICAgICAgIGxldCBuZXdQcm9qID0gbmV3IFByb2plY3QoaW5wdXQudmFsdWUpXG4gICAgICAgIFxuICAgICAgICBTdG9yYWdlLnNldFByb2plY3QobmV3UHJvai5uYW1lLCBKU09OLnN0cmluZ2lmeShuZXdQcm9qKSlcbiAgICAgICAgICAgIGZvcm0ucmVtb3ZlKClcbiAgICAgICAgbGV0IG5ld0xpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgICAgIG5ld0xpc3RJdGVtLmlubmVyVGV4dCA9IGlucHV0LnZhbHVlXG4gICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKG5ld0xpc3RJdGVtKVxuXG4gICAgICAgIG5ld0xpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAgICBsZXQgc3RvcmVkT2JqID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0obmV3TGlzdEl0ZW0uaW5uZXJUZXh0KVxuICAgICAgICAgICBsZXQgcGFyc2VkT2JqID0gSlNPTi5wYXJzZShzdG9yZWRPYmopXG4gICAgICAgICAgIGxldCBsaXN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdE5hbWVcIilcbiAgICAgICAgICAgbGlzdE5hbWUuaW5uZXJUZXh0ID0gcGFyc2VkT2JqLm5hbWVcbiAgICAgICAgICAgY29uc29sZS5sb2cobmV3TGlzdEl0ZW0uaW5uZXJUZXh0KVxuICAgICAgICAgICBjb25zb2xlLmxvZyhwYXJzZWRPYmopXG5cbiAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpIDwgcGFyc2VkT2JqLnRhc2s7IGkrKyl7XG4gICAgICAgICAgICAgICAgbGV0IHRhc2tOYW1lID0gcGFyc2VkT2JqLnRhc2tbaV1cbiAgICAgICAgICAgICAgIGxldCBsaXN0UGxhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICAgICAgICAgICAgICBsaXN0UGxhY2UuaW5uZXJUZXh0ID0gdGFza05hbWVcbiAgICAgICAgICAgICAgICBsZXQgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tMaXN0XCIpXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQobGlzdFBsYWNlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgICAgICBcbiAgICB9KVxuICAgIFxuICAgICAgICBcbiAgICB9KVxuICBcbn0iLCIvL2ltcG9ydCB7IHRvRGF0ZSwgaXNUb2RheSwgaXNUaGlzV2Vlaywgc3ViRGF5cyB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5jbGFzcyBQcm9qZWN0e1xuXG4gICAgY29uc3RydWN0b3IocHJvamVjdE5hbWUpe1xuICAgICAgICB0aGlzLm5hbWUgPSBwcm9qZWN0TmFtZVxuICAgICAgICB0aGlzLnRhc2sgPSBbXVxuICAgIH1cbiAgIHNldE5hbWUoTmV3bmFtZSl7XG4gICAgICAgIHRoaXMubmFtZSA9IE5ld25hbWVcbiAgICB9XG4gICAgZ2V0TmFtZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lXG4gICAgfVxuICAgIHNldFRhc2sodGFzayl7XG4gICAgICAgIHRoaXMudGFzay5wdXNoKHRhc2spXG4gICAgfVxuICAgIGdldFRhc2soKXtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza1xuICAgIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdCIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcblxuZXhwb3J0IGRlZmF1bHQgU3RvcmFnZSA9IHtcbiAgICBcbiAgIFxuICAgIHNldFByb2plY3QocHJvamVjdCwgdmFsdWUpe1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0LCB2YWx1ZSlcbiAgICB9LFxuICAgZ2V0UHJvamVjdChwcm9qZWN0KXtcbiAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvamVjdClcbiAgICB9XG4gICAgXG4gICAgXG59IiwiY2xhc3MgVGFza3tcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkdWVEYXRlID0gXCJObyBkdWUgZGF0ZVwiKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXG4gICAgfVxuICAgIHNldE5hbWUobmFtZSl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB9XG4gICAgZ2V0TmFtZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lXG4gICAgfVxuICAgIHNldER1ZURhdGUoZHVlRGF0ZSl7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcbiAgICB9XG4gICAgZ2V0RHVlRGF0ZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5kdWVEYXRlXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2siLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBVSSBmcm9tIFwiLi9tb2R1bGVzL1VJXCJcblxuVUkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=