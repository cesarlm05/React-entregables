import { useState, createContext } from "react";

export const CarritoContext = createContext({ carrito: [] });

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  console.log(carrito);

  const addProduct = (item, cantidad) => {
    if (!carritoFull(item.id)) {
      setCarrito((prev) => [...prev, { item, cantidad }]);
    } else {
      console.log("Producto ya agregado");
    }
  };

  const deleteProduct = (id) => {
    const carritoActualizado = carrito.filter((prod) => prod.id !== id);
    setCarrito(carritoActualizado);
  };

  const cleanCarrito = () => {
    setCarrito([]);
  };

  const carritoFull = (id) => {
    return carrito.some((prod) => prod.id === id);
  };

  return (
    <CarritoContext.Provider
      value={{ carrito, addProduct, deleteProduct, cleanCarrito }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
