import React from 'react';
import TaskItem from './TaskItem';
import TaskForm from './Form';

class TaskList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: this.props.data,
            isForm: false,
            button: this.addButton(),
            form: null
        };

        this.changeState = this.changeState.bind(this);
    }

    addButton() {
        return (
            <button className="btn btn-success" onClick={() => {
                this.changeState(<TaskForm/>)
            }}>+ Добавить задачу</button>
        );
    }

    canselButton() {
        return (
            <a className="btn" href="#" onClick={() => {
                this.changeState(<TaskForm/>)
            }}>Отмена</a>
        );
    }

    changeState(data) {

        //this.state.toggleClass = this.state.toggleClass == "close" ? "open" : "close";

        if (!this.state.isForm) {
            this.setState({
                form: data,
                button: this.canselButton(),
                isForm: true
            });
        } else {
            this.setState({
                form: null,
                button: this.addButton(),
                isForm: false
            });
        }


    }

    render() {

        let tList = this.props.data.map((item) => {
            return <TaskItem data={item}/>
        });

        return (
            <div className="task-list-container">
                {tList}
                <div className="add-form-container">
                    {this.state.form}
                    {this.state.button}
                </div>
            </div>
        );
    }
}

export default TaskList;
