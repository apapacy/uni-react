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
Object.defineProperty(exports, "__esModule", { value: true });
var _react = __webpack_require__(2);var _react2 = _interopRequireDefault(_react);
var _asyncLink = __webpack_require__(9);var _asyncLink2 = _interopRequireDefault(_asyncLink);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
//import { Link, Route, Preload } from '../asyncRouter';
//import { Link } from 'react-router-dom';
exports.default =
function (_ref) {var children = _ref.children,_ref$title = _ref.title,title = _ref$title === undefined ? 'This is the default title' : _ref$title;return (
    _react2.default.createElement('div', null,
      _react2.default.createElement('header', null,
        _react2.default.createElement('nav', null,
          _react2.default.createElement(_asyncLink2.default, { to: '/home' }, 'Home'), ' |',
          _react2.default.createElement(_asyncLink2.default, { to: '/home/12' }, 'About'), ' |',
          _react2.default.createElement(_asyncLink2.default, { to: '/room' }, 'Contact'))),


      children,
      _react2.default.createElement('footer', null,
        'I`m here to stay')));};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // import Home from './home';

module.exports = [
{
  path: '/home',
  exact: true,
  // component: Home,
  name: 'home',
  componentName: 'home' },
{
  path: '/home/:id',
  exact: true,
  // component: Home,
  name: 'components/home',
  componentName: 'components/home' },
{
  path: '/room',
  exact: false,
  // component: Home,
  name: 'room',
  componentName: 'room' }];

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _taggedTemplateLiteral2 = __webpack_require__(46);var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);var _getPrototypeOf = __webpack_require__(10);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(11);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(23);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(12);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(13);var _inherits3 = _interopRequireDefault(_inherits2);var _templateObject = (0, _taggedTemplateLiteral3.default)(["", ""], ["", ""]),_templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n    translate3d(0,", ",0)\n   "], ["\n    translate3d(0,", ",0)\n   "]);var _react = __webpack_require__(2);var _react2 = _interopRequireDefault(_react);
var _reactDom = __webpack_require__(47);var Animated = _interopRequireWildcard(_reactDom);function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var AnimatedWrapper = function AnimatedWrapper(WrappedComponent) {return function (_Component) {(0, _inherits3.default)(AnimatedWrapper, _Component);

    function AnimatedWrapper(props) {(0, _classCallCheck3.default)(this, AnimatedWrapper);var _this = (0, _possibleConstructorReturn3.default)(this, (AnimatedWrapper.__proto__ || (0, _getPrototypeOf2.default)(AnimatedWrapper)).call(this,
      props));
      _this.state = {
        animate: new Animated.Value(0) };return _this;

    }(0, _createClass3.default)(AnimatedWrapper, [{ key: "componentWillAppear", value: function componentWillAppear(
      cb) {
        Animated.spring(this.state.animate, { toValue: 1 }).start();
        cb();
      } }, { key: "componentWillEnter", value: function componentWillEnter(
      cb) {var _this2 = this;
        setTimeout(
        function () {return Animated.spring(_this2.state.animate, { toValue: 1 }).start();},
        250);

        cb();
      } }, { key: "componentWillLeave", value: function componentWillLeave(
      cb) {
        Animated.spring(this.state.animate, { toValue: 0 }).start();
        setTimeout(function () {return cb();}, 175);
      } }, { key: "render", value: function render()
      {
        var style = {
          opacity: Animated.template(_templateObject, this.state.animate),
          transform: Animated.template(_templateObject2,
          this.state.animate.interpolate({
            inputRange: [0, 1],
            outputRange: ["12px", "0px"] })) };



        return (
          _react2.default.createElement(Animated.div, { style: style, className: "animated-page-wrapper" },
            _react2.default.createElement(WrappedComponent, this.props)));


      } }]);return AnimatedWrapper;}(_react.Component);};exports.default =

AnimatedWrapper;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(10);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(11);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = __webpack_require__(12);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(13);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(2);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(16);var _propTypes2 = _interopRequireDefault(_propTypes);
var _invariant = __webpack_require__(25);var _invariant2 = _interopRequireDefault(_invariant);
var _history = __webpack_require__(32);
var _reactRouterDom = __webpack_require__(22);
var _routes = __webpack_require__(1);var _routes2 = _interopRequireDefault(_routes);
var _reactLoadable = __webpack_require__(26);var _reactLoadable2 = _interopRequireDefault(_reactLoadable);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}


/**
                                                                                                                                                                                                           * The public API for rendering a history-aware <a>.
                                                                                                                                                                                                           */var
