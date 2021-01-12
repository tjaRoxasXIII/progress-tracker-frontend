import React from 'react'
import Goal from './Goal'


const GoalList = ({ goals }) => (
        <div >
            { goals.map(goal => <Goal key={goal.id}title={goal.title} description={goal.description} />) }
        </div>

)

export default GoalList