"use strict";

import React, {Component} from 'react';
import tasks from '../data/tasks';

class TaskApi extends Component
{
    getAll() {
        return tasks;
    }
}

export default new TaskApi();