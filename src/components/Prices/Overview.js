import React from "react";
import { useState } from "react";
import CorouselOverview from "./CorouselOverview";
import CorouselTransportationServices from "./CorouselTransportationServices";
import CorouselSupplychainAndServices from "./CorouselSupplychainAndServices";
import CorouselDigitalServices from "./CorouselDigitalServices";
export default function Overview() {
  return (
    <div>
      <div>
        <CorouselOverview />
      </div>
      <div>
        <CorouselTransportationServices />
      </div>
      <div>
        <CorouselSupplychainAndServices />
      </div>
      <div>
        <CorouselDigitalServices />
      </div>
      <p className="my-4 mx-3">
        * Prices are indicative only. Availability is subject to change without
        notice. The shown prices for LCL are subject to local charges both ends.
        Only ocean freight displayed.
      </p>
    </div>
  );
}
