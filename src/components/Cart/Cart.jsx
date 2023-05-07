import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { cart: carrito, cleanCarrito } = useContext(CartContext);

  const totalCarrito = carrito.reduce(
    (total, product) => total + product.cantidad,
    0
  );

  const total = carrito.reduce(
    (total, product) => total + product.item.price * product.cantidad,
    0
  );
  if (totalCarrito === 0) {
    return (
      <>
        <h2>Carrito vacío</h2>
        <Link to="/">Productos</Link>
      </>
    );
  }
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">Carrito de compras</h5>
        {carrito.map((product) => (
          <CartItem key={product.id} {...product} />
        ))}
        <h6 className="card-subtitle mb-2 text-body-secondary">
          Total: ${total}
        </h6>
        <button
          onClick={() => cleanCarrito()}
          type="button"
          className="btn btn-secondary"
        >
          Limpiar carrito
        </button>
        <p className="card-text">Mas acciones.</p>
        <Link to="/" className="card-link">
          <button type="button" className="btn btn-secondary">
          Seguir comprando
          </button>
        </Link>
        <Link to="/checkout" className="card-link">
          <button type="button" className="btn btn-primary">
            Finalizar compra
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
