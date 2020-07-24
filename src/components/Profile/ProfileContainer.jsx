import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {editProfile, getStatus, savePhotos, setProfile, toggleProfileMode, updateStatus} from '../../redux/profile-reducer';
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component{
    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId
        if(!userId) userId = this.props.userId
        this.props.setProfile(userId)
        this.props.getStatus(userId)
    }


    render() {
        return <Profile
            profile={this.props.profile} status={this.props.status}
            isOwner={!this.props.match.params.userId}
            savePhotos={this.props.savePhotos}
            updateStatus={this.props.updateStatus}
            mode={this.props.mode} toggleProfileMode={this.props.toggleProfileMode}
            editProfile={this.props.editProfile}/>
    }
}
const mapStateToProps = (state) =>{
    return {
        userId: state.auth.userId,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        mode: state.profilePage.profileEditMode,
    }
}
export default compose(
    connect(mapStateToProps, {setProfile, getStatus, updateStatus,
        savePhotos, toggleProfileMode, editProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)