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

const handleInr = () => {
  console.log('incremented by one');
  qty++;
  reRender();
};

const handleDecr = () => {
  console.log('decremented by one');
  qty--;
  reRender();
};

let qty = 0;

const Buttons = () => {
  return (
    <div>
      <span>Quantity: {qty}</span>
      <button onClick={handleInr}>+</button>
      <button onClick={handleDecr}>-</button>
    </div>
  );
};

const Products = (props) => (
  <div>
    {products.length > 0 &&
      products.map((product, index) => (
        <div key={index}>
          <Product
            key={product.name}
            name={product.name}
            price={product.price}
          />
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

const reRender = () => {
  ReactDOM.render(<Checkout />, root);
};

reRender();
