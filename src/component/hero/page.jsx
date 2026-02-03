"use client";

import React from "react";
import Popoverr from "../(PRINTILAN)/popover/page";
import Buttonn from "../../component/(PRINTILAN)/button/page";

const Hero = () => {
  return (
    <div className="">
      <div className="justify-items-center mt-10 w-1/2 mx-auto grid">
        <div className="my-14 items-center hover:scale-105 transition-all ease-out">
          <Popoverr className="" />
        </div>
        <p className="font1 text-center text-7xl">
          Save and Track Your Items Only in{" "}
          <span className=" bg-clip-text text-transparent bg-gradient-to-r from-birumuda via-birumudabgt to-ungu">
            WareHouse
          </span>
        </p>
        <p className="text-center font1 mt-12">ALL SAVE AND SIMPLE</p>
        <div className=" mt-10 hover:scale-105 transition-all ease-out ">
          <Buttonn text="Try It Now!" href="/register" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
