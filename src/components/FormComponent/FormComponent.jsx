import React from 'react'


export const Textarea = ({input, meta: { touched, error, warning }, ...props }) =>{

    return(
        <div>
            <textarea {...input} {...props}/>
            {touched && (error && <span>{error}</span>)}


        </div>
    )
}
