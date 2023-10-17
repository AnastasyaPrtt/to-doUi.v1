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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/style */ \"./src/styles/style.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Registration = ()=>{\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [isLogin, setIsLogin] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const signIn = ()=>{\n        if (isLogin) {\n            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://localhost:5000/api/user/login\", {\n                email,\n                password\n            }).then((data)=>{\n                localStorage.setItem(\"token\", data.data.token);\n            });\n            console.log(\"!\");\n            redirect();\n            console.log(\"!\");\n        } else {\n            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://localhost:5000/api/user/registration\", {\n                email,\n                password\n            }).then((data)=>{\n                localStorage.setItem(\"token\", data.data.token);\n            });\n            console.log(\"!\");\n            redirect();\n            console.log(\"!\");\n        }\n    };\n    const redirect = ()=>{\n        if (localStorage.getItem(\"token\")) {\n            router.back();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_1__.Global, {}, void 0, false, {\n                fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                lineNumber: 46,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_1__.FormAuth, {\n                children: [\n                    isLogin ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Авторизация\"\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 16\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Регистрация\"\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 39\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Введите email ...\",\n                        value: email,\n                        onChange: (e)=>setEmail(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        placeholder: \"Введите пароль ...\",\n                        value: password,\n                        onChange: (e)=>setPassword(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text\",\n                        children: isLogin ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Нет аккаунта? \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    onClick: ()=>setIsLogin(false),\n                                    children: \"Зарегистрироваться\"\n                                }, void 0, false, {\n                                    fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 23\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 8\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Есть аккаунт? \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    onClick: ()=>setIsLogin(true),\n                                    children: \"Войти\"\n                                }, void 0, false, {\n                                    fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 23\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 8\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 5\n                    }, undefined),\n                    isLogin ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: signIn,\n                        children: \"Войти\"\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 16\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: signIn,\n                        children: \"Зарегистрироваться\"\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 58\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                lineNumber: 47,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Registration, \"V1DnRcDzVdiZwfaK/9CrDKnxRz8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Registration;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Registration);\nvar _c;\n$RefreshReg$(_c, \"Registration\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcmVnaXN0cmF0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNrRDtBQUV4QjtBQUd5QjtBQUNYO0FBRXhDLE1BQU1NLGVBQWU7O0lBQ3BCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNLLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDTyxTQUFTQyxXQUFXLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU1TLFNBQVNSLHNEQUFTQTtJQUN4QixNQUFNUyxTQUFTO1FBQ2QsSUFBSUgsU0FBUztZQUNaVCxrREFDTSxDQUFDLHdDQUF3QztnQkFBRUs7Z0JBQU9FO1lBQVMsR0FDL0RPLElBQUksQ0FBQ0MsQ0FBQUE7Z0JBQ0xDLGFBQWFDLE9BQU8sQ0FBQyxTQUFTRixLQUFLQSxJQUFJLENBQUNHLEtBQUs7WUFDOUM7WUFDREMsUUFBUUMsR0FBRyxDQUFDO1lBQ1pDO1lBQ0FGLFFBQVFDLEdBQUcsQ0FBQztRQUNiLE9BQU87WUFDTnBCLGtEQUNNLENBQUMsK0NBQStDO2dCQUFFSztnQkFBT0U7WUFBUyxHQUN0RU8sSUFBSSxDQUFDQyxDQUFBQTtnQkFDTEMsYUFBYUMsT0FBTyxDQUFDLFNBQVNGLEtBQUtBLElBQUksQ0FBQ0csS0FBSztZQUM5QztZQUNEQyxRQUFRQyxHQUFHLENBQUM7WUFDWkM7WUFDQUYsUUFBUUMsR0FBRyxDQUFDO1FBQ2I7SUFHRDtJQUNBLE1BQU1DLFdBQVc7UUFDaEIsSUFBSUwsYUFBYU0sT0FBTyxDQUFDLFVBQVU7WUFDbENYLE9BQU9ZLElBQUk7UUFDWjtJQUNEO0lBRUEscUJBQ0M7OzBCQUNDLDhEQUFDeEIsaURBQU1BOzs7OzswQkFDUCw4REFBQ0QsbURBQVFBOztvQkFDUFcsd0JBQVUsOERBQUNlO2tDQUFHOzs7OztrREFBbUIsOERBQUNBO2tDQUFHOzs7Ozs7a0NBRXRDLDhEQUFDQzt3QkFBTUMsTUFBSzt3QkFBT0MsYUFBWTt3QkFBb0JDLE9BQU92Qjt3QkFBT3dCLFVBQVUsQ0FBQ0MsSUFBTXhCLFNBQVN3QixFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7OztrQ0FDekcsOERBQUNIO3dCQUFNQyxNQUFLO3dCQUFXQyxhQUFZO3dCQUFxQkMsT0FBT3JCO3dCQUFVc0IsVUFBVSxDQUFDQyxJQUFNdEIsWUFBWXNCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7O2tDQUNwSCw4REFBQ0k7d0JBQUlDLFdBQVU7a0NBRWJ4Qix3QkFDQyw4REFBQ3VCOztnQ0FBSTs4Q0FDVSw4REFBQ0U7b0NBQUtDLFNBQVMsSUFBTXpCLFdBQVc7OENBQVE7Ozs7Ozs7Ozs7O3NEQUV2RCw4REFBQ3NCOztnQ0FBSTs4Q0FDVSw4REFBQ0U7b0NBQUtDLFNBQVMsSUFBTXpCLFdBQVc7OENBQU87Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUl4REQsd0JBQVUsOERBQUMyQjt3QkFBT0QsU0FBU3ZCO2tDQUFROzs7OztrREFBaUIsOERBQUN3Qjt3QkFBT0QsU0FBU3ZCO2tDQUFROzs7Ozs7Ozs7Ozs7OztBQUlsRjtHQXpETVI7O1FBSVVELGtEQUFTQTs7O0tBSm5CQztBQTJETiwrREFBZUEsWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcmVnaXN0cmF0aW9uLnRzeD84NGM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvZ2luLCByZWdpc3RyYXRpb24gfSBmcm9tICdAL2h0dHAvdXNlckFQSSc7XG5pbXBvcnQgeyBGb3JtQXV0aCwgR2xvYmFsIH0gZnJvbSAnQC9zdHlsZXMvc3R5bGUnO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJ0AvdXRpbHMvY29udGV4dCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0LWxpdGUnO1xuaW1wb3J0IGp3dF9kZWNvZGUgZnJvbSAnand0LWRlY29kZSc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuY29uc3QgUmVnaXN0cmF0aW9uID0gKCkgPT4ge1xuXHRjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XG5cdGNvbnN0IFtpc0xvZ2luLCBzZXRJc0xvZ2luXSA9IHVzZVN0YXRlKHRydWUpXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cdGNvbnN0IHNpZ25JbiA9ICgpID0+IHtcblx0XHRpZiAoaXNMb2dpbikge1xuXHRcdFx0YXhpb3Ncblx0XHRcdFx0LnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdXNlci9sb2dpbicsIHsgZW1haWwsIHBhc3N3b3JkIH0pXG5cdFx0XHRcdC50aGVuKGRhdGEgPT4ge1xuXHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIGRhdGEuZGF0YS50b2tlbilcblx0XHRcdFx0fSlcblx0XHRcdGNvbnNvbGUubG9nKCchJylcblx0XHRcdHJlZGlyZWN0KClcblx0XHRcdGNvbnNvbGUubG9nKCchJylcblx0XHR9IGVsc2Uge1xuXHRcdFx0YXhpb3Ncblx0XHRcdFx0LnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdXNlci9yZWdpc3RyYXRpb24nLCB7IGVtYWlsLCBwYXNzd29yZCB9KVxuXHRcdFx0XHQudGhlbihkYXRhID0+IHtcblx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBkYXRhLmRhdGEudG9rZW4pXG5cdFx0XHRcdH0pXG5cdFx0XHRjb25zb2xlLmxvZygnIScpXG5cdFx0XHRyZWRpcmVjdCgpXG5cdFx0XHRjb25zb2xlLmxvZygnIScpXG5cdFx0fVxuXG5cblx0fVxuXHRjb25zdCByZWRpcmVjdCA9ICgpID0+IHtcblx0XHRpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykpIHtcblx0XHRcdHJvdXRlci5iYWNrKClcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8R2xvYmFsIC8+XG5cdFx0XHQ8Rm9ybUF1dGg+XG5cdFx0XHRcdHtpc0xvZ2luID8gPGgxPtCQ0LLRgtC+0YDQuNC30LDRhtC40Y88L2gxPiA6IDxoMT7QoNC10LPQuNGB0YLRgNCw0YbQuNGPPC9oMT59XG5cblx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLQktCy0LXQtNC40YLQtSBlbWFpbCAuLi5cIiB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfSAvPlxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCLQktCy0LXQtNC40YLQtSDQv9Cw0YDQvtC70YwgLi4uXCIgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0gLz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0aXNMb2dpbiA/XG5cdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx00J3QtdGCINCw0LrQutCw0YPQvdGC0LA/IDxzcGFuIG9uQ2xpY2s9eygpID0+IHNldElzTG9naW4oZmFsc2UpfT7Ql9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0YLRjNGB0Y88L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PiA6XG5cdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx00JXRgdGC0Ywg0LDQutC60LDRg9C90YI/IDxzcGFuIG9uQ2xpY2s9eygpID0+IHNldElzTG9naW4odHJ1ZSl9PtCS0L7QudGC0Lg8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdHtpc0xvZ2luID8gPGJ1dHRvbiBvbkNsaWNrPXtzaWduSW59PtCS0L7QudGC0Lg8L2J1dHRvbj4gOiA8YnV0dG9uIG9uQ2xpY2s9e3NpZ25Jbn0+0JfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNGC0YzRgdGPPC9idXR0b24+fVxuXHRcdFx0PC9Gb3JtQXV0aD5cblx0XHQ8Lz5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RyYXRpb25cbiJdLCJuYW1lcyI6WyJGb3JtQXV0aCIsIkdsb2JhbCIsImF4aW9zIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIlJlZ2lzdHJhdGlvbiIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaXNMb2dpbiIsInNldElzTG9naW4iLCJyb3V0ZXIiLCJzaWduSW4iLCJwb3N0IiwidGhlbiIsImRhdGEiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidG9rZW4iLCJjb25zb2xlIiwibG9nIiwicmVkaXJlY3QiLCJnZXRJdGVtIiwiYmFjayIsImgxIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJvbkNsaWNrIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/registration.tsx\n"));

/***/ })

});