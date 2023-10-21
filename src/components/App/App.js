import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      light: true
    }
  }
  toggle () {
    this.setState({
      light: !this.state.light
    })
  }

  render() {
    const className = this.state.light ? 'lightOn' : 'lightOff'
    return(
      <>
      <div className={className}></div>
      <button onClick={() => {this.toggle()}}>Toggle</button>
      </>

    )
  }
}

export default App;
