import React, { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext';
import Task from './Task';

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  
  return (
    <div className='max-w-md mx-auto px-4 py-8'>
      {tasks.length ?
        (
          tasks?.map((task) => {
            return <div className="bg-white rounded-lg shadow-md p-4" >
              <Task task={task} key={task.id}/>
            </div>
          })
        ) :
        (
          <div className='max-w-md mx-auto px-4 py-8'>
            <div className='grid gap-4'>
              <span className="mb-2">Pull the code from git</span>
              <span className="mb-2">2023-09-01</span>
              <span className="mb-2">Get to the gym</span>
              <span className="mb-2">2023-08-30</span>
            </div>
          </div> 
        )}
    </div>
  )
}

export default TaskList;