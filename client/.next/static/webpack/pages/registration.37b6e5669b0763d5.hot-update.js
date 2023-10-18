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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/style */ \"./src/styles/style.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_user_loginAPI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services/user/loginAPI */ \"./src/services/user/loginAPI.ts\");\n/* harmony import */ var _services_user_registrationAPI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/services/user/registrationAPI */ \"./src/services/user/registrationAPI.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Registration = ()=>{\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [isLogin, setIsLogin] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [auth, setAuth] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [emailDirty, setEmailDirty] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [passwordDirty, setPasswordDirty] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [emailError, setEmailError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"Email не может быть пустым\");\n    const [passwordError, setPasswordError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"Пароль не может быть пустым\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const blurHandler = (e)=>{\n        switch(e.target.name){\n            case \"email\":\n                setEmailDirty(true);\n                break;\n            case \"password\":\n                setPasswordDirty(true);\n                break;\n        }\n    };\n    const validateEmail = (e)=>{\n        setEmail(e.target.value);\n        const re = /\\S+@\\S+\\.\\S+/;\n        if (!re.test(String(e.target.value).toLowerCase())) {\n            setEmailError(\"Некорректный пароль\");\n        } else {\n            setEmailError(\"\");\n        }\n    };\n    async function signIn() {\n        if (isLogin) {\n            await (0,_services_user_loginAPI__WEBPACK_IMPORTED_MODULE_4__.login)(email, password);\n            setAuth(true);\n        } else {\n            await (0,_services_user_registrationAPI__WEBPACK_IMPORTED_MODULE_5__.registration)(email, password);\n            setAuth(true);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (window.localStorage.token) {\n            router.back();\n        }\n    }, [\n        auth\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_1__.Global, {}, void 0, false, {\n                fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                lineNumber: 58,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_1__.FormAuth, {\n                children: [\n                    isLogin ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Авторизация\"\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 16\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Регистрация\"\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 39\n                    }, undefined),\n                    emailDirty && emailError && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: emailError\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 36\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Введите email ...\",\n                        value: email,\n                        onChange: (e)=>validateEmail(e),\n                        onBlur: (e)=>blurHandler(e)\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        placeholder: \"Введите пароль ...\",\n                        value: password,\n                        onChange: (e)=>setPassword(e.target.value),\n                        onBlur: (e)=>blurHandler(e)\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text\",\n                        children: isLogin ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Нет аккаунта? \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    onClick: ()=>setIsLogin(false),\n                                    children: \"Зарегистрироваться\"\n                                }, void 0, false, {\n                                    fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 23\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 8\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Есть аккаунт? \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    onClick: ()=>setIsLogin(true),\n                                    children: \"Войти\"\n                                }, void 0, false, {\n                                    fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 23\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 8\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 5\n                    }, undefined),\n                    isLogin ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>{\n                            signIn();\n                        },\n                        children: \"Войти\"\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 16\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: signIn,\n                        children: \"Зарегистрироваться\"\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 71\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                lineNumber: 59,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Registration, \"tRnJHp+tfH8bKS9tKmxW4SGHu+A=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Registration;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Registration);\nvar _c;\n$RefreshReg$(_c, \"Registration\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SS9GO0dBeEVNNUI7O1FBVVVILGtEQUFTQTs7O0tBVm5CRztBQTBFTiwrREFBZUEsWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcmVnaXN0cmF0aW9uLnRzeD84NGM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1BdXRoLCBHbG9iYWwgfSBmcm9tICdAL3N0eWxlcy9zdHlsZSc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgbG9naW4gfSBmcm9tICdAL3NlcnZpY2VzL3VzZXIvbG9naW5BUEknO1xuaW1wb3J0IHsgcmVnaXN0cmF0aW9uIH0gZnJvbSAnQC9zZXJ2aWNlcy91c2VyL3JlZ2lzdHJhdGlvbkFQSSc7XG5cbmNvbnN0IFJlZ2lzdHJhdGlvbiA9ICgpID0+IHtcblx0Y29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG5cdGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xuXHRjb25zdCBbaXNMb2dpbiwgc2V0SXNMb2dpbl0gPSB1c2VTdGF0ZSh0cnVlKVxuXHRjb25zdCBbYXV0aCwgc2V0QXV0aF0gPSB1c2VTdGF0ZShmYWxzZSlcblx0Y29uc3QgW2VtYWlsRGlydHksIHNldEVtYWlsRGlydHldID0gdXNlU3RhdGUoZmFsc2UpXG5cdGNvbnN0IFtwYXNzd29yZERpcnR5LCBzZXRQYXNzd29yZERpcnR5XSA9IHVzZVN0YXRlKGZhbHNlKVxuXHRjb25zdCBbZW1haWxFcnJvciwgc2V0RW1haWxFcnJvcl0gPSB1c2VTdGF0ZSgnRW1haWwg0L3QtSDQvNC+0LbQtdGCINCx0YvRgtGMINC/0YPRgdGC0YvQvCcpXG5cdGNvbnN0IFtwYXNzd29yZEVycm9yLCBzZXRQYXNzd29yZEVycm9yXSA9IHVzZVN0YXRlKCfQn9Cw0YDQvtC70Ywg0L3QtSDQvNC+0LbQtdGCINCx0YvRgtGMINC/0YPRgdGC0YvQvCcpXG5cblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuXHRjb25zdCBibHVySGFuZGxlciA9IChlKSA9PiB7XG5cdFx0c3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XG5cdFx0XHRjYXNlICdlbWFpbCc6XG5cdFx0XHRcdHNldEVtYWlsRGlydHkodHJ1ZSlcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ3Bhc3N3b3JkJzpcblx0XHRcdFx0c2V0UGFzc3dvcmREaXJ0eSh0cnVlKVxuXHRcdFx0XHRicmVha1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IHZhbGlkYXRlRW1haWwgPSAoZSkgPT4ge1xuXHRcdHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKVxuXHRcdGNvbnN0IHJlID0gL1xcUytAXFxTK1xcLlxcUysvO1xuXHRcdGlmICghcmUudGVzdChTdHJpbmcoZS50YXJnZXQudmFsdWUpLnRvTG93ZXJDYXNlKCkpKSB7XG5cdFx0XHRzZXRFbWFpbEVycm9yKCfQndC10LrQvtGA0YDQtdC60YLQvdGL0Lkg0L/QsNGA0L7Qu9GMJylcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2V0RW1haWxFcnJvcignJylcblx0XHR9XG5cdH1cblxuXHRhc3luYyBmdW5jdGlvbiBzaWduSW4oKSB7XG5cdFx0aWYgKGlzTG9naW4pIHtcblx0XHRcdGF3YWl0IGxvZ2luKGVtYWlsLCBwYXNzd29yZClcblx0XHRcdHNldEF1dGgodHJ1ZSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0YXdhaXQgcmVnaXN0cmF0aW9uKGVtYWlsLCBwYXNzd29yZClcblx0XHRcdHNldEF1dGgodHJ1ZSlcblx0XHR9XG5cdH1cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLnRva2VuKSB7XG5cdFx0XHRyb3V0ZXIuYmFjaygpXG5cdFx0fVxuXHR9LCBbYXV0aF0pXG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PEdsb2JhbCAvPlxuXHRcdFx0PEZvcm1BdXRoPlxuXHRcdFx0XHR7aXNMb2dpbiA/IDxoMT7QkNCy0YLQvtGA0LjQt9Cw0YbQuNGPPC9oMT4gOiA8aDE+0KDQtdCz0LjRgdGC0YDQsNGG0LjRjzwvaDE+fVxuXHRcdFx0XHR7KGVtYWlsRGlydHkgJiYgZW1haWxFcnJvcikgJiYgPGRpdj57ZW1haWxFcnJvcn08L2Rpdj59XG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi0JLQstC10LTQuNGC0LUgZW1haWwgLi4uXCIgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17KGUpID0+IHZhbGlkYXRlRW1haWwoZSl9IG9uQmx1cj17KGUpID0+IGJsdXJIYW5kbGVyKGUpfSAvPlxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCLQktCy0LXQtNC40YLQtSDQv9Cw0YDQvtC70YwgLi4uXCIgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0gb25CbHVyPXsoZSkgPT4gYmx1ckhhbmRsZXIoZSl9IC8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGlzTG9naW4gP1xuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdNCd0LXRgiDQsNC60LrQsNGD0L3RgtCwPyA8c3BhbiBvbkNsaWNrPXsoKSA9PiBzZXRJc0xvZ2luKGZhbHNlKX0+0JfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNGC0YzRgdGPPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj4gOlxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdNCV0YHRgtGMINCw0LrQutCw0YPQvdGCPyA8c3BhbiBvbkNsaWNrPXsoKSA9PiBzZXRJc0xvZ2luKHRydWUpfT7QktC+0LnRgtC4PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7aXNMb2dpbiA/IDxidXR0b24gb25DbGljaz17KCkgPT4geyBzaWduSW4oKTsgfX0+0JLQvtC50YLQuDwvYnV0dG9uPiA6IDxidXR0b24gb25DbGljaz17c2lnbklufT7Ql9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0YLRjNGB0Y88L2J1dHRvbj59XG5cdFx0XHQ8L0Zvcm1BdXRoPlxuXHRcdDwvPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdHJhdGlvblxuIl0sIm5hbWVzIjpbIkZvcm1BdXRoIiwiR2xvYmFsIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsImxvZ2luIiwicmVnaXN0cmF0aW9uIiwiUmVnaXN0cmF0aW9uIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJpc0xvZ2luIiwic2V0SXNMb2dpbiIsImF1dGgiLCJzZXRBdXRoIiwiZW1haWxEaXJ0eSIsInNldEVtYWlsRGlydHkiLCJwYXNzd29yZERpcnR5Iiwic2V0UGFzc3dvcmREaXJ0eSIsImVtYWlsRXJyb3IiLCJzZXRFbWFpbEVycm9yIiwicGFzc3dvcmRFcnJvciIsInNldFBhc3N3b3JkRXJyb3IiLCJyb3V0ZXIiLCJibHVySGFuZGxlciIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsaWRhdGVFbWFpbCIsInZhbHVlIiwicmUiLCJ0ZXN0IiwiU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJzaWduSW4iLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJ0b2tlbiIsImJhY2siLCJoMSIsImRpdiIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJvbkJsdXIiLCJjbGFzc05hbWUiLCJzcGFuIiwib25DbGljayIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/registration.tsx\n"));

/***/ })

});