import { useState, createContext } from "react";

export const CartContext = createContext({ cart: [] });

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log(cart);

  const addProduct = (item, cantidad) => {
    if (!cartFull(item.id)) {
      setCart((prev) => [...prev, { item, cantidad }]);
    } else {
      console.log("Producto ya agregado");
    }
  };

  const deleteProduct = (id) => {
    const carritoActualizado = cart.filter((prod) => prod.id !== id);
    setCart(carritoActualizado);
  };

  const cleanCart = () => {
    setCart([]);
  };

  const cartFull = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  return (
    <CartContext.Provider
      value={{ cart: cart, addProduct, deleteProduct, cleanCarrito: cleanCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
