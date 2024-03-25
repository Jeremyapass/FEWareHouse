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
import { Textarea } from "@nextui-org/react";

const cookies = new Cookies(); // Membuat instance dari Cookies

export default function Tabel(props) {
  const [data, setData] = useState([]);
  const [dataID, setDataID] = useState([]);
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
    try {
      // Set token in headers
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      // Make GET request with token
      const response = await axios.get(
        "http://localhost:5000/history/get",
        config
      );
      // console.log(response.data);
      setData(response.data); // Mengambil data dari "item" dalam respons
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data. Please try again later.");
    }
  };

  const fetchDataID = async (ItemsId, token) => {
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
        `http://localhost:5000/history/getId/${ItemsId}`,
        config
      );
      // console.log(response.data);
      setDataID(response.data); // Mengambil data dari "item" dalam respons
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data. Please try again later.");
    }
  };

  const handleHardDelete = async (ItemsId, token) => {
    try {
      // Set token in headers
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      // Make GET request with token
      const response = await axios.delete(
        `http://localhost:5000/history/hardDelete/${ItemsId}`,
        config
      );
      // console.log(response.data);
      setDataID(response.data); // Mengambil data dari "item" dalam respons
      alert("Data Sudah Terhapus di Database");
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data. Please try again later.");
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <dialog id="my_modal_1" className="modal text-white">
        <div className="modal-box gap-6 flex flex-col">
          <h3 className="font-bold text-lg">Details : </h3>
          <Textarea
            isReadOnly
            minRows={1}
            maxRows={1}
            label="Name"
            value={dataID.items_name} // Set nilai input dengan nilai yang sudah ada dari respons API
          />
          <Textarea
            isReadOnly
            minRows={1}
            maxRows={5}
            label="Description"
            value={dataID.items_description} // Set nilai input dengan nilai yang sudah ada dari respons API
          />
          <Textarea
            isReadOnly
            minRows={1}
            maxRows={2}
            label="Short Dexcription"
            value={dataID.items_short_description} // Set nilai input dengan nilai yang sudah ada dari respons API
          />
          <Textarea
            isReadOnly
            minRows={1}
            maxRows={1}
            label="Quantity"
            value={dataID.items_quantity} // Set nilai input dengan nilai yang sudah ada dari respons API
          />
          <Textarea
            isReadOnly
            minRows={1}
            maxRows={1}
            label="Status"
            value={dataID.status} // Set nilai input dengan nilai yang sudah ada dari respons API
          />
          <Textarea
            isReadOnly
            minRows={1}
            maxRows={1}
            label="Updated at"
            value={`${new Date(
              dataID.updatedAt
            ).toLocaleDateString()},  ${new Date(
              dataID.updatedAt
            ).toLocaleTimeString()}`} // Set nilai input dengan nilai yang sudah ada dari respons API
          />
          <button
            className="btn bg-red-600 text-white"
            onClick={async () => {
              await handleHardDelete(dataID.id, cookies.get("UserToken"));
              await fetchData(cookies.get("UserToken"));
              document.getElementById("my_modal_1").close();
            }}
          >
            Hard Delete History
          </button>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

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
          <TableColumn>Status</TableColumn>
          <TableColumn>Details</TableColumn>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.items_name}</TableCell>
              <TableCell>{item.items_short_description}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>
                <button
                  className="btn bg-blue-500 text-white hover:text-slate-500 "
                  onClick={() => {
                    document.getElementById("my_modal_1").showModal();
                    fetchDataID(item.id, cookies.get("UserToken")); // Meneruskan token
                  }}
                >
                  Details
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

/*
{`${new Date(item.updatedAt).toLocaleDateString()},  ${new Date(
  item.updatedAt
).toLocaleTimeString()}`}
*/
