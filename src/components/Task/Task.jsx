import React from 'react'
import s from './style.module.css'

export default function Task(props) {

    const isUrgent = props.status === 'Важное' ? true : false;

  return (
    <div className={[s.task, isUrgent ? s.urgent: s.not_urgent].join(' ')}>
        <p>{props.task}</p>
        <button onClick={() => props.removeCard(props.taskId)}>x</button>
    </div>

  )
}
