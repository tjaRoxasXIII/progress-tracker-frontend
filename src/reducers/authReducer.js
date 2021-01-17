const INITIAL_STATE = {
    isSignedIn: false,
    userId: null,
    name: null,
    isLoggingIn: false
}

export default function authReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'START_SIGN_IN':
            console.log("Starting login")
            return {...state, isLoggingIn: true}

        case 'SIGN_IN':
            console.log("Logged in")
            return {...state, isSignedIn: true, userId: action.payload.id, name: action.payload.name, isLoggingIn: false}


        case 'SIGN_OUT':
            console.log("Logged out")
            return state = {
                isSignedIn: null,
                userId: null,
                name: null
            }
        default:
            return state
    }
}