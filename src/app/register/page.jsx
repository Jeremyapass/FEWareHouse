"use client";
import React from "react";
import { LampSection } from "../../component/(PRINTILAN)/lampSection/page";
import RegistrationForm from "../../component/registForm/page";

const RegisterPage = () => {
  return (
    <div>
      <LampSection comp={RegistrationForm} translate="-translate-y-20"/>
      {/* <RegistrationForm/> */}
    </div>
  );
};

export default RegisterPage;
