import React from 'react'
import { connect } from 'react-redux'
import { increaseProgress, deleteGoal } from '../actions/goalsActions'
import ProgressBar from 'react-bootstrap/ProgressBar'

class Goal extends React.Component {

    calculateProgress() {
        return (this.props.numOfComplete / this.props.numToComplete) * 100
    }

    confirmDelete(){
        const yes = window.confirm("Are you sure you want to delete this goal?")
        if (yes === true) {
            this.props.deleteGoal(this.props.id, this.props.user_id)
        }
    }


    render() {
        let card;

        if (this.props.numToComplete === this.props.numOfComplete) {
            card = <div className="card text-white bg-secondary mb-3" >
            <h2 className="card-header" >{ this.props.title } <span className="material-icons"  onClick={() => this.confirmDelete()}>delete_forever</span></h2>
            <h3 className="card-body">{ this.props.description } </h3>
            <ProgressBar  variant="success" now={this.calculateProgress()}/>            
            <h5>Start: {this.props.start_date} --- End: {this.props.end_date}</h5>
            <h4>Completed: {this.props.numOfComplete} / {this.props.numToComplete}</h4>
            <button className="goal-complete" disabled> Complete! </button><br/>
        </div>
        }
        else {
            card = <div className="card text-white bg-info mb-3" >
            <h2 className="card-header" >{ this.props.title } <span className="material-icons"  onClick={() => this.confirmDelete()}>delete_forever</span></h2>
            <h3 className="card-body">{ this.props.description } </h3>
            <ProgressBar animated variant="warning" now={this.calculateProgress()}/>
            <h4>Completed: {this.props.numOfComplete} / {this.props.numToComplete}</h4>
            <button className="goal-update" onClick={() => this.props.increaseProgress(this.props.id, this.props.user_id)}>Complete a task</button><br/>
        </div>
        }

        return (
            <div>
                {card}
            </div>
        )
    }
}


export default connect(null, { increaseProgress, deleteGoal })(Goal)