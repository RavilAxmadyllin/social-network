import React from 'react'
import {Field, reduxForm} from 'redux-form'
import { required} from '../../utils/validate'
import {connect} from 'react-redux'
import {loginUser} from '../../redux/auth-reducer'
import {Redirect} from 'react-router-dom'



const LoginForm = (props) =>{

    return(
        <form onSubmit={ props.handleSubmit}>
            <div>
                <Field name='email' component='input' type='text'  placeholder={'login'}
                       validate={[required]}/>
                <div>Email: <strong> free@samuraijs.com</strong></div>
            </div>
            <div>
                <Field name='password' component='input' type='password' placeholder={'password'}/>
                <div>Password: <strong>free</strong></div>
            </div>
            <div>
                <Field name='rememberMe' component='input' type='checkbox' />
                <label htmlFor='checkbox'>Remember me</label>
            </div>
            {props.error && <div><span style={{background:'red'}}>{props.error}</span></div>}
            {props.captcha && <img src={props.captcha} alt='captcha'/>}
            {props.captcha && <div> <Field name='captcha' component='input' type='text' placeholder={'captcha'}/></div>}
            <button type='submit'>Submit</button>
            <button type={'reset'}>Reset</button>
        </form>
    )
}

const LoginReduxForm =  reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmitForm = (formdata) => {
        const {email, password, rememberMe, captcha} = formdata
        props.loginUser(email, password, rememberMe, captcha)
    }
    if(props.isAuth){
       return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <div><h1>Login</h1></div>
            <LoginReduxForm onSubmit={onSubmitForm} captcha={props.captcha}/>
        </div>
    )
}
const mstp = (state) =>({
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha
})

export default  connect(mstp, {loginUser})(Login)