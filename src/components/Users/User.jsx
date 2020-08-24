import React from 'react'
import {NavLink} from 'react-router-dom'
import userPng from '../../assets/img/user.png'
import styles from './Users.module.css'


const User  = ({user,isFollowedInProgress, unfollow, follow}) => {
    return(
        <div className={styles.item}>
            <NavLink to={'profile/' + user.id}>
                <img src={user.photos.small != null ? user.photos.small : userPng} alt="user" width={"50px"}/>
            </NavLink>
            <div>{user.name} </div>
            {user.followed ? <button
                    disabled={isFollowedInProgress.some(id => id===user.id)}
                    onClick={()=> {unfollow(user.id)}}>unfollow</button>:
                <button disabled={isFollowedInProgress.some(id => id===user.id)} onClick={()=>{
                    follow(user.id)
                }
                }>follow</button>}
        </div>
    )
}
export default User