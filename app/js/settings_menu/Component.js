"use strict";

import React from 'react';
import Button from '../form/Button';

class SettingsMenu extends React.Component {

    render() {

        return (
            <div className="settings_menu">
                <Button className="task-button-edit" name="info" value=""/>
                <Button className="task-button-remove" name="danger" value="" />
            </div>
        );
    }
}

export default SettingsMenu;
