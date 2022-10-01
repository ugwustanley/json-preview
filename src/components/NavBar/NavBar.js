import React from "react";
import { DownloadSimple, ArrowRight, ArrowDown } from "phosphor-react";
import DownloadIcon from '../../assets/icons/icons8-download-50.png'
import DirectionIcon from '../../assets/icons/icons8-direction-64.png'
import ArrowRightIcon from '../../assets/icons/icons8-right-arrow-64 (1).png'
import ArrowDownIcon from '../../assets/icons/icons8-down-arrow-64 (1).png'
import Logo from '../../assets/images/default-removebg-preview.png'
import styles from "./NavBar.module.scss";

const NavBar = ({setLayout, layout , setDownloadCount , downloadCount}) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__right}>
        <img src={Logo} />
      </div>
      <div className={styles.navbar__left}>
      
      
        <div onClick={() =>  setLayout(layout === "LR" ? "TB" : "LR")}>
          <img src={DirectionIcon} alt="change direction icon diagram" />
        </div>
        <div onClick={() => setDownloadCount(downloadCount + 1)}>
          <img src={DownloadIcon} alt="download diagram" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
