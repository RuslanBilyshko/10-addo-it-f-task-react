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

        let tList = this.props.data.map((item)=>{
            return <TaskItem data={item}/>
        });

        return (
            <div className="task-list-container">
                {tList}
            </div>
        );
    }
}

export default TaskList;
