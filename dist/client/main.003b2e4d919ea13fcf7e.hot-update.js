webpackHotUpdate("main",{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\r\nvar Header_1 = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\r\nvar Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\r\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\r\nvar CardsList_1 = __webpack_require__(/*! ./shared/CardsList */ \"./src/shared/CardsList/index.ts\");\r\nvar GenericList_1 = __webpack_require__(/*! ./shared/GenericList */ \"./src/shared/GenericList/index.ts\");\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ./utilits/react/generateRandomIndex */ \"./src/utilits/react/generateRandomIndex.ts\");\r\nvar merge_1 = __webpack_require__(/*! ./utilits/js/merge */ \"./src/utilits/js/merge.ts\");\r\nvar LIST = [\r\n    { As: \"li\", text: \"some\" },\r\n    { As: \"li\", text: \"over some\" },\r\n    { As: \"li\", text: \"some\" },\r\n].map(generateRandomIndex_1.generateId);\r\nconsole.log(LIST);\r\nfunction AppComponent() {\r\n    var _a = react_1.default.useState(LIST), list = _a[0], setList = _a[1];\r\n    var handleItemCLick = function (id) {\r\n        setList(list.filter(function (item) { return item.id != id; }));\r\n    };\r\n    var handleAdd = function () {\r\n        setList(list.concat(generateRandomIndex_1.generateId({ text: generateRandomIndex_1.generateRandomString(), As: 'li' })));\r\n    };\r\n    return (react_1.default.createElement(Layout_1.Layout, null,\r\n        react_1.default.createElement(Header_1.Header, null),\r\n        react_1.default.createElement(Content_1.Content, null,\r\n            react_1.default.createElement(CardsList_1.CardsList, null),\r\n            react_1.default.createElement(\"button\", { onClick: handleAdd }, \"Add Element\"),\r\n            react_1.default.createElement(\"ul\", null,\r\n                react_1.default.createElement(GenericList_1.GenericList, { list: list.map(merge_1.merge({ onClick: handleItemCLick })) })))));\r\n}\r\nexports.App = root_1.hot(function () { return react_1.default.createElement(AppComponent, null); });\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/utilits/react/generateRandomIndex.ts":
/*!**************************************************!*\
  !*** ./src/utilits/react/generateRandomIndex.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.generateId = exports.assignId = exports.generateRandomString = void 0;\r\nvar accos_1 = __webpack_require__(/*! ../js/accos */ \"./src/utilits/js/accos.tsx\");\r\nexports.generateRandomString = function () { return Math.random().toString(36).substring(2, 15); };\r\nexports.assignId = accos_1.assoc('id');\r\nexports.generateId = function (obj) { return exports.assignId(obj, exports.generateRandomString()); };\r\n\n\n//# sourceURL=webpack:///./src/utilits/react/generateRandomIndex.ts?");

/***/ })

})