import React from "react";
import { Link } from "react-router-dom";

const VapeCard = ({ vape }) => {
  return (
    <div>
      <div>
        <img src={vape.imageUrl} alt="" />
      </div>
      <p className="text-3xl">{vape.name}</p>
      <p>{vape.description}</p>
      <p>{vape.brand}</p>
      <p>{vape.price}$</p>
      <p>Disponibles: {vape.stock}</p>
      <p>Sabor: {vape.flavor}</p>
      <p>Puffs: {vape.puffs}</p>
      <Link
        to={`/vape/${vape.id}`}
        className="border bg-purple-800 py-1 px-2 rounded-lg text-white"
      >
        DETALLES
      </Link>
    </div>
  );
};

export default VapeCard;
