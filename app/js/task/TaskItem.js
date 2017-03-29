"use strict";

import React from 'react';
import Priority from './Priority';
import Project from './Project';
import SettingsMenu from '../settings_menu/Component';


class TaskItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: props.data,
            menu: null,
            toggleClass: "close",
            isOpen: false
        };

        this.changeState = this.changeState.bind(this);

    }

    changeState(data) {

        //this.state.toggleClass = this.state.toggleClass == "close" ? "open" : "close";

        if (!this.state.isOpen) {
            this.setState({
                menu: data,
                isOpen: true
            });
        } else {
            this.setState({
                menu: null,
                isOpen: false
            });
        }


    }

    render() {

        let tId = "task-" + this.state.data.id;

        return (
            <div id={tId} className="task col-md-12">
                <div className="task_title_wrapper">
                    <Priority priority={this.state.data.priority}/>
                    <div className="task_title">{this.state.data.title}</div>
                </div>
                <div className="task_settings" onClick={() => {
                    this.changeState(<SettingsMenu/>);
                }}>
                    &nbsp;
                </div>
                {this.state.menu}


                <Project data={this.state.data.project}/>


                {/*{console.log("Data - ", this.state.data)}*/}
            </div>
        );
    }

}

export default TaskItem;
