import React from "react";
import Tabel from "../(PRINTILAN)/tabel/page";

const DashboardBawah = () => {
  return (
    <div>
      <h1 className="mb-3">Recently Created</h1>
      <div>
        <Tabel height="max-h-[290px]" kolom3="Created At" keyKolom3="mass" kolom4="" keyKolom4="null"/>
      </div>
    </div>
  );
};

export default DashboardBawah;
