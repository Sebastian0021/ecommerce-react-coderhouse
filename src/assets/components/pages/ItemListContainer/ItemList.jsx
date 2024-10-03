import React from "react";
import VapeCard from "../../common/vapeCard/VapeCard";

const ItemList = ({ vapes }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-14">
      {vapes.map((vape) => (
        <VapeCard key={vape.id} vape={vape} />
      ))}
    </div>
  );
};

export default ItemList;
