"use strict";

import React from 'react';
import TaskList from './TaskList';
import TaskStore from './Store';
import Form from '../form/Component';
import FORM_CONST from './../form/Constants';
import taskFormSchema from './TaskFormSchema';

class TaskListContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: TaskStore.getAll()
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(data) {
        // this.setState({
        //     data: TaskStore.getAll()
        // });
        console.log(data);
    }

    componentDidMount() {
        TaskStore.addEventListener(FORM_CONST.ADD, this.handleSubmit);
    }

    componentWillUnmount() {
        TaskStore.removeEventListener(FORM_CONST.ADD, this.handleSubmit);
    }

    render() {

        return (
            <div>
                <TaskList data={this.state.data}/>
                <div className="add-form-container">
                    <Form eventName={FORM_CONST.ADD} schema={taskFormSchema} className="form"/>
                </div>
            </div>

        );
    }

}

export default TaskListContainer;
