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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/style */ \"./src/styles/style.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_user_loginAPI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services/user/loginAPI */ \"./src/services/user/loginAPI.ts\");\n/* harmony import */ var _services_user_registrationAPI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/services/user/registrationAPI */ \"./src/services/user/registrationAPI.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Registration = ()=>{\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [isLogin, setIsLogin] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [auth, setAuth] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [err, setErr] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    async function signIn() {\n        if (isLogin) {\n            try {\n                try {\n                    await (0,_services_user_loginAPI__WEBPACK_IMPORTED_MODULE_4__.login)(email, password);\n                } catch (error) {\n                    setErr(error);\n                }\n                setAuth(true);\n            } catch (error) {\n                console.log(error);\n            }\n        } else {\n            try {\n                await (0,_services_user_registrationAPI__WEBPACK_IMPORTED_MODULE_5__.registration)(email, password);\n                setAuth(true);\n            } catch (error) {\n                console.log(error);\n            }\n        }\n        console.log(err);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        console.log(err);\n    // if (window.localStorage.token) {\n    // \trouter.back()\n    // }\n    }, [\n        auth\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_1__.Global, {}, void 0, false, {\n                fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                lineNumber: 49,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_1__.FormAuth, {\n                children: [\n                    isLogin ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Авторизация\"\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 16\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Регистрация\"\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 39\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Введите email ...\",\n                        value: email,\n                        onChange: (e)=>setEmail(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        placeholder: \"Введите пароль ...\",\n                        value: password,\n                        onChange: (e)=>setPassword(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text\",\n                        children: isLogin ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Нет аккаунта? \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    onClick: ()=>setIsLogin(false),\n                                    children: \"Зарегистрироваться\"\n                                }, void 0, false, {\n                                    fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 23\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 8\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Есть аккаунт? \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    onClick: ()=>setIsLogin(true),\n                                    children: \"Войти\"\n                                }, void 0, false, {\n                                    fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 23\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 8\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 5\n                    }, undefined),\n                    isLogin ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>{\n                            signIn();\n                        },\n                        children: \"Войти\"\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 16\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: signIn,\n                        children: \"Зарегистрироваться\"\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 71\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                lineNumber: 50,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Registration, \"x7AaS7RyuqnLQr4a+cC4ffpl+JI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Registration;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Registration);\nvar _c;\n$RefreshReg$(_c, \"Registration\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcmVnaXN0cmF0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDQTtBQUNWO0FBQ1M7QUFDYztBQUUvRCxNQUFNUSxlQUFlOztJQUNwQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTyxVQUFVQyxZQUFZLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1MsU0FBU0MsV0FBVyxHQUFHViwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNXLE1BQU1DLFFBQVEsR0FBR1osK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDYSxLQUFLQyxPQUFPLEdBQUdkLCtDQUFRQSxDQUFDO0lBQy9CLE1BQU1lLFNBQVNkLHNEQUFTQTtJQUV4QixlQUFlZTtRQUNkLElBQUlQLFNBQVM7WUFDWixJQUFJO2dCQUNILElBQUk7b0JBQ0gsTUFBTVAsOERBQUtBLENBQUNHLE9BQU9FO2dCQUNwQixFQUFFLE9BQU9VLE9BQU87b0JBQ2ZILE9BQU9HO2dCQUNSO2dCQUVBTCxRQUFRO1lBQ1QsRUFBRSxPQUFPSyxPQUFPO2dCQUNmQyxRQUFRQyxHQUFHLENBQUNGO1lBQ2I7UUFDRCxPQUFPO1lBQ04sSUFBSTtnQkFDSCxNQUFNZCw0RUFBWUEsQ0FBQ0UsT0FBT0U7Z0JBQzFCSyxRQUFRO1lBQ1QsRUFBRSxPQUFPSyxPQUFPO2dCQUNmQyxRQUFRQyxHQUFHLENBQUNGO1lBQ2I7UUFDRDtRQUNBQyxRQUFRQyxHQUFHLENBQUNOO0lBQ2I7SUFHQWQsZ0RBQVNBLENBQUM7UUFDVG1CLFFBQVFDLEdBQUcsQ0FBQ047SUFDWixtQ0FBbUM7SUFDbkMsaUJBQWlCO0lBQ2pCLElBQUk7SUFDTCxHQUFHO1FBQUNGO0tBQUs7SUFFVCxxQkFDQzs7MEJBQ0MsOERBQUNkLGlEQUFNQTs7Ozs7MEJBQ1AsOERBQUNELG1EQUFRQTs7b0JBQ1BhLHdCQUFVLDhEQUFDVztrQ0FBRzs7Ozs7a0RBQW1CLDhEQUFDQTtrQ0FBRzs7Ozs7O2tDQUN0Qyw4REFBQ0M7d0JBQU1DLE1BQUs7d0JBQU9DLGFBQVk7d0JBQW9CQyxPQUFPbkI7d0JBQU9vQixVQUFVLENBQUNDLElBQU1wQixTQUFTb0IsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7a0NBQ3pHLDhEQUFDSDt3QkFBTUMsTUFBSzt3QkFBV0MsYUFBWTt3QkFBcUJDLE9BQU9qQjt3QkFBVWtCLFVBQVUsQ0FBQ0MsSUFBTWxCLFlBQVlrQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7OztrQ0FDcEgsOERBQUNJO3dCQUFJQyxXQUFVO2tDQUVicEIsd0JBQ0MsOERBQUNtQjs7Z0NBQUk7OENBQ1UsOERBQUNFO29DQUFLQyxTQUFTLElBQU1yQixXQUFXOzhDQUFROzs7Ozs7Ozs7OztzREFFdkQsOERBQUNrQjs7Z0NBQUk7OENBQ1UsOERBQUNFO29DQUFLQyxTQUFTLElBQU1yQixXQUFXOzhDQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztvQkFJeERELHdCQUFVLDhEQUFDdUI7d0JBQU9ELFNBQVM7NEJBQVFmO3dCQUFVO2tDQUFHOzs7OztrREFBaUIsOERBQUNnQjt3QkFBT0QsU0FBU2Y7a0NBQVE7Ozs7Ozs7Ozs7Ozs7O0FBSS9GO0dBOURNWjs7UUFNVUgsa0RBQVNBOzs7S0FObkJHO0FBZ0VOLCtEQUFlQSxZQUFZQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9yZWdpc3RyYXRpb24udHN4Pzg0YzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybUF1dGgsIEdsb2JhbCB9IGZyb20gJ0Avc3R5bGVzL3N0eWxlJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBsb2dpbiB9IGZyb20gJ0Avc2VydmljZXMvdXNlci9sb2dpbkFQSSc7XG5pbXBvcnQgeyByZWdpc3RyYXRpb24gfSBmcm9tICdAL3NlcnZpY2VzL3VzZXIvcmVnaXN0cmF0aW9uQVBJJztcblxuY29uc3QgUmVnaXN0cmF0aW9uID0gKCkgPT4ge1xuXHRjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XG5cdGNvbnN0IFtpc0xvZ2luLCBzZXRJc0xvZ2luXSA9IHVzZVN0YXRlKHRydWUpXG5cdGNvbnN0IFthdXRoLCBzZXRBdXRoXSA9IHVzZVN0YXRlKGZhbHNlKVxuXHRjb25zdCBbZXJyLCBzZXRFcnJdID0gdXNlU3RhdGUoJycpXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cblx0YXN5bmMgZnVuY3Rpb24gc2lnbkluKCkge1xuXHRcdGlmIChpc0xvZ2luKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGF3YWl0IGxvZ2luKGVtYWlsLCBwYXNzd29yZClcblx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0XHRzZXRFcnIoZXJyb3IpXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzZXRBdXRoKHRydWUpXG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcilcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgcmVnaXN0cmF0aW9uKGVtYWlsLCBwYXNzd29yZClcblx0XHRcdFx0c2V0QXV0aCh0cnVlKVxuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpXG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNvbnNvbGUubG9nKGVycilcblx0fVxuXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zb2xlLmxvZyhlcnIpXG5cdFx0Ly8gaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UudG9rZW4pIHtcblx0XHQvLyBcdHJvdXRlci5iYWNrKClcblx0XHQvLyB9XG5cdH0sIFthdXRoXSlcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8R2xvYmFsIC8+XG5cdFx0XHQ8Rm9ybUF1dGg+XG5cdFx0XHRcdHtpc0xvZ2luID8gPGgxPtCQ0LLRgtC+0YDQuNC30LDRhtC40Y88L2gxPiA6IDxoMT7QoNC10LPQuNGB0YLRgNCw0YbQuNGPPC9oMT59XG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi0JLQstC10LTQuNGC0LUgZW1haWwgLi4uXCIgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX0gLz5cblx0XHRcdFx0PGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwi0JLQstC10LTQuNGC0LUg0L/QsNGA0L7Qu9GMIC4uLlwiIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9IC8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGlzTG9naW4gP1xuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdNCd0LXRgiDQsNC60LrQsNGD0L3RgtCwPyA8c3BhbiBvbkNsaWNrPXsoKSA9PiBzZXRJc0xvZ2luKGZhbHNlKX0+0JfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNGC0YzRgdGPPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj4gOlxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdNCV0YHRgtGMINCw0LrQutCw0YPQvdGCPyA8c3BhbiBvbkNsaWNrPXsoKSA9PiBzZXRJc0xvZ2luKHRydWUpfT7QktC+0LnRgtC4PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7aXNMb2dpbiA/IDxidXR0b24gb25DbGljaz17KCkgPT4geyBzaWduSW4oKTsgfX0+0JLQvtC50YLQuDwvYnV0dG9uPiA6IDxidXR0b24gb25DbGljaz17c2lnbklufT7Ql9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0YLRjNGB0Y88L2J1dHRvbj59XG5cdFx0XHQ8L0Zvcm1BdXRoPlxuXHRcdDwvPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdHJhdGlvblxuIl0sIm5hbWVzIjpbIkZvcm1BdXRoIiwiR2xvYmFsIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsImxvZ2luIiwicmVnaXN0cmF0aW9uIiwiUmVnaXN0cmF0aW9uIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJpc0xvZ2luIiwic2V0SXNMb2dpbiIsImF1dGgiLCJzZXRBdXRoIiwiZXJyIiwic2V0RXJyIiwicm91dGVyIiwic2lnbkluIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiaDEiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiIsIm9uQ2xpY2siLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/registration.tsx\n"));

/***/ })

});