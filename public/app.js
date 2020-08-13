"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var products = [{
  id: 1,
  name: 'Product1',
  price: '25.00'
}, {
  id: 2,
  name: 'Product2',
  price: '375.00'
}, {
  id: 3,
  name: 'Product3',
  price: '789.00'
}];

var Product = function Product(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "product"
  }, /*#__PURE__*/React.createElement("h4", null, props.name), /*#__PURE__*/React.createElement("p", null, props.price));
};

var Buttons = /*#__PURE__*/function (_React$Component) {
  _inherits(Buttons, _React$Component);

  var _super = _createSuper(Buttons);

  function Buttons(props) {
    var _this;

    _classCallCheck(this, Buttons);

    _this = _super.call(this, props);
    _this.state = {
      qty: 0
    };
    _this.handleInr = _this.handleInr.bind(_assertThisInitialized(_this));
    _this.handleDecr = _this.handleDecr.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Buttons, [{
    key: "handleInr",
    value: function handleInr() {
      // console.log('incremented by one');
      this.setState(function (prevState) {
        return {
          qty: prevState.qty + 1
        };
      });
    }
  }, {
    key: "handleDecr",
    value: function handleDecr() {
      // console.log('decremented by one');
      this.setState(function (prevState) {
        return {
          qty: prevState.qty - 1
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Quantity: ", this.state.qty), /*#__PURE__*/React.createElement("button", {
        onClick: this.handleInr
      }, "+"), /*#__PURE__*/React.createElement("button", {
        onClick: this.handleDecr
      }, "-"));
    }
  }]);

  return Buttons;
}(React.Component);

var Products = function Products(props) {
  return /*#__PURE__*/React.createElement("div", null, products.length > 0 && products.map(function (product, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index
    }, /*#__PURE__*/React.createElement(Product, {
      key: product.name,
      name: product.name,
      price: product.price
    }), /*#__PURE__*/React.createElement(Buttons, {
      key: index
    }));
  }));
};

var Checkout = function Checkout(props) {
  return /*#__PURE__*/React.createElement("div", {
    id: "container"
  }, /*#__PURE__*/React.createElement(Products, null));
};

var root = document.getElementById('root');

var reRender = function reRender() {
  ReactDOM.render( /*#__PURE__*/React.createElement(Checkout, null), root);
};

reRender();