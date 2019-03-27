import React, { Component } from 'react';
import './App.css';
import Card from './components/Card/Card';
import ResultCard from './components/ResultCard/ResultCard.js';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
        whichPage: 'main',
   
    
    };
    } 

    changeCard = () => {
      this.state.whichPage === 'result' ? this.setState({whichPage: 'main'}) : this.setState({whichPage: 'result'})
    }
    searchButton = () => {
      this.changeCard();
    }


  render() {
    return (
      <div>
        <Card 
          className={this.state.whichPage === 'main' ? 'box' : 'hidden'} 
          onClickHandle={this.searchButton}

          />
        <ResultCard 
          className={this.state.whichPage === 'main' ? 'hidden' : 'box'} 
          onClickHandle={this.changeCard}
            
          />

      </div>
    );
  }
}

export default App;
