const CartItem = ({ item, count }) => {
  return (
    <div>
      <h4>{item.name}</h4>
      <p>Cantidad: {count}</p>
      <p>Precio: ${item.price}</p>
    </div>
  );
};

export default CartItem;
