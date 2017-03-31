"use strict";

import React from 'react';
import FormActions from './Actions';
import CONSTANTS from './Constants';

class BaseField extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            label: props.data.label || '',
            labelOnly: props.data.labelOnly,
            type: props.data.type,
            name: props.data.name,
            placeholder: props.data.placeholder,
            value: props.data.value || '',
            className: props.data.className || "form-control",
            eventName: props.eventName || CONSTANTS.BLUR_FIELD,
        };


    }

    handleChange(e) {
        // console.log("change", e.target.value);
        // console.log("change", e.target.getAttribute('name'));
    }

    handleBlur(e) {

        let data = {
            name: e.target.getAttribute('name'),
            value: e.target.value
        };

        FormActions.onBlurField(this.state.eventName, data);
    }




}


export default BaseField;

