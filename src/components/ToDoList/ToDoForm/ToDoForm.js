import React, {Component}from "react";
import styles from './ToDoFormStyle.module.css'

class ToDoForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todo: ''
        }

    }
    
    changeHandler = ({target: {value, name}}) => {
        this.setState ({
            [name]: value
        })
    }
    submitHandler = (event) => {
        const {props: {sendData}} = this;
        event.preventDefault();
        sendData(this.state.todo);

        this.setState({
            todo: ''
        })
    }

    render() {
        const {todo} = this.state;

        return (
            <form onSubmit={this.submitHandler} className={styles.container}>
                <input type="text" value={todo} name="todo" onChange={this.changeHandler}/>
                <button type="submit">Submit</button>
            </form>
        );
    }
}


export default ToDoForm;
