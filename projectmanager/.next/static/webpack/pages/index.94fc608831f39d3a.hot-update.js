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

/***/ "./src/pages/layout.tsx":
/*!******************************!*\
  !*** ./src/pages/layout.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Home */ \"./node_modules/@mui/icons-material/Home.js\");\n/* harmony import */ var _mui_icons_material_Summarize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Summarize */ \"./node_modules/@mui/icons-material/Summarize.js\");\nvar _this = undefined;\n\n\n\n\n // Example icon\n // Example icon\nvar _s = $RefreshSig$();\n\"use client\";\nvar Layout = function(param) {\n    var children = param.children;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), selectedTab = ref[0], setSelectedTab = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (router.pathname === \"/summary\") {\n            setSelectedTab(1);\n        } else {\n            setSelectedTab(0);\n        }\n    }, [\n        router.pathname\n    ]);\n    var handleTabChange = function(event, newValue) {\n        setSelectedTab(newValue);\n        if (newValue === 0) {\n            router.push(\"/\");\n        } else if (newValue === 1) {\n            router.push(\"/summary\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {\n        maxWidth: \"lg\",\n        style: {\n            padding: \"0\",\n            direction: \"rtl\",\n            backgroundColor: \"#f0f4f8\",\n            minHeight: \"100vh\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                display: \"flex\",\n                justifyContent: \"space-between\",\n                alignItems: \"center\",\n                style: {\n                    overflow: \"hidden\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                        display: \"flex\",\n                        alignItems: \"center\",\n                        style: {\n                            flexShrink: 0\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {\n                                onClick: function() {\n                                    setSelectedTab(0);\n                                    router.push(\"/\");\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Tabs, {\n                                value: selectedTab,\n                                onChange: handleTabChange,\n                                indicatorColor: \"primary\",\n                                textColor: \"primary\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Tab, {\n                                    icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        style: {\n                                            width: \"20px\",\n                                            height: \"20px\",\n                                            borderRadius: \"50%\",\n                                            backgroundColor: selectedTab === 0 ? \"#1976d2\" : \"#e0e0e0\"\n                                        }\n                                    }, void 0, false, void 0, void 0),\n                                    label: \"\\u05E2\\u05DE\\u05D5\\u05D3 \\u05E8\\u05D0\\u05E9\\u05D9\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                        flexGrow: 1,\n                        borderBottom: 1,\n                        borderColor: \"divider\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                        display: \"flex\",\n                        alignItems: \"center\",\n                        style: {\n                            flexShrink: 0\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Tabs, {\n                                value: selectedTab,\n                                onChange: handleTabChange,\n                                indicatorColor: \"primary\",\n                                textColor: \"primary\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Tab, {\n                                    icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        style: {\n                                            width: \"20px\",\n                                            height: \"20px\",\n                                            borderRadius: \"50%\",\n                                            backgroundColor: selectedTab === 1 ? \"#1976d2\" : \"#e0e0e0\"\n                                        }\n                                    }, void 0, false, void 0, void 0),\n                                    label: \"\\u05E1\\u05D9\\u05DB\\u05D5\\u05DD\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {\n                                onClick: function() {\n                                    setSelectedTab(1);\n                                    router.push(\"/summary\");\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Summarize__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                margin: 2,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Paper, {\n                    elevation: 3,\n                    style: {\n                        padding: \"20px\",\n                        margin: \"20px 0\",\n                        overflow: \"hidden\"\n                    },\n                    children: children\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, _this);\n};\n_s(Layout, \"sfK0sHHkKzFT3gDyfiFK4Ssuubc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWpES0QsTUFBTTs7UUFDS0gsa0RBQVM7OztBQURwQkcsS0FBQUEsTUFBTTtBQW1EWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9sYXlvdXQudHN4PzI1ZGQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBQYXBlciwgQm94LCBUYWJzLCBUYWIsIEljb25CdXR0b24sIERpdmlkZXIgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgSG9tZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Ib21lJzsgLy8gRXhhbXBsZSBpY29uXHJcbmltcG9ydCBTdW1tYXJ5SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1N1bW1hcml6ZSc7IC8vIEV4YW1wbGUgaWNvblxyXG5cclxuaW50ZXJmYWNlIExheW91dFByb3BzIHtcclxuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG5jb25zdCBMYXlvdXQ6IFJlYWN0LkZDPExheW91dFByb3BzPiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbc2VsZWN0ZWRUYWIsIHNldFNlbGVjdGVkVGFiXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJvdXRlci5wYXRobmFtZSA9PT0gJy9zdW1tYXJ5Jykge1xyXG4gICAgICBzZXRTZWxlY3RlZFRhYigxKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFNlbGVjdGVkVGFiKDApO1xyXG4gICAgfVxyXG4gIH0sIFtyb3V0ZXIucGF0aG5hbWVdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVGFiQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDx7fT4sIG5ld1ZhbHVlOiBudW1iZXIpID0+IHtcclxuICAgIHNldFNlbGVjdGVkVGFiKG5ld1ZhbHVlKTtcclxuICAgIGlmIChuZXdWYWx1ZSA9PT0gMCkge1xyXG4gICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgfSBlbHNlIGlmIChuZXdWYWx1ZSA9PT0gMSkge1xyXG4gICAgICByb3V0ZXIucHVzaCgnL3N1bW1hcnknKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCIgc3R5bGU9e3sgcGFkZGluZzogJzAnLCBkaXJlY3Rpb246ICdydGwnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZjBmNGY4JywgbWluSGVpZ2h0OiAnMTAwdmgnIH19PlxyXG4gICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIHN0eWxlPXt7IG92ZXJmbG93OiAnaGlkZGVuJyB9fT5cclxuICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIHN0eWxlPXt7IGZsZXhTaHJpbms6IDAgfX0+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHNldFNlbGVjdGVkVGFiKDApOyByb3V0ZXIucHVzaCgnLycpOyB9fT5cclxuICAgICAgICAgICAgPEhvbWVJY29uIC8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8VGFicyB2YWx1ZT17c2VsZWN0ZWRUYWJ9IG9uQ2hhbmdlPXtoYW5kbGVUYWJDaGFuZ2V9IGluZGljYXRvckNvbG9yPVwicHJpbWFyeVwiIHRleHRDb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgPFRhYiBpY29uPXs8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMjBweCcsIGhlaWdodDogJzIwcHgnLCBib3JkZXJSYWRpdXM6ICc1MCUnLCBiYWNrZ3JvdW5kQ29sb3I6IHNlbGVjdGVkVGFiID09PSAwID8gJyMxOTc2ZDInIDogJyNlMGUwZTAnIH19IC8+fSBsYWJlbD1cItei157XldeTINeo15DXqdeZXCIgLz5cclxuICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8Qm94IGZsZXhHcm93PXsxfSBib3JkZXJCb3R0b209ezF9IGJvcmRlckNvbG9yPVwiZGl2aWRlclwiIC8+XHJcbiAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBzdHlsZT17eyBmbGV4U2hyaW5rOiAwIH19PlxyXG4gICAgICAgICAgPFRhYnMgdmFsdWU9e3NlbGVjdGVkVGFifSBvbkNoYW5nZT17aGFuZGxlVGFiQ2hhbmdlfSBpbmRpY2F0b3JDb2xvcj1cInByaW1hcnlcIiB0ZXh0Q29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgIDxUYWIgaWNvbj17PGRpdiBzdHlsZT17eyB3aWR0aDogJzIwcHgnLCBoZWlnaHQ6ICcyMHB4JywgYm9yZGVyUmFkaXVzOiAnNTAlJywgYmFja2dyb3VuZENvbG9yOiBzZWxlY3RlZFRhYiA9PT0gMSA/ICcjMTk3NmQyJyA6ICcjZTBlMGUwJyB9fSAvPn0gbGFiZWw9XCLXodeZ15vXldedXCIgLz5cclxuICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgc2V0U2VsZWN0ZWRUYWIoMSk7IHJvdXRlci5wdXNoKCcvc3VtbWFyeScpOyB9fT5cclxuICAgICAgICAgICAgPFN1bW1hcnlJY29uIC8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8Qm94IG1hcmdpbj17Mn0+XHJcbiAgICAgICAgPFBhcGVyIGVsZXZhdGlvbj17M30gc3R5bGU9e3sgcGFkZGluZzogJzIwcHgnLCBtYXJnaW46ICcyMHB4IDAnLCBvdmVyZmxvdzogJ2hpZGRlbicgfX0+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9QYXBlcj5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNvbnRhaW5lciIsIlBhcGVyIiwiQm94IiwiVGFicyIsIlRhYiIsIkljb25CdXR0b24iLCJ1c2VSb3V0ZXIiLCJIb21lSWNvbiIsIlN1bW1hcnlJY29uIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJzZWxlY3RlZFRhYiIsInNldFNlbGVjdGVkVGFiIiwicGF0aG5hbWUiLCJoYW5kbGVUYWJDaGFuZ2UiLCJldmVudCIsIm5ld1ZhbHVlIiwicHVzaCIsIm1heFdpZHRoIiwic3R5bGUiLCJwYWRkaW5nIiwiZGlyZWN0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwibWluSGVpZ2h0IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIm92ZXJmbG93IiwiZmxleFNocmluayIsIm9uQ2xpY2siLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiaW5kaWNhdG9yQ29sb3IiLCJ0ZXh0Q29sb3IiLCJpY29uIiwiZGl2Iiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJsYWJlbCIsImZsZXhHcm93IiwiYm9yZGVyQm90dG9tIiwiYm9yZGVyQ29sb3IiLCJtYXJnaW4iLCJlbGV2YXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/layout.tsx\n");

/***/ })

});