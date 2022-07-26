import {AiOutlineDelete} from 'react-icons/ai'

const Task = ({ task, onDelete, onToggle}) => {
  return (
    <div className= {`task ${task.reminder ?
    'reminder' : ''}`}
    onDoubleClick={() => onToggle(task.id)}
    >
      <h3>{task.text}
      <AiOutlineDelete
      onClick={() => onDelete(task.id)}
      />
      </h3>
      <p> {task.day} </p>
      <p> {task.location}</p>
      <h4> {task.time}</h4>
      <p> {task.priority}</p>
    </div>
  )
}

export default Task
