import React, { Component } from 'react';
import './Card.css';
import Button from '../Button/Button.js';
import '../../App.css'

class Card extends Component{
constructor() {
super();

this.state = {

    whichPage: 'results',

    isInputSelected: false

};
} 

placeholderToggle() {
    this.setState({isInputSelected: true});
    this.refs.input.className="input";
    this.refs.input.value="";
  }


    render() {
        return (

            <div ref='mainBox' className={this.props.className}>
                <h1 className="heading">Pogoda</h1>
                <h2 className="heading-secondary">Sprawdź pogodę w swoim mieście</h2>
                <input ref="input" className="input" placeholder={this.state.isInputSelected ? '' : 'Wpisz miasto'} onClick={() => this.placeholderToggle()} value={this.props.value}></input>
                <Button >Wyślij</Button>
            </div>

        );
    }
}
export default Card;