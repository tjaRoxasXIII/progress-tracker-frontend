import React, { Component } from 'react'

class Login extends Component {

  constructor() {
    super()
    this.state = {
        email: '',
        password: '',
    }
}

handleSubmit = (event) => {
    event.preventDefault()
}

handleOnChange = event => {
    this.setState({
        [event.target.name]: event.target.value
    })
}

    render() {
        return (
          <div className="App">
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
                <label>Email: </label>
                <input type="email" name="email" value={this.state.email} onChange={event => {this.handleOnChange(event)}}/>
                <br/>
                <label>Password: </label>
                <input type="password" name="password" value={this.state.password} onChange={event => this.handleOnChange(event)}/>
                <br/>
                <input type="Submit"/>
            </form>
            <p>No account? <a href="http://localhost:3000/signup">Sign Up</a> </p>
            
          </div>
        );
      } 
}

export default Login
