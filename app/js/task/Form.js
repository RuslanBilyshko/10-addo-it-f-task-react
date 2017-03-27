import React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from "react-bootstrap-date-picker";
import FormData from 'react-form-data';



class TaskForm extends React.Component {



    constructor() {
        super();
        let value = new Date().toISOString();
        this.state = {
            value: value,
            mixins: [ FormData ]
        }
    }

    handleDateChange(value, formattedValue) {
        this.setState({
            value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
            formattedValue: formattedValue // Formatted String, ex: "11/19/2016"
        });
    }

    handleSubmit(event) {
     let url = 'urlToSendDataTo';
     //myRequestLib.post(url, this.formData);
        console.log(this.formData);
        event.preventDefault();

  }

    componentDidUpdate() {
        // Access ISO String and formatted values from the DOM.
        let hiddenInputElement = document.getElementById("date");
        hiddenInputElement.getAttribute('YYYY-mm-dd');
    }


    render() {

        return (
            <div className="task-edit-form ">
                <form action="/"
                      onChange={()=> {
                          this.updateFormData
                      }}
                      onSubmit={()=>{
                          this.handleSubmit

                      }}
                      role="form"
                      className="form-inline"
                      method="POST">

                    <div className="form-group">
                        <label className="sr-only">Title</label>
                        <input type="text" className="form-control" id="title" placeholder="Task Title"/>
                    </div>
                    <DatePicker
                        name="date" id="date"
                        dateFormat="YYYY-mm-dd"
                        value={this.state.value}
                        onChange={() => {
                            this.handleDateChange
                        }}/>

                    <div className="form-group">
                        <label className="sr-only">Project</label>
                        <select className="form-control">
                            <option value="1">Project 1</option>
                            <option value="2">Project 2</option>
                            <option value="3">Project 3</option>
                            <option value="4">Project 4</option>
                        </select>
                    </div>

                    <button type="submit" className="btn btn-success">Добавить</button>


                </form>
            </div>
        );
    }

}

export default TaskForm;
