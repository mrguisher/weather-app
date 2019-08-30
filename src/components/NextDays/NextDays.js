import React from 'react';
import './NextDays.css';


const Button = (props) => {
    return(
        <div className="temp-small-box">
            <p className="temp-small-hour">{props.hour}</p>
            <img className="temperature-img-small" src={props.imageSource} alt="weather"></img>
            <p className="temp-small-item">{props.temp} &deg;C</p>
        </div>
    )
}
export default Button;
