(this["webpackChunkreact_webpack_dev"] = this["webpackChunkreact_webpack_dev"] || []).push([["main"],{

/***/ 48187:
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 67294);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ 95722);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main */ 13182);
/* harmony import */ var _sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sparrowengg/twigs-react */ 8714);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var App = function App() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    loaded = _useState2[0],
    setLoaded = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
      style: {
        textAlign: "center",
        marginTop: "100px"
      }
    }, "App is loading...")),
    _useState4 = _slicedToArray(_useState3, 2),
    child = _useState4[0],
    setChild = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setLoaded(true);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!loaded) return;
    var client = window.app.initialized();
    setChild( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_main__WEBPACK_IMPORTED_MODULE_2__["default"], {
      client: client
    }));
  }, [loaded]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {
    theme: {
      colors: {
        primary: "#19b885",
        primary100: "#d1f1e7",
        primary200: "#baeada",
        primary300: "#a3e3ce",
        primary400: "#19b885",
        primary500: "#17a678",
        primary600: "#14936a",
        primary700: "#12815d",
        primary800: "#0f6e50",
        primary900: "#0d5c43"
      },
      fonts: {
        body: "system-ui",
        heading: "sans-serif"
      },
      fontWeights: {
        "1": "100",
        "2": "200",
        "3": "300",
        "4": "400",
        "5": "500",
        "6": "600",
        "7": "700",
        "8": "800",
        "9": "900"
      }
    }
  }, child);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ 28273:
/*!***********************************************!*\
  !*** ./src/components/constants/constants.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chatGptToken": () => (/* binding */ chatGptToken),
/* harmony export */   "chatGptUrl": () => (/* binding */ chatGptUrl),
/* harmony export */   "seperator": () => (/* binding */ seperator),
/* harmony export */   "url": () => (/* binding */ url)
/* harmony export */ });
var chatGptToken = "Enter your Chatgpt API key here";
var chatGptUrl = "https://api.openai.com/v1/chat/completions";
var url = "https://api.surveysparrow.com";
var seperator = ":-:";

/***/ }),

/***/ 12388:
/*!***********************************************!*\
  !*** ./src/components/helpers/createGuide.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGuide": () => (/* binding */ createGuide)
/* harmony export */ });
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ 28273);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createGuide = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(name, client) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return client.request.post("".concat(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.url, "/v3/surveys"), {
            options: {
              headers: {
                "Authorization": "Bearer <%=iparams.surveysparrow_api_key%>"
              }
            }
          }, {
            "name": name,
            "survey_type": "ClassicForm"
          });
        case 2:
          return _context.abrupt("return", _context.sent);
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function createGuide(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ 42154:
/*!**********************************************!*\
  !*** ./src/components/helpers/createPlan.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createPlan)
/* harmony export */ });
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ 28273);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createPlan(_x, _x2, _x3, _x4) {
  return _createPlan.apply(this, arguments);
}
function _createPlan() {
  _createPlan = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(len, questionsArray, surveyId, client) {
    var i, _splitBySeperator, splitString, type, originalChoices, choices, isRequired, body;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          i = 0;
        case 1:
          if (!(i < len)) {
            _context.next = 17;
            break;
          }
          if (!questionsArray[i].startsWith(" ")) {
            _context.next = 4;
            break;
          }
          return _context.abrupt("continue", 14);
        case 4:
          _splitBySeperator = splitBySeperator(questionsArray, i), splitString = _splitBySeperator.splitString, type = _splitBySeperator.type;
          originalChoices = [];
          originalChoices = extractOriginalChoices(originalChoices, splitString);
          choices = [];
          choices = generatePayloadForChoices(originalChoices, choices);
          isRequired = splitString[3] === "Schedule" || splitString[3] === "schedule";
          body = {};
          body = assignBody(type, body, surveyId, splitString, isRequired, choices);
          _context.next = 14;
          return createQuestion(client, body);
        case 14:
          i++;
          _context.next = 1;
          break;
        case 17:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _createPlan.apply(this, arguments);
}
function generatePayloadForChoices(originalChoices, choices) {
  if (originalChoices !== null && originalChoices !== void 0 && originalChoices.length) {
    choices = originalChoices.map(function (str) {
      return {
        "text": str
      };
    });
  }
  return choices;
}
function extractOriginalChoices(originalChoices, splitString) {
  try {
    originalChoices = JSON.parse(splitString[2].replace(/'/g, '"'));
  } catch (error) {
    console.log('JSON parse error ');
  }
  return originalChoices;
}
function splitBySeperator(questionsArray, i) {
  var splitString = questionsArray[i].split("".concat(i + 1, "."))[1].split(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.seperator);
  var type = splitString[1].trim();
  type = typeCheck(type);
  return {
    splitString: splitString,
    type: type
  };
}
function createQuestion(_x5, _x6) {
  return _createQuestion.apply(this, arguments);
}
function _createQuestion() {
  _createQuestion = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(client, body) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return client.request.post("".concat(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.url, "/v3/questions"), {
            options: {
              headers: {
                "Authorization": "Bearer <%=iparams.surveysparrow_api_key%>"
              }
            }
          }, body);
        case 2:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _createQuestion.apply(this, arguments);
}
function assignBody(type, body, surveyId, splitString, isRequired, choices) {
  if (type === "MultiChoice" || type === "RankOrder") {
    body = {
      "survey_id": surveyId,
      "question": {
        "text": splitString[0],
        "type": type,
        "required": isRequired,
        "choices": choices
      }
    };
  } else {
    body = {
      "survey_id": surveyId,
      "question": {
        "text": splitString[0],
        "type": type,
        "required": isRequired
      }
    };
  }
  return body;
}
function typeCheck(type) {
  if (type === 'Scale') {
    type = "OpinionScale";
  } else if (type === "Ranking") {
    type = "RankOrder";
  }
  return type;
}

/***/ }),

/***/ 3160:
/*!************************************************!*\
  !*** ./src/components/helpers/generatePlan.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generatePlan": () => (/* binding */ generatePlan)
