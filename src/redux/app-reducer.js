import {getAuthUserData} from './auth-reducer'

const INITIALIZED_SUCCESS = 'SOCIAL_NETWORK_INITIALIZED_SUCCESS'
const initialState = {
    init: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: return {
            ...state,
            init: true
        }
        default:return state
    }
}
export default appReducer
const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})


export const initialized = ()  =>async dispatch => {
    await dispatch(getAuthUserData())
    await dispatch(initializedSuccess())
}