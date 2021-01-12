import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

const Goal = ({ title, description }) => (
    <div className="card text-white bg-info mb-3" style={{marginLeft: 50, maxWidth: 400}}>
        <h2 className="card-header">{ title }</h2>
        <h3 className="card-body">{ description } </h3>
        <ProgressBar animated variant="success" now={75}/>
        <br/>
    </div>
)

export default Goal