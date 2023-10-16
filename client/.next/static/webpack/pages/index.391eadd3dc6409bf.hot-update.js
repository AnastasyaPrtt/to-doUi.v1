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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: function() { return /* binding */ Task; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/style */ \"./src/styles/style.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public */ \"./public/index.jsx\");\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react-lite */ \"./node_modules/mobx-react-lite/es/index.js\");\n/* harmony import */ var _useOnClickOutside__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/useOnClickOutside */ \"./src/useOnClickOutside.ts\");\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/context */ \"./src/utils/context.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Task = _s((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__.observer)(_c = _s((param)=>{\n    let { item, onClick, onChange, handleCompleteStatusUpdate } = param;\n    _s();\n    const { task } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_utils_context__WEBPACK_IMPORTED_MODULE_6__.Context);\n    const [isDropdown, setDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [isEdited, setIsEdited] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(item.title);\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    (0,_useOnClickOutside__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(ref, ()=>setDropdown(false));\n    const handleKeyDown = (event)=>{\n        if (event.key === \"Enter\") {\n            setIsEdited(!isEdited);\n            updateTaskTitle();\n        }\n    };\n    const updateTaskTitle = ()=>{\n        // onChange()\n        // handleCompleteStatusUpdate(item)\n        axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].put(\"http://localhost:5000/api/tasks/\" + \"\".concat(item.id), {\n            title\n        }).catch((data)=>console.log(data));\n        task.setIsUpdate(true);\n    };\n    const updateTaskChecked = ()=>{\n        // onChange()\n        handleCompleteStatusUpdate(item);\n        const isChecked = !item.isChecked;\n        axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].put(\"http://localhost:5000/api/tasks/\" + \"\".concat(item.id), {\n            isChecked\n        }).catch((data)=>console.log(data));\n        task.setIsUpdate(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_1__.TaskStyle, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: item.isChecked ? \"icon active\" : \"icon\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                checked: item.isChecked,\n                                onChange: updateTaskChecked\n                            }, void 0, false, {\n                                fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Task.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_3__.CheckedIcon, {}, void 0, false, {\n                                fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Task.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Task.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 5\n                    }, undefined),\n                    isEdited ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: title,\n                        onChange: (e)=>setTitle(e.target.value),\n                        onKeyDown: handleKeyDown\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Task.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 7\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: item.title\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Task.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Task.tsx\",\n                lineNumber: 55,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"task-info\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: item.date\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Task.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>setDropdown(true),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_3__.InfoIcon, {}, void 0, false, {\n                                fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Task.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_1__.DropdownBtnStyled, {\n                                ref: ref,\n                                className: isDropdown ? \"active\" : \"\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>setIsEdited(true),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_3__.EditIcon, {}, void 0, false, {\n                                            fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Task.tsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 8\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Task.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 7\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>onClick(item.id),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_3__.DeleteIcon, {}, void 0, false, {\n                                            fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Task.tsx\",\n                                            lineNumber: 80,\n                                            columnNumber: 8\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Task.tsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 7\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Task.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Task.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Task.tsx\",\n                lineNumber: 71,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/Task.tsx\",\n        lineNumber: 54,\n        columnNumber: 3\n    }, undefined);\n}, \"IbFI8zm65wIXUDj/vlCFVBf6wuc=\", false, function() {\n    return [\n        _useOnClickOutside__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n})), \"IbFI8zm65wIXUDj/vlCFVBf6wuc=\", false, function() {\n    return [\n        _useOnClickOutside__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c1 = Task;\nvar _c, _c1;\n$RefreshReg$(_c, \"Task$observer\");\n$RefreshReg$(_c1, \"Task\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VGFzay50c3g/MTliZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IERyb3Bkb3duQnRuU3R5bGVkLCBUYXNrU3R5bGUgfSBmcm9tICdAL3N0eWxlcy9zdHlsZSdcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDaGVja2VkSWNvbiwgRGVsZXRlSWNvbiwgRWRpdEljb24sIEluZm9JY29uIH0gZnJvbSAnLi4vLi4vcHVibGljJ1xuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0LWxpdGUnXG5pbXBvcnQgdXNlT25DbGlja091dHNpZGUgZnJvbSAnQC91c2VPbkNsaWNrT3V0c2lkZSdcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICdAL3V0aWxzL2NvbnRleHQnXG5pbXBvcnQgeyBUYXNrUHJvcHMgfSBmcm9tICdAL2ludGVyZmFjZS9pbnRlcmZhY2UnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cblxuaW50ZXJmYWNlIFRhc2tJbnRlcmZhY2Uge1xuXHRpdGVtOiBUYXNrUHJvcHM7XG5cdG9uQ2xpY2s6IChpZDogbnVtYmVyKSA9PiB2b2lkXG5cdG9uQ2hhbmdlPzogKCkgPT4gdm9pZDtcblx0aGFuZGxlQ29tcGxldGVTdGF0dXNVcGRhdGU6IChpdGVtOiBUYXNrUHJvcHMpID0+IHZvaWRcbn1cblxuZXhwb3J0IGNvbnN0IFRhc2s6IFJlYWN0LkZDPFRhc2tJbnRlcmZhY2U+ID0gb2JzZXJ2ZXIoKHsgaXRlbSwgb25DbGljaywgb25DaGFuZ2UsIGhhbmRsZUNvbXBsZXRlU3RhdHVzVXBkYXRlIH0pID0+IHtcblx0Y29uc3QgeyB0YXNrIH0gPSB1c2VDb250ZXh0KENvbnRleHQpXG5cdGNvbnN0IFtpc0Ryb3Bkb3duLCBzZXREcm9wZG93bl0gPSB1c2VTdGF0ZShmYWxzZSlcblx0Y29uc3QgW2lzRWRpdGVkLCBzZXRJc0VkaXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoaXRlbS50aXRsZSlcblxuXHRjb25zdCByZWYgPSB1c2VSZWYoKTtcblx0dXNlT25DbGlja091dHNpZGUocmVmLCAoKSA9PiBzZXREcm9wZG93bihmYWxzZSkpO1xuXG5cdGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQ6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcblx0XHRpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG5cdFx0XHRzZXRJc0VkaXRlZCghaXNFZGl0ZWQpXG5cdFx0XHR1cGRhdGVUYXNrVGl0bGUoKVxuXHRcdH1cblx0fVxuXG5cdGNvbnN0IHVwZGF0ZVRhc2tUaXRsZSA9ICgpID0+IHtcblx0XHQvLyBvbkNoYW5nZSgpXG5cdFx0Ly8gaGFuZGxlQ29tcGxldGVTdGF0dXNVcGRhdGUoaXRlbSlcblx0XHRheGlvc1xuXHRcdFx0LnB1dCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS90YXNrcy8nICsgYCR7aXRlbS5pZH1gLCB7IHRpdGxlIH0pXG5cdFx0XHQuY2F0Y2goZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSlcblx0XHR0YXNrLnNldElzVXBkYXRlKHRydWUpXG5cdH1cblx0Y29uc3QgdXBkYXRlVGFza0NoZWNrZWQgPSAoKSA9PiB7XG5cdFx0Ly8gb25DaGFuZ2UoKVxuXHRcdGhhbmRsZUNvbXBsZXRlU3RhdHVzVXBkYXRlKGl0ZW0pXG5cdFx0Y29uc3QgaXNDaGVja2VkID0gIWl0ZW0uaXNDaGVja2VkXG5cdFx0YXhpb3Ncblx0XHRcdC5wdXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdGFza3MvJyArIGAke2l0ZW0uaWR9YCwgeyBpc0NoZWNrZWQgfSlcblx0XHRcdC5jYXRjaChkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKVxuXHRcdHRhc2suc2V0SXNVcGRhdGUodHJ1ZSlcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PFRhc2tTdHlsZT5cblx0XHRcdDxsYWJlbD5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtpdGVtLmlzQ2hlY2tlZCA/ICdpY29uIGFjdGl2ZScgOiAnaWNvbid9PlxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtpdGVtLmlzQ2hlY2tlZH0gb25DaGFuZ2U9e3VwZGF0ZVRhc2tDaGVja2VkfSAvPlxuXHRcdFx0XHRcdDxDaGVja2VkSWNvbiAvPlxuXHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpc0VkaXRlZCA/XG5cdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17dGl0bGV9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfVxuXHRcdFx0XHRcdFx0XHRvbktleURvd249e2hhbmRsZUtleURvd259IC8+IDpcblx0XHRcdFx0XHRcdDxoMz57aXRlbS50aXRsZX08L2gzPlxuXHRcdFx0XHR9XG5cdFx0XHQ8L2xhYmVsPlxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGFzay1pbmZvJz5cblx0XHRcdFx0PHA+e2l0ZW0uZGF0ZX08L3A+XG5cdFx0XHRcdDxkaXYgb25DbGljaz17KCkgPT4gc2V0RHJvcGRvd24odHJ1ZSl9PlxuXHRcdFx0XHRcdDxJbmZvSWNvbiAvPlxuXHRcdFx0XHRcdDxEcm9wZG93bkJ0blN0eWxlZCByZWY9e3JlZn0gY2xhc3NOYW1lPXtpc0Ryb3Bkb3duID8gJ2FjdGl2ZScgOiAnJ30+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldElzRWRpdGVkKHRydWUpfT5cblx0XHRcdFx0XHRcdFx0PEVkaXRJY29uIC8+XG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17KCkgPT4gb25DbGljayhpdGVtLmlkKX0+XG5cdFx0XHRcdFx0XHRcdDxEZWxldGVJY29uIC8+XG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8L0Ryb3Bkb3duQnRuU3R5bGVkPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvVGFza1N0eWxlPlxuXHQpXG59KVxuIl0sIm5hbWVzIjpbIkRyb3Bkb3duQnRuU3R5bGVkIiwiVGFza1N0eWxlIiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJDaGVja2VkSWNvbiIsIkRlbGV0ZUljb24iLCJFZGl0SWNvbiIsIkluZm9JY29uIiwib2JzZXJ2ZXIiLCJ1c2VPbkNsaWNrT3V0c2lkZSIsIkNvbnRleHQiLCJheGlvcyIsIlRhc2siLCJpdGVtIiwib25DbGljayIsIm9uQ2hhbmdlIiwiaGFuZGxlQ29tcGxldGVTdGF0dXNVcGRhdGUiLCJ0YXNrIiwiaXNEcm9wZG93biIsInNldERyb3Bkb3duIiwiaXNFZGl0ZWQiLCJzZXRJc0VkaXRlZCIsInRpdGxlIiwic2V0VGl0bGUiLCJyZWYiLCJoYW5kbGVLZXlEb3duIiwiZXZlbnQiLCJrZXkiLCJ1cGRhdGVUYXNrVGl0bGUiLCJwdXQiLCJpZCIsImNhdGNoIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzZXRJc1VwZGF0ZSIsInVwZGF0ZVRhc2tDaGVja2VkIiwiaXNDaGVja2VkIiwibGFiZWwiLCJzcGFuIiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwiY2hlY2tlZCIsInZhbHVlIiwiZSIsInRhcmdldCIsIm9uS2V5RG93biIsImgzIiwiZGl2IiwicCIsImRhdGUiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Task.tsx\n"));

/***/ })

});