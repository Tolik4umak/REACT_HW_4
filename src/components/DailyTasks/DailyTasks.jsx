import React from 'react'
import Task from '../Task/Task'



export default function DailyTasks({tasksForDay, removeCard}) {
  return (
    <div >
      {tasksForDay.map((item) => <Task key={item.taskId} {...item} removeCard={removeCard} /> )}
      
    </div>
  )
}

