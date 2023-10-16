"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Main.tsx":
/*!*********************************!*\
  !*** ./src/components/Main.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Main: function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/style */ \"./src/styles/style.ts\");\n/* harmony import */ var _navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar/Navbar */ \"./src/components/navbar/Navbar.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ListTasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ListTasks */ \"./src/components/ListTasks.tsx\");\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Modal */ \"./src/components/Modal.tsx\");\n/* harmony import */ var _public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public */ \"./public/index.jsx\");\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx-react-lite */ \"./node_modules/mobx-react-lite/es/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Main = _s((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__.observer)(_c = _s(()=>{\n    _s();\n    const [modal, setModal] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"none\");\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([\n        {\n            id: 1,\n            title: \"задача 1\",\n            date: \"2023-10-16\",\n            isChecked: false\n        }\n    ]);\n    const [renderTasks, setRenderTasks] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(tasks);\n    const [createTask, setCreateTask] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        title: \"\",\n        date: \"\"\n    });\n    const [removeTask, setRemoveTask] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    const addTask = ()=>{\n        if (createTask.title == \"\") return;\n        const task = {\n            id: tasks.length,\n            title: createTask.title,\n            date: createTask.date,\n            isChecked: false\n        };\n        const list = [\n            ...tasks,\n            task\n        ];\n        setTasks(list);\n        setModal(\"none\");\n    };\n    const handleCompleteStatusUpdate = (item)=>{\n        setTasks(tasks.map((task)=>task.id == item.id ? {\n                ...task,\n                isChecked: !task.isChecked\n            } : task));\n    };\n    const handleClickEditTask = (item, title)=>{\n        setTasks(tasks.map((task)=>task.id == item.id ? {\n                ...task,\n                title: title\n            } : task));\n    };\n    const handleClickDelete = ()=>{\n        setTasks(tasks.filter((task)=>task.id !== removeTask));\n        setModal(\"none\");\n    };\n    const getTasks = ()=>{\n        const str = localStorage.getItem(\"token\");\n        const userID = JSON.parse(str);\n        axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(\"http://localhost:5000/api/tasks/\" + \"\".concat(userID.id)).then((data)=>{\n            const item = data.data.tasks;\n            setTasks(item.sort((a, b)=>{\n                if (a.id > b.id) return 1;\n                if (a.id < b.id) return -1;\n                return 0;\n            }).map((el)=>el));\n        });\n    };\n    const handleOpenModalDelete = (id)=>{\n        setModal(\"delete\");\n        setRemoveTask(id);\n    };\n    // const createTask = async () => {\n    // \tconst str = localStorage.getItem('token')\n    // \tconst userID = JSON.parse(str)\n    // \taxios\n    // \t\t.post('http://localhost:5000/api/tasks/' + `${userID.id}`, taskNew)\n    // \t\t.then(data => console.log(data.data))\n    // \tsetModal('none')\n    // \tsetTaskNew({ title: '', date: '' })\n    // \tisRender(!render)\n    // }\n    const deleteTask = async ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"][\"delete\"](\"http://localhost:5000/api/tasks/\" + \"\".concat(removeTask)).then((data)=>console.log(data.data));\n        setModal(\"none\");\n    // isRender(!render)\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        getTasks();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setRenderTasks(tasks);\n    }, [\n        tasks\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_1__.MainStyle, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__.Navbar, {\n                        addTask: ()=>setModal(\"add\")\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Main.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 4\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ListTasks__WEBPACK_IMPORTED_MODULE_4__.ListTasks, {\n                        tasks: renderTasks,\n                        handleCompleteStatusUpdate: handleCompleteStatusUpdate,\n                        handleClickEditTask: handleClickEditTask,\n                        handleOpenModalDelete: handleOpenModalDelete\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Main.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 4\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Main.tsx\",\n                lineNumber: 103,\n                columnNumber: 3\n            }, undefined),\n            modal == \"add\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_5__.Modal, {\n                title: \"Create task\",\n                nameBtn: \"Save\",\n                active: modal,\n                IconBtn: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_6__.SaveIcon, {}, void 0, false, void 0, void 0),\n                onClickClose: ()=>setModal(\"none\"),\n                onClickSave: addTask,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Enter text...\",\n                        value: createTask.title,\n                        onChange: (e)=>setCreateTask((taskNew)=>({\n                                    ...taskNew,\n                                    title: e.target.value\n                                }))\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Main.tsx\",\n                        lineNumber: 124,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"date\",\n                        value: createTask.date,\n                        onChange: (e)=>setCreateTask((taskNew)=>({\n                                    ...taskNew,\n                                    date: e.target.value\n                                }))\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Main.tsx\",\n                        lineNumber: 130,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Main.tsx\",\n                lineNumber: 116,\n                columnNumber: 4\n            }, undefined),\n            modal == \"delete\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_5__.Modal, {\n                title: \"Delete task\",\n                nameBtn: \"Delete\",\n                active: modal,\n                onClickClose: ()=>setModal(\"none\"),\n                onClickSave: handleClickDelete,\n                IconBtn: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_6__.DeleteIcon, {}, void 0, false, void 0, void 0),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: \"Are you sure about deleting this task?\"\n                }, void 0, false, {\n                    fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Main.tsx\",\n                    lineNumber: 140,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Main.tsx\",\n                lineNumber: 139,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true);\n}, \"T7WTl0VSNr5tYM+OvcUhZrVWxCs=\")), \"T7WTl0VSNr5tYM+OvcUhZrVWxCs=\");\n_c1 = Main;\nvar _c, _c1;\n$RefreshReg$(_c, \"Main$observer\");\n$RefreshReg$(_c1, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UztnQkFBUzhDLGFBQWF6QjtnQkFBbUJ1Qix1QkFBUyw4REFBQ2xELCtDQUFVQTswQkFDeEosNEVBQUM2RDs4QkFBRzs7Ozs7Ozs7Ozs7OztBQUtSLHFFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01haW4udHN4PzMwYWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFpblN0eWxlIH0gZnJvbSAnQC9zdHlsZXMvc3R5bGUnXG5pbXBvcnQgeyBOYXZiYXIgfSBmcm9tICcuL25hdmJhci9OYXZiYXInXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBMaXN0VGFza3MgfSBmcm9tICcuL0xpc3RUYXNrcydcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnLi9Nb2RhbCdcbmltcG9ydCB7IERlbGV0ZUljb24sIFNhdmVJY29uIH0gZnJvbSAnLi4vLi4vcHVibGljJ1xuaW1wb3J0IHsgZGF0ZU5vdyB9IGZyb20gJ0AvRGF0ZU5vdydcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdC1saXRlJ1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJ0AvdXRpbHMvY29udGV4dCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IFRhc2tQcm9wcyB9IGZyb20gJ0AvaW50ZXJmYWNlL2ludGVyZmFjZSdcblxuZXhwb3J0IGNvbnN0IE1haW46IFJlYWN0LkZDID0gb2JzZXJ2ZXIoKCkgPT4ge1xuXG5cblx0Y29uc3QgW21vZGFsLCBzZXRNb2RhbF0gPSB1c2VTdGF0ZSgnbm9uZScpXG5cdGNvbnN0IFt0YXNrcywgc2V0VGFza3NdID0gdXNlU3RhdGUoW1xuXHRcdHtcblx0XHRcdGlkOiAxLFxuXHRcdFx0dGl0bGU6IFwi0LfQsNC00LDRh9CwIDFcIixcblx0XHRcdGRhdGU6IFwiMjAyMy0xMC0xNlwiLFxuXHRcdFx0aXNDaGVja2VkOiBmYWxzZVxuXHRcdH1cblx0XSlcblx0Y29uc3QgW3JlbmRlclRhc2tzLCBzZXRSZW5kZXJUYXNrc10gPSB1c2VTdGF0ZSh0YXNrcylcblxuXHRjb25zdCBbY3JlYXRlVGFzaywgc2V0Q3JlYXRlVGFza10gPSB1c2VTdGF0ZSh7IHRpdGxlOiAnJywgZGF0ZTogJycgfSlcblx0Y29uc3QgW3JlbW92ZVRhc2ssIHNldFJlbW92ZVRhc2tdID0gdXNlU3RhdGU8bnVtYmVyPigwKVxuXG5cblxuXHRjb25zdCBhZGRUYXNrID0gKCkgPT4ge1xuXHRcdGlmIChjcmVhdGVUYXNrLnRpdGxlID09ICcnKSByZXR1cm47XG5cdFx0Y29uc3QgdGFzazogVGFza1Byb3BzID0ge1xuXHRcdFx0aWQ6IHRhc2tzLmxlbmd0aCxcblx0XHRcdHRpdGxlOiBjcmVhdGVUYXNrLnRpdGxlLFxuXHRcdFx0ZGF0ZTogY3JlYXRlVGFzay5kYXRlLFxuXHRcdFx0aXNDaGVja2VkOiBmYWxzZVxuXHRcdH1cblx0XHRjb25zdCBsaXN0ID0gWy4uLnRhc2tzLCB0YXNrXVxuXHRcdHNldFRhc2tzKGxpc3QpXG5cdFx0c2V0TW9kYWwoJ25vbmUnKVxuXHR9XG5cblx0Y29uc3QgaGFuZGxlQ29tcGxldGVTdGF0dXNVcGRhdGUgPSAoaXRlbTogVGFza1Byb3BzKSA9PiB7XG5cdFx0c2V0VGFza3ModGFza3MubWFwKHRhc2sgPT4gdGFzay5pZCA9PSBpdGVtLmlkID8geyAuLi50YXNrLCBpc0NoZWNrZWQ6ICF0YXNrLmlzQ2hlY2tlZCB9IDogdGFzaykpXG5cdH1cblx0Y29uc3QgaGFuZGxlQ2xpY2tFZGl0VGFzayA9IChpdGVtOiBUYXNrUHJvcHMsIHRpdGxlOiBzdHJpbmcpID0+IHtcblx0XHRzZXRUYXNrcyh0YXNrcy5tYXAodGFzayA9PiB0YXNrLmlkID09IGl0ZW0uaWQgPyB7IC4uLnRhc2ssIHRpdGxlOiB0aXRsZSB9IDogdGFzaykpXG5cdH1cblx0Y29uc3QgaGFuZGxlQ2xpY2tEZWxldGUgPSAoKSA9PiB7XG5cdFx0c2V0VGFza3ModGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5pZCAhPT0gcmVtb3ZlVGFzaykpXG5cdFx0c2V0TW9kYWwoJ25vbmUnKVxuXHR9XG5cblx0Y29uc3QgZ2V0VGFza3MgPSAoKSA9PiB7XG5cdFx0Y29uc3Qgc3RyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJylcblx0XHRjb25zdCB1c2VySUQgPSBKU09OLnBhcnNlKHN0cilcblx0XHRheGlvc1xuXHRcdFx0LmdldCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS90YXNrcy8nICsgYCR7dXNlcklELmlkfWApXG5cdFx0XHQudGhlbihkYXRhID0+IHtcblx0XHRcdFx0Y29uc3QgaXRlbSA9IGRhdGEuZGF0YS50YXNrc1xuXHRcdFx0XHRzZXRUYXNrcyhpdGVtLnNvcnQoKGE6IFRhc2tQcm9wcywgYjogVGFza1Byb3BzKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGEuaWQgPiBiLmlkKSByZXR1cm4gMVxuXHRcdFx0XHRcdGlmIChhLmlkIDwgYi5pZCkgcmV0dXJuIC0xXG5cdFx0XHRcdFx0cmV0dXJuIDBcblx0XHRcdFx0fSkubWFwKGVsID0+IGVsKSlcblx0XHRcdH0pXG5cdH1cblx0Y29uc3QgaGFuZGxlT3Blbk1vZGFsRGVsZXRlID0gKGlkOiBudW1iZXIpID0+IHtcblx0XHRzZXRNb2RhbCgnZGVsZXRlJylcblx0XHRzZXRSZW1vdmVUYXNrKGlkKVxuXHR9XG5cdC8vIGNvbnN0IGNyZWF0ZVRhc2sgPSBhc3luYyAoKSA9PiB7XG5cblx0Ly8gXHRjb25zdCBzdHIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxuXHQvLyBcdGNvbnN0IHVzZXJJRCA9IEpTT04ucGFyc2Uoc3RyKVxuXHQvLyBcdGF4aW9zXG5cdC8vIFx0XHQucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS90YXNrcy8nICsgYCR7dXNlcklELmlkfWAsIHRhc2tOZXcpXG5cdC8vIFx0XHQudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEuZGF0YSkpXG5cdC8vIFx0c2V0TW9kYWwoJ25vbmUnKVxuXHQvLyBcdHNldFRhc2tOZXcoeyB0aXRsZTogJycsIGRhdGU6ICcnIH0pXG5cdC8vIFx0aXNSZW5kZXIoIXJlbmRlcilcblx0Ly8gfVxuXHRjb25zdCBkZWxldGVUYXNrID0gYXN5bmMgKCkgPT4ge1xuXHRcdGF4aW9zXG5cdFx0XHQuZGVsZXRlKCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3Rhc2tzLycgKyBgJHtyZW1vdmVUYXNrfWApXG5cdFx0XHQudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEuZGF0YSkpXG5cdFx0c2V0TW9kYWwoJ25vbmUnKVxuXHRcdC8vIGlzUmVuZGVyKCFyZW5kZXIpXG5cdH1cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGdldFRhc2tzKClcblx0fSwgW10pXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRzZXRSZW5kZXJUYXNrcyh0YXNrcylcblx0fSwgW3Rhc2tzXSlcblxuXHRyZXR1cm4gKDw+XG5cdFx0PE1haW5TdHlsZT5cblx0XHRcdDxOYXZiYXJcblx0XHRcdFx0YWRkVGFzaz17KCkgPT4gc2V0TW9kYWwoJ2FkZCcpfVxuXHRcdFx0Lz5cblx0XHRcdDxMaXN0VGFza3Ncblx0XHRcdFx0dGFza3M9e3JlbmRlclRhc2tzfVxuXHRcdFx0XHRoYW5kbGVDb21wbGV0ZVN0YXR1c1VwZGF0ZT17aGFuZGxlQ29tcGxldGVTdGF0dXNVcGRhdGV9XG5cdFx0XHRcdGhhbmRsZUNsaWNrRWRpdFRhc2s9e2hhbmRsZUNsaWNrRWRpdFRhc2t9XG5cdFx0XHRcdGhhbmRsZU9wZW5Nb2RhbERlbGV0ZT17aGFuZGxlT3Blbk1vZGFsRGVsZXRlfVxuXHRcdFx0Lz5cblx0XHQ8L01haW5TdHlsZT5cblx0XHR7XG5cdFx0XHRtb2RhbCA9PSAnYWRkJyAmJlxuXHRcdFx0PE1vZGFsXG5cdFx0XHRcdHRpdGxlPXsnQ3JlYXRlIHRhc2snfVxuXHRcdFx0XHRuYW1lQnRuPXsnU2F2ZSd9XG5cdFx0XHRcdGFjdGl2ZT17bW9kYWx9XG5cdFx0XHRcdEljb25CdG49ezxTYXZlSWNvbiAvPn1cblx0XHRcdFx0b25DbGlja0Nsb3NlPXsoKSA9PiBzZXRNb2RhbCgnbm9uZScpfVxuXHRcdFx0XHRvbkNsaWNrU2F2ZT17YWRkVGFza31cblx0XHRcdD5cblx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdFbnRlciB0ZXh0Li4uJ1xuXHRcdFx0XHRcdHZhbHVlPXtjcmVhdGVUYXNrLnRpdGxlfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q3JlYXRlVGFzayh0YXNrTmV3ID0+ICh7IC4uLnRhc2tOZXcsIHRpdGxlOiBlLnRhcmdldC52YWx1ZSB9KSl9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdHR5cGU9XCJkYXRlXCJcblx0XHRcdFx0XHR2YWx1ZT17Y3JlYXRlVGFzay5kYXRlfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q3JlYXRlVGFzayh0YXNrTmV3ID0+ICh7IC4uLnRhc2tOZXcsIGRhdGU6IGUudGFyZ2V0LnZhbHVlIH0pKX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvTW9kYWw+XG5cdFx0fVxuXHRcdHtcblx0XHRcdG1vZGFsID09ICdkZWxldGUnICYmXG5cdFx0XHQ8TW9kYWwgdGl0bGU9eydEZWxldGUgdGFzayd9IG5hbWVCdG49eydEZWxldGUnfSBhY3RpdmU9e21vZGFsfSBvbkNsaWNrQ2xvc2U9eygpID0+IHNldE1vZGFsKCdub25lJyl9IG9uQ2xpY2tTYXZlPXtoYW5kbGVDbGlja0RlbGV0ZX0gSWNvbkJ0bj17PERlbGV0ZUljb24gLz59PlxuXHRcdFx0XHQ8aDM+QXJlIHlvdSBzdXJlIGFib3V0IGRlbGV0aW5nIHRoaXMgdGFzaz88L2gzPlxuXHRcdFx0PC9Nb2RhbD5cblx0XHR9XG5cdDwvPlxuXHQpXG59KSJdLCJuYW1lcyI6WyJNYWluU3R5bGUiLCJOYXZiYXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGlzdFRhc2tzIiwiTW9kYWwiLCJEZWxldGVJY29uIiwiU2F2ZUljb24iLCJvYnNlcnZlciIsImF4aW9zIiwiTWFpbiIsIm1vZGFsIiwic2V0TW9kYWwiLCJ0YXNrcyIsInNldFRhc2tzIiwiaWQiLCJ0aXRsZSIsImRhdGUiLCJpc0NoZWNrZWQiLCJyZW5kZXJUYXNrcyIsInNldFJlbmRlclRhc2tzIiwiY3JlYXRlVGFzayIsInNldENyZWF0ZVRhc2siLCJyZW1vdmVUYXNrIiwic2V0UmVtb3ZlVGFzayIsImFkZFRhc2siLCJ0YXNrIiwibGVuZ3RoIiwibGlzdCIsImhhbmRsZUNvbXBsZXRlU3RhdHVzVXBkYXRlIiwiaXRlbSIsIm1hcCIsImhhbmRsZUNsaWNrRWRpdFRhc2siLCJoYW5kbGVDbGlja0RlbGV0ZSIsImZpbHRlciIsImdldFRhc2tzIiwic3RyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVzZXJJRCIsIkpTT04iLCJwYXJzZSIsImdldCIsInRoZW4iLCJkYXRhIiwic29ydCIsImEiLCJiIiwiZWwiLCJoYW5kbGVPcGVuTW9kYWxEZWxldGUiLCJkZWxldGVUYXNrIiwiZGVsZXRlIiwiY29uc29sZSIsImxvZyIsIm5hbWVCdG4iLCJhY3RpdmUiLCJJY29uQnRuIiwib25DbGlja0Nsb3NlIiwib25DbGlja1NhdmUiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFza05ldyIsInRhcmdldCIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Main.tsx\n"));

/***/ })

});