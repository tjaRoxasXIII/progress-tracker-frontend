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
        // let progressBar;
        // let completeButton;

        if (this.props.numToComplete === this.props.numOfComplete) {
            card = <div className="card text-white bg-secondary mb-3" style={{marginLeft: 50, maxWidth: 400}}>
            <h2 className="card-header"  style={{ display: 'flex'}}>{ this.props.title } <span className="material-icons"  onClick={() => this.confirmDelete()} style={{marginLeft: 'auto', cursor: "pointer" }}>delete_forever</span></h2>
            <h3 className="card-body">{ this.props.description } </h3>
            <ProgressBar  variant="success" now={this.calculateProgress()}/>            <h5>Start: {this.props.start_date} --- End: {this.props.end_date}</h5>
            <h4>Completed: {this.props.numOfComplete} / {this.props.numToComplete}</h4>
            <button disabled> Complete! </button><br/>
        </div>
            // progressBar = <ProgressBar  variant="success" now={this.calculateProgress()}/>
            // completeButton = <button disabled> Complete! </button>
        }
        else {
            card = <div className="card text-white bg-info mb-3" style={{marginLeft: 50, maxWidth: 400}}>
            <h2 className="card-header"  style={{ display: 'flex'}}>{ this.props.title } <span className="material-icons"  onClick={() => this.confirmDelete()} style={{marginLeft: 'auto', cursor: "pointer" }}>delete_forever</span></h2>
            <h3 className="card-body">{ this.props.description } </h3>
            <ProgressBar animated variant="warning" now={this.calculateProgress()}/>
            <h4>Completed: {this.props.numOfComplete} / {this.props.numToComplete}</h4>
            <button onClick={() => this.props.increaseProgress(this.props.id, this.props.user_id)}>Complete a task</button><br/>
        </div>
            // progressBar = <ProgressBar animated variant="warning" now={this.calculateProgress()}/>
            // completeButton = <button onClick={() => this.props.increaseProgress(this.props.id, this.props.user_id)}>Complete a task</button>
        }

        return (
            <div>
                {card}
            </div>
        )
    }
}


export default connect(null, { increaseProgress, deleteGoal })(Goal)