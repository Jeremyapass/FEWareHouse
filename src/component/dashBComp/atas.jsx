import React from "react";
import { Card } from "../(PRINTILAN)/3DCard/page";

const DashBoardAtas = () => {
  return (
    <div className="w-auto flex flex-col">
      <h1 className="text-3xl mb-10 font1 font-bold">Dashboard</h1>
      <h2 className="px-12 ">Recently Edited</h2>
      <div className="flex max-w-full">
        <div className="flex-auto">
          <Card />
        </div>
        <div className="flex-auto">
          <Card />
        </div>
        <div className="flex-auto">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default DashBoardAtas;
