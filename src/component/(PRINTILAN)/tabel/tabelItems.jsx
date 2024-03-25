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
import { Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

const cookies = new Cookies();

export default function Tabel(props) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [dataID, setDataID] = useState([]);
  const [updatan, setUpdatan] = useState([]);

  useEffect(() => {
    // Check if token exists in cookies
    const userToken = cookies.get("UserToken");
    if (userToken) {
      fetchData(userToken);
    } else {
      setError("Token not found in cookies.");
    }
  }, []);

  const fetchData = async (token) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get(
        "http://localhost:5000/items/get",
        config
      );
      setData(response.data.item);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data. Please try again later.");
    }
  };

  const detailsID = async (ItemsId, token) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      // Lakukan axios.get di sini
      const response = await axios.get(
        `http://localhost:5000/items/getId/${ItemsId}`,
        config
      );

      // Lakukan sesuatu dengan respons jika perlu
      setDataID(response.data.item);
      setUpdatan(response.data.item);
      // console.log(updatan);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data. Please try again later.");
    }
  };

  const updateItems = async (ItemsId, token) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      // Lakukan axios.get di sini
      const response = await axios.patch(
        `http://localhost:5000/items/update/${ItemsId}`,
        {
          data: {
            name: updatan.name,
            description: updatan.description,
            short_description: updatan.short_description,
            quantity: parseInt(updatan.quantity),
          },
        },
        config
      );

      // Lakukan sesuatu dengan respons jika perlu
      // console.log(response.data);
      setUpdatan(response.data);
      alert("Sudah Teredit!");
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data. Please try again later.");
    }
  };

  const softDeleteItems = async (ItemsId, token) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      // Lakukan axios.get di sini
      const response = await axios.patch(
        `http://localhost:5000/items/softDelete/${ItemsId}`,
        {
          data: {
            name: updatan.name,
            description: updatan.description,
            short_description: updatan.short_description,
            quantity: parseInt(updatan.quantity),
          },
        },
        config
      );

      // Lakukan sesuatu dengan respons jika perlu
      // console.log(response.data);
      setUpdatan(response.data);
      alert("Sudah Terupdate!");
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data. Please try again later.");
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  const createdTime = dataID
    ? new Date(dataID.createdAt).toLocaleTimeString()
    : "";
  const createdDate = dataID
    ? new Date(dataID.createdAt).toLocaleDateString()
    : "";
  const updatedTime = dataID
    ? new Date(dataID.updatedAt).toLocaleTimeString()
    : "";
  const updatedDate = dataID
    ? new Date(dataID.updatedAt).toLocaleDateString()
    : "";

  const validateName = (input) => {
    // Jika nilai input bukan string atau panjangnya lebih dari 100 karakter, kembalikan pesan error
    if (typeof input !== "string" || input.length > 39) {
      return "Name is too long, make it less!";
    }
    // Jika valid, kembalikan null (tidak ada error)
    return null;
  };

  const validateShortDesc = (input) => {
    // Jika nilai input bukan string atau panjangnya lebih dari 100 karakter, kembalikan pesan error
    if (typeof input !== "string" || input.length > 39) {
      return "Short Description is too long, make it less!";
    }
    // Jika valid, kembalikan null (tidak ada error)
    return null;
  };

  const validateQuantity = (input) => {
    // Jika nilai input kosong, kembalikan pesan error
    if (input.trim() === "") {
      return "Quantity should not be empty!";
    }

    // Loop melalui setiap karakter dari nilai input
    for (let i = 0; i < input.length; i++) {
      // Memeriksa apakah karakter saat ini bukan angka
      if (isNaN(input[i]) || input[i] === " ") {
        return "Quantity should be filled by numbers only!";
      }
    }

    // Jika semua karakter adalah angka, kembalikan null (tidak ada error)
    return null;
  };

  const handleChangeShortName = (e) => {
    const inputValue = e.target.value;
    // Validasi nilai input menggunakan fungsi validasi yang diberikan
    const errorss = validateName(inputValue);
    // Update state dengan nilai input dan pesan error (jika ada)
    setUpdatan({
      ...updatan,
      name: inputValue, // Menggunakan nama properti yang diberikan
      errorss, // Menambahkan properti error sesuai dengan nama properti
    });
  };

  const handleChangeShortDesc = (e) => {
    const inputValue = e.target.value;
    // Validasi nilai input menggunakan fungsi validasi yang diberikan
    const error = validateShortDesc(inputValue);
    // Update state dengan nilai input dan pesan error (jika ada)
    setUpdatan({
      ...updatan,
      short_description: inputValue, // Menggunakan nama properti yang diberikan
      error, // Menambahkan properti error sesuai dengan nama properti
    });
  };

  const handleChangeQuantity = (e) => {
    const inputValue = e.target.value;
    // Validasi nilai input menggunakan fungsi validasi yang diberikan
    const errors = validateQuantity(inputValue);
    // Update state dengan nilai input dan pesan error (jika ada)
    setUpdatan({
      ...updatan,
      quantity: inputValue, // Menggunakan nama properti yang diberikan
      errors, // Menambahkan properti error sesuai dengan nama properti
    });
  };

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
            value={dataID.name} // Set nilai input dengan nilai yang sudah ada dari respons API
          />
          <Textarea
            isReadOnly
            minRows={1}
            maxRows={5}
            label="Description"
            value={dataID.description} // Set nilai input dengan nilai yang sudah ada dari respons API
          />
          <Textarea
            isReadOnly
            minRows={1}
            maxRows={2}
            label="Short Dexcription"
            value={dataID.short_description} // Set nilai input dengan nilai yang sudah ada dari respons API
          />
          <Textarea
            isReadOnly
            minRows={1}
            maxRows={1}
            label="Quantity"
            value={dataID.quantity} // Set nilai input dengan nilai yang sudah ada dari respons API
          />
          <Textarea
            isReadOnly
            minRows={1}
            maxRows={1}
            label="Create at"
            value={`${createdDate}, ${createdTime}`} // Set nilai input dengan nilai yang sudah ada dari respons API
          />
          <Textarea
            isReadOnly
            minRows={1}
            maxRows={1}
            label="Last Update"
            value={`${updatedDate}, ${updatedTime}`} // Set nilai input dengan nilai yang sudah ada dari respons API
          />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      <dialog id="my_modal_2" className="modal text-white ">
        <div className="modal-box gap-6 flex flex-col">
          <h3 className="font-bold text-lg">Edit Items : </h3>

          <Textarea
            minRows={1}
            maxRows={2}
            label="Name"
            value={updatan.name} // Set nilai input dengan nilai yang sudah ada dari respons API
            onChange={handleChangeShortName} // Perbarui nilai input saat pengguna mengubahnya
          />
          {updatan.errorss && (
            <div style={{ color: "red" }}>{updatan.errorss}</div>
          )}
          <Textarea
            minRows={1}
            maxRows={5}
            label="Description"
            value={updatan.description} // Set nilai input dengan nilai yang sudah ada dari respons API
            onChange={(e) =>
              setUpdatan({ ...updatan, description: e.target.value })
            } // Perbarui nilai input saat pengguna mengubahnya
          />
          <Textarea
            minRows={1}
            maxRows={2}
            label="Short Description"
            value={updatan.short_description} // Set nilai input dengan nilai yang sudah ada dari respons API
            onChange={handleChangeShortDesc} // Perbarui nilai input saat pengguna mengubahnya
          />
          {updatan.error && <div style={{ color: "red" }}>{updatan.error}</div>}
          <Textarea
            minRows={1}
            maxRows={1}
            label="Quantity"
            value={updatan.quantity} // Set nilai input dengan nilai yang sudah ada dari respons API
            onChange={handleChangeQuantity} // Perbarui nilai input saat pengguna mengubahnya
          />
          {updatan.errors && (
            <div style={{ color: "red" }}>{updatan.errors}</div>
          )}
          <div className="flex gap-8 ">
            <button
              className="btn flex-1 bg-red-600 text-white"
              onClick={async () => {
                if (!updatan.error && !updatan.errors && !updatan.errorss) {
                  try {
                    await softDeleteItems(updatan.id, cookies.get("UserToken"));
                    await fetchData(cookies.get("UserToken"));
                    document.getElementById("my_modal_2").close();
                  } catch (error) {
                    console.error("Error updating items:", error);
                    // Handle error jika diperlukan
                  }
                }
              }}
            >
              Delete
            </button>
            <button
              className="btn flex-1 bg-ungu text-white"
              onClick={async () => {
                if (!updatan.error && !updatan.errors && !updatan.errorss) {
                  try {
                    await updateItems(updatan.id, cookies.get("UserToken"));
                    await fetchData(cookies.get("UserToken"));
                    document.getElementById("my_modal_2").close();
                  } catch (error) {
                    console.error("Error updating items:", error);
                    // Handle error jika diperlukan
                  }
                }
              }}
            >
              Update
            </button>
          </div>
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
          <TableColumn>Quantity</TableColumn>
          <TableColumn>Details</TableColumn>
          <TableColumn>Edit</TableColumn>
        </TableHeader>
        <TableBody>
          {data?.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.short_description}</TableCell>
              <TableCell>{item.quantity}</TableCell>

              <TableCell>
                <button
                  className="btn bg-blue-500 text-white hover:text-slate-500 "
                  onClick={() => {
                    document.getElementById("my_modal_1").showModal();
                    detailsID(item.id, cookies.get("UserToken")); // Meneruskan token
                  }}
                >
                  Details
                </button>
              </TableCell>
              <TableCell>
                <button
                  className="btn bg-purple-500 text-white hover:text-slate-500 "
                  onClick={() => {
                    document.getElementById("my_modal_2").showModal();
                    detailsID(item.id, cookies.get("UserToken")); // Meneruskan token
                  }}
                >
                  Edit
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
