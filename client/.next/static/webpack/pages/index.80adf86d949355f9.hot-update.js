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

/***/ "./src/components/ListTasks.tsx":
/*!**************************************!*\
  !*** ./src/components/ListTasks.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ListTasks: function() { return /* binding */ ListTasks; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/style */ \"./src/styles/style.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-react-lite */ \"./node_modules/mobx-react-lite/es/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst ListTasks = _s((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__.observer)(_c = _s((param)=>{\n    let { onClick } = param;\n    _s();\n    const [task, setTask] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    // const { task } = useContext(Context)\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const str = localStorage.getItem(\"token\");\n        const userID = JSON.parse(str);\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:5000/api/tasks/\" + \"\".concat(userID.id)).then((data)=>console.log(data.tasks));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_1__.ListTasksStyle, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"dzvgm'd;mvdlzmkfvdol;fv\"\n        }, void 0, false, {\n            fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\ListTasks.tsx\",\n            lineNumber: 31,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\ListTasks.tsx\",\n        lineNumber: 30,\n        columnNumber: 3\n    }, undefined);\n}, \"QyN9HPeuh19d5yqcD1duhfVTQLw=\")), \"QyN9HPeuh19d5yqcD1duhfVTQLw=\");\n_c1 = ListTasks;\nvar _c, _c1;\n$RefreshReg$(_c, \"ListTasks$observer\");\n$RefreshReg$(_c1, \"ListTasks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MaXN0VGFza3MudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEQ7QUFDSTtBQUdwQjtBQUdqQjtBQVFsQixNQUFNTSxZQUFzQ0YsR0FBQUEseURBQVFBLFNBQUM7UUFBQyxFQUFFRyxPQUFPLEVBQUU7O0lBQ3ZFLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTiwrQ0FBUUE7SUFDaEMsdUNBQXVDO0lBRXZDRCxnREFBU0EsQ0FBQztRQUNULE1BQU1RLE1BQU1DLGFBQWFDLE9BQU8sQ0FBQztRQUNqQyxNQUFNQyxTQUFTQyxLQUFLQyxLQUFLLENBQUNMO1FBQzFCTCxpREFDSyxDQUFDLHFDQUFxQyxHQUFhLE9BQVZRLE9BQU9JLEVBQUUsR0FDckRDLElBQUksQ0FBQ0MsQ0FBQUEsT0FBUUMsUUFBUUMsR0FBRyxDQUFDRixLQUFLRyxLQUFLO0lBQ3RDLEdBQUcsRUFBRTtJQUdMLHFCQUNDLDhEQUFDdEIseURBQWNBO2tCQUNkLDRFQUFDdUI7c0JBQUk7Ozs7Ozs7Ozs7O0FBUVIscUVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGlzdFRhc2tzLnRzeD83YjAxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3RUYXNrc1N0eWxlLCBUYXNrU3R5bGUgfSBmcm9tICdAL3N0eWxlcy9zdHlsZSdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgVGFzayB9IGZyb20gJy4vVGFzaydcclxuaW1wb3J0IHsgQ2hlY2tlZEljb24sIEluZm9JY29uIH0gZnJvbSAnLi4vLi4vcHVibGljJ1xyXG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QtbGl0ZSdcclxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJ0AvdXRpbHMvY29udGV4dCdcclxuaW1wb3J0IHsgZ2V0QWxsIH0gZnJvbSAnQC9odHRwL3Rhc2tBUEknXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgVGFza1Byb3BzIH0gZnJvbSAnQC9pbnRlcmZhY2UvaW50ZXJmYWNlJ1xyXG5cclxuaW50ZXJmYWNlIExpc3RUYXNrc1Byb3BzIHtcclxuXHRvbkNsaWNrOiAoaWQ6IG51bWJlcikgPT4gdm9pZFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IExpc3RUYXNrczogUmVhY3QuRkM8TGlzdFRhc2tzUHJvcHM+ID0gb2JzZXJ2ZXIoKHsgb25DbGljayB9KSA9PiB7XHJcblx0Y29uc3QgW3Rhc2ssIHNldFRhc2tdID0gdXNlU3RhdGUoKVxyXG5cdC8vIGNvbnN0IHsgdGFzayB9ID0gdXNlQ29udGV4dChDb250ZXh0KVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc3Qgc3RyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJylcclxuXHRcdGNvbnN0IHVzZXJJRCA9IEpTT04ucGFyc2Uoc3RyKVxyXG5cdFx0YXhpb3NcclxuXHRcdFx0LmdldCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS90YXNrcy8nICsgYCR7dXNlcklELmlkfWApXHJcblx0XHRcdC50aGVuKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YS50YXNrcykpXHJcblx0fSwgW10pXHJcblxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PExpc3RUYXNrc1N0eWxlPlxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdGR6dmdtJ2Q7bXZkbHpta2Z2ZG9sO2Z2XHJcblx0XHRcdFx0ey8qIHt0YXNrLnRhc2tzLm1hcChpdGVtID0+IChcclxuXHRcdFx0XHRcdDxUYXNrIGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0gb25DbGljaz17b25DbGlja30gLz5cclxuXHRcdFx0XHQpKX0gKi99XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9MaXN0VGFza3NTdHlsZT5cclxuXHQpXHJcbn0pXHJcbiJdLCJuYW1lcyI6WyJMaXN0VGFza3NTdHlsZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJvYnNlcnZlciIsImF4aW9zIiwiTGlzdFRhc2tzIiwib25DbGljayIsInRhc2siLCJzZXRUYXNrIiwic3RyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVzZXJJRCIsIkpTT04iLCJwYXJzZSIsImdldCIsImlkIiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwidGFza3MiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ListTasks.tsx\n"));

/***/ })

});