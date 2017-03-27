import React from 'react';
import ReactDOM from 'react-dom';

class TaskForm extends React.Component {


    render() {

        return (
            <div className="task-edit-form col-md-6">
                <form role="form" className="">
                    <div className="form-group">
                        <label >Title</label>
                        <input type="email" className="form-control" id="title" placeholder="Task Title"/>
                    </div>
                    <div className="form-group">
                        <label >Project</label>
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
