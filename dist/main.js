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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createProjectList\": () => (/* binding */ createProjectList),\n/* harmony export */   \"displayTodos\": () => (/* binding */ displayTodos),\n/* harmony export */   \"generateSelectOptions\": () => (/* binding */ generateSelectOptions)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _todo_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-app */ \"./src/todo-app.js\");\n/* harmony import */ var _localstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localstorage */ \"./src/localstorage.js\");\n/* harmony import */ var _assets_edit_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/edit.png */ \"./src/assets/edit.png\");\n/* harmony import */ var _assets_delete_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/delete.png */ \"./src/assets/delete.png\");\n\n\n\n\n\n\nconst wrap = document.querySelector(\".todo-wrap\");\nconst projectWrap = document.querySelector(\".project-list\");\nconst projectTitle = document.querySelector(\".project-title\");\n\n// Helper functions for creating dom elements\n\nconst createElement = (el, className, content) => {\n  const element = document.createElement(el);\n  element.setAttribute(\"class\", className);\n  element.textContent = content;\n  return element;\n};\n\n// Create todo dom elements with event listeners\n\nconst createTodoDiv = (todo) => {\n  const todoDiv = createElement(\"div\", \"todo\");\n  todoDiv.id = _task__WEBPACK_IMPORTED_MODULE_0__.taskManager.list.indexOf(todo);\n\n  const checkbox = createElement(\"input\", \"checkbox\");\n  checkbox.setAttribute(\"type\", \"checkbox\");\n\n  const todoName = createElement(\"p\", \"todo-name\", todo.name);\n\n  if (todo.done === true) {\n    todoName.classList.add(\"done\");\n    checkbox.checked = true;\n  } else if (todo.done === false) {\n    todoName.classList.remove(\"done\");\n    checkbox.checked = false;\n  }\n\n  const todoCategory = createElement(\"p\", \"todo-category\", todo.category);\n  const todoDate = createElement(\"p\", \"todo-date\", todo.date);\n\n  const editButton = createElement(\"img\", \"edit-button\");\n  const deleteTodo = createElement(\"img\", \"delete-button\");\n\n  editButton.src = _assets_edit_png__WEBPACK_IMPORTED_MODULE_3__;\n  deleteTodo.src = _assets_delete_png__WEBPACK_IMPORTED_MODULE_4__;\n\n  todoDiv.append(\n    checkbox,\n    todoName,\n    todoCategory,\n    todoDate,\n    editButton,\n    deleteTodo\n  );\n  wrap.appendChild(todoDiv);\n\n  checkbox.addEventListener(\"change\", () => {\n    todoName.classList.toggle(\"done\");\n    (0,_task__WEBPACK_IMPORTED_MODULE_0__.doneUndone)(todo);\n    (0,_localstorage__WEBPACK_IMPORTED_MODULE_2__.saveTasks)();\n  });\n  editButton.addEventListener(\"click\", () => fillEditForm(todo));\n  deleteTodo.addEventListener(\"click\", () => {\n    _task__WEBPACK_IMPORTED_MODULE_0__.taskManager.deleteTask(todo);\n    wrap.removeChild(todoDiv);\n    (0,_localstorage__WEBPACK_IMPORTED_MODULE_2__.saveTasks)();\n  });\n\n  return todoDiv;\n};\n\n// Render todos\n\nconst displayTodos = (list) => {\n  wrap.replaceChildren();\n  list.map((todo) => createTodoDiv(todo));\n};\n\n// Sidebar\n\n// Show all todos button\n\nconst showAll = document.getElementById(\"show-all\");\nshowAll.addEventListener(\"click\", () => {\n  (0,_localstorage__WEBPACK_IMPORTED_MODULE_2__.getTasks)();\n  displayTodos(_task__WEBPACK_IMPORTED_MODULE_0__.taskManager.list);\n  projectTitle.textContent = \"All tasks\";\n});\n\n// Create select options from projects/category array\n\nconst generateSelectOptions = () => {\n  const categorySelect = document.getElementById(\"category\");\n  categorySelect.replaceChildren();\n  for (let i = 0; i < _task__WEBPACK_IMPORTED_MODULE_0__.taskManager.categories.length; i++) {\n    const el = document.createElement(\"option\");\n    el.textContent = _task__WEBPACK_IMPORTED_MODULE_0__.taskManager.categories[i];\n    el.value = _task__WEBPACK_IMPORTED_MODULE_0__.taskManager.categories[i];\n    categorySelect.appendChild(el);\n  }\n  \n  return categorySelect;\n};\n\n// Display list of projects from array\n\nconst createProjectList = () => {\n  (0,_localstorage__WEBPACK_IMPORTED_MODULE_2__.getProjects)();\n  projectWrap.replaceChildren();\n  _task__WEBPACK_IMPORTED_MODULE_0__.taskManager.categories.map((project) => createProjectDiv(project));\n};\n\n// Create projects dom elements\n\nconst createProjectDiv = (project) => {\n  const projectDiv = createElement(\"div\", \"project\");\n  const projectName = createElement(\"h3\", \"project-name\", project)\n  const deleteProjectButton = createElement(\"div\",\"delete-project-button\", \"x\");\n\n  projectDiv.append(projectName, deleteProjectButton);\n  projectWrap.appendChild(projectDiv);\n\n  deleteProjectButton.addEventListener(\"click\", () => {\n    _task__WEBPACK_IMPORTED_MODULE_0__.taskManager.deleteCategory(project);\n    (0,_localstorage__WEBPACK_IMPORTED_MODULE_2__.saveProjects)();\n    (0,_localstorage__WEBPACK_IMPORTED_MODULE_2__.saveTasks)();\n    displayTodos(_task__WEBPACK_IMPORTED_MODULE_0__.taskManager.list);\n    generateSelectOptions();\n    createProjectList();\n  });\n\n  projectName.addEventListener(\"click\", () => {\n    displayTodos((0,_todo_app__WEBPACK_IMPORTED_MODULE_1__.projectFilter)(project));\n    projectTitle.textContent = project;\n  })\n\n};\n\n// Project form\n\nconst projectForm = document.getElementById(\"project-form\");\n\nprojectForm.onsubmit = (e) => {\n  e.preventDefault();\n  const formData = new FormData(projectForm);\n  const newProject = {};\n\n  formData.forEach((value, key) => (newProject[key] = value));\n  _task__WEBPACK_IMPORTED_MODULE_0__.taskManager.categories.push(newProject.name);\n  (0,_localstorage__WEBPACK_IMPORTED_MODULE_2__.saveProjects)();\n  createProjectList();\n  generateSelectOptions();\n  projectForm.reset();\n};\n\n// Open & close project form modal\n\nconst addProjectButton = document.getElementById(\"add-project-button\");\nconst closeProjectModal = document.getElementById(\"cancel-project\");\naddProjectButton.addEventListener(\"click\", () => projectForm.style.display = \"block\");\ncloseProjectModal.addEventListener(\"click\", () => projectForm.style.display = \"none\");\n\n// Todo form\n\nconst todoForm = document.querySelector(\".task-form\");\n\n// Fill out todo form when editing todos\n\nconst fillEditForm = (task) => {\n  todoForm.style.display = \"block\";\n  todoForm.setAttribute(\"id\", task.id);\n  document.getElementById(\"form-add-button\").textContent = \"Edit\";\n  document.getElementById(\"name\").value = task.name;\n  document.getElementById(\"category\").value = task.category;\n  document.getElementById(\"date\").value = task.date;\n};\n\n// Add/edit todo form\n\ntodoForm.onsubmit = (e) => {\n  e.preventDefault();\n  const formData = new FormData(todoForm);\n  const newTodo = {};\n\n  formData.forEach((value, key) => (newTodo[key] = value));\n\n  if (document.getElementById(\"form-add-button\").textContent === \"Edit\") {\n    const editTodo = _task__WEBPACK_IMPORTED_MODULE_0__.taskManager.list.filter(\n      (task) => task.id == e.target.id\n    )[0];\n    (0,_task__WEBPACK_IMPORTED_MODULE_0__.editTask)(editTodo, newTodo.name, newTodo.category, newTodo.date);\n  \n  } else {\n    _task__WEBPACK_IMPORTED_MODULE_0__.taskManager.addTask(newTodo.name, newTodo.category, newTodo.date);\n  \n  }\n  (0,_localstorage__WEBPACK_IMPORTED_MODULE_2__.saveTasks)();\n  (0,_localstorage__WEBPACK_IMPORTED_MODULE_2__.getTasks)();\n  displayTodos(_task__WEBPACK_IMPORTED_MODULE_0__.taskManager.list);\n  todoForm.reset();\n  todoForm.style.display = \"none\";\n};\n\n// Open & close to do form modal\n\nconst addTodoButton = document.getElementById(\"add-task-button\");\nconst closeTodoModal = document.getElementById(\"cancel-task\");\naddTodoButton.addEventListener(\"click\", () => {\n  document.getElementById(\"form-add-button\").textContent = \"Add\";\n  todoForm.style.display = \"block\";\n});\ncloseTodoModal.addEventListener(\"click\", () => (todoForm.style.display = \"none\"));\n\n\n\n\n\n//# sourceURL=webpack://to-do-app/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _localstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localstorage */ \"./src/localstorage.js\");\n\n\n\n\n(0,_localstorage__WEBPACK_IMPORTED_MODULE_2__.getTasks)();\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__.displayTodos)(_task__WEBPACK_IMPORTED_MODULE_1__.taskManager.list);\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__.createProjectList)();\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__.generateSelectOptions)();\n\n//# sourceURL=webpack://to-do-app/./src/index.js?");

