import React from 'react'
import Login from './Login'
// import Registration from './Registration'

class Home extends React.Component {

    state = {
        user: {}
    }

    componentDidMount() {
        const token = localStorage.getItem('token')
        console.log(this.state)
        if(token){
            fetch('http://localhost:3000/auto_login', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                this.setState({
                    user: data
                })
                console.log(this.state)
            })
        }
    }

    render() {
        return (
            <div>
                <Login />
                Home
            </div>
        )
    }

}

export default Home