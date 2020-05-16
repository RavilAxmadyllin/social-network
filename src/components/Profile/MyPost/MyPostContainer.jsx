import React from 'react';
import {addPostAC, updateNewPostAc} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";

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

