"use strict";

import React from 'react';
import projects from './../data/projects';
import withCrud from '../hoc/withCrud';


const apiUrl = "http://localhost:5000/api/project";

function ProjectContainer({todos, onToggle, onRemove}) {

    debugger;


    return (
        <div className="project-container">
            <ul className="filter_list">
                <li><a href="#">Сегодня</a></li>
                <li><a href="#">Следующие 7 дней</a></li>
            </ul>
            <ul className="project_list">
                {todos.map(todo =>
                    <li key={todo.value}><a href="#">{todo.name}</a>
                        <button className="btn btn-primary btn-xs" onClick={() => onRemove(todo.id)}>X
                        </button>
                    </li>
                )}
            </ul>
        </div>

    );


}

export default withCrud(ProjectContainer, apiUrl);