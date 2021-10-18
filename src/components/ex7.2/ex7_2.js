import React from 'react';
import './style.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {myBool: false};
    }
    
    clickHandler = () => {
        this.setState({myBool: !this.state.myBool})
    }
    
    render() {
        return (
            <div className={App}>
                <input type="button" onClick={this.clickHandler} value={"Click to toggle Box!"}/>
                <div className={"box"} style={{display: this.state.myBool ? "block" : "none"}}></div>
            </div>
        );
    }
}

export default App;