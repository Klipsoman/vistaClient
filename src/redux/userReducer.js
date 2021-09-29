const ADD_USERS_PRESENT = "ADD_USERS_PRESENT"
const ADD_USERS_QUITTIN = "ADD_USERS_QUITTIN"
const LOOK_USER_INFO = "LOOK_USER_INFO"
const ACTIVE_LIST = "ACTIVE_LIST"

const initialState = {
    presentList: [],
    quittinList: [],
    userInfo: {},
    activeList: "present"
}

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_USERS_PRESENT:
        return {...state,
            presentList: [...action.payload]}
        case ADD_USERS_QUITTIN:
        return {...state,
            quittinList: [...action.payload]}
        case LOOK_USER_INFO:
        return {...state,
            userInfo: {...action.payload}}
        case ACTIVE_LIST:
        return {...state,
            activeList: action.payload
        }
        default:
         return {...state}
    }
}

export const addUsersPresent = (payload) => ({type: ADD_USERS_PRESENT, payload})
export const addUsersQuittin = (payload) => ({type: ADD_USERS_QUITTIN, payload})
export const lookUserInfo = (payload) => ({type: LOOK_USER_INFO, payload})
export const setActiveList = (payload) => ({type: ACTIVE_LIST, payload})