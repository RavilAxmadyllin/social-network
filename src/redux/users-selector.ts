import {createSelector} from 'reselect'
import {AppRootStateType} from './redux-store'

export const setUsers = (state: AppRootStateType) => {
    return state.usersPage.users
}
export const getUsers  = createSelector( setUsers, (users) => {
     return users.filter( u => u )
})
export const getPageSize = (state: AppRootStateType) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: AppRootStateType) => {
    return state.usersPage.totalUsersCount
}
export const getPage = (state: AppRootStateType) => {
    return state.usersPage.currentPage
}
export const isLoading = (state: AppRootStateType) => {
    return state.usersPage.isLoading
}
export const followedInProgress = (state: AppRootStateType) => {
    return state.usersPage.isFollowedInProgress
}
