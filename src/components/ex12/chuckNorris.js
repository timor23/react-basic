import React from 'react';
import './style.css';

class ChuckNorris extends React.Component {
    constructor(props) {
        super(props);
        this.state = {joke: ""};
    }

    getJoke = async () => {
        const URL = `https://api.chucknorris.io/jokes/random`,
            joke = await (await fetch(URL)).json();

        this.setState({joke: joke.value})
    }

    render() {
        return(
            <div>
                <input type="button" value={"Random Joke"} className={'btn'} onClick={this.getJoke}/>
                <p>{this.state.joke}</p>
            </div>
        )
    }
}

export default ChuckNorris;