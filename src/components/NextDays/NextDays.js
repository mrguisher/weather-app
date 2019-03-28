import React from 'react';
import './NextDays.css';


const Button = (props) => {
    return(
        <div className="temp-small-box">
            <img className="temperature-img-small" src={props.imageSource_1} alt="weather"></img>
            <p className="temp-small-item">{props.temp1} &deg;C</p>
            <p className="temp-small-item">{props.whichDay}</p>
        </div>
    )
}
export default Button;
