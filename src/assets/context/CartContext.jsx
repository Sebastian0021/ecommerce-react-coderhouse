import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // console.log(cart);

  const deleteFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const calculateTotalItems = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const addToCart = (product, count) => {
    const isProductInCart = cart.find((item) => item.id === product.id);

    if (isProductInCart) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...product, quantity: item.quantity + count }
            : item
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
    calculateTotalPrice,
    calculateTotalItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
