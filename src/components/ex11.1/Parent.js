import React from 'react';
import CustomButton from './CustomButton';

const colors = ["blue","red","yellow"];

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {color: ""}
    }

    changeColor = (color) => {
        this.setState({color: color})
    }

    render() {
        return (
            <div>
                <CustomButton color={colors[0]} callBack={this.changeColor}/>
                <CustomButton color={colors[1]} callBack={this.changeColor}/>
                <CustomButton color={colors[2]} callBack={this.changeColor}/>
                <br/>
                <h2>The color selected is: {this.state.color}</h2>
            </div>
        )
    }
}

export default Parent;