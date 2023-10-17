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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Main: function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/style */ \"./src/styles/style.ts\");\n/* harmony import */ var _navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar/Navbar */ \"./src/components/navbar/Navbar.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ListTasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ListTasks */ \"./src/components/ListTasks.tsx\");\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Modal */ \"./src/components/Modal.tsx\");\n/* harmony import */ var _public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public */ \"./public/index.jsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Main = ()=>{\n    _s();\n    const [modal, setModal] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"none\");\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [renderTasks, setRenderTasks] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(tasks);\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1) // количество тасков\n    ;\n    const [createTask, setCreateTask] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        title: \"\",\n        date: \"\"\n    });\n    const [removeTask, setRemoveTask] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    const handleOpenModalDelete = (id)=>{\n        setModal(\"delete\");\n        setRemoveTask(id);\n    };\n    const handleCompleteStatusUpdate = async (item)=>{\n        setTasks(tasks.map((task)=>task.id == item.id ? {\n                ...task,\n                isChecked: !task.isChecked\n            } : task));\n        const isChecked = !item.isChecked;\n        axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].put(\"http://localhost:7000/api/tasks/\" + \"\".concat(item.id), {\n            isChecked\n        }).then((data)=>console.log(data)).catch((err)=>console.error(err));\n    };\n    const handleClickEditTask = (item, title)=>{\n        setTasks(tasks.map((task)=>task.id == item.id ? {\n                ...task,\n                title: title\n            } : task));\n        axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].put(\"http://localhost:7000/api/tasks/\" + \"\".concat(item.id), {\n            title\n        }).then((data)=>console.log(data)).catch((err)=>console.error(err));\n    };\n    const handleClickDelete = ()=>{\n        setTasks(tasks.filter((task)=>task.id !== removeTask));\n        setModal(\"none\");\n        axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"][\"delete\"](\"http://localhost:7000/api/tasks/\" + \"\".concat(removeTask)).then((data)=>console.log(data)).catch((err)=>console.error(err));\n        setCount(count - 1);\n        setPage(page - 1);\n    };\n    const addTask = ()=>{\n        if (createTask.title == \"\") return;\n        const task = {\n            id: tasks.length,\n            title: createTask.title,\n            date: createTask.date,\n            isChecked: false\n        };\n        postCreateTask(task);\n        setPage(1);\n        setCreateTask({\n            title: \"\",\n            date: \"\"\n        });\n        setModal(\"none\");\n    };\n    const getTasks = (filter)=>{\n        const token = localStorage.getItem(\"token\") || undefined;\n        if (token !== undefined) {\n            const user = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(token);\n            axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(\"http://localhost:7000/api/tasks?userId=\" + \"\".concat(user.id) + \"&filterBy=\".concat(filter) + \"&page=\".concat(page)).then((data)=>{\n                setTasks(data.data.tasks.rows);\n                setCount(data.data.tasks.count);\n                console.log(count);\n            }).catch((err)=>console.error(err.response.message));\n        }\n    };\n    const postCreateTask = async (task)=>{\n        const token = localStorage.getItem(\"token\") || undefined;\n        if (token !== undefined) {\n            const user = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(token);\n            axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].post(\"http://localhost:7000/api/tasks/\" + \"\".concat(user.id), task).then((data)=>console.log(data.data)).catch((err)=>console.error(err));\n        }\n        getTasks(\"all\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        getTasks(\"all\");\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        getTasks(\"all\");\n        setCount(count);\n    }, [\n        page\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setRenderTasks(tasks);\n        if (page !== 1) {\n            tasks.length == 0 ? setPage(page - 1) : setPage(page);\n        }\n        setPage(page);\n    }, [\n        tasks\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_1__.MainStyle, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__.Navbar, {\n                        addTask: ()=>setModal(\"add\"),\n                        filter: (filter)=>getTasks(filter)\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Main.tsx\",\n                        lineNumber: 115,\n                        columnNumber: 4\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ListTasks__WEBPACK_IMPORTED_MODULE_4__.ListTasks, {\n                        tasks: renderTasks,\n                        handleCompleteStatusUpdate: handleCompleteStatusUpdate,\n                        handleClickEditTask: handleClickEditTask,\n                        handleOpenModalDelete: handleOpenModalDelete,\n                        pageNumber: (page)=>setPage(page),\n                        count: count,\n                        pageActive: page\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Main.tsx\",\n                        lineNumber: 119,\n                        columnNumber: 4\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Main.tsx\",\n                lineNumber: 114,\n                columnNumber: 3\n            }, undefined),\n            modal == \"add\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_5__.Modal, {\n                title: \"Create task\",\n                nameBtn: \"Save\",\n                active: modal,\n                IconBtn: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_6__.SaveIcon, {}, void 0, false, void 0, void 0),\n                onClickClose: ()=>setModal(\"none\"),\n                onClickSave: addTask,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Enter text...\",\n                        value: createTask.title,\n                        onChange: (e)=>setCreateTask((taskNew)=>({\n                                    ...taskNew,\n                                    title: e.target.value\n                                }))\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Main.tsx\",\n                        lineNumber: 137,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"date\",\n                        value: createTask.date,\n                        onChange: (e)=>setCreateTask((taskNew)=>({\n                                    ...taskNew,\n                                    date: e.target.value\n                                }))\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Main.tsx\",\n                        lineNumber: 143,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Main.tsx\",\n                lineNumber: 129,\n                columnNumber: 4\n            }, undefined),\n            modal == \"delete\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_5__.Modal, {\n                title: \"Delete task\",\n                nameBtn: \"Delete\",\n                active: modal,\n                onClickClose: ()=>setModal(\"none\"),\n                onClickSave: handleClickDelete,\n                IconBtn: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_6__.DeleteIcon, {}, void 0, false, void 0, void 0),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: \"Are you sure about deleting this task?\"\n                }, void 0, false, {\n                    fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Main.tsx\",\n                    lineNumber: 153,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Main.tsx\",\n                lineNumber: 152,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Main, \"Gci1ivC5n42JDHOCT6Uh0sMY/X8=\");\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhdkI7Z0JBQW1CcUIsdUJBQVMsOERBQUMxRCwrQ0FBVUE7MEJBQ3hKLDRFQUFDcUU7OEJBQUc7Ozs7Ozs7Ozs7Ozs7QUFLUixFQUFDO0dBbkpZakU7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWFpbi50c3g/MzBhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYWluU3R5bGUgfSBmcm9tICdAL3N0eWxlcy9zdHlsZSdcbmltcG9ydCB7IE5hdmJhciB9IGZyb20gJy4vbmF2YmFyL05hdmJhcidcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaXN0VGFza3MgfSBmcm9tICcuL0xpc3RUYXNrcydcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnLi9Nb2RhbCdcbmltcG9ydCB7IERlbGV0ZUljb24sIFNhdmVJY29uIH0gZnJvbSAnLi4vLi4vcHVibGljJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgVGFza1Byb3BzIH0gZnJvbSAnQC9pbnRlcmZhY2UvaW50ZXJmYWNlJ1xuaW1wb3J0IGp3dERlY29kZSBmcm9tICdqd3QtZGVjb2RlJ1xuXG5leHBvcnQgY29uc3QgTWFpbjogUmVhY3QuRkMgPSAoKSA9PiB7XG5cblx0Y29uc3QgW21vZGFsLCBzZXRNb2RhbF0gPSB1c2VTdGF0ZSgnbm9uZScpXG5cdGNvbnN0IFt0YXNrcywgc2V0VGFza3NdID0gdXNlU3RhdGU8VGFza1Byb3BzW10+KFtdKVxuXG5cdGNvbnN0IFtyZW5kZXJUYXNrcywgc2V0UmVuZGVyVGFza3NdID0gdXNlU3RhdGUodGFza3MpXG5cdGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMSlcblx0Y29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoMSlcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8g0LrQvtC70LjRh9C10YHRgtCy0L4g0YLQsNGB0LrQvtCyXG5cdGNvbnN0IFtjcmVhdGVUYXNrLCBzZXRDcmVhdGVUYXNrXSA9IHVzZVN0YXRlKHsgdGl0bGU6ICcnLCBkYXRlOiAnJyB9KVxuXHRjb25zdCBbcmVtb3ZlVGFzaywgc2V0UmVtb3ZlVGFza10gPSB1c2VTdGF0ZTxudW1iZXI+KDApXG5cblx0Y29uc3QgaGFuZGxlT3Blbk1vZGFsRGVsZXRlID0gKGlkOiBudW1iZXIpID0+IHtcblx0XHRzZXRNb2RhbCgnZGVsZXRlJylcblx0XHRzZXRSZW1vdmVUYXNrKGlkKVxuXHR9XG5cblx0Y29uc3QgaGFuZGxlQ29tcGxldGVTdGF0dXNVcGRhdGUgPSBhc3luYyAoaXRlbTogVGFza1Byb3BzKSA9PiB7XG5cdFx0c2V0VGFza3ModGFza3MubWFwKHRhc2sgPT4gdGFzay5pZCA9PSBpdGVtLmlkID8geyAuLi50YXNrLCBpc0NoZWNrZWQ6ICF0YXNrLmlzQ2hlY2tlZCB9IDogdGFzaykpXG5cdFx0Y29uc3QgaXNDaGVja2VkID0gIWl0ZW0uaXNDaGVja2VkXG5cdFx0YXhpb3Ncblx0XHRcdC5wdXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NzAwMC9hcGkvdGFza3MvJyArIGAke2l0ZW0uaWR9YCwgeyBpc0NoZWNrZWQgfSlcblx0XHRcdC50aGVuKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSkpXG5cdFx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKVxuXHR9XG5cblx0Y29uc3QgaGFuZGxlQ2xpY2tFZGl0VGFzayA9IChpdGVtOiBUYXNrUHJvcHMsIHRpdGxlOiBzdHJpbmcpID0+IHtcblx0XHRzZXRUYXNrcyh0YXNrcy5tYXAodGFzayA9PiB0YXNrLmlkID09IGl0ZW0uaWQgPyB7IC4uLnRhc2ssIHRpdGxlOiB0aXRsZSB9IDogdGFzaykpXG5cdFx0YXhpb3Ncblx0XHRcdC5wdXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NzAwMC9hcGkvdGFza3MvJyArIGAke2l0ZW0uaWR9YCwgeyB0aXRsZSB9KVxuXHRcdFx0LnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSlcblx0XHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpXG5cdH1cblxuXHRjb25zdCBoYW5kbGVDbGlja0RlbGV0ZSA9ICgpID0+IHtcblx0XHRzZXRUYXNrcyh0YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLmlkICE9PSByZW1vdmVUYXNrKSlcblx0XHRzZXRNb2RhbCgnbm9uZScpXG5cdFx0YXhpb3Ncblx0XHRcdC5kZWxldGUoJ2h0dHA6Ly9sb2NhbGhvc3Q6NzAwMC9hcGkvdGFza3MvJyArIGAke3JlbW92ZVRhc2t9YClcblx0XHRcdC50aGVuKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSkpXG5cdFx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKVxuXHRcdHNldENvdW50KGNvdW50IC0gMSlcblx0XHRzZXRQYWdlKHBhZ2UgLSAxKVxuXHR9XG5cblx0Y29uc3QgYWRkVGFzayA9ICgpID0+IHtcblx0XHRpZiAoY3JlYXRlVGFzay50aXRsZSA9PSAnJykgcmV0dXJuO1xuXHRcdGNvbnN0IHRhc2s6IFRhc2tQcm9wcyA9IHtcblx0XHRcdGlkOiB0YXNrcy5sZW5ndGgsXG5cdFx0XHR0aXRsZTogY3JlYXRlVGFzay50aXRsZSxcblx0XHRcdGRhdGU6IGNyZWF0ZVRhc2suZGF0ZSxcblx0XHRcdGlzQ2hlY2tlZDogZmFsc2Vcblx0XHR9XG5cdFx0cG9zdENyZWF0ZVRhc2sodGFzaylcblx0XHRzZXRQYWdlKDEpXG5cdFx0c2V0Q3JlYXRlVGFzayh7IHRpdGxlOiAnJywgZGF0ZTogJycgfSlcblx0XHRzZXRNb2RhbCgnbm9uZScpXG5cdH1cblxuXHRjb25zdCBnZXRUYXNrcyA9IChmaWx0ZXI6IHN0cmluZykgPT4ge1xuXHRcdGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgfHwgdW5kZWZpbmVkXG5cdFx0aWYgKHRva2VuICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGNvbnN0IHVzZXIgPSBqd3REZWNvZGUodG9rZW4pXG5cdFx0XHRheGlvc1xuXHRcdFx0XHQuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjcwMDAvYXBpL3Rhc2tzP3VzZXJJZD0nICsgYCR7dXNlci5pZH1gICsgYCZmaWx0ZXJCeT0ke2ZpbHRlcn1gICsgYCZwYWdlPSR7cGFnZX1gKVxuXHRcdFx0XHQudGhlbihkYXRhID0+IHtcblx0XHRcdFx0XHRzZXRUYXNrcyhkYXRhLmRhdGEudGFza3Mucm93cylcblx0XHRcdFx0XHRzZXRDb3VudChkYXRhLmRhdGEudGFza3MuY291bnQpXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coY291bnQpXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVyci5yZXNwb25zZS5tZXNzYWdlKSlcblx0XHR9XG5cdH1cblxuXHRjb25zdCBwb3N0Q3JlYXRlVGFzayA9IGFzeW5jICh0YXNrOiBUYXNrUHJvcHMpID0+IHtcblx0XHRjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpIHx8IHVuZGVmaW5lZFxuXHRcdGlmICh0b2tlbiAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjb25zdCB1c2VyID0gand0RGVjb2RlKHRva2VuKVxuXHRcdFx0YXhpb3Ncblx0XHRcdFx0LnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NzAwMC9hcGkvdGFza3MvJyArIGAke3VzZXIuaWR9YCwgdGFzaylcblx0XHRcdFx0LnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhLmRhdGEpKVxuXHRcdFx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKVxuXHRcdH1cblx0XHRnZXRUYXNrcygnYWxsJylcblx0fVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Z2V0VGFza3MoJ2FsbCcpXG5cdH0sIFtdKVxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGdldFRhc2tzKCdhbGwnKVxuXHRcdHNldENvdW50KGNvdW50KVxuXHR9LCBbcGFnZV0pXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRzZXRSZW5kZXJUYXNrcyh0YXNrcylcblx0XHRpZiAocGFnZSAhPT0gMSkge1xuXHRcdFx0dGFza3MubGVuZ3RoID09IDAgPyBzZXRQYWdlKHBhZ2UgLSAxKSA6IHNldFBhZ2UocGFnZSlcblx0XHR9XG5cdFx0c2V0UGFnZShwYWdlKVxuXG5cdH0sIFt0YXNrc10pXG5cblx0cmV0dXJuICg8PlxuXHRcdDxNYWluU3R5bGU+XG5cdFx0XHQ8TmF2YmFyXG5cdFx0XHRcdGFkZFRhc2s9eygpID0+IHNldE1vZGFsKCdhZGQnKX1cblx0XHRcdFx0ZmlsdGVyPXsoZmlsdGVyKSA9PiBnZXRUYXNrcyhmaWx0ZXIpfVxuXHRcdFx0Lz5cblx0XHRcdDxMaXN0VGFza3Ncblx0XHRcdFx0dGFza3M9e3JlbmRlclRhc2tzfVxuXHRcdFx0XHRoYW5kbGVDb21wbGV0ZVN0YXR1c1VwZGF0ZT17aGFuZGxlQ29tcGxldGVTdGF0dXNVcGRhdGV9XG5cdFx0XHRcdGhhbmRsZUNsaWNrRWRpdFRhc2s9e2hhbmRsZUNsaWNrRWRpdFRhc2t9XG5cdFx0XHRcdGhhbmRsZU9wZW5Nb2RhbERlbGV0ZT17aGFuZGxlT3Blbk1vZGFsRGVsZXRlfVxuXHRcdFx0XHRwYWdlTnVtYmVyPXsocGFnZTogbnVtYmVyKSA9PiBzZXRQYWdlKHBhZ2UpfVxuXHRcdFx0XHRjb3VudD17Y291bnR9IHBhZ2VBY3RpdmU9e3BhZ2V9IC8+XG5cdFx0PC9NYWluU3R5bGU+XG5cdFx0e1xuXHRcdFx0bW9kYWwgPT0gJ2FkZCcgJiZcblx0XHRcdDxNb2RhbFxuXHRcdFx0XHR0aXRsZT17J0NyZWF0ZSB0YXNrJ31cblx0XHRcdFx0bmFtZUJ0bj17J1NhdmUnfVxuXHRcdFx0XHRhY3RpdmU9e21vZGFsfVxuXHRcdFx0XHRJY29uQnRuPXs8U2F2ZUljb24gLz59XG5cdFx0XHRcdG9uQ2xpY2tDbG9zZT17KCkgPT4gc2V0TW9kYWwoJ25vbmUnKX1cblx0XHRcdFx0b25DbGlja1NhdmU9e2FkZFRhc2t9XG5cdFx0XHQ+XG5cdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nRW50ZXIgdGV4dC4uLidcblx0XHRcdFx0XHR2YWx1ZT17Y3JlYXRlVGFzay50aXRsZX1cblx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldENyZWF0ZVRhc2sodGFza05ldyA9PiAoeyAuLi50YXNrTmV3LCB0aXRsZTogZS50YXJnZXQudmFsdWUgfSkpfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHR0eXBlPVwiZGF0ZVwiXG5cdFx0XHRcdFx0dmFsdWU9e2NyZWF0ZVRhc2suZGF0ZX1cblx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldENyZWF0ZVRhc2sodGFza05ldyA9PiAoeyAuLi50YXNrTmV3LCBkYXRlOiBlLnRhcmdldC52YWx1ZSB9KSl9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L01vZGFsID5cblx0XHR9XG5cdFx0e1xuXHRcdFx0bW9kYWwgPT0gJ2RlbGV0ZScgJiZcblx0XHRcdDxNb2RhbCB0aXRsZT17J0RlbGV0ZSB0YXNrJ30gbmFtZUJ0bj17J0RlbGV0ZSd9IGFjdGl2ZT17bW9kYWx9IG9uQ2xpY2tDbG9zZT17KCkgPT4gc2V0TW9kYWwoJ25vbmUnKX0gb25DbGlja1NhdmU9e2hhbmRsZUNsaWNrRGVsZXRlfSBJY29uQnRuPXs8RGVsZXRlSWNvbiAvPn0+XG5cdFx0XHRcdDxoMz5BcmUgeW91IHN1cmUgYWJvdXQgZGVsZXRpbmcgdGhpcyB0YXNrPzwvaDM+XG5cdFx0XHQ8L01vZGFsPlxuXHRcdH1cblx0PC8+XG5cdClcbn0iXSwibmFtZXMiOlsiTWFpblN0eWxlIiwiTmF2YmFyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpc3RUYXNrcyIsIk1vZGFsIiwiRGVsZXRlSWNvbiIsIlNhdmVJY29uIiwiYXhpb3MiLCJqd3REZWNvZGUiLCJNYWluIiwibW9kYWwiLCJzZXRNb2RhbCIsInRhc2tzIiwic2V0VGFza3MiLCJyZW5kZXJUYXNrcyIsInNldFJlbmRlclRhc2tzIiwiY291bnQiLCJzZXRDb3VudCIsInBhZ2UiLCJzZXRQYWdlIiwiY3JlYXRlVGFzayIsInNldENyZWF0ZVRhc2siLCJ0aXRsZSIsImRhdGUiLCJyZW1vdmVUYXNrIiwic2V0UmVtb3ZlVGFzayIsImhhbmRsZU9wZW5Nb2RhbERlbGV0ZSIsImlkIiwiaGFuZGxlQ29tcGxldGVTdGF0dXNVcGRhdGUiLCJpdGVtIiwibWFwIiwidGFzayIsImlzQ2hlY2tlZCIsInB1dCIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyIiwiZXJyb3IiLCJoYW5kbGVDbGlja0VkaXRUYXNrIiwiaGFuZGxlQ2xpY2tEZWxldGUiLCJmaWx0ZXIiLCJkZWxldGUiLCJhZGRUYXNrIiwibGVuZ3RoIiwicG9zdENyZWF0ZVRhc2siLCJnZXRUYXNrcyIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVuZGVmaW5lZCIsInVzZXIiLCJnZXQiLCJyb3dzIiwicmVzcG9uc2UiLCJtZXNzYWdlIiwicG9zdCIsInBhZ2VOdW1iZXIiLCJwYWdlQWN0aXZlIiwibmFtZUJ0biIsImFjdGl2ZSIsIkljb25CdG4iLCJvbkNsaWNrQ2xvc2UiLCJvbkNsaWNrU2F2ZSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXNrTmV3IiwidGFyZ2V0IiwiaDMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Main.tsx\n"));

/***/ })

});