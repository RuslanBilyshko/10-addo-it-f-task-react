import React from 'react';

class Priority extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            priority: props.priority
        }
    }

    render() {
        let priority = "task__priority priority-" + this.state.priority;
        return (<div className={priority} />);
    }

}

export default Priority;
