import React from 'react'
import Login from '../components/Login'
import Registration from '../components/Registration'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
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
            <Router>
                <div>
                    <button onClick={this.signOut}>Sign Out</button>
                    <h1>Progress Tracker</h1>
                    
                    <Switch>
                        <Route exact path="/signup">
                            <Registration />
                        </Route>
                        <Route path="/">
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