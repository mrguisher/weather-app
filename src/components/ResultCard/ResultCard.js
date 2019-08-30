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
      currTemp: "",
      currHum: "",
      currPress: "",
      weatherID: "02d",

      currentDay: "",

      dayName: [
        'Dziś',
        'Jutro',
        'Pojutrze',
      ],
      isSingle: true,
    };
    this.dataManager = this.dataManager.bind(this);
    this.days = ["day1", "day2", "day3"];
    this.day1 = [];
    this.day2 = [];
    this.day3 = [];

    this.round = this.round.bind(this);
    this.calculate = this.calculate.bind(this);
  }   

  componentDidMount() {
    this.dataManager();
  }

  displayDay = (a) => { 

    this.setState({isSingle: false});

    if (a === 0) {
      this.setState({currentDay: "day1"})
    } else  if (a === 1){
      this.setState({currentDay: "day2"})
    } else {
      this.setState({currentDay: "day3"})
    }
    setTimeout((x => window.scrollTo(0,document.body.scrollHeight)), 100)
  }
  
  calculate = (kelvin) => {
    return Math.ceil(kelvin - 272.15);
  }
  round = (value) => {
    return Math.ceil(value);
  }

  dataManager = () => {

        const json = this.props.json;
        this.setState({jsonData: json});

        //  CURRENT WEATHER //
        this.setState({currPress: this.round(json.list[0].main.pressure)});
        this.setState({currHum: this.round(json.list[0].main.humidity)});
        this.setState({currTemp: this.calculate(json.list[0].main.temp)});

        this.setState({weatherID: json.list[0].weather[0].icon});

        // 3-DAYS WEATHER //

        // shorter version ??
        
        // [this.day1, this.day2, this.day3].map((day) => json.list.map((x) => x.dt_txt.slice(0, 10) === json.list[0].dt_txt.slice(0, 10) && day.push(x) && console.log))

        json.list.map((x) => x.dt_txt.slice(0, 10) === json.list[0].dt_txt.slice(0, 10) && this.day1.push(x));
        json.list.map((x) => x.dt_txt.slice(0, 10) !== json.list[0].dt_txt.slice(0, 10) && this.day2.push(x));
        json.list.map((x) => x.dt_txt.slice(0, 10) !== json.list[0].dt_txt.slice(0, 10) && this.day3.push(x));
  }

  render() {
    return (

        <div ref="resultBox" className={this.props.className}>
            <div className="main-container">
              <h1 className="heading-results">{this.props.cityName}</h1>
              <div className="temperature-large_container">
                <div className="temperature-large">{this.state.currTemp}&deg;C</div>
                <img className="temperature-img" src={`http://openweathermap.org/img/w/${this.state.weatherID}.png`} alt="weather"></img>
              </div>
            
              <p className="info">Aktualnie ciśnienie w mieście {this.props.cityName} wynosi {this.state.currPress} hPa</p>
              <p className="info">Wilgotność powietrza {this.state.currHum} %</p>
              <p className="info margin-top">Sprawdź pogodę na kolejne dni:</p>
              
              <div className="togggle-days_container">
              
              {[0,1,2].map((x) => <div className={this.state.currentDay === this.days[x] ? 'toggle-days toggle-days__active' : 'toggle-days'}  onClick={() => this.displayDay(x)}>{this.state.dayName[x]}</div>)}
              
              </div>
                  <Button onClickHandle={this.props.onClickHandle}>Powrót do wyszukiwania</Button>
            </div>
            <div className={this.state.isSingle ? "hidden" : "temps_container fadeIn" }>

              {this.state.currentDay === "day1" && this.day1.map((x) => <NextDays temp={this.calculate(x.main.temp)} imageSource={`http://openweathermap.org/img/w/${x.weather[0].icon}.png`} hour={x.dt_txt.slice(11,16)}/> )}
              {this.state.currentDay === "day2" && this.day2.map((x, i) => i < 8 && <NextDays temp={this.calculate(x.main.temp)} imageSource={`http://openweathermap.org/img/w/${x.weather[0].icon}.png`} hour={x.dt_txt.slice(11,16)} /> )}
              {this.state.currentDay === "day3" && this.day3.map((x, i) => i >= 8 && i < 16 && <NextDays temp={this.calculate(x.main.temp)} imageSource={`http://openweathermap.org/img/w/${x.weather[0].icon}.png`} hour={x.dt_txt.slice(11,16)}/> )}

            </div>
        </div>
      );
  }
}
export default ResultCard;