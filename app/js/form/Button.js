"use strict";

import React from 'react';
//import BaseField from './BaseField';


class Button extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            type: props.data.type || "submit",
            name: props.data.name || "success",
            value: props.data.value,
            className: props.data.className || ""
        };
    }

    render() {

        let name = "btn btn-" + this.state.name + " " + this.state.className;
        return (
            <button name={this.state.type}
                    className={name}
                    type={this.state.type}>
                {this.state.value}
            </button>
        )
    }
}

export default Button;
