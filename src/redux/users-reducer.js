import {userAPI} from "../api/api";

const FOLLOW = 'FOLLOW'
const SET_STATE = 'SET_STATE'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users:[],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 3,
    isLoading: true,
    isFollowedInProgress:[2],
}
const usersReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed: !u.followed}
                    }
                    return u
                })}
        case SET_STATE: return {...state, users: action.users};
        case SET_CURRENT_PAGE: return {...state, currentPage: action.currentPage};
        case SET_TOTAL_COUNT: return {...state, totalUsersCount: action.total}
        case TOGGLE_IS_LOADING: return {...state, isLoading: action.param}
        case TOGGLE_IS_FOLLOWING_PROGRESS: return  {
            ...state,
            isFollowedInProgress: action.isFetching ?
                [...state.isFollowedInProgress, action.userId]:
                state.isFollowedInProgress.filter( id => id !== action.userId)

        }
        default: return state
    }
}

export default usersReducer
export const setTotalUsersCount = (total) => ({type: SET_TOTAL_COUNT, total})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const followSucces = (userId) => ({ type: FOLLOW, userId})
export const setUsers = (users) => ({ type: SET_STATE, users})
export const setIsLoading = (param) =>({type: TOGGLE_IS_LOADING, param})
export const toggleIsFollowingProgress = (isFetching, userId) => ({type:TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})



export const  getUsersThunk = (currentPage, pageSize) => {

    return dispatch =>{
        dispatch(setIsLoading(true))
        userAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setCurrentPage(currentPage))
                dispatch(setTotalUsersCount(data.totalCount))
                dispatch(setUsers(data.items))
                dispatch(setIsLoading(false))
            })
    }
}

export const unfollow = (userId) =>{
    return dispatch => {
        userAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSucces(userId))
                }
                dispatch(toggleIsFollowingProgress(false, userId))
            })
    }
}

export const follow = (userId) =>{
    return dispatch => {
        userAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSucces(userId))
                }
                dispatch(toggleIsFollowingProgress(false, userId))
            })
    }
}

