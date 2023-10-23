import React from "react";

class Toggler extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            scene: true
        }
    }

   clickTab () {
       this.setState({
            scene: !this.state.scene
        });
        this.props.changeParent();
    }

    render() {
        return (
            <button onClick={() => {this.clickTab()}}> {this.state.scene? 'On' : 'Off'} </button>
        )
    }
}

export default Toggler