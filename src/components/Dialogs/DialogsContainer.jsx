import React from 'react'
import {
    initializedDialog, sendMessage,
    updateDialog
} from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'
import {compose} from 'redux'

class DialogsContainer extends React.Component {
    componentDidMount() {
        this.props.initializedDialog(this.props.userId)
    }
    componentDidUpdate(prevProps) {
        if (prevProps.userId !== this.props.userId) {
            this.props.updateDialog(this.props.userId)
        }
    }

    render() {
        return <Dialogs {...this.props} />
    }
}
const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, { initializedDialog, updateDialog, sendMessage}),
)(DialogsContainer)

