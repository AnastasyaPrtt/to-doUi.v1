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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/style */ \"./src/styles/style.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_user_loginAPI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services/user/loginAPI */ \"./src/services/user/loginAPI.ts\");\n/* harmony import */ var _services_user_registrationAPI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/services/user/registrationAPI */ \"./src/services/user/registrationAPI.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Registration = ()=>{\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [isLogin, setIsLogin] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [auth, setAuth] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [err, setErr] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    async function signIn() {\n        if (isLogin) {\n            try {\n                try {\n                    await (0,_services_user_loginAPI__WEBPACK_IMPORTED_MODULE_4__.login)(email, password);\n                } catch (error) {\n                    setErr(error);\n                }\n                setAuth(true);\n            } catch (error) {\n                console.log(error);\n            }\n        } else {\n            try {\n                await (0,_services_user_registrationAPI__WEBPACK_IMPORTED_MODULE_5__.registration)(email, password);\n                setAuth(true);\n            } catch (error) {\n                console.log(error);\n            }\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        console.log(err);\n    // if (window.localStorage.token) {\n    // \trouter.back()\n    // }\n    }, [\n        auth\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_1__.Global, {}, void 0, false, {\n                fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                lineNumber: 48,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_1__.FormAuth, {\n                children: [\n                    isLogin ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Авторизация\"\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 16\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Регистрация\"\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 39\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Введите email ...\",\n                        value: email,\n                        onChange: (e)=>setEmail(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        placeholder: \"Введите пароль ...\",\n                        value: password,\n                        onChange: (e)=>setPassword(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text\",\n                        children: isLogin ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Нет аккаунта? \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    onClick: ()=>setIsLogin(false),\n                                    children: \"Зарегистрироваться\"\n                                }, void 0, false, {\n                                    fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 23\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 8\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Есть аккаунт? \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    onClick: ()=>setIsLogin(true),\n                                    children: \"Войти\"\n                                }, void 0, false, {\n                                    fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 23\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 8\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 5\n                    }, undefined),\n                    isLogin ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>{\n                            signIn();\n                        },\n                        children: \"Войти\"\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 16\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: signIn,\n                        children: \"Зарегистрироваться\"\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 71\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                lineNumber: 49,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Registration, \"x7AaS7RyuqnLQr4a+cC4ffpl+JI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Registration;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Registration);\nvar _c;\n$RefreshReg$(_c, \"Registration\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcmVnaXN0cmF0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDQTtBQUNWO0FBQ1M7QUFDYztBQUUvRCxNQUFNUSxlQUFlOztJQUNwQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTyxVQUFVQyxZQUFZLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1MsU0FBU0MsV0FBVyxHQUFHViwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNXLE1BQU1DLFFBQVEsR0FBR1osK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDYSxLQUFLQyxPQUFPLEdBQUdkLCtDQUFRQSxDQUFDO0lBQy9CLE1BQU1lLFNBQVNkLHNEQUFTQTtJQUV4QixlQUFlZTtRQUNkLElBQUlQLFNBQVM7WUFDWixJQUFJO2dCQUNILElBQUk7b0JBQ0gsTUFBTVAsOERBQUtBLENBQUNHLE9BQU9FO2dCQUNwQixFQUFFLE9BQU9VLE9BQU87b0JBQ2ZILE9BQU9HO2dCQUNSO2dCQUVBTCxRQUFRO1lBQ1QsRUFBRSxPQUFPSyxPQUFPO2dCQUNmQyxRQUFRQyxHQUFHLENBQUNGO1lBQ2I7UUFDRCxPQUFPO1lBQ04sSUFBSTtnQkFDSCxNQUFNZCw0RUFBWUEsQ0FBQ0UsT0FBT0U7Z0JBQzFCSyxRQUFRO1lBQ1QsRUFBRSxPQUFPSyxPQUFPO2dCQUNmQyxRQUFRQyxHQUFHLENBQUNGO1lBQ2I7UUFDRDtJQUNEO0lBR0FsQixnREFBU0EsQ0FBQztRQUNUbUIsUUFBUUMsR0FBRyxDQUFDTjtJQUNaLG1DQUFtQztJQUNuQyxpQkFBaUI7SUFDakIsSUFBSTtJQUNMLEdBQUc7UUFBQ0Y7S0FBSztJQUVULHFCQUNDOzswQkFDQyw4REFBQ2QsaURBQU1BOzs7OzswQkFDUCw4REFBQ0QsbURBQVFBOztvQkFDUGEsd0JBQVUsOERBQUNXO2tDQUFHOzs7OztrREFBbUIsOERBQUNBO2tDQUFHOzs7Ozs7a0NBQ3RDLDhEQUFDQzt3QkFBTUMsTUFBSzt3QkFBT0MsYUFBWTt3QkFBb0JDLE9BQU9uQjt3QkFBT29CLFVBQVUsQ0FBQ0MsSUFBTXBCLFNBQVNvQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7OztrQ0FDekcsOERBQUNIO3dCQUFNQyxNQUFLO3dCQUFXQyxhQUFZO3dCQUFxQkMsT0FBT2pCO3dCQUFVa0IsVUFBVSxDQUFDQyxJQUFNbEIsWUFBWWtCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7O2tDQUNwSCw4REFBQ0k7d0JBQUlDLFdBQVU7a0NBRWJwQix3QkFDQyw4REFBQ21COztnQ0FBSTs4Q0FDVSw4REFBQ0U7b0NBQUtDLFNBQVMsSUFBTXJCLFdBQVc7OENBQVE7Ozs7Ozs7Ozs7O3NEQUV2RCw4REFBQ2tCOztnQ0FBSTs4Q0FDVSw4REFBQ0U7b0NBQUtDLFNBQVMsSUFBTXJCLFdBQVc7OENBQU87Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUl4REQsd0JBQVUsOERBQUN1Qjt3QkFBT0QsU0FBUzs0QkFBUWY7d0JBQVU7a0NBQUc7Ozs7O2tEQUFpQiw4REFBQ2dCO3dCQUFPRCxTQUFTZjtrQ0FBUTs7Ozs7Ozs7Ozs7Ozs7QUFJL0Y7R0E3RE1aOztRQU1VSCxrREFBU0E7OztLQU5uQkc7QUErRE4sK0RBQWVBLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlZ2lzdHJhdGlvbi50c3g/ODRjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtQXV0aCwgR2xvYmFsIH0gZnJvbSAnQC9zdHlsZXMvc3R5bGUnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IGxvZ2luIH0gZnJvbSAnQC9zZXJ2aWNlcy91c2VyL2xvZ2luQVBJJztcbmltcG9ydCB7IHJlZ2lzdHJhdGlvbiB9IGZyb20gJ0Avc2VydmljZXMvdXNlci9yZWdpc3RyYXRpb25BUEknO1xuXG5jb25zdCBSZWdpc3RyYXRpb24gPSAoKSA9PiB7XG5cdGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuXHRjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgW2lzTG9naW4sIHNldElzTG9naW5dID0gdXNlU3RhdGUodHJ1ZSlcblx0Y29uc3QgW2F1dGgsIHNldEF1dGhdID0gdXNlU3RhdGUoZmFsc2UpXG5cdGNvbnN0IFtlcnIsIHNldEVycl0gPSB1c2VTdGF0ZSgnJylcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuXHRhc3luYyBmdW5jdGlvbiBzaWduSW4oKSB7XG5cdFx0aWYgKGlzTG9naW4pIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0YXdhaXQgbG9naW4oZW1haWwsIHBhc3N3b3JkKVxuXHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdHNldEVycihlcnJvcilcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHNldEF1dGgodHJ1ZSlcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRhd2FpdCByZWdpc3RyYXRpb24oZW1haWwsIHBhc3N3b3JkKVxuXHRcdFx0XHRzZXRBdXRoKHRydWUpXG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcilcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc29sZS5sb2coZXJyKVxuXHRcdC8vIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLnRva2VuKSB7XG5cdFx0Ly8gXHRyb3V0ZXIuYmFjaygpXG5cdFx0Ly8gfVxuXHR9LCBbYXV0aF0pXG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PEdsb2JhbCAvPlxuXHRcdFx0PEZvcm1BdXRoPlxuXHRcdFx0XHR7aXNMb2dpbiA/IDxoMT7QkNCy0YLQvtGA0LjQt9Cw0YbQuNGPPC9oMT4gOiA8aDE+0KDQtdCz0LjRgdGC0YDQsNGG0LjRjzwvaDE+fVxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cItCS0LLQtdC00LjRgtC1IGVtYWlsIC4uLlwiIHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9IC8+XG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cItCS0LLQtdC00LjRgtC1INC/0LDRgNC+0LvRjCAuLi5cIiB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfSAvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRpc0xvZ2luID9cblx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHTQndC10YIg0LDQutC60LDRg9C90YLQsD8gPHNwYW4gb25DbGljaz17KCkgPT4gc2V0SXNMb2dpbihmYWxzZSl9PtCX0LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDRgtGM0YHRjzwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+IDpcblx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHTQldGB0YLRjCDQsNC60LrQsNGD0L3Rgj8gPHNwYW4gb25DbGljaz17KCkgPT4gc2V0SXNMb2dpbih0cnVlKX0+0JLQvtC50YLQuDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0e2lzTG9naW4gPyA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgc2lnbkluKCk7IH19PtCS0L7QudGC0Lg8L2J1dHRvbj4gOiA8YnV0dG9uIG9uQ2xpY2s9e3NpZ25Jbn0+0JfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNGC0YzRgdGPPC9idXR0b24+fVxuXHRcdFx0PC9Gb3JtQXV0aD5cblx0XHQ8Lz5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RyYXRpb25cbiJdLCJuYW1lcyI6WyJGb3JtQXV0aCIsIkdsb2JhbCIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJsb2dpbiIsInJlZ2lzdHJhdGlvbiIsIlJlZ2lzdHJhdGlvbiIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaXNMb2dpbiIsInNldElzTG9naW4iLCJhdXRoIiwic2V0QXV0aCIsImVyciIsInNldEVyciIsInJvdXRlciIsInNpZ25JbiIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImgxIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJvbkNsaWNrIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/registration.tsx\n"));

/***/ })

});