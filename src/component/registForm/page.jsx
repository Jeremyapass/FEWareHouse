import React, { useState } from "react";

const RegistrationForm = () => {
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
    <div className=" p-5 bg-biru rounded-lg">
      <div className="text-white  text-start">
        <p className="font-semibold my-4 text-3xl">Sign Up</p>
        <p className=" text-sm mb-12 tracking-tight">
          Already have an account?{" "}
          <a href="/login" className=" underline">
            Sign In
          </a>
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
          type="email"
          name="email"
          placeholder="youremail@gmail.com"
          value={formData.email}
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

        <button className="bg-white w-96 rounded-lg text-birutua font-extrabold h-8 my-3">SignUp</button>
         
        <p className=" text-sm mb-12 tracking-tight">By continueing, you agree to our Terms of Service and Policy</p>
      </form>
    </div>
  );
};

export default RegistrationForm;
