import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){ userId = 7399}
        this.props.setProfile(userId)
    }
    render() {
        return <Profile profile={this.props.profile} />
    }
}
const mapStateToProps = (state) =>{
    return {
        profile: state.profilePage.profile
    }
}
let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setProfile})(WithUrlDataContainerComponent)