import AppDispatcher from './../appDispatcher';
import CONSTANTS from './Constants';

class SettingsMenuAction {

  open(component) {
    AppDispatcher.dispatch({
      eventName: CONSTANTS.OPEN,
      component: component
    });
  }

  close() {
    AppDispatcher.dispatch({
      eventName: CONSTANTS.CLOSE
    });
  }

}

export default new SettingsMenuAction();
