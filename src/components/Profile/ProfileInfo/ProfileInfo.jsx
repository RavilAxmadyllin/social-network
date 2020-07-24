import React, {useEffect, useState} from 'react';
import styles from './ProfileInfo.module.css'
import Loading from '../../../Loader/Loader';
import ProfileDesc from './ProfileDesc';
import ProfileFormRedux from './ProfileFormEdit';


const ProfileInfo = props =>{

    const onSave = (e) =>{
        if(e.target.files.length){
            props.savePhotos(e.target.files[0])
        }

    }
    const changeProfile = (form) =>{
        props.editProfile(form)
    }
    const img = props.profile.photos.large ? props.profile.photos.large : "https://placekitten.com/200/260"
    if (!props.profile) {
        return <Loading/>
    }

    return(
        <div className={styles.wrap}>
            <div className={styles.colImg}>
                <img src={img} alt="info"/>
                {props.isOwner && <input onChange={onSave} type="file"/>}
            </div>
            <div className={styles.desc}>
                <h1>{props.profile.fullName}</h1>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                {
                    props.mode ?
                        <ProfileFormRedux
                            onSubmit={changeProfile}
                            profile={props.profile}
                            initialValues={props.profile}
                            toggle={props.toggleProfileMode}
                        />
                        : <ProfileDesc profile={props.profile} toggleProfileMode={props.toggleProfileMode} />
                }


            </div>

        </div>

    )
}
export default ProfileInfo

const ProfileStatus = (props) => {
    let [status, setStatus] = useState(props.status)
    let [editMode, setEditMode] = useState(false)
    useEffect(()=>{
        setStatus(props.status)
    }, [props.status])

    const changeMode = () => {
        setEditMode(true)
    }
    const deactivetedMode = () =>{
        setEditMode(false)
        props.updateStatus(status)
    }
    const changeStatus = (e) =>{
        setStatus(e.currentTarget.value)

    }
    return(
        <div className={styles.status}>
            <strong>status :</strong>
            {editMode ?
                <input autoFocus={true}
                       onBlur={deactivetedMode}
                       value={status}
                       onChange={changeStatus}/>
                :<span onDoubleClick={changeMode}>{status}</span>}
        </div>
    )
}

