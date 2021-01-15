import React from 'react'
import Login from '../components/Login'
import Registration from '../components/Registration'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { signIn, signOut } from '../actions'
import { connect } from 'react-redux'

class Home extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <h1 className="card-header text-white bg-dark">Progress Tracker</h1>
                    <h3 className="card-header text-white bg-info">Your Goals. Your Way.</h3>
                    <blockquote className="blockquote">
                        <h4>"Don't just set them and forget them. Keep yourself accountable!"</h4>
                    </blockquote>
                    <Switch>
                        <Route exact path="/signup">
                            <Registration />
                        </Route>
                        <Route exact path="/home">
                            <Login />   
                            <p className="card-body">No Account? <Link to="/signup">Sign up</Link></p>
                        </Route>
                    </Switch>
                </div>
            </Router>
            
        )
    }

}


export default connect(null, {signIn, signOut})(Home)