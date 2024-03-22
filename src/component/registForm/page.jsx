import React, { useState } from "react";
import { useRouter } from "next/navigation"; 
import axios from "axios";
import Link from "next/link"; 

const RegistrationForm = () => {
  const router = useRouter(); 

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  // State untuk menyimpan pesan kesalahan
  const [error, setError] = useState(null);

  // State untuk menandai bidang yang kosong
  const [emptyFields, setEmptyFields] = useState({
    name: false,
    username: false,
    email: false,
    password: false,
  });

  // Fungsi untuk menangani perubahan input pada form
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Reset error and empty field state when input changes
    setError(null);
    setEmptyFields((prevEmptyFields) => ({
      ...prevEmptyFields, 
      [name]: false,
    }));
  };

  // Fungsi untuk menangani pengiriman form
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if any fields are empty
    if (!formData.name || !formData.username || !formData.email || !formData.password) {
      setEmptyFields({
        name: !formData.name,
        username: !formData.username,
        email: !formData.email,
        password: !formData.password,
      });
      setError("All fields must be filled");
      return;
    }
    try {
      // Kirim data pendaftaran ke server menggunakan axios
      const response = await axios.post("http://localhost:5000/register", {
        name: formData.name,
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      console.log("User registered:", response.data);
      // Reset the form after submission
      setFormData({
        name: "",
        username: "",
        email: "",
        password: "",
      });
      router.push('/login'); // Redirect pengguna ke halaman login setelah pendaftaran berhasil
    } catch (error) {
      console.error("Registration failed:", error);
      setError("Registration failed. Please try again.");
    }
  };

  // Render form pendaftaran
  return (
    <div className="p-5 bg-biru rounded-lg">
      <div className="text-white text-start">
        <p className="font-semibold my-4 text-3xl">Sign Up</p>
        <p className="text-sm mb-12 tracking-tight">
          Already have an account?{" "}
          {/* Menggunakan Link untuk navigasi ke halaman login */}
          <Link href="/login">
            <button className="underline">Sign In</button>
          </Link>
        </p>
      </div>
      <div className="grid">
        {/* Input form */}
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Name"
          onChange={handleInput}
          className={`bg-birutua w-96 h-10 p-4 my-3`}
        />

        <input
          type="text"
          name="username"
          value={formData.username}
          placeholder="Username"
          onChange={handleInput}
          className={`bg-birutua w-96 h-10 p-4 my-3`}
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="youremail@gmail.com"
          onChange={handleInput}
          className={`bg-birutua w-96 h-10 p-4 my-3`}
        />

        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="Password"
          onChange={handleInput}
          className={`bg-birutua w-96 h-10 p-4 my-3`}
        />

        {/* Tombol Sign Up */}
        <button
          onClick={handleSubmit}
          className="bg-white w-96 rounded-lg text-birutua font-extrabold h-8 my-3"
        >
          Sign Up
        </button>

        {/* Menampilkan pesan kesalahan jika ada */}
        {error && <p className="text-red-500">{error}</p>}

        <p className="text-sm mb-12 tracking-tight">
          By continuing, you agree to our Terms of Service and Policy
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;
