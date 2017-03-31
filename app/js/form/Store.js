'use strict';

import AppDispatcher from './../appDispatcher';
import BaseStore from "./../BaseStore";
import FORM_CONST from "./../form/Constants";

class FormStore extends BaseStore {

    constructor() {
        super();
        this.data = {};
    }

    all() {
        return this.data;
    }

    put(key, value) {
        this.data[key] = value;
    }

}

let instanseFormStore = new FormStore();

instanseFormStore.dispatchTocken = AppDispatcher.register((action) => {
    switch (action.eventName) {
        case FORM_CONST.BLUR_FIELD:
            instanseFormStore.put(action.data.name, action.data.value);
            instanseFormStore.emit(action.eventName, action.data);
            return false;
        default:
            return false;
    }
});


export default instanseFormStore;