import {createSelector} from 'reselect';

export const setUsers = (state) => {
    return state.usersPage.users
}
export const getUsersFollowing  = createSelector( setUsers, (users) => {
     return users.filter( u => u.photos.large !== null )
})
export const getPageSize = (state) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}
export const getPage = (state) => {
    return state.usersPage.currentPage
}
export const isLoading = (state) => {
    return state.usersPage.isLoading
}
export const followedInProgress = (state) => {
    return state.usersPage.isFollowedInProgress
}