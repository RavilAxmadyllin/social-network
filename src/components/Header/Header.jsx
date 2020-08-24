import React from 'react'
import styles from './Header.module.css'
import {NavLink} from 'react-router-dom'



const Header = (props)=> {
    return(
        <header className={styles.header}>
            <div className='container'>
                <div className={styles.headerInner}>
                    <h2>social network</h2>
                    <div className={styles.logo}>
                        {props.isAuth ? <span>{props.email} <button onClick={props.logout}>logout</button></span>
                            :<NavLink to={'/login'}>
                                <div className={styles.logo}>{props.isAuth ? props.login : 'login'}</div>
                            </NavLink>
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}


export default Header