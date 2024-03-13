import React from "react";
import { Textarea } from "@nextui-org/react";

const TextArea = (props) => {
  return (
    <div>
      <Textarea
        size="md"
        className="w-[500px] text-birublend"
        label={`${props.label}`}
        placeholder={`${props.placeholder}`}
      />
    </div>
  );
};

export default TextArea;
