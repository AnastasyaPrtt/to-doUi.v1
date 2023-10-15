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

/***/ "./src/components/Main.tsx":
/*!*********************************!*\
  !*** ./src/components/Main.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Main: function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/style */ \"./src/styles/style.ts\");\n/* harmony import */ var _navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar/Navbar */ \"./src/components/navbar/Navbar.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ListTasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ListTasks */ \"./src/components/ListTasks.tsx\");\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Modal */ \"./src/components/Modal.tsx\");\n/* harmony import */ var _public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public */ \"./public/index.jsx\");\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx-react-lite */ \"./node_modules/mobx-react-lite/es/index.js\");\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/context */ \"./src/utils/context.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Main = _s((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__.observer)(_c = _s(()=>{\n    _s();\n    const { task } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_utils_context__WEBPACK_IMPORTED_MODULE_8__.Context);\n    const [modal, setModal] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"none\");\n    const [taskNew, setTaskNew] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        title: \"\",\n        date: \"\"\n    });\n    const [taskDelete, setTaskDelete] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    const getTasks = ()=>{\n        const str = localStorage.getItem(\"token\");\n        const userID = JSON.parse(str);\n        axios__WEBPACK_IMPORTED_MODULE_9__[\"default\"].get(\"http://localhost:5000/api/tasks/\" + \"\".concat(userID.id)).then((data)=>task.setTasks(data.data.tasks));\n    };\n    const handleOpenModalDelete = (id)=>{\n        setModal(\"delete\");\n        setTaskDelete(id);\n    };\n    const createTask = async ()=>{\n        const str = localStorage.getItem(\"token\");\n        const userID = JSON.parse(str);\n        axios__WEBPACK_IMPORTED_MODULE_9__[\"default\"].post(\"http://localhost:5000/api/tasks/\" + \"\".concat(userID.id), taskNew).then((data)=>console.log(data.data));\n        setModal(\"none\");\n        setTaskNew({\n            title: \"\",\n            date: \"\"\n        });\n        task.setIsUpdate(true);\n    };\n    const deleteTask = async ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_9__[\"default\"][\"delete\"](\"http://localhost:5000/api/tasks/\" + \"\".concat(taskDelete)).then((data)=>console.log(data.data));\n        task.setIsUpdate(true);\n        setModal(\"none\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        getTasks();\n        task.setIsUpdate(false);\n    }, [\n        task.IsUpdate\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_1__.MainStyle, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__.Navbar, {\n                        addTask: ()=>setModal(\"add\")\n                    }, void 0, false, {\n                        fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\Main.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 4\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ListTasks__WEBPACK_IMPORTED_MODULE_4__.ListTasks, {\n                        onClick: handleOpenModalDelete\n                    }, void 0, false, {\n                        fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\Main.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 4\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\Main.tsx\",\n                lineNumber: 57,\n                columnNumber: 3\n            }, undefined),\n            modal == \"add\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_5__.Modal, {\n                title: \"Create task\",\n                nameBtn: \"Save\",\n                active: modal,\n                IconBtn: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_6__.SaveIcon, {}, void 0, false, void 0, void 0),\n                onClickClose: ()=>setModal(\"none\"),\n                onClickSave: createTask,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Enter text...\",\n                        value: taskNew.title,\n                        onChange: (e)=>setTaskNew((taskNew)=>({\n                                    ...taskNew,\n                                    title: e.target.value\n                                }))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\Main.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"date\",\n                        value: taskNew.date,\n                        onChange: (e)=>setTaskNew((taskNew)=>({\n                                    ...taskNew,\n                                    date: e.target.value\n                                }))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\Main.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\Main.tsx\",\n                lineNumber: 67,\n                columnNumber: 4\n            }, undefined),\n            modal == \"delete\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_5__.Modal, {\n                title: \"Delete task\",\n                nameBtn: \"Delete\",\n                active: modal,\n                onClickClose: ()=>setModal(\"none\"),\n                onClickSave: deleteTask,\n                IconBtn: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_6__.DeleteIcon, {}, void 0, false, void 0, void 0),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: \"Are you sure about deleting this task?\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\Main.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\to-doUi.v1\\\\client\\\\src\\\\components\\\\Main.tsx\",\n                lineNumber: 90,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true);\n}, \"Nh/fJvnxpGN1UxhSZaDu7jQs0y8=\")), \"Nh/fJvnxpGN1UxhSZaDu7jQs0y8=\");\n_c1 = Main;\nvar _c, _c1;\n$RefreshReg$(_c, \"Main$observer\");\n$RefreshReg$(_c1, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUtBO2dCQUFDWSxPQUFPO2dCQUFlNEIsU0FBUztnQkFBVUMsUUFBUWpDO2dCQUFPbUMsY0FBYyxJQUFNbEMsU0FBUztnQkFBU21DLGFBQWFUO2dCQUFZTyx1QkFBUyw4REFBQ3pDLCtDQUFVQTswQkFDakosNEVBQUNtRDs4QkFBRzs7Ozs7Ozs7Ozs7OztBQUtSLHFFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01haW4udHN4PzMwYWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFpblN0eWxlIH0gZnJvbSAnQC9zdHlsZXMvc3R5bGUnXHJcbmltcG9ydCB7IE5hdmJhciB9IGZyb20gJy4vbmF2YmFyL05hdmJhcidcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCB7IExpc3RUYXNrcyB9IGZyb20gJy4vTGlzdFRhc2tzJ1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJy4vTW9kYWwnXHJcbmltcG9ydCB7IERlbGV0ZUljb24sIFNhdmVJY29uIH0gZnJvbSAnLi4vLi4vcHVibGljJ1xyXG5pbXBvcnQgeyBkYXRlTm93IH0gZnJvbSAnQC9EYXRlTm93J1xyXG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QtbGl0ZSdcclxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJ0AvdXRpbHMvY29udGV4dCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuZXhwb3J0IGNvbnN0IE1haW46IFJlYWN0LkZDID0gb2JzZXJ2ZXIoKCkgPT4ge1xyXG5cclxuXHRjb25zdCB7IHRhc2sgfSA9IHVzZUNvbnRleHQoQ29udGV4dClcclxuXHJcblx0Y29uc3QgW21vZGFsLCBzZXRNb2RhbF0gPSB1c2VTdGF0ZSgnbm9uZScpXHJcblxyXG5cdGNvbnN0IFt0YXNrTmV3LCBzZXRUYXNrTmV3XSA9IHVzZVN0YXRlKHsgdGl0bGU6ICcnLCBkYXRlOiAnJyB9KVxyXG5cdGNvbnN0IFt0YXNrRGVsZXRlLCBzZXRUYXNrRGVsZXRlXSA9IHVzZVN0YXRlPG51bWJlcj4oMClcclxuXHRjb25zdCBnZXRUYXNrcyA9ICgpID0+IHtcclxuXHRcdGNvbnN0IHN0ciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXHJcblx0XHRjb25zdCB1c2VySUQgPSBKU09OLnBhcnNlKHN0cilcclxuXHRcdGF4aW9zXHJcblx0XHRcdC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdGFza3MvJyArIGAke3VzZXJJRC5pZH1gKVxyXG5cdFx0XHQudGhlbihkYXRhID0+IHRhc2suc2V0VGFza3MoZGF0YS5kYXRhLnRhc2tzKSlcclxuXHR9XHJcblx0Y29uc3QgaGFuZGxlT3Blbk1vZGFsRGVsZXRlID0gKGlkOiBudW1iZXIpID0+IHtcclxuXHRcdHNldE1vZGFsKCdkZWxldGUnKVxyXG5cdFx0c2V0VGFza0RlbGV0ZShpZClcclxuXHR9XHJcblx0Y29uc3QgY3JlYXRlVGFzayA9IGFzeW5jICgpID0+IHtcclxuXHRcdGNvbnN0IHN0ciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXHJcblx0XHRjb25zdCB1c2VySUQgPSBKU09OLnBhcnNlKHN0cilcclxuXHRcdGF4aW9zXHJcblx0XHRcdC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3Rhc2tzLycgKyBgJHt1c2VySUQuaWR9YCwgdGFza05ldylcclxuXHRcdFx0LnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhLmRhdGEpKVxyXG5cdFx0c2V0TW9kYWwoJ25vbmUnKVxyXG5cdFx0c2V0VGFza05ldyh7IHRpdGxlOiAnJywgZGF0ZTogJycgfSlcclxuXHRcdHRhc2suc2V0SXNVcGRhdGUodHJ1ZSlcclxuXHR9XHJcblx0Y29uc3QgZGVsZXRlVGFzayA9IGFzeW5jICgpID0+IHtcclxuXHRcdGF4aW9zXHJcblx0XHRcdC5kZWxldGUoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdGFza3MvJyArIGAke3Rhc2tEZWxldGV9YClcclxuXHRcdFx0LnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhLmRhdGEpKVxyXG5cdFx0dGFzay5zZXRJc1VwZGF0ZSh0cnVlKVxyXG5cclxuXHRcdHNldE1vZGFsKCdub25lJylcclxuXHR9XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRnZXRUYXNrcygpXHJcblx0XHR0YXNrLnNldElzVXBkYXRlKGZhbHNlKVxyXG5cdH0sIFt0YXNrLklzVXBkYXRlXSlcclxuXHJcblx0cmV0dXJuICg8PlxyXG5cdFx0PE1haW5TdHlsZT5cclxuXHRcdFx0PE5hdmJhclxyXG5cdFx0XHRcdGFkZFRhc2s9eygpID0+IHNldE1vZGFsKCdhZGQnKX1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PExpc3RUYXNrc1xyXG5cdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZU9wZW5Nb2RhbERlbGV0ZX1cclxuXHRcdFx0Lz5cclxuXHRcdDwvTWFpblN0eWxlPlxyXG5cdFx0e1xyXG5cdFx0XHRtb2RhbCA9PSAnYWRkJyAmJlxyXG5cdFx0XHQ8TW9kYWxcclxuXHRcdFx0XHR0aXRsZT17J0NyZWF0ZSB0YXNrJ31cclxuXHRcdFx0XHRuYW1lQnRuPXsnU2F2ZSd9XHJcblx0XHRcdFx0YWN0aXZlPXttb2RhbH1cclxuXHRcdFx0XHRJY29uQnRuPXs8U2F2ZUljb24gLz59XHJcblx0XHRcdFx0b25DbGlja0Nsb3NlPXsoKSA9PiBzZXRNb2RhbCgnbm9uZScpfVxyXG5cdFx0XHRcdG9uQ2xpY2tTYXZlPXtjcmVhdGVUYXNrfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nRW50ZXIgdGV4dC4uLidcclxuXHRcdFx0XHRcdHZhbHVlPXt0YXNrTmV3LnRpdGxlfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRUYXNrTmV3KHRhc2tOZXcgPT4gKHsgLi4udGFza05ldywgdGl0bGU6IGUudGFyZ2V0LnZhbHVlIH0pKX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0dHlwZT1cImRhdGVcIlxyXG5cdFx0XHRcdFx0dmFsdWU9e3Rhc2tOZXcuZGF0ZX1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGFza05ldyh0YXNrTmV3ID0+ICh7IC4uLnRhc2tOZXcsIGRhdGU6IGUudGFyZ2V0LnZhbHVlIH0pKX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L01vZGFsPlxyXG5cdFx0fVxyXG5cdFx0e1xyXG5cdFx0XHRtb2RhbCA9PSAnZGVsZXRlJyAmJlxyXG5cdFx0XHQ8TW9kYWwgdGl0bGU9eydEZWxldGUgdGFzayd9IG5hbWVCdG49eydEZWxldGUnfSBhY3RpdmU9e21vZGFsfSBvbkNsaWNrQ2xvc2U9eygpID0+IHNldE1vZGFsKCdub25lJyl9IG9uQ2xpY2tTYXZlPXtkZWxldGVUYXNrfSBJY29uQnRuPXs8RGVsZXRlSWNvbiAvPn0+XHJcblx0XHRcdFx0PGgzPkFyZSB5b3Ugc3VyZSBhYm91dCBkZWxldGluZyB0aGlzIHRhc2s/PC9oMz5cclxuXHRcdFx0PC9Nb2RhbD5cclxuXHRcdH1cclxuXHQ8Lz5cclxuXHQpXHJcbn0pIl0sIm5hbWVzIjpbIk1haW5TdHlsZSIsIk5hdmJhciIsIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGlzdFRhc2tzIiwiTW9kYWwiLCJEZWxldGVJY29uIiwiU2F2ZUljb24iLCJvYnNlcnZlciIsIkNvbnRleHQiLCJheGlvcyIsIk1haW4iLCJ0YXNrIiwibW9kYWwiLCJzZXRNb2RhbCIsInRhc2tOZXciLCJzZXRUYXNrTmV3IiwidGl0bGUiLCJkYXRlIiwidGFza0RlbGV0ZSIsInNldFRhc2tEZWxldGUiLCJnZXRUYXNrcyIsInN0ciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VySUQiLCJKU09OIiwicGFyc2UiLCJnZXQiLCJpZCIsInRoZW4iLCJkYXRhIiwic2V0VGFza3MiLCJ0YXNrcyIsImhhbmRsZU9wZW5Nb2RhbERlbGV0ZSIsImNyZWF0ZVRhc2siLCJwb3N0IiwiY29uc29sZSIsImxvZyIsInNldElzVXBkYXRlIiwiZGVsZXRlVGFzayIsImRlbGV0ZSIsIklzVXBkYXRlIiwiYWRkVGFzayIsIm9uQ2xpY2siLCJuYW1lQnRuIiwiYWN0aXZlIiwiSWNvbkJ0biIsIm9uQ2xpY2tDbG9zZSIsIm9uQ2xpY2tTYXZlIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Main.tsx\n"));

/***/ })

});