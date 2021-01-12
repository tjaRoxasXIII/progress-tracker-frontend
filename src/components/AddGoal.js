import React from 'react'

class AddGoal extends React.Component {

    render() {
        return (
            <div>
                <h2>Let's add a new goal:</h2>
                <form>
                    <label>Title</label>
                    <input type="text" />
                    <label>Description</label>
                    <input type="text" />
                    <label>Frequency</label>
                    <input type="radio" />
                </form>
            </div>
        )
    }
}

export default AddGoal