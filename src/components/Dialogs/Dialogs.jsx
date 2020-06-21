import React from "react";
import styles from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";

const DialogMessage = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'} type={'text'} placeholder={'введите сообщение'} name={'newMessageBody'} />
            <div><button>add</button></div>
        </form>
    )
}
const DialogMessageForm = reduxForm({form: 'dialogMessageForm'})(DialogMessage)

const Dialogs = (props)=> {
    let dialog = props.dialogsPage.dialogs.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>);
    let message = props.dialogsPage.messages.map(el => <Message key ={el.id} message={el.message}/>);
    const onSendMessage = (value) => {
        props.sendMessageCreator(value.newMessageBody)
        value.newMessageBody = ''
    }
    return(
        <div className={styles.dialogs}>
            <div className={styles.item}>
                {dialog}
            </div>
            <div className={styles.message}>
                <div> {message} </div>
                <DialogMessageForm onSubmit={onSendMessage}/>
            </div>
        </div>
    )
};
export default Dialogs


