"use strict";

import React from 'react';
import Label from './Label';
import InputText from './InputText';
import Select from './Select';
import Button from './Button';


class FormGroup extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            className: props.className || "form-group",
            label: props.field.label,
            labelOnly: props.field.labelOnly,
            field: props.field
        }
    }

    fieldInit() {
        let field;

        if (this.state.field.type == 'text')
            field = <InputText data={this.state.field}/>;

        if (this.state.field.type == 'date')
            field = <InputText data={this.state.field}/>;

        if (this.state.field.type == 'select')
            field = <Select data={this.state.field}/>;

        return field;
    }

    render() {


        return (
            <div className={this.state.className}>
                <Label htmlFor={this.state.field.name} only={this.state.labelOnly} title={this.state.label} />
                {this.fieldInit()}
            </div>
        )
    }


}


export default FormGroup;