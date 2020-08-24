import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './DialogItem.module.css'
import userPng from '../../../assets/img/user.png'

const DialogItem = (props)=>{
    let path = `/dialogs/${props.id}`
    let photos = props.photo ? props.photo : userPng
    return(
        <label className={styles.item}>
            <NavLink activeClassName={styles.active} to={path}>
                <img className={styles.photoUser} src={photos}/>
                <p>{props.userName}</p>
            </NavLink>
        </label>
    )
};
export default DialogItem