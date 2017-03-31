"use strict";

import React from 'react';
import BaseField from './BaseField';
import FormActions from './Actions';
import CONSTANTS from './Constants';

class InputText extends BaseField {

    render() {

        return (
            <input type={this.state.type}
                   name={this.state.name}
                   id={this.state.name}
                   className={this.state.className}
                   placeholder={this.state.placeholder}
                   value={this.state.value}
                   onChange={this.handleChange.bind(this)}
                   onBlur={this.handleBlur.bind(this)}

            />
        )
    }
}

export default InputText;
