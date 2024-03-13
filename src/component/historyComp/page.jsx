import React from "react";
import Tabel from "../(PRINTILAN)/tabel/page";

const HistoryComponent = () => {
  return (
    <div className="flex flex-col ">
      <h1 className="text-3xl mb-10 font1 font-bold">History</h1>
      <Tabel
        height="max-h-[600px]"
        kolom3=""
        keyKolom3="null"
        kolom4="Last Update"
        keyKolom4="mass"
      />
    </div>
  );
};

export default HistoryComponent;
