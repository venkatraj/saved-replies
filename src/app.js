const products = [
  {
    id: 1,
    name: 'Product1',
    price: 25.0,
  },
  {
    id: 2,
    name: 'Product2',
    price: 375.0,
  },
  {
    id: 3,
    name: 'Product3',
    price: 789.0,
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

const Buttons = (props) => (
  <div>
    <span>Quantity: {props.quantities[props.qtyIndex]}</span>
    <button value={props.qtyIndex} onClick={props.handleInr}>
      +
    </button>
    <button value={props.qtyIndex} onClick={props.handleDecr}>
      -
    </button>
  </div>
);

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
          <Buttons
            key={index}
            qtyIndex={index}
            handleInr={props.handleInr}
            handleDecr={props.handleDecr}
            quantities={props.quantities}
          />
        </div>
      ))}
  </div>
);

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantities: [0, 0, 0],
      totalAmount: 0,
    };
    this.handleInr = this.handleInr.bind(this);
    this.handleDecr = this.handleDecr.bind(this);
  }

  handleInr(e) {
    e.preventDefault();
    const qtyIndex = e.target.value;
    this.setState((prevState) => {
      prevState.quantities[qtyIndex] += 1;
      return {
        quantities: prevState.quantities,
        totalAmount: prevState.totalAmount + products[qtyIndex].price,
      };
    });
  }

  handleDecr(e) {
    e.preventDefault();
    const qtyIndex = e.target.value;

    this.setState((prevState) => {
      prevState.quantities[qtyIndex] += 1;
      return {
        quantities: prevState.quantities,
        totalAmount: prevState.totalAmount - products[qtyIndex].price,
      };
    });
  }

  render() {
    return (
      <div id="container">
        <h3>Total Amount: {this.state.totalAmount}</h3>
        <Products
          handleInr={this.handleInr}
          handleDecr={this.handleDecr}
          quantities={this.state.quantities}
        />
      </div>
    );
  }
}

const root = document.getElementById('root');

ReactDOM.render(<Checkout />, root);
