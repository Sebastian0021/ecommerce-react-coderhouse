import React, { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../../context/CartContext";

const CartContainer = () => {
  const value = useContext(CartContext);

  return <Cart {...value} />;
};

export default CartContainer;
