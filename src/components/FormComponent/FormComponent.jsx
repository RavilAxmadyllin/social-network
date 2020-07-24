import React from 'react'


export const Textarea = ({input, meta: { touched, error, warning }, ...props }) =>{

    return(
        <div>
            <textarea {...input} {...props}/>
            {touched && (error && <span>{error}</span>)}
        </div>
    )
}
export const Input = ({input, meta: { touched, error, warning }, ...props }) =>{

    return(
        <div>
            <input {...input} {...props}/>
            {touched && (error && <span>{error}</span>)}
        </div>
    )
}
