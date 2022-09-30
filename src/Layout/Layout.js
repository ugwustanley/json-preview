import React from 'react'
import styles from './Layout.module.scss'
import Sidebar from '../components/Sidebar/Sidebar'
import NavBar from '../components/NavBar/NavBar'

const Layout = ({children}) => {
    
  return (
    <div className={styles.layout}>

        <div className={styles.layout__navbar}>
            <NavBar />
        </div>
        <div className={styles.layout__main}>
            <div className={styles.layout__sidebar}>
                <Sidebar />
            </div>
            <div className={styles.layout__body}>{children}</div>
        </div>

    </div>
  )
}

export default Layout