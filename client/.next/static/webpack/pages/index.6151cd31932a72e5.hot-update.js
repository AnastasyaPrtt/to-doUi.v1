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

/***/ "./src/components/ui/Pagination.tsx":
/*!******************************************!*\
  !*** ./src/components/ui/Pagination.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/style */ \"./src/styles/style.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Pagination = (param)=>{\n    let { pageNumber, count } = param;\n    _s();\n    const pageCount = Math.ceil(count / 5);\n    console.log(pageCount);\n    const [activePage, setActivePage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);\n    const pages = [];\n    for(let i = 0; i < pageCount;){\n        pages.push(++i);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_1__.PaginationStyle, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: pages.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>{\n                        pageNumber(item);\n                        setActivePage(item);\n                    },\n                    className: item == activePage ? \"active\" : \"\",\n                    children: item\n                }, item, false, {\n                    fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/ui/Pagination.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 6\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/ui/Pagination.tsx\",\n            lineNumber: 20,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/components/ui/Pagination.tsx\",\n        lineNumber: 19,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Pagination, \"1V5FWp8UouhHPM1hVYVqcnKvGgM=\");\n_c = Pagination;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pagination);\nvar _c;\n$RefreshReg$(_c, \"Pagination\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy91aS9QYWdpbmF0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNpRDtBQUNUO0FBT3hDLE1BQU1HLGFBQXdDO1FBQUMsRUFBRUMsVUFBVSxFQUFFQyxLQUFLLEVBQUU7O0lBQ25FLE1BQU1DLFlBQVlDLEtBQUtDLElBQUksQ0FBQ0gsUUFBUTtJQUNwQ0ksUUFBUUMsR0FBRyxDQUFDSjtJQUNaLE1BQU0sQ0FBQ0ssWUFBWUMsY0FBYyxHQUFHViwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNVyxRQUF1QixFQUFFO0lBQy9CLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJUixXQUFZO1FBQy9CTyxNQUFNRSxJQUFJLENBQUMsRUFBRUQ7SUFDZDtJQUNBLHFCQUNDLDhEQUFDZCwwREFBZUE7a0JBQ2YsNEVBQUNnQjtzQkFDQ0gsTUFBTUksR0FBRyxDQUFDLENBQUNDLHFCQUNYLDhEQUFDQztvQkFBa0JDLFNBQVM7d0JBQVFoQixXQUFXYzt3QkFBT04sY0FBY007b0JBQU07b0JBQUdHLFdBQVdILFFBQVFQLGFBQWEsV0FBVzs4QkFBS087bUJBQWhIQTs7Ozs7Ozs7Ozs7Ozs7O0FBS2xCO0dBakJNZjtLQUFBQTtBQW1CTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy91aS9QYWdpbmF0aW9uLnRzeD81MDFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2luYXRpb25Qcm9wcyB9IGZyb20gJ0AvaW50ZXJmYWNlL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uU3R5bGUgfSBmcm9tICdAL3N0eWxlcy9zdHlsZSc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cblxuXG5cblxuY29uc3QgUGFnaW5hdGlvbjogUmVhY3QuRkM8UGFnaW5hdGlvblByb3BzPiA9ICh7IHBhZ2VOdW1iZXIsIGNvdW50IH0pID0+IHtcblx0Y29uc3QgcGFnZUNvdW50ID0gTWF0aC5jZWlsKGNvdW50IC8gNSlcblx0Y29uc29sZS5sb2cocGFnZUNvdW50KVxuXHRjb25zdCBbYWN0aXZlUGFnZSwgc2V0QWN0aXZlUGFnZV0gPSB1c2VTdGF0ZSgxKVxuXHRjb25zdCBwYWdlczogQXJyYXk8bnVtYmVyPiA9IFtdO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHBhZ2VDb3VudDspIHtcblx0XHRwYWdlcy5wdXNoKCsraSlcblx0fVxuXHRyZXR1cm4gKFxuXHRcdDxQYWdpbmF0aW9uU3R5bGU+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHR7cGFnZXMubWFwKChpdGVtKSA9PiAoXG5cdFx0XHRcdFx0PGJ1dHRvbiBrZXk9e2l0ZW19IG9uQ2xpY2s9eygpID0+IHsgcGFnZU51bWJlcihpdGVtKTsgc2V0QWN0aXZlUGFnZShpdGVtKSB9fSBjbGFzc05hbWU9e2l0ZW0gPT0gYWN0aXZlUGFnZSA/ICdhY3RpdmUnIDogJyd9PntpdGVtfTwvYnV0dG9uPlxuXHRcdFx0XHQpKX1cblx0XHRcdDwvZGl2PlxuXHRcdDwvUGFnaW5hdGlvblN0eWxlPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjtcbiJdLCJuYW1lcyI6WyJQYWdpbmF0aW9uU3R5bGUiLCJSZWFjdCIsInVzZVN0YXRlIiwiUGFnaW5hdGlvbiIsInBhZ2VOdW1iZXIiLCJjb3VudCIsInBhZ2VDb3VudCIsIk1hdGgiLCJjZWlsIiwiY29uc29sZSIsImxvZyIsImFjdGl2ZVBhZ2UiLCJzZXRBY3RpdmVQYWdlIiwicGFnZXMiLCJpIiwicHVzaCIsImRpdiIsIm1hcCIsIml0ZW0iLCJidXR0b24iLCJvbkNsaWNrIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ui/Pagination.tsx\n"));

/***/ })

});