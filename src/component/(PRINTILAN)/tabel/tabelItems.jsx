"use client";
import React, { useState, useEffect } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export default function Tabel(props) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [IdItems, setIdItem] = useState(null);

  useEffect(() => {
    // Check if token exists in cookies
    const userToken = cookies.get("UserToken"); // Mendapatkan token dari cookies
    if (userToken) {
      fetchData(userToken); // Memanggil fetchData dengan token
    } else {
      setError("Token not found in cookies.");
    }
  }, []);

  useEffect(() => {
    // Set cookies saat nilai IdItems berubah
    if (IdItems !== null) {
      cookies.set("itemClicked", IdItems);
      console.log(IdItems);
    }
  }, [IdItems]);

  const fetchData = async (token) => {
    // Menerima token sebagai parameter
    try {
      // Set token in headers
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      // Make GET request with token
      const response = await axios.get(
        "http://localhost:5000/items/get",
        config
      );
      setData(response.data.item); // Mengambil data dari "item" dalam respons
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data. Please try again later.");
    }
  };

  const dapetID = (ItemsId) => {
    setIdItem(ItemsId);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

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
        <TableColumn>Update</TableColumn>
      </TableHeader>
      <TableBody>
        {data?.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.short_description}</TableCell>
            <TableCell>{item.quantity}</TableCell>
            <TableCell>
              <button onClick={() => dapetID(item.id)}>Button Details</button>
            </TableCell>
            <TableCell>Button Update</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
