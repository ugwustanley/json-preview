import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; 
import styles from './CodeEditor.module.scss'

function CodeEditor({code , setCode}) {

  return (
    <div className={styles.codeEditor}>
    <Editor
      value={code}
      onValueChange={code => setCode(code)}
      highlight={code => highlight(code, languages.js)}
      padding={10}
      style={{
        fontFamily: " 'Noto Sans Mono', monospace ",
        fontSize: 14,
        background: '#011627',
      }}
    />
    </div>
  );
}

export default CodeEditor;