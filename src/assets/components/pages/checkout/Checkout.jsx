import React, { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../../../../config.firebase";
const Checkout = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const order = {
      buyer: user,
      items: cart,
      total: getTotalPrice(),
    };

    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order)
      .then((res) => setOrderId(res.id))
      .finally(() => setIsLoading(false));

    order.items.forEach(async (item) => {
      const productRef = doc(db, "products", item.id);
      await updateDoc(productRef, {
        stock: item.stock - item.quantity,
      });
    });

    clearCart();
  };

  return (
    <>
      <h1>Checkout</h1>
      {isLoading ? (
        <p>Cargando...</p>
      ) : orderId ? (
        <div>
          <p>Gracias por tu compra</p>
          <p>El ID de tu compra es: {orderId}</p>
        </div>
      ) : (
        <form action="" className="flex gap-2 mt-2" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="shadow-lg border rounded-lg px-2"
            name="name"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            className="shadow-lg border rounded-lg px-2"
            name="email"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Phone"
            className="shadow-lg border rounded-lg px-2"
            name="phone"
            onChange={handleChange}
          />
          <button className="bg-blue-500 rounded-full py-2 px-4 text-white">
            Confirmar
          </button>
        </form>
      )}
    </>
  );
};

export default Checkout;
