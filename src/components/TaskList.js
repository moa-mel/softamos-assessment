import React, { useContext, useState } from 'react';
import { TaskListContext } from '../context/TaskListContext';
import Task from './Task';
import DefaultTask from './DefaultTask';

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div className='max-w-md mx-auto px-4 py-8'>
      {tasks.length ?
        (
          tasks?.map((task) => {
            return <div className="bg-white rounded-lg shadow-md p-4" key={task.id} >
              <Task task={task}  />
            </div>
          })
        ) :
        (
          <div className='max-w-md mx-auto px-4 py-8' >
            <div className=' grid gap-4 flex' >
              <DefaultTask
                task={{
                  title: 'Hit the gym',
                  dueDate: '2023-08-31',
                  completed: isCompleted, 
                  id: '1', 
                }}
              />
              <button
                className="bg-purple-700 hover:bg-purple-700 text-white font-bold py-2 px-4 w-1/3 rounded"
                onClick={() => setIsCompleted(!isCompleted)}>
                Complete
              </button>
            </div>
          </div>
        )}
    </div>
  );
};
export default TaskList

