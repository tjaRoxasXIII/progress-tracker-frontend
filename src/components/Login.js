import React from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions'

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
        fetch("http://localhost:3000/login", requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                localStorage.setItem("token", data.token)
                this.props.signIn(data.user)
            })
    }

    render() {
        return(
            <form onSubmit={this.handleOnSubmit}>
                <label>Email: </label>
                <input type="email" name="email" value={this.state.email} onChange={this.handleOnChange}/>
                <br/>
                <label>Password: </label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleOnChange}/>
                <br/>
                <input type="Submit"/>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, { signIn, signOut })(Login)