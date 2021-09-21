
const initialState = {
    toys: [],
    isLoading: true,
    filterBy: {
        name: '',
        inStock: false,
        lable: 'all',
        sort: null
    }
}

export function toyReducer(state = initialState, action) {
    var newState = state;
    var toys;
    switch (action.type) {
        case 'SET_TOYS':
            newState = { ...state, toys: action.toys }
            break;
        case 'SET_LOADING':
            newState = { ...state, isLoading: action.isLoading }
            break;
        case 'CLEAR_TOYS':
            newState = { ...state, toys: [] }

            break;
        case 'UPDATE_TOY':
            toys = state.toys.map(toy => (toy._id === action.toy._id) ? action.toy : toy);
            newState = { ...state, toys }

            break;
        case 'ADD_TOY':
            newState = { ...state, toys: [...state.toys, action.toy] }

            break;
        case 'REMOVE_TOY':
            toys = state.toys.filter(toy => (toy._id !== action.toyId));
            newState = { ...state, toys }
            break;
        case 'SET_FILTER':
            {
                newState = { ...state, filterBy: action.filterBy }
                console.log(newState.filterBy);
            }
            break;
        case 'SET_USER_NAME':
            {
                newState = { ...state, user: action.user }
            }

            break;
    }
    // For debug:
    window.storeState = newState;
    return newState;

}


