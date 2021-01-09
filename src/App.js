import React from 'react'
import { connect } from 'react-redux'
import Registration from './components/auth/Registration'
import Login from './components/auth/Login'
import Home from './containers/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      loggedInStatus: 'LOGGED_IN',
      user: {}
    }
  }

  checkLoginStatus() {
    fetch("http://localhost:3000/logged_in", { withCredentials: true })
      .then(response => response.json())
      .then(data => {
        if (!data.logged_in) {
          this.setState({
            loggedInStatus: 'NOT_LOGGED_IN',
            user: {}
          })
        }
      })
      .catch(error => {
        console.log("check login error", error)
      })
  }

  componentDidMount() {
    this.checkLoginStatus()
  }

  handleLogin = (data) => {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    })
  }

  handleLogout() {
    this.setState({
      loggedInStatus: 'NOT_LOGGED_IN',
      user: {}
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Progress Tracking App</h1>
        <BrowserRouter>
          <Switch>
            <Route exact path={"/"} render={props => (
              <Login {...props} loggedInStatus={this.state.loggedInStatus} />
            )} />
            <Route exact path={"/signup"} component={Registration} />
            <Route exact path={"http://localhost:3001/home"} component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     users: state.users
//   }
// }


export default connect(null)(App);
