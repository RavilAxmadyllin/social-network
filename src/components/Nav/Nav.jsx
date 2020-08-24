import React from 'react'
import styles from './Nav.module.css'
import {NavLink} from 'react-router-dom'


const Nav = (props) => {
    return(
        <nav>
            <ul className={styles.bar}>
                <li>
                    <NavLink className={styles.link} activeClassName={styles.active} to='/profile'>Profile</NavLink>
                </li>
                <li>
                    <NavLink className={styles.link} activeClassName={styles.active} to='/news'>News</NavLink>
                </li>
                <li className={styles.list}>
                    <NavLink className={styles.link} activeClassName={styles.active} to='/dialogs'>Message</NavLink>
                    {props.newMessagesCount > 0 && <span className={styles.linkCount}>{props.newMessagesCount}</span>}
                </li>
                <li>
                    <NavLink className={styles.link} activeClassName={styles.active} to='/photo'>Photo</NavLink>
                </li>
                <li>
                    <NavLink className={styles.link} activeClassName={styles.active} to='/users'>Users</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav