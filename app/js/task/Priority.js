import React from 'react';

class Priority extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            priority: props.priority
        }
    }

    render() {
        let priority = "priority-" + this.state.priority;
        return (<span className={priority} />);
    }

}

export default Priority;
