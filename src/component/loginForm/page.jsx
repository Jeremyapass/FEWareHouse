import React, { useState } from "react";
import Link from "next/link";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data formulir yang dikirim
    console.log("Data formulir yang dikirim:", formData);
    // Reset formulir setelah pengiriman
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className=" min-h-full  p-5 bg-biru rounded-lg">
      <div className="text-white  text-start">
        <p className="font-semibold my-4 text-3xl">Welcome back</p>
        <p className=" text-sm mb-12 tracking-tight">
          Please enter your account details{" "}
        </p>
      </div>
      <form className=" grid" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="bg-birutua w-96 h-10 p-4 my-3"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="bg-birutua w-96 h-10 p-4 my-3"
        />

        <Link href="/dashboard">
            <button className="bg-white w-96 rounded-lg text-birutua font-extrabold h-8 my-3">
                Sign In
            </button>
        </Link>

        <p className=" text-sm mb-12 tracking-tight">
          Do not have an account?{" "}
          <a href="/register" className=" underline">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
