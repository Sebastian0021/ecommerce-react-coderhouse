import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../../../config.firebase";
// import { vapes } from "../../../../../mockVapes";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const productsCollection = collection(db, "products");

    let producstQuery = productsCollection;

    if (category) {
      producstQuery = query(productsCollection, where("brand", "==", category));
    }

    getDocs(producstQuery)
      .then((res) => {
        const products = res.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setItems(products);
      })
      .catch((error) => console.log(error));
  }, [category]);

  return <ItemList vapes={items} />;
};

export default ItemListContainer;
