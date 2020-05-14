const ADD_POST = 'ADD_POST'
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT'
const SET_PROFILE_USERS = 'SET_PROFILE_USERS'

let initialState = {
    profile: null,
    posts: [
        {id: 1, message: 'hello my darling', likesCounter: 12},
        {id: 2, message: 'Its my first post ', likesCounter: 0},
        {id: 3, message: 'hello my darling', likesCounter: 1}
    ],
    newPostText: 'it-сamasutra.com'
}
const profileReducer = (state = initialState, action) =>{
    let stateCopy = {...state}
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id:5,
                message:state.newPostText,
                likesCounter:0
            };

            stateCopy.posts.unshift(newPost);
            stateCopy.newPostText = '';
            return stateCopy
        case UPDATE_POST_TEXT:
            stateCopy.newPostText = action.newText;
            return stateCopy
        case SET_PROFILE_USERS: return {...state, profile: action.data}
        default: return stateCopy
    }
}
export default profileReducer
export const addPostAC = () => ({type:ADD_POST })
export const updateNewPostAc = (newText) => ({type:UPDATE_POST_TEXT, newText: newText})
export const setUsersProfile = (data) => ({type: SET_PROFILE_USERS, data})
