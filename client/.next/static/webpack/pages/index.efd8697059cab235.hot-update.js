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

/***/ "./src/components/layout/Layout.tsx":
/*!******************************************!*\
  !*** ./src/components/layout/Layout.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Layout: function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Typography */ \"./src/components/Typography.tsx\");\n/* harmony import */ var _styles_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/style */ \"./src/styles/style.ts\");\n/* harmony import */ var _header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/Header */ \"./src/components/header/Header.tsx\");\n/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Main */ \"./src/components/Main.tsx\");\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/context */ \"./src/utils/context.ts\");\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth */ \"./src/components/auth.tsx\");\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mobx-react-lite */ \"./node_modules/mobx-react-lite/es/index.js\");\n/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../loader */ \"./src/components/loader.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Layout = _s((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_8__.observer)(_c = _s(()=>{\n    _s();\n    const { user } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_utils_context__WEBPACK_IMPORTED_MODULE_6__.Context);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(localStorage.getItem(\"token\"));\n    // axios\n    // \t.get('http://localhost:5000/user/auth')\n    // \t.then(data => console.log(data))\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loader__WEBPACK_IMPORTED_MODULE_9__.Loader, {}, void 0, false, {\n            fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/layout/Layout.tsx\",\n            lineNumber: 27,\n            columnNumber: 14\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_3__.LayoutStyle, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Typography__WEBPACK_IMPORTED_MODULE_2__.Typography, {}, void 0, false, {\n                    fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/layout/Layout.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 5\n                }, undefined),\n                user.isAuth ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header_Header__WEBPACK_IMPORTED_MODULE_4__.Header, {}, void 0, false, {\n                            fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/layout/Layout.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 8\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Main__WEBPACK_IMPORTED_MODULE_5__.Main, {}, void 0, false, {\n                            fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/layout/Layout.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 8\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/layout/Layout.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 7\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_auth__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/layout/Layout.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/layout/Layout.tsx\",\n            lineNumber: 28,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false);\n}, \"puJh9YubFb4QEk8uZgc7OA2AnGQ=\")), \"puJh9YubFb4QEk8uZgc7OA2AnGQ=\");\n_c1 = Layout;\nvar _c, _c1;\n$RefreshReg$(_c, \"Layout$observer\");\n$RefreshReg$(_c1, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDeUU7QUFDL0I7QUFDRTtBQUNIO0FBQ1g7QUFDVztBQUNmO0FBQ2dCO0FBQ1I7QUFJM0IsTUFBTVksU0FBbUJGLEdBQUFBLHlEQUFRQSxTQUFDOztJQUN4QyxNQUFNLEVBQUVHLElBQUksRUFBRSxHQUFHWixpREFBVUEsQ0FBQ08sbURBQU9BO0lBQ25DLE1BQU0sQ0FBQ00sU0FBU0MsV0FBVyxHQUFHWiwrQ0FBUUEsQ0FBQztJQUV2Q0QsZ0RBQVNBLENBQUM7UUFDVGMsUUFBUUMsR0FBRyxDQUFDQyxhQUFhQyxPQUFPLENBQUM7SUFDakMsUUFBUTtJQUNSLDJDQUEyQztJQUMzQyxvQ0FBb0M7SUFDckMsR0FBRyxFQUFFO0lBR0wscUJBQVE7a0JBQ05MLHdCQUFVLDhEQUFDSCwyQ0FBTUE7Ozs7c0NBQ2pCLDhEQUFDTixzREFBV0E7OzhCQUNYLDhEQUFDRCxtREFBVUE7Ozs7O2dCQUVWUyxLQUFLTyxNQUFNLGlCQUNWLDhEQUFDQzs7c0NBQ0EsOERBQUNmLGtEQUFNQTs7Ozs7c0NBQ1AsOERBQUNDLHVDQUFJQTs7Ozs7Ozs7Ozs4Q0FFTiw4REFBQ0UsNkNBQUlBOzs7Ozs7Ozs7Ozs7QUFPWCxxRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LnRzeD9lNjQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dFByb3BzIH0gZnJvbSAnQC9pbnRlcmZhY2UvaW50ZXJmYWNlJ1xuaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gJy4uL1R5cG9ncmFwaHknXG5pbXBvcnQgeyBMYXlvdXRTdHlsZSB9IGZyb20gJ0Avc3R5bGVzL3N0eWxlJ1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vaGVhZGVyL0hlYWRlcidcbmltcG9ydCB7IE1haW4gfSBmcm9tICcuLi9NYWluJ1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJ0AvdXRpbHMvY29udGV4dCdcbmltcG9ydCBBdXRoIGZyb20gJy4uL2F1dGgnXG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QtbGl0ZSdcbmltcG9ydCB7IExvYWRlciB9IGZyb20gJy4uL2xvYWRlcidcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuXG5leHBvcnQgY29uc3QgTGF5b3V0OiBSZWFjdC5GQyA9IG9ic2VydmVyKCgpID0+IHtcblx0Y29uc3QgeyB1c2VyIH0gPSB1c2VDb250ZXh0KENvbnRleHQpXG5cdGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykpXG5cdFx0Ly8gYXhpb3Ncblx0XHQvLyBcdC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC91c2VyL2F1dGgnKVxuXHRcdC8vIFx0LnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSlcblx0fSwgW10pXG5cblxuXHRyZXR1cm4gKDw+XG5cdFx0e2xvYWRpbmcgPyA8TG9hZGVyIC8+IDpcblx0XHRcdDxMYXlvdXRTdHlsZT5cblx0XHRcdFx0PFR5cG9ncmFwaHkgLz5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdHVzZXIuaXNBdXRoID9cblx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdDxIZWFkZXIgLz5cblx0XHRcdFx0XHRcdFx0PE1haW4gLz5cblx0XHRcdFx0XHRcdDwvZGl2PiA6XG5cdFx0XHRcdFx0XHQ8QXV0aCAvPlxuXHRcdFx0XHR9XG5cdFx0XHQ8L0xheW91dFN0eWxlPn1cblx0PC8+XG5cblxuXHQpXG59KVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVHlwb2dyYXBoeSIsIkxheW91dFN0eWxlIiwiSGVhZGVyIiwiTWFpbiIsIkNvbnRleHQiLCJBdXRoIiwib2JzZXJ2ZXIiLCJMb2FkZXIiLCJMYXlvdXQiLCJ1c2VyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJjb25zb2xlIiwibG9nIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImlzQXV0aCIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/layout/Layout.tsx\n"));

/***/ })

});