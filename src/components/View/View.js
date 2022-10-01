import React, { useState , createRef , useRef , useEffect } from "react";
import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';
import { WarningCircle } from "phosphor-react";

//components
import PreviewBoard from "../PreviewBoard/PreviewBoard";
import CodeEditor from "../CodeEditor/CodeEditor";

//stylesheet
import styles from "./View.module.scss";

const View = ({ layout, code, setCode , downloadCount }) => {
  const [activeTab, setActiveTab] = useState("preview-board");
  const [isJson , setIsJson] = useState(false)
  const diagramRef = useRef()

  const isJSONString = (str) => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    console.log("called")
    return true;
  };

  useEffect(() => {
    setIsJson(isJSONString(code))
  }, [code])

  useEffect(() => {
   if(downloadCount > 0){
      exportComponentAsPNG(diagramRef)
   }
  }, [downloadCount])
  
  
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
          Code Editor {isJson ? null :  <span><WarningCircle size={14} weight="bold" color={'tomato'} /></span>}
        </div>
        <div
          className={
            activeTab == "preview-board"
              ? `${styles.view__tabControl} ${styles.view__tabControl__active}`
              : `${styles.view__tabControl}`
          }
          onClick={() => isJson && setActiveTab("preview-board")}
        >
          Preview Board
        </div>
       
      </div>
      {activeTab === "code-editor" ? (
        <CodeEditor  setCode={setCode} code={code} />
      ) : (
        <PreviewBoard  ref={diagramRef}  code={code} layout={layout} />
      )}
    </div>
  );
};

export default View;
