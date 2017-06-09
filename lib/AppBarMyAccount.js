'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _Avatar = require('material-ui/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// material-ui


// styles


var AppBarMyAccount = function (_Component) {
  _inherits(AppBarMyAccount, _Component);

  function AppBarMyAccount() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AppBarMyAccount);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AppBarMyAccount.__proto__ || Object.getPrototypeOf(AppBarMyAccount)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isOpen: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AppBarMyAccount, [{
    key: 'openMyAccount',
    value: function openMyAccount() {
      this.setState({ isOpen: true });
    }
  }, {
    key: 'closeMyAccount',
    value: function closeMyAccount() {
      this.setState({ isOpen: false });
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty(obj) {
      if (obj === undefined) return true;
      if (obj === null) return true;
      if (obj.length > 0) return false;
      if (obj.length === 0) return true;
      if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') return true;
      for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
      }

      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var isOpen = this.state.isOpen;
      var user = this.props.user;
      var muiTheme = this.context.muiTheme;


      var palette = undefined;

      if (muiTheme) {
        palette = muiTheme.rawTheme.palette;
      }

      if (this.isEmpty(user)) {
        return _react2.default.createElement('div', null);
      }

      return _react2.default.createElement(
        _MuiThemeProvider2.default,
        { muiTheme: this.context.muiTheme },
        _react2.default.createElement(
          'div',
          {
            tabIndex: 2,
            onBlur: this.closeMyAccount.bind(this),
            style: { margin: 10 }
          },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              _Avatar2.default,
              {
                style: { cursor: 'pointer' },
                size: 30,
                onClick: function onClick() {
                  _this2.openMyAccount();
                }
              },
              user.firstName ? user.firstName[0] : null
            ),
            isOpen ? _react2.default.createElement(
              _Paper2.default,
              {
                style: _styles2.default.container
              },
              _react2.default.createElement(
                'div',
                {
                  style: _styles2.default.subContainer
                },
                _react2.default.createElement(
                  'div',
                  {
                    style: _styles2.default.avatarContainer
                  },
                  _react2.default.createElement(
                    _Avatar2.default,
                    {
                      size: 70
                    },
                    'O'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  {
                    style: _styles2.default.infoContainer
                  },
                  _react2.default.createElement(
                    'b',
                    null,
                    user.firstName,
                    ' ',
                    user.lastName
                  ),
                  _react2.default.createElement('br', null),
                  _react2.default.createElement(
                    'span',
                    { style: _styles2.default.email },
                    user.email
                  ),
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  _react2.default.createElement(_FlatButton2.default, {
                    label: 'My Account',
                    backgroundColor: palette.accent1Color || '#2196f3',
                    hoverColor: palette.accent3Color || '#1976d2',
                    style: { color: 'white' },
                    onMouseDown: function onMouseDown() {
                      window.location.replace('https://' + _this2.props.settingsUrl);
                    }
                  })
                )
              ),
              _react2.default.createElement(
                'div',
                {
                  style: _styles2.default.signoutContainer
                },
                _react2.default.createElement(_FlatButton2.default, {
                  label: 'Sign Out',
                  backgroundColor: 'white',
                  hoverColor: '#e0e0e0',
                  onMouseDown: function onMouseDown() {
                    window.location.replace('https://' + _this2.props.signOutUrl);
                  }
                })
              )
            ) : null
          )
        )
      );
    }
  }]);

  return AppBarMyAccount;
}(_react.Component);

AppBarMyAccount.propTypes = {
  user: _react.PropTypes.object,
  settingsUrl: _react.PropTypes.string,
  signOutUrl: _react.PropTypes.string
};
AppBarMyAccount.contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired
};
exports.default = AppBarMyAccount;
module.exports = exports['default'];