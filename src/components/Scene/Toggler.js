import React from "react";

class Toggler extends React.Component {

   clickTab () {
        this.props.changeParent();
    }

    render() {
        return (
            <button onClick={() => {this.clickTab()}}> {this.props.buttonText}</button>
        )
    }
}

export default Toggler