import React from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UserContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initialized} from "./redux/app-reducer";
import Loading from "./Loader/Loader";


class App extends React.Component {
    componentDidMount() {
    this.props.initialized()
    }

    render() {

        if(!this.props.init){
            return <Loading/>
        }
        return (
            <div className='wrap'>
                <HeaderContainer/>

                <div className="content">
                    <Nav/>
                    <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                    <Route path={'/message'} render={() => <DialogsContainer/>}/>
                    <Route path={'/login'} render={() => <Login/>}/>
                    <Route path={'/users'} render={() => <UsersContainer/>}/>
                </div>
            </div>
        )
    }
}
const mstp = (state) =>({
    init: state.app.init
})

export default connect(mstp, {initialized})(App);
