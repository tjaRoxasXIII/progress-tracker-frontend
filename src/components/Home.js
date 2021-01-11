import React from 'react'
import Login from './Login'
// import Registration from './Registration'
import { signIn } from '../actions'
import { connect } from 'react-redux'

class Home extends React.Component {


    componentDidMount() {
        const token = localStorage.getItem('token')
        if(token){
            fetch('http://localhost:3000/auto_login', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                this.props.signIn(data)
            })
        }
    }

    render() {
        return (
            <div>
                <h1>Progress Tracker</h1>
                <Login />
                <p>No Account?  <a href="#">Sign up</a></p>
            </div>
        )
    }

}

export default connect(null, {signIn})(Home)