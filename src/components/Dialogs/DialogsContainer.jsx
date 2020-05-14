import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {dialogsPage: state.dialogsPage}
}
const mapDispatchToProps = (dispatch) =>{
    return{
        updateNewMessageBodyCreator: (body) => dispatch(updateNewMessageBodyCreator(body)),
        sendMessageCreator: () => dispatch({type:'SEND_MESSAGE' })
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer



// const DialogsContainer = (props)=> {
//     const onSendMessageClick = () => {
//         props.dispatch(sendMessageCreator())
//     }
//     const onChangeBodyText = (body) => {
//         props.dispatch(updateNewMessageBodyCreator(body))
//     }
//     return <Dialogs
//         store={props.store.dialogsPage}
//         updateNewMessageBodyCreator={onChangeBodyText}
//         sendMessageCreator={onSendMessageClick}
//     />
//
// }