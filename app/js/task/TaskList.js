import React from 'react';
import TaskItem from './TaskItem';

class TaskList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: this.props.data
        }
    }

    render() {
        return (
            <div className="task-list-container">
                <TaskItem data={this.state.data[0]}/>
            </div>
        );
    }
}

export default TaskList;