AsyncLink = function (_Link) {(0, _inherits3.default)(AsyncLink, _Link);function AsyncLink() {var _ref;var _temp, _this, _ret;(0, _classCallCheck3.default)(this, AsyncLink);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AsyncLink.__proto__ || (0, _getPrototypeOf2.default)(AsyncLink)).call.apply(_ref, [this].concat(args))), _this), _this.

    handleClick = function (event) {
      if (_this.props.onClick) _this.props.onClick(event);

      if (
      !event.defaultPrevented && // onClick prevented default
      event.button === 0 && // ignore everything but left clicks
      !_this.props.target && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();var

          history = _this.context.router.history;var _this$props =
          _this.props,replace = _this$props.replace,to = _this$props.to;
          var locate = function locate() {
            if (replace) {
              history.replace(to);
            } else {
              history.push(to);
            }
          };
          console.log(_this);
          if (_this.context.router.history.location.pathname) {
            var route = _routes2.default.find(function (route) {return (
                (0, _reactRouterDom.matchPath)(_this.context.router.history.location.pathname, route) ? route : null);});
            console.log('../' + route.componentName, route);
            var Console = console;
            alert(2);
            //console.log(route.component.preload())
            route.component.load();
            Console.log('=================================');
            alert(1);
            console.log('imported', data);
            alert(2);
            setTimeout(locate, 3000);
          } else {
            //locate();
          }
        }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);}return AsyncLink;}(_reactRouterDom.Link);exports.default =



AsyncLink;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _extends2 = __webpack_require__(15);var _extends3 = _interopRequireDefault(_extends2);var _getPrototypeOf = __webpack_require__(10);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(11);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(23);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(12);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(13);var _inherits3 = _interopRequireDefault(_inherits2);var _warning = __webpack_require__(48);var _warning2 = _interopRequireDefault(_warning);
var _invariant = __webpack_require__(25);var _invariant2 = _interopRequireDefault(_invariant);
var _react = __webpack_require__(2);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(16);var _propTypes2 = _interopRequireDefault(_propTypes);
var _reactRouter = __webpack_require__(14);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}


/**
                                                                                                                                          * The public API for putting history on context.
                                                                                                                                          */var
AsyncRouter = function (_Router) {(0, _inherits3.default)(AsyncRouter, _Router);function AsyncRouter() {(0, _classCallCheck3.default)(this, AsyncRouter);return (0, _possibleConstructorReturn3.default)(this, (AsyncRouter.__proto__ || (0, _getPrototypeOf2.default)(AsyncRouter)).apply(this, arguments));}(0, _createClass3.default)(AsyncRouter, [{ key: "getChildContext", value: function getChildContext()

    {
      alert('getChildContext');

      console.log('getChildContext', this);
      return {
        router: (0, _extends3.default)({},
        this.context.router, {
          history: this.props.history,
          route: {
            location: this.props.history.location,
            match: this.state.match } }) };



    } }, { key: "componentWillMount", value: function componentWillMount()


    {var _this2 = this;
      console.log('componentWillMount+++++', this);
      alert('componentWillMount');var _props =
      this.props,children = _props.children,history = _props.history;

      (0, _invariant2.default)(
      children == null || _react2.default.Children.count(children) === 1,
      "A <Router> may have only one child element");


      // Do this here so we can setState when a <Redirect> changes the
      // location in componentWillMount. This happens e.g. when doing
      // server rendering using a <StaticRouter>.
      this.unlisten = history.listen(function () {
        _this2.setState({
          match: _this2.computeMatch(history.location.pathname) });

      });
    } }, { key: "componentWillReceiveProps", value: function componentWillReceiveProps(

    nextProps) {
      alert('componentWillReceiveProps');
      console.log('componentWillReceiveProps', this);
      (0, _warning2.default)(
      this.props.history === nextProps.history,
      "You cannot change <Router history>");

    } }, { key: "componentWillUnmount", value: function componentWillUnmount()

    {
      this.unlisten();
    } }]);return AsyncRouter;}(_reactRouter.Router);exports.default =



AsyncRouter;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(10);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _regenerator = __webpack_require__(27);var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = __webpack_require__(28);var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = __webpack_require__(11);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = __webpack_require__(12);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _createClass2 = __webpack_require__(23);var _createClass3 = _interopRequireDefault(_createClass2);var _inherits2 = __webpack_require__(13);var _inherits3 = _interopRequireDefault(_inherits2);
var _react = __webpack_require__(2);var _react2 = _interopRequireDefault(_react);
var _reactRouterDom = __webpack_require__(22);
var _propTypes = __webpack_require__(16);var _propTypes2 = _interopRequireDefault(_propTypes);
var _reactRedux = __webpack_require__(24);
var _actions = __webpack_require__(29);
var _layout = __webpack_require__(0);var _layout2 = _interopRequireDefault(_layout);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var


