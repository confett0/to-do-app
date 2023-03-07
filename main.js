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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createProjectList\": () => (/* binding */ createProjectList),\n/* harmony export */   \"displayTodos\": () => (/* binding */ displayTodos),\n/* harmony export */   \"generateSelectOptions\": () => (/* binding */ generateSelectOptions)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _todo_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-app */ \"./src/todo-app.js\");\n/* harmony import */ var _assets_edit_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/edit.png */ \"./src/assets/edit.png\");\n/* harmony import */ var _assets_delete_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/delete.png */ \"./src/assets/delete.png\");\n\n\n\n\n\nconst wrap = document.querySelector(\".todo-wrap\");\nconst projectWrap = document.querySelector(\".project-list\");\n\nconst createElement = (el, className, content) => {\n  const element = document.createElement(el);\n  element.setAttribute(\"class\", className);\n  element.textContent = content;\n  return element;\n};\n\nconst createTodoDiv = (todo) => {\n  const todoDiv = createElement(\"div\", \"todo\");\n  todoDiv.id = _task__WEBPACK_IMPORTED_MODULE_0__.taskManager.list.indexOf(todo);\n\n  const checkbox = createElement(\"input\", \"checkbox\");\n  checkbox.setAttribute(\"type\", \"checkbox\");\n\n  const todoName = createElement(\"p\", \"todo-name\", todo.name);\n  const todoCategory = createElement(\"p\", \"todo-category\", todo.category);\n  const todoDate = createElement(\"p\", \"todo-date\", todo.date);\n\n  const editButton = createElement(\"img\", \"edit-button\");\n  const deleteTodo = createElement(\"img\", \"delete-button\");\n\n  editButton.src = _assets_edit_png__WEBPACK_IMPORTED_MODULE_2__;\n  deleteTodo.src = _assets_delete_png__WEBPACK_IMPORTED_MODULE_3__;\n\n  todoDiv.append(\n    checkbox,\n    todoName,\n    todoCategory,\n    todoDate,\n    editButton,\n    deleteTodo\n  );\n  wrap.appendChild(todoDiv);\n\n  // move event listeners somewhere for cleaner code\n  checkbox.addEventListener(\"change\", todo.doneUndone);\n  editButton.addEventListener(\"click\", () => fillEditForm(todo));\n  deleteTodo.addEventListener(\"click\", () => {\n    _task__WEBPACK_IMPORTED_MODULE_0__.taskManager.deleteTask(todo);\n    wrap.removeChild(todoDiv);\n  });\n\n  return todoDiv;\n};\n\nconst displayTodos = (list) => {\n  wrap.innerHTML = \"\";\n  list.map((todo) => createTodoDiv(todo));\n};\n\n// Sidebar\n\nconst showAll = document.getElementById(\"show-all\");\nshowAll.addEventListener(\"click\", () => {\n  displayTodos(_task__WEBPACK_IMPORTED_MODULE_0__.taskManager.list);\n});\n\nconst createProjectLi = (project) => {\n  const projectLi = createElement(\"li\", \"project\", project);\n  const idName = project.toLowerCase();\n  projectLi.setAttribute(\"id\", idName);\n\n  projectWrap.appendChild(projectLi);\n\n  projectLi.addEventListener(\"click\", (e) =>\n    displayTodos((0,_todo_app__WEBPACK_IMPORTED_MODULE_1__.projectFilter)(e.target.id))\n  );\n};\n\nconst createProjectList = () => {\n  projectWrap.innerHTML = \"\";\n  _task__WEBPACK_IMPORTED_MODULE_0__.taskManager.categories.map((project) => createProjectLi(project));\n};\n\n// Todo form\n\n// Create select options from category array\n\nconst generateSelectOptions = () => {\n  const categorySelect = document.getElementById(\"category\");\n  categorySelect.innerHTML = \"\";\n  for (let i = 0; i < _task__WEBPACK_IMPORTED_MODULE_0__.taskManager.categories.length; i++) {\n    const el = document.createElement(\"option\");\n    el.textContent = _task__WEBPACK_IMPORTED_MODULE_0__.taskManager.categories[i];\n    el.value = _task__WEBPACK_IMPORTED_MODULE_0__.taskManager.categories[i];\n    categorySelect.appendChild(el);\n  }\n  return categorySelect;\n};\n\nconst todoForm = document.querySelector(\".task-form\");\n\n// Edit todo\n\nconst fillEditForm = (task) => {\n  todoForm.style.display = \"block\";\n  todoForm.setAttribute(\"id\", task.id);\n  document.getElementById(\"form-add-button\").textContent = \"Edit\";\n  document.getElementById(\"name\").value = task.name;\n  document.getElementById(\"category\").value = task.category;\n  document.getElementById(\"date\").value = task.date;\n};\n\ntodoForm.onsubmit = (e) => {\n  e.preventDefault();\n  const formData = new FormData(todoForm);\n  const newTodo = {};\n\n  formData.forEach((value, key) => (newTodo[key] = value));\n\n  if (document.getElementById(\"form-add-button\").textContent === \"Edit\") {\n    const editTodo = _task__WEBPACK_IMPORTED_MODULE_0__.taskManager.list.filter(\n      (task) => task.id == e.target.id\n    )[0];\n\n    editTodo.editTask(newTodo.name, newTodo.category, newTodo.date);\n  } else {\n    _task__WEBPACK_IMPORTED_MODULE_0__.taskManager.addTask(newTodo.name, newTodo.category, newTodo.date);\n  }\n\n  displayTodos(_task__WEBPACK_IMPORTED_MODULE_0__.taskManager.list);\n  todoForm.reset();\n  todoForm.style.display = \"none\";\n};\n\n// To do form modal\n\nconst openModal = document.getElementById(\"add-task-button\");\nconst closeModal = document.getElementById(\"cancel-task\");\nopenModal.addEventListener(\"click\", () => (todoForm.style.display = \"block\"));\ncloseModal.addEventListener(\"click\", () => (todoForm.style.display = \"none\"));\n\n// Project form\n\nconst projectForm = document.getElementById(\"project-form\");\n\nprojectForm.onsubmit = (e) => {\n  e.preventDefault();\n  const formData = new FormData(projectForm);\n  const newProject = {};\n\n  formData.forEach((value, key) => (newProject[key] = value));\n  _task__WEBPACK_IMPORTED_MODULE_0__.taskManager.categories.push(newProject.name);\n  createProjectList();\n  generateSelectOptions();\n  projectForm.reset();\n};\n\n\n\n\n//# sourceURL=webpack://to-do-app/./src/dom.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task),\n/* harmony export */   \"taskManager\": () => (/* binding */ taskManager)\n/* harmony export */ });\nclass Task {\n  constructor(name, category, date) {\n    this.name = name;\n    this.category = category;\n    this.date = date;\n    this.done = false;\n    this.id = Math.floor(Math.random() * 10000);\n  }\n\n  doneUndone() {\n    if (this.done === false) {\n      this.done = true;\n    } else {\n      this.done = false;\n    }\n  }\n\n  editTask(newName,newCategory,newDate) {\n    this.name = newName;\n    this.category = newCategory;\n    this.date = newDate;\n  }\n}\n\nconst taskManager = {\n  list: [],\n  categories: [\"home\",\"work\"],\n\n  addTask(taskName, taskCategory, taskDate) {\n    this.list.push(new Task(taskName, taskCategory, taskDate));\n  },\n\n  deleteTask(task) {\n    this.list.splice(this.list.indexOf(task), 1);\n  },\n\n  deleteCategory(category) {\n    this.categories.splice(this.categories.indexOf(category),1);\n  }\n};\n\ntaskManager.addTask(\"eat\", \"home\");\ntaskManager.addTask(\"sleep\", \"work\");\ntaskManager.addTask(\"repeat\", \"home\");\n\n\n\n\n//# sourceURL=webpack://to-do-app/./src/task.js?");

/***/ }),

/***/ "./src/todo-app.js":
/*!*************************!*\
  !*** ./src/todo-app.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectFilter\": () => (/* binding */ projectFilter)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\nconst projectFilter = (project) => {\n    const newArr = _task__WEBPACK_IMPORTED_MODULE_0__.taskManager.list.filter(task => task.category === project);\n    console.log(newArr);\n    return newArr;\n}\n\n\n\n//# sourceURL=webpack://to-do-app/./src/todo-app.js?");

/***/ }),

/***/ "./src/assets/delete.png":
/*!*******************************!*\
  !*** ./src/assets/delete.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8185c790043d0ec198de.png\";\n\n//# sourceURL=webpack://to-do-app/./src/assets/delete.png?");

/***/ }),

/***/ "./src/assets/edit.png":
/*!*****************************!*\
  !*** ./src/assets/edit.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"020cf87733c2df9ee387.png\";\n\n//# sourceURL=webpack://to-do-app/./src/assets/edit.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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