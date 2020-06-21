import React from "react";
import user from '../../assets/img/user.png'
import styles from './Users.module.css'
import {NavLink} from "react-router-dom";
import Pagination from "../pagination/Pagination";
import User from "./User";


const Users = (props) => {

    return (
        <div>
            <Pagination onPageChanged={props.onPageChanged}
                        currentPage={props.currentPage}
                        totalUsersCount={props.totalUsersCount}
                        pageSize={props.pageSize}/>
            <div className={styles.block}>
                {props.users.map(user =>{
                    return <User key={user.id} user={user} follow={props.follow}
                                 isFollowedInProgress={props.isFollowedInProgress}
                                 unfollow={props.unfollow}/>
                })}
            </div>
        </div>
    )
}
export default Users