Home = function (_React$PureComponent) {(0, _inherits3.default)(Home, _React$PureComponent);(0, _createClass3.default)(Home, null, [{ key: 'getInitialProps', value: function () {var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2) {var
        req = _ref2.req,match = _ref2.match,store = _ref2.store,dispatch = _ref2.dispatch;var userAgent, action;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                console.log('getInitialProps');
                userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
                action = _actions.userActions.login({ name: 'John', userAgent: userAgent });if (!
                req) {_context.next = 8;break;}_context.next = 6;return (
                  store.dispatch(action));case 6:_context.next = 9;break;case 8:

                dispatch(action);case 9:return _context.abrupt('return');case 10:case 'end':return _context.stop();}}}, _callee, this);}));function getInitialProps(_x) {return _ref.apply(this, arguments);}return getInitialProps;}() }]);



  function Home(props) {var _ref3;(0, _classCallCheck3.default)(this, Home);for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {rest[_key - 1] = arguments[_key];}return (0, _possibleConstructorReturn3.default)(this, (_ref3 = Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call.apply(_ref3, [this,
    props].concat(rest)));
  }(0, _createClass3.default)(Home, [{ key: 'render', value: function render(
    data) {
      console.log(this.props);
      return (
        _react2.default.createElement('div', null,
          _react2.default.createElement('h1', null, this.props.user.count, ') Hello ', this.props.user.name, ' from ', this.props.user.userAgent, '!'),
          _react2.default.createElement(_reactRouterDom.Link, { to: '/room' }, 'About')));


    } }, { key: 'componentWillMount', value: function componentWillMount()


    {
      // only server
      console.log('componentWillMount');
    } }, { key: 'componentDidMount', value: function () {var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:

                // client and server
                console.log('componentDidMount', this.props);_context2.next = 3;return (
                  Home.getInitialProps(this.props));case 3:case 'end':return _context2.stop();}}}, _callee2, this);}));function componentDidMount() {return _ref4.apply(this, arguments);}return componentDidMount;}() }, { key: 'componentWillReceiveProps', value: function componentWillReceiveProps()

    {console.log('componentWillReceiveProps');} }, { key: 'shouldComponentUpdate0', value: function shouldComponentUpdate0()
    {
      console.log('shouldComponentUpdate');
      return true;
    } }, { key: 'componentWillUpdate', value: function componentWillUpdate()
    {console.log('componentWillUpdate');} }, { key: 'componentDidUpdate', value: function componentDidUpdate()
    {console.log('componentDidUpdate');} }, { key: 'componentWillUnmount', value: function componentWillUnmount()
    {console.log('componentWillUnmount');} }, { key: 'componentDidCatch', value: function componentDidCatch()
    {console.log('componentDidCatch');}
    //    setState()
    //    forceUpdate()
    //    defaultProps
    //    displayName
    //    props
    //    state
  }]);return Home;}(_react2.default.PureComponent);


Home.propTypes = {
  user: _propTypes2.default.shape({
    name: _propTypes2.default.string.isRequired,
    count: _propTypes2.default.number.isRequired,
    userAgent: _propTypes2.default.string.isRequired }) };exports.default =



(0, _reactRedux.connect)(function (state) {return { user: state.user };} /*, mapDispatchToProps*/)(Home);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _reactUniversalComponent = __webpack_require__(50);var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var UniversalComponent = (0, _reactUniversalComponent2.default)(function (props) {return __webpack_require__(51)("./" + props.page);});exports.default =

function () {return (
    React.createElement('div', null,
      React.createElement(UniversalComponent, { componentName: 'Foo' })));};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _extends2 = __webpack_require__(15);var _extends3 = _interopRequireDefault(_extends2);var _react = __webpack_require__(2);var _react2 = _interopRequireDefault(_react);
var _reactRouter = __webpack_require__(14);
var _routes = __webpack_require__(1);var _routes2 = _interopRequireDefault(_routes);
var _layout = __webpack_require__(0);var _layout2 = _interopRequireDefault(_layout);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =

function (data) {return (
    _react2.default.createElement(_layout2.default, null,
      _react2.default.createElement(_reactRouter.Switch, null,

        _routes2.default.map(function (props) {
          props.component = __webpack_require__(30)("./" + props.componentName);
          if (props.component.default) {
            props.component = props.component.default;
          }
          return _react2.default.createElement(_reactRouter.Route, (0, _extends3.default)({ key: props.path }, props));
        }))));};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(10);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(11);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = __webpack_require__(12);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(13);var _inherits3 = _interopRequireDefault(_inherits2);var _react = __webpack_require__(2);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(16);var _propTypes2 = _interopRequireDefault(_propTypes);
var _invariant = __webpack_require__(25);var _invariant2 = _interopRequireDefault(_invariant);
var _history = __webpack_require__(32);
var _reactRouterDom = __webpack_require__(22);
var _routes = __webpack_require__(1);var _routes2 = _interopRequireDefault(_routes);
var _reactLoadable = __webpack_require__(26);var _reactLoadable2 = _interopRequireDefault(_reactLoadable);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}



var isModifiedEvent = function isModifiedEvent(event) {return (
    !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey));};


/**
                                                                              * The public API for rendering a history-aware <a>.
                                                                              */var
