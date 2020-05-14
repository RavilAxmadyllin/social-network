import React from "react";
import user from '../../assets/img/user.png'
import styles from './User.module.css'
import {NavLink} from "react-router-dom";
import * as axios from 'axios'
import {userAPI} from "../../api/api";


const Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let  sizePage =[]
    for (let i = 1; i <= pageCount; i++){
        sizePage.push(i)
    }
    return (
        <div>
            <div>{sizePage.map( p => <span
                onClick={()=> props.onPageChanged(p)}
                className={props.currentPage === p ? styles.selected : ''}>{p}</span>)}</div>
            {props.users.map(u =>{
                return (
                    <div key={u.id}>
                        <NavLink to={'profile/' + u.id}>
                            <div>
                                <img src={u.photos.small != null ? u.photos.small : user} alt="user" width={"50px"}/>
                            </div>
                        </NavLink>
                        <div>{u.name} </div>
                        {u.followed ? <button
                                disabled={props.isFollowedInProgress.some(id => id===u.id)}
                                onClick={()=> {
                                    userAPI.unfollow(u.id)
                                        .then(response => {
                                            if (response.data.resultCode === 0) props.follow(u.id)
                                        })
                                }
                                }>unfollow</button>:
                            <button disabled={props.isFollowedInProgress.some(id => id===u.id)} onClick={()=>{
                                props.toggleIsFollowingProgress(true, u.id)
                                userAPI.follow(u.id)
                                    .then(response => {
                                        if (response.data.resultCode === 0) props.follow(u.id)
                                    })
                            }
                            }>follow</button>}
                        <div>{u.status}</div>
                    </div>)

            })}
        </div>
    )
}
export default Users