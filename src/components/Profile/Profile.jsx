import React from "react";
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";

import Loading from "../../Loader/Loader";


const Profile = (props) => {
    if(!props.profile)return <Loading/>
    return (
        <div className={styles.page}>
            <div className={'container'}>
                <div className={styles.wrap}>
                    <ProfileInfo
                        profile={props.profile}
                        status={props.status}
                        updateStatus={props.updateStatus}/>
                </div>
                <MyPostContainer/>
            </div>
        </div>

    )
}

export default Profile