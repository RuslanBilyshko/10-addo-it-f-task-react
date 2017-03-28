import React from 'react';
import Button from './Button';
import InputText from './InputText';


class Form extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            action: props.action,
            method: props.method
        };
    }

    render() {
        return (
            <form className="form-inline" action={this.state.action} method={this.state.method}>
                <InputText/>
                <Button/>

            </form>
        );
    }
}


Form.defaultProps = {
    action: "/",
    method: "POST"
};

export default Form;
