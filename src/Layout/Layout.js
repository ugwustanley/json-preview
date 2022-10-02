import React, { useState } from "react";
import styles from "./Layout.module.scss";
import Sidebar from "../components/Sidebar/Sidebar";
import NavBar from "../components/NavBar/NavBar";
import View from "../components/View/View";

const Layout = ({ children }) => {
  const [layout, setLayout] = useState("LR");
  const [downloadCount, setDownloadCount] = useState(0);
  const [code, setCode] = useState(`
 {
    "name": "json-preview",
    "version": "0.1.0",
    "private": true,
  
    "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build",
      "test": "react-scripts test",
      "eject": "react-scripts eject"
    },
   
    "browserslist": {

      "production": [
        ">0.2%",
        "not dead",
        "not op_mini all"
      ]
     
    }
  }
  
  
  `);

  return (
    <div className={styles.layout}>
      <div className={styles.layout__navbar}>
        <NavBar
          setDownloadCount={setDownloadCount}
          downloadCount={downloadCount}
          setLayout={setLayout}
          layout={layout}
        />
      </div>
      <div className={styles.layout__main}>
        <div className={styles.layout__sidebar}>
          <Sidebar setCode={setCode} />
        </div>
        <div className={styles.layout__body}>
          <View
            downloadCount={downloadCount}
            code={code}
            setCode={setCode}
            layout={layout}
          />
        </div>
      </div>
    </div>
  );
};

export default Layout;
