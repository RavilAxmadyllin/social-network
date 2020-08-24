import React from 'react'
import {addPostAC} from '../../../redux/profile-reducer'
import MyPost from './MyPost'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        addPost: (body) => dispatch(addPostAC(body))
    }
}
const MyPostContainer =  connect(mapStateToProps, mapDispatchToProps)(MyPost)
export default MyPostContainer

