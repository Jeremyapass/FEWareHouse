import React from "react";
import DashboardAtas from "../../../component/dashBComp/atas"
import DashboardBawah from "../../../component/dashBComp/bawah"


const DashboardPage = () => {
  return (
    <div className="p-5 flex flex-col">
      <DashboardAtas/>
      <DashboardBawah/>  
    </div>
  );
};

export default DashboardPage;
