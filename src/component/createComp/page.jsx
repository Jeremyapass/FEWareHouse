"use client";
import React, { useState } from "react";
import { Textarea } from "@nextui-org/react";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const CreateComponent = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    short_description: "",
    quantity: "",
  });
  const [emptyFields, setEmptyFields] = useState({
    name: false,
    description: false,
    short_description: false,
    quantity: false,
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
    setError(null);
    setEmptyFields((prevEmptyFields) => ({
      ...prevEmptyFields,
      [name]: false,
    }));
  };

  const handleSubmit = async (e, token) => {
    e.preventDefault();
    try {
      if (
        !form.name ||
        !form.description ||
        !form.short_description ||
        !/^\d+$/.test(form.quantity) // Validasi quantity hanya berisi angka
      ) {
        setEmptyFields({
          name: !form.name,
          description: !form.description,
          short_description: !form.short_description,
          quantity: !/^\d+$/.test(form.quantity), // Set emptyFields.quantity sesuai validasi
        });
        setError("Please fill all fields correctly.");
        return;
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(
        "http://localhost:5000/items/create",
        {
          name: form.name,
          description: form.description,
          short_description: form.short_description,
          quantity: parseInt(form.quantity),
        },
        config
      );

      // Menampilkan alert "Item Created!"
      alert("Item Created!");

      // Mengosongkan input
      setForm({
        name: "",
        description: "",
        short_description: "",
        quantity: "",
      });

      // Jika request berhasil, lakukan tindakan selanjutnya
      // Misalnya, mengatur state, menampilkan pesan sukses, atau meredirect pengguna
    } catch (error) {
      console.error("Create failed:", error);
      if (error.response && error.response.status === 401) {
        setError("Unauthorized: Please log in again.");
      } else if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError(
          "Make sure your input(s) are correct. Please try again later."
        );
      }
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-3xl mb-10 font1 font-bold">Create New Items</h1>
      <div className="flex justify-center">
        <form className="flex flex-col gap-6 ">
          <h2 className="text-center font-bold">Input Items Here</h2>
          <Textarea
            className="w-96"
            name="name"
            label="Name"
            isRequired
            placeholder="my item name"
            value={form.name}
            onChange={handleChange}
            isInvalid={emptyFields.name} // Menambahkan properti isInvalid jika input kosong
          />

          <Textarea
            label="Quantity"
            name="quantity"
            isRequired
            value={form.quantity}
            onChange={handleChange}
            placeholder="100 (number only)"
            isInvalid={emptyFields.quantity}
          />
          <Textarea
            label="Description"
            name="description"
            isRequired
            value={form.description}
            onChange={handleChange}
            placeholder="the box is made from wood and longer description if needed ..."
            isInvalid={emptyFields.description}
          />
          <Textarea
            label="Short Description"
            name="short_description"
            isRequired
            value={form.short_description}
            onChange={handleChange}
            placeholder="the box is made from wood"
            isInvalid={emptyFields.short_description}
          />
          {error && (
            <div className="-mt-4 -mb-3  text-red-600 text">{error}</div>
          )}
          <button
            onClick={(e) => {
              handleSubmit(e, cookies.get("UserToken"));
            }}
            className="btn bg-white text-blue-600"
          >
            Create Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateComponent;
