import React from 'react'
import {connect} from 'react-redux'
import {follow, getUsersThunk, toggleIsFollowingProgress, unfollow} from '../../redux/users-reducer';
import Users from './Users'

import {
    followedInProgress,
    getPage,
    getPageSize,
    getTotalUsersCount, getUsers,
    isLoading,
} from '../../redux/users-selector'
import Pagination from '../pagination/Pagination'

class UserContainer extends React.Component{
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize )
    }
    onPageChanged =(pageNumber) => {
        this.props.getUsersThunk(pageNumber, this.props.pageSize)
    }
    render(){
        return <>
            <Pagination onPageChanged={this.onPageChanged}
                        currentPage={this.props.currentPage}
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}/>
            <Users
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                users={this.props.users}
                loading={this.props.isLoading}
                isFollowedInProgress={this.props.isFollowedInProgress}
                toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
            />
        </>
    }

}

const mapStateToProps = (state) =>{
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getPage(state),
        isLoading: isLoading(state),
        isFollowedInProgress: followedInProgress(state)
    }
}
const UsersContainer = connect(mapStateToProps,
    { unfollow, follow, toggleIsFollowingProgress,getUsersThunk})(UserContainer)

export default UsersContainer