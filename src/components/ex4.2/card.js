import './cardStyle.css';
import React from "react";

const Card = ({img}) => {
    return <div className={"card"}>
        <div>
            <img src={img} width={200} height={"50%"}/>
        </div>

        <div className={"bottom-card"}>
            <p>title</p>
            <p>desc</p>
            <div className={"links-area"}>
                <a href="https://twitter.com">link1</a>
                <a href="#">link2</a>
            </div>
        </div>
    </div>
}

export default Card;