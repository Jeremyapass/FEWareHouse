"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { useState, useEffect } from "react";


export default function Tabel(props) {
  // const [Items, setItems] = useState([]);

  // const { data: dataItems, isError } = useDataItems();

  // useEffect(() => {
  //   if (!isError) {
  //     setItems(dataItems || []);
  //   }
  // }, [dataItems, isError]); //isLoading

  // console.log(Items, "Items");

 

  return (
    <Table
      isHeaderSticky
      removeWrapper
      aria-label="Example table with client side sorting"
      classNames={{
        base: `${props.height} overflow-scroll`,
        table: "min-h-[420]",
      }}
    >
      <TableHeader>
        <TableColumn>Name</TableColumn>
        <TableColumn>Short Description</TableColumn>
        <TableColumn>Quantity</TableColumn>
        <TableColumn>Details</TableColumn>
      </TableHeader>
      <TableBody>
        {data?.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.short_description}</TableCell>
            <TableCell>{item.quantity}</TableCell>
            <TableCell>Button</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
