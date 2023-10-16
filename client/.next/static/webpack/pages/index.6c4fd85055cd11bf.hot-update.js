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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: function() { return /* binding */ Task; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/style */ \"./src/styles/style.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public */ \"./public/index.jsx\");\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react-lite */ \"./node_modules/mobx-react-lite/es/index.js\");\n/* harmony import */ var _useOnClickOutside__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/useOnClickOutside */ \"./src/useOnClickOutside.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Task = _s((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__.observer)(_c = _s((param)=>{\n    let { task, handleOpenModalDelete, handleCompleteStatusUpdate, handleClickEditTask } = param;\n    _s();\n    const [isDropdown, setDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [isEdited, setIsEdited] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [isComplete, setIsComplete] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(task.isChecked);\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(task.title);\n    const handleKeyDown = (e)=>{\n        if (e.key == \"Enter\") setIsEdited(true);\n    };\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    (0,_useOnClickOutside__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(ref, ()=>setDropdown(false));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_1__.TaskStyle, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: task.isChecked ? \"icon active\" : \"icon\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                checked: task.isChecked,\n                                onChange: ()=>handleCompleteStatusUpdate(task)\n                            }, void 0, false, {\n                                fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Task.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_3__.CheckedIcon, {}, void 0, false, {\n                                fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Task.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Task.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 5\n                    }, undefined),\n                    isEdited ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: title,\n                        onKeyDown: handleKeyDown,\n                        onChange: (e)=>console.log(\"!\")\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Task.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 7\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        onClick: ()=>setIsEdited(!isEdited),\n                        children: task.title\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Task.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Task.tsx\",\n                lineNumber: 44,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"task-info\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: task.date\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Task.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>setDropdown(true),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_3__.InfoIcon, {}, void 0, false, {\n                                fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Task.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_1__.DropdownBtnStyled, {\n                                ref: ref,\n                                className: isDropdown ? \"active\" : \"\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>setIsEdited(!isEdited),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_3__.EditIcon, {}, void 0, false, {\n                                            fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Task.tsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 8\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Task.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 7\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>console.log(\"!\"),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_3__.DeleteIcon, {}, void 0, false, {\n                                            fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Task.tsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 8\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Task.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 7\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Task.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Task.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Task.tsx\",\n                lineNumber: 61,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Task.tsx\",\n        lineNumber: 43,\n        columnNumber: 3\n    }, undefined);\n}, \"/IMj1Cj9A1wIP3hXKp0YUHgIwlE=\", false, function() {\n    return [\n        _useOnClickOutside__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n})), \"/IMj1Cj9A1wIP3hXKp0YUHgIwlE=\", false, function() {\n    return [\n        _useOnClickOutside__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c1 = Task;\nvar _c, _c1;\n$RefreshReg$(_c, \"Task$observer\");\n$RefreshReg$(_c1, \"Task\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UYXNrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUM2RDtBQUNGO0FBQ2U7QUFDaEM7QUFDUztBQWE1QyxNQUFNVyxPQUFnQ0YsR0FBQUEseURBQVFBLFNBQUM7UUFBQyxFQUN0REcsSUFBSSxFQUNKQyxxQkFBcUIsRUFDckJDLDBCQUEwQixFQUMxQkMsbUJBQW1CLEVBQ25COztJQUVBLE1BQU0sQ0FBQ0MsWUFBWUMsWUFBWSxHQUFHYiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNjLFVBQVVDLFlBQVksR0FBR2YsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDZ0IsWUFBWUMsY0FBYyxHQUFHakIsK0NBQVFBLENBQUNRLEtBQUtVLFNBQVM7SUFDM0QsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdwQiwrQ0FBUUEsQ0FBQ1EsS0FBS1csS0FBSztJQUc3QyxNQUFNRSxnQkFBZ0IsQ0FBQ0M7UUFDdEIsSUFBSUEsRUFBRUMsR0FBRyxJQUFJLFNBQVNSLFlBQVk7SUFFbkM7SUFJQSxNQUFNUyxNQUFNekIsNkNBQU1BO0lBQ2xCTyw4REFBaUJBLENBQUNrQixLQUFLLElBQU1YLFlBQVk7SUFFekMscUJBQ0MsOERBQUNoQixvREFBU0E7OzBCQUNULDhEQUFDNEI7O2tDQUNBLDhEQUFDQzt3QkFBS0MsV0FBV25CLEtBQUtVLFNBQVMsR0FBRyxnQkFBZ0I7OzBDQUNqRCw4REFBQ1U7Z0NBQU1DLE1BQUs7Z0NBQVdDLFNBQVN0QixLQUFLVSxTQUFTO2dDQUFFYSxVQUFVLElBQU1yQiwyQkFBMkJGOzs7Ozs7MENBQzNGLDhEQUFDUCxnREFBV0E7Ozs7Ozs7Ozs7O29CQUdaYSx5QkFDQyw4REFBQ2M7d0JBQ0FDLE1BQUs7d0JBQ0xHLE9BQU9iO3dCQUNQYyxXQUFXWjt3QkFDWFUsVUFBVSxDQUFDVCxJQUFNWSxRQUFRQyxHQUFHLENBQUM7Ozs7O2tEQUU5Qiw4REFBQ0M7d0JBQUdDLFNBQVMsSUFBTXRCLFlBQVksQ0FBQ0Q7a0NBQVlOLEtBQUtXLEtBQUs7Ozs7Ozs7Ozs7OzswQkFJekQsOERBQUNtQjtnQkFBSVgsV0FBVTs7a0NBQ2QsOERBQUNZO2tDQUFHL0IsS0FBS2dDLElBQUk7Ozs7OztrQ0FDYiw4REFBQ0Y7d0JBQUlELFNBQVMsSUFBTXhCLFlBQVk7OzBDQUMvQiw4REFBQ1QsNkNBQVFBOzs7OzswQ0FDVCw4REFBQ1IsNERBQWlCQTtnQ0FBQzRCLEtBQUtBO2dDQUFLRyxXQUFXZixhQUFhLFdBQVc7O2tEQUMvRCw4REFBQzZCO3dDQUFPSixTQUFTLElBQU10QixZQUFZLENBQUNEO2tEQUNuQyw0RUFBQ1gsNkNBQVFBOzs7Ozs7Ozs7O2tEQUVWLDhEQUFDc0M7d0NBQU9KLFNBQVMsSUFBTUgsUUFBUUMsR0FBRyxDQUFDO2tEQUNsQyw0RUFBQ2pDLCtDQUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9sQjs7UUFyQ0NJLDBEQUFpQkE7Ozs7UUFBakJBLDBEQUFpQkE7O0dBcUNoQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9UYXNrLnRzeD8xOWJlIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgRHJvcGRvd25CdG5TdHlsZWQsIFRhc2tTdHlsZSB9IGZyb20gJ0Avc3R5bGVzL3N0eWxlJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENoZWNrZWRJY29uLCBEZWxldGVJY29uLCBFZGl0SWNvbiwgSW5mb0ljb24gfSBmcm9tICcuLi8uLi9wdWJsaWMnXG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QtbGl0ZSdcbmltcG9ydCB1c2VPbkNsaWNrT3V0c2lkZSBmcm9tICdAL3VzZU9uQ2xpY2tPdXRzaWRlJ1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJ0AvdXRpbHMvY29udGV4dCdcbmltcG9ydCB7IFRhc2tQcm9wcyB9IGZyb20gJ0AvaW50ZXJmYWNlL2ludGVyZmFjZSdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuXG5pbnRlcmZhY2UgVGFza0ludGVyZmFjZSB7XG5cdHRhc2s6IFRhc2tQcm9wcyxcblx0aGFuZGxlT3Blbk1vZGFsRGVsZXRlPzogKGlkOiBudW1iZXIpID0+IHZvaWQsXG5cdGhhbmRsZUNvbXBsZXRlU3RhdHVzVXBkYXRlOiAodGFzazogVGFza1Byb3BzKSA9PiB2b2lkXG5cdGhhbmRsZUNsaWNrRWRpdFRhc2s6ICh0YXNrOiBUYXNrUHJvcHMsIHRpdGxlOiBzdHJpbmcpID0+IHZvaWRcbn1cblxuZXhwb3J0IGNvbnN0IFRhc2s6IFJlYWN0LkZDPFRhc2tJbnRlcmZhY2U+ID0gb2JzZXJ2ZXIoKHtcblx0dGFzayxcblx0aGFuZGxlT3Blbk1vZGFsRGVsZXRlLFxuXHRoYW5kbGVDb21wbGV0ZVN0YXR1c1VwZGF0ZSxcblx0aGFuZGxlQ2xpY2tFZGl0VGFza1xufSkgPT4ge1xuXG5cdGNvbnN0IFtpc0Ryb3Bkb3duLCBzZXREcm9wZG93bl0gPSB1c2VTdGF0ZShmYWxzZSlcblx0Y29uc3QgW2lzRWRpdGVkLCBzZXRJc0VkaXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFtpc0NvbXBsZXRlLCBzZXRJc0NvbXBsZXRlXSA9IHVzZVN0YXRlKHRhc2suaXNDaGVja2VkKVxuXHRjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKHRhc2sudGl0bGUpXG5cblxuXHRjb25zdCBoYW5kbGVLZXlEb3duID0gKGU6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcblx0XHRpZiAoZS5rZXkgPT0gJ0VudGVyJykgc2V0SXNFZGl0ZWQodHJ1ZSlcblxuXHR9XG5cblxuXG5cdGNvbnN0IHJlZiA9IHVzZVJlZigpO1xuXHR1c2VPbkNsaWNrT3V0c2lkZShyZWYsICgpID0+IHNldERyb3Bkb3duKGZhbHNlKSk7XG5cblx0cmV0dXJuIChcblx0XHQ8VGFza1N0eWxlPlxuXHRcdFx0PGxhYmVsPlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3Rhc2suaXNDaGVja2VkID8gJ2ljb24gYWN0aXZlJyA6ICdpY29uJ30+XG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e3Rhc2suaXNDaGVja2VkfSBvbkNoYW5nZT17KCkgPT4gaGFuZGxlQ29tcGxldGVTdGF0dXNVcGRhdGUodGFzayl9IC8+XG5cdFx0XHRcdFx0PENoZWNrZWRJY29uIC8+XG5cdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdGlzRWRpdGVkID9cblx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXt0aXRsZX1cblx0XHRcdFx0XHRcdFx0b25LZXlEb3duPXtoYW5kbGVLZXlEb3dufVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IGNvbnNvbGUubG9nKCchJyl9XG5cdFx0XHRcdFx0XHQvPiA6XG5cdFx0XHRcdFx0XHQ8aDMgb25DbGljaz17KCkgPT4gc2V0SXNFZGl0ZWQoIWlzRWRpdGVkKX0+e3Rhc2sudGl0bGV9PC9oMz5cblx0XHRcdFx0fVxuXHRcdFx0PC9sYWJlbD5cblxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3Rhc2staW5mbyc+XG5cdFx0XHRcdDxwPnt0YXNrLmRhdGV9PC9wPlxuXHRcdFx0XHQ8ZGl2IG9uQ2xpY2s9eygpID0+IHNldERyb3Bkb3duKHRydWUpfT5cblx0XHRcdFx0XHQ8SW5mb0ljb24gLz5cblx0XHRcdFx0XHQ8RHJvcGRvd25CdG5TdHlsZWQgcmVmPXtyZWZ9IGNsYXNzTmFtZT17aXNEcm9wZG93biA/ICdhY3RpdmUnIDogJyd9PlxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRJc0VkaXRlZCghaXNFZGl0ZWQpfT5cblx0XHRcdFx0XHRcdFx0PEVkaXRJY29uIC8+XG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coJyEnKX0+XG5cdFx0XHRcdFx0XHRcdDxEZWxldGVJY29uIC8+XG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8L0Ryb3Bkb3duQnRuU3R5bGVkPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvVGFza1N0eWxlPlxuXHQpXG59KVxuIl0sIm5hbWVzIjpbIkRyb3Bkb3duQnRuU3R5bGVkIiwiVGFza1N0eWxlIiwiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkNoZWNrZWRJY29uIiwiRGVsZXRlSWNvbiIsIkVkaXRJY29uIiwiSW5mb0ljb24iLCJvYnNlcnZlciIsInVzZU9uQ2xpY2tPdXRzaWRlIiwiVGFzayIsInRhc2siLCJoYW5kbGVPcGVuTW9kYWxEZWxldGUiLCJoYW5kbGVDb21wbGV0ZVN0YXR1c1VwZGF0ZSIsImhhbmRsZUNsaWNrRWRpdFRhc2siLCJpc0Ryb3Bkb3duIiwic2V0RHJvcGRvd24iLCJpc0VkaXRlZCIsInNldElzRWRpdGVkIiwiaXNDb21wbGV0ZSIsInNldElzQ29tcGxldGUiLCJpc0NoZWNrZWQiLCJ0aXRsZSIsInNldFRpdGxlIiwiaGFuZGxlS2V5RG93biIsImUiLCJrZXkiLCJyZWYiLCJsYWJlbCIsInNwYW4iLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJjaGVja2VkIiwib25DaGFuZ2UiLCJ2YWx1ZSIsIm9uS2V5RG93biIsImNvbnNvbGUiLCJsb2ciLCJoMyIsIm9uQ2xpY2siLCJkaXYiLCJwIiwiZGF0ZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Task.tsx\n"));

/***/ })

});