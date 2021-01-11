import React from 'react'

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
        fetch("http://localhost:3000/users", requestOptions)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem("token", data.token)
                
            })
    }

    render() {
        return(
            <form onSubmit={this.handleOnSubmit}>
                <label>Name: </label>
                <input type="name" name="name" value={this.state.name} onChange={this.handleOnChange}/>
                <br/>
                <label>Email: </label>
                <input type="email" name="email" value={this.state.email} onChange={this.handleOnChange}/>
                <br/>
                <label>Password: </label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleOnChange}/>
                <br/>
                <label>Confirm Password:</label>
                <input type="password" name="password_confirmation" value={this.state.password_confirmation} onChange={this.handleOnChange}/>
                <br/>
                <input type="Submit"/>
            </form>
        )
    }
}

export default Registration