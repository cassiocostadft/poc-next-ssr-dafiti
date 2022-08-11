import React from "react";
import dynamic from "next/dynamic";
import { NextPage } from "next";

const HelloComponent = dynamic(() => import("../../components/footer/footer"));

const checkout: NextPage =({}: any) => {
  return (
    <div>
      <h1>Checkout</h1>

      <HelloComponent/>
    </div>
  );
}

export default checkout