import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const LoginForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState({
    username: false,
    password: false,
  });

  const handleChange = (e) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if any fields are empty
    if (!formData.username || !formData.password) {
      setEmptyFields({
        username: !formData.username,
        password: !formData.password,
      });
      setError("Username and password must be filled");
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/login", {
        username: formData.username,
        password: formData.password,
      });
      // Save token to local storage
      cookies.set("UserToken", response.data.accesTokeN);
      // Redirect to dashboard after successful login
      router.push("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-full p-5 bg-biru rounded-lg">
      <div className="text-white text-start">
        <p className="font-semibold my-4 text-3xl">Welcome back</p>
        <p className="text-sm mb-12 tracking-tight">
          Please enter your account details{" "}
        </p>
      </div>
      <div className="grid">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className={`bg-birutua w-96 h-10 p-4 my-3 `}
        />

        <input
          type="password" //biar bulat bulat
          name="password" //penamaan aja, ga penting. bisa juga untuk  e.target.name
          placeholder="Password"
          id="password" //untuk diambil di e.target.id
          onChange={handleChange}
          value={formData.password}
          className={`bg-birutua w-96 h-10 p-4 my-3 `}
        />

        <button
          onClick={handleSubmit}
          type="submit"
          className="bg-white w-96 rounded-lg text-birutua font-extrabold h-8 my-3"
        >
          Sign In
        </button>

        {error && <p className="text-red-500">{error}</p>}

        <p className="text-sm mb-12 tracking-tight">
          Do not have an account?{" "}
          <a href="/register" className="underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
