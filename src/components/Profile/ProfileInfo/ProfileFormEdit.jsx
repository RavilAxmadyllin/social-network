import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Input} from '../../FormComponent/FormComponent'
const ProfileForm = ({error, ...props}) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <button>sub</button> <button onClick={()=> props.toggle(false)}>back</button>
                {error && <div style={{color:'red'}}>{error}</div>}
                <div>Full name: <Field type={'text'} component={'input'} name={'fullName'}/></div>
                <div>About me: <Field type={'text'} component={'input'} name={'aboutMe'}/></div>
                <div>lookingForAJob : <Field type={'checkbox'} component={'input'} name={'lookingForAJob'}/></div>
                <div>lookingForAJobDescription: <Field type={'text'} component={'textarea'} name={'lookingForAJobDescription'}/></div>
                {Object.keys(props.profile.contacts).map( el =>{
                    return <div key={el}>{el}<Field type={'text'} component={Input} name={`contacts.${el}`} /></div>
                })}

            </form>
    )
}

const ProfileFormRedux = reduxForm({form: 'profileEdit'})(ProfileForm)
export default ProfileFormRedux