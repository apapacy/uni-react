module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });\nvar _react = __webpack_require__(2);var _react2 = _interopRequireDefault(_react);\nvar _asyncLink = __webpack_require__(9);var _asyncLink2 = _interopRequireDefault(_asyncLink);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n//import { Link, Route, Preload } from '../asyncRouter';\n//import { Link } from 'react-router-dom';\nexports.default =\nfunction (_ref) {var children = _ref.children,_ref$title = _ref.title,title = _ref$title === undefined ? 'This is the default title' : _ref$title;return (\n    _react2.default.createElement('div', null,\n      _react2.default.createElement('header', null,\n        _react2.default.createElement('nav', null,\n          _react2.default.createElement(_asyncLink2.default, { to: '/home' }, 'Home'), ' |',\n          _react2.default.createElement(_asyncLink2.default, { to: '/home/12' }, 'About'), ' |',\n          _react2.default.createElement(_asyncLink2.default, { to: '/room' }, 'Contact'))),\n\n\n      children,\n      _react2.default.createElement('footer', null,\n        'I`m here to stay')));};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/react/components/layout.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/react/components/layout.js?");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval(" // import Home from './home';\n\nmodule.exports = [\n{\n  path: '/home',\n  exact: true,\n  // component: Home,\n  name: 'home',\n  componentName: 'home' },\n{\n  path: '/home/:id',\n  exact: true,\n  // component: Home,\n  name: 'components/home',\n  componentName: 'components/home' },\n{\n  path: '/room',\n  exact: false,\n  // component: Home,\n  name: 'room',\n  componentName: 'room' }];\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/react/routes.js\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/react/routes.js?");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"react\"\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });var _taggedTemplateLiteral2 = __webpack_require__(46);var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);var _getPrototypeOf = __webpack_require__(10);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(11);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(23);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(12);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(13);var _inherits3 = _interopRequireDefault(_inherits2);var _templateObject = (0, _taggedTemplateLiteral3.default)([\"\", \"\"], [\"\", \"\"]),_templateObject2 = (0, _taggedTemplateLiteral3.default)([\"\\n    translate3d(0,\", \",0)\\n   \"], [\"\\n    translate3d(0,\", \",0)\\n   \"]);var _react = __webpack_require__(2);var _react2 = _interopRequireDefault(_react);\nvar _reactDom = __webpack_require__(47);var Animated = _interopRequireWildcard(_reactDom);function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\nvar AnimatedWrapper = function AnimatedWrapper(WrappedComponent) {return function (_Component) {(0, _inherits3.default)(AnimatedWrapper, _Component);\n\n    function AnimatedWrapper(props) {(0, _classCallCheck3.default)(this, AnimatedWrapper);var _this = (0, _possibleConstructorReturn3.default)(this, (AnimatedWrapper.__proto__ || (0, _getPrototypeOf2.default)(AnimatedWrapper)).call(this,\n      props));\n      _this.state = {\n        animate: new Animated.Value(0) };return _this;\n\n    }(0, _createClass3.default)(AnimatedWrapper, [{ key: \"componentWillAppear\", value: function componentWillAppear(\n      cb) {\n        Animated.spring(this.state.animate, { toValue: 1 }).start();\n        cb();\n      } }, { key: \"componentWillEnter\", value: function componentWillEnter(\n      cb) {var _this2 = this;\n        setTimeout(\n        function () {return Animated.spring(_this2.state.animate, { toValue: 1 }).start();},\n        250);\n\n        cb();\n      } }, { key: \"componentWillLeave\", value: function componentWillLeave(\n      cb) {\n        Animated.spring(this.state.animate, { toValue: 0 }).start();\n        setTimeout(function () {return cb();}, 175);\n      } }, { key: \"render\", value: function render()\n      {\n        var style = {\n          opacity: Animated.template(_templateObject, this.state.animate),\n          transform: Animated.template(_templateObject2,\n          this.state.animate.interpolate({\n            inputRange: [0, 1],\n            outputRange: [\"12px\", \"0px\"] })) };\n\n\n\n        return (\n          _react2.default.createElement(Animated.div, { style: style, className: \"animated-page-wrapper\" },\n            _react2.default.createElement(WrappedComponent, this.props)));\n\n\n      } }]);return AnimatedWrapper;}(_react.Component);};exports.default =\n\nAnimatedWrapper;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/react/components/animatedWrapper.js\n// module id = 3\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/react/components/animatedWrapper.js?");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });var _getPrototypeOf = __webpack_require__(10);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(11);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = __webpack_require__(12);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(13);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(2);var _react2 = _interopRequireDefault(_react);\nvar _propTypes = __webpack_require__(16);var _propTypes2 = _interopRequireDefault(_propTypes);\nvar _invariant = __webpack_require__(25);var _invariant2 = _interopRequireDefault(_invariant);\nvar _history = __webpack_require__(32);\nvar _reactRouterDom = __webpack_require__(22);\nvar _routes = __webpack_require__(1);var _routes2 = _interopRequireDefault(_routes);\nvar _reactLoadable = __webpack_require__(26);var _reactLoadable2 = _interopRequireDefault(_reactLoadable);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\n\n/**\n                                                                                                                                                                                                           * The public API for rendering a history-aware <a>.\n                                                                                                                                                                                                           */var\nAsyncLink = function (_Link) {(0, _inherits3.default)(AsyncLink, _Link);function AsyncLink() {var _ref;var _temp, _this, _ret;(0, _classCallCheck3.default)(this, AsyncLink);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AsyncLink.__proto__ || (0, _getPrototypeOf2.default)(AsyncLink)).call.apply(_ref, [this].concat(args))), _this), _this.\n\n    handleClick = function (event) {\n      if (_this.props.onClick) _this.props.onClick(event);\n\n      if (\n      !event.defaultPrevented && // onClick prevented default\n      event.button === 0 && // ignore everything but left clicks\n      !_this.props.target && // let browser handle \"target=_blank\" etc.\n      !isModifiedEvent(event) // ignore clicks with modifier keys\n      ) {\n          event.preventDefault();var\n\n          history = _this.context.router.history;var _this$props =\n          _this.props,replace = _this$props.replace,to = _this$props.to;\n          var locate = function locate() {\n            if (replace) {\n              history.replace(to);\n            } else {\n              history.push(to);\n            }\n          };\n          console.log(_this);\n          if (_this.context.router.history.location.pathname) {\n            var route = _routes2.default.find(function (route) {return (\n                (0, _reactRouterDom.matchPath)(_this.context.router.history.location.pathname, route) ? route : null);});\n            console.log('../' + route.componentName, route);\n            var Console = console;\n            alert(2);\n            //console.log(route.component.preload())\n            route.component.load();\n            Console.log('=================================');\n            alert(1);\n            console.log('imported', data);\n            alert(2);\n            setTimeout(locate, 3000);\n          } else {\n            //locate();\n          }\n        }\n    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);}return AsyncLink;}(_reactRouterDom.Link);exports.default =\n\n\n\nAsyncLink;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/react/components/asyncLink.js\n// module id = 4\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/react/components/asyncLink.js?");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });var _extends2 = __webpack_require__(15);var _extends3 = _interopRequireDefault(_extends2);var _getPrototypeOf = __webpack_require__(10);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(11);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(23);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(12);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(13);var _inherits3 = _interopRequireDefault(_inherits2);var _warning = __webpack_require__(48);var _warning2 = _interopRequireDefault(_warning);\nvar _invariant = __webpack_require__(25);var _invariant2 = _interopRequireDefault(_invariant);\nvar _react = __webpack_require__(2);var _react2 = _interopRequireDefault(_react);\nvar _propTypes = __webpack_require__(16);var _propTypes2 = _interopRequireDefault(_propTypes);\nvar _reactRouter = __webpack_require__(14);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\n\n/**\n                                                                                                                                          * The public API for putting history on context.\n                                                                                                                                          */var\nAsyncRouter = function (_Router) {(0, _inherits3.default)(AsyncRouter, _Router);function AsyncRouter() {(0, _classCallCheck3.default)(this, AsyncRouter);return (0, _possibleConstructorReturn3.default)(this, (AsyncRouter.__proto__ || (0, _getPrototypeOf2.default)(AsyncRouter)).apply(this, arguments));}(0, _createClass3.default)(AsyncRouter, [{ key: \"getChildContext\", value: function getChildContext()\n\n    {\n      alert('getChildContext');\n\n      console.log('getChildContext', this);\n      return {\n        router: (0, _extends3.default)({},\n        this.context.router, {\n          history: this.props.history,\n          route: {\n            location: this.props.history.location,\n            match: this.state.match } }) };\n\n\n\n    } }, { key: \"componentWillMount\", value: function componentWillMount()\n\n\n    {var _this2 = this;\n      console.log('componentWillMount+++++', this);\n      alert('componentWillMount');var _props =\n      this.props,children = _props.children,history = _props.history;\n\n      (0, _invariant2.default)(\n      children == null || _react2.default.Children.count(children) === 1,\n      \"A <Router> may have only one child element\");\n\n\n      // Do this here so we can setState when a <Redirect> changes the\n      // location in componentWillMount. This happens e.g. when doing\n      // server rendering using a <StaticRouter>.\n      this.unlisten = history.listen(function () {\n        _this2.setState({\n          match: _this2.computeMatch(history.location.pathname) });\n\n      });\n    } }, { key: \"componentWillReceiveProps\", value: function componentWillReceiveProps(\n\n    nextProps) {\n      alert('componentWillReceiveProps');\n      console.log('componentWillReceiveProps', this);\n      (0, _warning2.default)(\n      this.props.history === nextProps.history,\n      \"You cannot change <Router history>\");\n\n    } }, { key: \"componentWillUnmount\", value: function componentWillUnmount()\n\n    {\n      this.unlisten();\n    } }]);return AsyncRouter;}(_reactRouter.Router);exports.default =\n\n\n\nAsyncRouter;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/react/components/asyncRouter.js\n// module id = 5\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/react/components/asyncRouter.js?");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });var _getPrototypeOf = __webpack_require__(10);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _regenerator = __webpack_require__(27);var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = __webpack_require__(28);var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = __webpack_require__(11);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = __webpack_require__(12);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _createClass2 = __webpack_require__(23);var _createClass3 = _interopRequireDefault(_createClass2);var _inherits2 = __webpack_require__(13);var _inherits3 = _interopRequireDefault(_inherits2);\nvar _react = __webpack_require__(2);var _react2 = _interopRequireDefault(_react);\nvar _reactRouterDom = __webpack_require__(22);\nvar _propTypes = __webpack_require__(16);var _propTypes2 = _interopRequireDefault(_propTypes);\nvar _reactRedux = __webpack_require__(24);\nvar _actions = __webpack_require__(29);\nvar _layout = __webpack_require__(0);var _layout2 = _interopRequireDefault(_layout);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var\n\n\nHome = function (_React$PureComponent) {(0, _inherits3.default)(Home, _React$PureComponent);(0, _createClass3.default)(Home, null, [{ key: 'getInitialProps', value: function () {var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2) {var\n        req = _ref2.req,match = _ref2.match,store = _ref2.store,dispatch = _ref2.dispatch;var userAgent, action;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n                console.log('getInitialProps');\n                userAgent = req ? req.headers['user-agent'] : navigator.userAgent;\n                action = _actions.userActions.login({ name: 'John', userAgent: userAgent });if (!\n                req) {_context.next = 8;break;}_context.next = 6;return (\n                  store.dispatch(action));case 6:_context.next = 9;break;case 8:\n\n                dispatch(action);case 9:return _context.abrupt('return');case 10:case 'end':return _context.stop();}}}, _callee, this);}));function getInitialProps(_x) {return _ref.apply(this, arguments);}return getInitialProps;}() }]);\n\n\n\n  function Home(props) {var _ref3;(0, _classCallCheck3.default)(this, Home);for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {rest[_key - 1] = arguments[_key];}return (0, _possibleConstructorReturn3.default)(this, (_ref3 = Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call.apply(_ref3, [this,\n    props].concat(rest)));\n  }(0, _createClass3.default)(Home, [{ key: 'render', value: function render(\n    data) {\n      console.log(this.props);\n      return (\n        _react2.default.createElement('div', null,\n          _react2.default.createElement('h1', null, this.props.user.count, ') Hello ', this.props.user.name, ' from ', this.props.user.userAgent, '!'),\n          _react2.default.createElement(_reactRouterDom.Link, { to: '/room' }, 'About')));\n\n\n    } }, { key: 'componentWillMount', value: function componentWillMount()\n\n\n    {\n      // only server\n      console.log('componentWillMount');\n    } }, { key: 'componentDidMount', value: function () {var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:\n\n                // client and server\n                console.log('componentDidMount', this.props);_context2.next = 3;return (\n                  Home.getInitialProps(this.props));case 3:case 'end':return _context2.stop();}}}, _callee2, this);}));function componentDidMount() {return _ref4.apply(this, arguments);}return componentDidMount;}() }, { key: 'componentWillReceiveProps', value: function componentWillReceiveProps()\n\n    {console.log('componentWillReceiveProps');} }, { key: 'shouldComponentUpdate0', value: function shouldComponentUpdate0()\n    {\n      console.log('shouldComponentUpdate');\n      return true;\n    } }, { key: 'componentWillUpdate', value: function componentWillUpdate()\n    {console.log('componentWillUpdate');} }, { key: 'componentDidUpdate', value: function componentDidUpdate()\n    {console.log('componentDidUpdate');} }, { key: 'componentWillUnmount', value: function componentWillUnmount()\n    {console.log('componentWillUnmount');} }, { key: 'componentDidCatch', value: function componentDidCatch()\n    {console.log('componentDidCatch');}\n    //    setState()\n    //    forceUpdate()\n    //    defaultProps\n    //    displayName\n    //    props\n    //    state\n  }]);return Home;}(_react2.default.PureComponent);\n\n\nHome.propTypes = {\n  user: _propTypes2.default.shape({\n    name: _propTypes2.default.string.isRequired,\n    count: _propTypes2.default.number.isRequired,\n    userAgent: _propTypes2.default.string.isRequired }) };exports.default =\n\n\n\n(0, _reactRedux.connect)(function (state) {return { user: state.user };} /*, mapDispatchToProps*/)(Home);\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/react/components/home.js\n// module id = 6\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/react/components/home.js?");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });var _reactUniversalComponent = __webpack_require__(50);var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\nvar UniversalComponent = (0, _reactUniversalComponent2.default)(function (props) {return __webpack_require__(51)(\"./\" + props.page);});exports.default =\n\nfunction () {return (\n    React.createElement('div', null,\n      React.createElement(UniversalComponent, { componentName: 'Foo' })));};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/react/components/universalComponent.js\n// module id = 7\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/react/components/universalComponent.js?");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });var _extends2 = __webpack_require__(15);var _extends3 = _interopRequireDefault(_extends2);var _react = __webpack_require__(2);var _react2 = _interopRequireDefault(_react);\nvar _reactRouter = __webpack_require__(14);\nvar _routes = __webpack_require__(1);var _routes2 = _interopRequireDefault(_routes);\nvar _layout = __webpack_require__(0);var _layout2 = _interopRequireDefault(_layout);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =\n\nfunction (data) {return (\n    _react2.default.createElement(_layout2.default, null,\n      _react2.default.createElement(_reactRouter.Switch, null,\n\n        _routes2.default.map(function (props) {\n          props.component = __webpack_require__(30)(\"./\" + props.componentName);\n          if (props.component.default) {\n            props.component = props.component.default;\n          }\n          return _react2.default.createElement(_reactRouter.Route, (0, _extends3.default)({ key: props.path }, props));\n        }))));};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/react/serverRouter.js\n// module id = 8\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/react/serverRouter.js?");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });var _getPrototypeOf = __webpack_require__(10);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(11);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = __webpack_require__(12);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(13);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(2);var _react2 = _interopRequireDefault(_react);\nvar _propTypes = __webpack_require__(16);var _propTypes2 = _interopRequireDefault(_propTypes);\nvar _invariant = __webpack_require__(25);var _invariant2 = _interopRequireDefault(_invariant);\nvar _history = __webpack_require__(32);\nvar _reactRouterDom = __webpack_require__(22);\nvar _routes = __webpack_require__(1);var _routes2 = _interopRequireDefault(_routes);\nvar _reactLoadable = __webpack_require__(26);var _reactLoadable2 = _interopRequireDefault(_reactLoadable);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\n\n\nvar isModifiedEvent = function isModifiedEvent(event) {return (\n    !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey));};\n\n\n/**\n                                                                              * The public API for rendering a history-aware <a>.\n                                                                              */var\nAsyncLink = function (_Link) {(0, _inherits3.default)(AsyncLink, _Link);function AsyncLink() {var _ref;var _temp, _this, _ret;(0, _classCallCheck3.default)(this, AsyncLink);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AsyncLink.__proto__ || (0, _getPrototypeOf2.default)(AsyncLink)).call.apply(_ref, [this].concat(args))), _this), _this.\n\n    handleClick = function (event) {\n      if (_this.props.onClick) _this.props.onClick(event);\n\n      if (\n      !event.defaultPrevented && // onClick prevented default\n      event.button === 0 && // ignore everything but left clicks\n      !_this.props.target && // let browser handle \"target=_blank\" etc.\n      !isModifiedEvent(event) // ignore clicks with modifier keys\n      ) {var\n\n\n\n          locate = function locate() {\n            if (replace) {\n              history.replace(to);\n            } else {\n              history.push(to);\n            }\n          };event.preventDefault();var history = _this.context.router.history;var _this$props = _this.props,replace = _this$props.replace,to = _this$props.to;\n          if (_this.context.router.history.location.pathname) {\n            var route = _routes2.default.find(function (route) {return (0, _reactRouterDom.matchPath)(_this.props.to, route) ? route : null;});\n            if (route) {\n              __webpack_require__(44)(\"\" + String('./' + route.componentName)).then(function () {locate();});\n            } else {\n              locate();\n            }\n          } else {\n            locate();\n          }\n        }\n    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);}return AsyncLink;}(_reactRouterDom.Link);exports.default =\n\n\n\nAsyncLink;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/react/asyncLink.js\n// module id = 9\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/react/asyncLink.js?");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/core-js/object/get-prototype-of\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"babel-runtime/core-js/object/get-prototype-of\"\n// module id = 10\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22babel-runtime/core-js/object/get-prototype-of%22?");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/helpers/classCallCheck\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"babel-runtime/helpers/classCallCheck\"\n// module id = 11\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22babel-runtime/helpers/classCallCheck%22?");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/helpers/possibleConstructorReturn\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"babel-runtime/helpers/possibleConstructorReturn\"\n// module id = 12\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22babel-runtime/helpers/possibleConstructorReturn%22?");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/helpers/inherits\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"babel-runtime/helpers/inherits\"\n// module id = 13\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22babel-runtime/helpers/inherits%22?");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"react-router\"\n// module id = 14\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22react-router%22?");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/helpers/extends\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"babel-runtime/helpers/extends\"\n// module id = 15\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22babel-runtime/helpers/extends%22?");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"prop-types\"\n// module id = 16\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("var _routes = __webpack_require__(1);var _routes2 = _interopRequireDefault(_routes);\nvar _reactRouter = __webpack_require__(14);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\nvar realLink = _reactRouter.Link;\n\ntry {\n  if (typeof process == 'undefined') {\n    var AsyncSetup = __webpack_require__(45);\n    var asyncSetup = AsyncSetup(_routes2.default, function (path) {return __webpack_require__(33)(\"./\" + componentName);});\n    realLink = asyncSetup.Link;\n  }\n} catch (ex) {}\n\nmodule.exports = { Link: realLink };\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/react/asyncRouter.js\n// module id = 17\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/react/asyncRouter.js?");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });var _extends2 = __webpack_require__(15);var _extends3 = _interopRequireDefault(_extends2);var _react = __webpack_require__(2);var _react2 = _interopRequireDefault(_react);\nvar _reactRouter = __webpack_require__(14);\nvar _routes = __webpack_require__(1);var _routes2 = _interopRequireDefault(_routes);\nvar _reactLoadable = __webpack_require__(26);var _reactLoadable2 = _interopRequireDefault(_reactLoadable);\nvar _layout = __webpack_require__(0);var _layout2 = _interopRequireDefault(_layout);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =\n\nfunction (data) {return (\n    _react2.default.createElement(_layout2.default, null,\n      _react2.default.createElement(_reactRouter.Switch, null,\n\n        _routes2.default.map(function (props) {\n          props.component = (0, _reactLoadable2.default)({\n            loader: function loader() {return __webpack_require__(33)(\"./\" + props.componentName);},\n            loading: function loading() {return null;},\n            delay: function delay() {return 0;},\n            timeout: 10000 });\n\n          return _react2.default.createElement(_reactRouter.Route, (0, _extends3.default)({ key: props.path }, props));\n        }))));};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/react/clientRouter.js\n// module id = 18\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/react/clientRouter.js?");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });var _extends2 = __webpack_require__(15);var _extends3 = _interopRequireDefault(_extends2);var _react = __webpack_require__(2);var _react2 = _interopRequireDefault(_react);\nvar _reactRouter = __webpack_require__(14);\nvar _routes = __webpack_require__(1);var _routes2 = _interopRequireDefault(_routes);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =\n\nfunction (data) {return (\n    _react2.default.createElement(_reactRouter.Switch, null,\n\n      _routes2.default.map(function (props) {\n        props.component = __webpack_require__(30)(\"./\" + props.componentName).default;\n        return _react2.default.createElement(_reactRouter.Route, (0, _extends3.default)({ key: props.path }, props));\n      })));};\n\n\n\n\nfunction Loading() {\n  return _react2.default.createElement('div', null, 'Loading...');\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/react/devRouter.js\n// module id = 19\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/react/devRouter.js?");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });var _getPrototypeOf = __webpack_require__(10);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _regenerator = __webpack_require__(27);var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = __webpack_require__(28);var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = __webpack_require__(11);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = __webpack_require__(12);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _createClass2 = __webpack_require__(23);var _createClass3 = _interopRequireDefault(_createClass2);var _inherits2 = __webpack_require__(13);var _inherits3 = _interopRequireDefault(_inherits2);\nvar _react = __webpack_require__(2);var _react2 = _interopRequireDefault(_react);\nvar _propTypes = __webpack_require__(16);var _propTypes2 = _interopRequireDefault(_propTypes);\nvar _reactRedux = __webpack_require__(24);\nvar _actions = __webpack_require__(29);\nvar _layout = __webpack_require__(0);var _layout2 = _interopRequireDefault(_layout);\nvar _Transition = __webpack_require__(35);var _Transition2 = _interopRequireDefault(_Transition);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var\n\n\nHome = function (_React$PureComponent) {(0, _inherits3.default)(Home, _React$PureComponent);(0, _createClass3.default)(Home, null, [{ key: 'getInitialProps', value: function () {var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2) {var\n        req = _ref2.req,match = _ref2.match,store = _ref2.store,dispatch = _ref2.dispatch;var userAgent, action;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n                userAgent = req ? req.headers['user-agent'] : navigator.userAgent;\n                action = _actions.userActions.login({ name: 'John', userAgent: userAgent });if (!\n                req) {_context.next = 7;break;}_context.next = 5;return (\n                  store.dispatch(action));case 5:_context.next = 8;break;case 7:\n\n                dispatch(action);case 8:return _context.abrupt('return');case 9:case 'end':return _context.stop();}}}, _callee, this);}));function getInitialProps(_x) {return _ref.apply(this, arguments);}return getInitialProps;}() }]);\n\n\n\n  function Home(props) {var _ref3;(0, _classCallCheck3.default)(this, Home);for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {rest[_key - 1] = arguments[_key];}return (0, _possibleConstructorReturn3.default)(this, (_ref3 = Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call.apply(_ref3, [this,\n    props].concat(rest)));\n  }(0, _createClass3.default)(Home, [{ key: 'render', value: function render(\n    data) {\n      console.log(this.props);\n      return (\n        _react2.default.createElement('h1', null, this.props.user.count, ') Hello ', this.props.user.name, ' from ', this.props.user.userAgent, '!'));\n\n    } }, { key: 'componentWillMount', value: function componentWillMount()\n\n\n    {\n      // only server\n      console.log('componentWillMount');\n    } }, { key: 'componentDidMount', value: function () {var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:\n\n                // client and server\n                console.log('componentDidMount', this.props);_context2.next = 3;return (\n                  Home.getInitialProps(this.props));case 3:case 'end':return _context2.stop();}}}, _callee2, this);}));function componentDidMount() {return _ref4.apply(this, arguments);}return componentDidMount;}() }, { key: 'componentWillReceiveProps', value: function componentWillReceiveProps()\n\n    {console.log('componentWillReceiveProps');} }, { key: 'shouldComponentUpdate0', value: function shouldComponentUpdate0()\n    {\n      console.log('shouldComponentUpdate');\n      return true;\n    } }, { key: 'componentWillUpdate', value: function componentWillUpdate()\n    {console.log('componentWillUpdate');} }, { key: 'componentDidUpdate', value: function componentDidUpdate()\n    {console.log('componentDidUpdate');} }, { key: 'componentWillUnmount', value: function componentWillUnmount()\n    {console.log('componentWillUnmount');} }, { key: 'componentDidCatch', value: function componentDidCatch()\n    {console.log('componentDidCatch');}\n    //    setState()\n    //    forceUpdate()\n    //    defaultProps\n    //    displayName\n    //    props\n    //    state\n  }]);return Home;}(_react2.default.PureComponent);\n\n\nHome.propTypes = {\n  user: _propTypes2.default.shape({\n    name: _propTypes2.default.string.isRequired,\n    count: _propTypes2.default.number.isRequired,\n    userAgent: _propTypes2.default.string.isRequired }) };exports.default =\n\n\n\n(0, _reactRedux.connect)(function (state) {return { user: state.user };} /*, mapDispatchToProps*/)(Home);\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/react/home.js\n// module id = 20\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/react/home.js?");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });var _getPrototypeOf = __webpack_require__(10);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _regenerator = __webpack_require__(27);var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = __webpack_require__(28);var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = __webpack_require__(11);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = __webpack_require__(12);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _createClass2 = __webpack_require__(23);var _createClass3 = _interopRequireDefault(_createClass2);var _inherits2 = __webpack_require__(13);var _inherits3 = _interopRequireDefault(_inherits2);\nvar _react = __webpack_require__(2);var _react2 = _interopRequireDefault(_react);\nvar _propTypes = __webpack_require__(16);var _propTypes2 = _interopRequireDefault(_propTypes);\nvar _reactRedux = __webpack_require__(24);\nvar _reactRouterDom = __webpack_require__(22);\nvar _actions = __webpack_require__(29);\nvar _layout = __webpack_require__(0);var _layout2 = _interopRequireDefault(_layout);\nvar _Transition = __webpack_require__(35);var _Transition2 = _interopRequireDefault(_Transition);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\n\nconsole.log('******************* Room ****************');var\n\nRoom = function (_React$PureComponent) {(0, _inherits3.default)(Room, _React$PureComponent);(0, _createClass3.default)(Room, null, [{ key: 'getInitialProps', value: function () {var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2) {var\n        req = _ref2.req,match = _ref2.match,store = _ref2.store,dispatch = _ref2.dispatch;var userAgent, action;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n                console.log('getInitialProps');\n                userAgent = req ? req.headers['user-agent'] : navigator.userAgent;\n                action = _actions.userActions.login({ name: 'John', userAgent: userAgent });if (!\n                req) {_context.next = 8;break;}_context.next = 6;return (\n                  store.dispatch(action));case 6:_context.next = 9;break;case 8:\n\n                dispatch(action);case 9:return _context.abrupt('return');case 10:case 'end':return _context.stop();}}}, _callee, this);}));function getInitialProps(_x) {return _ref.apply(this, arguments);}return getInitialProps;}() }]);\n\n\n\n  function Room(props) {var _ref3;(0, _classCallCheck3.default)(this, Room);for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {rest[_key - 1] = arguments[_key];}return (0, _possibleConstructorReturn3.default)(this, (_ref3 = Room.__proto__ || (0, _getPrototypeOf2.default)(Room)).call.apply(_ref3, [this,\n    props].concat(rest)));\n  }(0, _createClass3.default)(Room, [{ key: 'render', value: function render(\n    data) {\n      console.log(this.props);\n      return (\n\n        _react2.default.createElement('div', null,\n          _react2.default.createElement('h1', null, this.props.user.count, ') Hello ', this.props.user.name, ' from ', this.props.user.userAgent, '!'),\n          _react2.default.createElement(_reactRouterDom.Link, { to: '/home' }, 'About'),\n          _react2.default.createElement(_reactRouterDom.Link, { to: '/home/12' }, 'About')));\n\n\n    } }, { key: 'componentWillMount', value: function componentWillMount()\n\n\n    {\n      // only server\n      console.log('componentWillMount');\n    } }, { key: 'componentDidMount', value: function () {var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:\n\n                // client and server\n                console.log('componentDidMount', this.props);_context2.next = 3;return (\n                  Room.getInitialProps(this.props));case 3:case 'end':return _context2.stop();}}}, _callee2, this);}));function componentDidMount() {return _ref4.apply(this, arguments);}return componentDidMount;}() }, { key: 'componentWillReceiveProps', value: function componentWillReceiveProps()\n\n    {console.log('componentWillReceiveProps');} }, { key: 'shouldComponentUpdate0', value: function shouldComponentUpdate0()\n    {\n      console.log('shouldComponentUpdate');\n      return true;\n    } }, { key: 'componentWillUpdate', value: function componentWillUpdate()\n    {console.log('componentWillUpdate');} }, { key: 'componentDidUpdate', value: function componentDidUpdate()\n    {console.log('componentDidUpdate');} }, { key: 'componentWillUnmount', value: function componentWillUnmount()\n    {console.log('componentWillUnmount');} }, { key: 'componentDidCatch', value: function componentDidCatch()\n    {console.log('componentDidCatch');}\n    //    setState()\n    //    forceUpdate()\n    //    defaultProps\n    //    displayName\n    //    props\n    //    state\n  }]);return Room;}(_react2.default.PureComponent);\n\n\nRoom.propTypes = {\n  user: _propTypes2.default.shape({\n    name: _propTypes2.default.string.isRequired,\n    count: _propTypes2.default.number.isRequired,\n    userAgent: _propTypes2.default.string.isRequired }) };exports.default =\n\n\n\n(0, _reactRedux.connect)(function (state) {return { user: state.user };} /*, mapDispatchToProps*/)(Room);\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/react/room.js\n// module id = 21\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/react/room.js?");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"react-router-dom\"\n// module id = 22\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/helpers/createClass\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"babel-runtime/helpers/createClass\"\n// module id = 23\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22babel-runtime/helpers/createClass%22?");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"react-redux\"\n// module id = 24\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

