import React from 'react'
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";



const Header = (props)=> {
    console.log(props)
    return(
        <header className={styles.header}>
            <div className={styles.headerInner}>
                <div className={styles.logo}>
                    <h2>social network</h2>
                </div>
                <div className={styles.logo}>
                    {props.isAuth ? props.email
                        :<NavLink to={'/login'}>
                            <div className={styles.logo}>{props.isAuth ? props.login : 'login'}</div>
                        </NavLink>
                    }
                </div>
            </div>

        </header>
    )
}


export default Header