"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/registration",{

/***/ "./src/pages/registration.tsx":
/*!************************************!*\
  !*** ./src/pages/registration.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/style */ \"./src/styles/style.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_user_loginAPI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services/user/loginAPI */ \"./src/services/user/loginAPI.ts\");\n/* harmony import */ var _services_user_registrationAPI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/services/user/registrationAPI */ \"./src/services/user/registrationAPI.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Registration = ()=>{\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [isLogin, setIsLogin] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [auth, setAuth] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [err, setErr] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    async function signIn() {\n        if (isLogin) {\n            try {\n                await (0,_services_user_loginAPI__WEBPACK_IMPORTED_MODULE_4__.login)(email, password).catch((error)=>setErr(error.data));\n                setAuth(true);\n            } catch (error) {\n                console.log(error);\n            }\n        } else {\n            try {\n                await (0,_services_user_registrationAPI__WEBPACK_IMPORTED_MODULE_5__.registration)(email, password);\n                setAuth(true);\n            } catch (error) {\n                console.log(error);\n            }\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        console.log(err);\n    // if (window.localStorage.token) {\n    // \trouter.back()\n    // }\n    }, [\n        auth\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_1__.Global, {}, void 0, false, {\n                fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                lineNumber: 44,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_1__.FormAuth, {\n                children: [\n                    isLogin ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Авторизация\"\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 16\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Регистрация\"\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 39\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Введите email ...\",\n                        value: email,\n                        onChange: (e)=>setEmail(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        placeholder: \"Введите пароль ...\",\n                        value: password,\n                        onChange: (e)=>setPassword(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text\",\n                        children: isLogin ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Нет аккаунта? \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    onClick: ()=>setIsLogin(false),\n                                    children: \"Зарегистрироваться\"\n                                }, void 0, false, {\n                                    fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 23\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 8\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Есть аккаунт? \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    onClick: ()=>setIsLogin(true),\n                                    children: \"Войти\"\n                                }, void 0, false, {\n                                    fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 23\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 8\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 5\n                    }, undefined),\n                    isLogin ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>{\n                            signIn();\n                        },\n                        children: \"Войти\"\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 16\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: signIn,\n                        children: \"Зарегистрироваться\"\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 71\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                lineNumber: 45,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Registration, \"x7AaS7RyuqnLQr4a+cC4ffpl+JI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Registration;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Registration);\nvar _c;\n$RefreshReg$(_c, \"Registration\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcmVnaXN0cmF0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDQTtBQUNWO0FBQ1M7QUFDYztBQUUvRCxNQUFNUSxlQUFlOztJQUNwQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTyxVQUFVQyxZQUFZLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1MsU0FBU0MsV0FBVyxHQUFHViwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNXLE1BQU1DLFFBQVEsR0FBR1osK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDYSxLQUFLQyxPQUFPLEdBQUdkLCtDQUFRQSxDQUFDO0lBQy9CLE1BQU1lLFNBQVNkLHNEQUFTQTtJQUV4QixlQUFlZTtRQUNkLElBQUlQLFNBQVM7WUFDWixJQUFJO2dCQUNILE1BQU1QLDhEQUFLQSxDQUFDRyxPQUFPRSxVQUFVVSxLQUFLLENBQUNDLENBQUFBLFFBQVNKLE9BQU9JLE1BQU1DLElBQUk7Z0JBQzdEUCxRQUFRO1lBQ1QsRUFBRSxPQUFPTSxPQUFPO2dCQUNmRSxRQUFRQyxHQUFHLENBQUNIO1lBQ2I7UUFFRCxPQUFPO1lBQ04sSUFBSTtnQkFDSCxNQUFNZiw0RUFBWUEsQ0FBQ0UsT0FBT0U7Z0JBQzFCSyxRQUFRO1lBQ1QsRUFBRSxPQUFPTSxPQUFPO2dCQUNmRSxRQUFRQyxHQUFHLENBQUNIO1lBQ2I7UUFDRDtJQUNEO0lBR0FuQixnREFBU0EsQ0FBQztRQUNUcUIsUUFBUUMsR0FBRyxDQUFDUjtJQUNaLG1DQUFtQztJQUNuQyxpQkFBaUI7SUFDakIsSUFBSTtJQUNMLEdBQUc7UUFBQ0Y7S0FBSztJQUVULHFCQUNDOzswQkFDQyw4REFBQ2QsaURBQU1BOzs7OzswQkFDUCw4REFBQ0QsbURBQVFBOztvQkFDUGEsd0JBQVUsOERBQUNhO2tDQUFHOzs7OztrREFBbUIsOERBQUNBO2tDQUFHOzs7Ozs7a0NBQ3RDLDhEQUFDQzt3QkFBTUMsTUFBSzt3QkFBT0MsYUFBWTt3QkFBb0JDLE9BQU9yQjt3QkFBT3NCLFVBQVUsQ0FBQ0MsSUFBTXRCLFNBQVNzQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7OztrQ0FDekcsOERBQUNIO3dCQUFNQyxNQUFLO3dCQUFXQyxhQUFZO3dCQUFxQkMsT0FBT25CO3dCQUFVb0IsVUFBVSxDQUFDQyxJQUFNcEIsWUFBWW9CLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7O2tDQUNwSCw4REFBQ0k7d0JBQUlDLFdBQVU7a0NBRWJ0Qix3QkFDQyw4REFBQ3FCOztnQ0FBSTs4Q0FDVSw4REFBQ0U7b0NBQUtDLFNBQVMsSUFBTXZCLFdBQVc7OENBQVE7Ozs7Ozs7Ozs7O3NEQUV2RCw4REFBQ29COztnQ0FBSTs4Q0FDVSw4REFBQ0U7b0NBQUtDLFNBQVMsSUFBTXZCLFdBQVc7OENBQU87Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUl4REQsd0JBQVUsOERBQUN5Qjt3QkFBT0QsU0FBUzs0QkFBUWpCO3dCQUFVO2tDQUFHOzs7OztrREFBaUIsOERBQUNrQjt3QkFBT0QsU0FBU2pCO2tDQUFROzs7Ozs7Ozs7Ozs7OztBQUkvRjtHQXpETVo7O1FBTVVILGtEQUFTQTs7O0tBTm5CRztBQTJETiwrREFBZUEsWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcmVnaXN0cmF0aW9uLnRzeD84NGM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1BdXRoLCBHbG9iYWwgfSBmcm9tICdAL3N0eWxlcy9zdHlsZSc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgbG9naW4gfSBmcm9tICdAL3NlcnZpY2VzL3VzZXIvbG9naW5BUEknO1xuaW1wb3J0IHsgcmVnaXN0cmF0aW9uIH0gZnJvbSAnQC9zZXJ2aWNlcy91c2VyL3JlZ2lzdHJhdGlvbkFQSSc7XG5cbmNvbnN0IFJlZ2lzdHJhdGlvbiA9ICgpID0+IHtcblx0Y29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG5cdGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xuXHRjb25zdCBbaXNMb2dpbiwgc2V0SXNMb2dpbl0gPSB1c2VTdGF0ZSh0cnVlKVxuXHRjb25zdCBbYXV0aCwgc2V0QXV0aF0gPSB1c2VTdGF0ZShmYWxzZSlcblx0Y29uc3QgW2Vyciwgc2V0RXJyXSA9IHVzZVN0YXRlKCcnKVxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG5cdGFzeW5jIGZ1bmN0aW9uIHNpZ25JbigpIHtcblx0XHRpZiAoaXNMb2dpbikge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgbG9naW4oZW1haWwsIHBhc3N3b3JkKS5jYXRjaChlcnJvciA9PiBzZXRFcnIoZXJyb3IuZGF0YSkpXG5cdFx0XHRcdHNldEF1dGgodHJ1ZSlcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKVxuXHRcdFx0fVxuXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGF3YWl0IHJlZ2lzdHJhdGlvbihlbWFpbCwgcGFzc3dvcmQpXG5cdFx0XHRcdHNldEF1dGgodHJ1ZSlcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zb2xlLmxvZyhlcnIpXG5cdFx0Ly8gaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UudG9rZW4pIHtcblx0XHQvLyBcdHJvdXRlci5iYWNrKClcblx0XHQvLyB9XG5cdH0sIFthdXRoXSlcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8R2xvYmFsIC8+XG5cdFx0XHQ8Rm9ybUF1dGg+XG5cdFx0XHRcdHtpc0xvZ2luID8gPGgxPtCQ0LLRgtC+0YDQuNC30LDRhtC40Y88L2gxPiA6IDxoMT7QoNC10LPQuNGB0YLRgNCw0YbQuNGPPC9oMT59XG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi0JLQstC10LTQuNGC0LUgZW1haWwgLi4uXCIgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX0gLz5cblx0XHRcdFx0PGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwi0JLQstC10LTQuNGC0LUg0L/QsNGA0L7Qu9GMIC4uLlwiIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9IC8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGlzTG9naW4gP1xuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdNCd0LXRgiDQsNC60LrQsNGD0L3RgtCwPyA8c3BhbiBvbkNsaWNrPXsoKSA9PiBzZXRJc0xvZ2luKGZhbHNlKX0+0JfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNGC0YzRgdGPPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj4gOlxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdNCV0YHRgtGMINCw0LrQutCw0YPQvdGCPyA8c3BhbiBvbkNsaWNrPXsoKSA9PiBzZXRJc0xvZ2luKHRydWUpfT7QktC+0LnRgtC4PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7aXNMb2dpbiA/IDxidXR0b24gb25DbGljaz17KCkgPT4geyBzaWduSW4oKTsgfX0+0JLQvtC50YLQuDwvYnV0dG9uPiA6IDxidXR0b24gb25DbGljaz17c2lnbklufT7Ql9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0YLRjNGB0Y88L2J1dHRvbj59XG5cdFx0XHQ8L0Zvcm1BdXRoPlxuXHRcdDwvPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdHJhdGlvblxuIl0sIm5hbWVzIjpbIkZvcm1BdXRoIiwiR2xvYmFsIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsImxvZ2luIiwicmVnaXN0cmF0aW9uIiwiUmVnaXN0cmF0aW9uIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJpc0xvZ2luIiwic2V0SXNMb2dpbiIsImF1dGgiLCJzZXRBdXRoIiwiZXJyIiwic2V0RXJyIiwicm91dGVyIiwic2lnbkluIiwiY2F0Y2giLCJlcnJvciIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiaDEiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiIsIm9uQ2xpY2siLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/registration.tsx\n"));

/***/ })

});