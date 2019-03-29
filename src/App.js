import React, { Component } from 'react';
import './App.css';
import Card from './components/Card/Card';
import ResultCard from './components/ResultCard/ResultCard.js';

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
    classToggleHandle = () => {
      this.setState({classToggle: !this.state.classToggle});
    }
    changeCard = () => {
      this.classToggleHandle();
      setTimeout(() => {
        this.state.whichPage === 'result' ? this.setState({whichPage: 'main'}) : this.setState({whichPage: 'result'});
      },
      1000);
    }

    // fetchAPI function on click and on enter
    inputOnKeyPress = (e) => {
      if(e.key === 'Enter') {this.fetchAPI()}
    }

    fetchAPI = () => {
      const input = this.results.refs.input;

      if (input.value.trim() !== '' && input.value.trim() !== 'Wpisz miasto') {
      
        fetch(
          'https://api.openweathermap.org/data/2.5/forecast?q=' +
          input.value +
            '&appid=ae76d0efed32d9f29c4d54a5738b80ca'
        )
        .then(function(response) {
          return response.json();
        })
        .then((jsonData) => {
  
          if (jsonData.cod === '200') {
  
           
            this.setState({city: input.value})
            this.setState({json: jsonData})
            this.changeCard();
        
          } else {
              input.className = "input red";
              input.value = "Nie znaleziono miasta";
          }
        })
      }
      else {
        input.className = "input red";
        input.value = "Wpisz miasto";
    }
    }
    

  render() {
    return (
      <div>

        {this.state.whichPage === "main" ? (
          <Card 
            ref={component => (this.results = component)}
            className={this.state.classToggle ? "fadeOut box " : "box"}
            onClickHandle={this.fetchAPI}
            inputOnKeyPress={this.inputOnKeyPress}
            />
        ) : (
          <ResultCard 
            
            className={this.state.classToggle ? "box result-card-box" : "fadeOut box result-card-box "} 
            onClickHandle={this.changeCard}
            cityName={this.state.city.toUpperCase()}

            // current_humidity
            json={this.state.json}
            />
        )}

      </div>
    );
  }
}

export default App;
