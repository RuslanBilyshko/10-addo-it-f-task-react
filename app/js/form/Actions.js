'use strict';

import AppDispatcher from '../appDispatcher';
import CONSTANTS from './Constants';

class FormActions {

    onSubmit(eventName, data) {
        AppDispatcher.dispatch({
            eventName: eventName,
            data: data

        });
    }
}

export default new FormActions();