/* harmony export */ });
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ 28273);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function generatePlan(_x, _x2) {
  return _generatePlan.apply(this, arguments);
}
function _generatePlan() {
  _generatePlan = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(body, client) {
    var result;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return client.request.post(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.chatGptUrl, {
            options: {
              headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "Bearer ".concat(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.chatGptToken)
              }
            }
          }, body);
        case 2:
          result = _context.sent;
          console.log(result);
          return _context.abrupt("return", JSON.parse(result).body);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _generatePlan.apply(this, arguments);
}

/***/ }),

/***/ 83680:
/*!*****************************************!*\
  !*** ./src/components/helpers/query.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "query": () => (/* binding */ query)
/* harmony export */ });
var query = function query(content) {
  return {
    "model": "gpt-3.5-turbo",
    "messages": [{
      "role": "user",
      "content": "Create me a detailed plan for learning any programming language. create it day wise. ".concat(content, " language, Always mention the programming language and study guide after the programming language with a sepeartor \":-:\"(sepearator should be none other than \":-:\") between each of them(like: programmingLanguage:-:studyGuide:-:plan:-:schedule). A study guide should be always followed by programming language name followed by its detailed guide followed by its plan followed by its schedule")
    }]
  };
};

/***/ }),

/***/ 13182:
/*!********************************!*\
  !*** ./src/components/main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 67294);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/main.css */ 68362);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sparrowengg/twigs-react */ 8714);
/* harmony import */ var _components_images_delete_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/images/delete.svg */ 4882);
/* harmony import */ var _components_images_delete_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_images_delete_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_images_reset_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/images/reset.png */ 40025);
/* harmony import */ var _components_images_reset_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_images_reset_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/query */ 83680);
/* harmony import */ var _helpers_generatePlan__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/generatePlan */ 3160);
/* harmony import */ var _helpers_createGuide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers/createGuide */ 12388);
/* harmony import */ var _helpers_createPlan__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers/createPlan */ 42154);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-modal */ 83253);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_9__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






// import { PowerBIEmbed } from "powerbi-client-react";






