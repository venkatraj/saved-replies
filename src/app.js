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

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: 0,
    };
    this.handleInr = this.handleInr.bind(this);
    this.handleDecr = this.handleDecr.bind(this);
  }

  handleInr() {
    // console.log('incremented by one');
    this.setState((prevState) => ({
      qty: prevState.qty + 1,
    }));
  }

  handleDecr() {
    // console.log('decremented by one');
    this.setState((prevState) => ({
      qty: prevState.qty - 1,
    }));
  }

  render() {
    return (
      <div>
        <span>Quantity: {this.state.qty}</span>
        <button onClick={this.handleInr}>+</button>
        <button onClick={this.handleDecr}>-</button>
      </div>
    );
  }
}

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
