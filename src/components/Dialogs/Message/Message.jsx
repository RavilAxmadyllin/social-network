import React from 'react';
import styles from "./Message.module.css";



const Message = (props)=>{
    return(
        <div className={styles.card}>
            <div id={props.id} className={'item'}>{props.message}</div>
        </div>
    )
};
export default Message