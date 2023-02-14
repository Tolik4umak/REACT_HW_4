import { useState, useEffect } from "react";
import Form from "../Form/Form";
import Week from "../Week/Week";
import s from './style.module.css'

function App() {


  const [tasks, setTasks] = useState([])

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem('myTasks')) ?? [])
  }, [])
  useEffect(() => {
    localStorage.setItem('myTasks',JSON.stringify(tasks))
  }, [tasks])


  const addNewTask = (newTask) => {

    if(!tasks.some(({id}) => id === newTask.id)){
      const newArr = [...tasks, newTask]
      newArr.sort((a, b) => a.id - b.id)
      setTasks(newArr)
    } else {
      const target = tasks.find(day => day.id === newTask.id).tasksForDay
      target.push(...newTask.tasksForDay)
      setTasks([...tasks])
    }
  
  }

  const removeCard = (remCardId) => {

    const targetDay = tasks.find(({tasksForDay}) => 
      tasksForDay.some(({taskId}) => taskId === remCardId))
    
    if(targetDay.tasksForDay.length === 1){
      const newArr = tasks.filter(task => task !== targetDay)
      setTasks(newArr)
    } else {
      const index = targetDay.tasksForDay.findIndex(({taskId}) => taskId === remCardId)
      targetDay.tasksForDay.splice(index, 1)
      setTasks([...tasks])
    }

  }

  const removeDay = (dayId) => {
    const newArr = tasks.filter(day => day.id !== dayId)
    setTasks(newArr)
  }

  return (
    <div className={s.wrapper}>
      <Form addNewTask={addNewTask} />
      <Week tasks={tasks} removeCard={removeCard} removeDay={removeDay}/>
    </div>
  );
}

export default App;
