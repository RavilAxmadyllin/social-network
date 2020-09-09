import {DialogItemType, dialogsAPI, ReceivedMessageType} from '../api/api'
import {AppRootStateType} from './redux-store';
import {Dispatch} from 'redux';
import {ThunkAction} from 'redux-thunk';

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
//reducer
const dialogsReducer = (state: DialogReducerType = initialState, action: DialogsActionType) => {
    switch (action.type) {
        case GENERAL_MESSAGES:
            return {...state, generalMessage: [...state.generalMessage, ...action.messages]}
        case GET_MESSAGES:
            return {...state, messages: [...action.messages]}
        case GET_DIALOGS:
            return {...state, dialogs: action.dialogs}
        case GET_NEW_MESSAGES_COUNT:
            return {...state, newMessagesCount: action.count}
        case PUT_UP_DIALOG:
            return {
                ...state,
                dialogs: [
                    ...state.dialogs.filter(d => d.id === action.userId),
                    ...state.dialogs.filter(d => d.id !== action.userId)
                ]
            }
        case SET_SELECT_DIALOG:
            return {
                ...state,
                selectDialog: action.select
            }
        default:
            return state
    }
}
export default dialogsReducer
//action creator
export const getMessagesSuccess = (messages: Array<ReceivedMessageType>) => ({type: GET_MESSAGES, messages} as const)
export const getGeneralMessagesSuccess = (messages: Array<any>) => ({type: GENERAL_MESSAGES, messages} as const)
export const getNewMessageCount = (count: number) => ({type: GET_NEW_MESSAGES_COUNT, count} as const)
export const getDialogsSuccess = (dialogs: Array<DialogItemType>) => ({type: GET_DIALOGS, dialogs} as const)
export const putUpDialogs = (userId: string) => ({type: PUT_UP_DIALOG, userId} as const)
export const setSelectDialog = (select: boolean) => ({type: SET_SELECT_DIALOG, select} as const)

//thunk
export const getDialogs = (): ThunkDialogType => async (dispatch) => {
    const result = await dialogsAPI.getDialogs()
    dispatch(getDialogsSuccess(result))
    dispatch(newMessageCount())
}
export const startDialog = (userId: string) => async (dispatch: Dispatch) => {
    await dialogsAPI.startDialog(userId)
}
export const getMessages = (userId: string): ThunkDialogType => async (dispatch) => {
    const result = await dialogsAPI.getMessage(userId)
    dispatch(getMessagesSuccess(result.data.items))
    dispatch(newMessageCount())
}
export const sendMessage = (userId: string, message: string): ThunkDialogType => {
    return async (dispatch, getState: () => AppRootStateType) => {
        await dialogsAPI.sendMessage(userId, message)
        dispatch(getMessages(userId))
        let dialog = getState().dialogsPage.dialogs.find(d => d.id === userId)
        dialog ? dispatch(putUpDialogs(userId)) : dispatch(getDialogs())
    };
}
export const newMessageCount = () => async (dispatch: Dispatch) => {
    const count = await dialogsAPI.getNewMessageCount()
    dispatch(getNewMessageCount(count))
}
//initialized dialog
export const initializedDialog = (userId: string): ThunkDialogType => (dispatch) => {
    if (userId !== 'ws' && userId) {
        dispatch(startDialog(userId))
        dispatch(getMessages(userId))
        dispatch(setSelectDialog(true))
    }
    dispatch(getDialogs())
}
export const updateDialog = (userId: string): ThunkDialogType => (dispatch) => {
    if (userId !== 'ws') {
        dispatch(getMessages(userId))
        dispatch(setSelectDialog(true))
    } else {
        dispatch(setSelectDialog(false))
    }
}
// ws
export const generalChat = (messages: Array<any>) => (dispatch: Dispatch) => {
    dispatch(getGeneralMessagesSuccess(messages))
}

// type
type DialogReducerType = {
    dialogs: Array<DialogItemType>
    messages: Array<ReceivedMessageType>
    generalMessage: Array<any>
    selectDialog: boolean
    newMessagesCount: number
}
type DialogsActionType = ReturnType<typeof getMessagesSuccess>
    | ReturnType<typeof getGeneralMessagesSuccess>
    | ReturnType<typeof getNewMessageCount>
    | ReturnType<typeof getDialogsSuccess>
    | ReturnType<typeof putUpDialogs>
    | ReturnType<typeof setSelectDialog>
type ThunkDialogType = ThunkAction<void, AppRootStateType, unknown, DialogsActionType>

