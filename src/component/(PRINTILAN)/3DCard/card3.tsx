"use client";
import React, { useEffect, useState } from "react";
import { CardBody, CardContainer, CardItem } from "./3DCard";
import Cookies from "universal-cookie"; // Mengimpor universal-cookie
import axios from "axios"; // Mengimpor modul axios

const cookies = new Cookies();

export function Card3() {
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
      // console.log(response.data);
      setData(response.data.item);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data. Please try again later.");
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <CardContainer className="inter-va w-80 h-24">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gradient-to-r from-birumuda to-birumudabgt border-none w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        {data && data.length > 0 && (
          <CardItem
            key={data[data.length - 3].id}
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            {data[data.length - 3].name}
          </CardItem>
        )}
        {data && data.length > 0 && (
          <CardItem
            key={data[data.length - 3].id}
            translateZ="50"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {data[data.length - 3].short_description}
          </CardItem>
        )}

        <div className="flex justify-between items-center mt-20">
          {data && data.length > 0 && (
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              {new Date(data[data.length - 3].createdAt).toLocaleString()}
            </CardItem>
          )}
        </div>
      </CardBody>
    </CardContainer>
  );
}