eval("module.exports = require(\"invariant\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"invariant\"\n// module id = 25\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22invariant%22?");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-loadable\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"react-loadable\"\n// module id = 26\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22react-loadable%22?");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/regenerator\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"babel-runtime/regenerator\"\n// module id = 27\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22babel-runtime/regenerator%22?");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/helpers/asyncToGenerator\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"babel-runtime/helpers/asyncToGenerator\"\n// module id = 28\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22babel-runtime/helpers/asyncToGenerator%22?");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.userActions = undefined;var _userActions2 = __webpack_require__(49);var _userActions = _interopRequireWildcard(_userActions2);function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}exports.userActions = _userActions;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/redux/actions/index.js\n// module id = 29\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/redux/actions/index.js?");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./asyncLink\": 9,\n\t\"./asyncLink.js\": 9,\n\t\"./asyncRouter\": 17,\n\t\"./asyncRouter.js\": 17,\n\t\"./clientRouter\": 18,\n\t\"./clientRouter.js\": 18,\n\t\"./components/animatedWrapper\": 3,\n\t\"./components/animatedWrapper.js\": 3,\n\t\"./components/asyncLink\": 4,\n\t\"./components/asyncLink.js\": 4,\n\t\"./components/asyncRouter\": 5,\n\t\"./components/asyncRouter.js\": 5,\n\t\"./components/home\": 6,\n\t\"./components/home.js\": 6,\n\t\"./components/layout\": 0,\n\t\"./components/layout.js\": 0,\n\t\"./components/universalComponent\": 7,\n\t\"./components/universalComponent.js\": 7,\n\t\"./devRouter\": 19,\n\t\"./devRouter.js\": 19,\n\t\"./home\": 20,\n\t\"./home.js\": 20,\n\t\"./room\": 21,\n\t\"./room.js\": 21,\n\t\"./routes\": 1,\n\t\"./routes.js\": 1,\n\t\"./serverRouter\": 8,\n\t\"./serverRouter.js\": 8\n};\nfunction webpackContext(req) {\n\treturn __webpack_require__(webpackContextResolve(req));\n};\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) // check for number or string\n\t\tthrow new Error(\"Cannot find module '\" + req + \"'.\");\n\treturn id;\n};\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = 30;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/react ^\\.\\/.*$\n// module id = 30\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/react_^\\.\\/.*$?");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/core-js/promise\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"babel-runtime/core-js/promise\"\n// module id = 31\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22babel-runtime/core-js/promise%22?");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

