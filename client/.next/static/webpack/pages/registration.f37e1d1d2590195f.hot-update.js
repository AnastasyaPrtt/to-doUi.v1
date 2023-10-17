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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/style */ \"./src/styles/style.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Registration = ()=>{\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [isLogin, setIsLogin] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const signIn = ()=>{\n        if (isLogin) {\n            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://localhost:7000/api/user/login\", {\n                email,\n                password\n            }).then((data)=>{\n                localStorage.setItem(\"token\", data.data.token);\n            }).catch((err)=>console.error(err));\n            redirect();\n        } else {\n            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://localhost:7000/api/user/registration\", {\n                email,\n                password\n            }).then((data)=>{\n                localStorage.setItem(\"token\", data.data.token);\n                console.log(data.data.token);\n            }).catch((err)=>console.error(err));\n            redirect();\n        }\n    };\n    const redirect = ()=>{\n        if (localStorage.getItem(\"token\")) {\n            router.back();\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{}, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_1__.Global, {}, void 0, false, {\n                fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                lineNumber: 45,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_1__.FormAuth, {\n                children: [\n                    isLogin ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Авторизация\"\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 16\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Регистрация\"\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 39\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Введите email ...\",\n                        value: email,\n                        onChange: (e)=>setEmail(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        placeholder: \"Введите пароль ...\",\n                        value: password,\n                        onChange: (e)=>setPassword(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text\",\n                        children: isLogin ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Нет аккаунта? \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    onClick: ()=>setIsLogin(false),\n                                    children: \"Зарегистрироваться\"\n                                }, void 0, false, {\n                                    fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 23\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 8\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Есть аккаунт? \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    onClick: ()=>setIsLogin(true),\n                                    children: \"Войти\"\n                                }, void 0, false, {\n                                    fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 23\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 8\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 5\n                    }, undefined),\n                    isLogin ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>{\n                            signIn();\n                        },\n                        children: \"Войти\"\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 16\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: signIn,\n                        children: \"Зарегистрироваться\"\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 70\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/user/Desktop/to-doUi.v1/client/src/pages/registration.tsx\",\n                lineNumber: 46,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Registration, \"H45YlgVBq2yEz3LM/gxwTOFpG8s=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Registration;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Registration);\nvar _c;\n$RefreshReg$(_c, \"Registration\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcmVnaXN0cmF0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFrRDtBQUN4QjtBQUN3QjtBQUNWO0FBRXhDLE1BQU1PLGVBQWU7O0lBQ3BCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNLLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDTyxTQUFTQyxXQUFXLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU1TLFNBQVNSLHNEQUFTQTtJQUV4QixNQUFNUyxTQUFTO1FBQ2QsSUFBSUgsU0FBUztZQUNaVixrREFDTSxDQUFDLHdDQUF3QztnQkFBRU07Z0JBQU9FO1lBQVMsR0FDL0RPLElBQUksQ0FBQ0MsQ0FBQUE7Z0JBQ0xDLGFBQWFDLE9BQU8sQ0FBQyxTQUFTRixLQUFLQSxJQUFJLENBQUNHLEtBQUs7WUFDOUMsR0FDQ0MsS0FBSyxDQUFDLENBQUNDLE1BQVFDLFFBQVFDLEtBQUssQ0FBQ0Y7WUFDL0JHO1FBQ0QsT0FBTztZQUNOeEIsa0RBQ00sQ0FBQywrQ0FBK0M7Z0JBQUVNO2dCQUFPRTtZQUFTLEdBQ3RFTyxJQUFJLENBQUNDLENBQUFBO2dCQUNMQyxhQUFhQyxPQUFPLENBQUMsU0FBU0YsS0FBS0EsSUFBSSxDQUFDRyxLQUFLO2dCQUM3Q0csUUFBUUcsR0FBRyxDQUFDVCxLQUFLQSxJQUFJLENBQUNHLEtBQUs7WUFDNUIsR0FDQ0MsS0FBSyxDQUFDLENBQUNDLE1BQVFDLFFBQVFDLEtBQUssQ0FBQ0Y7WUFDL0JHO1FBQ0Q7SUFFRDtJQUVBLE1BQU1BLFdBQVc7UUFDaEIsSUFBSVAsYUFBYVMsT0FBTyxDQUFDLFVBQVU7WUFDbENkLE9BQU9lLElBQUk7UUFDWjtJQUNEO0lBQ0F6QixnREFBU0EsQ0FBQyxLQUVWLEdBQUcsRUFBRTtJQUVMLHFCQUNDOzswQkFDQyw4REFBQ0gsaURBQU1BOzs7OzswQkFDUCw4REFBQ0QsbURBQVFBOztvQkFDUFksd0JBQVUsOERBQUNrQjtrQ0FBRzs7Ozs7a0RBQW1CLDhEQUFDQTtrQ0FBRzs7Ozs7O2tDQUN0Qyw4REFBQ0M7d0JBQU1DLE1BQUs7d0JBQU9DLGFBQVk7d0JBQW9CQyxPQUFPMUI7d0JBQU8yQixVQUFVLENBQUNDLElBQU0zQixTQUFTMkIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7a0NBQ3pHLDhEQUFDSDt3QkFBTUMsTUFBSzt3QkFBV0MsYUFBWTt3QkFBcUJDLE9BQU94Qjt3QkFBVXlCLFVBQVUsQ0FBQ0MsSUFBTXpCLFlBQVl5QixFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7OztrQ0FDcEgsOERBQUNJO3dCQUFJQyxXQUFVO2tDQUViM0Isd0JBQ0MsOERBQUMwQjs7Z0NBQUk7OENBQ1UsOERBQUNFO29DQUFLQyxTQUFTLElBQU01QixXQUFXOzhDQUFROzs7Ozs7Ozs7OztzREFFdkQsOERBQUN5Qjs7Z0NBQUk7OENBQ1UsOERBQUNFO29DQUFLQyxTQUFTLElBQU01QixXQUFXOzhDQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztvQkFJeERELHdCQUFVLDhEQUFDOEI7d0JBQU9ELFNBQVM7NEJBQVExQjt3QkFBUztrQ0FBRzs7Ozs7a0RBQWlCLDhEQUFDMkI7d0JBQU9ELFNBQVMxQjtrQ0FBUTs7Ozs7Ozs7Ozs7Ozs7QUFJOUY7R0EzRE1SOztRQUlVRCxrREFBU0E7OztLQUpuQkM7QUE2RE4sK0RBQWVBLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlZ2lzdHJhdGlvbi50c3g/ODRjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtQXV0aCwgR2xvYmFsIH0gZnJvbSAnQC9zdHlsZXMvc3R5bGUnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IFJlZ2lzdHJhdGlvbiA9ICgpID0+IHtcblx0Y29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG5cdGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xuXHRjb25zdCBbaXNMb2dpbiwgc2V0SXNMb2dpbl0gPSB1c2VTdGF0ZSh0cnVlKVxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG5cdGNvbnN0IHNpZ25JbiA9ICgpID0+IHtcblx0XHRpZiAoaXNMb2dpbikge1xuXHRcdFx0YXhpb3Ncblx0XHRcdFx0LnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NzAwMC9hcGkvdXNlci9sb2dpbicsIHsgZW1haWwsIHBhc3N3b3JkIH0pXG5cdFx0XHRcdC50aGVuKGRhdGEgPT4ge1xuXHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIGRhdGEuZGF0YS50b2tlbilcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSlcblx0XHRcdHJlZGlyZWN0KClcblx0XHR9IGVsc2Uge1xuXHRcdFx0YXhpb3Ncblx0XHRcdFx0LnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NzAwMC9hcGkvdXNlci9yZWdpc3RyYXRpb24nLCB7IGVtYWlsLCBwYXNzd29yZCB9KVxuXHRcdFx0XHQudGhlbihkYXRhID0+IHtcblx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBkYXRhLmRhdGEudG9rZW4pXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZGF0YS5kYXRhLnRva2VuKVxuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKVxuXHRcdFx0cmVkaXJlY3QoKVxuXHRcdH1cblxuXHR9XG5cblx0Y29uc3QgcmVkaXJlY3QgPSAoKSA9PiB7XG5cdFx0aWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpKSB7XG5cdFx0XHRyb3V0ZXIuYmFjaygpXG5cdFx0fVxuXHR9XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cblx0fSwgW10pXG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PEdsb2JhbCAvPlxuXHRcdFx0PEZvcm1BdXRoPlxuXHRcdFx0XHR7aXNMb2dpbiA/IDxoMT7QkNCy0YLQvtGA0LjQt9Cw0YbQuNGPPC9oMT4gOiA8aDE+0KDQtdCz0LjRgdGC0YDQsNGG0LjRjzwvaDE+fVxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cItCS0LLQtdC00LjRgtC1IGVtYWlsIC4uLlwiIHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9IC8+XG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cItCS0LLQtdC00LjRgtC1INC/0LDRgNC+0LvRjCAuLi5cIiB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfSAvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRpc0xvZ2luID9cblx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHTQndC10YIg0LDQutC60LDRg9C90YLQsD8gPHNwYW4gb25DbGljaz17KCkgPT4gc2V0SXNMb2dpbihmYWxzZSl9PtCX0LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDRgtGM0YHRjzwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+IDpcblx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHTQldGB0YLRjCDQsNC60LrQsNGD0L3Rgj8gPHNwYW4gb25DbGljaz17KCkgPT4gc2V0SXNMb2dpbih0cnVlKX0+0JLQvtC50YLQuDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0e2lzTG9naW4gPyA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgc2lnbkluKCkgfX0+0JLQvtC50YLQuDwvYnV0dG9uPiA6IDxidXR0b24gb25DbGljaz17c2lnbklufT7Ql9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0YLRjNGB0Y88L2J1dHRvbj59XG5cdFx0XHQ8L0Zvcm1BdXRoPlxuXHRcdDwvPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdHJhdGlvblxuIl0sIm5hbWVzIjpbIkZvcm1BdXRoIiwiR2xvYmFsIiwiYXhpb3MiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiUmVnaXN0cmF0aW9uIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJpc0xvZ2luIiwic2V0SXNMb2dpbiIsInJvdXRlciIsInNpZ25JbiIsInBvc3QiLCJ0aGVuIiwiZGF0YSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJ0b2tlbiIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwicmVkaXJlY3QiLCJsb2ciLCJnZXRJdGVtIiwiYmFjayIsImgxIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJvbkNsaWNrIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/registration.tsx\n"));

/***/ })

});