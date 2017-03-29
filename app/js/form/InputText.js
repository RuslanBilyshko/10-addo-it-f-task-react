"use strict";

import React from 'react';
import Label from './Label';

class InputText extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            label: props.label,
            labelOnly: props.labelOnly,
            type: props.type,
            name: props.name,
            placeholder: props.placeholder,
            value: props.value,
            className: props.className,
            wrapperClass: props.wrapperClass
        };
    }

    render() {

        let placeholder = this.state.placeholder;
            placeholder = placeholder == "" ? "Please enter data from " + this.state.name : placeholder;

        return (
            <div className={this.state.wrapperClass}>
                <Label htmlFor={this.state.name} only={this.state.labelOnly} />
                <input type={this.state.type}
                       name={this.state.name}
                       id={this.state.name}
                       className={this.state.className}
                       placeholder={placeholder}
                       value={this.state.value}/>
            </div>
        )
    }
}

InputText.defaultProps = {
    label: "",
    labelOnly: false,
    type: "text",
    placeholder: "",
    value: "",
    className: "form-control",
    wrapperClass: "form-group"
};

export default InputText;
