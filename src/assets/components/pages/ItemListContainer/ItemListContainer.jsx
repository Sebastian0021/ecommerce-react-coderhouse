import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { vapes } from "../../../../../mockVapes";
import { useEffect, useState } from "react";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const filteredVapes = category
      ? vapes.filter((vape) => vape.brand?.toLowerCase() === category)
      : vapes;

    setItems(filteredVapes);
  }, [category]);

  return <ItemList vapes={items} />;
};

export default ItemListContainer;
