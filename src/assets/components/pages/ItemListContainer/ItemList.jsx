import React from "react";
import VapeCard from "../../common/vapeCard/VapeCard";
// import { addDoc, collection } from "firebase/firestore";
// import { db } from "../../../../../config.firebase";

const ItemList = ({ vapes }) => {
  // const addProductDocs = () => {
  //   vapes.forEach((vape) => {
  //     addDoc(collection(db, "products"), vape);
  //   });
  // };

  return vapes.length === 0 ? (
    <h1>No hay productos</h1>
  ) : (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-14">
      {vapes.map((vape) => (
        <VapeCard key={vape.id} vape={vape} />
      ))}
    </div>
  );
};

export default ItemList;
