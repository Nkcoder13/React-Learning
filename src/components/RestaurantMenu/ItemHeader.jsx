import ItemCard from "./ItemCard";
import { useState } from "react";

const ItemHeader = ({ data, showItem, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    // Accordion Header
    <div
      className="w-6/12 bg-slate-100 m-auto p-2 my-5 shadow-lg"
      key={data?.title}
    >
      <div
        className="flex justify-between p-2 cursor-pointer"
        onClick={handleClick}
      >
        <h1 className="font-bold text-lg">
          {data?.title} ({data.itemCards.length})
        </h1>
        <span>⬇️</span>
      </div>

      {/* Accordion Description and details */}
      {showItem && <ItemCard data={data?.itemCards} />}
    </div>
  );
};

export default ItemHeader;
