import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST'
const SET_PROFILE_USERS = 'SET_PROFILE_USERS'
const GET_PROFILE_STATUS = 'GET_PROFILE_STATUS'

let initialState = {
    profile: null,
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
        case SET_PROFILE_USERS: return {...state, profile: action.data}
        case GET_PROFILE_STATUS:
            return{...state, status: action.status}
        default: return stateCopy
    }
}
export default profileReducer
export const addPostAC = (newPost) => ({type:ADD_POST, newPost })
export const setUsersProfile = (data) => ({type: SET_PROFILE_USERS, data})
export const getProfileStatus = (status) => ({type:GET_PROFILE_STATUS, status})

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
            if(response.data.resultCode === 0) return dispatch(getProfileStatus(status))
        })
}
