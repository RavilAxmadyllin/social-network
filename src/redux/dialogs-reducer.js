import {dialogsAPI} from '../api/api'

const GET_MESSAGES = 'SOCIAL_NETWORK/DIALOGS/GET_MESSAGES'
const GENERAL_MESSAGES = 'SOCIAL_NETWORK/DIALOGS/GENERAL_MESSAGES'
const GET_DIALOGS = 'SOCIAL_NETWORK/DIALOGS/GET_DIALOGS'
const PUT_UP_DIALOG = 'SOCIAL_NETWORK/DIALOGS/PUT_UP_DIALOG'
const SET_SELECT_DIALOG = 'SOCIAL_NETWORK/DIALOGS/SET_SELECT_DIALOG'
const GET_NEW_MESSAGES_COUNT = 'SOCIAL_NETWORK/DIALOGS/GET_NEW_MESSAGES_COUNT'
let initialState = {
    dialogs: [],
    messages: [],
    generalMessage: [],
    selectDialog: false,
    newMessagesCount: 0

}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GENERAL_MESSAGES:
            return {
                ...state,
                generalMessage: [...state.generalMessage, ...action.messages]
            }
        case GET_MESSAGES:
            return {
                ...state,
                messages: [...action.messages]
            }
        case GET_DIALOGS:
            return  {
                ...state,
                dialogs: action.dialogs
            }
        case GET_NEW_MESSAGES_COUNT:return {
            ...state,
            newMessagesCount: action.count
        }
        case PUT_UP_DIALOG:
            return  {
                ...state,
                dialogs: [
                    ...state.dialogs.filter(d => d.id === action.userId ),
                    ...state.dialogs.filter(d => d.id !== action.userId )
                ]
            }
        case SET_SELECT_DIALOG: return {
            ...state,
            selectDialog: action.select
        }
        default:return state
    }
}
export default dialogsReducer
export const getMessagesSuccess = (messages) => ({ type:GET_MESSAGES, messages })
export const getGeneralMessagesSuccess = (messages) => ({ type:GENERAL_MESSAGES, messages })
export const getNewMessageCount = (count) => ({ type:GET_NEW_MESSAGES_COUNT, count })
export const getDialogsSuccess = (dialogs) => ({ type:GET_DIALOGS, dialogs })
export const putUpDialogs = (userId) => ({ type:PUT_UP_DIALOG, userId })
export const setSelectDialog = (select) => ({ type:SET_SELECT_DIALOG, select })


export const getDialogs = () =>async (dispatch) => {
    const result = await dialogsAPI.getDialogs()
    dispatch(getDialogsSuccess(result))
    dispatch(newMessageCount())
}
export const startDialog = (userId) => async (dispatch) => {
    await dialogsAPI.startDialog(userId)
}
export const getMessages = (userId) => async (dispatch) => {
    const result = await dialogsAPI.getMessage(userId)
    dispatch(getMessagesSuccess(result.items))
    dispatch(newMessageCount())
}
export const sendMessage = (userId, message) => async (dispatch, getState) => {
    await dialogsAPI.sendMessage(userId, message)
    dispatch(getMessages(userId))
    const dialog = getState().dialogsPage.dialogs.find(d => d.id === userId)
    dialog ? dispatch(putUpDialogs(userId)) : dispatch(getDialogs())
}
export const newMessageCount = () => async (dispatch) => {
    const count =  await dialogsAPI.getNewMessageCount()
    dispatch(getNewMessageCount(count))
}
export const initializedDialog = (userId) => (dispatch) => {
    if(userId !== 'ws' && userId) {
        dispatch(startDialog(userId))
        dispatch(getMessages(userId))
        dispatch(setSelectDialog(true))
    }
    dispatch(getDialogs())
}
export const updateDialog = (userId) => dispatch => {
    if(userId !== 'ws') {
        dispatch(getMessages(userId))
        dispatch(setSelectDialog(true))
    }else {
        dispatch(setSelectDialog(false))
    }
}
export const generalChat = (messages) => (dispatch) => {
    dispatch(getGeneralMessagesSuccess( messages))
}