import React, { useContext } from 'react'
import { TaskListContext } from '../context/TaskListContext'

const Task = ({ task }) => {
  const { removeTask, toggleTaskCompletion } = useContext(TaskListContext);
  return (
    <div className={`task ${task.completed ? 'line-through' : ''} grid gap-4`}>
      <span className="mb-2">{task.title}</span>
      <span className="mb-2">{task.dueDate}</span>
      <div>
        <button
          className="mr-2 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          checked={task.completed}
          onClick={() => toggleTaskCompletion(task.id)}
        >Complete </button>
        <button onClick={() => removeTask(task.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Delete
        </button>
      </div>
    </div>
  )
}

export default Task