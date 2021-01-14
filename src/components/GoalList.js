import React from 'react'
import Goal from './Goal'


const GoalList = ({ goals }) => (
        <div >
            { goals.map(goal => <Goal 
                key={goal.id}
                id={goal.id}
                user_id={goal.user_id}
                title={goal.title}
                description={goal.description}
                frequency={goal.frequency}
                numOfComplete={goal.num_of_completed}
                numToComplete={goal.num_to_complete}
                start_date={goal.start_date}
                end_date={goal.end_date}
                />
                ) 
            }
        </div>

)

export default GoalList