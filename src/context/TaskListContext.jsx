import React, { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
    
    
    const localTasks = JSON.parse(localStorage.getItem('tasks'))
    console.log(localTasks);
    const [tasks, setTasks] = useState(localTasks || []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

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

    return <TaskListContext.Provider value={{tasks, addTask, removeTask, findItem, editItem, editTask, toggleTaskCompletion }}>{props.children}</TaskListContext.Provider>
};

export default TaskListContextProvider;