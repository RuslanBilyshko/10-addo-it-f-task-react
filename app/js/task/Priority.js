"use strict";

import React from 'react';
import FontAwesome from 'react-fontawesome';

class Priority extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            priority: props.priority
        }
    }

    render() {
        let priority = "clearfix task_priority priority-" + this.state.priority;
        return (<div className={priority} >{<FontAwesome name='square' />}</div>);
    }

}

export default Priority;
