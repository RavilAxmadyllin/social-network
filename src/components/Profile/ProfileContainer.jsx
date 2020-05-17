import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, setProfile, updateStatus} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){ userId = 7399}
        this.props.setProfile(userId)
        this.props.getStatus(userId)
    }
    render() {
        return <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
    }
}
const mapStateToProps = (state) =>{
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose(
    connect(mapStateToProps, {setProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)