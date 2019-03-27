import React, { Component } from 'react';
import './App.css';
import Card from './components/Card/Card';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
        whichPage: 'main',
   
    
    };
    } 


  render() {
    return (
      <div>
        <Card className={this.state.whichPage === 'main' ? 'box' : 'hidden'}/>

        
      </div>
    );
  }
}

export default App;
