import {authMe, PropertySignType} from '../api/api'
import {FormAction, stopSubmit} from 'redux-form'
import {Dispatch} from 'redux'
import {ThunkAction} from 'redux-thunk'
import {AppRootStateType} from './redux-store'

const SET_AUTH_DATA = 'SOCIAL_NETWORK/AUTH/SET_AUTH_DATA'
const GET_CAPTCHA = 'SOCIAL_NETWORK/AUTH/GET_CAPTCHA'

const initialState = {
    userId: null as null | number,
    email: null as null | string,
    login: null as null | string,
    isAuth: false as boolean,
    captcha: null as null | string
}
const authReducer = (state = initialState, action: AuthActionsType) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {...state, ...action.data}
        case GET_CAPTCHA:
            return {...state, captcha: action.url}
        default:
            return state
    }
}
export default authReducer

// action creator
export const getCaptchaUrl = (url: string) => ({type: GET_CAPTCHA, url} as const)
export const setUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) =>
    ({type: SET_AUTH_DATA, data: {userId, email, login, isAuth}} as const)

//thunk
export const getAuthUserData = () => async (dispatch: Dispatch) => {
    try {
        const result = await authMe.me()
        if (result.resultCode === 0) {
            const {email, id, login} = result.data
            dispatch(setUserData(id, email, login, true))
        }
    } catch (e) {
        console.warn(e.response.message)
    }

}
export const loginUser = (data: PropertySignType): ThunkAuthType => async (dispatch) => {
    const result = await authMe.signIn(data)
    if (result.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (result.resultCode === 10) {
            const data = await authMe.captcha()
            dispatch(getCaptchaUrl(data.url))
            dispatch(getAuthUserData())
        } else {
            const someError = result.messages[0].length > 0 ? result.messages[0] : 'some error'
            dispatch(stopSubmit('login', {_error: someError}))
        }
    }
}
export const logout = () => async (dispatch: Dispatch<AuthActionsType>) => {
    await authMe.signOut()
    dispatch(setUserData(null, null, null, false))
}


//type
type AuthActionsType = ReturnType<typeof getCaptchaUrl> | ReturnType<typeof setUserData>
type ThunkAuthType = ThunkAction<void, AppRootStateType, unknown, AuthActionsType | FormAction>
