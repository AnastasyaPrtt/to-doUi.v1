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

/***/ "./src/components/navbar/Navbar.tsx":
/*!******************************************!*\
  !*** ./src/components/navbar/Navbar.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Navbar: function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/Button */ \"./src/components/ui/Button.tsx\");\n/* harmony import */ var _public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public */ \"./public/index.jsx\");\n/* harmony import */ var _styles_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/style */ \"./src/styles/style.ts\");\n\n\n\n\n\nconst Navbar = (param)=>{\n    let { addTask, onClick } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_4__.NavBarStyle, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Button__WEBPACK_IMPORTED_MODULE_2__.ButtonNav, {\n                    onClick: onClick,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_3__.CalendarIcon, {}, void 0, false, {\n                            fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/navbar/Navbar.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 6\n                        }, undefined),\n                        \"Today\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/navbar/Navbar.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/navbar/Navbar.tsx\",\n                lineNumber: 19,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                onClick: addTask,\n                className: \"btnAdd\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_3__.AddTaskIcon, {\n                        className: \"icon\"\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/navbar/Navbar.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 5\n                    }, undefined),\n                    \"Add task\"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/navbar/Navbar.tsx\",\n                lineNumber: 34,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/navbar/Navbar.tsx\",\n        lineNumber: 18,\n        columnNumber: 3\n    }, undefined);\n};\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9uYXZiYXIvTmF2YmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUM7QUFDTztBQUMrQjtBQUNsQztBQVN0QyxNQUFNTSxTQUFnQztRQUFDLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFO0lBSWpFLHFCQUNDLDhEQUFDSCxzREFBV0E7OzBCQUNYLDhEQUFDSTswQkFDQSw0RUFBQ1AsaURBQVNBO29CQUFDTSxTQUFTQTs7c0NBQ25CLDhEQUFDSixpREFBWUE7Ozs7O3dCQUFHOzs7Ozs7Ozs7Ozs7MEJBYWxCLDhEQUFDSCw4Q0FBTUE7Z0JBQUNPLFNBQVNEO2dCQUFTRyxXQUFXOztrQ0FDcEMsOERBQUNQLGdEQUFXQTt3QkFBQ08sV0FBVTs7Ozs7O29CQUFTOzs7Ozs7Ozs7Ozs7O0FBS3BDLEVBQUM7S0EzQllKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL25hdmJhci9OYXZiYXIudHN4PzVhYzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJ1dHRvbiwgQnV0dG9uTmF2IH0gZnJvbSAnLi4vdWkvQnV0dG9uJ1xuaW1wb3J0IHsgQWRkVGFza0ljb24sIEFsbEljb24sIENhbGVuZGFySWNvbiwgRGF0ZUljb24gfSBmcm9tIFwiLi4vLi4vLi4vcHVibGljXCI7XG5pbXBvcnQgeyBOYXZCYXJTdHlsZSB9IGZyb20gJ0Avc3R5bGVzL3N0eWxlJztcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICdAL3V0aWxzL2NvbnRleHQnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW50ZXJmYWNlIE5hdmJhclByb3BzIHtcblx0YWRkVGFzazogKCkgPT4gdm9pZCxcblx0b25DbGljaz86ICgpID0+IHZvaWRcbn1cblxuZXhwb3J0IGNvbnN0IE5hdmJhcjogUmVhY3QuRkM8TmF2YmFyUHJvcHM+ID0gKHsgYWRkVGFzaywgb25DbGljayB9KSA9PiB7XG5cblxuXG5cdHJldHVybiAoXG5cdFx0PE5hdkJhclN0eWxlPlxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PEJ1dHRvbk5hdiBvbkNsaWNrPXtvbkNsaWNrfT5cblx0XHRcdFx0XHQ8Q2FsZW5kYXJJY29uIC8+XG5cdFx0XHRcdFx0VG9kYXlcblx0XHRcdFx0PC9CdXR0b25OYXY+XG5cdFx0XHRcdHsvKiA8QnV0dG9uTmF2PlxuXHRcdFx0XHRcdDxBbGxJY29uIC8+XG5cdFx0XHRcdFx0QWxsXG5cdFx0XHRcdDwvQnV0dG9uTmF2PlxuXHRcdFx0XHQ8QnV0dG9uTmF2PlxuXHRcdFx0XHRcdDxEYXRlSWNvbiAvPlxuXHRcdFx0XHRcdERhdGVcblx0XHRcdFx0PC9CdXR0b25OYXY+ICovfVxuXG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxCdXR0b24gb25DbGljaz17YWRkVGFza30gY2xhc3NOYW1lPXsnYnRuQWRkJ30+XG5cdFx0XHRcdDxBZGRUYXNrSWNvbiBjbGFzc05hbWU9J2ljb24nIC8+XG5cdFx0XHRcdEFkZCB0YXNrXG5cdFx0XHQ8L0J1dHRvbj5cblx0XHQ8L05hdkJhclN0eWxlPlxuXHQpXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCdXR0b24iLCJCdXR0b25OYXYiLCJBZGRUYXNrSWNvbiIsIkNhbGVuZGFySWNvbiIsIk5hdkJhclN0eWxlIiwiTmF2YmFyIiwiYWRkVGFzayIsIm9uQ2xpY2siLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/navbar/Navbar.tsx\n"));

/***/ })

});