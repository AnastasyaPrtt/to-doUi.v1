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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Main: function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/style */ \"./src/styles/style.ts\");\n/* harmony import */ var _navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar/Navbar */ \"./src/components/navbar/Navbar.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ListTasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ListTasks */ \"./src/components/ListTasks.tsx\");\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Modal */ \"./src/components/Modal.tsx\");\n/* harmony import */ var _public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public */ \"./public/index.jsx\");\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx-react-lite */ \"./node_modules/mobx-react-lite/es/index.js\");\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/context */ \"./src/utils/context.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Main = _s((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__.observer)(_c = _s(()=>{\n    _s();\n    const { task } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_utils_context__WEBPACK_IMPORTED_MODULE_8__.Context);\n    const [modal, setModal] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"none\");\n    const [taskNew, setTaskNew] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        title: \"\",\n        date: \"\"\n    });\n    // const [createTask, setCreateTask] = useState({ title: '', date: dateNow })\n    const [taskDelete, setTaskDelete] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const addTask = ()=>[\n            setModal(\"add\")\n        ];\n    const handleOpenModalDelete = (id)=>{\n        setModal(\"delete\");\n        setTaskDelete(id);\n    };\n    const createTask = async ()=>{\n        const str = localStorage.getItem(\"token\");\n        const userID = JSON.parse(str);\n        axios__WEBPACK_IMPORTED_MODULE_9__[\"default\"].post(\"http://localhost:5000/api/tasks/\" + \"\".concat(userID.id), {\n            taskNew\n        }).then((data)=>console.log(data.data));\n        setModal(\"none\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_1__.MainStyle, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__.Navbar, {\n                        addTask: addTask\n                    }, void 0, false, {\n                        fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\Main.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 4\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ListTasks__WEBPACK_IMPORTED_MODULE_4__.ListTasks, {\n                        // handleOpenModalDelete={handleOpenModalDelete}\n                        onClick: handleOpenModalDelete\n                    }, void 0, false, {\n                        fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\Main.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 4\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\Main.tsx\",\n                lineNumber: 38,\n                columnNumber: 3\n            }, undefined),\n            modal == \"add\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_5__.Modal, {\n                title: \"Create task\",\n                nameBtn: \"Save\",\n                active: modal,\n                IconBtn: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_6__.SaveIcon, {}, void 0, false, void 0, void 0),\n                onClickClose: ()=>setModal(\"none\"),\n                onClickSave: createTask,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Enter text...\",\n                        value: taskNew.title,\n                        onChange: (e)=>setTaskNew((taskNew)=>({\n                                    ...taskNew,\n                                    title: e.target.value\n                                }))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\Main.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"date\",\n                        value: taskNew.date,\n                        onChange: (e)=>setTaskNew((taskNew)=>({\n                                    ...taskNew,\n                                    date: e.target.value\n                                }))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\Main.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\Main.tsx\",\n                lineNumber: 49,\n                columnNumber: 4\n            }, undefined),\n            modal == \"delete\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_5__.Modal, {\n                title: \"Delete task\",\n                nameBtn: \"Delete\",\n                active: modal,\n                onClickClose: ()=>setModal(\"none\"),\n                onClickSave: ()=>{\n                    setModal(\"none\");\n                    task.removeTask(taskDelete);\n                },\n                IconBtn: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_6__.DeleteIcon, {}, void 0, false, void 0, void 0),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: \"Are you sure about deleting this task?\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\Main.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\Main.tsx\",\n                lineNumber: 72,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true);\n}, \"T1zTK0xpucfrVmWczySfrzVguzI=\")), \"T1zTK0xpucfrVmWczySfrzVguzI=\");\n_c1 = Main;\nvar _c, _c1;\n$RefreshReg$(_c, \"Main$observer\");\n$RefreshReg$(_c1, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NYWluLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEM7QUFDRjtBQUNXO0FBRVo7QUFDUjtBQUNvQjtBQUVUO0FBQ0Q7QUFDaEI7QUFFbEIsTUFBTVksT0FBaUJILEdBQUFBLHlEQUFRQSxTQUFDOztJQUV0QyxNQUFNLEVBQUVJLElBQUksRUFBRSxHQUFHVixpREFBVUEsQ0FBQ08sbURBQU9BO0lBQ25DLE1BQU0sQ0FBQ0ksT0FBT0MsU0FBUyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNZLFNBQVNDLFdBQVcsR0FBR2IsK0NBQVFBLENBQUM7UUFBRWMsT0FBTztRQUFJQyxNQUFNO0lBQUc7SUFDN0QsNkVBQTZFO0lBQzdFLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHakIsK0NBQVFBO0lBQzVDLE1BQU1rQixVQUFVLElBQU07WUFDckJQLFNBQVM7U0FDVDtJQUNELE1BQU1RLHdCQUF3QixDQUFDQztRQUM5QlQsU0FBUztRQUNUTSxjQUFjRztJQUNmO0lBQ0EsTUFBTUMsYUFBYTtRQUNsQixNQUFNQyxNQUFNQyxhQUFhQyxPQUFPLENBQUM7UUFDakMsTUFBTUMsU0FBU0MsS0FBS0MsS0FBSyxDQUFDTDtRQUMxQmYsa0RBQ00sQ0FBQyxxQ0FBcUMsR0FBYSxPQUFWa0IsT0FBT0wsRUFBRSxHQUFJO1lBQUVSO1FBQVEsR0FDcEVpQixJQUFJLENBQUNDLENBQUFBLE9BQVFDLFFBQVFDLEdBQUcsQ0FBQ0YsS0FBS0EsSUFBSTtRQUNwQ25CLFNBQVM7SUFDVjtJQUdBLHFCQUFROzswQkFDUCw4REFBQ2Ysb0RBQVNBOztrQ0FDVCw4REFBQ0Msa0RBQU1BO3dCQUNOcUIsU0FBU0E7Ozs7OztrQ0FFViw4REFBQ2pCLGlEQUFTQTt3QkFDVCxnREFBZ0Q7d0JBQ2hEZ0MsU0FBU2Q7Ozs7Ozs7Ozs7OztZQUlWVCxTQUFTLHVCQUNULDhEQUFDUix5Q0FBS0E7Z0JBQ0xZLE9BQU87Z0JBQ1BvQixTQUFTO2dCQUNUQyxRQUFRekI7Z0JBQ1IwQix1QkFBUyw4REFBQ2hDLDZDQUFRQTtnQkFDbEJpQyxjQUFjLElBQU0xQixTQUFTO2dCQUM3QjJCLGFBQWFqQjs7a0NBRWIsOERBQUNrQjt3QkFDQUMsTUFBSzt3QkFDTEMsYUFBWTt3QkFDWkMsT0FBTzlCLFFBQVFFLEtBQUs7d0JBQ3BCNkIsVUFBVSxDQUFDQyxJQUFNL0IsV0FBV0QsQ0FBQUEsVUFBWTtvQ0FBRSxHQUFHQSxPQUFPO29DQUFFRSxPQUFPOEIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO2dDQUFDOzs7Ozs7a0NBRTdFLDhEQUFDSDt3QkFDQUMsTUFBSzt3QkFDTEUsT0FBTzlCLFFBQVFHLElBQUk7d0JBQ25CNEIsVUFBVSxDQUFDQyxJQUFNL0IsV0FBV0QsQ0FBQUEsVUFBWTtvQ0FBRSxHQUFHQSxPQUFPO29DQUFFRyxNQUFNNkIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO2dDQUFDOzs7Ozs7Ozs7Ozs7WUFLN0VoQyxTQUFTLDBCQUNULDhEQUFDUix5Q0FBS0E7Z0JBQUNZLE9BQU87Z0JBQWVvQixTQUFTO2dCQUFVQyxRQUFRekI7Z0JBQU8yQixjQUFjLElBQU0xQixTQUFTO2dCQUFTMkIsYUFBYTtvQkFBUTNCLFNBQVM7b0JBQVNGLEtBQUtxQyxVQUFVLENBQUM5QjtnQkFBWTtnQkFBR29CLHVCQUFTLDhEQUFDakMsK0NBQVVBOzBCQUM5TCw0RUFBQzRDOzhCQUFHOzs7Ozs7Ozs7Ozs7O0FBS1IscUVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWFpbi50c3g/MzBhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYWluU3R5bGUgfSBmcm9tICdAL3N0eWxlcy9zdHlsZSdcclxuaW1wb3J0IHsgTmF2YmFyIH0gZnJvbSAnLi9uYXZiYXIvTmF2YmFyJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCB7IExpc3RUYXNrcyB9IGZyb20gJy4vTGlzdFRhc2tzJ1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJy4vTW9kYWwnXHJcbmltcG9ydCB7IERlbGV0ZUljb24sIFNhdmVJY29uIH0gZnJvbSAnLi4vLi4vcHVibGljJ1xyXG5pbXBvcnQgeyBkYXRlTm93IH0gZnJvbSAnQC9EYXRlTm93J1xyXG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QtbGl0ZSdcclxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJ0AvdXRpbHMvY29udGV4dCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuZXhwb3J0IGNvbnN0IE1haW46IFJlYWN0LkZDID0gb2JzZXJ2ZXIoKCkgPT4ge1xyXG5cclxuXHRjb25zdCB7IHRhc2sgfSA9IHVzZUNvbnRleHQoQ29udGV4dClcclxuXHRjb25zdCBbbW9kYWwsIHNldE1vZGFsXSA9IHVzZVN0YXRlKCdub25lJylcclxuXHRjb25zdCBbdGFza05ldywgc2V0VGFza05ld10gPSB1c2VTdGF0ZSh7IHRpdGxlOiAnJywgZGF0ZTogJycgfSlcclxuXHQvLyBjb25zdCBbY3JlYXRlVGFzaywgc2V0Q3JlYXRlVGFza10gPSB1c2VTdGF0ZSh7IHRpdGxlOiAnJywgZGF0ZTogZGF0ZU5vdyB9KVxyXG5cdGNvbnN0IFt0YXNrRGVsZXRlLCBzZXRUYXNrRGVsZXRlXSA9IHVzZVN0YXRlPG51bWJlcj4oKVxyXG5cdGNvbnN0IGFkZFRhc2sgPSAoKSA9PiBbXHJcblx0XHRzZXRNb2RhbCgnYWRkJylcclxuXHRdXHJcblx0Y29uc3QgaGFuZGxlT3Blbk1vZGFsRGVsZXRlID0gKGlkOiBudW1iZXIpID0+IHtcclxuXHRcdHNldE1vZGFsKCdkZWxldGUnKVxyXG5cdFx0c2V0VGFza0RlbGV0ZShpZClcclxuXHR9XHJcblx0Y29uc3QgY3JlYXRlVGFzayA9IGFzeW5jICgpID0+IHtcclxuXHRcdGNvbnN0IHN0ciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXHJcblx0XHRjb25zdCB1c2VySUQgPSBKU09OLnBhcnNlKHN0cilcclxuXHRcdGF4aW9zXHJcblx0XHRcdC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3Rhc2tzLycgKyBgJHt1c2VySUQuaWR9YCwgeyB0YXNrTmV3IH0pXHJcblx0XHRcdC50aGVuKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YS5kYXRhKSlcclxuXHRcdHNldE1vZGFsKCdub25lJylcclxuXHR9XHJcblxyXG5cclxuXHRyZXR1cm4gKDw+XHJcblx0XHQ8TWFpblN0eWxlPlxyXG5cdFx0XHQ8TmF2YmFyXHJcblx0XHRcdFx0YWRkVGFzaz17YWRkVGFza31cclxuXHRcdFx0Lz5cclxuXHRcdFx0PExpc3RUYXNrc1xyXG5cdFx0XHRcdC8vIGhhbmRsZU9wZW5Nb2RhbERlbGV0ZT17aGFuZGxlT3Blbk1vZGFsRGVsZXRlfVxyXG5cdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZU9wZW5Nb2RhbERlbGV0ZX1cclxuXHRcdFx0Lz5cclxuXHRcdDwvTWFpblN0eWxlPlxyXG5cdFx0e1xyXG5cdFx0XHRtb2RhbCA9PSAnYWRkJyAmJlxyXG5cdFx0XHQ8TW9kYWxcclxuXHRcdFx0XHR0aXRsZT17J0NyZWF0ZSB0YXNrJ31cclxuXHRcdFx0XHRuYW1lQnRuPXsnU2F2ZSd9XHJcblx0XHRcdFx0YWN0aXZlPXttb2RhbH1cclxuXHRcdFx0XHRJY29uQnRuPXs8U2F2ZUljb24gLz59XHJcblx0XHRcdFx0b25DbGlja0Nsb3NlPXsoKSA9PiBzZXRNb2RhbCgnbm9uZScpfVxyXG5cdFx0XHRcdG9uQ2xpY2tTYXZlPXtjcmVhdGVUYXNrfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nRW50ZXIgdGV4dC4uLidcclxuXHRcdFx0XHRcdHZhbHVlPXt0YXNrTmV3LnRpdGxlfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRUYXNrTmV3KHRhc2tOZXcgPT4gKHsgLi4udGFza05ldywgdGl0bGU6IGUudGFyZ2V0LnZhbHVlIH0pKX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0dHlwZT1cImRhdGVcIlxyXG5cdFx0XHRcdFx0dmFsdWU9e3Rhc2tOZXcuZGF0ZX1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGFza05ldyh0YXNrTmV3ID0+ICh7IC4uLnRhc2tOZXcsIGRhdGU6IGUudGFyZ2V0LnZhbHVlIH0pKX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L01vZGFsPlxyXG5cdFx0fVxyXG5cdFx0e1xyXG5cdFx0XHRtb2RhbCA9PSAnZGVsZXRlJyAmJlxyXG5cdFx0XHQ8TW9kYWwgdGl0bGU9eydEZWxldGUgdGFzayd9IG5hbWVCdG49eydEZWxldGUnfSBhY3RpdmU9e21vZGFsfSBvbkNsaWNrQ2xvc2U9eygpID0+IHNldE1vZGFsKCdub25lJyl9IG9uQ2xpY2tTYXZlPXsoKSA9PiB7IHNldE1vZGFsKCdub25lJyk7IHRhc2sucmVtb3ZlVGFzayh0YXNrRGVsZXRlKSB9fSBJY29uQnRuPXs8RGVsZXRlSWNvbiAvPn0+XHJcblx0XHRcdFx0PGgzPkFyZSB5b3Ugc3VyZSBhYm91dCBkZWxldGluZyB0aGlzIHRhc2s/PC9oMz5cclxuXHRcdFx0PC9Nb2RhbD5cclxuXHRcdH1cclxuXHQ8Lz5cclxuXHQpXHJcbn0pIl0sIm5hbWVzIjpbIk1haW5TdHlsZSIsIk5hdmJhciIsIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiTGlzdFRhc2tzIiwiTW9kYWwiLCJEZWxldGVJY29uIiwiU2F2ZUljb24iLCJvYnNlcnZlciIsIkNvbnRleHQiLCJheGlvcyIsIk1haW4iLCJ0YXNrIiwibW9kYWwiLCJzZXRNb2RhbCIsInRhc2tOZXciLCJzZXRUYXNrTmV3IiwidGl0bGUiLCJkYXRlIiwidGFza0RlbGV0ZSIsInNldFRhc2tEZWxldGUiLCJhZGRUYXNrIiwiaGFuZGxlT3Blbk1vZGFsRGVsZXRlIiwiaWQiLCJjcmVhdGVUYXNrIiwic3RyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVzZXJJRCIsIkpTT04iLCJwYXJzZSIsInBvc3QiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJvbkNsaWNrIiwibmFtZUJ0biIsImFjdGl2ZSIsIkljb25CdG4iLCJvbkNsaWNrQ2xvc2UiLCJvbkNsaWNrU2F2ZSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJyZW1vdmVUYXNrIiwiaDMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Main.tsx\n"));

/***/ })

});