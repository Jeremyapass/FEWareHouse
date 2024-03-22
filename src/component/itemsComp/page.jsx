import React from "react";
import Tabel from "../(PRINTILAN)/tabel/tabelItems";

const ItemsComponent = () => {
  return (
    <div className="flex flex-col ">
      <h1 className="text-3xl mb-10 font1 font-bold">My Items</h1>
      <Tabel height="max-h-[600px]" />
    </div>
  );
};

export default ItemsComponent;
