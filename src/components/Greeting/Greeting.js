import { render } from '@testing-library/react';
import React from 'react'

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isGreeting: true
        }
    }

    meeting () {
        this.setState( {
            isGreeting:  !this.state.isGreeting
        })
    } 

    render() {
        const {isGreeting} = this.state;
        const greetText = isGreeting ===true ? 'Hello' : 'Bye';
        return <h1 onClick={() => {this.meeting()}}>{greetText}, {this.props.name}</h1>
    }
}
export default Greeting;

