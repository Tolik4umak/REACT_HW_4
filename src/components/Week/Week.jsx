import React from 'react'
import DailyTasks from '../DailyTasks/DailyTasks'
import s from './style.module.css'


export default function Week({tasks,removeCard,removeDay}) {
 
  return (
    <div className={s.week}>
        {tasks.map(({id, day, tasksForDay }) => (

          <div className={s.day} key={id}> 
            <h2>{day}</h2>  
            <DailyTasks  tasksForDay={tasksForDay} removeCard={removeCard}/> 
            <button onClick={() => removeDay(id)}>x</button>
          </div>

        ))}
    </div>
  )
}


