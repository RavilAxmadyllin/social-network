import React from "react";
import styles from "./ProfileInfo.module.css"
import Loading from "../../../Loader/Loader";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Loading/>
    }
    let img = props.profile.photos.large ?  props.profile.photos.large : "https://placekitten.com/200/260"
    return (
        <div className={styles.wrap}>
            <div className={styles.info}>
                <img src={img} alt="info"/>
            </div>
            <div className={styles.desc} >
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
            </div>
        </div>
    )
}
export default ProfileInfo