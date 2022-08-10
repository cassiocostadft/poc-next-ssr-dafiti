import React from "react";
import dynamic from "next/dynamic";

const FooterDafiti = dynamic(() => import("../../components/footer/footer"));
const HeaderDafiti = dynamic(() => import("../../components/header/header"));

export default function index() {
  return (
    <>
    <HeaderDafiti/>
    <>
      

      
      <h1>PDP</h1>

      <FooterDafiti/>
    </>
    </>
  );
}