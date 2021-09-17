//import { userService } from '../services/user.service.js'

import { userService } from "../services/user.service";

const initialState = {
    user: userService.getLoggedinUser()
}


export function userReducer(state = initialState, action) {
    var newState = state;
    debugger
    switch (action.type) {
        //case 'SET_ACTIVITIES':
        //    newState = { ...state, user: { ...state.user, activities: action.todos } }
        //    break;
        //case 'UPDATE_ACTIVITIE':
        //    todos = state.user.activities.map(todo => (todo._id === action.todo._id) ? action.todo : todo);
        //    newState = { ...state, user: { ...state.user, activities: todos } }
        //    break;
        //case 'REMOVE_ACTIVITIE':

        //    todos = state.user.activities.filter(todo => (todo._id !== action.todoId));
        //    newState = { ...state, user: { ...state.user, activities: todos } }
        //    break;
        case 'SET_USER':
            {
                newState = { ...state, user: action.user }
            }
            break;
    }
    // For debug:
    window.storeState = newState;
    return newState;
}

