import React, {Component}from "react";
import styles from './ToDoFormStyle.module.css';
import cx from 'classnames';

class ToDoForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todo: '',
            isInputValid: true
        }

    }
    
    changeHandler = ({target: {value, name}}) => {
            if(value.includes('*') === true){
                this.setState ({
                 isInputValid: false
                })
            }else {
                this.setState ({
                    [name]: value,
                    isInputValid: true
                })
            }
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
        const {todo, isInputValid} = this.state;
        const className = cx ({
            [styles.input]: true,
            [styles['invalid-input']]:!isInputValid
        })

        return (
            <form onSubmit={this.submitHandler} className={styles.container}>
                <input
                type="text"
                value={todo}
                name="todo"
                onChange={this.changeHandler}
                className={className}
                />
                <button type="submit">Submit</button>
            </form>
        );
    }
}


export default ToDoForm;
