import React from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UserContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = (props) =>{
    return(
        <div className='wrap'>
            <div className="container">
                <HeaderContainer/>
                <div className="content">
                    <Nav/>
                    <Route path={'/profile/:userId?'} render={ () => <ProfileContainer />} />
                    <Route path={'/message'} render={ () => <DialogsContainer/> } />
                    <Route path={'/news'} />
                    <Route path={'/photo'} />
                    <Route path={'/users'} render={ () => <UsersContainer/>} />
                </div>
            </div>
        </div>
    )
}

export default App;
