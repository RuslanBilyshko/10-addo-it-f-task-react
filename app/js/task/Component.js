"use strict";

import React from 'react';
import TaskList from './TaskList';
import TaskStore from './Store';
import Form from '../form/Component';
import CONSTANTS from './../form/Constants';
import taskFormSchema from './TaskFormSchema';

class TaskListContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: TaskStore.getAll()
        };

        this.updateList = this.updateList.bind(this);
    }

    updateList(data) {
        this.setState({
            data: TaskStore.getAll()
        });
        console.log(data);
    }

    componentDidMount() {
        TaskStore.addEventListener(CONSTANTS.ADD, this.updateList);
    }

    componentWillUnmount() {
        TaskStore.removeEventListener(CONSTANTS.ADD, this.updateList);
    }




    render() {

        return (
            <div>
                <TaskList data={this.state.data}/>
                <div className="add-form-container">
                    <Form eventName={CONSTANTS.ADD} schema={taskFormSchema} className="form-inline"/>
                </div>
            </div>

        );
    }

}

export default TaskListContainer;
