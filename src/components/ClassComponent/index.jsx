import React from 'react';

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log('Component created!');
    }

    render() {
        return <p>Hello, {this.props.name}!</p>;
    }
}

export default MyComponent;