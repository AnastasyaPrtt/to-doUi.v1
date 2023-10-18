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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/style */ \"./src/styles/style.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_user_loginAPI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services/user/loginAPI */ \"./src/services/user/loginAPI.ts\");\n/* harmony import */ var _services_user_registrationAPI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/services/user/registrationAPI */ \"./src/services/user/registrationAPI.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Registration = ()=>{\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [isLogin, setIsLogin] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [auth, setAuth] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [emailDirty, setEmailDirty] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [passwordDirty, setPasswordDirty] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [emailError, setEmailError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"Email не может быть пустым\");\n    const [passwordError, setPasswordError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"Пароль не может быть пустым\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const blurHandler = (e)=>{\n        switch(e.target.name){\n            case \"email\":\n                setEmailDirty(true);\n                break;\n            case \"password\":\n                setPasswordDirty(true);\n                break;\n        }\n    };\n    const validateEmail = (e)=>{\n        const re = /\\S+@\\S+\\.\\S+/;\n        if (!re.test(String(e.target.value).toLowerCase())) {\n            setEmailError(\"Некорректный пароль\");\n        } else {\n            setEmailError(\"\");\n            setEmail(e.target.value);\n        }\n    };\n    async function signIn() {\n        if (isLogin) {\n            await (0,_services_user_loginAPI__WEBPACK_IMPORTED_MODULE_4__.login)(email, password);\n            setAuth(true);\n        } else {\n            await (0,_services_user_registrationAPI__WEBPACK_IMPORTED_MODULE_5__.registration)(email, password);\n            setAuth(true);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (window.localStorage.token) {\n            router.back();\n        }\n    }, [\n        auth\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_1__.Global, {}, void 0, false, {\n                fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                lineNumber: 59,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_1__.FormAuth, {\n                children: [\n                    isLogin ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Авторизация\"\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 16\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Регистрация\"\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 39\n                    }, undefined),\n                    emailDirty && emailError && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: emailError\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 36\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Введите email ...\",\n                        value: email,\n                        onChange: (e)=>validateEmail(e),\n                        onBlur: (e)=>blurHandler(e)\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        placeholder: \"Введите пароль ...\",\n                        value: password,\n                        onChange: (e)=>setPassword(e.target.value),\n                        onBlur: (e)=>blurHandler(e)\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text\",\n                        children: isLogin ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Нет аккаунта? \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    onClick: ()=>setIsLogin(false),\n                                    children: \"Зарегистрироваться\"\n                                }, void 0, false, {\n                                    fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 23\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 8\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Есть аккаунт? \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    onClick: ()=>setIsLogin(true),\n                                    children: \"Войти\"\n                                }, void 0, false, {\n                                    fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 23\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 8\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 5\n                    }, undefined),\n                    isLogin ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>{\n                            signIn();\n                        },\n                        children: \"Войти\"\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 16\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: signIn,\n                        children: \"Зарегистрироваться\"\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 71\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                lineNumber: 60,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Registration, \"tRnJHp+tfH8bKS9tKmxW4SGHu+A=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Registration;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Registration);\nvar _c;\n$RefreshReg$(_c, \"Registration\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RjtHQXpFTTVCOztRQVVVSCxrREFBU0E7OztLQVZuQkc7QUEyRU4sK0RBQWVBLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlZ2lzdHJhdGlvbi50c3g/ODRjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtQXV0aCwgR2xvYmFsIH0gZnJvbSAnQC9zdHlsZXMvc3R5bGUnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IGxvZ2luIH0gZnJvbSAnQC9zZXJ2aWNlcy91c2VyL2xvZ2luQVBJJztcbmltcG9ydCB7IHJlZ2lzdHJhdGlvbiB9IGZyb20gJ0Avc2VydmljZXMvdXNlci9yZWdpc3RyYXRpb25BUEknO1xuXG5jb25zdCBSZWdpc3RyYXRpb24gPSAoKSA9PiB7XG5cdGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuXHRjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgW2lzTG9naW4sIHNldElzTG9naW5dID0gdXNlU3RhdGUodHJ1ZSlcblx0Y29uc3QgW2F1dGgsIHNldEF1dGhdID0gdXNlU3RhdGUoZmFsc2UpXG5cdGNvbnN0IFtlbWFpbERpcnR5LCBzZXRFbWFpbERpcnR5XSA9IHVzZVN0YXRlKGZhbHNlKVxuXHRjb25zdCBbcGFzc3dvcmREaXJ0eSwgc2V0UGFzc3dvcmREaXJ0eV0gPSB1c2VTdGF0ZShmYWxzZSlcblx0Y29uc3QgW2VtYWlsRXJyb3IsIHNldEVtYWlsRXJyb3JdID0gdXNlU3RhdGUoJ0VtYWlsINC90LUg0LzQvtC20LXRgiDQsdGL0YLRjCDQv9GD0YHRgtGL0LwnKVxuXHRjb25zdCBbcGFzc3dvcmRFcnJvciwgc2V0UGFzc3dvcmRFcnJvcl0gPSB1c2VTdGF0ZSgn0J/QsNGA0L7Qu9GMINC90LUg0LzQvtC20LXRgiDQsdGL0YLRjCDQv9GD0YHRgtGL0LwnKVxuXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cblx0Y29uc3QgYmx1ckhhbmRsZXIgPSAoZSkgPT4ge1xuXHRcdHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xuXHRcdFx0Y2FzZSAnZW1haWwnOlxuXHRcdFx0XHRzZXRFbWFpbERpcnR5KHRydWUpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdwYXNzd29yZCc6XG5cdFx0XHRcdHNldFBhc3N3b3JkRGlydHkodHJ1ZSlcblx0XHRcdFx0YnJlYWtcblx0XHR9XG5cdH1cblxuXHRjb25zdCB2YWxpZGF0ZUVtYWlsID0gKGUpID0+IHtcblxuXHRcdGNvbnN0IHJlID0gL1xcUytAXFxTK1xcLlxcUysvO1xuXHRcdGlmICghcmUudGVzdChTdHJpbmcoZS50YXJnZXQudmFsdWUpLnRvTG93ZXJDYXNlKCkpKSB7XG5cdFx0XHRzZXRFbWFpbEVycm9yKCfQndC10LrQvtGA0YDQtdC60YLQvdGL0Lkg0L/QsNGA0L7Qu9GMJylcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2V0RW1haWxFcnJvcignJylcblx0XHRcdHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKVxuXHRcdH1cblx0fVxuXG5cdGFzeW5jIGZ1bmN0aW9uIHNpZ25JbigpIHtcblx0XHRpZiAoaXNMb2dpbikge1xuXHRcdFx0YXdhaXQgbG9naW4oZW1haWwsIHBhc3N3b3JkKVxuXHRcdFx0c2V0QXV0aCh0cnVlKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRhd2FpdCByZWdpc3RyYXRpb24oZW1haWwsIHBhc3N3b3JkKVxuXHRcdFx0c2V0QXV0aCh0cnVlKVxuXHRcdH1cblx0fVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UudG9rZW4pIHtcblx0XHRcdHJvdXRlci5iYWNrKClcblx0XHR9XG5cdH0sIFthdXRoXSlcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8R2xvYmFsIC8+XG5cdFx0XHQ8Rm9ybUF1dGg+XG5cdFx0XHRcdHtpc0xvZ2luID8gPGgxPtCQ0LLRgtC+0YDQuNC30LDRhtC40Y88L2gxPiA6IDxoMT7QoNC10LPQuNGB0YLRgNCw0YbQuNGPPC9oMT59XG5cdFx0XHRcdHsoZW1haWxEaXJ0eSAmJiBlbWFpbEVycm9yKSAmJiA8ZGl2PntlbWFpbEVycm9yfTwvZGl2Pn1cblx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLQktCy0LXQtNC40YLQtSBlbWFpbCAuLi5cIiB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXsoZSkgPT4gdmFsaWRhdGVFbWFpbChlKX0gb25CbHVyPXsoZSkgPT4gYmx1ckhhbmRsZXIoZSl9IC8+XG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cItCS0LLQtdC00LjRgtC1INC/0LDRgNC+0LvRjCAuLi5cIiB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfSBvbkJsdXI9eyhlKSA9PiBibHVySGFuZGxlcihlKX0gLz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0aXNMb2dpbiA/XG5cdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx00J3QtdGCINCw0LrQutCw0YPQvdGC0LA/IDxzcGFuIG9uQ2xpY2s9eygpID0+IHNldElzTG9naW4oZmFsc2UpfT7Ql9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0YLRjNGB0Y88L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PiA6XG5cdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx00JXRgdGC0Ywg0LDQutC60LDRg9C90YI/IDxzcGFuIG9uQ2xpY2s9eygpID0+IHNldElzTG9naW4odHJ1ZSl9PtCS0L7QudGC0Lg8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdHtpc0xvZ2luID8gPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHNpZ25JbigpOyB9fT7QktC+0LnRgtC4PC9idXR0b24+IDogPGJ1dHRvbiBvbkNsaWNrPXtzaWduSW59PtCX0LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDRgtGM0YHRjzwvYnV0dG9uPn1cblx0XHRcdDwvRm9ybUF1dGg+XG5cdFx0PC8+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0cmF0aW9uXG4iXSwibmFtZXMiOlsiRm9ybUF1dGgiLCJHbG9iYWwiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwibG9naW4iLCJyZWdpc3RyYXRpb24iLCJSZWdpc3RyYXRpb24iLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImlzTG9naW4iLCJzZXRJc0xvZ2luIiwiYXV0aCIsInNldEF1dGgiLCJlbWFpbERpcnR5Iiwic2V0RW1haWxEaXJ0eSIsInBhc3N3b3JkRGlydHkiLCJzZXRQYXNzd29yZERpcnR5IiwiZW1haWxFcnJvciIsInNldEVtYWlsRXJyb3IiLCJwYXNzd29yZEVycm9yIiwic2V0UGFzc3dvcmRFcnJvciIsInJvdXRlciIsImJsdXJIYW5kbGVyIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWxpZGF0ZUVtYWlsIiwicmUiLCJ0ZXN0IiwiU3RyaW5nIiwidmFsdWUiLCJ0b0xvd2VyQ2FzZSIsInNpZ25JbiIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsInRva2VuIiwiYmFjayIsImgxIiwiZGl2IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsIm9uQmx1ciIsImNsYXNzTmFtZSIsInNwYW4iLCJvbkNsaWNrIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/registration.tsx\n"));

/***/ })

});