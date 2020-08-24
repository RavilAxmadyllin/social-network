import {authMe} from '../api/api'
import {stopSubmit} from 'redux-form'

const SET_AUTH_DATA = 'SOCIAL_NETWORK/AUTH/SET_AUTH_DATA'
const GET_CAPTCHA = 'SOCIAL_NETWORK/AUTH/GET_CAPTCHA'
const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth:false,
    captcha: null
}
const authReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SET_AUTH_DATA: return {...state, ...action.data}
            return {
                ...state,
                ...action.data
            }
        case GET_CAPTCHA:return {
            ...state,
            captcha: action.url
        }
        default: return state
    }

}

export default authReducer
export const getCaptchaUrl = (url) =>({type: GET_CAPTCHA, url})
export const setUserData = (userId, email, login, isAuth) => ({type:SET_AUTH_DATA, data: {userId, email, login, isAuth}})

export const getAuthUserData = () => dispatch => {
    authMe.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {email, id, login} = response.data.data
                dispatch(setUserData(id, email, login, true))
            }
        })
}
export const loginUser = (email, password, rememberMe, captcha) => dispatch =>{
    authMe.signIn(email, password, rememberMe, captcha)
        .then(response =>{
            if(response.data.resultCode === 0){
                dispatch(getAuthUserData())
            }else {
                if(response.data.resultCode === 10){
                    authMe.captcha().then(res =>{
                        dispatch(getCaptchaUrl(res.data.url))
                        dispatch(getAuthUserData())
                    })
                }
                const someError = response.data.messages[0].length > 0 ? response.data.messages[0] : 'some error'
                dispatch(stopSubmit('login', {_error: someError}))
            }
        })
}

export const logout = () =>dispatch =>{
    authMe.signOut().then(response =>{
        dispatch(setUserData(null, null, null, false))
    })

}




