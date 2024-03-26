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
import Cookies from "universal-cookie"; // Mengimpor universal-cookie
import axios from "axios"; // Mengimpor modul axios

const cookies = new Cookies(); // Membuat instance dari Cookies

export default function Tabel(props) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if token exists in cookies
    const userToken = cookies.get("UserToken"); // Mendapatkan token dari cookies
    if (userToken) {
      fetchData(userToken); // Memanggil fetchData dengan token
    } else {
      setError("Token not found in cookies.");
    }
  }, []);

  const fetchData = async (token) => {
    // Menerima token sebagai parameter
    // Set token in headers
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    // Make GET request with token
    axios
      .get("http://localhost:5000/items/getDescendant", config)
      .then((response) => {
        setData(response.data.items); // Mengambil data dari "item" dalam respons
      })
      // console.log(response.data);
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again later.");
      });
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
        <TableColumn>Last Update</TableColumn>
      </TableHeader>
      <TableBody>
        {data.map(
          (
            item // Menggunakan data yang diambil dari respons
          ) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.short_description}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>
                {`${new Date(item.updatedAt).toLocaleDateString()},  ${new Date(
                  item.updatedAt
                ).toLocaleTimeString()}`}
              </TableCell>
            </TableRow>
          )
        )}
      </TableBody>
    </Table>
  );
}

/*
 <Textarea
                  minRows={1}
                  maxRows={2}
                  variant="underlined"
                  value={item.quantity}
                />
*/
