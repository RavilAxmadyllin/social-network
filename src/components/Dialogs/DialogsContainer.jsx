import React from 'react'
import {
    generalChat,
    initializedDialog, sendMessage, setSelectDialog,
    updateDialog
} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs'
import {connect} from 'react-redux'
import {compose} from 'redux'

class DialogsContainer extends React.Component {
    componentDidMount() {
        this.props.initializedDialog(this.props.userId)
        this.webSocket = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
        this.webSocket.onmessage = (event) => {
            this.props.generalChat(JSON.parse(event.data))
        }

    }
    componentDidUpdate(prevProps) {
        if (prevProps.userId !== this.props.userId) {
            this.props.updateDialog(this.props.userId)
        }
    }
    senMessage = (value) => {
        this.webSocket.send(value)
    }
    render() {
        return <Dialogs {...this.props} senMessage={this.senMessage} />
    }
}
const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, { initializedDialog, updateDialog, sendMessage, setSelectDialog, generalChat})
)(DialogsContainer)

