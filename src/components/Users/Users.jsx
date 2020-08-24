import React from 'react'
import styles from './Users.module.css'
import User from './User'
import Loading from '../../Loader/Loader'


const Users = (props) => {
    if (props.loading) return <Loading/>
    return (
        <div>
            <div className={styles.block}>
                {props.users.map(user => <User key={user.id} user={user} follow={props.follow}
                                              isFollowedInProgress={props.isFollowedInProgress}
                                              unfollow={props.unfollow}/>)}
            </div>
        </div>
    )
}
export default Users

