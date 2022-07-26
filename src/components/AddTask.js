import { useState } from 'react'

const AddTask = ({onAdd}) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [time, setTime] = useState('')
  const [reminder, setReminder] = useState(false)
  const [location, setLocation] = useState('')
  const [priority, setPriority] = useState('')

const onSubmit = (e) => {
  e.preventDefault()

  if(!text){
    alert('Please add a task')
    return
  }

  onAdd({text, day, time, reminder, location, priority})

  setText('')
  setDay('')
  setTime('')
  setReminder(false)
  setLocation('')
  setPriority('')
}

  return(
    <form className= 'add-form' onSubmit={onSubmit}>
      <div className='form-control'>
      <label> Task </label>
      <input
      type ='text'
      placeholder= 'Add Task'
      value={text}
      onChange={(e)=> setText(e.target.value)}
      />
      </div>
      <div className='form-control'>
      <label> Date </label>
      <input type ='date'
      value={day}
      onChange={(e)=> setDay(e.currentTarget.value)}/>
      </div>
      <div className='form-control'>
      <label> Time </label>
      <input type ='time'
      value={time}
      onChange={(e)=> setTime(e.currentTarget.value)}/>
      </div>
      <div className='form-control form-control-check'>
      <label> Set Reminder </label>
      <input type ='checkbox'
      checked={reminder}
      value={reminder}
      onChange={(e)=> setReminder(e.currentTarget.checked)}/>
      </div>
      <div className='form-control'>
      <label> Location </label>
      <input type ='text' placeholder= 'Add Location'
      value={location}
      onChange={(e)=> setLocation(e.currentTarget.value)}/>
      </div>
      <div className='form-control'>
      <label> Priority Level </label>
      <input type ='text' placeholder= 'Add Percentage'
      value={priority}
      onChange={(e)=> setPriority(e.currentTarget.value)}/>
      </div>

      <div className= 'uk-button-text'>
      <input type='submit' value= 'Save Task' />
      </div>
    </form>
  )
}

export default AddTask
