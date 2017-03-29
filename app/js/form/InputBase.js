"use strict";

import React from 'react';
import Label from './Label';

class InputBase extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            label: props.label,
            type: props.type,
            name: props.name,
            placeholder: props.placeholder,
            value: props.value,
            className: props.className,
            wrapperClass: props.wrapperClass
        };
    }

    render() {

        let labelClass = "";

        if (this.state.label == "") {
            this.state.label = this.state.name;
            labelClass = "sr-only";
        }

        return (
            <div className={this.state.wrapperClass}>
                <label className={labelClass} htmlFor={this.state.name}>{this.state.label}</label>
                <input type={this.state.type}
                       name={this.state.name}
                       id={this.state.name}
                       className={this.state.className}
                       placeholder={this.state.placeholder}
                       value={this.state.value}/>
            </div>
        )
    }
}

InputBase.defaultProps = {
    label: "",
    type: "text",
    name: "text",
    placeholder: "Please enter text",
    value: "",
    className: "form-control",
    wrapperClass: "form-group"
};

export default InputBase;

