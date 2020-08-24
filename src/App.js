import React, {Suspense} from 'react'
import './App.css'
import Nav from './components/Nav/Nav'
import {Redirect, Route, Switch} from 'react-router-dom'
import UsersContainer from './components/Users/UserContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login'
import {connect} from 'react-redux'
import {initialized} from './redux/app-reducer'
import Loading from './Loader/Loader'
const DialogsLazy = React.lazy(() => import('./components/Dialogs/DialogsContainer'))


class App extends React.Component {
    componentDidMount() {
        this.props.initialized()
    }
    render() {
        if(!this.props.init){
            return <Loading/>
        }
        return <div className={'App'}>
            <HeaderContainer/>
            <div className='content'>
                <Nav newMessagesCount={this.props.newMessagesCount}/>
                <main>
                    <Switch>
                        <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                        <Route path={'/dialogs/:userId?'} render={(props) => <Suspense fallback={<Loading />}>
                            <DialogsLazy userId={props.match.params.userId}/>
                        </Suspense>}/>
                        <Route path={'/login'} render={() => <Login/>}/>
                        <Route path={'/users'} render={() => <UsersContainer/>}/>
                        <Route path={'*'} render={() => <div>404</div>}/>
                    </Switch>
                </main>
            </div>
        </div>

    }
}
const mstp = (state) =>({
    init: state.app.init,
    newMessagesCount: state.dialogsPage.newMessagesCount
})

export default connect(mstp, {initialized})(App)
