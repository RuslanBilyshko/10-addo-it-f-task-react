import AppDispatcher from '../appDispatcher';
import BaseStore from "../BaseStore";
import CONSTANTS from "./Constants";

class SettingsMenuStore extends BaseStore {

  constructor() {
    super();
    this.isOpen = false;
  }

  setState(data = true) {
    this.isOpen = data;
  }

  getState() {
    return this.isOpen;
  }

}

let instanseSettingsMenuStore= new SettingsMenuStore();

instanseSettingsMenuStore.dispatchTocken = AppDispatcher.register((action)=> {
  switch (action.eventName) {
    case CONSTANTS.OPEN:
      instanseSettingsMenuStore.setState();
      instanseSettingsMenuStore.emit(action.eventName, action.component);
      return false;
    case CONSTANTS.CLOSE:
      instanseSettingsMenuStore.setState(false);
      instanseSettingsMenuStore.emit(action.eventName);
      return false;
    default:
      return false;
  }
});

export default instanseSettingsMenuStore;
