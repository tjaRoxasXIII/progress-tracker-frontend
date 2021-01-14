const INITIAL_STATE = {
    goals: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_GOALS':
            console.log(action.payload, "Grabbing Goals")
            return action.payload
        default:
            return state
    }
}

