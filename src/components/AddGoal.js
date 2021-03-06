import React from 'react'
import { connect } from 'react-redux'
import { addGoal } from '../actions/goalsActions'
import { BrowserRouter } from 'react-router-dom'

class AddGoal extends React.Component {
    state = {
        title: '',
        description: '',
        frequency: 'daily',
        start_date: '',
        end_date: ''
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        if (this.state.start_date < this.state.end_date) {
            this.props.addGoal(this.state, this.props.userId)
            this.props.history.push('/profile')
        }
        else {
            alert("Your Start date cannot be later than your End date.")
        }
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h2 className="card-header bg-info">Let's add a new goal:</h2>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Title:</label><br />
                    <input type="text" name="title" required="required" onChange={this.handleOnChange} value={this.state.title}/><br />
                    <label>Description:</label><br />
                    <input type="text" name="description" onChange={this.handleOnChange} value={this.state.description}/><br />
                    <label>Frequency:</label><br />
                    <select name="frequency" onChange={this.handleOnChange} value={this.state.frequency}>
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="bi-weekly">Bi-Weekly</option>
                        <option value="monthly">Monthly</option>
                        <option value="quarterly">Quarterly</option>
                        <option value="semi-annually">Semi-Annually</option>
                        <option value="annually">Annually</option>
                    </select><br/>
                    <label>Start Date:</label><br />
                    <input type="date" name="start_date" required="required" onChange={this.handleOnChange} value={this.state.startDate}/><br />
                    <label>End Date:</label><br />
                    <input type="date" name="end_date" required="required" onChange={this.handleOnChange} value={this.state.endDate}/><br /><br />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId
    }
}

export default connect(mapStateToProps, {addGoal, BrowserRouter})(AddGoal)