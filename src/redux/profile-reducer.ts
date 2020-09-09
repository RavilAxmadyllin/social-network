import {PhotosType, profileAPI, ProfileType} from '../api/api'
import {FormAction, stopSubmit} from 'redux-form'
import {Dispatch} from 'redux';
import {AppRootStateType} from './redux-store';
import {ThunkAction} from 'redux-thunk';

const ADD_POST = 'SOCIAL_NETWORK/PROFILE/ADD_POST'
const SET_PROFILE_USERS = 'SOCIAL_NETWORK/PROFILE/SET_PROFILE_USERS'
const GET_PROFILE_STATUS = 'SOCIAL_NETWORK/PROFILE/GET_PROFILE_STATUS'
const SET_PHOTOS = 'SOCIAL_NETWORK/PROFILE/SET_PHOTOS'
const TOGGLE_PROFILE_MODE = 'SOCIAL_NETWORK/PROFILE/TOGGLE_PROFILE_MODE'
const DELETE_POST = 'SOCIAL_NETWORK/PROFILE/DELETE_POST'

let initialState = {
    profile: null as ProfileType | null,
    profileEditMode: false,
    status: '',
    posts: [{id: 1, message: 'hello my darling', likesCounter: 12},] as Array<PostType>
}
//reducer
const profileReducer = (state: ProfileReducerType = initialState, action: ProfileActionsType) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {id: Math.random(), message: action.newPost, likesCounter: 0}
            return {...state, posts: [newPost, ...state.posts]}
        }
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.id)}
        case SET_PHOTOS:
            return {...state, profile: {...state.profile, photos: action.url}}
        case TOGGLE_PROFILE_MODE:
            return {...state, profileEditMode: action.mode}
        case SET_PROFILE_USERS:
            return {...state, profile: action.data}
        case GET_PROFILE_STATUS:
            return {...state, status: action.status}
        default:
            return state
    }
}
export default profileReducer
//action creator
export const addPost = (newPost: PostType) => ({type: ADD_POST, newPost} as const)
export const removePost = (id: number) => ({type: DELETE_POST, id} as const)
export const toggleProfileMode = (mode: boolean) => ({type: TOGGLE_PROFILE_MODE, mode} as const)
export const setUsersProfile = (data: ProfileType) => ({type: SET_PROFILE_USERS, data} as const)
export const getProfileStatus = (status: string) => ({type: GET_PROFILE_STATUS, status} as const)
const updatePhotos = (url: PhotosType) => ({type: SET_PHOTOS, url} as const)

//thunk
export const editProfile = (data: ProfileType): ProfileThunkType => async (dispatch, getState) => {
    const result = await profileAPI.editProfile(data)
    const userId = getState().auth.userId
    if (result.resultCode === 0) {
        userId !== null && dispatch(setProfile(userId))
        dispatch(toggleProfileMode(false))
    } else {
        const someError = result.messages[0].length > 0 ? result.messages[0] : 'some error'
        if (result.resultCode === 1) {
            dispatch(stopSubmit('profileEdit', {_error: someError}))
        }
    }

}
export const setProfile = (userId: number) => async (dispatch: Dispatch) => {
    const result = await profileAPI.getProfile(userId)
    dispatch(setUsersProfile(result))

}

export const getStatus = (userId: number) => async (dispatch: Dispatch) => {
    const result = await profileAPI.getStatus(userId)
    dispatch(getProfileStatus(result))
}
export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    const result = await profileAPI.updateStatus(status)
    if (result.resultCode === 0) {
        dispatch(getProfileStatus(status))
    }
}

export const savePhotos = (file: File) => async (dispatch: Dispatch) => {
    const result = await profileAPI.changePhotos(file)
    dispatch(updatePhotos(result.data.photos))
}

//type
type ProfileReducerType = typeof initialState
type PostType = { id: number, message: string, likesCounter: number }
type ProfileThunkType = ThunkAction<void, AppRootStateType, unknown, ProfileActionsType | FormAction>

type ProfileActionsType = ReturnType<typeof addPost>
    | ReturnType<typeof removePost>
    | ReturnType<typeof toggleProfileMode>
    | ReturnType<typeof setUsersProfile>
    | ReturnType<typeof setUsersProfile>
    | ReturnType<typeof getProfileStatus>
    | ReturnType<typeof updatePhotos>
