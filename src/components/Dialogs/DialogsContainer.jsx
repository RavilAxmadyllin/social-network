import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        updateNewMessageBodyCreator: (body) => dispatch(updateNewMessageBodyCreator(body)),
        sendMessageCreator: () => dispatch(sendMessageCreator())
    }
}
const RedirectDialogCon =  withAuthRedirect(Dialogs)
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(RedirectDialogCon)

export default DialogsContainer
