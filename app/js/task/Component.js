"use strict";

import React from 'react';
import TaskList from './TaskList';
import TaskStore from './Store';
import Form from '../form/Component';
import Button from '../form/Button';
import Link from '../form/Link';
import FORM_CONST from './../form/Constants';
import taskFormSchema from './TaskFormSchema';
import TaskApi from './../api/TaskApi';

class TaskListContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: TaskStore.getAll(),
            showForm: true,
            form: "",
            button: ""

        };

        console.log(this.state.data);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnClickAddButton = this.handleOnClickAddButton.bind(this);
    }

    handleSubmit(data) {
        this.setState({
            data: TaskStore.getAll()
        });
        console.log(data);
    }

    handleOnClickAddButton(e) {
        e.preventDefault();

        if (this.state.showForm)
            this.setState({
                showForm: false,
                form: this.renderAddForm(),
                button: this.renderCancelButton()
            });
        else
            this.setState({
                showForm: true,
                form: null,
                button: this.renderAddButton()
            });

    }

    renderAddButton() {
        return (<a className="text-danger" href="#"
                   onClick={this.handleOnClickAddButton}
        >+ Добавить задачу</a>);
    }

    renderCancelButton() {
        return (<a className="text-info" href="#"
                   onClick={this.handleOnClickAddButton}
        >- Отмена</a>);
    }

    renderAddForm() {
        return (<Form eventName={FORM_CONST.ADD} schema={taskFormSchema} className="form"/>);
    }

    componentDidMount() {
        this.setState({button: this.renderAddButton()});

        TaskStore.addEventListener(FORM_CONST.ADD, this.handleSubmit);
    }

    componentWillUnmount() {
        TaskStore.removeEventListener(FORM_CONST.ADD, this.handleSubmit);
    }

    render() {

        return (
            <div>
                <TaskList data={this.state.data}/>
                {/*Сдесь хотел чтобы отмена была осуществлена кнопкой с формы*/}
                {/*но не понял как это обработать*/}
                {/*если можно растолкуйте :)*/}

                <div className="add-form-container">
                    {/*<div className="task-list-button ">{this.state.button}</div>*/}
                    {/*{this.state.form}*/}
                    {this.renderAddForm()}

                </div>
                <div>

                </div>
            </div>

        );
    }

}

export default TaskListContainer;
