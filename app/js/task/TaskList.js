"use strict";

import React from 'react';
import TaskItem from './TaskItem';

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
            </div>
        );
    }
}

export default TaskList;
