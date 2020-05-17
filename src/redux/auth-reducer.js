import {authMe} from "../api/api";

const SET_AUTH_DATA = 'SET_AUTH_DATA'

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth:true
}
const authReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SET_AUTH_DATA: return {...state, ...action.data, isAuth: true}
        default: return state
    }
}

export default authReducer
export const setUserData = (userId, email, login) => ({type:SET_AUTH_DATA, data: {userId, email, login}})

export const getAuthUserData = () => dispatch => {
    authMe.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {email, id, login} = response.data.data
                dispatch(setUserData(id, email, login ))
            }
        })
}




