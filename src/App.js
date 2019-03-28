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
   
        city: ''
    
    };
    } 

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
    searchButton = () => {
      this.classToggleHandle();
      this.changeCard()
    }


  render() {
    return (
      <div>

        {this.state.whichPage === "main" ? (
          <Card 
            ref="card"
            className={this.state.classToggle ? "fadeOut box " : "box"}
            onClickHandle={this.searchButton}

            />
        ) : (
          <ResultCard 
            ref="result_card"
            className={this.state.classToggle ? "box result-card-box" : "fadeOut box result-card-box "} 
            onClickHandle={this.changeCard}

            />
        )}

      </div>
    );
  }
}

export default App;