AsyncLink = function (_Link) {(0, _inherits3.default)(AsyncLink, _Link);function AsyncLink() {var _ref;var _temp, _this, _ret;(0, _classCallCheck3.default)(this, AsyncLink);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AsyncLink.__proto__ || (0, _getPrototypeOf2.default)(AsyncLink)).call.apply(_ref, [this].concat(args))), _this), _this.

    handleClick = function (event) {
      if (_this.props.onClick) _this.props.onClick(event);

      if (
      !event.defaultPrevented && // onClick prevented default
      event.button === 0 && // ignore everything but left clicks
      !_this.props.target && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {var



          locate = function locate() {
            if (replace) {
              history.replace(to);
            } else {
              history.push(to);
            }
          };event.preventDefault();var history = _this.context.router.history;var _this$props = _this.props,replace = _this$props.replace,to = _this$props.to;
          if (_this.context.router.history.location.pathname) {
            var route = _routes2.default.find(function (route) {return (0, _reactRouterDom.matchPath)(_this.props.to, route) ? route : null;});
            if (route) {
              __webpack_require__(44)("" + String('./' + route.componentName)).then(function () {locate();});
            } else {
              locate();
            }
          } else {
            locate();
          }
        }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);}return AsyncLink;}(_reactRouterDom.Link);exports.default =



AsyncLink;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _routes = __webpack_require__(1);var _routes2 = _interopRequireDefault(_routes);
var _reactRouter = __webpack_require__(14);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var realLink = _reactRouter.Link;

try {
  if (typeof process == 'undefined') {
    var AsyncSetup = __webpack_require__(45);
    var asyncSetup = AsyncSetup(_routes2.default, function (path) {return __webpack_require__(33)("./" + componentName);});
    realLink = asyncSetup.Link;
  }
} catch (ex) {}

module.exports = { Link: realLink };

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _extends2 = __webpack_require__(15);var _extends3 = _interopRequireDefault(_extends2);var _react = __webpack_require__(2);var _react2 = _interopRequireDefault(_react);
var _reactRouter = __webpack_require__(14);
var _routes = __webpack_require__(1);var _routes2 = _interopRequireDefault(_routes);
var _reactLoadable = __webpack_require__(26);var _reactLoadable2 = _interopRequireDefault(_reactLoadable);
var _layout = __webpack_require__(0);var _layout2 = _interopRequireDefault(_layout);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =

function (data) {return (
    _react2.default.createElement(_layout2.default, null,
      _react2.default.createElement(_reactRouter.Switch, null,

        _routes2.default.map(function (props) {
          props.component = (0, _reactLoadable2.default)({
            loader: function loader() {return __webpack_require__(33)("./" + props.componentName);},
            loading: function loading() {return null;},
            delay: function delay() {return 0;},
            timeout: 10000 });

          return _react2.default.createElement(_reactRouter.Route, (0, _extends3.default)({ key: props.path }, props));
        }))));};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _extends2 = __webpack_require__(15);var _extends3 = _interopRequireDefault(_extends2);var _react = __webpack_require__(2);var _react2 = _interopRequireDefault(_react);
var _reactRouter = __webpack_require__(14);
var _routes = __webpack_require__(1);var _routes2 = _interopRequireDefault(_routes);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =

function (data) {return (
    _react2.default.createElement(_reactRouter.Switch, null,

      _routes2.default.map(function (props) {
        props.component = __webpack_require__(30)("./" + props.componentName).default;
        return _react2.default.createElement(_reactRouter.Route, (0, _extends3.default)({ key: props.path }, props));
      })));};




