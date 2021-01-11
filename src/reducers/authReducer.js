const INITIAL_STATE = {
    isSignedIn: false,
    userId: null,
    name: null,
    isLoggingIn: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'START_SIGN_IN':
            console.log(state, "Starting login")
            return {...state, isLoggingIn: true}
            
        case 'SIGN_IN':
            console.log(state, "Logged in")
            return {...state, isSignedIn: true, userId: action.payload.id, name: action.payload.name, isLoggingIn: false}


        case 'SIGN_OUT':
            return state = {
                isSignedIn: null,
                userId: null,
                name: null
            }
        default:
            return state
    }
}