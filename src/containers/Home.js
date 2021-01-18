import React from 'react'
import Login from '../components/Login'
import { Link } from 'react-router-dom'
import { signIn, signOut } from '../actions'
import { connect } from 'react-redux'

class Home extends React.Component {

    render() {
        return (
                <div>
                    <h1 className="card-header text-white bg-dark">Progress Tracker</h1>
                    <h3 className="card-header text-white bg-info">Your Goals. Your Way.</h3>
                    <blockquote className="blockquote">
                        <h4>"Don't just set them and forget them. Keep yourself accountable!"</h4>
                    </blockquote>
                    <Login />
                    <p className="card-body">No Account? <Link to="/signup">Sign up</Link></p>
                </div>
            
        )
    }

}


export default connect(null, {signIn, signOut})(Home)