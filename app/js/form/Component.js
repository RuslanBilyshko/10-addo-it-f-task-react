"use strict";

import React from 'react';
import Button from './Button';
import Link from './Link';
import FormGroup from './FormGroup';
import FormActions from './Actions';
import CONSTANTS from './Constants';

let newTask = {
    "date": "2017-03-27",
    "id": 88,
    "priority": 2,
    "project": {
        "color": "#f89c7e",
        "id": 1,
        "name": "project 1",
        "user": {
            "id": 1,
            "username": "root"
        }
    },
    "title": "New task"
};


class Form extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            action: props.action,
            method: props.method,
            className: props.className,
            schema: props.schema,
            eventName: props.eventName || CONSTANTS.ADD
        };
    }

    render() {

        let fieldsHtml = this.state.schema.map((data, index) => {

            if (data.type == 'submit')
                return <Button key={index} data={data}/>;

            if (data.type == 'link')
                return <Link key={index} data={data}/>;

            return <FormGroup key={index} field={data}/>;
        });

        return (
            <form onSubmit={(e) => {
                e.preventDefault();
                FormActions.onSubmit(this.state.eventName, newTask);


            }} className={this.state.className} action={this.state.action} method={this.state.method}>
                {fieldsHtml}
            </form>
        );
    }
}


Form.defaultProps = {
    action: "/",
    method: "POST",
    className: "form",
    schema: []
};

export default Form;
