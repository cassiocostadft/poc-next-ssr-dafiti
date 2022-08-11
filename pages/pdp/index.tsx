import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import styles from "../../styles/pdp.module.css"
import { GetStaticProps, NextPage } from "next";

const FooterDafiti = dynamic(() => import("../../components/footer/footer"));
const HeaderDafiti = dynamic(() => import("../../components/header/header"));


//const Pdp = ({productMeta, data}: any)=>{
const Pdp: NextPage = ({}: any) => {
  return (
    <>
      <Head>

        <meta name="description" content="Pagina do Produto">
        </meta>
        <title>Pagina do Produto</title>

      </Head>
      <>
        <HeaderDafiti />

        <h1 className={styles["pdp-class"]}>PDP</h1>

        <FooterDafiti />
      </>
    </>
  );
}

/* 
  **SSR component**
    **SSR com cache para evitar carregamento por acesso**

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch
    ('link');

  const data = await response.json();
  const productMeta = data.map((meta: { data: any }) => meta.data);

  return {
    props: {
      product: productMeta,
      data: new Date().toISOString()
    },
    revalidate: 5 **Recarregar o cache em segundos**
  }
} */

export default Pdp