import React from "react";
import {NavLink} from "react-router-dom";
import styles from './DialogItem.module.css'


const DialogItem = (props)=>{
    let path = 'Dialogs/' + props.id;
    return(
        <div className={styles.item}>
            <NavLink activeClassName={styles.active} to={path}>{props.name}</NavLink>
        </div>
    )
};
export default DialogItem