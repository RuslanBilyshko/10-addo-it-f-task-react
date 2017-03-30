"use strict";

import React from 'react';
import BaseField from './BaseField';
import SelectOption from './SelectOption';

class Select extends BaseField {

        constructor(props) {
        super(props);

        this.state.options = props.data.options || [];
    }

    render() {

        let isSelected = false;

        let sel = 1;

        let optionsHtml = this.state.options.map((item, index) => {

            //if(this.state.selected && this.state.selected == item.value)
            if(sel == item.value)
                isSelected = true;

            return <SelectOption key={index} selected={isSelected} value={item.value} name={item.name}/>
        });

        return (
            <select value={this.state.value} className={this.state.className} name={this.state.name}>
                <option value="none">{this.state.placeholder}</option>
                {optionsHtml}
            </select>
        );
    }
}

export default Select;
