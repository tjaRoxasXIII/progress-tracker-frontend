import React from 'react'
import { connect } from 'react-redux'
import { increaseProgress } from '../actions/goalsActions'
import ProgressBar from 'react-bootstrap/ProgressBar'

class Goal extends React.Component {

    componentDidUpdate() {
        this.calculateProgress()
    }

    calculateProgress() {
        return (this.props.numComplete / this.props.numRemaining) * 100
    }

    increaseProgress = () => {
        this.props.increaseProgress(this.props.id, this.props.user_id)
    }

    render() {
        return (
            <div className="card text-white bg-info mb-3" style={{marginLeft: 50, maxWidth: 400}}>
             <h2 className="card-header"  style={{ display: 'flex'}}>{ this.props.title } <span className="material-icons"  style={{marginLeft: 'auto', cursor: "pointer", hover: { color: '#ff6b6b' } }}>highlight_off</span></h2>
             <h3 className="card-body">{ this.props.description } </h3>
             <ProgressBar animated variant="warning" now={this.calculateProgress()}/>
             <table className="card-header">
                 <tr align="center">
                     <th>Start: {this.props.start_date}</th>
                     <th>End: {this.props.end_date}</th>
                 </tr>
             </table>
             <table>
                 <tr align="center">
                     <th>{this.props.numComplete}</th>
                     <th>{this.props.numRemaining}</th>
                 </tr>
         </table>
            <button onClick={this.increaseProgress}>
                Complete a task
            </button>
         <br/>
            </div>
        )
    }
}


export default connect(null, { increaseProgress })(Goal)