"use client";
import React from "react";

import TextArea from "../../component/(PRINTILAN)/textArea/page";
import Buttonn from "../(PRINTILAN)/button/page";

const CreateComponent = () => {
  return (
    <div className="p-5">
      <h1 className="text-3xl mb-10 font1 font-bold">Create New Items</h1>
      <div className="flex justify-center">
        <form className="flex flex-col gap-6 ">
          <h2 className="text-center font-bold">Input Items Here</h2>
          <TextArea label="Name" placeholder="my item name" />
          <TextArea label="Quantity" placeholder="1222" />
          <TextArea
            label="Description"
            placeholder="the box is mad from wood and longer description if needed ..."
          />
          <TextArea
            label="Short Description"
            placeholder="the box is mad from wood"
          />
          <Buttonn text="Submit" href="create" />
        </form>
      </div>
    </div>
  );
};

export default CreateComponent;
