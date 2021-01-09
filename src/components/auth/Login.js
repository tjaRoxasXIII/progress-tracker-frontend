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
    const data = { user: {
      email: this.state.email,
      password: this.state.password,
      }
  }
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
  }
  fetch("http://localhost:3000/sessions", requestOptions, { withCredentials: true})
      .then(response => response.json())
      .then(data => console.log(data))
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
            <h2>Status: {this.props.loggedInStatus}</h2>
            <form onSubmit={this.handleSubmit}>
                <label>Email: </label>
                <input type="email" name="email" value={this.state.email} onChange={event => {this.handleOnChange(event)}}/>
                <br/>
                <label>Password: </label>
                <input type="password" name="password" value={this.state.password} onChange={event => this.handleOnChange(event)}/>
                <br/>
                <input type="Submit" name="login" value="Login" readOnly="readonly" />
            </form>
            <p>No account? <a href="http://localhost:3001/signup">Sign Up</a> </p>
            
          </div>
        );
      } 
}

export default Login
