import React from 'react'
import { connect } from 'react-redux'
import { signUp } from '../actions'

class Registration extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    }

    

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        const data = { user: {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation
            }
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }
        this.props.signUp(requestOptions)
    }

    render() {
        return(
            <form onSubmit={this.handleOnSubmit}>
                <label>Name: </label>
                <input type="name" name="name" required="required" autoComplete="given-name"value={this.state.name} onChange={this.handleOnChange}/>
                <br/>
                <label>Email: </label>
                <input type="email" name="email" autoComplete="email" value={this.state.email} onChange={this.handleOnChange}/>
                <br/>
                <label>Password: </label>
                <input type="password" name="password" autoComplete="new-password"value={this.state.password} onChange={this.handleOnChange}/>
                <br/>
                <label>Confirm Password:</label>
                <input type="password" name="password_confirmation" autoComplete="new-password"value={this.state.password_confirmation} onChange={this.handleOnChange}/>
                <br/>
                <input type="Submit"/>
            </form>
        )
    }
}

export default connect(null, {signUp})(Registration)