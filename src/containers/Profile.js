import React, { Component } from 'react'
import Goals from '../components/Goals'
import { connect } from 'react-redux'
import {  signOut } from '../actions'

class Profile extends Component {
    
    signOut = () => {
        this.props.signOut()
        localStorage.removeItem('token')
    }

    render() {
        return (
            <div>
                <button onClick={this.signOut} ><a href="/">Sign Out</a></button>
                <h1>Welcome back, {this.props.user}!</h1>
                <h2>Here's where you're at today:</h2>
                <Goals />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.name
    }
}

export default connect(mapStateToProps, { signOut })(Profile)