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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Main: function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/style */ \"./src/styles/style.ts\");\n/* harmony import */ var _navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar/Navbar */ \"./src/components/navbar/Navbar.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ListTasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ListTasks */ \"./src/components/ListTasks.tsx\");\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Modal */ \"./src/components/Modal.tsx\");\n/* harmony import */ var _public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public */ \"./public/index.jsx\");\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx-react-lite */ \"./node_modules/mobx-react-lite/es/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Main = _s((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__.observer)(_c = _s(()=>{\n    _s();\n    const [modal, setModal] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"none\");\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([\n        {\n            id: 1,\n            title: \"задача 1\",\n            date: \"2023-10-16\",\n            isChecked: false\n        }\n    ]);\n    const [renderTasks, setRenderTasks] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(tasks);\n    const [pagination, setPagination] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        limit: 5,\n        page: 1\n    });\n    const [createTask, setCreateTask] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        title: \"\",\n        date: \"\"\n    });\n    const [removeTask, setRemoveTask] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    const handleOpenModalDelete = (id)=>{\n        setModal(\"delete\");\n        setRemoveTask(id);\n    };\n    const handleCompleteStatusUpdate = async (item)=>{\n        setTasks(tasks.map((task)=>task.id == item.id ? {\n                ...task,\n                isChecked: !task.isChecked\n            } : task));\n        const isChecked = !item.isChecked;\n        axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].put(\"http://localhost:5000/api/tasks/\" + \"\".concat(item.id), {\n            isChecked\n        }).then((data)=>console.log(data));\n    };\n    const handleClickEditTask = (item, title)=>{\n        setTasks(tasks.map((task)=>task.id == item.id ? {\n                ...task,\n                title: title\n            } : task));\n        axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].put(\"http://localhost:5000/api/tasks/\" + \"\".concat(item.id), {\n            title\n        }).then((data)=>console.log(data));\n    };\n    const handleClickDelete = ()=>{\n        setTasks(tasks.filter((task)=>task.id !== removeTask));\n        setModal(\"none\");\n        axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"][\"delete\"](\"http://localhost:5000/api/tasks/\" + \"\".concat(removeTask)).then((data)=>console.log(data));\n    };\n    const addTask = ()=>{\n        if (createTask.title == \"\") return;\n        const task = {\n            id: tasks.length,\n            title: createTask.title,\n            date: createTask.date,\n            isChecked: false\n        };\n        const list = [\n            ...tasks,\n            task\n        ];\n        setTasks(list);\n        postCreateTask(task);\n        setCreateTask({\n            title: \"\",\n            date: \"\"\n        });\n        setModal(\"none\");\n    };\n    const getTasks = ()=>{\n        const str = localStorage.getItem(\"token\");\n        const userID = JSON.parse(str);\n        axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(\"http://localhost:5000/api/tasks?userId=\" + \"\".concat(userID.id) + \"&limit=\".concat(pagination.limit) + \"&page=\".concat(pagination.page)).then((data)=>{\n            setTasks(data.data.tasks.rows);\n            console.log(data.data.tasks);\n        });\n    };\n    const postCreateTask = async (task)=>{\n        const str = localStorage.getItem(\"token\");\n        const userID = JSON.parse(str);\n        axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].post(\"http://localhost:5000/api/tasks/\" + \"\".concat(userID.id), task).then((data)=>console.log(data.data));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        getTasks();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        getTasks();\n    }, [\n        pagination\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setRenderTasks(tasks);\n    }, [\n        tasks\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_1__.MainStyle, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__.Navbar, {\n                        addTask: ()=>setModal(\"add\")\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Main.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 4\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ListTasks__WEBPACK_IMPORTED_MODULE_4__.ListTasks, {\n                        tasks: renderTasks,\n                        handleCompleteStatusUpdate: handleCompleteStatusUpdate,\n                        handleClickEditTask: handleClickEditTask,\n                        handleOpenModalDelete: handleOpenModalDelete,\n                        pageNumber: (page)=>setPagination((pagination)=>({\n                                    ...pagination,\n                                    page: page\n                                }))\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Main.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 4\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Main.tsx\",\n                lineNumber: 100,\n                columnNumber: 3\n            }, undefined),\n            modal == \"add\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_5__.Modal, {\n                title: \"Create task\",\n                nameBtn: \"Save\",\n                active: modal,\n                IconBtn: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_6__.SaveIcon, {}, void 0, false, void 0, void 0),\n                onClickClose: ()=>setModal(\"none\"),\n                onClickSave: addTask,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Enter text...\",\n                        value: createTask.title,\n                        onChange: (e)=>setCreateTask((taskNew)=>({\n                                    ...taskNew,\n                                    title: e.target.value\n                                }))\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Main.tsx\",\n                        lineNumber: 122,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"date\",\n                        value: createTask.date,\n                        onChange: (e)=>setCreateTask((taskNew)=>({\n                                    ...taskNew,\n                                    date: e.target.value\n                                }))\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Main.tsx\",\n                        lineNumber: 128,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Main.tsx\",\n                lineNumber: 114,\n                columnNumber: 4\n            }, undefined),\n            modal == \"delete\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_5__.Modal, {\n                title: \"Delete task\",\n                nameBtn: \"Delete\",\n                active: modal,\n                onClickClose: ()=>setModal(\"none\"),\n                onClickSave: handleClickDelete,\n                IconBtn: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_6__.DeleteIcon, {}, void 0, false, void 0, void 0),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: \"Are you sure about deleting this task?\"\n                }, void 0, false, {\n                    fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Main.tsx\",\n                    lineNumber: 138,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Main.tsx\",\n                lineNumber: 137,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true);\n}, \"DG5wowm51Inpr8P+vnDtvtudyKU=\")), \"DG5wowm51Inpr8P+vnDtvtudyKU=\");\n_c1 = Main;\nvar _c, _c1;\n$RefreshReg$(_c, \"Main$observer\");\n$RefreshReg$(_c1, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NYWluLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUNGO0FBQ3NCO0FBQ3ZCO0FBQ1I7QUFDb0I7QUFDVDtBQUVqQjtBQUdsQixNQUFNVyxPQUFpQkYsR0FBQUEseURBQVFBLFNBQUM7O0lBR3RDLE1BQU0sQ0FBQ0csT0FBT0MsU0FBUyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNVLE9BQU9DLFNBQVMsR0FBR1gsK0NBQVFBLENBQUM7UUFDbEM7WUFDQ1ksSUFBSTtZQUNKQyxPQUFPO1lBQ1BDLE1BQU07WUFDTkMsV0FBVztRQUNaO0tBQ0E7SUFDRCxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR2pCLCtDQUFRQSxDQUFDVTtJQUMvQyxNQUFNLENBQUNRLFlBQVlDLGNBQWMsR0FBR25CLCtDQUFRQSxDQUFDO1FBQUVvQixPQUFPO1FBQUdDLE1BQU07SUFBRTtJQUNqRSxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR3ZCLCtDQUFRQSxDQUFDO1FBQUVhLE9BQU87UUFBSUMsTUFBTTtJQUFHO0lBQ25FLE1BQU0sQ0FBQ1UsWUFBWUMsY0FBYyxHQUFHekIsK0NBQVFBLENBQVM7SUFFckQsTUFBTTBCLHdCQUF3QixDQUFDZDtRQUM5QkgsU0FBUztRQUNUZ0IsY0FBY2I7SUFDZjtJQUNBLE1BQU1lLDZCQUE2QixPQUFPQztRQUN6Q2pCLFNBQVNELE1BQU1tQixHQUFHLENBQUNDLENBQUFBLE9BQVFBLEtBQUtsQixFQUFFLElBQUlnQixLQUFLaEIsRUFBRSxHQUFHO2dCQUFFLEdBQUdrQixJQUFJO2dCQUFFZixXQUFXLENBQUNlLEtBQUtmLFNBQVM7WUFBQyxJQUFJZTtRQUMxRixNQUFNZixZQUFZLENBQUNhLEtBQUtiLFNBQVM7UUFDakNULGlEQUNLLENBQUMscUNBQXFDLEdBQVcsT0FBUnNCLEtBQUtoQixFQUFFLEdBQUk7WUFBRUc7UUFBVSxHQUNuRWlCLElBQUksQ0FBQ0MsQ0FBQUEsT0FBUUMsUUFBUUMsR0FBRyxDQUFDRjtJQUM1QjtJQUNBLE1BQU1HLHNCQUFzQixDQUFDUixNQUFpQmY7UUFDN0NGLFNBQVNELE1BQU1tQixHQUFHLENBQUNDLENBQUFBLE9BQVFBLEtBQUtsQixFQUFFLElBQUlnQixLQUFLaEIsRUFBRSxHQUFHO2dCQUFFLEdBQUdrQixJQUFJO2dCQUFFakIsT0FBT0E7WUFBTSxJQUFJaUI7UUFDNUV4QixpREFDSyxDQUFDLHFDQUFxQyxHQUFXLE9BQVJzQixLQUFLaEIsRUFBRSxHQUFJO1lBQUVDO1FBQU0sR0FDL0RtQixJQUFJLENBQUNDLENBQUFBLE9BQVFDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDNUI7SUFDQSxNQUFNSSxvQkFBb0I7UUFDekIxQixTQUFTRCxNQUFNNEIsTUFBTSxDQUFDUixDQUFBQSxPQUFRQSxLQUFLbEIsRUFBRSxLQUFLWTtRQUMxQ2YsU0FBUztRQUNUSCx1REFDUSxDQUFDLHFDQUFxQyxHQUFjLE9BQVhrQixhQUMvQ1EsSUFBSSxDQUFDQyxDQUFBQSxPQUFRQyxRQUFRQyxHQUFHLENBQUNGO0lBQzVCO0lBQ0EsTUFBTU8sVUFBVTtRQUNmLElBQUlsQixXQUFXVCxLQUFLLElBQUksSUFBSTtRQUM1QixNQUFNaUIsT0FBa0I7WUFDdkJsQixJQUFJRixNQUFNK0IsTUFBTTtZQUNoQjVCLE9BQU9TLFdBQVdULEtBQUs7WUFDdkJDLE1BQU1RLFdBQVdSLElBQUk7WUFDckJDLFdBQVc7UUFDWjtRQUNBLE1BQU0yQixPQUFPO2VBQUloQztZQUFPb0I7U0FBSztRQUM3Qm5CLFNBQVMrQjtRQUNUQyxlQUFlYjtRQUNmUCxjQUFjO1lBQUVWLE9BQU87WUFBSUMsTUFBTTtRQUFHO1FBQ3BDTCxTQUFTO0lBQ1Y7SUFHQSxNQUFNbUMsV0FBVztRQUNoQixNQUFNQyxNQUFNQyxhQUFhQyxPQUFPLENBQUM7UUFDakMsTUFBTUMsU0FBU0MsS0FBS0MsS0FBSyxDQUFDTDtRQUMxQnZDLGlEQUNLLENBQUMsNENBQTRDLEdBQWEsT0FBVjBDLE9BQU9wQyxFQUFFLElBQUssVUFBMkIsT0FBakJNLFdBQVdFLEtBQUssSUFBSyxTQUF5QixPQUFoQkYsV0FBV0csSUFBSSxHQUN4SFcsSUFBSSxDQUFDQyxDQUFBQTtZQUNMdEIsU0FBU3NCLEtBQUtBLElBQUksQ0FBQ3ZCLEtBQUssQ0FBQzBDLElBQUk7WUFDN0JsQixRQUFRQyxHQUFHLENBQUNGLEtBQUtBLElBQUksQ0FBQ3ZCLEtBQUs7UUFDNUI7SUFDRjtJQUVBLE1BQU1pQyxpQkFBaUIsT0FBT2I7UUFDN0IsTUFBTWUsTUFBTUMsYUFBYUMsT0FBTyxDQUFDO1FBQ2pDLE1BQU1DLFNBQVNDLEtBQUtDLEtBQUssQ0FBQ0w7UUFDMUJ2QyxrREFDTSxDQUFDLHFDQUFxQyxHQUFhLE9BQVYwQyxPQUFPcEMsRUFBRSxHQUFJa0IsTUFDMURFLElBQUksQ0FBQ0MsQ0FBQUEsT0FBUUMsUUFBUUMsR0FBRyxDQUFDRixLQUFLQSxJQUFJO0lBQ3JDO0lBRUFsQyxnREFBU0EsQ0FBQztRQUNUNkM7SUFDRCxHQUFHLEVBQUU7SUFDTDdDLGdEQUFTQSxDQUFDO1FBQ1Q2QztJQUNELEdBQUc7UUFBQzFCO0tBQVc7SUFFZm5CLGdEQUFTQSxDQUFDO1FBQ1RrQixlQUFlUDtJQUNoQixHQUFHO1FBQUNBO0tBQU07SUFFVixxQkFBUTs7MEJBQ1AsOERBQUNkLG9EQUFTQTs7a0NBQ1QsOERBQUNDLGtEQUFNQTt3QkFDTjJDLFNBQVMsSUFBTS9CLFNBQVM7Ozs7OztrQ0FFekIsOERBQUNSLGlEQUFTQTt3QkFDVFMsT0FBT007d0JBQ1BXLDRCQUE0QkE7d0JBQzVCUyxxQkFBcUJBO3dCQUNyQlYsdUJBQXVCQTt3QkFDdkI0QixZQUFZLENBQUNqQyxPQUFpQkYsY0FBY0QsQ0FBQUEsYUFBZTtvQ0FBRSxHQUFHQSxVQUFVO29DQUFFRyxNQUFNQTtnQ0FBSzs7Ozs7Ozs7Ozs7O1lBSXhGYixTQUFTLHVCQUNULDhEQUFDTix5Q0FBS0E7Z0JBQ0xXLE9BQU87Z0JBQ1AwQyxTQUFTO2dCQUNUQyxRQUFRaEQ7Z0JBQ1JpRCx1QkFBUyw4REFBQ3JELDZDQUFRQTtnQkFDbEJzRCxjQUFjLElBQU1qRCxTQUFTO2dCQUM3QmtELGFBQWFuQjs7a0NBRWIsOERBQUNvQjt3QkFDQUMsTUFBSzt3QkFDTEMsYUFBWTt3QkFDWkMsT0FBT3pDLFdBQVdULEtBQUs7d0JBQ3ZCbUQsVUFBVSxDQUFDQyxJQUFNMUMsY0FBYzJDLENBQUFBLFVBQVk7b0NBQUUsR0FBR0EsT0FBTztvQ0FBRXJELE9BQU9vRCxFQUFFRSxNQUFNLENBQUNKLEtBQUs7Z0NBQUM7Ozs7OztrQ0FFaEYsOERBQUNIO3dCQUNBQyxNQUFLO3dCQUNMRSxPQUFPekMsV0FBV1IsSUFBSTt3QkFDdEJrRCxVQUFVLENBQUNDLElBQU0xQyxjQUFjMkMsQ0FBQUEsVUFBWTtvQ0FBRSxHQUFHQSxPQUFPO29DQUFFcEQsTUFBTW1ELEVBQUVFLE1BQU0sQ0FBQ0osS0FBSztnQ0FBQzs7Ozs7Ozs7Ozs7O1lBS2hGdkQsU0FBUywwQkFDVCw4REFBQ04seUNBQUtBO2dCQUFDVyxPQUFPO2dCQUFlMEMsU0FBUztnQkFBVUMsUUFBUWhEO2dCQUFPa0QsY0FBYyxJQUFNakQsU0FBUztnQkFBU2tELGFBQWF0QjtnQkFBbUJvQix1QkFBUyw4REFBQ3RELCtDQUFVQTswQkFDeEosNEVBQUNpRTs4QkFBRzs7Ozs7Ozs7Ozs7OztBQUtSLHFFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01haW4udHN4PzMwYWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFpblN0eWxlIH0gZnJvbSAnQC9zdHlsZXMvc3R5bGUnXG5pbXBvcnQgeyBOYXZiYXIgfSBmcm9tICcuL25hdmJhci9OYXZiYXInXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGlzdFRhc2tzIH0gZnJvbSAnLi9MaXN0VGFza3MnXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJy4vTW9kYWwnXG5pbXBvcnQgeyBEZWxldGVJY29uLCBTYXZlSWNvbiB9IGZyb20gJy4uLy4uL3B1YmxpYydcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdC1saXRlJ1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJ0AvdXRpbHMvY29udGV4dCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IFRhc2tQcm9wcyB9IGZyb20gJ0AvaW50ZXJmYWNlL2ludGVyZmFjZSdcblxuZXhwb3J0IGNvbnN0IE1haW46IFJlYWN0LkZDID0gb2JzZXJ2ZXIoKCkgPT4ge1xuXG5cblx0Y29uc3QgW21vZGFsLCBzZXRNb2RhbF0gPSB1c2VTdGF0ZSgnbm9uZScpXG5cdGNvbnN0IFt0YXNrcywgc2V0VGFza3NdID0gdXNlU3RhdGUoW1xuXHRcdHtcblx0XHRcdGlkOiAxLFxuXHRcdFx0dGl0bGU6IFwi0LfQsNC00LDRh9CwIDFcIixcblx0XHRcdGRhdGU6IFwiMjAyMy0xMC0xNlwiLFxuXHRcdFx0aXNDaGVja2VkOiBmYWxzZVxuXHRcdH1cblx0XSlcblx0Y29uc3QgW3JlbmRlclRhc2tzLCBzZXRSZW5kZXJUYXNrc10gPSB1c2VTdGF0ZSh0YXNrcylcblx0Y29uc3QgW3BhZ2luYXRpb24sIHNldFBhZ2luYXRpb25dID0gdXNlU3RhdGUoeyBsaW1pdDogNSwgcGFnZTogMSB9KVxuXHRjb25zdCBbY3JlYXRlVGFzaywgc2V0Q3JlYXRlVGFza10gPSB1c2VTdGF0ZSh7IHRpdGxlOiAnJywgZGF0ZTogJycgfSlcblx0Y29uc3QgW3JlbW92ZVRhc2ssIHNldFJlbW92ZVRhc2tdID0gdXNlU3RhdGU8bnVtYmVyPigwKVxuXG5cdGNvbnN0IGhhbmRsZU9wZW5Nb2RhbERlbGV0ZSA9IChpZDogbnVtYmVyKSA9PiB7XG5cdFx0c2V0TW9kYWwoJ2RlbGV0ZScpXG5cdFx0c2V0UmVtb3ZlVGFzayhpZClcblx0fVxuXHRjb25zdCBoYW5kbGVDb21wbGV0ZVN0YXR1c1VwZGF0ZSA9IGFzeW5jIChpdGVtOiBUYXNrUHJvcHMpID0+IHtcblx0XHRzZXRUYXNrcyh0YXNrcy5tYXAodGFzayA9PiB0YXNrLmlkID09IGl0ZW0uaWQgPyB7IC4uLnRhc2ssIGlzQ2hlY2tlZDogIXRhc2suaXNDaGVja2VkIH0gOiB0YXNrKSlcblx0XHRjb25zdCBpc0NoZWNrZWQgPSAhaXRlbS5pc0NoZWNrZWRcblx0XHRheGlvc1xuXHRcdFx0LnB1dCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS90YXNrcy8nICsgYCR7aXRlbS5pZH1gLCB7IGlzQ2hlY2tlZCB9KVxuXHRcdFx0LnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSlcblx0fVxuXHRjb25zdCBoYW5kbGVDbGlja0VkaXRUYXNrID0gKGl0ZW06IFRhc2tQcm9wcywgdGl0bGU6IHN0cmluZykgPT4ge1xuXHRcdHNldFRhc2tzKHRhc2tzLm1hcCh0YXNrID0+IHRhc2suaWQgPT0gaXRlbS5pZCA/IHsgLi4udGFzaywgdGl0bGU6IHRpdGxlIH0gOiB0YXNrKSlcblx0XHRheGlvc1xuXHRcdFx0LnB1dCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS90YXNrcy8nICsgYCR7aXRlbS5pZH1gLCB7IHRpdGxlIH0pXG5cdFx0XHQudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKVxuXHR9XG5cdGNvbnN0IGhhbmRsZUNsaWNrRGVsZXRlID0gKCkgPT4ge1xuXHRcdHNldFRhc2tzKHRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2suaWQgIT09IHJlbW92ZVRhc2spKVxuXHRcdHNldE1vZGFsKCdub25lJylcblx0XHRheGlvc1xuXHRcdFx0LmRlbGV0ZSgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS90YXNrcy8nICsgYCR7cmVtb3ZlVGFza31gKVxuXHRcdFx0LnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSlcblx0fVxuXHRjb25zdCBhZGRUYXNrID0gKCkgPT4ge1xuXHRcdGlmIChjcmVhdGVUYXNrLnRpdGxlID09ICcnKSByZXR1cm47XG5cdFx0Y29uc3QgdGFzazogVGFza1Byb3BzID0ge1xuXHRcdFx0aWQ6IHRhc2tzLmxlbmd0aCxcblx0XHRcdHRpdGxlOiBjcmVhdGVUYXNrLnRpdGxlLFxuXHRcdFx0ZGF0ZTogY3JlYXRlVGFzay5kYXRlLFxuXHRcdFx0aXNDaGVja2VkOiBmYWxzZVxuXHRcdH1cblx0XHRjb25zdCBsaXN0ID0gWy4uLnRhc2tzLCB0YXNrXVxuXHRcdHNldFRhc2tzKGxpc3QpXG5cdFx0cG9zdENyZWF0ZVRhc2sodGFzaylcblx0XHRzZXRDcmVhdGVUYXNrKHsgdGl0bGU6ICcnLCBkYXRlOiAnJyB9KVxuXHRcdHNldE1vZGFsKCdub25lJylcblx0fVxuXG5cblx0Y29uc3QgZ2V0VGFza3MgPSAoKSA9PiB7XG5cdFx0Y29uc3Qgc3RyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJylcblx0XHRjb25zdCB1c2VySUQgPSBKU09OLnBhcnNlKHN0cilcblx0XHRheGlvc1xuXHRcdFx0LmdldCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS90YXNrcz91c2VySWQ9JyArIGAke3VzZXJJRC5pZH1gICsgYCZsaW1pdD0ke3BhZ2luYXRpb24ubGltaXR9YCArIGAmcGFnZT0ke3BhZ2luYXRpb24ucGFnZX1gKVxuXHRcdFx0LnRoZW4oZGF0YSA9PiB7XG5cdFx0XHRcdHNldFRhc2tzKGRhdGEuZGF0YS50YXNrcy5yb3dzKVxuXHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhLmRhdGEudGFza3MpXG5cdFx0XHR9KVxuXHR9XG5cblx0Y29uc3QgcG9zdENyZWF0ZVRhc2sgPSBhc3luYyAodGFzazogVGFza1Byb3BzKSA9PiB7XG5cdFx0Y29uc3Qgc3RyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJylcblx0XHRjb25zdCB1c2VySUQgPSBKU09OLnBhcnNlKHN0cilcblx0XHRheGlvc1xuXHRcdFx0LnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdGFza3MvJyArIGAke3VzZXJJRC5pZH1gLCB0YXNrKVxuXHRcdFx0LnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhLmRhdGEpKVxuXHR9XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRnZXRUYXNrcygpXG5cdH0sIFtdKVxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGdldFRhc2tzKClcblx0fSwgW3BhZ2luYXRpb25dKVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0c2V0UmVuZGVyVGFza3ModGFza3MpXG5cdH0sIFt0YXNrc10pXG5cblx0cmV0dXJuICg8PlxuXHRcdDxNYWluU3R5bGU+XG5cdFx0XHQ8TmF2YmFyXG5cdFx0XHRcdGFkZFRhc2s9eygpID0+IHNldE1vZGFsKCdhZGQnKX1cblx0XHRcdC8+XG5cdFx0XHQ8TGlzdFRhc2tzXG5cdFx0XHRcdHRhc2tzPXtyZW5kZXJUYXNrc31cblx0XHRcdFx0aGFuZGxlQ29tcGxldGVTdGF0dXNVcGRhdGU9e2hhbmRsZUNvbXBsZXRlU3RhdHVzVXBkYXRlfVxuXHRcdFx0XHRoYW5kbGVDbGlja0VkaXRUYXNrPXtoYW5kbGVDbGlja0VkaXRUYXNrfVxuXHRcdFx0XHRoYW5kbGVPcGVuTW9kYWxEZWxldGU9e2hhbmRsZU9wZW5Nb2RhbERlbGV0ZX1cblx0XHRcdFx0cGFnZU51bWJlcj17KHBhZ2U6IG51bWJlcikgPT4gc2V0UGFnaW5hdGlvbihwYWdpbmF0aW9uID0+ICh7IC4uLnBhZ2luYXRpb24sIHBhZ2U6IHBhZ2UgfSkpfVxuXHRcdFx0Lz5cblx0XHQ8L01haW5TdHlsZT5cblx0XHR7XG5cdFx0XHRtb2RhbCA9PSAnYWRkJyAmJlxuXHRcdFx0PE1vZGFsXG5cdFx0XHRcdHRpdGxlPXsnQ3JlYXRlIHRhc2snfVxuXHRcdFx0XHRuYW1lQnRuPXsnU2F2ZSd9XG5cdFx0XHRcdGFjdGl2ZT17bW9kYWx9XG5cdFx0XHRcdEljb25CdG49ezxTYXZlSWNvbiAvPn1cblx0XHRcdFx0b25DbGlja0Nsb3NlPXsoKSA9PiBzZXRNb2RhbCgnbm9uZScpfVxuXHRcdFx0XHRvbkNsaWNrU2F2ZT17YWRkVGFza31cblx0XHRcdD5cblx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdFbnRlciB0ZXh0Li4uJ1xuXHRcdFx0XHRcdHZhbHVlPXtjcmVhdGVUYXNrLnRpdGxlfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q3JlYXRlVGFzayh0YXNrTmV3ID0+ICh7IC4uLnRhc2tOZXcsIHRpdGxlOiBlLnRhcmdldC52YWx1ZSB9KSl9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdHR5cGU9XCJkYXRlXCJcblx0XHRcdFx0XHR2YWx1ZT17Y3JlYXRlVGFzay5kYXRlfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q3JlYXRlVGFzayh0YXNrTmV3ID0+ICh7IC4uLnRhc2tOZXcsIGRhdGU6IGUudGFyZ2V0LnZhbHVlIH0pKX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvTW9kYWw+XG5cdFx0fVxuXHRcdHtcblx0XHRcdG1vZGFsID09ICdkZWxldGUnICYmXG5cdFx0XHQ8TW9kYWwgdGl0bGU9eydEZWxldGUgdGFzayd9IG5hbWVCdG49eydEZWxldGUnfSBhY3RpdmU9e21vZGFsfSBvbkNsaWNrQ2xvc2U9eygpID0+IHNldE1vZGFsKCdub25lJyl9IG9uQ2xpY2tTYXZlPXtoYW5kbGVDbGlja0RlbGV0ZX0gSWNvbkJ0bj17PERlbGV0ZUljb24gLz59PlxuXHRcdFx0XHQ8aDM+QXJlIHlvdSBzdXJlIGFib3V0IGRlbGV0aW5nIHRoaXMgdGFzaz88L2gzPlxuXHRcdFx0PC9Nb2RhbD5cblx0XHR9XG5cdDwvPlxuXHQpXG59KSJdLCJuYW1lcyI6WyJNYWluU3R5bGUiLCJOYXZiYXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGlzdFRhc2tzIiwiTW9kYWwiLCJEZWxldGVJY29uIiwiU2F2ZUljb24iLCJvYnNlcnZlciIsImF4aW9zIiwiTWFpbiIsIm1vZGFsIiwic2V0TW9kYWwiLCJ0YXNrcyIsInNldFRhc2tzIiwiaWQiLCJ0aXRsZSIsImRhdGUiLCJpc0NoZWNrZWQiLCJyZW5kZXJUYXNrcyIsInNldFJlbmRlclRhc2tzIiwicGFnaW5hdGlvbiIsInNldFBhZ2luYXRpb24iLCJsaW1pdCIsInBhZ2UiLCJjcmVhdGVUYXNrIiwic2V0Q3JlYXRlVGFzayIsInJlbW92ZVRhc2siLCJzZXRSZW1vdmVUYXNrIiwiaGFuZGxlT3Blbk1vZGFsRGVsZXRlIiwiaGFuZGxlQ29tcGxldGVTdGF0dXNVcGRhdGUiLCJpdGVtIiwibWFwIiwidGFzayIsInB1dCIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNsaWNrRWRpdFRhc2siLCJoYW5kbGVDbGlja0RlbGV0ZSIsImZpbHRlciIsImRlbGV0ZSIsImFkZFRhc2siLCJsZW5ndGgiLCJsaXN0IiwicG9zdENyZWF0ZVRhc2siLCJnZXRUYXNrcyIsInN0ciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VySUQiLCJKU09OIiwicGFyc2UiLCJnZXQiLCJyb3dzIiwicG9zdCIsInBhZ2VOdW1iZXIiLCJuYW1lQnRuIiwiYWN0aXZlIiwiSWNvbkJ0biIsIm9uQ2xpY2tDbG9zZSIsIm9uQ2xpY2tTYXZlIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhc2tOZXciLCJ0YXJnZXQiLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Main.tsx\n"));

/***/ })

});