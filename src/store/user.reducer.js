import { userService } from '../services/user.service.js'

const initialState = {
    user: {
        //fullname: userService.getLoggedinUser().username,
        //activities: [{
        //    txt:
        //        'Added a TOY', at: 1523873242735
        //}],
        //prefs: { color: '000000', bgColor: '5555' }
    }

}


export function userReducer(state = initialState, action) {
    var newState = state;
    var todos
    switch (action.type) {
        case 'SET_ACTIVITIES':
            newState = { ...state, user: { ...state.user, activities: action.todos } }
            break;
        case 'UPDATE_ACTIVITIE':
            todos = state.user.activities.map(todo => (todo._id === action.todo._id) ? action.todo : todo);
            newState = { ...state, user: { ...state.user, activities: todos } }
            break;
        case 'REMOVE_ACTIVITIE':
            
            todos = state.user.activities.filter(todo => (todo._id !== action.todoId));
            newState = { ...state, user: { ...state.user, activities: todos } }
            break;

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


