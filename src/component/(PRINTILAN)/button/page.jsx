"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const Buttonn = (props) => {
  return (
    <Button
      as={Link}
      href={props.href}
      className={props.kelasLink}
      color="primary"
    >
      {props.text}
    </Button>
  );
};

export default Buttonn;