eval("module.exports = require(\"history\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"history\"\n// module id = 32\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22history%22?");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./asyncLink\": [\n\t\t9\n\t],\n\t\"./asyncLink.js\": [\n\t\t9\n\t],\n\t\"./asyncRouter\": [\n\t\t17\n\t],\n\t\"./asyncRouter.js\": [\n\t\t17\n\t],\n\t\"./clientRouter\": [\n\t\t18\n\t],\n\t\"./clientRouter.js\": [\n\t\t18\n\t],\n\t\"./components/animatedWrapper\": [\n\t\t3\n\t],\n\t\"./components/animatedWrapper.js\": [\n\t\t3\n\t],\n\t\"./components/asyncLink\": [\n\t\t4\n\t],\n\t\"./components/asyncLink.js\": [\n\t\t4\n\t],\n\t\"./components/asyncRouter\": [\n\t\t5\n\t],\n\t\"./components/asyncRouter.js\": [\n\t\t5\n\t],\n\t\"./components/home\": [\n\t\t6\n\t],\n\t\"./components/home.js\": [\n\t\t6\n\t],\n\t\"./components/layout\": [\n\t\t0\n\t],\n\t\"./components/layout.js\": [\n\t\t0\n\t],\n\t\"./components/universalComponent\": [\n\t\t7\n\t],\n\t\"./components/universalComponent.js\": [\n\t\t7\n\t],\n\t\"./devRouter\": [\n\t\t19\n\t],\n\t\"./devRouter.js\": [\n\t\t19\n\t],\n\t\"./home\": [\n\t\t20\n\t],\n\t\"./home.js\": [\n\t\t20\n\t],\n\t\"./room\": [\n\t\t21\n\t],\n\t\"./room.js\": [\n\t\t21\n\t],\n\t\"./routes\": [\n\t\t1\n\t],\n\t\"./routes.js\": [\n\t\t1\n\t],\n\t\"./serverRouter\": [\n\t\t8\n\t],\n\t\"./serverRouter.js\": [\n\t\t8\n\t]\n};\nfunction webpackAsyncContext(req) {\n\tvar ids = map[req];\n\tif(!ids)\n\t\treturn Promise.reject(new Error(\"Cannot find module '\" + req + \"'.\"));\n\treturn Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {\n\t\treturn __webpack_require__(ids[0]);\n\t});\n};\nwebpackAsyncContext.keys = function webpackAsyncContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackAsyncContext.id = 33;\nmodule.exports = webpackAsyncContext;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/react lazy ^\\.\\/.*$\n// module id = 33\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/react_lazy_^\\.\\/.*$?");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });var LOGIN_REQUEST = exports.LOGIN_REQUEST = 'USER_LOGIN_REQUEST';\nvar LOGIN_FAIL = exports.LOGIN_FAIL = 'USER_LOGIN_FAIL';\nvar LOGIN_SUCCESS = exports.LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';\nvar LOGOUT_SUCCES = exports.LOGOUT_SUCCES = 'USER_LOGOUT_SUCCESS';\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/redux/constants/userConstants.js\n// module id = 34\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/redux/constants/userConstants.js?");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-transition-group/Transition\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"react-transition-group/Transition\"\n// module id = 35\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22react-transition-group/Transition%22?");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"redux\"\n// module id = 36\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("var _stringify = __webpack_require__(38);var _stringify2 = _interopRequireDefault(_stringify);var _promise = __webpack_require__(31);var _promise2 = _interopRequireDefault(_promise);\nvar _fs = __webpack_require__(39);var _fs2 = _interopRequireDefault(_fs);\nvar _express = __webpack_require__(40);var _express2 = _interopRequireDefault(_express);\n__webpack_require__(41);\n\n\nvar _http = __webpack_require__(42);\nvar _react = __webpack_require__(2);var _react2 = _interopRequireDefault(_react);\nvar _server = __webpack_require__(43);var _server2 = _interopRequireDefault(_server);\nvar _reactRouter = __webpack_require__(14);\nvar _reactRouterDom = __webpack_require__(22);\nvar _reactRedux = __webpack_require__(24);\nvar _routes = __webpack_require__(1);var _routes2 = _interopRequireDefault(_routes);\nvar _serverRouter = __webpack_require__(8);var _serverRouter2 = _interopRequireDefault(_serverRouter);\nvar _store = __webpack_require__(52);var _store2 = _interopRequireDefault(_store);\nvar _stats = __webpack_require__(60);var _stats2 = _interopRequireDefault(_stats);\nvar _routes3 = __webpack_require__(61);var _routes4 = _interopRequireDefault(_routes3);\nvar _layout = __webpack_require__(0);var _layout2 = _interopRequireDefault(_layout);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var PORT = 3000;var app = (0, _express2.default)();\n\n\nmodule.exports = function (req, res, next) {\n\n  var store = (0, _store2.default)();\n  var promises = [];\n  var componentNames = [];\n  _routes2.default.some(function (route) {\n    var match = (0, _reactRouterDom.matchPath)(req.path, route);\n    if (match) {\n      var component = __webpack_require__(30)(\"./\" + route.componentName);\n      if (component.default) {\n        component = component.default;\n      }\n      componentNames.push(route.componentName);\n      if (typeof component.getInitialProps == 'function') {\n        promises.push(component.getInitialProps({ req: req, res: res, next: next, match: match, store: store }));\n      }\n    }\n    return match;\n  });\n\n  _promise2.default.all(promises).then(function (data) {\n    var context = { data: data };\n    var html = _server2.default.renderToString(\n    _react2.default.createElement(_reactRedux.Provider, { store: store },\n      _react2.default.createElement(_reactRouter.StaticRouter, { location: req.url, context: context },\n        _react2.default.createElement(_serverRouter2.default, null))));\n\n\n\n\n    if (context.url) {\n      res.writeHead(301, {\n        Location: context.url });\n\n      res.end();\n    } else {\n      res.write('\\n        <!doctype html>\\n        <script>\\n         // WARNING: See the following for security issues around embedding JSON in HTML:\\n         // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations\\n         window.__PRELOADED_STATE__ = ' +\n\n\n\n\n      (0, _stringify2.default)(store.getState()).replace(/</g, '\\\\u003c') + '\\n        </script>\\n        <div id=\"app\">' +\n\n      html + '</div>\\n        <script src=\\'' +\n      assets(_stats2.default.common) + '\\'></script>\\n        ' +\n      componentNames.map(function (componentName) {return '<script src=\\'' +\n        assets(_stats2.default[componentName]) + '\\'></script>';}) + '\\n      ');\n\n\n      res.end();\n    }\n  });\n};\n\nfunction assets(name, isDevelopment) {\n  var prefix = void 0;\n  if (isDevelopment) {\n    prefix = 'http://localhost:3001/static/';\n  } else {\n    prefix = '/static/';\n  }\n  if (name instanceof Array) {\n    return prefix + name[0];\n  } else {\n    return prefix + name;\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/render.js\n// module id = 37\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/render.js?");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/core-js/json/stringify\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"babel-runtime/core-js/json/stringify\"\n// module id = 38\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22babel-runtime/core-js/json/stringify%22?");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"fs\"\n// module id = 39\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"express\"\n// module id = 40\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

