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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n// import initializeApplication from './application';\n\n\n// New Task button\nconst taskModal = document.getElementById('task-modal')\nconst addTaskBtn = document.getElementById('add-task-btn');\n    addTaskBtn.addEventListener(\"click\", (e) => {\n        taskModal.showModal();\n        // toDoList.addTask(createTask(\"do ur laundry\", \"today\"));\n    })\n\nconst taskContainer = document.getElementById(\"task-container\");\n\nconst taskTitle = document.getElementById(\"task-title\");\nconst taskDescription = document.getElementById(\"task-description\");\nconst taskDate = document.getElementById(\"task-date\");\nconst taskPriority = document.getElementById(\"task-priority\");\nconst taskProjects = document.getElementById(\"task-projects\");\n\nconst taskTitleError = document.getElementById(\"title-error\");\nconst taskDescriptionError = document.getElementById(\"description-error\");\nconst taskDateError = document.getElementById(\"date-error\");\nconst taskPriorityError = document.getElementById(\"priority-error\");\n// const taskProjectsError = document.getElementById(\"projects-error\");\n\nform.addEventListener('submit', (e) => { // form submit EventListener\n    if (!validateInputs()) {\n        e.preventDefault();\n        console.log(\"Prevented Default Submit\");\n    }\n    else {\n        e.preventDefault();\n        let task = (0,_task__WEBPACK_IMPORTED_MODULE_0__.createTask)(\n            taskTitle.value, \n            taskDescription.value, \n            taskDate.value, \n            taskPriority.value,\n            taskProjects.value\n        );\n\n        toDoList.addTask(task);\n        addTaskToDOM(task);\n\n        clearFormInputs();\n\n        taskModal.close(); // Close modal\n    };\n});\n\ncancelBtn.addEventListener('click', (e) => { // cancelBtn EventListener\n    clearFormInputs();\n    taskModal.close();\n});\n\nfunction validateInputs() { // Return false if there are errors\n    let errorState = false;\n    if (taskTitle.value === \"\") {\n        taskTitleError.innerText = \"*Please enter title\";\n        errorState = true;\n    } else {\n        taskTitleError.innerText = \"\";\n    }\n\n    if (taskDescription.value === \"\") {\n        taskDescriptionError.innerText = \"*Please enter description\";\n        errorState = true;\n    } else {\n        taskDescriptionError.innerText = \"\";\n    }\n\n    if (taskDate.value === \"\") {\n        taskDateError.innerText = \"*Please enter the date\";\n        errorState = true;\n    } else {\n        taskDateError.innerText = \"\";\n    }\n\n    if (taskPriority.value === \"\") {\n        taskPriorityError.innerText = \"*Please enter the priority\";\n        errorState = true;\n    } else {\n        taskPriorityError.innerText = \"\";\n    }\n\n    if (errorState) {\n        console.log(\"Validating: false\");\n        return false;\n    }\n    console.log(\"Validating: true\");\n    return true;\n}\n\nfunction clearFormInputs() {\n    console.log(\"Clearing Form Inputs\");\n\n    taskTitle.value = \"\"; \n    taskDescription.value = \"\"; \n    taskDate.value = \"\";\n    taskPriority.value = \"\";\n\n    taskTitleError.innerText = \"\";\n    taskDescriptionError.innerText = \"\";\n    taskDateError.innerText = \"\";\n    taskPriorityError.innerText = \"\";\n}\n\n// Create array of ToDo Items\nclass ToDoList {\n    constructor () {\n        this.list = [];\n    }\n\n    addTask(newTask) {\n        this.list.push(newTask);\n        console.log(\"Adding '\" + newTask.title + \"' at index: \" + (this.list.length - 1));\n        console.log(this.list);\n    }\n    \n    removeTask(index) {\n        console.log(\"Removing Task...\");\n        this.list.splice(index, 1);\n    }\n}\n\nfunction addTaskToDOM(task) {\n    console.log(\"Adding task to DOM\");\n\n    const taskArticle = document.createElement('article');\n    taskArticle.classList.add('task-article');\n    taskContainer.appendChild(taskArticle);\n\n    const articleTitle = document.createElement('h3');\n    articleTitle.innerText = task.title;\n    taskArticle.appendChild(articleTitle);\n\n    const articleDescription = document.createElement('div');\n    articleDescription.innerText = task.description;\n    taskArticle.appendChild(articleDescription);\n\n    const articleDate = document.createElement('div');\n    articleDate.innerText = task.date;\n    taskArticle.appendChild(articleDate);\n\n    const articlePriority = document.createElement('div');\n    articlePriority.innerText = task.priority;\n    taskArticle.appendChild(articlePriority);\n\n    const articleProjects = document.createElement('div');\n    articleProjects.innerText = task.project;\n    taskArticle.appendChild(articleProjects);\n}\n\n// class Project {\n//     constructor () {\n//         this.list = [];\n//     }\n    \n//     updateFromToDoList() {\n        \n//     }\n\n//     function toUpper(string) {\n//         return string.toUpperCase();\n//     }\n//     const cats = [\"Leopard\", \"Serval\", \"Jaguar\", \"Tiger\", \"Caracal\", \"Lion\"];\n//     const upperCats = cats.map(toUpper);\n// }\n\nconst toDoList = new ToDoList();\n\nconst sampleTask1 = (0,_task__WEBPACK_IMPORTED_MODULE_0__.createTask)(\"Laundry\", \"do ur laundry\", \"today\", \"low\", \"on\");\ntoDoList.addTask(sampleTask1);\naddTaskToDOM(sampleTask1);\n\n\nconst sampleTask2 = (0,_task__WEBPACK_IMPORTED_MODULE_0__.createTask)(\"Taxes\", \"pay ur taxes\", \"tomorrow\", \"high\", \"off\");\ntoDoList.addTask(sampleTask2);\naddTaskToDOM(sampleTask2);\n\n\n// For specific categories, filter from the main array to fill the new category\n\n// initializeApplication();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTask: () => (/* binding */ createTask)\n/* harmony export */ });\nconst createTask = (title, description, date, priority, project) => {\n\tconsole.log(\"Creating Task...\");\n    console.log({title, description, date, priority, project});\n\n\treturn { \n        title,\n        description, \n        date,\n        priority,\n        project\n    };\n};\n\n//# sourceURL=webpack://todo-list/./src/task.js?");

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