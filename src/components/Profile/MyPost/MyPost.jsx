import React from 'react';
import styles from  './MyPost.module.css';
import Post from "./Post/Post";


const MyPost = (props) => {
    let post = props.profilePage.posts.map(el =>{
        return <Post message ={el.message} like={el.likesCounter}/>
    });
    let newPostElement = React.createRef();

    const addPost = ()=> {
        props.addPost()
    };
    const onPostChange = ()=>{
        let body = newPostElement.current.value;
        props.updateNewPostText(body);

    };

    return (
        <div className={styles.wrap}>
            <div className={styles.text}>
                <div>
                    <textarea ref={newPostElement}  value={props.profilePage.newPostText} onChange={onPostChange}/>
                </div>
            </div>
            <div>
                <button onClick={addPost}>add POST</button>
            </div>
            {post}
        </div>

    )
};

export default MyPost

