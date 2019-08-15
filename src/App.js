import React, { Component } from 'react';
import './App.css';
import Card from './components/Card/Card';
import ResultCard from './components/ResultCard/ResultCard.js';
import Spinner from './components/Spinner/Spinner';
import Button from './components/Button/Button';



class App extends Component {
  constructor() {
    super();
    
    this.state = {
        whichPage: 'main',
        classToggle: false,

        json: '',
        city: ''
    
    };
    } 

    // change cards and fade out
   
    changeCard = () => {
      this.setState({classToggle: !this.state.classToggle});
      setTimeout(() => {this.state.whichPage === 'inProgress' ? this.setState({whichPage: 'results'}) : this.setState({whichPage: 'main'})}, 500)
    }

    // fetchAPI function on click and on enter
    inputOnKeyPress = (e) => {
      e.key === 'Enter' && this.fetchAPI();
    }

    fetchAPI = () => {
      const input = this.results.refs.input;

      if (input.value.trim() !== '') {
        this.setState({whichPage: "inProgress"});
        fetch(
          'https://api.openweathermap.org/data/2.5/forecast?q=' +
          input.value +
            '&appid=ae76d0efed32d9f29c4d54a5738b80ca'
        )
        .then(function(response) {
          if (response.ok === true) {
            return response.json();
          } 
        })
        .then((jsonData) => {
          if (jsonData !== undefined) {
            this.setState({city: input.value})
            this.setState({json: jsonData})
            this.changeCard();
          } else {
            this.setState({classToggle: !this.state.classToggle});
            setTimeout(() => {this.setState({whichPage: 'notFound'})}, 500)
            
          }
        }
        )
      }
      else {
        input.className = "input input-red";
        input.placeholder = "Wpisz miasto";
    }
    }
    
  render() {
    return (
      <div>
        {this.state.whichPage === "main" && (
          <Card 
            ref={component => (this.results = component)}
            className={this.state.classToggle ? "fadeOut box " : "box"}
            onClickHandle={this.fetchAPI}
            inputOnKeyPress={this.inputOnKeyPress}
            />
        )}
        
        {this.state.whichPage === "results" && (
          
          <ResultCard 
            className={this.state.classToggle ? "box result-card-box" : "fadeOut box result-card-box "}
            onClickHandle={this.changeCard}
            cityName={this.state.city.toUpperCase()}
            json={this.state.json}
            />
        )}
        {this.state.whichPage === "inProgress" && <Spinner className={this.state.classToggle ? "fadeOutSpinner box sweet-loading'" : "box sweet-loading'"}></Spinner> }
        {this.state.whichPage === "notFound" && (
          <div className={this.state.classToggle ? "box not-found" : "fadeOut box not-found"}> Nie ma takiego miasta...
            <Button onClickHandle={this.changeCard}>Powrót do wyszukiwania</Button>
          </div>
          
        )}

      </div>
    );
  }
}

export default App;