import React, { Component } from 'react';
import './task-list.css';
import TaskItem from '../task-item/TaskItem';

class TaskList extends React.Component {
    constructor(props){
        super(props);
    }

    render() { 
        return (
            <div className='task-list'>
                <TaskItem />
                <TaskItem />
                <TaskItem />
            </div>
        );
    }
}
 
export default TaskList;
