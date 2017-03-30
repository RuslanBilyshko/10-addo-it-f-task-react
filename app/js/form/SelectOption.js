"use strict";

import React from 'react';


class SelectOption extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: props.value,
            name: props.name,
            selected: props.selected || false
        }
    }

    render() {

        let selected = this.state.selected ? "selected" : '';

        return (
                <option value={this.state.value} >{this.state.name}</option>
        );
    }
}

export default SelectOption;
