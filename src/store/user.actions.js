import { userService } from "../services/user.service.js";
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'

export function onLogin(credentials) {
    return (dispatch) => {
        return userService.login(credentials)
            .then(user => {
                dispatch({
                    type: 'SET_USER',
                    user
                })

                return user
            }

            )
            .catch(err => {
                showErrorMsg('Cannot login')
                console.log('Cannot login', err)
            })
    }
}

export function onSignup(credentials) {
    return (dispatch) => {
        return userService.signup(credentials)
            .then(user => {
                console.log(user, 'user in action');
                console.log(user);
                dispatch({
                    type: 'SET_USER',
                    user
                })
                showSuccessMsg('user sign up')
                return user
            })
            .catch(err => {
                showErrorMsg('Cannot signup')
                console.log('Cannot signup', err)
            })
    }
}

export function onLogout() {
    return (dispatch) => {
        userService.logout()
            .then(() => dispatch({
                type: 'SET_USER',
                user: null,
            }),
                showSuccessMsg('user Logout')

            )
            .catch(err => {
                showErrorMsg('Cannot logout')
                console.log('Cannot logout', err)
            })
    }
}
