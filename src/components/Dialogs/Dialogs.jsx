import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {Field, reduxForm} from 'redux-form'

const DialogMessage = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'} type={'text'} placeholder={'введите сообщение'} name={'newMessageBody'}  />
            <div><button>add</button></div>
        </form>
    )
}
const DialogMessageForm = reduxForm({form: 'dialogMessageForm'})(DialogMessage)

const Dialogs = (props)=> {

    let dialog = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} userName={d.userName} id={d.id} photo={d.photos.small}/>)
    let message = props.dialogsPage.messages.map(m => <Message key ={m.id} name={m.senderName} message={m.body}/>)
    const generalChat = props.dialogsPage.generalMessage
        .map((m, i) => <div className={'text'} key={m + i}><b>{m.userName} :</b> {m.message}</div>)

    const onSendMessage = (value) => {
        props.sendMessage(props.userId, value.newMessageBody)
        value.newMessageBody = ''
    }
    const sendGeneralMessage = (value) => {
        props.senMessage(value.newMessageBody)
        value.newMessageBody = ''
    }


    return(
        <div className={styles.dialogs}>
            <div className={styles.item}>
                <DialogItem userName={'Общий чат'}/>
                {dialog}
            </div>
            <div className={styles.message} >
                {!props.dialogsPage.selectDialog ?
                    <>
                        <div>{generalChat}</div>
                        <DialogMessageForm onSubmit={sendGeneralMessage}/>
                    </> :
                    <>
                        <div> {message} </div>
                        <DialogMessageForm onSubmit={onSendMessage}/>
                    </>}
            </div>
        </div>
    )
}
export default Dialogs


