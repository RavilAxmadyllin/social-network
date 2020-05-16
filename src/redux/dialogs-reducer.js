const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const  SEND_MESSAGE = 'SEND_MESSAGE'
let initialState = {
    dialogs: [
        // {id: 1, name: 'Dimych'},
        // {id: 2, name: 'Dim'},
        // {id: 3, name: 'Andrew'},
        // {id: 4, name: 'Irina'},
        // {id: 5, name: 'Marina'}
    ],
    messages: [
        // {id: 1, message: 'new message '},
        // {id: 2, message: 'message '},
        // {id: 3, message: 'text '},
        // {id: 4, message: 'lorem '},
        // {id: 5, message: 'random '}
    ],
    newMessageBody: ''
}

const dialogsReducer = (state =initialState, action) => {
    let stateCopy = {...state}
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {...state, newMessageBody: action.body}
        case SEND_MESSAGE:
            let body = stateCopy.newMessageBody
            stateCopy={...state,
                newMessageBody: '',
                messages: [...state.messages,{id: 6, message: body}] }
            return stateCopy
        default:return stateCopy
    }
}
export default dialogsReducer
export const sendMessageCreator = () => ({type:SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({type:UPDATE_NEW_MESSAGE_BODY, body:body})