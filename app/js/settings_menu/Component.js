import React from 'react';
import ReactDOM from 'react-dom';
import SettingsMenuStore from './Store';
import CONSTANTS from './Constants';

class SettingsMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: SettingsMenuStore.getState(),
            component: null
        };
        this.changeState = this.changeState.bind(this);
    }

    componentDidMount() {
        SettingsMenuStore.addEventListener(CONSTANTS.OPEN, this.changeState);
        SettingsMenuStore.addEventListener(CONSTANTS.CLOSE, this.changeState);
    }

    componentWillUnmount() {
        SettingsMenuStore.removeEventListener(CONSTANTS.OPEN, this.changeState);
        SettingsMenuStore.removeEventListener(CONSTANTS.CLOSE, this.changeState);
    }

    changeState(data) {
        this.setState({
            isOpen: SettingsMenuStore.getState(),
            component: data
        });
    }

    render() {

        return (
            <div className="settings_menu">
                {/*{this.state.component}*/}
                <button className="task-button-edit btn btn-default"/>
                <button className="task-button-remove btn btn-default"/>
                {/*<button className="task-button-get-menu">&nbsp;</button>*/}
            </div>
        );
    }
}

export default SettingsMenu;
