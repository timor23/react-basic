import React from 'react'
import Button from './Button'

class Ex7_1 extends React.Component {
    constructor(props) {
        super(props)

        this.state = { counter: 0 }
    }

    increment = () => {
        this.setState({ counter: this.state.counter + 1 })
    }

    render() {
        return (
            <div style={{ display: 'flex',  flexDirection: 'row'}}>
                <Button onClick={this.increment} name="increment"/>
                <h2>{this.state.counter}</h2>
            </div>
        );
    }
}

export default Ex7_1;