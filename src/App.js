import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import ShoppingCartList from "./ShoppingCartList";

function App() {
  const [shoppingCartItems, setShoppingCartItems] = useState([]);
  const products = [
    {
      productImage: "samsung.jpg",
      productName: "Samsung J2 Pro",
      price: "$100.00",
    },
    {
      productImage: "hp.jpg",
      productName: "HP Notebook",
      price: "$299.00",
    },
    {
      productImage: "panasonic.jpg",
      productName: "Panasonic T44 Lite",
      price: "$125.00",
    },
  ];
  console.log({ shoppingCartItems });
  const listItems = products.map((product) => {
    return (
      <div
        key={product.productName}
        className="card m-2 p-2 d-flex justify-content-between"
        style={{ width: "18rem" }}
      >
        <img
          src={`./image/${product.productImage}`}
          className="card-img-top"
          alt=""
        />
        <div className="card-body-bottom">
          <h5 className="card-title">{product.productName}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{product.price}</h6>
          <input type="number" class="form-control" id="number" />
          <button
            className="btn btn-primary"
            onClick={() => handelClick(product)}
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  });

  const handelClick = (product) => {
    const newCart = [...shoppingCartItems, product];
    setShoppingCartItems(newCart);
  };
  return (
    <>
      <div className="d-flex p-2 ">{listItems}</div>
      {shoppingCartItems.length !== 0 ? (
        <ShoppingCartList items={shoppingCartItems} />
      ) : (
        "No items in the shopping cart"
      )}
    </>
  );
}

export default App;