var Main = function Main() {
  // For Todo List Tracker
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    tasks = _useState2[0],
    setTasks = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    newTask = _useState4[0],
    setNewTask = _useState4[1];

  // For Adding new guide 
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    modalIsOpen = _useState6[0],
    setModalIsOpen = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      language: '',
      content: ''
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    newChat = _useState8[0],
    setNewChat = _useState8[1];
  var handleAddChat = function handleAddChat() {
    if (newChat.language.trim() !== '' && newChat.content.trim() !== '') {
      chats.push(newChat);
      setNewChat({
        language: '',
        content: ''
      });
      closeModal();
    }
  };
  var openModal = function openModal() {
    setModalIsOpen(true);
  };
  var closeModal = function closeModal() {
    setModalIsOpen(false);
  };

  // =============================== For Chatgpt Integration and its chat components ===============================
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isDrawerOpen = _useState10[0],
    setIsDrawerOpen = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    selectedChat = _useState12[0],
    setSelectedChat = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState14 = _slicedToArray(_useState13, 2),
    surveyText = _useState14[0],
    setSurveyText = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState16 = _slicedToArray(_useState15, 2),
    isSubmitDisabled = _useState16[0],
    setIsSubmitDisabled = _useState16[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setIsSubmitDisabled(surveyText === "");
  }, [surveyText]);
  function handleSubmit() {
    return _handleSubmit.apply(this, arguments);
  }
  function _handleSubmit() {
    _handleSubmit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _response$choices$, _surveyObject$data, response, questionsArray, createSurveyResponse, surveyObject, surveyId, numQuestions;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setIsSubmitDisabled(true);
            _context.next = 4;
            return (0,_helpers_generatePlan__WEBPACK_IMPORTED_MODULE_6__.generatePlan)((0,_helpers_query__WEBPACK_IMPORTED_MODULE_5__.query)(surveyText), client);
          case 4:
            response = _context.sent;
            questionsArray = response === null || response === void 0 || (_response$choices$ = response.choices[0]) === null || _response$choices$ === void 0 || (_response$choices$ = _response$choices$.message) === null || _response$choices$ === void 0 ? void 0 : _response$choices$.content.split("\n");
            _context.next = 8;
            return (0,_helpers_createGuide__WEBPACK_IMPORTED_MODULE_7__.createGuide)(surveyText, client);
          case 8:
            createSurveyResponse = _context.sent;
            surveyObject = JSON.parse(createSurveyResponse).body;
            surveyId = surveyObject === null || surveyObject === void 0 || (_surveyObject$data = surveyObject.data) === null || _surveyObject$data === void 0 ? void 0 : _surveyObject$data.id;
            numQuestions = questionsArray.length;
            _context.next = 14;
            return (0,_helpers_createPlan__WEBPACK_IMPORTED_MODULE_8__["default"])(numQuestions, questionsArray, surveyId, client);
          case 14:
            document.getElementById("InputForChatGpt").value = "";
            client["interface"].alertMessage("Survey Generated Successfully", {
              type: "success"
            });
            setIsSubmitDisabled(false);
            _context.next = 25;
            break;
          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](0);
            document.getElementById("InputForChatGpt").value = "";
            setIsSubmitDisabled(false);
            client["interface"].alertMessage("Error while generating the survey. If your survey is malformed kindly delete it.", {
              type: "failure"
            });
            console.error(_context.t0);
          case 25:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 19]]);
    }));
    return _handleSubmit.apply(this, arguments);
  }
  var chats = [{
    language: "Python Programming",
    content: "Detailed Plan for Python Programming. Detailed Plan for Python Programming. Detailed Plan for Python Programming. Detailed Plan for Python Programming. Detailed Plan for Python Programming"
  }, {
    language: "Java Programming",
    content: "Detailed Plan for Java Programming"
  }, {
    language: "JavaScript Programming",
    content: "Detailed Plan for JavaScript Programming"
  }, {
    language: "Python Programming",
    content: "Detailed Plan for Python Programming. Detailed Plan for Python Programming. Detailed Plan for Python Programming. Detailed Plan for Python Programming. Detailed Plan for Python Programming"
  }, {
    language: "JavaScript Programming",
    content: "Detailed Plan for JavaScript Programming"
  }, {
    language: "Python Programming",
    content: "Detailed Plan for Python Programming. Detailed Plan for Python Programming. Detailed Plan for Python Programming. Detailed Plan for Python Programming. Detailed Plan for Python Programming"
  }, {
    language: "JavaScript Programming",
    content: "Detailed Plan for JavaScript Programming"
  }, {
    language: "Java Programming",
    content: "Detailed Plan for Java Programming"
  }, {
    language: "Python Programming",
    content: "Detailed Plan for Python Programming. Detailed Plan for Python Programming. Detailed Plan for Python Programming. Detailed Plan for Python Programming. Detailed Plan for Python Programming"
  }, {
    language: "JavaScript Programming",
    content: "Detailed Plan for JavaScript Programming"
  }, {
    language: "Java Programming",
    content: "Detailed Plan for Java Programming"
  }];

  // =============================== States for Todo list and its related functionalities ==========================
  var handleAddTask = function handleAddTask() {
    if (newTask.trim() !== "") {
      setTasks(function (prevTasks) {
        return [].concat(_toConsumableArray(prevTasks), [{
          id: prevTasks.length + 1,
          description: newTask,
          done: false
        }]);
      });
      setNewTask("");
    }
  };
  var handleEditTask = function handleEditTask(id, newDescription) {
    setTasks(function (prevTasks) {
      return prevTasks.map(function (task) {
        return task.id === id ? _objectSpread(_objectSpread({}, task), {}, {
          description: newDescription
        }) : task;
      });
    });
  };
  var handleRemoveTask = function handleRemoveTask(id) {
    setTasks(function (prevTasks) {
      return prevTasks.filter(function (task) {
        return task.id !== id;
      });
    });
  };
  var handleToggleDone = function handleToggleDone(id) {
    setTasks(function (prevTasks) {
      return prevTasks.map(function (task) {
        return task.id === id ? _objectSpread(_objectSpread({}, task), {}, {
          done: !task.done
        }) : task;
      });
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "title-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "title-main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "heading"
  }, "Learn ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " X "), " in ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " Y "), " Mins/Days"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "heading-2"
  }, "Prompt here to get your detailed study guide"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "title-chatgpt"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
    css: {
      mt: "$10"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
    css: {
      alignItems: "flex-start",
      flexDirection: "column",
      gap: "$12"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
    css: {
      width: "700px",
      fontSize: "20px",
      height: "55px",
      boxShadow: "0 7px 38px -3px rgba(159, 159, 159, 0.4)",
      border: "1px solid #9b9b9b"
    },
    id: "InputForChatGpt",
    onChange: function onChange(e) {
      setSurveyText(e.target.value);
    },
    placeholder: "What you want to learn today....",
    size: "xl"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleSubmit,
    disabled: isSubmitDisabled
  }, "Generate"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "title-todo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "todo-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "todo-terminal-design"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "red"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "yellow"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "green"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "todo-contents"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "todo-heading"
  }, "Tracker"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "add-tasks"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
    placeholder: "Add tasks",
    css: {
      height: "40px",
      fontSize: "$md",
      border: "1px solid #9b9b9b"
    },
    value: newTask,
    onChange: function onChange(e) {
      return setNewTask(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "addTask",
    onClick: handleAddTask
  }, "Add Task")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "task-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    id: "task-table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "S.No"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      width: "15rem"
    }
  }, "Task"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      width: "5rem"
    }
  }, "Re-write"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Remove"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Done")), tasks.length > 0 ? tasks.map(function (task) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: task.id,
      className: task.done ? "done" : ""
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, task.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, task.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: (_components_images_reset_png__WEBPACK_IMPORTED_MODULE_4___default()),
      alt: "change",
      style: {
        width: "1rem",
        cursor: "pointer"
      },
      onClick: function onClick() {
        var newDescription = prompt("Enter new description:", task.description);
        if (newDescription !== null) {
          handleEditTask(task.id, newDescription);
        }
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: (_components_images_delete_svg__WEBPACK_IMPORTED_MODULE_3___default()),
      alt: "delete",
      style: {
        width: "1rem",
        cursor: "pointer"
      },
      onClick: function onClick() {
        return handleRemoveTask(task.id);
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "checkbox",
      checked: task.done,
      onChange: function onChange() {
        return handleToggleDone(task.id);
      }
    })));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: "5"
  }, "No tasks found"))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "guide-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "heading"
  }, "Get your ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "P"), "repared Guide ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Here!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "guide-result"
  }, chats.map(function (chat, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "study-guide",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_2__.Drawer, {
      isOpen: selectedChat === index && isDrawerOpen,
      onClose: function onClose() {
        return setIsDrawerOpen(false);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_2__.DrawerHeader, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
      size: "h4"
    }, chat.language)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_2__.DrawerBody, null, chat.content)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
      onClick: function onClick() {
        setSelectedChat(index);
        setIsDrawerOpen(true);
      },
      css: {
        width: "12vw",
        height: "2.5rem"
      }
    }, chat.language));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "guide-add",
    onClick: openModal
  }, "+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_modal__WEBPACK_IMPORTED_MODULE_9___default()), {
    isOpen: modalIsOpen,
    onRequestClose: closeModal,
    contentLabel: "Add New Chat Modal",
    className: "custom-modal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Add New Chat"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "label-1"
  }, "Language", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    placeholder: "Choose your Programming Language",
    value: newChat.language,
    onChange: function onChange(e) {
      return setNewChat(_objectSpread(_objectSpread({}, newChat), {}, {
        language: e.target.value
      }));
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "label-2"
  }, "Content", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    placeholder: "Type your plan here",
    value: newChat.content,
    onChange: function onChange(e) {
      return setNewChat(_objectSpread(_objectSpread({}, newChat), {}, {
        content: e.target.value
      }));
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "buttons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleAddChat,
    className: "modal-button-addChat"
  }, "Add Chat"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: closeModal,
    className: "modal-button-cancel"
  }, "Cancel"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "leetcode-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "heading"
  }, "Personalized Dashboard", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "heading-2"
  }, "Connect to your ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Leet"), "Code account and get personalized dashboard experience"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
    css: {
      width: "700px",
      fontSize: "20px",
      height: "55px",
      boxShadow: "0 7px 38px -3px rgba(159, 159, 159, 0.4)",
      border: "1px solid #9b9b9b"
    },
    placeholder: "Enter your leetcode username",
    size: "xl"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "leetcode-dashboard"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),

