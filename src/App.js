import React from 'react'
import './App.css';

class App extends React.Component {

  //Just use this for testing our connection and responses with our API
  // componentDidMount() {
  //   fetch('http://localhost:3000/users/1')
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  // }

  render() {
    return (
      <div className="App">
        <h1>Progress Tracking App</h1>
      </div>
    );
  }
}

export default App;
