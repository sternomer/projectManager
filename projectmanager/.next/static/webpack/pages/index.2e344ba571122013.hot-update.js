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

/***/ "./src/app/components/ToggleSwitch.tsx":
/*!*********************************************!*\
  !*** ./src/app/components/ToggleSwitch.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_icons_material_Info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/Info */ \"./node_modules/@mui/icons-material/Info.js\");\nvar _this = undefined;\n\n\n\n // Import the Info icon\nvar _s = $RefreshSig$();\nvar ToggleSwitch = function(param) {\n    var formData = param.formData, handleToggleChange = param.handleToggleChange;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), open = ref[0], setOpen = ref[1];\n    var handleChange = function(event) {\n        handleToggleChange(event);\n        if (event.target.checked) {\n            setOpen(true);\n        } else {\n            setOpen(false);\n        }\n    };\n    var handleClose = function() {\n        handleToggleChange({\n            target: {\n                name: \"isToggleOn\",\n                checked: false\n            }\n        });\n        setOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n        item: true,\n        xs: 12,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.FormControlLabel, {\n                control: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Switch, {\n                    checked: formData.isToggleOn,\n                    onChange: handleChange,\n                    name: \"isToggleOn\"\n                }, void 0, false, void 0, void 0),\n                label: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                    display: \"flex\",\n                    alignItems: \"center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"\\u05DB\\u05E4\\u05EA\\u05D5\\u05E8 \\u05DE\\u05D9\\u05D3\\u05E2\"\n                        }, void 0, false, void 0, void 0),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {\n                            size: \"small\",\n                            onClick: function() {\n                                return setOpen(true);\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Info__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, void 0, void 0)\n                        }, void 0, false, void 0, void 0)\n                    ]\n                }, void 0, true, void 0, void 0)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\app\\\\components\\\\ToggleSwitch.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Dialog, {\n                open: open,\n                onClose: handleClose,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.DialogTitle, {\n                        children: \"Information\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\app\\\\components\\\\ToggleSwitch.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.DialogContent, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"This is the information about the website.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\app\\\\components\\\\ToggleSwitch.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\app\\\\components\\\\ToggleSwitch.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.DialogActions, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            onClick: handleClose,\n                            color: \"primary\",\n                            children: \"Close\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\app\\\\components\\\\ToggleSwitch.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\app\\\\components\\\\ToggleSwitch.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\app\\\\components\\\\ToggleSwitch.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\app\\\\components\\\\ToggleSwitch.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, _this);\n};\n_s(ToggleSwitch, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = ToggleSwitch;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToggleSwitch);\nvar _c;\n$RefreshReg$(_c, \"ToggleSwitch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2NvbXBvbmVudHMvVG9nZ2xlU3dpdGNoLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQXdDO0FBQ21HO0FBQzNGLENBQUMsdUJBQXVCOztBQUV4RSxJQUFNYSxZQUFZLEdBQUcsZ0JBQXNDO1FBQW5DQyxRQUFRLFNBQVJBLFFBQVEsRUFBRUMsa0JBQWtCLFNBQWxCQSxrQkFBa0I7O0lBQ2xELElBQXdCZCxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBTHpDLElBS2EsR0FBYUEsR0FBZSxHQUE1QixFQUxiLE9BS3NCLEdBQUlBLEdBQWUsR0FBbkI7SUFFcEIsSUFBTWlCLFlBQVksR0FBRyxTQUFDQyxLQUEwQyxFQUFLO1FBQ25FSixrQkFBa0IsQ0FBQ0ksS0FBSyxDQUFDLENBQUM7UUFDMUIsSUFBSUEsS0FBSyxDQUFDQyxNQUFNLENBQUNDLE9BQU8sRUFBRTtZQUN4QkosT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2YsTUFBTTtZQUNMQSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEI7S0FDRjtJQUVELElBQU1LLFdBQVcsR0FBRyxXQUFNO1FBQ3hCUCxrQkFBa0IsQ0FBQztZQUFFSyxNQUFNLEVBQUU7Z0JBQUVHLElBQUksRUFBRSxZQUFZO2dCQUFFRixPQUFPLEVBQUUsS0FBSzthQUFFO1NBQUUsQ0FBQyxDQUFDO1FBQ3ZFSixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDaEI7SUFFRCxxQkFDRSw4REFBQ2YsK0NBQUk7UUFBQ3NCLElBQUk7UUFBQ0MsRUFBRSxFQUFFLEVBQUU7OzBCQUNmLDhEQUFDdEIsMkRBQWdCO2dCQUNmdUIsT0FBTyxnQkFDTCw4REFBQ3RCLGlEQUFNO29CQUNMaUIsT0FBTyxFQUFFUCxRQUFRLENBQUNhLFVBQVU7b0JBQzVCQyxRQUFRLEVBQUVWLFlBQVk7b0JBQ3RCSyxJQUFJLEVBQUMsWUFBWTtpREFDakI7Z0JBRUpNLEtBQUssZ0JBQ0gsOERBQUNsQiw4Q0FBRztvQkFBQ21CLE9BQU8sRUFBQyxNQUFNO29CQUFDQyxVQUFVLEVBQUMsUUFBUTs7c0NBQ3JDLDhEQUFDQyxNQUFJO3NDQUFDLHlEQUFVO3lEQUFPO3NDQUN2Qiw4REFBQ3RCLHFEQUFVOzRCQUFDdUIsSUFBSSxFQUFDLE9BQU87NEJBQUNDLE9BQU8sRUFBRTt1Q0FBTWpCLE9BQU8sQ0FBQyxJQUFJLENBQUM7NkJBQUE7c0NBQ25ELDRFQUFDTCxnRUFBUSxvQ0FBRzt5REFDRDs7Z0RBQ1Q7Ozs7O3FCQUVSOzBCQUNGLDhEQUFDUCxpREFBTTtnQkFBQ1csSUFBSSxFQUFFQSxJQUFJO2dCQUFFbUIsT0FBTyxFQUFFYixXQUFXOztrQ0FDdEMsOERBQUNoQixzREFBVztrQ0FBQyxhQUFXOzs7Ozs2QkFBYztrQ0FDdEMsOERBQUNDLHdEQUFhO2tDQUNaLDRFQUFDNkIsR0FBQztzQ0FBQyw0Q0FBMEM7Ozs7O2lDQUFJOzs7Ozs2QkFDbkM7a0NBQ2hCLDhEQUFDNUIsd0RBQWE7a0NBQ1osNEVBQUNDLGlEQUFNOzRCQUFDeUIsT0FBTyxFQUFFWixXQUFXOzRCQUFFZSxLQUFLLEVBQUMsU0FBUztzQ0FBQyxPQUU5Qzs7Ozs7aUNBQVM7Ozs7OzZCQUNLOzs7Ozs7cUJBQ1Q7Ozs7OzthQUNKLENBQ1A7Q0FDSDtHQWpES3hCLFlBQVk7QUFBWkEsS0FBQUEsWUFBWTtBQW1EbEIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvVG9nZ2xlU3dpdGNoLnRzeD8zM2EwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgR3JpZCwgRm9ybUNvbnRyb2xMYWJlbCwgU3dpdGNoLCBEaWFsb2csIERpYWxvZ1RpdGxlLCBEaWFsb2dDb250ZW50LCBEaWFsb2dBY3Rpb25zLCBCdXR0b24sIEljb25CdXR0b24sIEJveCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgSW5mb0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9JbmZvJzsgLy8gSW1wb3J0IHRoZSBJbmZvIGljb25cclxuXHJcbmNvbnN0IFRvZ2dsZVN3aXRjaCA9ICh7IGZvcm1EYXRhLCBoYW5kbGVUb2dnbGVDaGFuZ2UgfSkgPT4ge1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgaGFuZGxlVG9nZ2xlQ2hhbmdlKGV2ZW50KTtcclxuICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICBzZXRPcGVuKHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBoYW5kbGVUb2dnbGVDaGFuZ2UoeyB0YXJnZXQ6IHsgbmFtZTogJ2lzVG9nZ2xlT24nLCBjaGVja2VkOiBmYWxzZSB9IH0pO1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICBjb250cm9sPXtcclxuICAgICAgICAgIDxTd2l0Y2hcclxuICAgICAgICAgICAgY2hlY2tlZD17Zm9ybURhdGEuaXNUb2dnbGVPbn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgbmFtZT1cImlzVG9nZ2xlT25cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICB9XHJcbiAgICAgICAgbGFiZWw9e1xyXG4gICAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgPHNwYW4+15vXpNeq15XXqCDXnteZ15PXojwvc3Bhbj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gc2l6ZT1cInNtYWxsXCIgb25DbGljaz17KCkgPT4gc2V0T3Blbih0cnVlKX0+XHJcbiAgICAgICAgICAgICAgPEluZm9JY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIH1cclxuICAgICAgLz5cclxuICAgICAgPERpYWxvZyBvcGVuPXtvcGVufSBvbkNsb3NlPXtoYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgPERpYWxvZ1RpdGxlPkluZm9ybWF0aW9uPC9EaWFsb2dUaXRsZT5cclxuICAgICAgICA8RGlhbG9nQ29udGVudD5cclxuICAgICAgICAgIDxwPlRoaXMgaXMgdGhlIGluZm9ybWF0aW9uIGFib3V0IHRoZSB3ZWJzaXRlLjwvcD5cclxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgPERpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfSBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cclxuICAgICAgPC9EaWFsb2c+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZ2dsZVN3aXRjaDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJHcmlkIiwiRm9ybUNvbnRyb2xMYWJlbCIsIlN3aXRjaCIsIkRpYWxvZyIsIkRpYWxvZ1RpdGxlIiwiRGlhbG9nQ29udGVudCIsIkRpYWxvZ0FjdGlvbnMiLCJCdXR0b24iLCJJY29uQnV0dG9uIiwiQm94IiwiSW5mb0ljb24iLCJUb2dnbGVTd2l0Y2giLCJmb3JtRGF0YSIsImhhbmRsZVRvZ2dsZUNoYW5nZSIsIm9wZW4iLCJzZXRPcGVuIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJjaGVja2VkIiwiaGFuZGxlQ2xvc2UiLCJuYW1lIiwiaXRlbSIsInhzIiwiY29udHJvbCIsImlzVG9nZ2xlT24iLCJvbkNoYW5nZSIsImxhYmVsIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJzcGFuIiwic2l6ZSIsIm9uQ2xpY2siLCJvbkNsb3NlIiwicCIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app/components/ToggleSwitch.tsx\n");

/***/ })

});