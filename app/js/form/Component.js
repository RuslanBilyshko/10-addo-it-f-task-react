"use strict";

import React from 'react';
import Button from './Button';
import Link from './Link';
import FormGroup from './FormGroup';


class Form extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            action: props.action,
            method: props.method,
            className: props.className,
            schema: props.schema
        };
    }

    render() {

        let fieldsHtml = this.state.schema.map((data, index) => {

            if (data.type == 'submit')
                return <Button key={index} data={data}/>;

            if (data.type == 'link')
                return <Link key={index} data={data}/>;

            return <FormGroup key={index} field={data}/>;
        });

        return (
            <form className={this.state.className} action={this.state.action} method={this.state.method}>
                {fieldsHtml}
            </form>
        );
    }
}


Form.defaultProps = {
    action: "/",
    method: "POST",
    className: "form",
    schema: []
};

export default Form;
