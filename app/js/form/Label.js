"use strict";

import React from 'react';

class Label extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            htmlFor: props.htmlFor,
            title: props.title,
            only: props.only
        };
    }

    render() {

        let labelClass = "label-form";
        let title = this.state.title;

        if (this.state.only) {
            labelClass = "sr-only";
        }

        if (title == "") {
            title = this.state.htmlFor;
            title = title[0].toUpperCase() + title.slice(1);
        }


        return (
            <label className={labelClass} htmlFor={this.state.htmlFor}>{title}</label>
        );

    }

}

Label.defaultProps = {
    title: "",
    only: false
};


export default Label;