import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TaskListContextProvider from './context/TaskListContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TaskListContextProvider>
    <App />
    </TaskListContextProvider>
  </React.StrictMode>
);


