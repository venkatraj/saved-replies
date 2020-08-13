const products = [
  {
    id: 1,
    name: 'Product1',
    price: '25.00',
  },
  {
    id: 2,
    name: 'Product2',
    price: '375.00',
  },
  {
    id: 3,
    name: 'Product3',
    price: '789.00',
  },
];

const Product = (props) => {
  return (
    <div className="product">
      <h4>{props.name}</h4>
      <p>{props.price}</p>
    </div>
  );
};

const Buttons = () => {
  return (
    <div>
      <span>Quantity: 0</span>
      <button>+</button>
      <button>-</button>
    </div>
  );
};

// const Checkout = (props) => (
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

const Products = (props) => (
  <div>
    {products.length > 0 &&
      products.map((product, index) => (
        <div>
          <Product key={index} name={product.name} price={product.price} />
          <Buttons key={index} />
        </div>
      ))}
  </div>
);

const Checkout = (props) => (
  <div id="container">
    <Products />
  </div>
);

const root = document.getElementById('root');

ReactDOM.render(<Checkout />, root);
