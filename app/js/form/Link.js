"use strict";

import React from 'react';
import Button from './Button';

class Link extends Button {

    constructor(props) {
        super(props);
        this.state.href = props.data.href || "#";
    }

    render() {

        return (
            <a  className={this.state.className}
                href={this.state.href}>
                {this.state.value}
            </a>
        )
    }
}

export default Link;