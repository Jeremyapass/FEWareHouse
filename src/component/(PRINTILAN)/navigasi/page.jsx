"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { TiCloudStorage } from "react-icons/ti";

const Navigasi = () => {
  return (
    <Navbar>
      <NavbarBrand className="flex">
        <TiCloudStorage color="blue" className="h-8 w-8" />
        <p className="font-bold ml-2 text-inherit">WareHouse</p>
      </NavbarBrand>
      <NavbarContent
        className="hidden sm:flex gap-4"
        justify="center"
      ></NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            className="hover:scale-105 transition-all ease-out hover:bg-blue-600 hover:text-white"
            as={Link}
            color="primary"
            href="/login"
            variant="primary"
          >
            Login
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            className="hover:scale-105 transition-all ease-out hover:bg-blue-600 hover:text-white"
            as={Link}
            color="primary"
            href="/register"
            variant="primary"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Navigasi;
