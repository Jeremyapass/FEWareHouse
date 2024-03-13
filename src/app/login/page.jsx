"use client";
import React from "react";
import { LampSection } from "../../component/(PRINTILAN)/lampSection/page";
import LoginForm from "../../component/loginForm/page";

const LoginPage = () => {
  return (
    <div>
      <LampSection comp={LoginForm} />
    </div>
  );
};

export default LoginPage;
