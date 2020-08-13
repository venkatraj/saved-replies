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

var Buttons = function Buttons() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Quantity: 0"), /*#__PURE__*/React.createElement("button", null, "+"), /*#__PURE__*/React.createElement("button", null, "-"));
}; // const Checkout = (props) => (
//   <div id="container">
//     <Product name={products[0].name} price={products[0].price} />
//     <Buttons />
//     <Product name={products[1].name} price={products[1].price} />
//     <Buttons />
//     <Product name={products[2].name} price={products[1].price} />
//     <Buttons />
//   </div>
// );
// const Checkout = (props) => (
//   <div id="container">
//     {/* JSX needs one parent */}
//     {products.length > 0 &&
//       products.map((product) => (
//         <div>
//           <Product name={product.name} price={product.price} />
//           <Buttons />
//         </div>
//       ))}
//   </div>
// );


var Products = function Products(props) {
  return /*#__PURE__*/React.createElement("div", null, products.length > 0 && products.map(function (product, index) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Product, {
      key: index,
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
ReactDOM.render( /*#__PURE__*/React.createElement(Checkout, null), root);