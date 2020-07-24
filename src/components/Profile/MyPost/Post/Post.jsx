import React from "react";
import styles from '../MyPost.module.css'
import userPng from '../../../../assets/img/user.png';

const Post = (props)=>{
    return (
        <div>
            <div  className={styles.postCreate}>
                <div style={{flexDirection: 'column'}} className={styles.header}>
                    <img src={userPng} alt=""/>
                    <div>NAME PROFILE</div>
                </div>
                <div>{props.message}</div>
            </div>
        </div>
    )
};


export default Post