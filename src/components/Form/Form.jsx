import React, { useState } from 'react'
import s from './style.module.css'


export default function Form({addNewTask}) {

    const classToggle = (e) => {
        e.currentTarget.classList.toggle(s.list_hide)
    }

    const [dayOfWeek, setdayOfWeek] = useState('')
    const [taskStatus, setTaskStatus] = useState('')

    const choseDay = (e) => {
        e.currentTarget.classList.remove(s.list_hide)
        setdayOfWeek(e.target.innerHTML) 
        if(e.target.innerHTML === 'Day'){
            setdayOfWeek('')
        }
    }
    const choseStatus = (e) => {
        e.currentTarget.classList.remove(s.list_hide)
        setTaskStatus(e.target.innerHTML) 
        if(e.target.innerHTML === 'Status'){
            setTaskStatus('')
        }
    }


    const createTask = (e) => {
        e.preventDefault()

        const descr = e.target.descr.value;    
        const days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС',]
        const createId = days.findIndex(day => day === dayOfWeek)+1

      

        const newTask = {
            id: createId,
            day: dayOfWeek,
            tasksForDay: [
                {
                  taskId: Date.now(),
                  status: taskStatus,
                  task: descr,
                },
              ]
        }

        if((descr === '') || (dayOfWeek === '' )||(taskStatus === '')){
            alert('Пожалуйста заполните все поля')
        }else{
            addNewTask(newTask)
            setdayOfWeek('')
            setTaskStatus('')
            e.target.descr.value = ''
        }
    } 

  return (
    <form className={s.form} onSubmit={(e) => createTask(e)}>
 
        <div onClick={(e) => classToggle(e)}  className={s.drop_menu}>
            <p >{dayOfWeek||"Day"}</p>

            <ul onClick={(e) => choseDay(e)} className={[s.list_items, s.day].join(' ')}>
                <li>Day</li>
                <li>ПН</li>
                <li>ВТ</li>
                <li>СР</li>
                <li>ЧТ</li>
                <li>ПТ</li>
                <li>СБ</li>
                <li>ВС</li>
            </ul>
        </div>

        <div onClick={(e) => classToggle(e)}  className={s.drop_menu}>
            <p >{taskStatus||"Status"}</p>
            
            <ul onClick={(e) => choseStatus(e)} className={[s.list_items, s.status].join(' ')}>
                <li>Status</li>
                <li>Важное</li>
                <li>Неважное</li>
            </ul>
        </div>

        <input type="text" name='descr' placeholder='description' required/>
        
        <button type='submit'>Добавить</button>
    </form>
  )
}
