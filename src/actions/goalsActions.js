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
    return () => {
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

export const deleteGoal = (goalId, currentUserId) => {
    return dispatch => {
        fetch(API + `/goals/${goalId}`, { method: 'DELETE' })
        .then(resp => resp)
        .then(() => {
            fetch(API + `/users/${currentUserId}/goals` )
            .then(resp => resp.json())
            .then(data => dispatch({
                type: 'GET_GOALS',
                payload: data
            }))
        })
    }
}

export const increaseProgress = (goalId, currentUserId) => {
    const body = {
        goal: {
            user_id: currentUserId,
            id: goalId
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
        .then(data => {
            fetch(API + `/users/${currentUserId}/goals` )
            .then(resp => resp.json())
            .then(data => dispatch({
                type: 'GET_GOALS',
                payload: data
            }))
        })
    }
}