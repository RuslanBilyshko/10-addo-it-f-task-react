"use strict";

import React from 'react';

class BaseField extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            label: props.data.label,
            labelOnly: props.data.labelOnly,
            type: props.data.type,
            name: props.data.name,
            placeholder: props.data.placeholder,
            value: props.data.value,
            className: props.data.className || "form-control"
        };
    }
}

export default BaseField;

