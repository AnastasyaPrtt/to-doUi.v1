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

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Main */ \"./src/components/Main.tsx\");\n/* harmony import */ var _components_header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/header/Header */ \"./src/components/header/Header.tsx\");\n/* harmony import */ var _http_userAPI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/http/userAPI */ \"./src/http/userAPI.ts\");\n/* harmony import */ var _styles_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/style */ \"./src/styles/style.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const [auth, setAuth] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        const token = localStorage.getItem(\"token\");\n        if (!token) {\n            router.push(\"/registration\", undefined, {\n                shallow: true\n            });\n        }\n        (0,_http_userAPI__WEBPACK_IMPORTED_MODULE_3__.check)().then((data)=>{\n            console.log(data);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: auth && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_4__.Global, {}, void 0, false, {\n                    fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/index.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header_Header__WEBPACK_IMPORTED_MODULE_2__.Header, {}, void 0, false, {\n                            fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/index.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 6\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Main__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {\n                            fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/index.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 6\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/index.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/index.tsx\",\n            lineNumber: 30,\n            columnNumber: 12\n        }, undefined)\n    }, void 0, false);\n};\n_s(Home, \"KmrtU5E07/Ul9fuAMRwUnoU+CZM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDVztBQUViO0FBQ0M7QUFFQTtBQUNJO0FBRzVDLE1BQU1PLE9BQU87O0lBQ1osTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdILCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU1JLFNBQVNOLHNEQUFTQTtJQUl4QkMsZ0RBQVNBLENBQUM7UUFDVCxNQUFNTSxRQUFRQyxhQUFhQyxPQUFPLENBQUM7UUFDbkMsSUFBSSxDQUFDRixPQUFPO1lBQ1hELE9BQU9JLElBQUksQ0FBQyxpQkFBaUJDLFdBQVc7Z0JBQUVDLFNBQVM7WUFBSztRQUN6RDtRQUNBZCxvREFBS0EsR0FBR2UsSUFBSSxDQUFDQyxDQUFBQTtZQUNaQyxRQUFRQyxHQUFHLENBQUNGO1FBQ2I7SUFDRCxHQUFHLEVBQUU7SUFHTCxxQkFBUTtrQkFFTlYsc0JBQVEsOERBQUNhOzs4QkFDUiw4REFBQ2xCLGlEQUFNQTs7Ozs7OEJBQ1AsOERBQUNrQjs7c0NBQ0EsOERBQUNwQiw2REFBTUE7Ozs7O3NDQUNQLDhEQUFDRCxrREFBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9WO0dBOUJNTzs7UUFFVUgsa0RBQVNBOzs7S0FGbkJHO0FBZ0NOLCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYWluIH0gZnJvbSAnQC9jb21wb25lbnRzL01haW4nO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnQC9jb21wb25lbnRzL2hlYWRlci9IZWFkZXInO1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnQC9jb21wb25lbnRzL2xheW91dC9MYXlvdXQnO1xuaW1wb3J0IHsgY2hlY2sgfSBmcm9tICdAL2h0dHAvdXNlckFQSSc7XG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tICdAL3N0eWxlcy9zdHlsZSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuXHRjb25zdCBbYXV0aCwgc2V0QXV0aF0gPSB1c2VTdGF0ZShmYWxzZSlcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuXHRcdGlmICghdG9rZW4pIHtcblx0XHRcdHJvdXRlci5wdXNoKCcvcmVnaXN0cmF0aW9uJywgdW5kZWZpbmVkLCB7IHNoYWxsb3c6IHRydWUgfSlcblx0XHR9XG5cdFx0Y2hlY2soKS50aGVuKGRhdGEgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coZGF0YSlcblx0XHR9KVxuXHR9LCBbXSlcblxuXG5cdHJldHVybiAoPD5cblx0XHR7XG5cdFx0XHRhdXRoICYmIDxkaXY+XG5cdFx0XHRcdDxHbG9iYWwgLz5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8SGVhZGVyIC8+XG5cdFx0XHRcdFx0PE1haW4gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj59XG5cblxuXHQ8Lz5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lIl0sIm5hbWVzIjpbIk1haW4iLCJIZWFkZXIiLCJjaGVjayIsIkdsb2JhbCIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSG9tZSIsImF1dGgiLCJzZXRBdXRoIiwicm91dGVyIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicHVzaCIsInVuZGVmaW5lZCIsInNoYWxsb3ciLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});