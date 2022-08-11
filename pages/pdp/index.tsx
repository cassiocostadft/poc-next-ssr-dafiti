import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import styles from "../../styles/pdp.module.css"

const FooterDafiti = dynamic(() => import("../../components/footer/footer"));
const HeaderDafiti = dynamic(() => import("../../components/header/header"));

export default function index() {
  return (
    <>
       <Head>

          <meta name="description" content="Pagina do Produto">
          </meta>
          <title>Pagina do Produto</title>

      </Head>
    <>
      <HeaderDafiti/>

      <h1 className={styles["pdp-class"]}>PDP</h1>

      <FooterDafiti/>
    </>
    </>
  );
}