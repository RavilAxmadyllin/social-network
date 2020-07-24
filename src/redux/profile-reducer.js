import {profileAPI} from "../api/api";
import {stopSubmit} from 'redux-form';

const ADD_POST = 'ADD_POST'
const SET_PROFILE_USERS = 'SET_PROFILE_USERS'
const GET_PROFILE_STATUS = 'GET_PROFILE_STATUS'
const SET_PHOTOS = 'SET_PHOTOS'
const TOGGLE_PROFILE_MODE = 'TOGGLE_PROFILE_MODE'
const DELETE_POST = 'DELETE_POST'

let initialState = {
    profile: null,
    profileEditMode:false,
    status:'',
    posts: [
        {id: 1, message: 'hello my darling', likesCounter: 12},
        {id: 2, message: 'Its my first post ', likesCounter: 0},
        {id: 3, message: 'hello my darling', likesCounter: 1}
    ]
}
const profileReducer = (state = initialState, action) =>{
    let stateCopy = {...state}
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id:Math.random(),
                message:action.newPost,
                likesCounter:0
            };
            return {
                ...state,
                posts: [newPost, ...state.posts]
            }
        case DELETE_POST:return {
            ...state,
            posts: state.posts.filter(p => p.id !== action.id)
        }
        case SET_PHOTOS:return {
            ...state, profile: {...state.profile, photos:action.data}
        }
        case TOGGLE_PROFILE_MODE: return {
            ...state,
            profileEditMode: action.mode
        }
        case SET_PROFILE_USERS: return {...state, profile: action.data}
        case GET_PROFILE_STATUS:
            return{...state, status: action.status}
        default: return stateCopy
    }
}
export default profileReducer
export const addPostAC = (newPost) => ({type:ADD_POST, newPost })
export const removePostAC = (id) => ({type: 'DELETE_POST', id})
export const toggleProfileMode = (mode) =>({type: TOGGLE_PROFILE_MODE, mode})
export const setUsersProfile = (data) => ({type: SET_PROFILE_USERS, data})
export const getProfileStatus = (status) => ({type:GET_PROFILE_STATUS, status})
const updatePhotos = (data) =>({type:SET_PHOTOS, data})


export const editProfile = (data) =>(dispatch, getState) =>{
    profileAPI.editProfile(data).then(res =>{
        const userId = getState().auth.userId
        if(res.data.resultCode === 0){
            dispatch(setProfile(userId))
            dispatch(toggleProfileMode(false))
        }else {
            const someError = res.data.messages[0].length > 0 ? res.data.messages[0] : 'some error'
            if(res.data.resultCode === 1){
                dispatch(stopSubmit('profileEdit', {_error: someError}))
            }


        }
    })
}
export const setProfile = (userId)=>{
    return dispatch => {
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUsersProfile(response.data))
            })
    }
}
export const getStatus = (userId) => dispatch =>{
    profileAPI.getStatus(userId)
        .then(response =>{
            dispatch(getProfileStatus(response.data))
        })
}
export const updateStatus = (status) => dispatch =>{
    profileAPI.updateStatus(status)
        .then(response => {
            if(response.data.resultCode === 0) {
                return dispatch(getProfileStatus(status))
            }
        })
}

export const savePhotos = (file) => dispatch =>{
    profileAPI.changePhotos(file).then(res => {
        dispatch(updatePhotos(res.data.data.photos))
    })
}
