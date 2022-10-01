import React from "react";
import { DownloadSimple, ArrowRight, ArrowDown } from "phosphor-react";
import DownloadIcon from '../../assets/icons/icons8-download-50.png'
import ArrowRightIcon from '../../assets/icons/icons8-right-arrow-64 (1).png'
import ArrowDownIcon from '../../assets/icons/icons8-down-arrow-64 (1).png'
import styles from "./NavBar.module.scss";

const NavBar = ({setLayout}) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__right}></div>
      <div className={styles.navbar__left}>
        {/* <div onClick={() => setLayout("LR")}>
          <ArrowRight size={22} weight="bold" color="#5c4599" />
        </div>
        <div onClick={() => setLayout("TB")}>
          <ArrowDown size={22} weight="bold" color="#5c4599" />
        </div> */}
        <div>
          <img src={ArrowRightIcon} alt="arrow right diagram" />
        </div>
        <div>
          <img src={ArrowDownIcon} alt="arrow down diagram" />
        </div>
        <div>
          {/* <DownloadSimple size={22} weight="bold" color="#5c4599" /> */}
          <img src={DownloadIcon} alt="download diagram" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
