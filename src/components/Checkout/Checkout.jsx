import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/firebase/config";
import { collection, addDoc } from "firebase/firestore";

const Checkout = () => {
  const { cart, cleanCarrito } = useContext(CartContext);
  const [name, setName] = useState("");
  const [last_name, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [orderId, setOrderId] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !last_name || !phone || !email) {
      setError("Completar los campos obligatorios");
      return;
    }
    if (email !== emailConf) {
      setError("Los Emails no coinciden");
      return;
    }
    const order = {
      items: cart.map((products) => ({
        id: products.item.id,
        name: products.item.name,
        cantidad: products.cantidad,
      })),
      total: cart.reduce(
        (total, products) => total + products.item.price * products.cantidad,
        0
      ),
      name,
      last_name,
      phone,
      email,
    };
    addDoc(collection(db, "orders"), order)
      .then((docRef) => {
        setOrderId(docRef.id);
        cleanCarrito();
      })
      .catch((err) => {
        console.error("Error al crear la orden: ", err);
        setError("Error al crear la orden");
      });
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form
        className="row g-3 needs-validation"
        noValidate
        onSubmit={handleSubmit}
      >
        {cart.map((product) => (
          <div key={product.id}>
            <p>
              {product.item.name} x {product.cantidad}
            </p>
            <p>Precio: $ {product.item.price}</p>
          </div>
        ))}
        <div className="col-md-4">
          <label htmlFor="validationCustomName" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustomName"
            placeholder="Name"            
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustomLastName" className="form-label">
            Apellido
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustomLastName"
            placeholder="Last name"            
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustomEmail" className="form-label">
            Email
          </label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">
              @
            </span>
            <input
              type="email"
              className="form-control"
              id="validationCustomEmail"
              aria-describedby="inputGroupPrepend"              
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustomEmailConfirm" className="form-label">
            Email confirmación
          </label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">
              @
            </span>
            <input
              type="email"
              className="form-control"
              id="validationCustomEmailConfirm"
              aria-describedby="inputGroupPrepend"              
              value={emailConf}
              onChange={(e) => setEmailConf(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustomPhone" className="form-label">
            Teléfono
          </label>
          <input
            type="number"
            className="form-control"
            id="validationCustomPhone"            
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        {error && <p>{error}</p>}
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Confirmar compra
          </button>
        </div>
      </form>
      {orderId && (
        <strong>Gracias por tu compra, tu orden es: {orderId}</strong>
      )}
    </div>
  );
};

export default Checkout;
