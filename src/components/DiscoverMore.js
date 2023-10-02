import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function DiscoverMore() {
  const { data } = useSelector((state) => state.auth);
  console.log("data", data);
  return (
    <>
     
    </>
  );
}
