import { useState } from 'react'
import Header from './components/Header'
import Button from './components/Button'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


const App =() => {
  const [showAddTask, setShowAddTask]= useState
  (false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Task 1',
      day: '2022-01-01',
      time: '12:00',
      reminder:true,
      location: 'Central London',
      priority: '30%',
    },
    {
      id: 2,
      text: 'Task 2',
      day: '2022-01-01',
      time: '12:00',
      reminder:true,
      location: 'Central London',
      priority: '60%',
    },
  ])

//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() *
  10000) + 1
  const newTask = {id, ...task }
  setTasks([...tasks, newTask])
}

//Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map ((task) =>
      task.id === id ? { ...task, reminder:
      !task.reminder} : task
    )
  )
}

  return (
    <div className="container">
      <Header/>
      <Button onAdd={() => setShowAddTask
      (!showAddTask)}
      showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks. length > 0 ? (
          <Tasks tasks={tasks} onDelete=
          {deleteTask} onToggle=
          {toggleReminder}/>
        ) : (
          ' No Tasks Added')}
    </div>
  )
}


export default App;
