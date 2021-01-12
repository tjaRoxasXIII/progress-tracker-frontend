import React, { Component } from 'react'
import { connect } from 'react-redux'
import {  signOut } from '../actions'
import GoalList from '../components/GoalList'

class Profile extends Component {
    constructor() {
        super()

        this.state = {
            goals: []
        }
    }

    componentDidMount() {
        fetch(`http://localhost:3000/users/${this.props.userId}/goals`)
            .then(resp => resp.json())
            // .then(data => console.log(data))
            .then(data => this.setState({ goals: data}))
    }

    signOut = () => {
        this.props.signOut()
        localStorage.removeItem('token')
    }

    goalsExist = () => {
        if (!this.state.goals.length) {
            return (
                <div className="card text-white bg-info mb-3" style={{marginLeft: 30, maxWidth: 250}}>
                    <h3>No Goals?</h3>
                    <h3>No Problem!</h3>
                </div>
            )
        }
        else {
            return <GoalList goals={this.state.goals}/>
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.signOut} ><a href="/">Sign Out</a></button>
                <h1>Welcome, {this.props.name}!</h1>
                <h2>Here's where you're at today:</h2>
                <h3>Add a new goal: <button><a href="/profile/new_goal">+</a></button></h3>
                
                {this.goalsExist()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.auth.name,
        userId: state.auth.userId
    }
}

export default connect(mapStateToProps, { signOut })(Profile)