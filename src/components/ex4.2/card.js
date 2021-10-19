import styles from './cardStyle.css';
import React from "react";

const Card = ({img, title, desc, link1, link2}) => {
    return <div className={"card"}>
        <div>
            <img src={img} width={200} height={"50%"}/>
        </div>

        <div className={"bottom-card"}>
            <p>{title}</p>
            <p>{desc}</p>
            <div className={"links-area"}>
                <a href={link1}>link1</a>
                <a href={link2}>link2</a>
            </div>
        </div>
    </div>
}

export default Card;