function Loading() {
  return _react2.default.createElement('div', null, 'Loading...');
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(10);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _regenerator = __webpack_require__(27);var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = __webpack_require__(28);var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = __webpack_require__(11);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = __webpack_require__(12);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _createClass2 = __webpack_require__(23);var _createClass3 = _interopRequireDefault(_createClass2);var _inherits2 = __webpack_require__(13);var _inherits3 = _interopRequireDefault(_inherits2);
var _react = __webpack_require__(2);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(16);var _propTypes2 = _interopRequireDefault(_propTypes);
var _reactRedux = __webpack_require__(24);
var _actions = __webpack_require__(29);
var _layout = __webpack_require__(0);var _layout2 = _interopRequireDefault(_layout);
var _Transition = __webpack_require__(35);var _Transition2 = _interopRequireDefault(_Transition);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var


Home = function (_React$PureComponent) {(0, _inherits3.default)(Home, _React$PureComponent);(0, _createClass3.default)(Home, null, [{ key: 'getInitialProps', value: function () {var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2) {var
        req = _ref2.req,match = _ref2.match,store = _ref2.store,dispatch = _ref2.dispatch;var userAgent, action;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
                action = _actions.userActions.login({ name: 'John', userAgent: userAgent });if (!
                req) {_context.next = 7;break;}_context.next = 5;return (
                  store.dispatch(action));case 5:_context.next = 8;break;case 7:

                dispatch(action);case 8:return _context.abrupt('return');case 9:case 'end':return _context.stop();}}}, _callee, this);}));function getInitialProps(_x) {return _ref.apply(this, arguments);}return getInitialProps;}() }]);



  function Home(props) {var _ref3;(0, _classCallCheck3.default)(this, Home);for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {rest[_key - 1] = arguments[_key];}return (0, _possibleConstructorReturn3.default)(this, (_ref3 = Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call.apply(_ref3, [this,
    props].concat(rest)));
  }(0, _createClass3.default)(Home, [{ key: 'render', value: function render(
    data) {
      console.log(this.props);
      return (
        _react2.default.createElement('h1', null, this.props.user.count, ') Hello ', this.props.user.name, ' from ', this.props.user.userAgent, '!'));

    } }, { key: 'componentWillMount', value: function componentWillMount()


    {
      // only server
      console.log('componentWillMount');
    } }, { key: 'componentDidMount', value: function () {var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:

                // client and server
                console.log('componentDidMount', this.props);_context2.next = 3;return (
                  Home.getInitialProps(this.props));case 3:case 'end':return _context2.stop();}}}, _callee2, this);}));function componentDidMount() {return _ref4.apply(this, arguments);}return componentDidMount;}() }, { key: 'componentWillReceiveProps', value: function componentWillReceiveProps()

    {console.log('componentWillReceiveProps');} }, { key: 'shouldComponentUpdate0', value: function shouldComponentUpdate0()
    {
      console.log('shouldComponentUpdate');
      return true;
    } }, { key: 'componentWillUpdate', value: function componentWillUpdate()
    {console.log('componentWillUpdate');} }, { key: 'componentDidUpdate', value: function componentDidUpdate()
    {console.log('componentDidUpdate');} }, { key: 'componentWillUnmount', value: function componentWillUnmount()
    {console.log('componentWillUnmount');} }, { key: 'componentDidCatch', value: function componentDidCatch()
    {console.log('componentDidCatch');}
    //    setState()
    //    forceUpdate()
    //    defaultProps
    //    displayName
    //    props
    //    state
  }]);return Home;}(_react2.default.PureComponent);


Home.propTypes = {
  user: _propTypes2.default.shape({
    name: _propTypes2.default.string.isRequired,
    count: _propTypes2.default.number.isRequired,
    userAgent: _propTypes2.default.string.isRequired }) };exports.default =



(0, _reactRedux.connect)(function (state) {return { user: state.user };} /*, mapDispatchToProps*/)(Home);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(10);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _regenerator = __webpack_require__(27);var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = __webpack_require__(28);var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = __webpack_require__(11);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = __webpack_require__(12);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _createClass2 = __webpack_require__(23);var _createClass3 = _interopRequireDefault(_createClass2);var _inherits2 = __webpack_require__(13);var _inherits3 = _interopRequireDefault(_inherits2);
var _react = __webpack_require__(2);var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(16);var _propTypes2 = _interopRequireDefault(_propTypes);
var _reactRedux = __webpack_require__(24);
var _reactRouterDom = __webpack_require__(22);
var _actions = __webpack_require__(29);
var _layout = __webpack_require__(0);var _layout2 = _interopRequireDefault(_layout);
var _Transition = __webpack_require__(35);var _Transition2 = _interopRequireDefault(_Transition);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}


console.log('******************* Room ****************');var

Room = function (_React$PureComponent) {(0, _inherits3.default)(Room, _React$PureComponent);(0, _createClass3.default)(Room, null, [{ key: 'getInitialProps', value: function () {var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2) {var
        req = _ref2.req,match = _ref2.match,store = _ref2.store,dispatch = _ref2.dispatch;var userAgent, action;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                console.log('getInitialProps');
                userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
                action = _actions.userActions.login({ name: 'John', userAgent: userAgent });if (!
                req) {_context.next = 8;break;}_context.next = 6;return (
                  store.dispatch(action));case 6:_context.next = 9;break;case 8:

                dispatch(action);case 9:return _context.abrupt('return');case 10:case 'end':return _context.stop();}}}, _callee, this);}));function getInitialProps(_x) {return _ref.apply(this, arguments);}return getInitialProps;}() }]);



  function Room(props) {var _ref3;(0, _classCallCheck3.default)(this, Room);for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {rest[_key - 1] = arguments[_key];}return (0, _possibleConstructorReturn3.default)(this, (_ref3 = Room.__proto__ || (0, _getPrototypeOf2.default)(Room)).call.apply(_ref3, [this,
    props].concat(rest)));
  }(0, _createClass3.default)(Room, [{ key: 'render', value: function render(
    data) {
      console.log(this.props);
      return (

        _react2.default.createElement('div', null,
          _react2.default.createElement('h1', null, this.props.user.count, ') Hello ', this.props.user.name, ' from ', this.props.user.userAgent, '!'),
          _react2.default.createElement(_reactRouterDom.Link, { to: '/home' }, 'About'),
          _react2.default.createElement(_reactRouterDom.Link, { to: '/home/12' }, 'About')));


    } }, { key: 'componentWillMount', value: function componentWillMount()


    {
      // only server
      console.log('componentWillMount');
    } }, { key: 'componentDidMount', value: function () {var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:

                // client and server
                console.log('componentDidMount', this.props);_context2.next = 3;return (
                  Room.getInitialProps(this.props));case 3:case 'end':return _context2.stop();}}}, _callee2, this);}));function componentDidMount() {return _ref4.apply(this, arguments);}return componentDidMount;}() }, { key: 'componentWillReceiveProps', value: function componentWillReceiveProps()

    {console.log('componentWillReceiveProps');} }, { key: 'shouldComponentUpdate0', value: function shouldComponentUpdate0()
    {
      console.log('shouldComponentUpdate');
      return true;
    } }, { key: 'componentWillUpdate', value: function componentWillUpdate()
    {console.log('componentWillUpdate');} }, { key: 'componentDidUpdate', value: function componentDidUpdate()
    {console.log('componentDidUpdate');} }, { key: 'componentWillUnmount', value: function componentWillUnmount()
    {console.log('componentWillUnmount');} }, { key: 'componentDidCatch', value: function componentDidCatch()
    {console.log('componentDidCatch');}
    //    setState()
    //    forceUpdate()
    //    defaultProps
    //    displayName
    //    props
    //    state
  }]);return Room;}(_react2.default.PureComponent);


