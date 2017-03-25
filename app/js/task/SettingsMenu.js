import React from 'react';

class SettingsMenu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: props.data
        }
    }

    render() {

        return (
            <div className="task_settings" >
                <button>Edit</button>
                <button>Delete</button>
            </div>
        );
    }
}

export default SettingsMenu;
