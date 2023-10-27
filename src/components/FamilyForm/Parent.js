import React from "react";
import Children from "./Children";

class Parent extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            name: null
        }
    }

    getStateFromChild = (username) => {
        this.setState({
            name: username
        })
    }

    render() {
        const {name} = this.state;
        return(
            <>
                <Children sendUsernameToParent= {this.getStateFromChild}/>
                <p>Hi, {name}</p>
            </>
        )
    }
}

export default Parent;
