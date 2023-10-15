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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _http_userAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/http/userAPI */ \"./src/http/userAPI.ts\");\n/* harmony import */ var _styles_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/style */ \"./src/styles/style.ts\");\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-react-lite */ \"./node_modules/mobx-react-lite/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/context */ \"./src/utils/context.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Auth = _s((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__.observer)(_c = _s(()=>{\n    _s();\n    const { user } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_utils_context__WEBPACK_IMPORTED_MODULE_5__.Context);\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [isLogin, setIsLogin] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);\n    const signIn = async ()=>{\n        try {\n            let data;\n            if (isLogin) {\n                data = await (0,_http_userAPI__WEBPACK_IMPORTED_MODULE_1__.login)(email, password);\n            } else {\n                data = await (0,_http_userAPI__WEBPACK_IMPORTED_MODULE_1__.registration)(email, password);\n            }\n            console.log(data);\n        } catch (error) {\n            alert(error);\n        }\n    // try {\n    // \tlet data;\n    // \tif (isLogin) {\n    // \t\tdata = await login(email, password)\n    // \t} else {\n    // \t\tdata = await registration(email, password)\n    // \t}\n    // \tconsole.log(data)\n    // } catch (error) {\n    // \talert(error)\n    // }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        console.log(user.isAuth);\n    }, [\n        user.isAuth\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_2__.Global, {}, void 0, false, {\n                fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\auth.tsx\",\n                lineNumber: 47,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_2__.FormAuth, {\n                children: [\n                    isLogin ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Авторизация\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\auth.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 16\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Регистрация\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\auth.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 39\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Введите email ...\",\n                        value: email,\n                        onChange: (e)=>setEmail(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\auth.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        placeholder: \"Введите пароль ...\",\n                        value: password,\n                        onChange: (e)=>setPassword(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\auth.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text\",\n                        children: isLogin ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Нет аккаунта? \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    onClick: ()=>setIsLogin(false),\n                                    children: \"Зарегистрироваться\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\auth.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 23\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\auth.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 8\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Есть аккаунт? \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    onClick: ()=>setIsLogin(true),\n                                    children: \"Войти\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\auth.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 23\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\auth.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 8\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\auth.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 5\n                    }, undefined),\n                    isLogin ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: signIn,\n                        children: \"Войти\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\auth.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 16\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: signIn,\n                        children: \"Зарегистрироваться\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\auth.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 58\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\auth.tsx\",\n                lineNumber: 48,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true);\n}, \"f3HpqhJqHiJWtbuuk/s5nsw6TjM=\")), \"f3HpqhJqHiJWtbuuk/s5nsw6TjM=\");\n_c1 = Auth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Auth);\nvar _c, _c1;\n$RefreshReg$(_c, \"Auth$observer\");\n$RefreshReg$(_c1, \"Auth\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hdXRoLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFxRDtBQUNIO0FBQ1A7QUFDYTtBQUNkO0FBRzFDLE1BQU1TLE9BQU9MLEdBQUFBLHlEQUFRQSxTQUFDOztJQUNyQixNQUFNLEVBQUVNLElBQUksRUFBRSxHQUFHTCxpREFBVUEsQ0FBQ0csbURBQU9BO0lBRW5DLE1BQU0sQ0FBQ0csT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNNLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDUSxTQUFTQyxXQUFXLEdBQUdULCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1VLFNBQVM7UUFDZCxJQUFJO1lBQ0gsSUFBSUM7WUFDSixJQUFJSCxTQUFTO2dCQUNaRyxPQUFPLE1BQU1sQixvREFBS0EsQ0FBQ1csT0FBT0U7WUFDM0IsT0FBTztnQkFDTkssT0FBTyxNQUFNakIsMkRBQVlBLENBQUNVLE9BQU9FO1lBQ2xDO1lBQ0FNLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDYixFQUFFLE9BQU9HLE9BQU87WUFDZkMsTUFBTUQ7UUFDUDtJQUNBLFFBQVE7SUFDUixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHdDQUF3QztJQUN4QyxZQUFZO0lBQ1osK0NBQStDO0lBQy9DLEtBQUs7SUFDTCxxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixJQUFJO0lBRUw7SUFFQWYsZ0RBQVNBLENBQUM7UUFDVGEsUUFBUUMsR0FBRyxDQUFDVixLQUFLYSxNQUFNO0lBQ3hCLEdBQUc7UUFBQ2IsS0FBS2EsTUFBTTtLQUFDO0lBRWhCLHFCQUNDOzswQkFDQyw4REFBQ3BCLGlEQUFNQTs7Ozs7MEJBQ1AsOERBQUNELG1EQUFRQTs7b0JBQ1BhLHdCQUFVLDhEQUFDUztrQ0FBRzs7Ozs7a0RBQW1CLDhEQUFDQTtrQ0FBRzs7Ozs7O2tDQUV0Qyw4REFBQ0M7d0JBQU1DLE1BQUs7d0JBQU9DLGFBQVk7d0JBQW9CQyxPQUFPakI7d0JBQU9rQixVQUFVLENBQUNDLElBQU1sQixTQUFTa0IsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7a0NBQ3pHLDhEQUFDSDt3QkFBTUMsTUFBSzt3QkFBV0MsYUFBWTt3QkFBcUJDLE9BQU9mO3dCQUFVZ0IsVUFBVSxDQUFDQyxJQUFNaEIsWUFBWWdCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7O2tDQUNwSCw4REFBQ0k7d0JBQUlDLFdBQVU7a0NBRWJsQix3QkFDQyw4REFBQ2lCOztnQ0FBSTs4Q0FDVSw4REFBQ0U7b0NBQUtDLFNBQVMsSUFBTW5CLFdBQVc7OENBQVE7Ozs7Ozs7Ozs7O3NEQUV2RCw4REFBQ2dCOztnQ0FBSTs4Q0FDVSw4REFBQ0U7b0NBQUtDLFNBQVMsSUFBTW5CLFdBQVc7OENBQU87Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUl4REQsd0JBQVUsOERBQUNxQjt3QkFBT0QsU0FBU2xCO2tDQUFROzs7OztrREFBaUIsOERBQUNtQjt3QkFBT0QsU0FBU2xCO2tDQUFROzs7Ozs7Ozs7Ozs7OztBQUlsRjs7QUFFQSwrREFBZVIsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9hdXRoLnRzeD8yN2U5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvZ2luLCByZWdpc3RyYXRpb24gfSBmcm9tICdAL2h0dHAvdXNlckFQSSc7XHJcbmltcG9ydCB7IEZvcm1BdXRoLCBHbG9iYWwgfSBmcm9tICdAL3N0eWxlcy9zdHlsZSc7XHJcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdC1saXRlJztcclxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJ0AvdXRpbHMvY29udGV4dCc7XHJcblxyXG5cclxuY29uc3QgQXV0aCA9IG9ic2VydmVyKCgpID0+IHtcclxuXHRjb25zdCB7IHVzZXIgfSA9IHVzZUNvbnRleHQoQ29udGV4dClcclxuXHJcblx0Y29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcblx0Y29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcblx0Y29uc3QgW2lzTG9naW4sIHNldElzTG9naW5dID0gdXNlU3RhdGUodHJ1ZSlcclxuXHJcblx0Y29uc3Qgc2lnbkluID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0bGV0IGRhdGE7XHJcblx0XHRcdGlmIChpc0xvZ2luKSB7XHJcblx0XHRcdFx0ZGF0YSA9IGF3YWl0IGxvZ2luKGVtYWlsLCBwYXNzd29yZClcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRkYXRhID0gYXdhaXQgcmVnaXN0cmF0aW9uKGVtYWlsLCBwYXNzd29yZClcclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zb2xlLmxvZyhkYXRhKVxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0YWxlcnQoZXJyb3IpXHJcblx0XHR9XHJcblx0XHQvLyB0cnkge1xyXG5cdFx0Ly8gXHRsZXQgZGF0YTtcclxuXHRcdC8vIFx0aWYgKGlzTG9naW4pIHtcclxuXHRcdC8vIFx0XHRkYXRhID0gYXdhaXQgbG9naW4oZW1haWwsIHBhc3N3b3JkKVxyXG5cdFx0Ly8gXHR9IGVsc2Uge1xyXG5cdFx0Ly8gXHRcdGRhdGEgPSBhd2FpdCByZWdpc3RyYXRpb24oZW1haWwsIHBhc3N3b3JkKVxyXG5cdFx0Ly8gXHR9XHJcblx0XHQvLyBcdGNvbnNvbGUubG9nKGRhdGEpXHJcblx0XHQvLyB9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0Ly8gXHRhbGVydChlcnJvcilcclxuXHRcdC8vIH1cclxuXHJcblx0fVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2codXNlci5pc0F1dGgpXHJcblx0fSwgW3VzZXIuaXNBdXRoXSlcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxHbG9iYWwgLz5cclxuXHRcdFx0PEZvcm1BdXRoPlxyXG5cdFx0XHRcdHtpc0xvZ2luID8gPGgxPtCQ0LLRgtC+0YDQuNC30LDRhtC40Y88L2gxPiA6IDxoMT7QoNC10LPQuNGB0YLRgNCw0YbQuNGPPC9oMT59XHJcblxyXG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi0JLQstC10LTQuNGC0LUgZW1haWwgLi4uXCIgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCLQktCy0LXQtNC40YLQtSDQv9Cw0YDQvtC70YwgLi4uXCIgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aXNMb2dpbiA/XHJcblx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdNCd0LXRgiDQsNC60LrQsNGD0L3RgtCwPyA8c3BhbiBvbkNsaWNrPXsoKSA9PiBzZXRJc0xvZ2luKGZhbHNlKX0+0JfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNGC0YzRgdGPPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PiA6XHJcblx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdNCV0YHRgtGMINCw0LrQutCw0YPQvdGCPyA8c3BhbiBvbkNsaWNrPXsoKSA9PiBzZXRJc0xvZ2luKHRydWUpfT7QktC+0LnRgtC4PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdHtpc0xvZ2luID8gPGJ1dHRvbiBvbkNsaWNrPXtzaWduSW59PtCS0L7QudGC0Lg8L2J1dHRvbj4gOiA8YnV0dG9uIG9uQ2xpY2s9e3NpZ25Jbn0+0JfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNGC0YzRgdGPPC9idXR0b24+fVxyXG5cdFx0XHQ8L0Zvcm1BdXRoPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoOyJdLCJuYW1lcyI6WyJsb2dpbiIsInJlZ2lzdHJhdGlvbiIsIkZvcm1BdXRoIiwiR2xvYmFsIiwib2JzZXJ2ZXIiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb250ZXh0IiwiQXV0aCIsInVzZXIiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImlzTG9naW4iLCJzZXRJc0xvZ2luIiwic2lnbkluIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImFsZXJ0IiwiaXNBdXRoIiwiaDEiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiIsIm9uQ2xpY2siLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/auth.tsx\n"));

/***/ })

});