"use strict";

import React from 'react';
import TaskList from './TaskList';
import TaskApi from './TaskApi';

class TaskListContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: TaskApi.getAll()
        }
    }


    render() {

        return (
            <TaskList data={this.state.data}/>
        );
    }

}

export default TaskListContainer;
