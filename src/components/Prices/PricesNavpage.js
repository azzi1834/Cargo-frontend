import React from "react";
import { Route, Routes } from "react-router-dom";
import Overview from "./Overview";
import TransportationServices from "./TransportationServices";

export default function PricesNavpage() {
  return (
    <>
      <Routes>
        <Route path="/prices-and-quotes" element={<Overview />}></Route>
        <Route
          path="/prices-and-quotes/transportation-services"
          element={<TransportationServices />}
        ></Route>
      </Routes>
    </>
  );
}