/***/ 55579:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 67294);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ 73935);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ 98548);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ 48187);




react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], null)), document.getElementById('root'));

/***/ }),

/***/ 39087:
/*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/App.css ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ 23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n\n", "",{"version":3,"sources":["webpack://src/App.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,oBAAoB;AACtB","sourcesContent":[".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 28158:
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/css/main.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ 61667);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_Liyakhat_Project_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/Liyakhat_Project.svg */ 70521);
/* harmony import */ var _images_Liyakhat_Project_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_Liyakhat_Project_svg__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()((_images_Liyakhat_Project_svg__WEBPACK_IMPORTED_MODULE_2___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* ========================================================== Title Division ================================================================= */\r\n\r\n.title-content{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 10rem;\r\n    width: 100%;\r\n    padding: 2rem 1.5rem;\r\n    height: 60vh;\r\n    background-color: #CEE7EA;\r\n    z-index: 10;\r\n}\r\n\r\n.title-content .title-main{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 3rem;\r\n}\r\n\r\n.title-content .title-main .heading{\r\n    font-size: 35px;\r\n    font-weight: 800;\r\n}\r\n\r\n.title-content .title-main .heading span{\r\n    color: #56B0BB;\r\n}\r\n\r\n.title-content .title-main .heading-2{\r\n    font-size: 20px;\r\n    font-weight: 500;\r\n}\r\n\r\n.title-content .title-main .title-chatgpt button{\r\n    width: 7rem;\r\n    height: 3rem;\r\n    font-size: 17px;\r\n    background-color: #ffff;\r\n    border-radius: .375rem;\r\n    cursor: pointer;\r\n    border: 1px solid #56B0BB;\r\n    /* background-color: #56B0BB; */\r\n    color: #56B0BB;\r\n    font-weight: 600;\r\n    transition: background .1s ease-in-out;\r\n}\r\n\r\n.title-content .title-main .title-chatgpt button:hover{\r\n    background-color: #56afbb90;\r\n    color: #ffff;\r\n}\r\n\r\n/* ============================================================= Todo Container ============================================================= */\r\n\r\n.title-content .title-todo {\r\n    width: 28rem;\r\n    height: 20rem;\r\n    border: .5px solid #9b9b9b;\r\n    border-radius: .5rem;\r\n    padding: 1rem;\r\n    box-shadow: 0 7px 38px -3px rgba(159, 159, 159, 0.4);\r\n    z-index: 0;\r\n    background-color: #fff;\r\n}\r\n\r\n.title-content .title-todo .todo-container{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.title-content .title-todo .todo-container .todo-terminal-design{\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: .3rem;\r\n    margin-top: -.5rem;\r\n    margin-left: -.5rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.title-content .title-todo .todo-container .todo-terminal-design .red, \r\n.title-content .title-todo .todo-container .todo-terminal-design .green, \r\n.title-content .title-todo .todo-container .todo-terminal-design .yellow{\r\n    width: .55rem;\r\n    height: .55rem;\r\n    border-radius: 50%;\r\n    transition: background .2s ease-in-out;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-repeat: no-repeat;\r\n    background-size: .45rem;\r\n    background-position: center;\r\n}\r\n\r\n.title-content .title-todo .todo-container .todo-terminal-design .red{\r\n    background-color: red;\r\n}\r\n\r\n.title-content .title-todo .todo-container .todo-terminal-design .green{\r\n    background-color: rgb(21, 182, 21);\r\n}\r\n\r\n.title-content .title-todo .todo-container .todo-terminal-design .yellow{\r\n    background-color: rgb(226, 195, 20);\r\n}\r\n\r\n.title-content .title-todo .todo-container .todo-contents{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\n.title-content .title-todo .todo-container .todo-contents .todo-heading{\r\n    font-size: 25px;\r\n    font-weight: 700;\r\n}\r\n\r\n.title-content .title-todo .todo-container .todo-contents .add-tasks{\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: .5rem;\r\n}\r\n\r\n.title-content .title-todo .todo-container .todo-contents .add-tasks button{\r\n    width: 7rem;\r\n    background-color: #ffff;\r\n    border-radius: .375rem;\r\n    cursor: pointer;\r\n    border: 1px solid #56B0BB;\r\n    /* background-color: #56B0BB; */\r\n    color: #56B0BB;\r\n    font-weight: 600;\r\n    transition: background .1s ease-in-out;\r\n}\r\n\r\n.title-content .title-todo .todo-container .todo-contents .add-tasks button:hover{\r\n    background-color: #56B0BB;\r\n    color: #ffff;\r\n}\r\n\r\n\r\n\r\n  /* ===================================================  Table contents Scrollable =================================================== */\r\n  .title-content .title-todo .todo-container .todo-contents .task-container {\r\n    overflow-y: auto;\r\n    overflow-x: auto;\r\n    height: 10rem;\r\n  }\r\n  \r\n  .title-content .title-todo .todo-container .todo-contents .task-container #task-table {\r\n    font-size: 13px;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n    border-radius: .5rem;\r\n  }\r\n  \r\n  .title-content .title-todo .todo-container .todo-contents .task-container #task-table td,\r\n  .title-content .title-todo .todo-container .todo-contents .task-container #task-table th {\r\n    border: 1px solid #9b9b9b;\r\n    text-align: left;\r\n    padding: 8px;\r\n  }\r\n\r\n  .title-content .title-todo .todo-container .todo-contents .task-container #task-table td img{\r\n    width: 1rem;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .title-content .title-todo .todo-container .todo-contents .task-container #task-table tr {\r\n    transition: background .2s ease-in;\r\n  }\r\n \r\n  .title-content .title-todo .todo-container .todo-contents .task-container #task-table tr:nth-child(even) {\r\n    background-color: #e7e7e7;\r\n  }\r\n  \r\n  .title-content .title-todo .todo-container .todo-contents .task-container #task-table tr:hover {\r\n    background-color: #f6f6f6e1;\r\n  }\r\n\r\n  .title-content .title-todo .todo-container .todo-contents .task-container #task-table tr.done {\r\n    background-color: rgba(108, 232, 108, 0.489);  \r\n}\r\n\r\n    .title-content .title-todo .todo-container .todo-contents .task-container #task-table tr.done:hover {\r\n        background-color: rgba(108, 232, 108, 0.679);  \r\n    }\r\n\r\n    /* ===================================================  Guide contents =================================================== */\r\n\r\n.guide-content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 3rem;\r\n    padding: 2rem;\r\n}\r\n\r\n.guide-content .heading{\r\n    font-size: 30px;\r\n    font-weight: 800;\r\n}\r\n\r\n.guide-content .heading span{\r\n    color: #56B0BB;\r\n}\r\n\r\n.guide-content .guide-result{\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    gap: 2rem;\r\n}\r\n\r\n.guide-content .guide-result .study-guide\r\n{\r\n    width: 15rem;\r\n    height: 5rem;\r\n    background-color: #56afbb22;\r\n    border: .02rem solid #56B0BB;\r\n    border-radius: .375rem;\r\n    cursor: pointer;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 15px;\r\n    font-weight: 600;\r\n    box-shadow: 0 7px 38px -3px rgba(159, 159, 159, 0.4);\r\n    transition: background .2s ease-in-out, box-shadow .2s ease-in-out, scale .1s ease-out;\r\n}\r\n\r\n.guide-content .guide-result .study-guide:hover{\r\n    box-shadow: 0 7px 45px -10px rgba(84, 84, 84, 0.523);\r\n    background-color: #56afbb46;\r\n    scale: 1.03;\r\n}\r\n\r\n.guide-content .guide-result .guide-add{\r\n    width: 15rem;\r\n    height: 5rem;\r\n    background-color: #56afbb22;\r\n    border: .02rem solid #56B0BB;\r\n    color: #5d9da5;\r\n    border-radius: .375rem;\r\n    cursor: pointer;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 34px;\r\n    font-weight: 600;\r\n    box-shadow: 0 7px 38px -3px rgba(159, 159, 159, 0.4);\r\n    transition: background .2s ease-in-out, box-shadow .2s ease-in-out, scale .1s ease-out;\r\n}\r\n\r\n.guide-content .guide-result .guide-add:hover{\r\n    box-shadow: 0 7px 45px -10px rgba(84, 84, 84, 0.523);\r\n    background-color: #56afbb46;\r\n    scale: 1.03;\r\n}\r\n    /* ===================================================  Custom Modal =================================================== */\r\n\r\n    .custom-modal {\r\n        /* Your styles for the modal */\r\n        position: absolute;\r\n        top: 50%;\r\n        left: 50%;\r\n        transform: translate(-50%, -50%);\r\n        background-color: #fff;\r\n        padding: 20px;\r\n        border: 1px solid #ccc;\r\n        borderRadius: 5px;\r\n        width: 40vw;\r\n        height: 70vh;\r\n        border-radius: .1rem solid black;\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        align-content: center;\r\n        gap: 3rem;\r\n      }\r\n\r\n      .custom-modal h2{\r\n        font-size: 25px;\r\n        font-weight: 800;\r\n      }\r\n\r\n      .custom-modal .label-1, .custom-modal .label-2{\r\n        display: flex;\r\n        flex-direction: row;\r\n        gap: 2rem;\r\n        font-size: 20px;\r\n        align-items: center;\r\n      }\r\n\r\n      .custom-modal .label-1 input[type=text]{\r\n        width: 100%;\r\n        height: 2.3rem;\r\n        padding: 1rem;\r\n        border-radius: .375rem;\r\n        border: 1px solid rgb(155, 155, 155);\r\n        font-size: 12px;\r\n      }\r\n\r\n      .custom-modal .label-2 textarea{\r\n        width: 100%;\r\n        min-height: 5rem;\r\n        max-height: 10rem;\r\n        padding: .5rem;\r\n        border-radius: .375rem;\r\n        border: 1px solid rgb(155, 155, 155);\r\n        font-size: 12px;\r\n      }\r\n\r\n      .custom-modal .buttons{\r\n        display: flex;\r\n        flex-direction: row;\r\n        justify-content: center;\r\n        align-items: center;\r\n        gap: 2rem;\r\n      }\r\n\r\n      .custom-modal .buttons .modal-button-addChat, .custom-modal .buttons .modal-button-cancel{\r\n        width: 7rem;\r\n        height: 3rem;\r\n        background-color: #56B0BB;\r\n        color: #ffff;\r\n        border-radius: .375rem;\r\n        cursor: pointer;\r\n        border: 1px solid #56B0BB;\r\n        /* background-color: #56B0BB; */\r\n        font-weight: 600;\r\n        transition: background .1s ease-in-out;\r\n      }\r\n      \r\n      .custom-modal .buttons .modal-button-addChat:hover, .custom-modal .buttons .modal-button-cancel:hover{\r\n        \r\n        background-color: #ffff;\r\n        color: #56B0BB;\r\n    }\r\n      \r\n\r\n    /* ===================================================  Leetcode contents =================================================== */\r\n\r\n    .leetcode-content{\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 3rem;\r\n        padding: 2rem;\r\n    }\r\n\r\n    .leetcode-content .heading{\r\n        font-size: 30px;\r\n        font-weight: 800;\r\n    }\r\n\r\n    .leetcode-content .heading span{\r\n        color: #56B0BB;\r\n    }\r\n\r\n    .leetcode-content .heading-2{\r\n        font-size: 18px;\r\n        font-weight: 700;\r\n    }\r\n\r\n    .leetcode-content .heading-2 span{\r\n        color: #f68e33;\r\n    }\r\n\r\n    .leetcode-content .leetcode-dashboard{\r\n        width: 100%;\r\n        height: 120vh;\r\n        background-color: #e7e7e7;\r\n        background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n        background-repeat: no-repeat;\r\n        background-size: cover;\r\n        background-position: center;\r\n    }   \r\n\r\n", "",{"version":3,"sources":["webpack://src/components/css/main.css"],"names":[],"mappings":"AAAA,gJAAgJ;;AAEhJ;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;IACV,WAAW;IACX,oBAAoB;IACpB,YAAY;IACZ,yBAAyB;IACzB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,eAAe;IACf,uBAAuB;IACvB,sBAAsB;IACtB,eAAe;IACf,yBAAyB;IACzB,+BAA+B;IAC/B,cAAc;IACd,gBAAgB;IAChB,sCAAsC;AAC1C;;AAEA;IACI,2BAA2B;IAC3B,YAAY;AAChB;;AAEA,+IAA+I;;AAE/I;IACI,YAAY;IACZ,aAAa;IACb,0BAA0B;IAC1B,oBAAoB;IACpB,aAAa;IACb,oDAAoD;IACpD,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;IACV,kBAAkB;IAClB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;;;IAGI,aAAa;IACb,cAAc;IACd,kBAAkB;IAClB,sCAAsC;IACtC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,4BAA4B;IAC5B,uBAAuB;IACvB,2BAA2B;AAC/B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,WAAW;IACX,uBAAuB;IACvB,sBAAsB;IACtB,eAAe;IACf,yBAAyB;IACzB,+BAA+B;IAC/B,cAAc;IACd,gBAAgB;IAChB,sCAAsC;AAC1C;;AAEA;IACI,yBAAyB;IACzB,YAAY;AAChB;;;;EAIE,uIAAuI;EACvI;IACE,gBAAgB;IAChB,gBAAgB;IAChB,aAAa;EACf;;EAEA;IACE,eAAe;IACf,yBAAyB;IACzB,WAAW;IACX,oBAAoB;EACtB;;EAEA;;IAEE,yBAAyB;IACzB,gBAAgB;IAChB,YAAY;EACd;;EAEA;IACE,WAAW;IACX,eAAe;EACjB;;EAEA;IACE,kCAAkC;EACpC;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,2BAA2B;EAC7B;;EAEA;IACE,4CAA4C;AAChD;;IAEI;QACI,4CAA4C;IAChD;;IAEA,4HAA4H;;AAEhI;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,mBAAmB;IACnB,eAAe;IACf,SAAS;AACb;;AAEA;;IAEI,YAAY;IACZ,YAAY;IACZ,2BAA2B;IAC3B,4BAA4B;IAC5B,sBAAsB;IACtB,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,gBAAgB;IAChB,oDAAoD;IACpD,sFAAsF;AAC1F;;AAEA;IACI,oDAAoD;IACpD,2BAA2B;IAC3B,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,2BAA2B;IAC3B,4BAA4B;IAC5B,cAAc;IACd,sBAAsB;IACtB,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,gBAAgB;IAChB,oDAAoD;IACpD,sFAAsF;AAC1F;;AAEA;IACI,oDAAoD;IACpD,2BAA2B;IAC3B,WAAW;AACf;IACI,0HAA0H;;IAE1H;QACI,8BAA8B;QAC9B,kBAAkB;QAClB,QAAQ;QACR,SAAS;QACT,gCAAgC;QAChC,sBAAsB;QACtB,aAAa;QACb,sBAAsB;QACtB,iBAAiB;QACjB,WAAW;QACX,YAAY;QACZ,gCAAgC;QAChC,aAAa;QACb,sBAAsB;QACtB,uBAAuB;QACvB,qBAAqB;QACrB,SAAS;MACX;;MAEA;QACE,eAAe;QACf,gBAAgB;MAClB;;MAEA;QACE,aAAa;QACb,mBAAmB;QACnB,SAAS;QACT,eAAe;QACf,mBAAmB;MACrB;;MAEA;QACE,WAAW;QACX,cAAc;QACd,aAAa;QACb,sBAAsB;QACtB,oCAAoC;QACpC,eAAe;MACjB;;MAEA;QACE,WAAW;QACX,gBAAgB;QAChB,iBAAiB;QACjB,cAAc;QACd,sBAAsB;QACtB,oCAAoC;QACpC,eAAe;MACjB;;MAEA;QACE,aAAa;QACb,mBAAmB;QACnB,uBAAuB;QACvB,mBAAmB;QACnB,SAAS;MACX;;MAEA;QACE,WAAW;QACX,YAAY;QACZ,yBAAyB;QACzB,YAAY;QACZ,sBAAsB;QACtB,eAAe;QACf,yBAAyB;QACzB,+BAA+B;QAC/B,gBAAgB;QAChB,sCAAsC;MACxC;;MAEA;;QAEE,uBAAuB;QACvB,cAAc;IAClB;;;IAGA,+HAA+H;;IAE/H;QACI,aAAa;QACb,sBAAsB;QACtB,SAAS;QACT,aAAa;IACjB;;IAEA;QACI,eAAe;QACf,gBAAgB;IACpB;;IAEA;QACI,cAAc;IAClB;;IAEA;QACI,eAAe;QACf,gBAAgB;IACpB;;IAEA;QACI,cAAc;IAClB;;IAEA;QACI,WAAW;QACX,aAAa;QACb,yBAAyB;QACzB,yDAAuD;QACvD,4BAA4B;QAC5B,sBAAsB;QACtB,2BAA2B;IAC/B","sourcesContent":["/* ========================================================== Title Division ================================================================= */\r\n\r\n.title-content{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 10rem;\r\n    width: 100%;\r\n    padding: 2rem 1.5rem;\r\n    height: 60vh;\r\n    background-color: #CEE7EA;\r\n    z-index: 10;\r\n}\r\n\r\n.title-content .title-main{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 3rem;\r\n}\r\n\r\n.title-content .title-main .heading{\r\n    font-size: 35px;\r\n    font-weight: 800;\r\n}\r\n\r\n.title-content .title-main .heading span{\r\n    color: #56B0BB;\r\n}\r\n\r\n.title-content .title-main .heading-2{\r\n    font-size: 20px;\r\n    font-weight: 500;\r\n}\r\n\r\n.title-content .title-main .title-chatgpt button{\r\n    width: 7rem;\r\n    height: 3rem;\r\n    font-size: 17px;\r\n    background-color: #ffff;\r\n    border-radius: .375rem;\r\n    cursor: pointer;\r\n    border: 1px solid #56B0BB;\r\n    /* background-color: #56B0BB; */\r\n    color: #56B0BB;\r\n    font-weight: 600;\r\n    transition: background .1s ease-in-out;\r\n}\r\n\r\n.title-content .title-main .title-chatgpt button:hover{\r\n    background-color: #56afbb90;\r\n    color: #ffff;\r\n}\r\n\r\n/* ============================================================= Todo Container ============================================================= */\r\n\r\n.title-content .title-todo {\r\n    width: 28rem;\r\n    height: 20rem;\r\n    border: .5px solid #9b9b9b;\r\n    border-radius: .5rem;\r\n    padding: 1rem;\r\n    box-shadow: 0 7px 38px -3px rgba(159, 159, 159, 0.4);\r\n    z-index: 0;\r\n    background-color: #fff;\r\n}\r\n\r\n.title-content .title-todo .todo-container{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.title-content .title-todo .todo-container .todo-terminal-design{\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: .3rem;\r\n    margin-top: -.5rem;\r\n    margin-left: -.5rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.title-content .title-todo .todo-container .todo-terminal-design .red, \r\n.title-content .title-todo .todo-container .todo-terminal-design .green, \r\n.title-content .title-todo .todo-container .todo-terminal-design .yellow{\r\n    width: .55rem;\r\n    height: .55rem;\r\n    border-radius: 50%;\r\n    transition: background .2s ease-in-out;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-repeat: no-repeat;\r\n    background-size: .45rem;\r\n    background-position: center;\r\n}\r\n\r\n.title-content .title-todo .todo-container .todo-terminal-design .red{\r\n    background-color: red;\r\n}\r\n\r\n.title-content .title-todo .todo-container .todo-terminal-design .green{\r\n    background-color: rgb(21, 182, 21);\r\n}\r\n\r\n.title-content .title-todo .todo-container .todo-terminal-design .yellow{\r\n    background-color: rgb(226, 195, 20);\r\n}\r\n\r\n.title-content .title-todo .todo-container .todo-contents{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\n.title-content .title-todo .todo-container .todo-contents .todo-heading{\r\n    font-size: 25px;\r\n    font-weight: 700;\r\n}\r\n\r\n.title-content .title-todo .todo-container .todo-contents .add-tasks{\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: .5rem;\r\n}\r\n\r\n.title-content .title-todo .todo-container .todo-contents .add-tasks button{\r\n    width: 7rem;\r\n    background-color: #ffff;\r\n    border-radius: .375rem;\r\n    cursor: pointer;\r\n    border: 1px solid #56B0BB;\r\n    /* background-color: #56B0BB; */\r\n    color: #56B0BB;\r\n    font-weight: 600;\r\n    transition: background .1s ease-in-out;\r\n}\r\n\r\n.title-content .title-todo .todo-container .todo-contents .add-tasks button:hover{\r\n    background-color: #56B0BB;\r\n    color: #ffff;\r\n}\r\n\r\n\r\n\r\n  /* ===================================================  Table contents Scrollable =================================================== */\r\n  .title-content .title-todo .todo-container .todo-contents .task-container {\r\n    overflow-y: auto;\r\n    overflow-x: auto;\r\n    height: 10rem;\r\n  }\r\n  \r\n  .title-content .title-todo .todo-container .todo-contents .task-container #task-table {\r\n    font-size: 13px;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n    border-radius: .5rem;\r\n  }\r\n  \r\n  .title-content .title-todo .todo-container .todo-contents .task-container #task-table td,\r\n  .title-content .title-todo .todo-container .todo-contents .task-container #task-table th {\r\n    border: 1px solid #9b9b9b;\r\n    text-align: left;\r\n    padding: 8px;\r\n  }\r\n\r\n  .title-content .title-todo .todo-container .todo-contents .task-container #task-table td img{\r\n    width: 1rem;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .title-content .title-todo .todo-container .todo-contents .task-container #task-table tr {\r\n    transition: background .2s ease-in;\r\n  }\r\n \r\n  .title-content .title-todo .todo-container .todo-contents .task-container #task-table tr:nth-child(even) {\r\n    background-color: #e7e7e7;\r\n  }\r\n  \r\n  .title-content .title-todo .todo-container .todo-contents .task-container #task-table tr:hover {\r\n    background-color: #f6f6f6e1;\r\n  }\r\n\r\n  .title-content .title-todo .todo-container .todo-contents .task-container #task-table tr.done {\r\n    background-color: rgba(108, 232, 108, 0.489);  \r\n}\r\n\r\n    .title-content .title-todo .todo-container .todo-contents .task-container #task-table tr.done:hover {\r\n        background-color: rgba(108, 232, 108, 0.679);  \r\n    }\r\n\r\n    /* ===================================================  Guide contents =================================================== */\r\n\r\n.guide-content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 3rem;\r\n    padding: 2rem;\r\n}\r\n\r\n.guide-content .heading{\r\n    font-size: 30px;\r\n    font-weight: 800;\r\n}\r\n\r\n.guide-content .heading span{\r\n    color: #56B0BB;\r\n}\r\n\r\n.guide-content .guide-result{\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    gap: 2rem;\r\n}\r\n\r\n.guide-content .guide-result .study-guide\r\n{\r\n    width: 15rem;\r\n    height: 5rem;\r\n    background-color: #56afbb22;\r\n    border: .02rem solid #56B0BB;\r\n    border-radius: .375rem;\r\n    cursor: pointer;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 15px;\r\n    font-weight: 600;\r\n    box-shadow: 0 7px 38px -3px rgba(159, 159, 159, 0.4);\r\n    transition: background .2s ease-in-out, box-shadow .2s ease-in-out, scale .1s ease-out;\r\n}\r\n\r\n.guide-content .guide-result .study-guide:hover{\r\n    box-shadow: 0 7px 45px -10px rgba(84, 84, 84, 0.523);\r\n    background-color: #56afbb46;\r\n    scale: 1.03;\r\n}\r\n\r\n.guide-content .guide-result .guide-add{\r\n    width: 15rem;\r\n    height: 5rem;\r\n    background-color: #56afbb22;\r\n    border: .02rem solid #56B0BB;\r\n    color: #5d9da5;\r\n    border-radius: .375rem;\r\n    cursor: pointer;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 34px;\r\n    font-weight: 600;\r\n    box-shadow: 0 7px 38px -3px rgba(159, 159, 159, 0.4);\r\n    transition: background .2s ease-in-out, box-shadow .2s ease-in-out, scale .1s ease-out;\r\n}\r\n\r\n.guide-content .guide-result .guide-add:hover{\r\n    box-shadow: 0 7px 45px -10px rgba(84, 84, 84, 0.523);\r\n    background-color: #56afbb46;\r\n    scale: 1.03;\r\n}\r\n    /* ===================================================  Custom Modal =================================================== */\r\n\r\n    .custom-modal {\r\n        /* Your styles for the modal */\r\n        position: absolute;\r\n        top: 50%;\r\n        left: 50%;\r\n        transform: translate(-50%, -50%);\r\n        background-color: #fff;\r\n        padding: 20px;\r\n        border: 1px solid #ccc;\r\n        borderRadius: 5px;\r\n        width: 40vw;\r\n        height: 70vh;\r\n        border-radius: .1rem solid black;\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        align-content: center;\r\n        gap: 3rem;\r\n      }\r\n\r\n      .custom-modal h2{\r\n        font-size: 25px;\r\n        font-weight: 800;\r\n      }\r\n\r\n      .custom-modal .label-1, .custom-modal .label-2{\r\n        display: flex;\r\n        flex-direction: row;\r\n        gap: 2rem;\r\n        font-size: 20px;\r\n        align-items: center;\r\n      }\r\n\r\n      .custom-modal .label-1 input[type=text]{\r\n        width: 100%;\r\n        height: 2.3rem;\r\n        padding: 1rem;\r\n        border-radius: .375rem;\r\n        border: 1px solid rgb(155, 155, 155);\r\n        font-size: 12px;\r\n      }\r\n\r\n      .custom-modal .label-2 textarea{\r\n        width: 100%;\r\n        min-height: 5rem;\r\n        max-height: 10rem;\r\n        padding: .5rem;\r\n        border-radius: .375rem;\r\n        border: 1px solid rgb(155, 155, 155);\r\n        font-size: 12px;\r\n      }\r\n\r\n      .custom-modal .buttons{\r\n        display: flex;\r\n        flex-direction: row;\r\n        justify-content: center;\r\n        align-items: center;\r\n        gap: 2rem;\r\n      }\r\n\r\n      .custom-modal .buttons .modal-button-addChat, .custom-modal .buttons .modal-button-cancel{\r\n        width: 7rem;\r\n        height: 3rem;\r\n        background-color: #56B0BB;\r\n        color: #ffff;\r\n        border-radius: .375rem;\r\n        cursor: pointer;\r\n        border: 1px solid #56B0BB;\r\n        /* background-color: #56B0BB; */\r\n        font-weight: 600;\r\n        transition: background .1s ease-in-out;\r\n      }\r\n      \r\n      .custom-modal .buttons .modal-button-addChat:hover, .custom-modal .buttons .modal-button-cancel:hover{\r\n        \r\n        background-color: #ffff;\r\n        color: #56B0BB;\r\n    }\r\n      \r\n\r\n    /* ===================================================  Leetcode contents =================================================== */\r\n\r\n    .leetcode-content{\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 3rem;\r\n        padding: 2rem;\r\n    }\r\n\r\n    .leetcode-content .heading{\r\n        font-size: 30px;\r\n        font-weight: 800;\r\n    }\r\n\r\n    .leetcode-content .heading span{\r\n        color: #56B0BB;\r\n    }\r\n\r\n    .leetcode-content .heading-2{\r\n        font-size: 18px;\r\n        font-weight: 700;\r\n    }\r\n\r\n    .leetcode-content .heading-2 span{\r\n        color: #f68e33;\r\n    }\r\n\r\n    .leetcode-content .leetcode-dashboard{\r\n        width: 100%;\r\n        height: 120vh;\r\n        background-color: #e7e7e7;\r\n        background-image: url(\"../images/Liyakhat_Project.svg\");\r\n        background-repeat: no-repeat;\r\n        background-size: cover;\r\n        background-position: center;\r\n    }   \r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 51424:
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ 23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n\tmargin: 0;\n\tfont-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n\t\t\"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n\t\tsans-serif;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n\tfont-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n\t\tmonospace;\n}\n", "",{"version":3,"sources":["webpack://src/index.css"],"names":[],"mappings":"AAAA;CACC,SAAS;CACT;;YAEW;CACX,mCAAmC;CACnC,kCAAkC;AACnC;;AAEA;CACC;WACU;AACX","sourcesContent":["body {\n\tmargin: 0;\n\tfont-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n\t\t\"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n\t\tsans-serif;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n\tfont-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n\t\tmonospace;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 70521:
/*!****************************************************!*\
  !*** ./src/components/images/Liyakhat_Project.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "/assets/img/Liyakhat_Projectd3dcdb6e.svg";

/***/ }),

/***/ 4882:
/*!******************************************!*\
  !*** ./src/components/images/delete.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "/assets/img/delete05b23055.svg";

/***/ }),

/***/ 40025:
/*!*****************************************!*\
  !*** ./src/components/images/reset.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "/assets/img/reset5a28dcbe.png";

/***/ }),

/***/ 95722:
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 93379);
            var content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./App.css */ 39087);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 68362:
/*!*************************************!*\
  !*** ./src/components/css/main.css ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 93379);
            var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./main.css */ 28158);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 98548:
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 93379);
            var content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ 51424);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(26981), __webpack_exec__(55579)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.1731f989.js.map