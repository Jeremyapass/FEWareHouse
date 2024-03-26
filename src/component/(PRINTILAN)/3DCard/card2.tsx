"use client";
import React, { useEffect, useState } from "react";
import { CardBody, CardContainer, CardItem } from "./3DCard";
import Cookies from "universal-cookie"; // Mengimpor universal-cookie
import axios from "axios"; // Mengimpor modul axios

const cookies = new Cookies();

export function Card2() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    const userToken = cookies.get("UserToken");
    if (userToken) {
      fetchData(userToken);
    } else {
      setError("Token not found in cookies.");
    }
  }, []);

  const fetchData = (token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get("http://localhost:5000/items/get", config)
      .then((response) => {
        setData(response.data.item);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again later.");
      })
      .finally(() => {
        setFetching(false);
      });
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <CardContainer className="inter-va w-80 h-24">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gradient-to-r from-birumuda to-birumudabgt border-none w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <>
          <CardItem
            translateZ="50"
            className="text-lg w-full font-bold :text-white"
          >
            {fetching
              ? "Loading..."
              : data.length > 1
              ? data[data.length - 2].name
              : "You should create Item"}
          </CardItem>
          <CardItem
            translateZ="50"
            className="text-neutral-500  text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {fetching
              ? "Loading..."
              : data.length > 1
              ? data[data.length - 2].short_description
              : "Short Description for your item"}
            {/* if(fetching){
                  "Loading.."
                }else{
                  if(data.length > 0){
                    data[data.length - 2].short_description
                  }else{
                    "data kosong"
                  } 
                } */}
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              {fetching
                ? "Loading..."
                : data.length > 1
                ? new Date(data[data.length - 2].createdAt).toLocaleString()
                : "This should be the created time"}
            </CardItem>
          </div>
        </>
      </CardBody>
    </CardContainer>
  );
}
