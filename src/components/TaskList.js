import React, { useContext, useState } from 'react';
import { TaskListContext } from '../context/TaskListContext';
import Task from './Task';
import DefaultTask from './DefaultTask';

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div className='max-w-md mx-auto px-4 py-8'>
      {tasks?.map((task) => (
        <div className="bg-white rounded-lg shadow-md p-4" key={task.id}>
          <Task task={task} key={task.id}/>
        </div>
      ))}
    </div>
  );
};

export default TaskList;