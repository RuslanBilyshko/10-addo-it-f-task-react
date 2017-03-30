"use strict";

import React from 'react';
import Form from '../form/Component';
import TaskItem from './TaskItem';
import taskFormSchema from './TaskFormSchema';

class TaskList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: props.data,
            isForm: false
        };

        //this.changeState = this.changeState.bind(this);
    }

    render() {

        let tList = this.props.data.map((item) => {
            return <TaskItem key={item.id} data={item}/>
        });

        return (
            <div className="task-list-container">
                {tList}
                <div className="add-form-container">
                    <Form schema={taskFormSchema} className="form-inline" />
                </div>
            </div>
        );
    }
}

export default TaskList;
