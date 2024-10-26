import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const deleteFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const getQuantityById = (id) => {
    const product = cart.find((item) => item.id === id);
    return product ? product.quantity : 1;
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const getTotalItems = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const addToCart = (product, count) => {
    const isProductInCart = cart.some((item) => item.id === product.id);

    if (isProductInCart) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...product, quantity: count } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: count }]);
    }
  };

  const value = {
    cart,
    addToCart,
    deleteFromCart,
    clearCart,
    getTotalPrice,
    getTotalItems,
    getQuantityById,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
