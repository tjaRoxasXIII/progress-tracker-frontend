import React from 'react'
import Goal from './Goal'


const GoalList = ({ goals }) => (
    <div className="Goal-list">
        { goals.map(goal => <Goal title={goal.title} description={goal.description} />) }
    </div>

)

export default GoalList