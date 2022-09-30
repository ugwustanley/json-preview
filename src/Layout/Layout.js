import React , {useState} from 'react'
import styles from './Layout.module.scss'
import Sidebar from '../components/Sidebar/Sidebar'
import NavBar from '../components/NavBar/NavBar'
import View from '../components/View/View'

const Layout = ({children}) => {

 const [layout , setLayout] = useState("LR")
 const [code , setCode] = useState(`
 {
    "name": "json-preview",
    "version": "0.1.0",
    "private": true
    
  }`)
    
  return (
    <div className={styles.layout}>

        <div className={styles.layout__navbar}>
            <NavBar setLayout={setLayout} />
        </div>
        <div className={styles.layout__main}>
            <div className={styles.layout__sidebar}>
                <Sidebar />
            </div>
            <div className={styles.layout__body}>
                <View code={code} setCode={setCode} layout={layout} />
            </div>
        </div>

    </div>
  )
}

export default Layout