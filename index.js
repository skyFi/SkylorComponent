'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = undefined;

var _freeze = require('babel-runtime/core-js/object/freeze');

var _freeze2 = _interopRequireDefault(_freeze);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line
var _require = require('react'),
    React = _require.React,
    Component = _require.Component;

var options = {};

var SkylorComponent = function (_Component) {
  (0, _inherits3.default)(SkylorComponent, _Component);

  function SkylorComponent(props) {
    (0, _classCallCheck3.default)(this, SkylorComponent);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SkylorComponent.__proto__ || (0, _getPrototypeOf2.default)(SkylorComponent)).call(this, props));

    (0, _keys2.default)(options).forEach(function (key) {
      _this[key] = options[key];
      (0, _freeze2.default)(options[key]);
    });
    return _this;
  }

  return SkylorComponent;
}(Component);

var init = exports.init = function init() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  options = opts;
  (0, _freeze2.default)(options);
};

exports.default = SkylorComponent;
