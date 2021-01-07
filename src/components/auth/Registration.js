import React, { Component } from 'react'

class Registration extends Component {

    constructor(props) {
        super()
        this.state = {
            email: '',
            password: '',
            registrationErrors: ''
        }
    }

    handleSubmit() {
        return null
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Username: </label>
                <input type="text"/>
                <br/>
                <label>Password: </label>
                <input type="password"/>
                <br/>
                <input type="Submit"/>
            </form>
        )
    }

}

export default Registration