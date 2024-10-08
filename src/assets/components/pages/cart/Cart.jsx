import React from "react";

const Cart = ({ cart, deleteFromCart }) => {
  return (
    <>
      <h1 className="text-3xl font-bold">Carrito</h1>
      {cart.map((item) => (
        <div key={item.id}>
          <img src={item.imageUrl} alt="" />
          <h2 className="text-2xl font-semibold">{item.name}</h2>
          <p>Precio: {item.price}$</p>
          <p>Cantidad: {item.quantity}</p>
          <button
            onClick={() => deleteFromCart(item.id)}
            className="border bg-red-600 py-1 px-2 rounded-lg text-white"
          >
            Eliminar
          </button>
        </div>
      ))}
    </>
  );
};

export default Cart;
