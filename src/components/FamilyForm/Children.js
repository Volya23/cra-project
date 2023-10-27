import React from "react";

class Children extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    changeHandler = ({target: {value, name}}) => {
        this.setState({
            [name]: value
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        const {props: {sendUsernameToParent}, state: {name}} = this;
        sendUsernameToParent(name);

        this.setState({
            name: ''
        })
    }

    render() {
        const {name} = this.state;
        return(
            <form onSubmit={this.submitHandler}>
                <input type='text' placeholder="Type your name" name="name" value={name} onChange={this.changeHandler} />
                <button type="text">Send</button>
            </form>
        )
    }
}

export default Children;