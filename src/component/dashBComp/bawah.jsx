import React from "react";
import Tabel from "../(PRINTILAN)/tabel/tabelDashboard";

const DashboardBawah = () => {
  return (
    <div>
      <h1 className="mb-3">Recently Update</h1>
      <div>
        <Tabel height="max-h-[290px]" />
      </div>
    </div>
  );
};

export default DashboardBawah;
