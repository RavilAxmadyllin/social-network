import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfile} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


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
let AuthRedirectComponent =  withAuthRedirect(ProfileContainer)
let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
export default connect(mapStateToProps, {setProfile})(WithUrlDataContainerComponent)