import React, {Component} from 'react';
import task_data from './task_data';

class TaskApi extends Component
{
    getAll() {
        return task_data;
    }
}

export default new TaskApi();