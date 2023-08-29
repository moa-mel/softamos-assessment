import React, { useContext} from 'react'
import { TaskListContext } from '../context/TaskListContext'

const Task = ({task}) => {
  const { removeTask, findItem, toggleTaskCompletion } = useContext(TaskListContext);
  return (
    <div className={`task ${task.completed ? 'line-through' : ''} grid gap-4`}>
        <span className="mb-2">{task.title}</span>
        <span className="mb-2">{task.dueDate}</span>
        <div>
        <input
        type="checkbox"
        className="mr-2"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
      />
            <button onClick={() => findItem(task.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                Edit
            </button>
            <button  onClick={() => removeTask(task.id)}  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Delete
            </button>
        </div>
    </div>
  )
}

export default Task