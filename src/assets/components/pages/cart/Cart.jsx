import React from "react";

const Cart = ({
  cart,
  deleteFromCart,
  clearCart,
  calculateTotalPrice,
  calculateTotalItems,
}) => {
  return (
    <>
      <div className="flex items-center text-lg">
        <h1 className="text-3xl font-bold inline">Carrito</h1>
        {cart.length !== 0 && (
          <div className="flex items-center gap-2">
            <p className="ml-2">({calculateTotalItems()})</p>
            <p>{calculateTotalPrice()}$</p>

            <button
              onClick={clearCart}
              className="bg-red-600 py-1 px-2 rounded-lg text-white ml-2"
            >
              Vaciar carrito
            </button>
          </div>
        )}
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-14">
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
      </div>
    </>
  );
};

export default Cart;