/***/ }),

/***/ "./src/localstorage.js":
/*!*****************************!*\
  !*** ./src/localstorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getProjects\": () => (/* binding */ getProjects),\n/* harmony export */   \"getTasks\": () => (/* binding */ getTasks),\n/* harmony export */   \"saveProjects\": () => (/* binding */ saveProjects),\n/* harmony export */   \"saveTasks\": () => (/* binding */ saveTasks)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\nconst saveTasks = () => {\n  localStorage.setItem(\"tasks\", JSON.stringify(_task__WEBPACK_IMPORTED_MODULE_0__.taskManager.list));\n};\n\nconst saveProjects = () => {\n  localStorage.setItem(\"projects\", JSON.stringify(_task__WEBPACK_IMPORTED_MODULE_0__.taskManager.categories));\n};\n\nconst getTasks = () => {\n  if (localStorage.getItem(\"tasks\") === null) {\n    _task__WEBPACK_IMPORTED_MODULE_0__.taskManager.list = [{name: \"eat\", category: \"home\"}, {name: \"sleep\", category: \"work\"}, {name: \"repeat\", category: \"home\"}]\n  } else {\n  _task__WEBPACK_IMPORTED_MODULE_0__.taskManager.list = JSON.parse(localStorage.getItem(\"tasks\"));\n}\n};\n\nconst getProjects = () => {\n  if (localStorage.getItem(\"projects\") === null) {\n    _task__WEBPACK_IMPORTED_MODULE_0__.taskManager.categories = [\"work\", \"home\"];\n  } else {\n  _task__WEBPACK_IMPORTED_MODULE_0__.taskManager.categories = JSON.parse(localStorage.getItem(\"projects\"));\n}\n};\n\n\n\n\n//# sourceURL=webpack://to-do-app/./src/localstorage.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task),\n/* harmony export */   \"doneUndone\": () => (/* binding */ doneUndone),\n/* harmony export */   \"editTask\": () => (/* binding */ editTask),\n/* harmony export */   \"taskManager\": () => (/* binding */ taskManager)\n/* harmony export */ });\nclass Task {\n  constructor(name, category, date) {\n    this.name = name;\n    this.category = category;\n    this.date = date;\n    this.done = false;\n    this.id = Math.floor(Math.random() * 10000);\n  }\n}\n\nconst editTask = (todo, newName,newCategory,newDate) => {\n  todo.name = newName;\n  todo.category = newCategory;\n  todo.date = newDate;\n}\n\nconst doneUndone = (todo) => {\n  if (todo.done === false) {\n    todo.done = true;\n  } else {\n    todo.done = false;\n  }\n}\n\nconst taskManager = {\n  list: [],\n  categories: [\"home\",\"work\"],\n\n  addTask(taskName, taskCategory, taskDate) {\n    this.list.push(new Task(taskName, taskCategory, taskDate));\n  },\n\n  deleteTask(task) {\n    this.list.splice(this.list.indexOf(task), 1);\n  },\n\n  deleteCategory(project) {\n    this.categories.splice(this.categories.indexOf(project),1);\n    this.list = this.list.filter(task => task.category !== project);\n  }\n};\n\n\n\n\n//# sourceURL=webpack://to-do-app/./src/task.js?");

/***/ }),

/***/ "./src/todo-app.js":
/*!*************************!*\
  !*** ./src/todo-app.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectFilter\": () => (/* binding */ projectFilter)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\nconst projectFilter = (project) => {\n    const newArr = _task__WEBPACK_IMPORTED_MODULE_0__.taskManager.list.filter(task => task.category === project);\n    return newArr;\n}\n\n\n\n//# sourceURL=webpack://to-do-app/./src/todo-app.js?");

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