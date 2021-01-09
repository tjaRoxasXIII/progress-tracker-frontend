export default function userReducer(state = {user: []}, action) {
    switch (action.type) {
        
        case 'LOG_IN_USER':

            return {user: action.user}

        default:
            return state
    }


}