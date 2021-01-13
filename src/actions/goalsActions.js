const API = "http://localhost:3000"

export const addGoal = (goalState, userId) => {
    console.log(goalState, userId)
    const body = {goal: {
        ...goalState,
        user_id: userId
    }}
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    }
    return dispatch => {
        fetch(API + '/goals', requestOptions)
    }
}

export const fetchGoals = (userId) => {
    return dispatch => {
        fetch(API + `/users/${userId}/goals` )
            .then(resp => resp.json())
            .then(data => dispatch({
                type: 'GET_GOALS',
                payload: data
            }))
    }
}

export const increaseProgress = (currentId, currentUserId) => {
    console.log(currentId, currentUserId)
    const body = {
        goal: {
            user_id: currentUserId,
            id: currentId
        }
    }
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    }
    return dispatch => {
        fetch(API + '/update_goal', requestOptions)
        .then(resp => console.log(resp))
    }
}