import React from 'react';

class favColor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoriteColor: 'red'}
    }

    componentDidMount() {
        setTimeout(() => {this.setState({favoriteColor: 'blue'})}, 1000);
        console.log("componentDidMount");
    }

    componentDidUpdate() {
        const emptyDiv = document.querySelector("#change");
        emptyDiv.innerHTML = `The updated favorite color is ${this.state.favoriteColor}`;
        console.log("componentDidUpdate");
    }

    render() {
        return (
            <div>
                <h1 style={{color: this.state.favoriteColor}}>My favorite color is {this.state.favoriteColor}</h1>
                <div id={"change"}></div>
            </div>
        );
    }
}

export default favColor;