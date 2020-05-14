import React from "react";
import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage,
    setIsLoading,
    setTotalUsersCount,
    setUsers,
    toggleIsFollowingProgress
} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Loading from "../../Loader/Loader";
import { userAPI} from "../../api/api";

class UserContainer extends React.Component{
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize )
    }
    onPageChanged =(pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }
    render(){
        return <>
            {this.props.isLoading ? <Loading /> : null}
            <Users
                follow={this.props.follow}
                users={this.props.users}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                isFollowedInProgress={this.props.isFollowedInProgress}
                toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}/>

        </>
    }

}

const mapStateToProps = (state) =>{
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        isFollowedInProgress: state.usersPage.isFollowedInProgress
    }

}
const UsersContainer = connect(mapStateToProps,
    { follow, toggleIsFollowingProgress, getUsers})(UserContainer)

export default UsersContainer