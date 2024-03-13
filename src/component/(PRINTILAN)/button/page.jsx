import React from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const Buttonn = (props) => {
  return (
    <Link href={`${props.href}`} className={props.kelasLink}>
      <Button color="primary">{props.text}</Button>
    </Link>
  );
};

export default Buttonn;