Room.propTypes = {
  user: _propTypes2.default.shape({
    name: _propTypes2.default.string.isRequired,
    count: _propTypes2.default.number.isRequired,
    userAgent: _propTypes2.default.string.isRequired }) };exports.default =



(0, _reactRedux.connect)(function (state) {return { user: state.user };} /*, mapDispatchToProps*/)(Room);

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("invariant");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-loadable");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.userActions = undefined;var _userActions2 = __webpack_require__(49);var _userActions = _interopRequireWildcard(_userActions2);function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}exports.userActions = _userActions;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./asyncLink": 9,
	"./asyncLink.js": 9,
	"./asyncRouter": 17,
	"./asyncRouter.js": 17,
	"./clientRouter": 18,
	"./clientRouter.js": 18,
	"./components/animatedWrapper": 3,
	"./components/animatedWrapper.js": 3,
	"./components/asyncLink": 4,
	"./components/asyncLink.js": 4,
	"./components/asyncRouter": 5,
	"./components/asyncRouter.js": 5,
	"./components/home": 6,
	"./components/home.js": 6,
	"./components/layout": 0,
	"./components/layout.js": 0,
	"./components/universalComponent": 7,
	"./components/universalComponent.js": 7,
	"./devRouter": 19,
	"./devRouter.js": 19,
	"./home": 20,
	"./home.js": 20,
	"./room": 21,
	"./room.js": 21,
	"./routes": 1,
	"./routes.js": 1,
	"./serverRouter": 8,
	"./serverRouter.js": 8
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 30;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("history");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./asyncLink": [
		9
	],
	"./asyncLink.js": [
		9
	],
	"./asyncRouter": [
		17
	],
	"./asyncRouter.js": [
		17
	],
	"./clientRouter": [
		18
	],
	"./clientRouter.js": [
		18
	],
	"./components/animatedWrapper": [
		3
	],
	"./components/animatedWrapper.js": [
		3
	],
	"./components/asyncLink": [
		4
	],
	"./components/asyncLink.js": [
		4
	],
	"./components/asyncRouter": [
		5
	],
	"./components/asyncRouter.js": [
		5
	],
	"./components/home": [
		6
	],
	"./components/home.js": [
		6
	],
	"./components/layout": [
		0
	],
	"./components/layout.js": [
		0
	],
	"./components/universalComponent": [
		7
	],
	"./components/universalComponent.js": [
		7
	],
	"./devRouter": [
		19
	],
	"./devRouter.js": [
		19
	],
	"./home": [
		20
	],
	"./home.js": [
		20
	],
	"./room": [
		21
	],
	"./room.js": [
		21
	],
	"./routes": [
		1
	],
	"./routes.js": [
		1
	],
	"./serverRouter": [
		8
	],
	"./serverRouter.js": [
		8
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 33;
module.exports = webpackAsyncContext;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var LOGIN_REQUEST = exports.LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
var LOGIN_FAIL = exports.LOGIN_FAIL = 'USER_LOGIN_FAIL';
var LOGIN_SUCCESS = exports.LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
var LOGOUT_SUCCES = exports.LOGOUT_SUCCES = 'USER_LOGOUT_SUCCESS';

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("react-transition-group/Transition");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _stringify = __webpack_require__(38);var _stringify2 = _interopRequireDefault(_stringify);var _promise = __webpack_require__(31);var _promise2 = _interopRequireDefault(_promise);
var _fs = __webpack_require__(39);var _fs2 = _interopRequireDefault(_fs);
var _express = __webpack_require__(40);var _express2 = _interopRequireDefault(_express);
__webpack_require__(41);


var _http = __webpack_require__(42);
var _react = __webpack_require__(2);var _react2 = _interopRequireDefault(_react);
var _server = __webpack_require__(43);var _server2 = _interopRequireDefault(_server);
var _reactRouter = __webpack_require__(14);
var _reactRouterDom = __webpack_require__(22);
var _reactRedux = __webpack_require__(24);
var _routes = __webpack_require__(1);var _routes2 = _interopRequireDefault(_routes);
var _serverRouter = __webpack_require__(8);var _serverRouter2 = _interopRequireDefault(_serverRouter);
var _store = __webpack_require__(52);var _store2 = _interopRequireDefault(_store);
var _stats = __webpack_require__(60);var _stats2 = _interopRequireDefault(_stats);
var _routes3 = __webpack_require__(61);var _routes4 = _interopRequireDefault(_routes3);
var _layout = __webpack_require__(0);var _layout2 = _interopRequireDefault(_layout);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var PORT = 3000;var app = (0, _express2.default)();


module.exports = function (req, res, next) {

  var store = (0, _store2.default)();
  var promises = [];
  var componentNames = [];
  _routes2.default.some(function (route) {
    var match = (0, _reactRouterDom.matchPath)(req.path, route);
    if (match) {
      var component = __webpack_require__(30)("./" + route.componentName);
      if (component.default) {
        component = component.default;
      }
      componentNames.push(route.componentName);
      if (typeof component.getInitialProps == 'function') {
        promises.push(component.getInitialProps({ req: req, res: res, next: next, match: match, store: store }));
      }
    }
    return match;
  });

  _promise2.default.all(promises).then(function (data) {
    var context = { data: data };
    var html = _server2.default.renderToString(
    _react2.default.createElement(_reactRedux.Provider, { store: store },
      _react2.default.createElement(_reactRouter.StaticRouter, { location: req.url, context: context },
        _react2.default.createElement(_serverRouter2.default, null))));




    if (context.url) {
      res.writeHead(301, {
        Location: context.url });

      res.end();
    } else {
      res.write('\n        <!doctype html>\n        <script>\n         // WARNING: See the following for security issues around embedding JSON in HTML:\n         // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations\n         window.__PRELOADED_STATE__ = ' +




      (0, _stringify2.default)(store.getState()).replace(/</g, '\\u003c') + '\n        </script>\n        <div id="app">' +

      html + '</div>\n        <script src=\'' +
      assets(_stats2.default.common) + '\'></script>\n        ' +
      componentNames.map(function (componentName) {return '<script src=\'' +
        assets(_stats2.default[componentName]) + '\'></script>';}) + '\n      ');


      res.end();
    }
  });
};

function assets(name, isDevelopment) {
  var prefix = void 0;
  if (isDevelopment) {
    prefix = 'http://localhost:3001/static/';
  } else {
    prefix = '/static/';
  }
  if (name instanceof Array) {
    return prefix + name[0];
  } else {
    return prefix + name;
  }
}

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("./api/test");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./asyncLink": [
		9
	],
	"./asyncLink.js": [
		9
	],
	"./asyncRouter": [
		17
	],
	"./asyncRouter.js": [
		17
	],
	"./clientRouter": [
		18
	],
	"./clientRouter.js": [
		18
	],
	"./components/animatedWrapper": [
		3
	],
	"./components/animatedWrapper.js": [
		3
	],
	"./components/asyncLink": [
		4
	],
	"./components/asyncLink.js": [
		4
	],
	"./components/asyncRouter": [
		5
	],
	"./components/asyncRouter.js": [
		5
	],
	"./components/home": [
		6
	],
	"./components/home.js": [
		6
	],
	"./components/layout": [
		0
	],
	"./components/layout.js": [
		0
	],
	"./components/universalComponent": [
		7
	],
	"./components/universalComponent.js": [
		7
	],
	"./devRouter": [
		19
	],
	"./devRouter.js": [
		19
	],
	"./home": [
		20
	],
	"./home.js": [
		20
	],
	"./room": [
		21
	],
	"./room.js": [
		21
	],
	"./routes": [
		1
	],
	"./routes.js": [
		1
	],
	"./serverRouter": [
		8
	],
	"./serverRouter.js": [
		8
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 44;
module.exports = webpackAsyncContext;

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("react-router-async-routing");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/taggedTemplateLiteral");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("animated/lib/targets/react-dom");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("warning");

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.login = undefined;var _promise = __webpack_require__(31);var _promise2 = _interopRequireDefault(_promise);exports.




























logout = logout;var _userConstants = __webpack_require__(34);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function promise(_ref) {var name = _ref.name,userAgent = _ref.userAgent;return new _promise2.default(function (resolve, reject) {setTimeout(function () {return resolve({ name: name, userAgent: userAgent });}, 500);setTimeout(function () {return reject({ name: 'Luka' });}, 1000);});} /* eslint-disable no-unused-vars */var login = exports.login = function login(_ref2) {var name = _ref2.name,userAgent = _ref2.userAgent;return function (dispatch) {dispatch({ type: _userConstants.LOGIN_REQUEST });return promise({ name: name, userAgent: userAgent }).then(function (payload) {return dispatch({ type: _userConstants.LOGIN_SUCCESS, payload: payload });}, function (error) {return dispatch({ type: _userConstants.LOGIN_FAIL, error: error });});};};function logout() {
  return {
    type: _userConstants.LOGOUT_SUCCESS };

}
/* eslint-enable no-unused-vars */

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("react-universal-component");

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./animatedWrapper": [
		3
	],
	"./animatedWrapper.js": [
		3
	],
	"./asyncLink": [
		4
	],
	"./asyncLink.js": [
		4
	],
	"./asyncRouter": [
		5
	],
	"./asyncRouter.js": [
		5
	],
	"./home": [
		6
	],
	"./home.js": [
		6
	],
	"./layout": [
		0
	],
	"./layout.js": [
		0
	],
	"./universalComponent": [
		7
	],
	"./universalComponent.js": [
		7
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 51;
module.exports = webpackAsyncContext;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default =





prepareStore;var _redux = __webpack_require__(36);var _reduxThunk = __webpack_require__(53);var _reduxThunk2 = _interopRequireDefault(_reduxThunk);var _reduxLogger = __webpack_require__(54);var _promisedMiddleware = __webpack_require__(55);var _promisedMiddleware2 = _interopRequireDefault(_promisedMiddleware);var _reducers = __webpack_require__(58);var _reducers2 = _interopRequireDefault(_reducers);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function prepareStore(initialState) {
  var store = (0, _redux.compose)(
  (0, _redux.applyMiddleware)((0, _promisedMiddleware2.default)()),
  (0, _redux.applyMiddleware)(_reduxThunk2.default),
  (0, _redux.applyMiddleware)((0, _reduxLogger.createLogger)({})))(_redux.createStore)(_reducers2.default,
  initialState);

  if (false) {
    module.hot.accept(function () {
      var nextRootReducer = _reducers2.default;
      store.replaceReducer(nextRootReducer);
    });
  }

  store.dispatchAsync = function dispatchAsync(action) {
    console.log(action);
    if (!action.promised) {
      throw new Error('Use dispatchAsync for promised action only!');
    }
    store.dispatch(action);
    if (!action.promise) {
      throw new Error('Use dispatchAsync for promised action only!');
    }
    return action.promise;
  };
  return store;
}

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _extends2 = __webpack_require__(15);var _extends3 = _interopRequireDefault(_extends2);var _slicedToArray2 = __webpack_require__(56);var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);var _objectWithoutProperties2 = __webpack_require__(57);var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default = function () {return function (_ref) {var dispatch = _ref.dispatch,getState = _ref.getState;return function (next) {return function (action) {var
        promise = action.promise,promised = action.promised,types = action.types,rest = (0, _objectWithoutProperties3.default)(action, ['promise', 'promised', 'types']);
        if (!promised) {
          return next(action);
        }
        if (typeof promise !== 'undefined') {
          throw new Error('In promised middleware you mast not use "action"."promise"');
        }
        if (typeof promised !== 'function') {
          throw new Error('In promised middleware type of "action"."promised" must be "function"');
        }var _types = (0, _slicedToArray3.default)(
        types, 3),REQUEST = _types[0],SUCCESS = _types[1],FAILURE = _types[2];
        next((0, _extends3.default)({}, rest, { type: REQUEST }));
        action.promise = promised().
        then(
        function (payload) {return next((0, _extends3.default)({}, rest, { payload: payload, type: SUCCESS }));}).
        catch(
        function (error) {return next((0, _extends3.default)({}, rest, { error: error, type: FAILURE }));});

      };};};};

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/objectWithoutProperties");

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _redux = __webpack_require__(36);
var _userReducer = __webpack_require__(59);var _userReducer2 = _interopRequireDefault(_userReducer);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =

(0, _redux.combineReducers)({
  user: _userReducer2.default });

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _extends2 = __webpack_require__(15);var _extends3 = _interopRequireDefault(_extends2);exports.default =










userReducer;var _userConstants = __webpack_require__(34);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var initialState = { count: 0 };function userReducer() {var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;var action = arguments[1];
  console.log('*** state  ***', state);
  switch (action.type) {
    case _userConstants.LOGIN_REQUEST:
      return state;
    case _userConstants.LOGIN_SUCCESS:
      return (0, _extends3.default)({},
      state, {
        name: action.payload.name,
        userAgent: action.payload.userAgent,
        isAuthenticated: true,
        count: state.count + 1 });

    case _userConstants.LOGIN_FAIL:
      return (0, _extends3.default)({}, initialState);
    case _userConstants.LOGOUT_SUCCESS:
      return (0, _extends3.default)({}, initialState);
    default:
      return state;}

}

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("../dist/stats.generated");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("./api/routes");

/***/ })
/******/ ]);