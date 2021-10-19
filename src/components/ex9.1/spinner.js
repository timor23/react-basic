import React from 'react';
import ReactDOM from 'react-dom';
import styles from './style.module.css';

class Spinner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {timer: 10, display: 'flex'};
    }

    countdown = () => {
        this.setState({
            timer: this.state.timer - 1,
            display: this.state.timer > 0 ? 'flex' : 'none'
        })
    }

    componentDidMount() {
        setInterval(this.countdown, 1000);

    }

    render() {
        return (
            <div style={{display: this.state.display}}>
                <div className={"dot dot1"}></div>
                <div className={"dot dot2"}></div>
                <div className={"dot dot3"}></div>
            </div>
        )
    }
}

export default Spinner;