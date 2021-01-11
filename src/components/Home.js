import React from 'react'
import Login from './Login'
// import Registration from './Registration'
import { signIn, signOut } from '../actions'
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

    signOut = () => {
        this.props.signOut()
        localStorage.removeItem('token')
    }

    render() {
        return (
            <div>
                <h1>Progress Tracker</h1>
                <Login />
                <p>No Account? Sign up</p>
                <button onClick={this.signOut}>Sign Out</button>
            </div>
        )
    }

}

export default connect(null, {signIn, signOut})(Home)