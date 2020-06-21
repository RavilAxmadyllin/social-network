import React from 'react';
import styles from  './MyPost.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../utils/validate";
import {Textarea} from "../../FormComponent/FormComponent";

const max20 = maxLength(20)
const AddPost = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field name={'newPostText'} component={Textarea}
                   type={'text'} placeholder={'Введите текст'}
            validate={[required, max20]}/>
            <button>add post</button>
        </form>
    )
}
const AddPostForm = reduxForm({form: 'addPostForm'})(AddPost)



const MyPost = (props) => {
    let post = props.profilePage.posts.map(el =>{
        return <Post key={el.id} message ={el.message} like={el.likesCounter}/>
    });

    const addPost = (value)=> {
        props.addPost(value.newPostText)
        value.newPostText = ''
    };

    return (
        <div className={styles.wrap}>
            <div className={styles.text}>
                <AddPostForm onSubmit={addPost}/>
            </div>
            {post}
        </div>

    )
};

export default MyPost

