import React from 'react'



const Message = (props)=>{
    return(
        <div>
            <div  id={props.id} className={'item'}> <b> {props.name} : </b> <span dangerouslySetInnerHTML={{__html: props.message}}></span></div>
        </div>
    )
};
export default Message
