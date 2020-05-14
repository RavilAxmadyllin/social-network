import React from 'react';
import {addPostAC, updateNewPostAc} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/dialogs-reducer";


// const MyPostContainer = (props) => {
//     const addPost = ()=> {
//         props.dispatch(addPostAC())
//     };
//     const onPostChange = (body)=>{
//         props.dispatch(updateNewPostAc(body))
//     };
//
//     return <MyPost updateNewPostText={onPostChange} addPost={addPost}  store={props.store.profilePage}/>
// };
const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        updateNewPostText: (body) => dispatch(updateNewPostAc(body)),
        addPost: () => dispatch(addPostAC())
    }
}
const MyPostContainer =  connect(mapStateToProps, mapDispatchToProps)(MyPost)
export default MyPostContainer

