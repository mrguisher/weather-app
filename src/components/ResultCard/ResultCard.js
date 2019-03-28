import React, { Component } from 'react';
import '../../App.css';
import './ResultCard.css';
import Button from '../Button/Button';
import NextDays from '../NextDays/NextDays'

 class ResultCard extends Component{
  constructor() {
    super();

    this.state = {
      city: "",
      nextDays: {
        day1: [
          
          'hour_3-6',
          'hour_6-9',
          'hour_9-12',
          'hour_12-15',
          
        ]
      }
       
      

    };
  }   

  componentDidMount() {
    this.refs.resultBox.className = "fadeIn box result-card-box"
  }

  displayDay = (day) => { 
    this.setState({nextDays: day});
  }


  render() {
    return (

        <div ref="resultBox" className={this.props.className}>
            <div className="left-container">
              <h1 className="heading heading-results">{this.props.cityName}</h1>
              <div className="temperature-large_container">
                <div className="temperature-large">{this.props.current_temperature}&deg;C</div>
                <img className="temperature-img" src={this.props.imageMainSource} alt="weather"></img>
              </div>
            
              <p className="info">Aktualnie ciśnienie w mieście {this.props.cityName} wynosi {this.props.current_pressure} hPa</p>
              <p className="info">Wilgotność powietrza {this.props.current_humidity} %</p>
              
              <div className="togggle-days_container">
                  <div className='toggle-days' onClick={(day) => this.displayDay(day)}>29.03</div>
                  <div className='toggle-days' onClick={(day) => this.displayDay(day)}>30.03</div>
                  <div className='toggle-days' onClick={(day) => this.displayDay(day)}>31.03</div>
                  <div className='toggle-days' onClick={(day) => this.displayDay(day)}>01.04</div>
              </div>
                  <Button onClickHandle={this.props.onClickHandle}>Powrót do wyszukiwania</Button>

            </div>

               
            <div className="temps_container">

               {this.state.nextDays.day1.map((day) => <NextDays whichDay={day}/>)} 
           
            </div>
        </div>
      );
  }
}

export default ResultCard;