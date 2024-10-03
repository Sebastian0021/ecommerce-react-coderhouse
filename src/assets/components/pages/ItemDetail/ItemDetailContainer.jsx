import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { vapes } from "../../../../../mockVapes";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    const product = vapes.find((vape) => vape.id === id);
    console.log(product);
    if (product) {
      setItem(product);
    }
  }, [id]);

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
