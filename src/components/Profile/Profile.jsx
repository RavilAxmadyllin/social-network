import React from "react";
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";


const Profile = (props) => {
    return (
        <div className={styles.page}>
            <div className={'container'}>
                <div className={styles.wrap}>
                    <ProfileInfo profile={props.profile}/>
                </div>
                <MyPostContainer/>
            </div>
        </div>

    )
}

export default Profile