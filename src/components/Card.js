import React from "react";
import Location from "../images/location.png"

export default function Card(props) {
    return (
    <div className="card">
        
        {/*alternatively for local files src={require(`../images/${props.item.imageLocal}`)}*/}
        <img src={props.item.imageUrl} className="card--image"/>
        <div className="card--content">
            <img src={Location} className="card--star"/>
            <span className="loc"> {props.item.location} • <a href={props.item.googleMapsUrl}>View on Google Maps</a></span>
            <h1 className="card--title">{props.item.title}</h1>
            <p className="date">{props.item.startDate} - {props.item.endDate}</p>
            <p>{props.item.description}</p>
        </div>
    </div>
    )
}