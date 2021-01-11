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
                    <h1>Progress Tracker</h1>
                    
                    <Switch>
                        <Route exact path="/signup">
                            <Registration />
                        </Route>
                        <Route exact path="/home">
                            <Login />   
                            <p>No Account? <Link to="/signup">Sign up</Link></p>
                        </Route>
                    </Switch>
                </div>
            </Router>
            
        )
    }

}


export default connect(null, {signIn, signOut})(Home)