"use strict";

import React from 'react';
import Button from './Button';
import InputText from './InputText';


class Form extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            action: props.action,
            method: props.method,
            className: props.className
        };
    }

    render() {
        return (
            <form className={this.state.className} action={this.state.action} method={this.state.method}>
                <InputText name="title" placeholder="Title task..." labelOnly={true} />
                <Button/>

            </form>
        );
    }
}


Form.defaultProps = {
    action: "/",
    method: "POST",
    className: "form"
};

export default Form;
