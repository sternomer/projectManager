"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/summary",{

/***/ "./src/pages/layout.tsx":
/*!******************************!*\
  !*** ./src/pages/layout.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Home */ \"./node_modules/@mui/icons-material/Home.js\");\n/* harmony import */ var _mui_icons_material_Summarize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Summarize */ \"./node_modules/@mui/icons-material/Summarize.js\");\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n\"use client\";\nvar Layout = function(param) {\n    var children = param.children;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(router.pathname === \"/summary\" ? 1 : 0), selectedTab = ref[0], setSelectedTab = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (router.pathname === \"/\") {\n            setSelectedTab(0);\n        } else if (router.pathname === \"/summary\") {\n            setSelectedTab(1);\n        }\n    }, [\n        router.pathname\n    ]);\n    var handleTabChange = function(event, newValue) {\n        setSelectedTab(newValue);\n        if (newValue === 0) {\n            router.push(\"/\");\n        } else if (newValue === 1) {\n            router.push(\"/summary\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {\n        maxWidth: \"lg\",\n        style: {\n            padding: \"0\",\n            direction: \"rtl\",\n            backgroundColor: \"#f0f4f8\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                display: \"flex\",\n                justifyContent: \"space-between\",\n                alignItems: \"center\",\n                style: {\n                    overflow: \"hidden\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                        display: \"flex\",\n                        alignItems: \"center\",\n                        style: {\n                            flexShrink: 0\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {\n                                onClick: function() {\n                                    setSelectedTab(0);\n                                    router.push(\"/\");\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Tabs, {\n                                value: selectedTab === 0 ? 0 : null,\n                                onChange: handleTabChange,\n                                indicatorColor: \"primary\",\n                                textColor: \"primary\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Tab, {\n                                    label: \"\\u05E2\\u05DE\\u05D5\\u05D3 \\u05E8\\u05D0\\u05E9\\u05D9\",\n                                    value: 0\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                        flexGrow: 1,\n                        borderBottom: 1,\n                        borderColor: \"divider\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                        display: \"flex\",\n                        alignItems: \"center\",\n                        style: {\n                            flexShrink: 0\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Tabs, {\n                                value: selectedTab === 1 ? 1 : null,\n                                onChange: handleTabChange,\n                                indicatorColor: \"primary\",\n                                textColor: \"primary\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Tab, {\n                                    label: \"\\u05E1\\u05D9\\u05DB\\u05D5\\u05DD\",\n                                    value: 1\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {\n                                onClick: function() {\n                                    setSelectedTab(1);\n                                    router.push(\"/summary\");\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Summarize__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                margin: 2,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Paper, {\n                    elevation: 3,\n                    style: {\n                        padding: \"20px\",\n                        margin: \"20px 0\",\n                        overflow: \"hidden\"\n                    },\n                    children: children\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, _this);\n};\n_s(Layout, \"MYwIWL1Yus+OZHl/MF+Now7PnTQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzRCQUFFUSxVQUFVLEVBQUUsQ0FBQzt5QkFBRTs7MENBQzlELDhEQUFDekIsK0NBQUk7Z0NBQUMyQixLQUFLLEVBQUVqQixXQUFXLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJO2dDQUFFa0IsUUFBUSxFQUFFaEIsZUFBZTtnQ0FBRWlCLGNBQWMsRUFBQyxTQUFTO2dDQUFDQyxTQUFTLEVBQUMsU0FBUzswQ0FDaEgsNEVBQUM3Qiw4Q0FBRztvQ0FBQzhCLEtBQUssRUFBQyxnQ0FBTztvQ0FBQ0osS0FBSyxFQUFFLENBQUM7Ozs7O3lDQUFJOzs7OztxQ0FDMUI7MENBQ1AsOERBQUN6QixxREFBVTtnQ0FBQ3dCLE9BQU8sRUFBRSxXQUFNO29DQUFFZixjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7b0NBQUNILE1BQU0sQ0FBQ08sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2lDQUFFOzBDQUN4RSw0RUFBQ1YscUVBQVc7Ozs7eUNBQUc7Ozs7O3FDQUNKOzs7Ozs7NkJBQ1Q7Ozs7OztxQkFDRjswQkFDTiw4REFBQ04sOENBQUc7Z0JBQUNvQyxNQUFNLEVBQUUsQ0FBQzswQkFDWiw0RUFBQ3JDLGdEQUFLO29CQUFDc0MsU0FBUyxFQUFFLENBQUM7b0JBQUVuQixLQUFLLEVBQUU7d0JBQUVDLE9BQU8sRUFBRSxNQUFNO3dCQUFFaUIsTUFBTSxFQUFFLFFBQVE7d0JBQUVYLFFBQVEsRUFBRSxRQUFRO3FCQUFFOzhCQUNsRmpCLFFBQVE7Ozs7O3lCQUNIOzs7OztxQkFDSjs7Ozs7O2FBQ0ksQ0FDWjtDQUNIO0dBakRLRCxNQUFNOztRQUNLSCxrREFBUzs7O0FBRHBCRyxLQUFBQSxNQUFNO0FBbURaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2xheW91dC50c3g/MjVkZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFBhcGVyLCBCb3gsIFRhYnMsIFRhYiwgSWNvbkJ1dHRvbiB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBIb21lSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0hvbWUnO1xyXG5pbXBvcnQgU3VtbWFyeUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TdW1tYXJpemUnO1xyXG5cclxuaW50ZXJmYWNlIExheW91dFByb3BzIHtcclxuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG5jb25zdCBMYXlvdXQ6IFJlYWN0LkZDPExheW91dFByb3BzPiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbc2VsZWN0ZWRUYWIsIHNldFNlbGVjdGVkVGFiXSA9IHVzZVN0YXRlKHJvdXRlci5wYXRobmFtZSA9PT0gJy9zdW1tYXJ5JyA/IDEgOiAwKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChyb3V0ZXIucGF0aG5hbWUgPT09ICcvJykge1xyXG4gICAgICBzZXRTZWxlY3RlZFRhYigwKTtcclxuICAgIH0gZWxzZSBpZiAocm91dGVyLnBhdGhuYW1lID09PSAnL3N1bW1hcnknKSB7XHJcbiAgICAgIHNldFNlbGVjdGVkVGFiKDEpO1xyXG4gICAgfVxyXG4gIH0sIFtyb3V0ZXIucGF0aG5hbWVdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVGFiQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDx7fT4sIG5ld1ZhbHVlOiBudW1iZXIpID0+IHtcclxuICAgIHNldFNlbGVjdGVkVGFiKG5ld1ZhbHVlKTtcclxuICAgIGlmIChuZXdWYWx1ZSA9PT0gMCkge1xyXG4gICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgfSBlbHNlIGlmIChuZXdWYWx1ZSA9PT0gMSkge1xyXG4gICAgICByb3V0ZXIucHVzaCgnL3N1bW1hcnknKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCIgc3R5bGU9e3sgcGFkZGluZzogJzAnLCBkaXJlY3Rpb246ICdydGwnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZjBmNGY4JyB9fT5cclxuICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBzdHlsZT17eyBvdmVyZmxvdzogJ2hpZGRlbicgfX0+XHJcbiAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBzdHlsZT17eyBmbGV4U2hyaW5rOiAwIH19PlxyXG4gICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4geyBzZXRTZWxlY3RlZFRhYigwKTsgcm91dGVyLnB1c2goJy8nKTsgfX0+XHJcbiAgICAgICAgICAgIDxIb21lSWNvbiAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPFRhYnMgdmFsdWU9e3NlbGVjdGVkVGFiID09PSAwID8gMCA6IG51bGx9IG9uQ2hhbmdlPXtoYW5kbGVUYWJDaGFuZ2V9IGluZGljYXRvckNvbG9yPVwicHJpbWFyeVwiIHRleHRDb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgPFRhYiBsYWJlbD1cItei157XldeTINeo15DXqdeZXCIgdmFsdWU9ezB9IC8+XHJcbiAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPEJveCBmbGV4R3Jvdz17MX0gYm9yZGVyQm90dG9tPXsxfSBib3JkZXJDb2xvcj1cImRpdmlkZXJcIiAvPlxyXG4gICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgc3R5bGU9e3sgZmxleFNocmluazogMCB9fT5cclxuICAgICAgICAgIDxUYWJzIHZhbHVlPXtzZWxlY3RlZFRhYiA9PT0gMSA/IDEgOiBudWxsfSBvbkNoYW5nZT17aGFuZGxlVGFiQ2hhbmdlfSBpbmRpY2F0b3JDb2xvcj1cInByaW1hcnlcIiB0ZXh0Q29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgIDxUYWIgbGFiZWw9XCLXodeZ15vXldedXCIgdmFsdWU9ezF9IC8+XHJcbiAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHNldFNlbGVjdGVkVGFiKDEpOyByb3V0ZXIucHVzaCgnL3N1bW1hcnknKTsgfX0+XHJcbiAgICAgICAgICAgIDxTdW1tYXJ5SWNvbiAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPEJveCBtYXJnaW49ezJ9PlxyXG4gICAgICAgIDxQYXBlciBlbGV2YXRpb249ezN9IHN0eWxlPXt7IHBhZGRpbmc6ICcyMHB4JywgbWFyZ2luOiAnMjBweCAwJywgb3ZlcmZsb3c6ICdoaWRkZW4nIH19PlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvUGFwZXI+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDb250YWluZXIiLCJQYXBlciIsIkJveCIsIlRhYnMiLCJUYWIiLCJJY29uQnV0dG9uIiwidXNlUm91dGVyIiwiSG9tZUljb24iLCJTdW1tYXJ5SWNvbiIsIkxheW91dCIsImNoaWxkcmVuIiwicm91dGVyIiwicGF0aG5hbWUiLCJzZWxlY3RlZFRhYiIsInNldFNlbGVjdGVkVGFiIiwiaGFuZGxlVGFiQ2hhbmdlIiwiZXZlbnQiLCJuZXdWYWx1ZSIsInB1c2giLCJtYXhXaWR0aCIsInN0eWxlIiwicGFkZGluZyIsImRpcmVjdGlvbiIsImJhY2tncm91bmRDb2xvciIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJvdmVyZmxvdyIsImZsZXhTaHJpbmsiLCJvbkNsaWNrIiwidmFsdWUiLCJvbkNoYW5nZSIsImluZGljYXRvckNvbG9yIiwidGV4dENvbG9yIiwibGFiZWwiLCJmbGV4R3JvdyIsImJvcmRlckJvdHRvbSIsImJvcmRlckNvbG9yIiwibWFyZ2luIiwiZWxldmF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/layout.tsx\n");

/***/ })

});