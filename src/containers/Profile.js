import React, { Component } from 'react'
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
                <h1>Welcome to your Profile, {this.props.user}!</h1>
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