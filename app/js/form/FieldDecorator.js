"use strict";

import React from 'react';
import Label from './Label';

function FieldDecorator(FormField) {

    return class extends React.Component {

        componentWillReceiveProps(nextProps) {
            console.log("componentWillReceiveProps()");
        }

        render() {
            return (
                <div className={this.props.wrapperClass}>
                    <Label htmlFor={this.props.name} only={this.props.labelOnly}/>
                    <FormField {...this.props} />
                </div>
            );
        }
    }
}

export default FieldDecorator;