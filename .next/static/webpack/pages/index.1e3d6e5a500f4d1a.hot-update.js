/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/SingleCard.js":
/*!**********************************!*\
  !*** ./components/SingleCard.js ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": function() { return /* reexport safe */ _Card__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; },\n/* harmony export */   \"FaceBook\": function() { return /* reexport safe */ _SVG_Facebook__WEBPACK_IMPORTED_MODULE_11__[\"default\"]; },\n/* harmony export */   \"Footer\": function() { return /* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; },\n/* harmony export */   \"Header\": function() { return /* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; },\n/* harmony export */   \"HeroSection\": function() { return /* reexport safe */ _HeroSection__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; },\n/* harmony export */   \"Insta\": function() { return /* reexport safe */ _SVG_Insta__WEBPACK_IMPORTED_MODULE_12__[\"default\"]; },\n/* harmony export */   \"Logo\": function() { return /* reexport safe */ _SVG_Logo__WEBPACK_IMPORTED_MODULE_13__[\"default\"]; },\n/* harmony export */   \"Menu\": function() { return /* reexport safe */ _SVG_Menu__WEBPACK_IMPORTED_MODULE_14__[\"default\"]; },\n/* harmony export */   \"Selector\": function() { return /* reexport safe */ _Selector__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; },\n/* harmony export */   \"SingleCard\": function() { return /* reexport default from dynamic */ _SingleCard__WEBPACK_IMPORTED_MODULE_5___default.a; },\n/* harmony export */   \"SwapComponent\": function() { return /* reexport safe */ _SwapComponent__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; },\n/* harmony export */   \"SwapField\": function() { return /* reexport safe */ _SwapField__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; },\n/* harmony export */   \"Table\": function() { return /* reexport safe */ _Table__WEBPACK_IMPORTED_MODULE_8__[\"default\"]; },\n/* harmony export */   \"TokenBalance\": function() { return /* reexport safe */ _TokenBalance__WEBPACK_IMPORTED_MODULE_9__[\"default\"]; },\n/* harmony export */   \"TransactionStatus\": function() { return /* reexport safe */ _TransactionStatus__WEBPACK_IMPORTED_MODULE_10__[\"default\"]; },\n/* harmony export */   \"Twitter\": function() { return /* reexport safe */ _SVG_Twitter__WEBPACK_IMPORTED_MODULE_15__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card */ \"./components/Card.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer */ \"./components/Footer.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./components/Header.js\");\n/* harmony import */ var _HeroSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeroSection */ \"./components/HeroSection.js\");\n/* harmony import */ var _Selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Selector */ \"./components/Selector.js\");\n/* harmony import */ var _SingleCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SingleCard */ \"./components/SingleCard.js\");\n/* harmony import */ var _SingleCard__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_SingleCard__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _SwapComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SwapComponent */ \"./components/SwapComponent.js\");\n/* harmony import */ var _SwapField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SwapField */ \"./components/SwapField.js\");\n/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Table */ \"./components/Table.js\");\n/* harmony import */ var _TokenBalance__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TokenBalance */ \"./components/TokenBalance.js\");\n/* harmony import */ var _TransactionStatus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TransactionStatus */ \"./components/TransactionStatus.js\");\n/* harmony import */ var _SVG_Facebook__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SVG/Facebook */ \"./components/SVG/Facebook.js\");\n/* harmony import */ var _SVG_Insta__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SVG/Insta */ \"./components/SVG/Insta.js\");\n/* harmony import */ var _SVG_Logo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SVG/Logo */ \"./components/SVG/Logo.js\");\n/* harmony import */ var _SVG_Menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./SVG/Menu */ \"./components/SVG/Menu.js\");\n/* harmony import */ var _SVG_Twitter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./SVG/Twitter */ \"./components/SVG/Twitter.js\");\n\n\n\n\n\n\n\n\n\n\n\n// SVG ICONS\n\n\n\n\n\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNJO0FBQ0E7QUFDVTtBQUNOO0FBQ0k7QUFDTTtBQUNSO0FBQ1I7QUFDYztBQUNVO0FBQ3BELFlBQVk7QUFDMEI7QUFDTjtBQUNGO0FBQ0E7QUFDTTtBQW1CbEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbmRleC5qcz81MGQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXJkIGZyb20gXCIuL0NhcmRcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcclxuaW1wb3J0IEhlcm9TZWN0aW9uIGZyb20gXCIuL0hlcm9TZWN0aW9uXCI7XHJcbmltcG9ydCBTZWxlY3RvciBmcm9tIFwiLi9TZWxlY3RvclwiO1xyXG5pbXBvcnQgU2luZ2xlQ2FyZCBmcm9tIFwiLi9TaW5nbGVDYXJkXCI7XHJcbmltcG9ydCBTd2FwQ29tcG9uZW50IGZyb20gXCIuL1N3YXBDb21wb25lbnRcIjtcclxuaW1wb3J0IFN3YXBGaWVsZCBmcm9tIFwiLi9Td2FwRmllbGRcIjtcclxuaW1wb3J0IFRhYmxlIGZyb20gXCIuL1RhYmxlXCI7XHJcbmltcG9ydCBUb2tlbkJhbGFuY2UgZnJvbSBcIi4vVG9rZW5CYWxhbmNlXCI7XHJcbmltcG9ydCBUcmFuc2FjdGlvblN0YXR1cyBmcm9tIFwiLi9UcmFuc2FjdGlvblN0YXR1c1wiO1xyXG4vLyBTVkcgSUNPTlNcclxuaW1wb3J0IEZhY2VCb29rIGZyb20gXCIuL1NWRy9GYWNlYm9va1wiO1xyXG5pbXBvcnQgSW5zdGEgZnJvbSBcIi4vU1ZHL0luc3RhXCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCIuL1NWRy9Mb2dvXCI7XHJcbmltcG9ydCBNZW51IGZyb20gXCIuL1NWRy9NZW51XCI7XHJcbmltcG9ydCBUd2l0dGVyIGZyb20gXCIuL1NWRy9Ud2l0dGVyXCI7XHJcblxyXG5leHBvcnQge1xyXG4gIENhcmQsXHJcbiAgRm9vdGVyLFxyXG4gIEhlYWRlcixcclxuICBIZXJvU2VjdGlvbixcclxuICBTZWxlY3RvcixcclxuICBTaW5nbGVDYXJkLFxyXG4gIFN3YXBDb21wb25lbnQsXHJcbiAgU3dhcEZpZWxkLFxyXG4gIFRhYmxlLFxyXG4gIFRva2VuQmFsYW5jZSxcclxuICBUcmFuc2FjdGlvblN0YXR1cyxcclxuICBGYWNlQm9vayxcclxuICBJbnN0YSxcclxuICBMb2dvLFxyXG4gIE1lbnUsXHJcbiAgVHdpdHRlcixcclxufTtcclxuIl0sIm5hbWVzIjpbIkNhcmQiLCJGb290ZXIiLCJIZWFkZXIiLCJIZXJvU2VjdGlvbiIsIlNlbGVjdG9yIiwiU2luZ2xlQ2FyZCIsIlN3YXBDb21wb25lbnQiLCJTd2FwRmllbGQiLCJUYWJsZSIsIlRva2VuQmFsYW5jZSIsIlRyYW5zYWN0aW9uU3RhdHVzIiwiRmFjZUJvb2siLCJJbnN0YSIsIkxvZ28iLCJNZW51IiwiVHdpdHRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/index.js\n"));

/***/ })

});