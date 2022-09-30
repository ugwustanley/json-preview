import React from "react";
import { DownloadSimple, ArrowRight, ArrowDown } from "phosphor-react";
import styles from "./NavBar.module.scss";

const NavBar = ({setLayout}) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__right}></div>
      <div className={styles.navbar__left}>
        <div onClick={() => setLayout("LR")}>
          <ArrowRight size={20} color="gray" />
        </div>
        <div onClick={() => setLayout("TB")}>
          <ArrowDown size={20} color="gray" />
        </div>
        <div>
          <DownloadSimple size={20} color="gray" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
