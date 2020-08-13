"use strict";

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

var handleInr = function handleInr() {
  console.log('incremented by one');
  qty++;
  reRender();
};

var handleDecr = function handleDecr() {
  console.log('decremented by one');
  qty--;
  reRender();
};

var qty = 0;

var Buttons = function Buttons() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Quantity: ", qty), /*#__PURE__*/React.createElement("button", {
    onClick: handleInr
  }, "+"), /*#__PURE__*/React.createElement("button", {
    onClick: handleDecr
  }, "-"));
};

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