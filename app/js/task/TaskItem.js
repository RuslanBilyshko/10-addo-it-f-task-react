import React from 'react';
import Priority from './Priority';
import Project from './Project';
import SettingsMenu from './SettingsMenu';

class TaskItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: props.data
        }
    }

    render() {

        let tId = "task-" + this.state.data.id;

        return (
            <div id={tId} className="task col-md-12">
                <Priority priority={this.state.data.priority}/>
                <div className="task_title">{this.state.data.title}</div>
                <SettingsMenu/>
                <Project data={this.state.data.project}/>

                {/*{console.log("Data - ", this.state.data)}*/}
            </div>
        );
    }

}

export default TaskItem;
