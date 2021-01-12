export const signUp = (requestOptions) => {
    return (dispatch) => {
        dispatch({ type: 'START_SIGN_UP'})
        fetch("http://localhost:3000/users", requestOptions)
                .then(response => response.json())
                .then(data => {
                    if (data.user) {
                        localStorage.setItem("token", data.token)
                        this.props.signIn(data.user)
                    }
                })
    }
}

export const signIn = (requestOptions) => {
    return (dispatch) => {
        dispatch({ type: 'START_SIGN_IN'})
        fetch("http://localhost:3000/login", requestOptions)
                .then(response => response.json())
                .then(data => {
                    if (data.user) {
                        localStorage.setItem("token", data.token)
                        dispatch({ type: 'SIGN_IN', payload: data.user})
                    }
                })
        }
}

export const autoSignIn = (data) => {
    return (dispatch) => {
        dispatch({ type: 'SIGN_IN', payload: data})
    }
}

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}

export const addGoal = (requestOptions) => {
    return () => {
        fetch("http://localhost:3000/goals", requestOptions)     
    }
}