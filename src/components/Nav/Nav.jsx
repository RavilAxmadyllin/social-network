import React from "react";
import styles from "./Nav.module.css"
import {NavLink} from "react-router-dom";


const Nav = () => {
    return(
        <nav>
            <ul className={styles.bar}>
                <li><NavLink className={styles.link} activeClassName={styles.active} to="/profile">Profile</NavLink></li>
                <li><NavLink className={styles.link} activeClassName={styles.active} to="/news">News</NavLink></li>
                <li><NavLink className={styles.link} activeClassName={styles.active} to="/message">Message</NavLink></li>
                <li><NavLink className={styles.link} activeClassName={styles.active} to="/photo">Photo</NavLink></li><li>
                <NavLink className={styles.link} activeClassName={styles.active} to="/users">Users</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav