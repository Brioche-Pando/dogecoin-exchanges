import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
    return (
        <li className="Card" key={props.id}>
            <Link to={`/exchange/${props.id}`} className="Card__inner">
                <h2 className="Card__title">{props.name}</h2>
                <p className="Card__desc">Adjusted volume 24h share :{props.adjusted_volume_24h_share}</p>
            </Link>
        </li>
    )
}