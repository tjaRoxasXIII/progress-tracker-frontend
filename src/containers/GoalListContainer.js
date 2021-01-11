import React from 'react'
import GoalList from '../components/GoalList'
import { connect } from 'react-redux'

class GoalListContainer extends React.Component {
    state = {
        goals: []
    }

    componentDidMount() {
        fetch(`http://localhost:3000/users/${this.state.userId}/goals`)
            .then(resp => resp.json())
            .then(data => this.setState({ goals: data.goals}))
    }

    render() {
        return (
            <GoalList goals={this.state.goals}/>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId
    }
}

export default connect(mapStateToProps)(GoalListContainer)