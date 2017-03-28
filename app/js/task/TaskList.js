import React from 'react';
import Form from '../form/Component';
import TaskItem from './TaskItem';




class TaskList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: props.data,
            isForm: false
        };

        //this.changeState = this.changeState.bind(this);
    }

    // addButton() {
    //     return (
    //         <button className="btn btn-success" onClick={() => {
    //             this.changeState(<Form />)
    //         }}>+ Добавить задачу</button>
    //     );
    // }
    //
    // canselButton() {
    //     return (
    //         <a className="btn" href="#" onClick={() => {
    //             this.changeState(<Form />)
    //         }}>Отмена</a>
    //     );
    // }
    //
    // changeState(data) {
    //
    //     //this.state.toggleClass = this.state.toggleClass == "close" ? "open" : "close";
    //
    //     if (!this.state.isForm) {
    //         this.setState({
    //             form: data,
    //             button: this.canselButton(),
    //             isForm: true
    //         });
    //     } else {
    //         this.setState({
    //             form: null,
    //             button: this.addButton(),
    //             isForm: false
    //         });
    //     }
    //
    //
    // }

    render() {

        let tList = this.props.data.map((item) => {
            return <TaskItem data={item}/>
        });

        return (
            <div className="task-list-container">
                {tList}
                <div className="add-form-container">
                    {/*{this.state.form}*/}
                    {/*{this.state.button}*/}
                    <Form />
                </div>
            </div>
        );
    }
}

export default TaskList;
