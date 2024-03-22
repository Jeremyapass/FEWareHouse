import React from "react";
import { Card1 } from "../(PRINTILAN)/3DCard/card1";
import { Card2 } from "../(PRINTILAN)/3DCard/card2";
import { Card3 } from "../(PRINTILAN)/3DCard/card3";

const DashBoardAtas = () => {
  return (
    <div className="w-auto flex flex-col">
      <h1 className="text-3xl mb-10 font1 font-bold">Dashboard</h1>
      <h2 className="px-12 ">Recently Created</h2>
      <div className="flex max-w-full">
        <div className="flex-auto">
          <Card1 />
        </div>
        <div className="flex-auto">
          <Card2 />
        </div>
        <div className="flex-auto">
          <Card3 />
        </div>
      </div>
    </div>
  );
};

export default DashBoardAtas;
