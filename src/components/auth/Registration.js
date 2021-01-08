import React, { Component } from 'react'
import axios from 'axios'

class Registration extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            registrationErrors: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        axios.post("http://localhost:3000/registrations", {
            user: {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                password_confirmation: this.state.password_confirmation
            }},
            { withCredentials: true }
            )
            .then(response => console.log("registration resp", response))
            .catch(error => console.log("registration error", error) )
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name: </label>
                <input type="name" name="name" value={this.state.name} onChange={event => {this.handleOnChange(event)}}/>
                <br/>
                <label>Email: </label>
                <input type="email" name="email" value={this.state.email} onChange={event => {this.handleOnChange(event)}}/>
                <br/>
                <label>Password: </label>
                <input type="password" name="password" value={this.state.password} onChange={event => this.handleOnChange(event)}/>
                <br/>
                <label>Confirm Password:</label>
                <input type="password" name="password_confirmation" value={this.state.password_confirmation} onChange={event => this.handleOnChange(event)}/>
                <br/>
                <input type="Submit"/>
            </form>
        )
    }

}

export default Registration