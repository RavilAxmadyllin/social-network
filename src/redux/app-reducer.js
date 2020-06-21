import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCES = 'INITIALIZED_SUCCES'
const initialState = {
    init: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCES: return {
            ...state,
            init: true
        }
        default:return state
    }
}
export default appReducer
const initializedSucces = () => ({type: INITIALIZED_SUCCES})


export const initialized = ()  =>async dispatch => {
    await dispatch(getAuthUserData())
    await dispatch(initializedSucces())
}