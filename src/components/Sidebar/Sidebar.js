import React from "react";
import { GitPullRequest, TwitterLogo } from "phosphor-react";
import TwitterIcon from '../../assets/icons/icons8-twitter.svg'
import GithubIcon from '../../assets/icons/icons8-github.svg'
import LinkedinIcon from '../../assets/icons/icons8-linkedin-2.svg'
import StarIcon from '../../assets/icons/icons8-star-50.png'
import ClearIcon from '../../assets/icons/icons8-clear-64.png'
import styles from "./Sidebar.module.scss";

const Sidebar = ({setCode}) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__top}>
      <div onClick={() => setCode(`{}`)}>
          <img src={ClearIcon}  alt="clear icon"/>
        </div>
      </div>
      <div className={styles.sidebar__bottom}>
      <div>
          <img src={LinkedinIcon}  alt="linkedin icon"/>
        </div>
        <div>
          <img src={TwitterIcon}  alt="twitter icon"/>
        </div>
        <div>
          <img src={GithubIcon} alt="github icon" />
        </div>
        <div>
          <img src={StarIcon}  alt="star icon"/>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
