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

        return (
            <div id="task-" className="task_item">
                <Priority priority={this.state.data.priority} />
                <div className="task_item_title">{this.state.data.title}</div>
                <Project data={this.state.data.project} />
                <SettingsMenu/>
                {/*{console.log("Data - ", this.state.data)}*/}
            </div>
        );
    }

}

export default TaskItem;
