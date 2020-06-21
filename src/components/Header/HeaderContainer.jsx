import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/auth-reducer";



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
export default connect(setStateToProps, {getAuthUserData, logout})(HeaderContainer)