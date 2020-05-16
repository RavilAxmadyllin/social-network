import React from 'react'
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";
import {authMe} from "../../api/api";


class HeaderContainer extends React.Component{
    componentDidMount() {
        this.props.getAuthUserData()
    }
    render() {
        return <Header {...this.props} isAuth={this.props.isAuth}/>
    }
}
const setStateToProps = (state) =>({
    isAuth: state.auth.isAuth,
    email: state.auth.email
})
export default connect(setStateToProps, {getAuthUserData})(HeaderContainer)