import React from "react";


const Post = (props)=>{
    return (
        <div>
            <div><img src="https://via.placeholder.com/40" alt=""/> Name profile</div>
            <div>{props.message}</div>
            <div><span>like</span><span>{props.like}</span></div>
        </div>
    )
};


export default Post