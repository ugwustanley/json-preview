import React from "react";
import { GitPullRequest, TwitterLogo } from "phosphor-react";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__top}>

      </div>
      <div className={styles.sidebar__bottom}>
        <div>
          <TwitterLogo size={25} color="gray" weight="fill" />
        </div>
        <div>
          <GitPullRequest size={25} color="gray" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
