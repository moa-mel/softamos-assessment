import React, { useContext, useState, useEffect } from 'react'
import { TaskListContext } from '../context/TaskListContext';

const TaskForm = () => {
    const { addTask, editItem, editTask, clearList } = useContext(TaskListContext);
    const [title, setTitle] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (editItem === null) {
            addTask(title, dueDate);
            setTitle('');
            setDueDate('');
        } else {
            editTask(title, dueDate, editItem.id)
        }
    }

    useEffect(() => {
        if(editItem !== null){
            setTitle(editItem.title)
            setDueDate(editItem.dueDate)
        } else {
            setTitle('');
            setDueDate('');
        }
    }, [editItem])

  return (
    <div>
        <form  className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col">
        <label htmlFor="title" className="mb-1">
          Task:
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="dueDate" className="mb-1">
          Due Date:
        </label>
        <input
          type="date"
          id="dueDate"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className='flex gap-5'>
      <button
        type="submit"
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"'>
         Add Task
      </button>
      <button
        type="submit"
        onClick={() => clearList()}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"'>
         Clear out
      </button>
            </div>
        </form>
    </div>
  )
}

export default TaskForm