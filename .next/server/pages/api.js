"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api";
exports.ids = ["pages/api"];
exports.modules = {

/***/ "./pages/api/index.ts":
/*!****************************!*\
  !*** ./pages/api/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nfunction handler(request, response) {\n    fetch(\"http://bird.7host.ru:5050/test_api\").then((res)=>res.json()\n    ).then((data)=>{\n        return response.json(data);\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUVlLFFBQVEsQ0FBQ0EsT0FBTyxDQUMzQkMsT0FBdUIsRUFDdkJDLFFBQXlCLEVBQzNCLENBQUM7SUFDQ0MsS0FBSyxDQUFDLENBQW9DLHFDQUNyQ0MsSUFBSSxFQUFFQyxHQUFHLEdBQUtBLEdBQUcsQ0FBQ0MsSUFBSTtNQUN0QkYsSUFBSSxFQUFFRyxJQUFTLEdBQUssQ0FBQztRQUNsQixNQUFNLENBQUNMLFFBQVEsQ0FBQ0ksSUFBSSxDQUFDQyxJQUFJO0lBQzdCLENBQUM7QUFDVCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2luZGV4LnRzP2Y3MzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIoXG4gICAgcmVxdWVzdDogTmV4dEFwaVJlcXVlc3QsXG4gICAgcmVzcG9uc2U6IE5leHRBcGlSZXNwb25zZVxuKSB7XG4gICAgZmV0Y2goXCJodHRwOi8vYmlyZC43aG9zdC5ydTo1MDUwL3Rlc3RfYXBpXCIpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKGRhdGEpO1xuICAgICAgICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxdWVzdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/index.ts"));
module.exports = __webpack_exports__;

})();