import React from 'react'
import Home from './Home'
import Registration from '../components/Registration'
import Profile from './Profile'
import AddGoal from '../components/AddGoal'
import { connect } from 'react-redux'
import { autoSignIn } from '../actions'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

class App extends React.Component {

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
                this.props.autoSignIn(data)
                
            })
        }
    }

    render() {
        return(
            <Router>
                <div align="center">
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/home"/>
                        </Route>
                        {this.props.isSignedIn === false && <Route exact path="/profile" render={() => {
                            return ( <Redirect to="/home"/> )
                        }} />}
                        {this.props.isSignedIn === false && <Route exact path="/profile/new_goal" render={() => {
                            return ( <Redirect to="/home"/> )
                        }} />}
                        {this.props.isSignedIn === true && <Route exact path="/home" render={() => {
                        return ( <Redirect to="/profile" /> )
                        }} />}
                        {this.props.isSignedIn === true && <Route exact path="/signup" render={() => {
                        return ( <Redirect to="/profile" /> )
                        }} />}
                        {this.props.isSignedIn === true && <Route exact path="/profile" component={Profile} />}
                        {this.props.isSignedIn === true && <Route exact path="/profile/new_goal" component={AddGoal} />}
                        {this.props.isSignedIn === false && <Route exact path="/home" component={Home} />}
                        {this.props.isSignedIn === false && <Route exact path="/signup" component={Registration} />}
                    </Switch>
                </div>
            </Router>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}


export default connect(mapStateToProps, {autoSignIn})(App)