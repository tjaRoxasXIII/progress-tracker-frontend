import React, { Component } from 'react'
import { connect } from 'react-redux'
import {  signOut } from '../actions'
// import GoalList from '../components/GoalList'

class Profile extends Component {
    state = {
        goals: []
    }

    // componentDidMount() {
    //     fetch(`http://localhost:3000/users/${this.state.userId}/goals`)
    //         .then(resp => resp.json())
    //         .then(data => console.log(data))
    //         // .then(data => this.setState({ goals: data.goals}))
    // }

    signOut = () => {
        this.props.signOut()
        localStorage.removeItem('token')
    }

    render() {
        return (
            <div>
                <button onClick={this.signOut} ><a href="/">Sign Out</a></button>
                <h1>Welcome, {this.props.name}!</h1>
                <h2>Here's where you're at today:</h2>
                {/* <GoalList goals={this.state.goals}/> */}
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