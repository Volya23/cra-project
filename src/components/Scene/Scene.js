import React from "react";
import Toggler from './Toggler';
import './style.css';
import Indicator from './Indicator';


class Scene extends React.Component {
    constructor(props) {
        super (props)

        this.state = {
            light: true
        }
    }

    toggleScene() {
        this.setState({
            light: !this.state.light
        })
    }

    render() {
        const {light} = this.state;
        return (
           <div className= {light === true ? 'scene-off' : 'scene-on'}>
                <Toggler buttonText = {light ? 'Off' : 'On'} changeParent={() => {this.toggleScene()}}/>
                <Indicator text={light ? 'Light is on' : 'Light is off'}/>
            </div>
        )
    }
}

export default Scene;