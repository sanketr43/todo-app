import React, { Component } from 'react';

class TaskList extends React.Component {
    constructor(props){
        super(props);
    }

    render() { 
        return <div>{console.log(this.props.filter)}</div>;
    }
}
 
export default TaskList;