import React from 'react'
import styles from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostContainer from './MyPost/MyPostContainer'
import Loading from '../../Loader/Loader'




const Profile = (props) => {
    if(!props.profile)return <Loading/>
    return (
        <div className={styles.page}>
                    <ProfileInfo
                        mode={props.mode} toggleProfileMode={props.toggleProfileMode}
                        isOwner={props.isOwner}
                        profile={props.profile}
                        status={props.status}
                        updateStatus={props.updateStatus}
                        savePhotos={props.savePhotos}
                        editProfile={props.editProfile}/>
                <MyPostContainer/>
        </div>

    )
}

export default Profile