import React from "react";
import dynamic from "next/dynamic";

const HelloComponent = dynamic(() => import("../../components/footer/footer"));

export default function index() {
  return (
   <div>
      <h1>Home</h1>

      <HelloComponent/>
    </div>
  
  );
}