function ShoppingCartList({ items }) {
  return (
    <div>
      <label>Order Details</label>
      <table class="table table-bordered border-primary">
        <thead>
          <tr>
            <th scope="col">Item Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Total</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((cartItem) => (
            <tr>
              <td>{cartItem.productName}</td>
              <td>1</td>
              <td>{cartItem.price}</td>
              <td></td>
              <td>remove</td>
            </tr>
          ))}

          <tr>
            <td colspan="3">Total</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default ShoppingCartList;
