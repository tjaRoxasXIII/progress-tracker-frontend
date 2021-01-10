import React from 'react'

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
        fetch("http://localhost:3000/users", requestOptions)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem("token", data.token)
                console.log(localStorage)
                console.log(this.state)
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

export default Login