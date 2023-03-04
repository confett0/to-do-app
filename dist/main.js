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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createProjectList\": () => (/* binding */ createProjectList),\n/* harmony export */   \"displayTodos\": () => (/* binding */ displayTodos),\n/* harmony export */   \"generateSelectOptions\": () => (/* binding */ generateSelectOptions)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _todo_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-app */ \"./src/todo-app.js\");\n\n\n\nconst wrap = document.querySelector(\".todo-wrap\");\nconst projectWrap = document.querySelector(\".project-list\");\n\nconst createElement = (el, className, content) => {\n  const element = document.createElement(el);\n  element.setAttribute(\"class\", className);\n  element.textContent = content;\n  return element;\n};\n\nconst createTodoDiv = (todo) => {\n  const todoDiv = createElement(\"div\", \"todo\");\n  todoDiv.id = _task__WEBPACK_IMPORTED_MODULE_0__.taskManager.list.indexOf(todo);\n\n  const checkbox = createElement(\"input\", \"checkbox\");\n  checkbox.setAttribute(\"type\", \"checkbox\");\n\n  const todoName = createElement(\"p\", \"todo-name\", todo.name);\n\n  const deleteTodo = createElement(\"div\", \"delete-button\", \"x\");\n\n  todoDiv.append(checkbox, todoName, deleteTodo);\n  wrap.appendChild(todoDiv);\n\n  // move event listeners somewhere for cleaner code\n  checkbox.addEventListener(\"change\", todo.doneUndone);\n  deleteTodo.addEventListener(\"click\", () => {\n    _task__WEBPACK_IMPORTED_MODULE_0__.taskManager.deleteTask(todo);\n    wrap.removeChild(todoDiv);\n  });\n\n  return todoDiv;\n};\n\nconst displayTodos = (list) => {\n  wrap.innerHTML = \"\";\n  list.map((todo) => createTodoDiv(todo));\n};\n\n// Sidebar\n\nconst showAll = document.getElementById(\"show-all\");\nshowAll.addEventListener(\"click\", () => {\n  displayTodos(_task__WEBPACK_IMPORTED_MODULE_0__.taskManager.list);\n});\n\nconst createProjectLi = (project) => {\n  const projectLi = createElement(\"li\", \"project\", project);\n  const idName = project.toLowerCase();\n  projectLi.setAttribute(\"id\", idName);\n\n  projectWrap.appendChild(projectLi);\n\n  projectLi.addEventListener(\"click\", (e) => displayTodos((0,_todo_app__WEBPACK_IMPORTED_MODULE_1__.projectFilter)(e.target.id)));\n};\n\nconst createProjectList = () => {\n  projectWrap.innerHTML = \"\";\n  _task__WEBPACK_IMPORTED_MODULE_0__.taskManager.categories.map((project) => createProjectLi(project));\n};\n\n// Todo form\n\n// Create select options from category array\n\nconst generateSelectOptions = () => {\n\nconst categorySelect = document.getElementById(\"category\");\ncategorySelect.innerHTML = \"\";\nfor (let i = 0; i < _task__WEBPACK_IMPORTED_MODULE_0__.taskManager.categories.length; i++) {\n  const el = document.createElement(\"option\");\n  el.textContent = _task__WEBPACK_IMPORTED_MODULE_0__.taskManager.categories[i];\n  el.value = _task__WEBPACK_IMPORTED_MODULE_0__.taskManager.categories[i];\n  categorySelect.appendChild(el);\n}\n  return categorySelect;\n}\n\nconst todoForm = document.getElementById(\"task-form\");\n\ntodoForm.onsubmit = (e) => {\n  e.preventDefault();\n  const formData = new FormData(todoForm);\n  const newTodo = {};\n\n  formData.forEach((value, key) => (newTodo[key] = value));\n\n  _task__WEBPACK_IMPORTED_MODULE_0__.taskManager.addTask(newTodo.name);\n  displayTodos(_task__WEBPACK_IMPORTED_MODULE_0__.taskManager.list);\n  todoForm.reset();\n};\n\n// To do form modal\n\nconst openModal = document.getElementById(\"add-task-button\");\nconst closeModal = document.getElementById(\"cancel-task\");\nopenModal.addEventListener(\"click\", () => todoForm.style.display = \"block\");\ncloseModal.addEventListener(\"click\", () => todoForm.style.display = \"none\");\n\n// Project form\n\nconst projectForm = document.getElementById(\"project-form\");\n\nprojectForm.onsubmit = (e) => {\n  e.preventDefault();\n  const formData = new FormData(projectForm);\n  const newProject = {};\n\n  formData.forEach((value, key) => (newProject[key] = value));\n  _task__WEBPACK_IMPORTED_MODULE_0__.taskManager.categories.push(newProject.name);\n  createProjectList();\n  generateSelectOptions();\n  projectForm.reset();\n};\n\n\n\n\n\n//# sourceURL=webpack://to-do-app/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\n\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__.displayTodos)(_task__WEBPACK_IMPORTED_MODULE_1__.taskManager.list);\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__.createProjectList)();\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__.generateSelectOptions)();\n\n//# sourceURL=webpack://to-do-app/./src/index.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task),\n/* harmony export */   \"taskManager\": () => (/* binding */ taskManager)\n/* harmony export */ });\nclass Task {\n  constructor(name, category, priority) {\n    this.name = name;\n    this.category = category;\n    // this.dueDate = dueDate; we'll had date later\n    this.priority = priority;\n    this.done = false;\n  }\n\n  doneUndone() {\n    if (this.done === false) {\n      this.done = true;\n    } else {\n      this.done = false;\n    }\n  }\n}\n\nconst taskManager = {\n  list: [],\n  categories: [\"home\",\"work\"],\n\n  addTask(taskName, taskCategory, taskDate, taskPriority) {\n    this.list.push(new Task(taskName, taskCategory, taskDate, taskPriority));\n  },\n\n  deleteTask(task) {\n    this.list.splice(this.list.indexOf(task), 1);\n  },\n\n  deleteCategory(category) {\n    this.categories.splice(this.categories.indexOf(category),1);\n  }\n};\n\ntaskManager.addTask(\"eat\", \"home\");\ntaskManager.addTask(\"sleep\", \"work\");\ntaskManager.addTask(\"repeat\", \"home\");\n\n\n\n\n//# sourceURL=webpack://to-do-app/./src/task.js?");

/***/ }),

/***/ "./src/todo-app.js":
/*!*************************!*\
  !*** ./src/todo-app.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectFilter\": () => (/* binding */ projectFilter)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\nconst projectFilter = (project) => {\n    const newArr = _task__WEBPACK_IMPORTED_MODULE_0__.taskManager.list.filter(task => task.category === project);\n    console.log(newArr);\n    return newArr;\n}\n\n\n\n//# sourceURL=webpack://to-do-app/./src/todo-app.js?");

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