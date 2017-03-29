"use strict";

import React from 'react';

class Button extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            type: props.type,
            name: props.name,
            value: props.value,
            className: props.className
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

Button.defaultProps = {
    type: "submit",
    name: "success",
    value: "Submit",
    className: ""
};

export default Button;
