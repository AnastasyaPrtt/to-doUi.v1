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

/***/ "./src/components/auth.tsx":
/*!*********************************!*\
  !*** ./src/components/auth.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/style */ \"./src/styles/style.ts\");\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react-lite */ \"./node_modules/mobx-react-lite/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/context */ \"./src/utils/context.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Auth = _s((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.observer)(_c = _s(()=>{\n    _s();\n    const { user } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_utils_context__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [isLogin, setIsLogin] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const signIn = async ()=>{\n        try {\n            let data;\n            if (!isLogin) {\n                console.log(data);\n            // data = await registration(email, password)\n            }\n        } catch (error) {\n            alert(error);\n        }\n    // try {\n    // \tlet data;\n    // \tif (isLogin) {\n    // \t\tdata = await login(email, password)\n    // \t} else {\n    // \t\tdata = await registration(email, password)\n    // \t}\n    // \tconsole.log(data)\n    // } catch (error) {\n    // \talert(error)\n    // }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        console.log(user.isAuth);\n    }, [\n        user.isAuth\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_1__.Global, {}, void 0, false, {\n                fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\auth.tsx\",\n                lineNumber: 45,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_1__.FormAuth, {\n                children: [\n                    isLogin ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Авторизация\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\auth.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 16\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Регистрация\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\auth.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 39\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Введите email ...\",\n                        value: email,\n                        onChange: (e)=>setEmail(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\auth.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        placeholder: \"Введите пароль ...\",\n                        value: password,\n                        onChange: (e)=>setPassword(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\auth.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text\",\n                        children: isLogin ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Нет аккаунта? \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    onClick: ()=>setIsLogin(false),\n                                    children: \"Зарегистрироваться\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\auth.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 23\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\auth.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 8\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Есть аккаунт? \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    onClick: ()=>setIsLogin(true),\n                                    children: \"Войти\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\auth.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 23\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\auth.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 8\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\auth.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 5\n                    }, undefined),\n                    isLogin ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: signIn,\n                        children: \"Войти\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\auth.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 16\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: signIn,\n                        children: \"Зарегистрироваться\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\auth.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 58\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\auth.tsx\",\n                lineNumber: 46,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true);\n}, \"f3HpqhJqHiJWtbuuk/s5nsw6TjM=\")), \"f3HpqhJqHiJWtbuuk/s5nsw6TjM=\");\n_c1 = Auth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Auth);\nvar _c, _c1;\n$RefreshReg$(_c, \"Auth$observer\");\n$RefreshReg$(_c1, \"Auth\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hdXRoLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ2tEO0FBQ1A7QUFDYTtBQUNsQjtBQUd0QyxNQUFNTyxPQUFPTCxHQUFBQSx5REFBUUEsU0FBQzs7SUFDckIsTUFBTSxFQUFFTSxJQUFJLEVBQUUsR0FBR0wsaURBQVVBLENBQUNHLHNEQUFPQTtJQUVuQyxNQUFNLENBQUNHLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTSxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1EsU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNVSxTQUFTO1FBQ2QsSUFBSTtZQUNILElBQUlDO1lBQ0osSUFBSSxDQUFDSCxTQUFTO2dCQUNiSSxRQUFRQyxHQUFHLENBQUNGO1lBQ1osNkNBQTZDO1lBQzlDO1FBQ0QsRUFBRSxPQUFPRyxPQUFPO1lBQ2ZDLE1BQU1EO1FBQ1A7SUFDQSxRQUFRO0lBQ1IsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix3Q0FBd0M7SUFDeEMsWUFBWTtJQUNaLCtDQUErQztJQUMvQyxLQUFLO0lBQ0wscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsSUFBSTtJQUVMO0lBRUFmLGdEQUFTQSxDQUFDO1FBQ1RhLFFBQVFDLEdBQUcsQ0FBQ1YsS0FBS2EsTUFBTTtJQUN4QixHQUFHO1FBQUNiLEtBQUthLE1BQU07S0FBQztJQUVoQixxQkFDQzs7MEJBQ0MsOERBQUNwQixpREFBTUE7Ozs7OzBCQUNQLDhEQUFDRCxtREFBUUE7O29CQUNQYSx3QkFBVSw4REFBQ1M7a0NBQUc7Ozs7O2tEQUFtQiw4REFBQ0E7a0NBQUc7Ozs7OztrQ0FFdEMsOERBQUNDO3dCQUFNQyxNQUFLO3dCQUFPQyxhQUFZO3dCQUFvQkMsT0FBT2pCO3dCQUFPa0IsVUFBVSxDQUFDQyxJQUFNbEIsU0FBU2tCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7O2tDQUN6Ryw4REFBQ0g7d0JBQU1DLE1BQUs7d0JBQVdDLGFBQVk7d0JBQXFCQyxPQUFPZjt3QkFBVWdCLFVBQVUsQ0FBQ0MsSUFBTWhCLFlBQVlnQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7OztrQ0FDcEgsOERBQUNJO3dCQUFJQyxXQUFVO2tDQUVibEIsd0JBQ0MsOERBQUNpQjs7Z0NBQUk7OENBQ1UsOERBQUNFO29DQUFLQyxTQUFTLElBQU1uQixXQUFXOzhDQUFROzs7Ozs7Ozs7OztzREFFdkQsOERBQUNnQjs7Z0NBQUk7OENBQ1UsOERBQUNFO29DQUFLQyxTQUFTLElBQU1uQixXQUFXOzhDQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztvQkFJeERELHdCQUFVLDhEQUFDcUI7d0JBQU9ELFNBQVNsQjtrQ0FBUTs7Ozs7a0RBQWlCLDhEQUFDbUI7d0JBQU9ELFNBQVNsQjtrQ0FBUTs7Ozs7Ozs7Ozs7Ozs7QUFJbEY7O0FBRUEsK0RBQWVSLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYXV0aC50c3g/MjdlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2dpbiwgcmVnaXN0cmF0aW9uIH0gZnJvbSAnQC9odHRwL3VzZXJBUEknO1xyXG5pbXBvcnQgeyBGb3JtQXV0aCwgR2xvYmFsIH0gZnJvbSAnQC9zdHlsZXMvc3R5bGUnO1xyXG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QtbGl0ZSc7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb250ZXh0IGZyb20gJ0AvdXRpbHMvY29udGV4dCc7XHJcblxyXG5cclxuY29uc3QgQXV0aCA9IG9ic2VydmVyKCgpID0+IHtcclxuXHRjb25zdCB7IHVzZXIgfSA9IHVzZUNvbnRleHQoQ29udGV4dClcclxuXHJcblx0Y29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcblx0Y29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcblx0Y29uc3QgW2lzTG9naW4sIHNldElzTG9naW5dID0gdXNlU3RhdGUodHJ1ZSlcclxuXHJcblx0Y29uc3Qgc2lnbkluID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0bGV0IGRhdGE7XHJcblx0XHRcdGlmICghaXNMb2dpbikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpXHJcblx0XHRcdFx0Ly8gZGF0YSA9IGF3YWl0IHJlZ2lzdHJhdGlvbihlbWFpbCwgcGFzc3dvcmQpXHJcblx0XHRcdH1cclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdGFsZXJ0KGVycm9yKVxyXG5cdFx0fVxyXG5cdFx0Ly8gdHJ5IHtcclxuXHRcdC8vIFx0bGV0IGRhdGE7XHJcblx0XHQvLyBcdGlmIChpc0xvZ2luKSB7XHJcblx0XHQvLyBcdFx0ZGF0YSA9IGF3YWl0IGxvZ2luKGVtYWlsLCBwYXNzd29yZClcclxuXHRcdC8vIFx0fSBlbHNlIHtcclxuXHRcdC8vIFx0XHRkYXRhID0gYXdhaXQgcmVnaXN0cmF0aW9uKGVtYWlsLCBwYXNzd29yZClcclxuXHRcdC8vIFx0fVxyXG5cdFx0Ly8gXHRjb25zb2xlLmxvZyhkYXRhKVxyXG5cdFx0Ly8gfSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdC8vIFx0YWxlcnQoZXJyb3IpXHJcblx0XHQvLyB9XHJcblxyXG5cdH1cclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKHVzZXIuaXNBdXRoKVxyXG5cdH0sIFt1c2VyLmlzQXV0aF0pXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8R2xvYmFsIC8+XHJcblx0XHRcdDxGb3JtQXV0aD5cclxuXHRcdFx0XHR7aXNMb2dpbiA/IDxoMT7QkNCy0YLQvtGA0LjQt9Cw0YbQuNGPPC9oMT4gOiA8aDE+0KDQtdCz0LjRgdGC0YDQsNGG0LjRjzwvaDE+fVxyXG5cclxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cItCS0LLQtdC00LjRgtC1IGVtYWlsIC4uLlwiIHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9IC8+XHJcblx0XHRcdFx0PGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwi0JLQstC10LTQuNGC0LUg0L/QsNGA0L7Qu9GMIC4uLlwiIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9IC8+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGlzTG9naW4gP1xyXG5cdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHTQndC10YIg0LDQutC60LDRg9C90YLQsD8gPHNwYW4gb25DbGljaz17KCkgPT4gc2V0SXNMb2dpbihmYWxzZSl9PtCX0LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDRgtGM0YHRjzwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj4gOlxyXG5cdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHTQldGB0YLRjCDQsNC60LrQsNGD0L3Rgj8gPHNwYW4gb25DbGljaz17KCkgPT4gc2V0SXNMb2dpbih0cnVlKX0+0JLQvtC50YLQuDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHR7aXNMb2dpbiA/IDxidXR0b24gb25DbGljaz17c2lnbklufT7QktC+0LnRgtC4PC9idXR0b24+IDogPGJ1dHRvbiBvbkNsaWNrPXtzaWduSW59PtCX0LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDRgtGM0YHRjzwvYnV0dG9uPn1cclxuXHRcdFx0PC9Gb3JtQXV0aD5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aDsiXSwibmFtZXMiOlsiRm9ybUF1dGgiLCJHbG9iYWwiLCJvYnNlcnZlciIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvbnRleHQiLCJBdXRoIiwidXNlciIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaXNMb2dpbiIsInNldElzTG9naW4iLCJzaWduSW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiYWxlcnQiLCJpc0F1dGgiLCJoMSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwib25DbGljayIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/auth.tsx\n"));

/***/ })

});