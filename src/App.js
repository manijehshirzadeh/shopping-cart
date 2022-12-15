import "bootstrap/dist/css/bootstrap.css";

function App() {
  const products = [
    {
      productImage: "samsung.jpg",
      productName: "Samsung J2 Pro",
      price: "$ 100.00",
    },
    {
      productImage: "hp.jpg",
      productName: "HP Notebook",
      price: "$299.00",
    },
    {
      productImage: "panasonic.jpg",
      productName: "Panasonic T44 Lite",
      price: "@ 125.00",
    },
  ];

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
          <button className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    );
  });
  return <div class="d-flex p-2 ">{listItems}</div>;
}

export default App;
