import React from "react";
import styles from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";

const Dialogs = (props)=> {

    let dialog = props.dialogsPage.dialogs.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>);
    let message = props.dialogsPage.messages.map(el => <Message key ={el.id} message={el.message}/>);
    const onSendMessageClick = () => {
        props.sendMessageCreator()
    }
    const onChangeBodyText = (e) =>{
        let body = e.currentTarget.value
        props.updateNewMessageBodyCreator(body)
    }
    return(
        <div className={styles.dialogs}>
            <div className={styles.item}>
                {dialog}
            </div>
            <div className={styles.message}>
                <div> {message} </div>
                <div>
                    <textarea
                        value={props.dialogsPage.newMessageBody}
                        onChange={onChangeBodyText}
                        placeholder={'enter u text'}/>
                </div>
                <div><button onClick={onSendMessageClick}>add</button></div>
            </div>
        </div>
    )
};
export default Dialogs