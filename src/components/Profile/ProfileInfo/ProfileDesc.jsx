import React from 'react'
import styles from './ProfileInfo.module.css'
const ProfileDesc = ({profile, toggleProfileMode}) =>{
    return(
        <ul className={styles.descList}>
            <Contact title={'aboutMe :'} value={profile.aboutMe}/>
            <Contact title={'lookingForAJob :'} value={profile.lookingForAJob ? 'yeas' : 'no'}/>
            <Contact title={'lookingForAJobDescription :'} value={profile.lookingForAJobDescription}/>
            {Object.keys(profile.contacts).map( key =>{
                return <Contact key={key} title={key} value={profile.contacts[key]} />
            })}
            <button onClick={()=> toggleProfileMode(true)}>change</button>
        </ul>
    )
}
const Contact = ({title, value}) =>{
    return <li ><strong>{title} </strong> {value}</li>
}

export default ProfileDesc