import './App.css'
import { useState } from 'react'

function App() {

  type Task = {
    id: number,
    taskName: string,
    status: boolean
  }

  const [task, setTask] = useState<Task[]>([]);

  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {id: task.length + 1, taskName, status: false}
    setTask((prevTasks) => [...prevTasks, newTask]);
    setTaskName('');
  }


  return (
    <div className="App">
      <h1>ToDO app</h1>
      <div className="content">
        <form className='input-form' onSubmit={handleSubmit}>
          <input 
            className='input-box'
            type="text"
            placeholder='What should I do?'
            required
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <button type='submit'>Add a task</button>
        </form>
      </div>

      <div>
        {task.map((task) => (
          <div className="task-wrapper">
            <h2 className={task.status ? 'text-line-through' : ''} key={task.id}>{task.taskName}</h2>
            <input type="checkbox" />
          </div>
        ))}
        
      </div>
    </div>
  )
}

export default App
