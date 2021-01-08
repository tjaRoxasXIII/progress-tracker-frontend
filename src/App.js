import React from 'react'
import { connect } from 'react-redux'
import Registration from './components/auth/Registration'
import Login from './components/auth/Login'
import Home from './containers/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';

class App extends React.Component {

  //Just use this for testing our connection and responses with our API
  // componentDidMount() {
  //   this.props.fetchUsers()
  // }

  render() {
    return (
      <div className="App">
        <h1>Progress Tracking App</h1>
        <BrowserRouter>
          <Switch>
            <Route exact path={"/"} component={Login} />
            <Route exact path={"/signup"} component={Registration} />
            <Route exact path={"/home"} component={Home} />
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
