import React, { Component } from 'react';
import Child from './Child';

class List extends Component {
    render() {
        return (
            <Child>
                <p>Hello, Child</p>
            </Child>
        );
    }
}

export default List;
