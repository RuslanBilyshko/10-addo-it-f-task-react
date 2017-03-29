"use strict";

import React from 'react';
import Button from './Button';
import InputText from './InputText';


let fieldsData = [
    {
        labelOnly: true,
        type: "text",
        name: "title",
    },
    {
        labelOnly: true,
        type: "text",
        name: "title",
    },
    {
        labelOnly: true,
        type: "text",
        name: "title",
    }
];

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

        let fieds = fieldsData.map((data, index)=> {
            return <InputText key={index} data={data}/>
        });

        return (
            <form className={this.state.className} action={this.state.action} method={this.state.method}>
                {/*<InputText data={fieldsData[0]}/>*/}
                {fieds}
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
