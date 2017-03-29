"use strict";

import React from 'react';
import Label from './Label';
import BaseField from './BaseField';
//import FieldDecorator from './FieldDecorator';

class InputText extends BaseField {

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

export default InputText;
