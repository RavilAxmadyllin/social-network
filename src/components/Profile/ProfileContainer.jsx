import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfile} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){ userId = 7399}
        this.props.setProfile(userId)
    }
    render() {
        // if(!this.props.isAuth)return <Redirect to={'/login'} />
        return <Profile profile={this.props.profile} />
    }
}
const mapStateToProps = (state) =>{
    return {
        profile: state.profilePage.profile
    }
}

export default compose(
    connect(mapStateToProps, {setProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)