import { NextPage } from "next";
import React from "react";
import styles from '../../styles/header.module.css';

const Header: NextPage =( {}: any) => {
  return (
    <div className={styles["header-class"]}>
      Header
    </div>
  );
}

export default Header