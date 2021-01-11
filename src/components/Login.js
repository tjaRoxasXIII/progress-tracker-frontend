import React from 'react'
import { connect } from 'react-redux'
import { signIn } from '../actions'

class Login extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        const data = { user: {
            email: this.state.email,
            password: this.state.password
            }
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }
        this.props.signIn(requestOptions)
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Email: </label>
                    <input type="email" name="email" autoComplete="email" value={this.state.email} onChange={this.handleOnChange}/>
                    <br/>
                    <label>Password: </label>
                    <input type="password" name="password" autoComplete="current-password" value={this.state.password} onChange={this.handleOnChange}/>
                    <br/>
                    <input type="Submit"/>
                </form>
            </div>
        )
    }
}



export default connect(null, { signIn })(Login)