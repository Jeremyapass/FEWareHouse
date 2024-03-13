import React from "react";
import SideBar from "../../component/(PRINTILAN)/sidebar/page";

const MainLayout = ({ children }) => {
  return (
    <div className="grid-cols-[0.5fr_2.5fr] grid min-h-screen">
      <SideBar />
      {children}
    </div>
  );
};

export default MainLayout;
