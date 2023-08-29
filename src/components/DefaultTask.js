import React from 'react';

const DefaultTask = ({ task }) => {

    return (
        <div className={`task ${task.completed ? 'line-through' : ''} grid gap-4`}>
            <span className="mb-2">{task.title}</span>
            <span className="mb-2">{task.dueDate}</span>
        </div>
    );
};

export default DefaultTask;
