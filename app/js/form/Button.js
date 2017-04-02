"use strict";

import React from 'react';
import FormActions from './Actions';


class Button extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            type: props.data.type || "submit",
            name: props.data.name || "success",
            value: props.data.value,
            className: props.data.className,
            eventName: props.data.eventName,
            id: props.data.id
        };
    }

    render() {

        let name = "btn btn-" + this.state.name + " " + this.state.className;
        return (
            <button id={this.state.id} name={this.state.id}
                    className={name}
                    type={this.state.type}>
                {this.state.value}
            </button>
        )
    }
}

export default Button;
