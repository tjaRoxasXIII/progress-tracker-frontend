import React from 'react'
import Home from './Home'
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
                <div>
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/home"/>
                        </Route>
                        <Route exact path="/home" render={() => {
                            return (
                                this.props.isSignedIn === true ?
                                <Redirect to="/profile" /> :
                                <Home />
                            )
                        }}
                        />
                        <Route exact path="/profile" render={() => {
                            return (
                                this.props.isSignedIn === true ?
                                <Profile /> :
                                <Redirect to="/home" />
                            ) 
                        }}
                        />
                        <Route exact path="/profile/new_goal" component={AddGoal} />
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