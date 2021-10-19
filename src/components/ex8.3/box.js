import React from 'react';
import './style.css'

const colors = ["blue", "red", "yellow", "green", "pink", "purple", "cyan", "orange"];

class Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentColor: 'red', currentShape: 'box'};
        this.counter = 0;
    }

    changeColor = () => {
        this.setState({
            currentColor: colors[Math.floor(Math.random() * colors.length)],
            currentShape: this.counter < 5 ? this.state.currentShape : 'circle'
        });
        this.counter++;
    }

    componentDidMount() {
        setTimeout(this.changeColor, 500);
    }

    componentDidUpdate() {
        setTimeout(this.changeColor, 500);
    }

    render() {
        return <div className={this.state.currentShape} style={{backgroundColor: this.state.currentColor}}></div>
    }
}

export default Box;