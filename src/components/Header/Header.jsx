import React from 'react'
import cocos from "../../../public/free-icon-coconut-3239295.png"
import styles from "../Header/Header.module.css"
import vk from  "../../../public/free-icon-vk-logo-of-social-network-39699.png"
const Header = () => {
 
  return (
    <div className={styles.main}>
        <div className={styles.logo} >
            <img src={cocos} alt="cocos" />
        </div>
        <div className={styles.links}>
            <h1>COCOS</h1>
        </div>
        <div className={styles.social}>
            <a href=""> <img src={vk} alt=""/></a>
            <a href=""> <img src="" alt="" /></a>
            <a href=""> <img src="" alt="" /></a>
        </div>
    </div>
  )
}

export default Header