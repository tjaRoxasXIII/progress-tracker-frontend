import React, { Component } from 'react'
import { connect } from 'react-redux'
import {  signOut } from '../actions'
import { fetchGoals } from '../actions/goalsActions'
import GoalList from '../components/GoalList'

class Profile extends Component {

    componentDidMount() {
        this.props.fetchGoals(this.props.userId)
    }

    signOut = () => {
        this.props.signOut()
        localStorage.removeItem('token')
    }

    goalsExist = () => {
        if (!this.props.goals.length) {
            return (
                <div className="card text-white bg-info mb-3" style={{marginLeft: 30, maxWidth: 250}}>
                    <h3>No Goals?</h3>
                    <h3>No Problem! Just click the button above to get started!</h3>
                </div>
            )
        }
        else {
            return <GoalList goals={this.props.goals}/>
        }
    }

    render() {
        return (
            <div>
                <h1 className="card text-white bg-secondary mb-3">Welcome, {this.props.name}!</h1>
                <button onClick={this.signOut} ><a href="/">Sign Out</a></button>
                <h1>Here's where you're at today:</h1>
                <h3>Add a new goal: <button><a href="/profile/new_goal">+</a></button></h3>
                
                {this.goalsExist()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.auth.name,
        userId: state.auth.userId,
        goals: state.goals
    }
}

export default connect(mapStateToProps, { signOut, fetchGoals })(Profile)