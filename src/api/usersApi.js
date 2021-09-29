import { addUsersPresent, addUsersQuittin } from '../redux/userReducer'
import { URL_HOST } from '../config'

export const getUsersPresent = async (dispatch) => {
    try {
        let users = await fetch(`${URL_HOST}users/present`)
        users = await users.json()
        dispatch(addUsersPresent(users))
    } catch (error) {
        console.log(error)
    }   
}
export const getUsersQuittin = async (dispatch) => {
    try {
        let users = await fetch(`${URL_HOST}users/quittin`)
        users = await users.json()
        dispatch(addUsersQuittin(users))
    } catch (error) {
        console.log(error)
    }   
}