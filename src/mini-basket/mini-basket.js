import "./react.js";
import "./react-dom.js";

const e = React.createElement;
class MiniBasket extends React.Component {
  constructor() {
    super();
    const miniBasket = localStorage.getItem("mini-basket");
    this.state = miniBasket
      ? { products: JSON.parse(miniBasket) }
      : { products: [] };
    addEventListener("add-to-basket", ({ detail }) => {
      this.setState((state) => {
        const index = state.products.findIndex(
          (product) => product.name === detail
        );
        if (index !== -1) {
          state.products[index].quantity = state.products[index].quantity + 1;
        }
        const products =
          index !== -1
            ? state.products
            : [...state.products, { name: detail, quantity: 1 }];
        return { products };
      });
      localStorage.setItem("mini-basket", JSON.stringify(this.state.products));
    });
  }

  render() {
    return e(
      "ul",
      null,
      this.state.products.map((product) =>
        e("li", null, `${product.name} quantity: ${product.quantity}`)
      )
    );
  }
}

const domContainer = document.querySelector("mini-basket");
ReactDOM.render(e(MiniBasket), domContainer);
