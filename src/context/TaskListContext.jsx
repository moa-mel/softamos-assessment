import React, { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';


export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
    const initialTasks = [
        { title: 'Task 1', dueDate: '2023-08-31', id: uuidv4() },
        { title: 'Task 2', dueDate: '2023-09-15', id: uuidv4() },
        // Add more initial tasks as needed
      ];
      
      /*const localTasks = JSON.parse(localStorage.getItem('tasks'));*/
      const [tasks, setTasks] = useState(initialTasks || []);

    /*useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks]) */

    const [editItem, setEditItem] = useState(null);

   
    const addTask = (title, dueDate) => {
        setTasks([...tasks, {title, dueDate, id: uuidv4()}]);
    }

    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const findItem = id => {
        const item = tasks.find(task => task.id === id );
        setEditItem(item);
    }
    const clearList = () => {
        setTasks([]);
    }

    const editTask = ( title, dueDate, id ) => {
        const newTasks = tasks.map(task => task.id === id ? { title, dueDate, id }: task);
        setTasks(newTasks);
        setEditItem(null);
    }

    const toggleTaskCompletion = (id) => {
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          )
        );
      };

    return (
    <TaskListContext.Provider value={{tasks, addTask, removeTask, findItem, editItem, editTask, toggleTaskCompletion, clearList }}>
        {props.children}
        </TaskListContext.Provider>

    )
};

export default TaskListContextProvider;