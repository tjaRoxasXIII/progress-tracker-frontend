export const signUp = (requestOptions) => {
    return (dispatch) => {
        dispatch({ type: 'START_SIGN_UP'})
        fetch("http://localhost:3000/users", requestOptions)
                .then(response => response.json())
                .then(data => {
                    if (data.user) {
                        localStorage.setItem("token", data.token)
                        dispatch({type: 'SIGN_IN', payload: data.user})
                    }
                    else {
                        console.log(data)
                        if (data.email) {
                            alert(`This email address ${data.email}`)
                        }
                        else {
                            alert(`Your Password and Password Confirmation fields do not match.`)
                        }
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
                    else {
                        alert("No User found")
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

