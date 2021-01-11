import React from 'react'

const Goal = ({ title, description }) => (
    <div className="goal">
        <h2>{ title }</h2>
        <h3>{ description } </h3>
    </div>
)

export default Goal