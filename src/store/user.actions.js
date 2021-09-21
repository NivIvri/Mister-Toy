import { userService } from "../services/user.service.js";
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'

export function onLogin(credentials) {
    return async (dispatch) => {
        try {
            const user = await userService.login(credentials)
            dispatch({
                type: 'SET_USER',
                user
            })
            return user
        }
        catch (err) {
            showErrorMsg('Cannot signup')
            console.log('Cannot signup', err)
        }
    }
}

export function onSignup(credentials) {
    return async (dispatch) => {
        const user = await userService.signup(credentials)
        try {


            dispatch({
                type: 'SET_USER',
                user
            })
            showSuccessMsg('user sign up')
            return user

        }
        catch (err) {
            showErrorMsg('Cannot signup')
            console.log('Cannot signup', err)
        }
    }
}

export function onLogout() {
    return async (dispatch) => {
        try {
            await userService.logout()
            dispatch({
                type: 'SET_USER',
                user: null,
            })
            showSuccessMsg('user Logout')
        }
        catch (err) {
            showErrorMsg('Cannot logout')
            console.log('Cannot logout', err)
        }
    }
}
