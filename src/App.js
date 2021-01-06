import React from 'react'
import { connect } from 'react-redux'
import fetchUsers from './actions/fetchUsers'
import './App.css';

class App extends React.Component {

  //Just use this for testing our connection and responses with our API
  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    return (
      <div className="App">
        <h1>Progress Tracking App</h1>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     users: state.users
//   }
// }


export default connect(null, {fetchUsers})(App);
