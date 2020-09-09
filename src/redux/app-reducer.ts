import {getAuthUserData} from './auth-reducer'
import {ThunkAction} from 'redux-thunk'
import {AppRootStateType} from './redux-store'

const initialState = {
    init: false
}

const appReducer = (state = initialState, action: AppActionsType) => {
    switch (action.type) {
        case 'SOCIAL_NETWORK_INITIALIZED_SUCCESS':
            return {
                ...state,
                init: true
            }
        default:
            return state
    }
}
export default appReducer
//action
const initializedSuccess = () => ({type: 'SOCIAL_NETWORK_INITIALIZED_SUCCESS'} as const)

//thunk
export const initialized = ():AppThunkType => async (dispatch) => {
    await dispatch(getAuthUserData())
    await dispatch(initializedSuccess())
}
//type
type AppThunkType = ThunkAction<void, AppRootStateType, unknown, AppActionsType>
type AppActionsType = ReturnType<typeof initializedSuccess>
