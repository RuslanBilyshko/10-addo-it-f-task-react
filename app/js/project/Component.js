import React from 'react';


class ProjectContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: props.data
        }
    }


    render() {

        return (
            <div className="project-container">
                <ul className="filter_list">
                    <li><a href="#">Сегодня</a></li>
                    <li><a href="#">Следующие 7 дней</a></li>
                </ul>
                <ul className="project_list">
                    <li><a href="#">Project name</a></li>
                    <li><a href="#">Project name</a></li>
                    <li><a href="#">Project name</a></li>
                    <li><a href="#">Project name</a></li>
                    <li><a href="#">Project name</a></li>
                    <li><a href="#">Project name</a></li>
                </ul>
            </div>

        );
    }

}

export default ProjectContainer;