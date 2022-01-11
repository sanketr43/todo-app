import React from 'react';

function TaskItem() {
    return(
        <label className='task-item'>
            <input type='checkbox' name='task' />
            <span>This is the first task</span>
        </label>
    );
}

export default TaskItem;