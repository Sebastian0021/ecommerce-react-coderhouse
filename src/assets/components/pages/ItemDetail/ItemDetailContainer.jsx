import React, { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../../../../config.firebase";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const { getQuantityById } = useContext(CartContext);

  const quantity = getQuantityById(id);

  useEffect(() => {
    const productCollection = collection(db, "products");
    const refDoc = doc(productCollection, id);
    const getProduct = getDoc(refDoc);

    getProduct
      .then((res) => {
        setItem({ ...res.data(), id: res.id });
      })
      .catch((error) => console.log(error));
  }, [id]);

  return <ItemDetail item={item} quantity={quantity} />;
};

export default ItemDetailContainer;
