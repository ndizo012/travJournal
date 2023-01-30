import React from "react";
import Image from "../images/japan.png"

export default function Card() {
    return (
    <div className="card">
        
        <img src={Image} className="card--image"/>
        <div className="card--content">
            <p className="loc">Japan • <a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8">View on Google Maps</a></p>
            <h1 className="card--title">Mount Fuji</h1>
            <p className="date">Jan 12 - Feb 20</p>
            <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
        </div>
    </div>
    )
}