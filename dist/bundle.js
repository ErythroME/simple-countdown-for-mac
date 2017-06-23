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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(["\n  html, body {\n    margin: 0;\n    padding: 0;\n  }\n  body {\n    background-color: rgba(255, 255, 255, 0.96);\n    text-align: center;\n    display: flex;\n    align-item: center;\n    justify-content: center;\n    height: 100vh;\n    width: 100vw;\n    padding: 1.5rem 0;\n  }\n"], ["\n  html, body {\n    margin: 0;\n    padding: 0;\n  }\n  body {\n    background-color: rgba(255, 255, 255, 0.96);\n    text-align: center;\n    display: flex;\n    align-item: center;\n    justify-content: center;\n    height: 100vh;\n    width: 100vw;\n    padding: 1.5rem 0;\n  }\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(3);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _styledComponents = __webpack_require__(1);

var _Timer = __webpack_require__(4);

var _Timer2 = _interopRequireDefault(_Timer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

(0, _styledComponents.injectGlobal)(_templateObject);

var app = document.getElementById("app");
_reactDom2.default.render(_react2.default.createElement(_Timer2.default, null), app);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  width: 70vw;\n  height: 70vw;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 1.5rem 0;\n"], ["\n  width: 70vw;\n  height: 70vw;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 1.5rem 0;\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  width: calc(100vw - 0.8em);\n  margin: 0 0.4em;\n  height: 50px;\n"], ["\n  display: flex;\n  flex-direction: row;\n  width: calc(100vw - 0.8em);\n  margin: 0 0.4em;\n  height: 50px;\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Countdown = __webpack_require__(5);

var _Countdown2 = _interopRequireDefault(_Countdown);

var _Circle = __webpack_require__(6);

var _Circle2 = _interopRequireDefault(_Circle);

var _Button = __webpack_require__(7);

var _Button2 = _interopRequireDefault(_Button);

var _Input = __webpack_require__(8);

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TimerWrapper = _styledComponents2.default.div(_templateObject);
var CountdownWrapper = _styledComponents2.default.div(_templateObject2);
var Control = _styledComponents2.default.div(_templateObject3);

var Timer = function (_Component) {
  _inherits(Timer, _Component);

  function Timer(props) {
    _classCallCheck(this, Timer);

    var _this = _possibleConstructorReturn(this, (Timer.__proto__ || Object.getPrototypeOf(Timer)).call(this, props));

    _this.totalSeconds = props.hours * 3600 + props.min * 60;
    _this.state = {
      totalSeconds: _this.totalSeconds,
      time: { hours: 0, min: 0, sec: 0 }
    };

    _this.setTimer = _this.setTimer.bind(_this);
    _this.pauseTimer = _this.pauseTimer.bind(_this);
    _this.toggleTimer = _this.toggleTimer.bind(_this);
    _this.resetTimer = _this.resetTimer.bind(_this);
    _this.updateTimer = _this.updateTimer.bind(_this);
    return _this;
  }

  _createClass(Timer, [{
    key: "setTimer",
    value: function setTimer() {
      var hours = Number.parseInt(this.refs.hours.input.value, 10) || 0;
      var min = Number.parseInt(this.refs.minutes.input.value, 10) || 0;
      this.totalSeconds = hours * 3600 + min * 60;
      this.setState({
        totalSeconds: this.totalSeconds,
        time: {
          hours: Math.floor(this.totalSeconds / 3600),
          min: Math.floor(this.totalSeconds % 3600 / 60),
          sec: this.totalSeconds % 3600 % 60
        }
      }, this.updateTimer);
    }
  }, {
    key: "pauseTimer",
    value: function pauseTimer() {
      clearInterval(this.timer);
      this.timer = undefined;
    }
  }, {
    key: "toggleTimer",
    value: function toggleTimer() {
      if (this.timer) {
        this.pauseTimer();
      } else {
        this.updateTimer();
      }
    }
  }, {
    key: "updateTimer",
    value: function updateTimer() {
      var _this2 = this;

      this.timer = setInterval(function () {
        var totalSeconds = _this2.state.totalSeconds;
        if (_this2.state.totalSeconds > 0) {
          var currentSeconds = totalSeconds - 1;
          _this2.setState({
            totalSeconds: currentSeconds,
            time: {
              hours: Math.floor(currentSeconds / 3600),
              min: Math.floor(currentSeconds % 3600 / 60),
              sec: currentSeconds % 3600 % 60
            }
          });
        } else {
          _this2.resetTimer();
        }
      }, 1000);
      return this.timer;
    }
  }, {
    key: "resetTimer",
    value: function resetTimer() {
      this.setState({
        totalSeconds: 0,
        time: { hours: 0, min: 0, sec: 0 }
      });
      if (this.timer) {
        this.pauseTimer();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _state$time = this.state.time,
          hours = _state$time.hours,
          min = _state$time.min,
          sec = _state$time.sec;

      var progress = (this.totalSeconds - this.state.totalSeconds) / this.totalSeconds;
      return _react2.default.createElement(
        TimerWrapper,
        null,
        _react2.default.createElement(
          Control,
          null,
          _react2.default.createElement(_Input2.default, { ref: "hours", placeholder: "hours" }),
          _react2.default.createElement(_Input2.default, { ref: "minutes", placeholder: "minutes" })
        ),
        _react2.default.createElement(
          Control,
          null,
          _react2.default.createElement(
            _Button2.default,
            { primary: true, onClick: this.setTimer },
            "Start"
          ),
          _react2.default.createElement(
            _Button2.default,
            { onClick: this.toggleTimer },
            "Pause"
          ),
          _react2.default.createElement(
            _Button2.default,
            { onClick: this.resetTimer },
            "Stop"
          )
        ),
        _react2.default.createElement(
          CountdownWrapper,
          null,
          _react2.default.createElement(_Circle2.default, { progress: progress }),
          _react2.default.createElement(_Countdown2.default, { hours: hours, min: min, sec: sec })
        )
      );
    }
  }]);

  return Timer;
}(_react.Component);

exports.default = Timer;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  font-size: 16vw;\n  line-height: 1;\n  color: palevioletred;\n  font-family: PingFangSC-Light, \"helvetica neue\", \"hiragino sans gb\", sans-serif\n"], ["\n  font-size: 16vw;\n  line-height: 1;\n  color: palevioletred;\n  font-family: PingFangSC-Light, \"helvetica neue\", \"hiragino sans gb\", sans-serif\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CountdownDiv = _styledComponents2.default.div(_templateObject);

var Countdown = function Countdown(_ref) {
  var hours = _ref.hours,
      min = _ref.min,
      sec = _ref.sec;

  return _react2.default.createElement(
    CountdownDiv,
    null,
    hours,
    ":",
    min,
    ":",
    sec
  );
};

exports.default = Countdown;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n"], ["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CircleWrapper = _styledComponents2.default.svg(_templateObject);

var Circle = function Circle(_ref) {
  var progress = _ref.progress;

  var ploar2Cartesian = function ploar2Cartesian(center, radius, angleInDegrees) {
    var angleInRedians = (angleInDegrees - 90) * Math.PI / 180;
    var x = center + radius * Math.cos(angleInRedians);
    var y = center + radius * Math.sin(angleInRedians);
    return { x: x, y: y };
  };

  var drawArc = function drawArc(endAngle) {
    var endAngleUsed = endAngle === 360 ? 359 : endAngle;
    var radius = 150 - 8;
    var start = ploar2Cartesian(150, radius, endAngleUsed);
    var end = ploar2Cartesian(150, radius, 0);
    var arcSweep = endAngle <= 180 ? 0 : 1;
    return "M " + start.x + " " + start.y + "\n            A " + radius + " " + radius + " 0 " + arcSweep + " 0 " + end.x + " " + end.y;
  };

  return _react2.default.createElement(
    CircleWrapper,
    {
      viewBox: "0, 0, 300, 300",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    },
    _react2.default.createElement("path", {
      d: drawArc(progress * 360),
      fill: "none",
      stroke: "#cfcfcf",
      strokeWidth: 15,
      strokeLinecap: "round"
    })
  );
};
exports.default = Circle;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  background-color: ", ";\n  color: ", ";\n  width: 33%;\n  font-size: 1em;\n  margin: 0.4em;\n  padding: 0.25em 0.5em;\n  border: 2px solid palevioletred;\n  border-radius: 3px;\n  outline: none;\n"], ["\n  background-color: ", ";\n  color: ", ";\n  width: 33%;\n  font-size: 1em;\n  margin: 0.4em;\n  padding: 0.25em 0.5em;\n  border: 2px solid palevioletred;\n  border-radius: 3px;\n  outline: none;\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ButtonStyles = _styledComponents2.default.button(_templateObject, function (props) {
  return props.primary ? "palevioletred" : "white";
}, function (props) {
  return props.primary ? "white" : "palevioletred";
});

var Button = function Button(_ref) {
  var primary = _ref.primary,
      children = _ref.children,
      onClick = _ref.onClick;
  return _react2.default.createElement(
    ButtonStyles,
    { primary: primary, onClick: onClick },
    children
  );
};

exports.default = Button;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n  background-color: papayawhip;\n  color: palevioletred;\n  width:  50%;\n  font-size: 1em;\n  margin: 0.4em;\n  padding: 0.5em;\n  border: none;\n  border-radius: 3px;\n  outline: none;\n  text-align: center;\n"], ["\n  background-color: papayawhip;\n  color: palevioletred;\n  width:  50%;\n  font-size: 1em;\n  margin: 0.4em;\n  padding: 0.5em;\n  border: none;\n  border-radius: 3px;\n  outline: none;\n  text-align: center;\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var InputStyles = _styledComponents2.default.input(_templateObject);

var Input = function (_Component) {
  _inherits(Input, _Component);

  function Input() {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this));

    _this.state = { value: undefined };

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(Input, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState({ value: e.target.value });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var placeholder = this.props.placeholder;

      return _react2.default.createElement(InputStyles, {
        innerRef: function innerRef(x) {
          return _this2.input = x;
        },
        placeholder: placeholder,
        type: "number",
        value: this.state.value,
        onChange: this.handleChange
      });
    }
  }]);

  return Input;
}(_react.Component);

exports.default = Input;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map