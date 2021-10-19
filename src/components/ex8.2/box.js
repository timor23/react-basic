import React from 'react';
import './style.css';
class Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = {clsName: 'box'};
    }

    slide = () => {
        this.setState({clsName: 'box slide'});
        console.log("slide: " + this.state.clsName)
    }

    hide = () => {
        this.setState({clsName: 'box'});
        console.log("hide: " + this.state.clsName)
    }

    componentDidMount() {
        setTimeout(this.slide, 1000);
    }

    componentDidUpdate() {
        setTimeout(this.hide, 4000);
    }

    render() {
        return <div className={this.state.clsName}></div>
    }
}

export default Box;