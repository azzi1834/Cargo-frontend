import React from "react";
import { Route, Routes } from "react-router-dom";
import Overview from "./Overview";
import TransportationServices from "./TransportationServices";
import SupplyChainAndLogistics from "./SupplyChainAndLogistics";
import DigitalServices from "./DigitalServices";

export default function PricesNavpage() {
  return (
    <>
      <Routes>
        <Route path="/prices-and-quotes" element={<Overview />}></Route>
        <Route
          path="/prices-and-quotes/transportation-services"
          element={<TransportationServices />}
        ></Route>
        <Route
          path="/prices-and-quotes/logistics"
          element={<SupplyChainAndLogistics />}
        ></Route>
        <Route
          path="/prices-and-quotes/digital-services"
          element={<DigitalServices />}
        ></Route>
      </Routes>
    </>
  );
}
