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

/***/ "./src/components/header/Header.tsx":
/*!******************************************!*\
  !*** ./src/components/header/Header.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Header: function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/style */ \"./src/styles/style.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public */ \"./public/index.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Header = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const click = ()=>{\n        router.push(\"/registration\", undefined, {\n            shallow: true\n        });\n        localStorage.clear();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const token = localStorage.getItem(\"token\");\n        const user = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(token);\n        setUser(user);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_1__.HeaderContainer, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"To-Do\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\header\\\\Header.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                    fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\header\\\\Header.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: \"/userIcon.svg\",\n                            alt: \"userIcon\",\n                            width: 16,\n                            height: 16,\n                            className: \"icon\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\header\\\\Header.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 6\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_3__.Exit, {\n                            className: \"icon-exit\",\n                            onClick: click\n                        }, void 0, false, {\n                            fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\header\\\\Header.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 6\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\header\\\\Header.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\header\\\\Header.tsx\",\n            lineNumber: 25,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false);\n};\n_s(Header, \"/nQl5POflVUomCVqjMaLENXQF+8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUNsQjtBQUNRO0FBQ2lCO0FBQ25CO0FBQ0c7QUFFaEMsTUFBTU8sU0FBbUI7O0lBRS9CLE1BQU1DLFNBQVNGLHNEQUFTQTtJQUN4QixNQUFNLENBQUNHLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBLENBQUM7SUFDakMsTUFBTU8sUUFBUTtRQUNiSCxPQUFPSSxJQUFJLENBQUMsaUJBQWlCQyxXQUFXO1lBQUVDLFNBQVM7UUFBSztRQUN4REMsYUFBYUMsS0FBSztJQUNuQjtJQUNBYixnREFBU0EsQ0FBQztRQUNULE1BQU1jLFFBQVFGLGFBQWFHLE9BQU8sQ0FBQztRQUNuQyxNQUFNVCxPQUFPSixzREFBVUEsQ0FBQ1k7UUFDeEJQLFFBQVFEO0lBQ1QsR0FBRyxFQUFFO0lBR0wscUJBQ0M7a0JBQ0MsNEVBQUNULDBEQUFlQTs7OEJBQ2YsOERBQUNtQjs4QkFBRzs7Ozs7OzhCQUNKLDhEQUFDQzs7Ozs7OEJBQ0QsOERBQUNDOztzQ0FDQSw4REFBQ3BCLG1EQUFLQTs0QkFDTHFCLEtBQUk7NEJBQ0pDLEtBQUk7NEJBQ0pDLE9BQU87NEJBQ1BDLFFBQVE7NEJBQ1JDLFdBQVU7Ozs7OztzQ0FFWCw4REFBQ3hCLHlDQUFJQTs0QkFBQ3dCLFdBQVU7NEJBQVlDLFNBQVNoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU0xQyxFQUFDO0dBbENZSjs7UUFFR0Qsa0RBQVNBOzs7S0FGWkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlci50c3g/ZDgzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZWFkZXJDb250YWluZXIgfSBmcm9tICdAL3N0eWxlcy9zdHlsZSdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCB7IEV4aXQgfSBmcm9tICcuLi8uLi8uLi9wdWJsaWMnXHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGp3dF9kZWNvZGUgZnJvbSAnand0LWRlY29kZSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlcjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcblxyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblx0Y29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoJycpXHJcblx0Y29uc3QgY2xpY2sgPSAoKSA9PiB7XHJcblx0XHRyb3V0ZXIucHVzaCgnL3JlZ2lzdHJhdGlvbicsIHVuZGVmaW5lZCwgeyBzaGFsbG93OiB0cnVlIH0pXHJcblx0XHRsb2NhbFN0b3JhZ2UuY2xlYXIoKVxyXG5cdH1cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxyXG5cdFx0Y29uc3QgdXNlciA9IGp3dF9kZWNvZGUodG9rZW4pXHJcblx0XHRzZXRVc2VyKHVzZXIpXHJcblx0fSwgW10pXHJcblxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PEhlYWRlckNvbnRhaW5lcj5cclxuXHRcdFx0XHQ8aDI+VG8tRG88L2gyPlxyXG5cdFx0XHRcdDxwPjwvcD5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PEltYWdlXHJcblx0XHRcdFx0XHRcdHNyYz0nL3VzZXJJY29uLnN2ZydcclxuXHRcdFx0XHRcdFx0YWx0PSd1c2VySWNvbidcclxuXHRcdFx0XHRcdFx0d2lkdGg9ezE2fVxyXG5cdFx0XHRcdFx0XHRoZWlnaHQ9ezE2fVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ljb24nXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PEV4aXQgY2xhc3NOYW1lPSdpY29uLWV4aXQnIG9uQ2xpY2s9e2NsaWNrfSAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PC9IZWFkZXJDb250YWluZXI+XHJcblx0XHQ8Lz5cclxuXHQpXHJcbn0iXSwibmFtZXMiOlsiSGVhZGVyQ29udGFpbmVyIiwiSW1hZ2UiLCJFeGl0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJqd3RfZGVjb2RlIiwidXNlUm91dGVyIiwiSGVhZGVyIiwicm91dGVyIiwidXNlciIsInNldFVzZXIiLCJjbGljayIsInB1c2giLCJ1bmRlZmluZWQiLCJzaGFsbG93IiwibG9jYWxTdG9yYWdlIiwiY2xlYXIiLCJ0b2tlbiIsImdldEl0ZW0iLCJoMiIsInAiLCJkaXYiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/header/Header.tsx\n"));

/***/ })

});