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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Main: function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/style */ \"./src/styles/style.ts\");\n/* harmony import */ var _navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar/Navbar */ \"./src/components/navbar/Navbar.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ListTasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ListTasks */ \"./src/components/ListTasks.tsx\");\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Modal */ \"./src/components/Modal.tsx\");\n/* harmony import */ var _public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public */ \"./public/index.jsx\");\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx-react-lite */ \"./node_modules/mobx-react-lite/es/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Main = _s((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__.observer)(_c = _s(()=>{\n    _s();\n    const [modal, setModal] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"none\");\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([\n        {\n            id: 1,\n            title: \"задача 1\",\n            date: \"2023-10-16\",\n            isChecked: false\n        }\n    ]);\n    console.log(tasks.length);\n    const [renderTasks, setRenderTasks] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(tasks);\n    const [pagination, setPagination] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        count: tasks.length\n    });\n    const [createTask, setCreateTask] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        title: \"\",\n        date: \"\"\n    });\n    const [removeTask, setRemoveTask] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    const handleOpenModalDelete = (id)=>{\n        setModal(\"delete\");\n        setRemoveTask(id);\n    };\n    const handleCompleteStatusUpdate = async (item)=>{\n        setTasks(tasks.map((task)=>task.id == item.id ? {\n                ...task,\n                isChecked: !task.isChecked\n            } : task));\n        const isChecked = !item.isChecked;\n        axios__WEBPACK_IMPORTED_MODULE_9__[\"default\"].put(\"http://localhost:5000/api/tasks/\" + \"\".concat(item.id), {\n            isChecked\n        }).then((data)=>console.log(data));\n    };\n    const handleClickEditTask = (item, title)=>{\n        setTasks(tasks.map((task)=>task.id == item.id ? {\n                ...task,\n                title: title\n            } : task));\n        axios__WEBPACK_IMPORTED_MODULE_9__[\"default\"].put(\"http://localhost:5000/api/tasks/\" + \"\".concat(item.id), {\n            title\n        }).then((data)=>console.log(data));\n    };\n    const handleClickDelete = ()=>{\n        setTasks(tasks.filter((task)=>task.id !== removeTask));\n        setModal(\"none\");\n        axios__WEBPACK_IMPORTED_MODULE_9__[\"default\"][\"delete\"](\"http://localhost:5000/api/tasks/\" + \"\".concat(removeTask)).then((data)=>console.log(data));\n    };\n    const addTask = ()=>{\n        if (createTask.title == \"\") return;\n        const task = {\n            id: tasks.length,\n            title: createTask.title,\n            date: createTask.date,\n            isChecked: false\n        };\n        const list = [\n            ...tasks,\n            task\n        ];\n        postCreateTask(task);\n        list.length > 5 ? getTasks() : null;\n        setTasks(list);\n        setCreateTask({\n            title: \"\",\n            date: \"\"\n        });\n        setModal(\"none\");\n    };\n    const getTasks = function() {\n        let page = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;\n        const token = localStorage.getItem(\"token\");\n        const user = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(token);\n        axios__WEBPACK_IMPORTED_MODULE_9__[\"default\"].get(\"http://localhost:5000/api/tasks?userId=\" + \"\".concat(user.id) + \"&page=\".concat(page)).then((data)=>{\n            setTasks(data.data.tasks.rows);\n            setPagination({\n                count: data.data.tasks.count\n            });\n        });\n    };\n    const postCreateTask = async (task)=>{\n        const token = localStorage.getItem(\"token\");\n        const user = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(token);\n        axios__WEBPACK_IMPORTED_MODULE_9__[\"default\"].post(\"http://localhost:5000/api/tasks/\" + \"\".concat(user.id), task).then((data)=>console.log(data.data));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        getTasks();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setRenderTasks(tasks);\n    }, [\n        tasks\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_1__.MainStyle, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__.Navbar, {\n                        addTask: ()=>setModal(\"add\")\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Main.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 4\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ListTasks__WEBPACK_IMPORTED_MODULE_4__.ListTasks, {\n                        tasks: renderTasks,\n                        handleCompleteStatusUpdate: handleCompleteStatusUpdate,\n                        handleClickEditTask: handleClickEditTask,\n                        handleOpenModalDelete: handleOpenModalDelete,\n                        pageNumber: (page)=>getTasks(page),\n                        pagination: pagination\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Main.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 4\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Main.tsx\",\n                lineNumber: 102,\n                columnNumber: 3\n            }, undefined),\n            modal == \"add\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_5__.Modal, {\n                title: \"Create task\",\n                nameBtn: \"Save\",\n                active: modal,\n                IconBtn: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_6__.SaveIcon, {}, void 0, false, void 0, void 0),\n                onClickClose: ()=>setModal(\"none\"),\n                onClickSave: addTask,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Enter text...\",\n                        value: createTask.title,\n                        onChange: (e)=>setCreateTask((taskNew)=>({\n                                    ...taskNew,\n                                    title: e.target.value\n                                }))\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Main.tsx\",\n                        lineNumber: 126,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"date\",\n                        value: createTask.date,\n                        onChange: (e)=>setCreateTask((taskNew)=>({\n                                    ...taskNew,\n                                    date: e.target.value\n                                }))\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Main.tsx\",\n                        lineNumber: 132,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Main.tsx\",\n                lineNumber: 118,\n                columnNumber: 4\n            }, undefined),\n            modal == \"delete\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_5__.Modal, {\n                title: \"Delete task\",\n                nameBtn: \"Delete\",\n                active: modal,\n                onClickClose: ()=>setModal(\"none\"),\n                onClickSave: handleClickDelete,\n                IconBtn: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_6__.DeleteIcon, {}, void 0, false, void 0, void 0),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: \"Are you sure about deleting this task?\"\n                }, void 0, false, {\n                    fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Main.tsx\",\n                    lineNumber: 142,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Main.tsx\",\n                lineNumber: 141,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true);\n}, \"16JA6gr5SE/k/W/7mkCTXGhB1TI=\")), \"16JA6gr5SE/k/W/7mkCTXGhB1TI=\");\n_c1 = Main;\nvar _c, _c1;\n$RefreshReg$(_c, \"Main$observer\");\n$RefreshReg$(_c1, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QnFELGNBQWMsSUFBTS9DLFNBQVM7Z0JBQzdCZ0QsYUFBYWpCOztrQ0FFYiw4REFBQ2tCO3dCQUNBQyxNQUFLO3dCQUNMQyxhQUFZO3dCQUNaQyxPQUFPckMsV0FBV1gsS0FBSzt3QkFDdkJpRCxVQUFVLENBQUNDLElBQU10QyxjQUFjdUMsQ0FBQUEsVUFBWTtvQ0FBRSxHQUFHQSxPQUFPO29DQUFFbkQsT0FBT2tELEVBQUVFLE1BQU0sQ0FBQ0osS0FBSztnQ0FBQzs7Ozs7O2tDQUVoRiw4REFBQ0g7d0JBQ0FDLE1BQUs7d0JBQ0xFLE9BQU9yQyxXQUFXVixJQUFJO3dCQUN0QmdELFVBQVUsQ0FBQ0MsSUFBTXRDLGNBQWN1QyxDQUFBQSxVQUFZO29DQUFFLEdBQUdBLE9BQU87b0NBQUVsRCxNQUFNaUQsRUFBRUUsTUFBTSxDQUFDSixLQUFLO2dDQUFDOzs7Ozs7Ozs7Ozs7WUFLaEZyRCxTQUFTLDBCQUNULDhEQUFDUCx5Q0FBS0E7Z0JBQUNZLE9BQU87Z0JBQWV3QyxTQUFTO2dCQUFVQyxRQUFROUM7Z0JBQU9nRCxjQUFjLElBQU0vQyxTQUFTO2dCQUFTZ0QsYUFBYXBCO2dCQUFtQmtCLHVCQUFTLDhEQUFDckQsK0NBQVVBOzBCQUN4Siw0RUFBQ2dFOzhCQUFHOzs7Ozs7Ozs7Ozs7O0FBS1IscUVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWFpbi50c3g/MzBhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYWluU3R5bGUgfSBmcm9tICdAL3N0eWxlcy9zdHlsZSdcbmltcG9ydCB7IE5hdmJhciB9IGZyb20gJy4vbmF2YmFyL05hdmJhcidcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaXN0VGFza3MgfSBmcm9tICcuL0xpc3RUYXNrcydcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnLi9Nb2RhbCdcbmltcG9ydCB7IERlbGV0ZUljb24sIFNhdmVJY29uIH0gZnJvbSAnLi4vLi4vcHVibGljJ1xuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0LWxpdGUnXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnQC91dGlscy9jb250ZXh0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgVGFza1Byb3BzIH0gZnJvbSAnQC9pbnRlcmZhY2UvaW50ZXJmYWNlJ1xuaW1wb3J0IGp3dF9kZWNvZGUgZnJvbSAnand0LWRlY29kZSc7XG5cbmV4cG9ydCBjb25zdCBNYWluOiBSZWFjdC5GQyA9IG9ic2VydmVyKCgpID0+IHtcblxuXHRjb25zdCBbbW9kYWwsIHNldE1vZGFsXSA9IHVzZVN0YXRlKCdub25lJylcblx0Y29uc3QgW3Rhc2tzLCBzZXRUYXNrc10gPSB1c2VTdGF0ZShbXG5cdFx0e1xuXHRcdFx0aWQ6IDEsXG5cdFx0XHR0aXRsZTogXCLQt9Cw0LTQsNGH0LAgMVwiLFxuXHRcdFx0ZGF0ZTogXCIyMDIzLTEwLTE2XCIsXG5cdFx0XHRpc0NoZWNrZWQ6IGZhbHNlXG5cdFx0fVxuXHRdKVxuXHRjb25zb2xlLmxvZyh0YXNrcy5sZW5ndGgpXG5cdGNvbnN0IFtyZW5kZXJUYXNrcywgc2V0UmVuZGVyVGFza3NdID0gdXNlU3RhdGUodGFza3MpXG5cdGNvbnN0IFtwYWdpbmF0aW9uLCBzZXRQYWdpbmF0aW9uXSA9IHVzZVN0YXRlKHsgY291bnQ6IHRhc2tzLmxlbmd0aCB9KVxuXHRjb25zdCBbY3JlYXRlVGFzaywgc2V0Q3JlYXRlVGFza10gPSB1c2VTdGF0ZSh7IHRpdGxlOiAnJywgZGF0ZTogJycgfSlcblx0Y29uc3QgW3JlbW92ZVRhc2ssIHNldFJlbW92ZVRhc2tdID0gdXNlU3RhdGU8bnVtYmVyPigwKVxuXG5cdGNvbnN0IGhhbmRsZU9wZW5Nb2RhbERlbGV0ZSA9IChpZDogbnVtYmVyKSA9PiB7XG5cdFx0c2V0TW9kYWwoJ2RlbGV0ZScpXG5cdFx0c2V0UmVtb3ZlVGFzayhpZClcblx0fVxuXHRjb25zdCBoYW5kbGVDb21wbGV0ZVN0YXR1c1VwZGF0ZSA9IGFzeW5jIChpdGVtOiBUYXNrUHJvcHMpID0+IHtcblx0XHRzZXRUYXNrcyh0YXNrcy5tYXAodGFzayA9PiB0YXNrLmlkID09IGl0ZW0uaWQgPyB7IC4uLnRhc2ssIGlzQ2hlY2tlZDogIXRhc2suaXNDaGVja2VkIH0gOiB0YXNrKSlcblx0XHRjb25zdCBpc0NoZWNrZWQgPSAhaXRlbS5pc0NoZWNrZWRcblx0XHRheGlvc1xuXHRcdFx0LnB1dCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS90YXNrcy8nICsgYCR7aXRlbS5pZH1gLCB7IGlzQ2hlY2tlZCB9KVxuXHRcdFx0LnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSlcblx0fVxuXHRjb25zdCBoYW5kbGVDbGlja0VkaXRUYXNrID0gKGl0ZW06IFRhc2tQcm9wcywgdGl0bGU6IHN0cmluZykgPT4ge1xuXHRcdHNldFRhc2tzKHRhc2tzLm1hcCh0YXNrID0+IHRhc2suaWQgPT0gaXRlbS5pZCA/IHsgLi4udGFzaywgdGl0bGU6IHRpdGxlIH0gOiB0YXNrKSlcblx0XHRheGlvc1xuXHRcdFx0LnB1dCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS90YXNrcy8nICsgYCR7aXRlbS5pZH1gLCB7IHRpdGxlIH0pXG5cdFx0XHQudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKVxuXHR9XG5cdGNvbnN0IGhhbmRsZUNsaWNrRGVsZXRlID0gKCkgPT4ge1xuXHRcdHNldFRhc2tzKHRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2suaWQgIT09IHJlbW92ZVRhc2spKVxuXHRcdHNldE1vZGFsKCdub25lJylcblx0XHRheGlvc1xuXHRcdFx0LmRlbGV0ZSgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS90YXNrcy8nICsgYCR7cmVtb3ZlVGFza31gKVxuXHRcdFx0LnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSlcblx0fVxuXHRjb25zdCBhZGRUYXNrID0gKCkgPT4ge1xuXHRcdGlmIChjcmVhdGVUYXNrLnRpdGxlID09ICcnKSByZXR1cm47XG5cdFx0Y29uc3QgdGFzazogVGFza1Byb3BzID0ge1xuXHRcdFx0aWQ6IHRhc2tzLmxlbmd0aCxcblx0XHRcdHRpdGxlOiBjcmVhdGVUYXNrLnRpdGxlLFxuXHRcdFx0ZGF0ZTogY3JlYXRlVGFzay5kYXRlLFxuXHRcdFx0aXNDaGVja2VkOiBmYWxzZVxuXHRcdH1cblx0XHRjb25zdCBsaXN0ID0gWy4uLnRhc2tzLCB0YXNrXVxuXG5cdFx0cG9zdENyZWF0ZVRhc2sodGFzaylcblx0XHRsaXN0Lmxlbmd0aCA+IDUgPyBnZXRUYXNrcygpIDogbnVsbFxuXHRcdHNldFRhc2tzKGxpc3QpXG5cblx0XHRzZXRDcmVhdGVUYXNrKHsgdGl0bGU6ICcnLCBkYXRlOiAnJyB9KVxuXHRcdHNldE1vZGFsKCdub25lJylcblx0fVxuXG5cblx0Y29uc3QgZ2V0VGFza3MgPSAocGFnZSA9IDEpID0+IHtcblx0XHRjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXG5cdFx0Y29uc3QgdXNlciA9IGp3dF9kZWNvZGUodG9rZW4pXG5cdFx0YXhpb3Ncblx0XHRcdC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdGFza3M/dXNlcklkPScgKyBgJHt1c2VyLmlkfWAgKyBgJnBhZ2U9JHtwYWdlfWApXG5cdFx0XHQudGhlbihkYXRhID0+IHtcblx0XHRcdFx0c2V0VGFza3MoZGF0YS5kYXRhLnRhc2tzLnJvd3MpXG5cdFx0XHRcdHNldFBhZ2luYXRpb24oeyBjb3VudDogZGF0YS5kYXRhLnRhc2tzLmNvdW50IH0pXG5cblx0XHRcdH0pXG5cdH1cblxuXHRjb25zdCBwb3N0Q3JlYXRlVGFzayA9IGFzeW5jICh0YXNrOiBUYXNrUHJvcHMpID0+IHtcblx0XHRjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXG5cdFx0Y29uc3QgdXNlciA9IGp3dF9kZWNvZGUodG9rZW4pXG5cdFx0YXhpb3Ncblx0XHRcdC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3Rhc2tzLycgKyBgJHt1c2VyLmlkfWAsIHRhc2spXG5cdFx0XHQudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEuZGF0YSkpXG5cdH1cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGdldFRhc2tzKClcblx0fSwgW10pXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRzZXRSZW5kZXJUYXNrcyh0YXNrcylcblx0fSwgW3Rhc2tzXSlcblxuXHRyZXR1cm4gKDw+XG5cdFx0PE1haW5TdHlsZT5cblx0XHRcdDxOYXZiYXJcblx0XHRcdFx0YWRkVGFzaz17KCkgPT4gc2V0TW9kYWwoJ2FkZCcpfVxuXHRcdFx0Lz5cblx0XHRcdDxMaXN0VGFza3Ncblx0XHRcdFx0dGFza3M9e3JlbmRlclRhc2tzfVxuXHRcdFx0XHRoYW5kbGVDb21wbGV0ZVN0YXR1c1VwZGF0ZT17aGFuZGxlQ29tcGxldGVTdGF0dXNVcGRhdGV9XG5cdFx0XHRcdGhhbmRsZUNsaWNrRWRpdFRhc2s9e2hhbmRsZUNsaWNrRWRpdFRhc2t9XG5cdFx0XHRcdGhhbmRsZU9wZW5Nb2RhbERlbGV0ZT17aGFuZGxlT3Blbk1vZGFsRGVsZXRlfVxuXG5cdFx0XHRcdHBhZ2VOdW1iZXI9eyhwYWdlOiBudW1iZXIpID0+IGdldFRhc2tzKHBhZ2UpfVxuXHRcdFx0XHRwYWdpbmF0aW9uPXtwYWdpbmF0aW9ufVxuXHRcdFx0Lz5cblx0XHQ8L01haW5TdHlsZT5cblx0XHR7XG5cdFx0XHRtb2RhbCA9PSAnYWRkJyAmJlxuXHRcdFx0PE1vZGFsXG5cdFx0XHRcdHRpdGxlPXsnQ3JlYXRlIHRhc2snfVxuXHRcdFx0XHRuYW1lQnRuPXsnU2F2ZSd9XG5cdFx0XHRcdGFjdGl2ZT17bW9kYWx9XG5cdFx0XHRcdEljb25CdG49ezxTYXZlSWNvbiAvPn1cblx0XHRcdFx0b25DbGlja0Nsb3NlPXsoKSA9PiBzZXRNb2RhbCgnbm9uZScpfVxuXHRcdFx0XHRvbkNsaWNrU2F2ZT17YWRkVGFza31cblx0XHRcdD5cblx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdFbnRlciB0ZXh0Li4uJ1xuXHRcdFx0XHRcdHZhbHVlPXtjcmVhdGVUYXNrLnRpdGxlfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q3JlYXRlVGFzayh0YXNrTmV3ID0+ICh7IC4uLnRhc2tOZXcsIHRpdGxlOiBlLnRhcmdldC52YWx1ZSB9KSl9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdHR5cGU9XCJkYXRlXCJcblx0XHRcdFx0XHR2YWx1ZT17Y3JlYXRlVGFzay5kYXRlfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q3JlYXRlVGFzayh0YXNrTmV3ID0+ICh7IC4uLnRhc2tOZXcsIGRhdGU6IGUudGFyZ2V0LnZhbHVlIH0pKX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvTW9kYWw+XG5cdFx0fVxuXHRcdHtcblx0XHRcdG1vZGFsID09ICdkZWxldGUnICYmXG5cdFx0XHQ8TW9kYWwgdGl0bGU9eydEZWxldGUgdGFzayd9IG5hbWVCdG49eydEZWxldGUnfSBhY3RpdmU9e21vZGFsfSBvbkNsaWNrQ2xvc2U9eygpID0+IHNldE1vZGFsKCdub25lJyl9IG9uQ2xpY2tTYXZlPXtoYW5kbGVDbGlja0RlbGV0ZX0gSWNvbkJ0bj17PERlbGV0ZUljb24gLz59PlxuXHRcdFx0XHQ8aDM+QXJlIHlvdSBzdXJlIGFib3V0IGRlbGV0aW5nIHRoaXMgdGFzaz88L2gzPlxuXHRcdFx0PC9Nb2RhbD5cblx0XHR9XG5cdDwvPlxuXHQpXG59KSJdLCJuYW1lcyI6WyJNYWluU3R5bGUiLCJOYXZiYXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGlzdFRhc2tzIiwiTW9kYWwiLCJEZWxldGVJY29uIiwiU2F2ZUljb24iLCJvYnNlcnZlciIsImF4aW9zIiwiand0X2RlY29kZSIsIk1haW4iLCJtb2RhbCIsInNldE1vZGFsIiwidGFza3MiLCJzZXRUYXNrcyIsImlkIiwidGl0bGUiLCJkYXRlIiwiaXNDaGVja2VkIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsInJlbmRlclRhc2tzIiwic2V0UmVuZGVyVGFza3MiLCJwYWdpbmF0aW9uIiwic2V0UGFnaW5hdGlvbiIsImNvdW50IiwiY3JlYXRlVGFzayIsInNldENyZWF0ZVRhc2siLCJyZW1vdmVUYXNrIiwic2V0UmVtb3ZlVGFzayIsImhhbmRsZU9wZW5Nb2RhbERlbGV0ZSIsImhhbmRsZUNvbXBsZXRlU3RhdHVzVXBkYXRlIiwiaXRlbSIsIm1hcCIsInRhc2siLCJwdXQiLCJ0aGVuIiwiZGF0YSIsImhhbmRsZUNsaWNrRWRpdFRhc2siLCJoYW5kbGVDbGlja0RlbGV0ZSIsImZpbHRlciIsImRlbGV0ZSIsImFkZFRhc2siLCJsaXN0IiwicG9zdENyZWF0ZVRhc2siLCJnZXRUYXNrcyIsInBhZ2UiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VyIiwiZ2V0Iiwicm93cyIsInBvc3QiLCJwYWdlTnVtYmVyIiwibmFtZUJ0biIsImFjdGl2ZSIsIkljb25CdG4iLCJvbkNsaWNrQ2xvc2UiLCJvbkNsaWNrU2F2ZSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXNrTmV3IiwidGFyZ2V0IiwiaDMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Main.tsx\n"));

/***/ })

});