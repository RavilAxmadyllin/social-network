import {userAPI, UserType} from '../api/api'
import {Dispatch} from 'redux'

const FOLLOW = 'SOCIAL_NETWORK/USERS/FOLLOW'
const SET_STATE = 'SOCIAL_NETWORK/USERS/SET_STATE'
const SET_CURRENT_PAGE = 'SOCIAL_NETWORK/USERS/SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SOCIAL_NETWORK/USERS/SET_TOTAL_COUNT'
const TOGGLE_IS_LOADING = 'SOCIAL_NETWORK/USERS/TOGGLE_IS_LOADING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'SOCIAL_NETWORK/USERS/TOGGLE_IS_FOLLOWING_PROGRESS'

const initialState = {
    users: [] as Array<UserType>,
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: true,
    isFollowedInProgress: [2] as Array<number>,
}

const usersReducer = (state: UserReducerType = initialState, action: UsersReducerAction) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => u.id === action.userId ?
                    {...u, followed: !u.followed} : u)
            }
        case SET_STATE:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.total}
        case TOGGLE_IS_LOADING:
            return {...state, isLoading: action.bool}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, isFollowedInProgress: action.isFetching ?
                    [...state.isFollowedInProgress, action.userId] :
                    state.isFollowedInProgress.filter(id => id !== action.userId)

            }
        default:
            return state
    }
}
export default usersReducer
// action creator
const setTotalUsersCount = (total: number) => ({type: SET_TOTAL_COUNT, total} as const)
const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
const followSucces = (userId: number) => ({type: FOLLOW, userId} as const)
const setUsers = (users: Array<UserType>) => ({type: SET_STATE, users} as const)
const setIsLoading = (bool: boolean) => ({type: TOGGLE_IS_LOADING, bool} as const)
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number) =>
    ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId} as const)

// thunk
export const getUsersThunk = (page: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(setIsLoading(true))
    const result = await userAPI.getUsers(page, pageSize)
    dispatch(setCurrentPage(page))
    dispatch(setTotalUsersCount(result.totalCount))
    dispatch(setUsers(result.items))
    dispatch(setIsLoading(false))
}
export const unfollow = (userId: number) => async (dispatch: Dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    const result = await userAPI.unfollow(userId)
    if (result.resultCode === 0) {
        dispatch(followSucces(userId))
    }
    dispatch(toggleIsFollowingProgress(false, userId))
}
export const follow = (userId: number) => async (dispatch: Dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    const result = await userAPI.follow(userId)
    if (result.resultCode === 0) {
        dispatch(followSucces(userId))
    }
    dispatch(toggleIsFollowingProgress(false, userId))


}

//type
type UserReducerType = typeof initialState
type UsersReducerAction = ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof followSucces>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setIsLoading>
    | ReturnType<typeof toggleIsFollowingProgress>
