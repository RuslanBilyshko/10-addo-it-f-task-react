'use strict';

import AppDispatcher from '../appDispatcher';

class FormActions {

    onSubmit(eventName, data) {
        AppDispatcher.dispatch({
            eventName: eventName,
            data: data

        });
    }

    onChangeField(eventName, data) {
        AppDispatcher.dispatch({
            eventName: eventName,
            data: data

        });
    }

    onBlurField(eventName, data) {
        AppDispatcher.dispatch({
            eventName: eventName,
            data: data
        });
    }


}

export default new FormActions();