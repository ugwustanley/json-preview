import React, { useState } from "react";

//components
import PreviewBoard from "../PreviewBoard/PreviewBoard";
import CodeEditor from "../CodeEditor/CodeEditor";

//stylesheet
import styles from "./View.module.scss";

const View = () => {
  const [activeTab, setActiveTab] = useState("preview-board");
  return (
    <div className={styles.view}>
      <div className={styles.view__tabControls}>
        <div
          className={
            activeTab == "code-editor"
              ? `${styles.view__tabControl} ${styles.view__tabControl__active}`
              : `${styles.view__tabControl}`
          }
          onClick={() => setActiveTab("code-editor")}
        >
          Code Editor
        </div>
        <div
         className={
            activeTab == "preview-board"
              ? `${styles.view__tabControl} ${styles.view__tabControl__active}`
              : `${styles.view__tabControl}`
          }
          onClick={() => setActiveTab("preview-board")}
        >
          Preview Board
        </div>
      </div>
      {activeTab === "code-editor" ? <CodeEditor /> : <PreviewBoard />}
    </div>
  );
};

export default View;