eval("module.exports = require(\"./api/test\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"./api/test\"\n// module id = 41\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22./api/test%22?");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"http\"\n// module id = 42\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"react-dom/server\"\n// module id = 43\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./asyncLink\": [\n\t\t9\n\t],\n\t\"./asyncLink.js\": [\n\t\t9\n\t],\n\t\"./asyncRouter\": [\n\t\t17\n\t],\n\t\"./asyncRouter.js\": [\n\t\t17\n\t],\n\t\"./clientRouter\": [\n\t\t18\n\t],\n\t\"./clientRouter.js\": [\n\t\t18\n\t],\n\t\"./components/animatedWrapper\": [\n\t\t3\n\t],\n\t\"./components/animatedWrapper.js\": [\n\t\t3\n\t],\n\t\"./components/asyncLink\": [\n\t\t4\n\t],\n\t\"./components/asyncLink.js\": [\n\t\t4\n\t],\n\t\"./components/asyncRouter\": [\n\t\t5\n\t],\n\t\"./components/asyncRouter.js\": [\n\t\t5\n\t],\n\t\"./components/home\": [\n\t\t6\n\t],\n\t\"./components/home.js\": [\n\t\t6\n\t],\n\t\"./components/layout\": [\n\t\t0\n\t],\n\t\"./components/layout.js\": [\n\t\t0\n\t],\n\t\"./components/universalComponent\": [\n\t\t7\n\t],\n\t\"./components/universalComponent.js\": [\n\t\t7\n\t],\n\t\"./devRouter\": [\n\t\t19\n\t],\n\t\"./devRouter.js\": [\n\t\t19\n\t],\n\t\"./home\": [\n\t\t20\n\t],\n\t\"./home.js\": [\n\t\t20\n\t],\n\t\"./room\": [\n\t\t21\n\t],\n\t\"./room.js\": [\n\t\t21\n\t],\n\t\"./routes\": [\n\t\t1\n\t],\n\t\"./routes.js\": [\n\t\t1\n\t],\n\t\"./serverRouter\": [\n\t\t8\n\t],\n\t\"./serverRouter.js\": [\n\t\t8\n\t]\n};\nfunction webpackAsyncContext(req) {\n\tvar ids = map[req];\n\tif(!ids)\n\t\treturn Promise.reject(new Error(\"Cannot find module '\" + req + \"'.\"));\n\treturn Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {\n\t\treturn __webpack_require__(ids[0]);\n\t});\n};\nwebpackAsyncContext.keys = function webpackAsyncContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackAsyncContext.id = 44;\nmodule.exports = webpackAsyncContext;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/react lazy ^.*$\n// module id = 44\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/react_lazy_^.*$?");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-async-routing\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"react-router-async-routing\"\n// module id = 45\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22react-router-async-routing%22?");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/helpers/taggedTemplateLiteral\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"babel-runtime/helpers/taggedTemplateLiteral\"\n// module id = 46\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22babel-runtime/helpers/taggedTemplateLiteral%22?");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

