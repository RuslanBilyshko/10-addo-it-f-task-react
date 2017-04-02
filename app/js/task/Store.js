'use strict';

import AppDispatcher from './../appDispatcher';
import BaseStore from "./../BaseStore";
import FORM_CONST from "./../form/Constants";
import tasks from './../data/tasks';
import TaskApi from './../api/TaskApi';
import CONSTAPI from './../api/ConstApi';
import axios from 'axios';


class TaskStore extends BaseStore {

    constructor() {
        super();
        this.items = tasks;
        this.changeState = this.changeState.bind(this);
    }

    componentDidMount() {

    }


    getAll() {


        return this.items;
        //return this.items;
    }

    changeState(data) {

        this.items = data;
    }

    push(data) {
        this.items.push(data)
    }

}

let instanseTaskStore = new TaskStore();

instanseTaskStore.dispatchTocken = AppDispatcher.register((action) => {
    switch (action.eventName) {
        case FORM_CONST.ADD:
            instanseTaskStore.push(action.data);
            instanseTaskStore.emit(action.eventName, action.data);
            return false;
        default:
            return false;
    }
});


export default instanseTaskStore;