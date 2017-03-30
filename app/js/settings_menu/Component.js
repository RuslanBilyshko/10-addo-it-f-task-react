"use strict";

import React from 'react';
import Button from '../form/Button';

class SettingsMenu extends React.Component {

    render() {

        let editButton = {
            type: "button",
            className: "task-button-edit",
            name: "info",
            value: ""
        };

        let removeButton = {
            type: "button",
            className: "task-button-remove",
            name: "danger",
            value: ""
        };

        return (
            <div className="settings_menu">
                <Button data={editButton} />
                <Button data={removeButton} />
            </div>
        );
    }
}

export default SettingsMenu;
