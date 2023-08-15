import React from 'react'
import Navbar from "./Navbare"
import styles from "./layout.module.scss"

function index({ children }) {
    return (
        <div className={styles.container}>
            <Navbar />
            {children}
        </div>
    )
}

export default index