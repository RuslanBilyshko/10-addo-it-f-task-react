import React from 'react';
import CONSTAPI from './ConstApi';
import axios from 'axios';




class TaskApi extends React.Component {


    constructor() {
        super();
        this.url = CONSTAPI.DOMAIN + CONSTAPI.TASK_GET;
        this.state = {
            data: []
        }

    }

    get(callback) {
        axios.get(this.url)
            .then(function (response) {
                callback(response.data);
                console.log("result", response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
}


export default new TaskApi;


