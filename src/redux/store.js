import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hello my darling', likesCounter: 12},
                {id: 2, message: 'Its my first post ', likesCounter: 0},
                {id: 3, message: 'hello my darling', likesCounter: 1}
            ],
            newPostText: 'it-сamasutra.com'
        },
        dialogsPage:{
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Dim'},
                {id: 3, name: 'Andrew'},
                {id: 4, name: 'Irina'},
                {id: 5, name: 'Marina'}
            ],
            messages: [
                {id: 1, message: 'new message '},
                {id: 2, message: 'message '},
                {id: 3, message: 'text '},
                {id: 4, message: 'lorem '},
                {id: 5, message: 'random '}
            ],
            newMessageBody: ''
        },
    },
    _callSubscriber() {
        console.log('work')
    },
    getState() {
        return this._state
    },
    subscribe (observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        profileReducer(this._state.profilePage, action)
        dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    },
};
window.store = store;
export default store
