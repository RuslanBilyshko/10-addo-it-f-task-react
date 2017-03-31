"use strict";

import React from 'react';
import Button from './Button';
import Link from './Link';
import FormGroup from './FormGroup';
import FormActions from './Actions';
import FormStore from './Store';
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
            eventName: props.eventName || CONSTANTS.ADD,
            data: props.data || FormStore.all()
        };

        this.changeData = this.changeData.bind(this);


    }

    onSubmitHandle(e) {
        e.preventDefault();
        FormActions.onSubmit(this.state.eventName, this.state.data);
    }

    changeData() {

        this.setState({
            data: FormStore.all()
        });

        console.log(this.state.data);
    }

    componentDidMount() {

        FormStore.addEventListener(CONSTANTS.BLUR_FIELD, this.changeData);
    }

    componentWillUnmount() {
        FormStore.removeEventListener(CONSTANTS.BLUR_FIELD, this.changeData);
    }


    render() {

        let fieldsHtml = this.state.schema.map((fSchema, index) => {

            if (fSchema.type == 'submit')
                return <Button key={index} data={fSchema}/>;

            if (fSchema.type == 'link')
                return <Link key={index} data={fSchema}/>;

            if (this.state.data.hasOwnProperty(fSchema.name))
                fSchema.value = this.state.data[fSchema.name];

            return <FormGroup key={index} field={fSchema}/>;
        });

        return (
            <form onSubmit={this.onSubmitHandle.bind(this)}
                  className={this.state.className}
                  action={this.state.action}
                  method={this.state.method}
            >
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
