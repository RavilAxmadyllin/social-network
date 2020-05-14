import React from 'react'
import styles from './Header.module.css'


const Header = (props)=> {
    console.log(props)
    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <h2>social network</h2>
            </div>
            <div className={styles.logo}>{props.isAuth ? props.login : 'logIn'}</div>
        </header>
    )
}


export default Header