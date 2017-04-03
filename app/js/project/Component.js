"use strict";

import React from 'react';
import projects from './../data/projects';
import withCrud from '../hoc/withCrud';


const apiUrl = "http://localhost:5000/api/project";

function ProjectContainer({data, onToggle, remove}) {


    return (
        <div className="project-container">
            <ul className="filter_list">
                <li><a href="#">Сегодня</a></li>
                <li><a href="#">Следующие 7 дней</a></li>
            </ul>
            <ul className="project_list">
                {data.map(project =>

                    <li key={project.id}><a href={"#/project/"+project.id} >{project.name}</a>
                        <button className="btn btn-primary btn-xs" onClick={() => remove(project.id, data)}>X
                        </button>
                    </li>
                )}
            </ul>
        </div>

    );


}

export default withCrud(ProjectContainer, apiUrl);