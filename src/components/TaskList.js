import React, { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext';
import Task from './Task';

const TaskList = () => {
    const { tasks } = useContext(TaskListContext);
  return (
    <div className='max-w-md mx-auto px-4 py-8'>
        { tasks.length ?
            (
              tasks?.map((task)  => {
                return <div className="bg-white rounded-lg shadow-md p-4" key={task.id}>
                <Task  task={task} />
                </div>
              })
            ):
            (
              <div className='no-tasks'>
                No Tasks
              </div>
            )
        }
    </div>
  )
}

export default TaskList;