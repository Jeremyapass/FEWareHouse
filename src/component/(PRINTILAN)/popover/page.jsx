"use client";
import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";

const Popoverr = () => {
  return (
    <Popover placement="right">
      <PopoverTrigger>
        <Button>#1 Storage</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <div className="text-small text-blue-200 font-bold">WareHouse</div>
          <div className="text-tiny">
            Still Your Best Storage Website Untill the End
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Popoverr;
