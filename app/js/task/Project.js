import React from 'react';

class Project extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: props.data
        }
    }

    render() {
        let pId = "task_project task_project-" + this.props.data.id;
        let pColor = this.props.data.color;

        return (
            <div className={pId} >
                <div className="task_project_name">{this.props.data.name}</div>
                <span className="task_project_color" style={{color: pColor}}/>
            </div>
        );
    }
}

export default Project;
