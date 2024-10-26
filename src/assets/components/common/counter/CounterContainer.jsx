import React, { useContext } from "react";
import Counter from "./Counter";
import { CartContext } from "../../../context/CartContext";

const CounterContainer = ({ product, quantity }) => {
  const { addToCart } = useContext(CartContext);
  const [count, setCount] = React.useState(quantity);

  const add = () => {
    if (count < product.stock) setCount(count + 1);
  };
  const sub = () => {
    if (count > 1) setCount(count - 1);
  };

  const addProduct = () => {
    addToCart(product, count);
  };

  const childProps = {
    add,
    sub,
    count,
    addProduct,
    stock: product.stock,
  };

  return <Counter {...childProps} />;
};

export default CounterContainer;
