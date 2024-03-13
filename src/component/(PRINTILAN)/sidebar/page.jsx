"use client";
import React from "react";
import { TiCloudStorage } from "react-icons/ti";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classnames from "classnames";

const SideBar = () => {
  const currentPath = usePathname();
  // console.log(currentPath)

  const links = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Items", href: "/items" },
    { label: "History", href: "/history" },
  ];
  return (
    <div className=" bg-biru rounded flex flex-col items-center">
      <Link href="/dashboard">
        <button className="flex mb-10 mt-5">
          <TiCloudStorage color="blue" className="h-5 w-5" />
          <p className="font-bold ml-2 text-inherit">WareHouse</p>
        </button>
      </Link>
      <Link href="/create">
        <button className="bg-birumuda text-white hover:bg-white hover:text-birumuda w-48 h-10 text-sm  transition-all mb-10 rounded-md">
          <span className="mr-1">+</span> Create
        </button>
      </Link>
      <ul className="flex flex-col">
        {links.map((link) => (
          <Link
            key={link.href}
            className={` bg-birublend w-48 h-10 text-start text-sm px-6 flex items-center  my-2 rounded-md ${classnames(
              {
                "bg-gradient-to-r from-birumuda to-ungu text-white":
                  link.href == currentPath,
                " text-white": link.href != currentPath,
                "hover:scale-105 transition-all": true,
              }
            )}`}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
