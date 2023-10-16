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

/***/ "./src/components/Task.tsx":
/*!*********************************!*\
  !*** ./src/components/Task.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: function() { return /* binding */ Task; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/style */ \"./src/styles/style.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public */ \"./public/index.jsx\");\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react-lite */ \"./node_modules/mobx-react-lite/es/index.js\");\n/* harmony import */ var _useOnClickOutside__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/useOnClickOutside */ \"./src/useOnClickOutside.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Task = _s((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__.observer)(_c = _s((param)=>{\n    let { task, handleOpenModalDelete, handleCompleteStatusUpdate, handleClickEditTask } = param;\n    _s();\n    const [isDropdown, setDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [isEdited, setIsEdited] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [isComplete, setIsComplete] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(task.isChecked);\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(task.title);\n    // const handleCheckbox = () => {\n    // \ttask.isChecked = !task.isChecked\n    // \t// handleCompleteStatusUpdate(task)\n    // }\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    (0,_useOnClickOutside__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(ref, ()=>setDropdown(false));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_1__.TaskStyle, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: task.isChecked ? \"icon active\" : \"icon\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                checked: task.isChecked,\n                                onChange: ()=>handleCompleteStatusUpdate(task)\n                            }, void 0, false, {\n                                fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Task.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_3__.CheckedIcon, {}, void 0, false, {\n                                fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Task.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Task.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 5\n                    }, undefined),\n                    isEdited ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: title,\n                        onChange: (e)=>console.log(\"!\")\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Task.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 7\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        onClick: ()=>setIsEdited(!isEdited),\n                        children: task.title\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Task.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Task.tsx\",\n                lineNumber: 44,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"task-info\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: task.date\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Task.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>setDropdown(true),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_3__.InfoIcon, {}, void 0, false, {\n                                fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Task.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_1__.DropdownBtnStyled, {\n                                ref: ref,\n                                className: isDropdown ? \"active\" : \"\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>setIsEdited(!isEdited),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_3__.EditIcon, {}, void 0, false, {\n                                            fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Task.tsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 8\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Task.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 7\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>console.log(\"!\"),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_3__.DeleteIcon, {}, void 0, false, {\n                                            fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Task.tsx\",\n                                            lineNumber: 69,\n                                            columnNumber: 8\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Task.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 7\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Task.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Task.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Task.tsx\",\n                lineNumber: 60,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Task.tsx\",\n        lineNumber: 43,\n        columnNumber: 3\n    }, undefined);\n}, \"/IMj1Cj9A1wIP3hXKp0YUHgIwlE=\", false, function() {\n    return [\n        _useOnClickOutside__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n})), \"/IMj1Cj9A1wIP3hXKp0YUHgIwlE=\", false, function() {\n    return [\n        _useOnClickOutside__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c1 = Task;\nvar _c, _c1;\n$RefreshReg$(_c, \"Task$observer\");\n$RefreshReg$(_c1, \"Task\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UYXNrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUM2RDtBQUNGO0FBQ2U7QUFDaEM7QUFDUztBQWE1QyxNQUFNVyxPQUFnQ0YsR0FBQUEseURBQVFBLFNBQUM7UUFBQyxFQUN0REcsSUFBSSxFQUNKQyxxQkFBcUIsRUFDckJDLDBCQUEwQixFQUMxQkMsbUJBQW1CLEVBQ25COztJQUVBLE1BQU0sQ0FBQ0MsWUFBWUMsWUFBWSxHQUFHYiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNjLFVBQVVDLFlBQVksR0FBR2YsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDZ0IsWUFBWUMsY0FBYyxHQUFHakIsK0NBQVFBLENBQUNRLEtBQUtVLFNBQVM7SUFDM0QsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdwQiwrQ0FBUUEsQ0FBQ1EsS0FBS1csS0FBSztJQUU3QyxpQ0FBaUM7SUFDakMsb0NBQW9DO0lBQ3BDLHVDQUF1QztJQUN2QyxJQUFJO0lBS0osTUFBTUUsTUFBTXRCLDZDQUFNQTtJQUNsQk8sOERBQWlCQSxDQUFDZSxLQUFLLElBQU1SLFlBQVk7SUFFekMscUJBQ0MsOERBQUNoQixvREFBU0E7OzBCQUNULDhEQUFDeUI7O2tDQUNBLDhEQUFDQzt3QkFBS0MsV0FBV2hCLEtBQUtVLFNBQVMsR0FBRyxnQkFBZ0I7OzBDQUNqRCw4REFBQ087Z0NBQU1DLE1BQUs7Z0NBQVdDLFNBQVNuQixLQUFLVSxTQUFTO2dDQUFFVSxVQUFVLElBQU1sQiwyQkFBMkJGOzs7Ozs7MENBQzNGLDhEQUFDUCxnREFBV0E7Ozs7Ozs7Ozs7O29CQUdaYSx5QkFDQyw4REFBQ1c7d0JBQ0FDLE1BQUs7d0JBQ0xHLE9BQU9WO3dCQUNQUyxVQUFVLENBQUNFLElBQU1DLFFBQVFDLEdBQUcsQ0FBQzs7Ozs7a0RBRTlCLDhEQUFDQzt3QkFBR0MsU0FBUyxJQUFNbkIsWUFBWSxDQUFDRDtrQ0FBWU4sS0FBS1csS0FBSzs7Ozs7Ozs7Ozs7OzBCQUl6RCw4REFBQ2dCO2dCQUFJWCxXQUFVOztrQ0FDZCw4REFBQ1k7a0NBQUc1QixLQUFLNkIsSUFBSTs7Ozs7O2tDQUNiLDhEQUFDRjt3QkFBSUQsU0FBUyxJQUFNckIsWUFBWTs7MENBQy9CLDhEQUFDVCw2Q0FBUUE7Ozs7OzBDQUNULDhEQUFDUiw0REFBaUJBO2dDQUFDeUIsS0FBS0E7Z0NBQUtHLFdBQVdaLGFBQWEsV0FBVzs7a0RBQy9ELDhEQUFDMEI7d0NBQU9KLFNBQVMsSUFBTW5CLFlBQVksQ0FBQ0Q7a0RBQ25DLDRFQUFDWCw2Q0FBUUE7Ozs7Ozs7Ozs7a0RBRVYsOERBQUNtQzt3Q0FBT0osU0FBUyxJQUFNSCxRQUFRQyxHQUFHLENBQUM7a0RBQ2xDLDRFQUFDOUIsK0NBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2xCOztRQXBDQ0ksMERBQWlCQTs7OztRQUFqQkEsMERBQWlCQTs7R0FvQ2hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Rhc2sudHN4PzE5YmUiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBEcm9wZG93bkJ0blN0eWxlZCwgVGFza1N0eWxlIH0gZnJvbSAnQC9zdHlsZXMvc3R5bGUnXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2hlY2tlZEljb24sIERlbGV0ZUljb24sIEVkaXRJY29uLCBJbmZvSWNvbiB9IGZyb20gJy4uLy4uL3B1YmxpYydcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdC1saXRlJ1xuaW1wb3J0IHVzZU9uQ2xpY2tPdXRzaWRlIGZyb20gJ0AvdXNlT25DbGlja091dHNpZGUnXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnQC91dGlscy9jb250ZXh0J1xuaW1wb3J0IHsgVGFza1Byb3BzIH0gZnJvbSAnQC9pbnRlcmZhY2UvaW50ZXJmYWNlJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5cbmludGVyZmFjZSBUYXNrSW50ZXJmYWNlIHtcblx0dGFzazogVGFza1Byb3BzLFxuXHRoYW5kbGVPcGVuTW9kYWxEZWxldGU/OiAoaWQ6IG51bWJlcikgPT4gdm9pZCxcblx0aGFuZGxlQ29tcGxldGVTdGF0dXNVcGRhdGU6ICh0YXNrOiBUYXNrUHJvcHMpID0+IHZvaWRcblx0aGFuZGxlQ2xpY2tFZGl0VGFzaz86ICh0YXNrOiBUYXNrUHJvcHMsIHRpdGxlOiBzdHJpbmcpID0+IHZvaWRcbn1cblxuZXhwb3J0IGNvbnN0IFRhc2s6IFJlYWN0LkZDPFRhc2tJbnRlcmZhY2U+ID0gb2JzZXJ2ZXIoKHtcblx0dGFzayxcblx0aGFuZGxlT3Blbk1vZGFsRGVsZXRlLFxuXHRoYW5kbGVDb21wbGV0ZVN0YXR1c1VwZGF0ZSxcblx0aGFuZGxlQ2xpY2tFZGl0VGFza1xufSkgPT4ge1xuXG5cdGNvbnN0IFtpc0Ryb3Bkb3duLCBzZXREcm9wZG93bl0gPSB1c2VTdGF0ZShmYWxzZSlcblx0Y29uc3QgW2lzRWRpdGVkLCBzZXRJc0VkaXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFtpc0NvbXBsZXRlLCBzZXRJc0NvbXBsZXRlXSA9IHVzZVN0YXRlKHRhc2suaXNDaGVja2VkKVxuXHRjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKHRhc2sudGl0bGUpXG5cblx0Ly8gY29uc3QgaGFuZGxlQ2hlY2tib3ggPSAoKSA9PiB7XG5cdC8vIFx0dGFzay5pc0NoZWNrZWQgPSAhdGFzay5pc0NoZWNrZWRcblx0Ly8gXHQvLyBoYW5kbGVDb21wbGV0ZVN0YXR1c1VwZGF0ZSh0YXNrKVxuXHQvLyB9XG5cblxuXG5cblx0Y29uc3QgcmVmID0gdXNlUmVmKCk7XG5cdHVzZU9uQ2xpY2tPdXRzaWRlKHJlZiwgKCkgPT4gc2V0RHJvcGRvd24oZmFsc2UpKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxUYXNrU3R5bGU+XG5cdFx0XHQ8bGFiZWw+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17dGFzay5pc0NoZWNrZWQgPyAnaWNvbiBhY3RpdmUnIDogJ2ljb24nfT5cblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17dGFzay5pc0NoZWNrZWR9IG9uQ2hhbmdlPXsoKSA9PiBoYW5kbGVDb21wbGV0ZVN0YXR1c1VwZGF0ZSh0YXNrKX0gLz5cblx0XHRcdFx0XHQ8Q2hlY2tlZEljb24gLz5cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aXNFZGl0ZWQgP1xuXHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3RpdGxlfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IGNvbnNvbGUubG9nKCchJyl9XG5cdFx0XHRcdFx0XHQvPiA6XG5cdFx0XHRcdFx0XHQ8aDMgb25DbGljaz17KCkgPT4gc2V0SXNFZGl0ZWQoIWlzRWRpdGVkKX0+e3Rhc2sudGl0bGV9PC9oMz5cblx0XHRcdFx0fVxuXHRcdFx0PC9sYWJlbD5cblxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3Rhc2staW5mbyc+XG5cdFx0XHRcdDxwPnt0YXNrLmRhdGV9PC9wPlxuXHRcdFx0XHQ8ZGl2IG9uQ2xpY2s9eygpID0+IHNldERyb3Bkb3duKHRydWUpfT5cblx0XHRcdFx0XHQ8SW5mb0ljb24gLz5cblx0XHRcdFx0XHQ8RHJvcGRvd25CdG5TdHlsZWQgcmVmPXtyZWZ9IGNsYXNzTmFtZT17aXNEcm9wZG93biA/ICdhY3RpdmUnIDogJyd9PlxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRJc0VkaXRlZCghaXNFZGl0ZWQpfT5cblx0XHRcdFx0XHRcdFx0PEVkaXRJY29uIC8+XG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coJyEnKX0+XG5cdFx0XHRcdFx0XHRcdDxEZWxldGVJY29uIC8+XG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8L0Ryb3Bkb3duQnRuU3R5bGVkPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvVGFza1N0eWxlPlxuXHQpXG59KVxuIl0sIm5hbWVzIjpbIkRyb3Bkb3duQnRuU3R5bGVkIiwiVGFza1N0eWxlIiwiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkNoZWNrZWRJY29uIiwiRGVsZXRlSWNvbiIsIkVkaXRJY29uIiwiSW5mb0ljb24iLCJvYnNlcnZlciIsInVzZU9uQ2xpY2tPdXRzaWRlIiwiVGFzayIsInRhc2siLCJoYW5kbGVPcGVuTW9kYWxEZWxldGUiLCJoYW5kbGVDb21wbGV0ZVN0YXR1c1VwZGF0ZSIsImhhbmRsZUNsaWNrRWRpdFRhc2siLCJpc0Ryb3Bkb3duIiwic2V0RHJvcGRvd24iLCJpc0VkaXRlZCIsInNldElzRWRpdGVkIiwiaXNDb21wbGV0ZSIsInNldElzQ29tcGxldGUiLCJpc0NoZWNrZWQiLCJ0aXRsZSIsInNldFRpdGxlIiwicmVmIiwibGFiZWwiLCJzcGFuIiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwidmFsdWUiLCJlIiwiY29uc29sZSIsImxvZyIsImgzIiwib25DbGljayIsImRpdiIsInAiLCJkYXRlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Task.tsx\n"));

/***/ })

});