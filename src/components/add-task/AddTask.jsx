import React, { Component } from 'react';
import './add-task.css';

class AddTask extends React.Component {
    render() { 
        return (
            <div className='add-task'>
                <input name='addTask' id='addTask' placeholder='add details' />
                <button>Add</button>
            </div>
        );
    }
}
 
export default AddTask;