eval("module.exports = require(\"animated/lib/targets/react-dom\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"animated/lib/targets/react-dom\"\n// module id = 47\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22animated/lib/targets/react-dom%22?");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

eval("module.exports = require(\"warning\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"warning\"\n// module id = 48\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22warning%22?");

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.login = undefined;var _promise = __webpack_require__(31);var _promise2 = _interopRequireDefault(_promise);exports.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nlogout = logout;var _userConstants = __webpack_require__(34);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function promise(_ref) {var name = _ref.name,userAgent = _ref.userAgent;return new _promise2.default(function (resolve, reject) {setTimeout(function () {return resolve({ name: name, userAgent: userAgent });}, 500);setTimeout(function () {return reject({ name: 'Luka' });}, 1000);});} /* eslint-disable no-unused-vars */var login = exports.login = function login(_ref2) {var name = _ref2.name,userAgent = _ref2.userAgent;return function (dispatch) {dispatch({ type: _userConstants.LOGIN_REQUEST });return promise({ name: name, userAgent: userAgent }).then(function (payload) {return dispatch({ type: _userConstants.LOGIN_SUCCESS, payload: payload });}, function (error) {return dispatch({ type: _userConstants.LOGIN_FAIL, error: error });});};};function logout() {\n  return {\n    type: _userConstants.LOGOUT_SUCCESS };\n\n}\n/* eslint-enable no-unused-vars */\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/redux/actions/userActions.js\n// module id = 49\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/redux/actions/userActions.js?");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-universal-component\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"react-universal-component\"\n// module id = 50\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22react-universal-component%22?");

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./animatedWrapper\": [\n\t\t3\n\t],\n\t\"./animatedWrapper.js\": [\n\t\t3\n\t],\n\t\"./asyncLink\": [\n\t\t4\n\t],\n\t\"./asyncLink.js\": [\n\t\t4\n\t],\n\t\"./asyncRouter\": [\n\t\t5\n\t],\n\t\"./asyncRouter.js\": [\n\t\t5\n\t],\n\t\"./home\": [\n\t\t6\n\t],\n\t\"./home.js\": [\n\t\t6\n\t],\n\t\"./layout\": [\n\t\t0\n\t],\n\t\"./layout.js\": [\n\t\t0\n\t],\n\t\"./universalComponent\": [\n\t\t7\n\t],\n\t\"./universalComponent.js\": [\n\t\t7\n\t]\n};\nfunction webpackAsyncContext(req) {\n\tvar ids = map[req];\n\tif(!ids)\n\t\treturn Promise.reject(new Error(\"Cannot find module '\" + req + \"'.\"));\n\treturn Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {\n\t\treturn __webpack_require__(ids[0]);\n\t});\n};\nwebpackAsyncContext.keys = function webpackAsyncContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackAsyncContext.id = 51;\nmodule.exports = webpackAsyncContext;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/react/components lazy ^\\.\\/.*$\n// module id = 51\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/react/components_lazy_^\\.\\/.*$?");

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default =\n\n\n\n\n\nprepareStore;var _redux = __webpack_require__(36);var _reduxThunk = __webpack_require__(53);var _reduxThunk2 = _interopRequireDefault(_reduxThunk);var _reduxLogger = __webpack_require__(54);var _promisedMiddleware = __webpack_require__(55);var _promisedMiddleware2 = _interopRequireDefault(_promisedMiddleware);var _reducers = __webpack_require__(58);var _reducers2 = _interopRequireDefault(_reducers);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function prepareStore(initialState) {\n  var store = (0, _redux.compose)(\n  (0, _redux.applyMiddleware)((0, _promisedMiddleware2.default)()),\n  (0, _redux.applyMiddleware)(_reduxThunk2.default),\n  (0, _redux.applyMiddleware)((0, _reduxLogger.createLogger)({})))(_redux.createStore)(_reducers2.default,\n  initialState);\n\n  if (false) {\n    module.hot.accept(function () {\n      var nextRootReducer = _reducers2.default;\n      store.replaceReducer(nextRootReducer);\n    });\n  }\n\n  store.dispatchAsync = function dispatchAsync(action) {\n    console.log(action);\n    if (!action.promised) {\n      throw new Error('Use dispatchAsync for promised action only!');\n    }\n    store.dispatch(action);\n    if (!action.promise) {\n      throw new Error('Use dispatchAsync for promised action only!');\n    }\n    return action.promise;\n  };\n  return store;\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/redux/store/index.js\n// module id = 52\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/redux/store/index.js?");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"redux-thunk\"\n// module id = 53\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-logger\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"redux-logger\"\n// module id = 54\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22redux-logger%22?");

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });var _extends2 = __webpack_require__(15);var _extends3 = _interopRequireDefault(_extends2);var _slicedToArray2 = __webpack_require__(56);var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);var _objectWithoutProperties2 = __webpack_require__(57);var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default = function () {return function (_ref) {var dispatch = _ref.dispatch,getState = _ref.getState;return function (next) {return function (action) {var\n        promise = action.promise,promised = action.promised,types = action.types,rest = (0, _objectWithoutProperties3.default)(action, ['promise', 'promised', 'types']);\n        if (!promised) {\n          return next(action);\n        }\n        if (typeof promise !== 'undefined') {\n          throw new Error('In promised middleware you mast not use \"action\".\"promise\"');\n        }\n        if (typeof promised !== 'function') {\n          throw new Error('In promised middleware type of \"action\".\"promised\" must be \"function\"');\n        }var _types = (0, _slicedToArray3.default)(\n        types, 3),REQUEST = _types[0],SUCCESS = _types[1],FAILURE = _types[2];\n        next((0, _extends3.default)({}, rest, { type: REQUEST }));\n        action.promise = promised().\n        then(\n        function (payload) {return next((0, _extends3.default)({}, rest, { payload: payload, type: SUCCESS }));}).\n        catch(\n        function (error) {return next((0, _extends3.default)({}, rest, { error: error, type: FAILURE }));});\n\n      };};};};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/redux/store/promisedMiddleware.js\n// module id = 55\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/redux/store/promisedMiddleware.js?");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/helpers/slicedToArray\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"babel-runtime/helpers/slicedToArray\"\n// module id = 56\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22babel-runtime/helpers/slicedToArray%22?");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/helpers/objectWithoutProperties\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"babel-runtime/helpers/objectWithoutProperties\"\n// module id = 57\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22babel-runtime/helpers/objectWithoutProperties%22?");

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });var _redux = __webpack_require__(36);\nvar _userReducer = __webpack_require__(59);var _userReducer2 = _interopRequireDefault(_userReducer);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =\n\n(0, _redux.combineReducers)({\n  user: _userReducer2.default });\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/redux/reducers/index.js\n// module id = 58\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/redux/reducers/index.js?");

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });var _extends2 = __webpack_require__(15);var _extends3 = _interopRequireDefault(_extends2);exports.default =\n\n\n\n\n\n\n\n\n\n\nuserReducer;var _userConstants = __webpack_require__(34);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var initialState = { count: 0 };function userReducer() {var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;var action = arguments[1];\n  console.log('*** state  ***', state);\n  switch (action.type) {\n    case _userConstants.LOGIN_REQUEST:\n      return state;\n    case _userConstants.LOGIN_SUCCESS:\n      return (0, _extends3.default)({},\n      state, {\n        name: action.payload.name,\n        userAgent: action.payload.userAgent,\n        isAuthenticated: true,\n        count: state.count + 1 });\n\n    case _userConstants.LOGIN_FAIL:\n      return (0, _extends3.default)({}, initialState);\n    case _userConstants.LOGOUT_SUCCESS:\n      return (0, _extends3.default)({}, initialState);\n    default:\n      return state;}\n\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/redux/reducers/userReducer.js\n// module id = 59\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/redux/reducers/userReducer.js?");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

eval("module.exports = require(\"../dist/stats.generated\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"../dist/stats.generated\"\n// module id = 60\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22../dist/stats.generated%22?");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

eval("module.exports = require(\"./api/routes\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"./api/routes\"\n// module id = 61\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22./api/routes%22?");

/***/ })
/******/ ]);