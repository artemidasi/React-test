webpackHotUpdate("main",{

/***/ "./src/shared/Dropdown/Dropdown.tsx":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/Dropdown.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Dropdown = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar dropdown_css_1 = __importDefault(__webpack_require__(/*! ./dropdown.css */ \"./src/shared/Dropdown/dropdown.css\"));\r\nvar compose_examples_1 = __webpack_require__(/*! ../../shared/compose.examples */ \"./src/shared/compose.examples.tsx\");\r\nvar NOOP = function () { };\r\nfunction Dropdown(_a) {\r\n    var buttonOpen = _a.buttonOpen, buttonClose = _a.buttonClose, children = _a.children, isOpen = _a.isOpen, _b = _a.onOpen, onOpen = _b === void 0 ? NOOP : _b, _c = _a.onClose, onClose = _c === void 0 ? NOOP : _c;\r\n    var _d = react_1.default.useState(isOpen), isDropdownOpen = _d[0], setIsDropdownOpen = _d[1];\r\n    react_1.default.useEffect(function () { return setIsDropdownOpen(isOpen); }, [isOpen]);\r\n    react_1.default.useEffect(function () { return isDropdownOpen ? onOpen() : onClose(); }, [isDropdownOpen]);\r\n    var handleOpen = function () {\r\n        if (isOpen === undefined) {\r\n            setIsDropdownOpen(!isDropdownOpen);\r\n        }\r\n    };\r\n    buttonClose.props.onClick = compose_examples_1.pipe(buttonClose.props.onClick, handleOpen);\r\n    console.log(buttonClose);\r\n    // buttonClose.addEvenetListener(\"click\", () => handleOpen);\r\n    return (react_1.default.createElement(\"div\", { className: dropdown_css_1.default.container },\r\n        react_1.default.createElement(\"div\", { onClick: handleOpen }, buttonOpen),\r\n        isDropdownOpen && (react_1.default.createElement(\"div\", { className: dropdown_css_1.default.listContainer },\r\n            react_1.default.createElement(\"ul\", { onClick: NOOP, className: dropdown_css_1.default.list },\r\n                children,\r\n                buttonClose)))));\r\n}\r\nexports.Dropdown = Dropdown;\r\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/Dropdown.tsx?");

/***/ }),

/***/ "./src/shared/Dropdown/index.ts":
/*!**************************************!*\
  !*** ./src/shared/Dropdown/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Dropdown */ \"./src/shared/Dropdown/Dropdown.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/index.ts?");

/***/ }),

/***/ "./src/shared/compose.examples.tsx":
/*!*****************************************!*\
  !*** ./src/shared/compose.examples.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.pipe = exports.compose = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar pickFromSyntheticEvent_1 = __webpack_require__(/*! ../utilits/react/pickFromSyntheticEvent */ \"./src/utilits/react/pickFromSyntheticEvent.tsx\");\r\nvar preventDefault_1 = __webpack_require__(/*! ../utilits/react/preventDefault */ \"./src/utilits/react/preventDefault.tsx\");\r\nvar stopPropagation_1 = __webpack_require__(/*! ../utilits/react/stopPropagation */ \"./src/utilits/react/stopPropagation.tsx\");\r\nfunction InputExample(_a) {\r\n    var value = _a.value, onChange = _a.onChange;\r\n    return (React.createElement(\"input\", { value: value, onChange: pipe(preventDefault_1.preventDefault, stopPropagation_1.stopPropagation, pickFromSyntheticEvent_1.getValue, onChange) }));\r\n}\r\nfunction compose() {\r\n    var fns = [];\r\n    for (var _i = 0; _i < arguments.length; _i++) {\r\n        fns[_i] = arguments[_i];\r\n    }\r\n    return function (initialValue) {\r\n        return fns.reduceRight(function (previusValue, fn) { return fn(previusValue); }, initialValue);\r\n    };\r\n}\r\nexports.compose = compose;\r\nfunction pipe() {\r\n    var fns = [];\r\n    for (var _i = 0; _i < arguments.length; _i++) {\r\n        fns[_i] = arguments[_i];\r\n    }\r\n    return function (initialValue) { return fns.reduce(function (previusValue, fn) { return fn(previusValue); }, initialValue); };\r\n}\r\nexports.pipe = pipe;\r\nfunction pick(prop) {\r\n    return function (obj) { return obj[prop]; };\r\n}\r\nfunction isEquel(left) {\r\n    return function (right) { return left === right; };\r\n}\r\nfunction cond(b) {\r\n    return !b;\r\n}\r\nvar getValueNumber = pipe(pick(\"currentTarget\"), pick(\"value\"), parseInt);\r\n\n\n//# sourceURL=webpack:///./src/shared/compose.examples.tsx?");

/***/ }),

/***/ "./src/utilits/react/pickFromSyntheticEvent.tsx":
/*!******************************************************!*\
  !*** ./src/utilits/react/pickFromSyntheticEvent.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.getCkecked = exports.getValue = void 0;\r\nfunction pickFromSyntheticEvent() {\r\n    return function (key) { return function (fn) { return function (e) { return fn(e.currentTarget[key]); }; }; };\r\n}\r\nexports.getValue = pickFromSyntheticEvent()(\"value\");\r\nexports.getCkecked = pickFromSyntheticEvent()(\"checked\");\r\n\n\n//# sourceURL=webpack:///./src/utilits/react/pickFromSyntheticEvent.tsx?");

/***/ }),

/***/ "./src/utilits/react/preventDefault.tsx":
/*!**********************************************!*\
  !*** ./src/utilits/react/preventDefault.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.preventDefault = void 0;\r\nfunction preventDefault(fn) {\r\n    return function (e) {\r\n        e.preventDefault();\r\n        fn(e);\r\n    };\r\n}\r\nexports.preventDefault = preventDefault;\r\n\n\n//# sourceURL=webpack:///./src/utilits/react/preventDefault.tsx?");

/***/ }),

/***/ "./src/utilits/react/stopPropagation.tsx":
/*!***********************************************!*\
  !*** ./src/utilits/react/stopPropagation.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.stopPropagation = void 0;\r\nfunction stopPropagation(fn) {\r\n    return function (e) {\r\n        e.stopPropagation();\r\n        fn(e);\r\n    };\r\n}\r\nexports.stopPropagation = stopPropagation;\r\n\n\n//# sourceURL=webpack:///./src/utilits/react/stopPropagation.tsx?");

/***/ })

})