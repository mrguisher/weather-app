import React, { Component } from 'react';
import './Card.css';
import Button from '../Button/Button.js';
import '../../App.css'

class Card extends Component{
constructor() {
    super();

    this.state = {
        isInputSelected: false
    };
} 

placeholderToggle() {
    this.refs.input.placeholder === "Wpisz miasto" && (this.refs.input.placeholder = "");
    this.refs.input.className="input";
}

    render() {
        return (

            <div ref='mainBox' className={this.props.className}>
                <h1 className="heading">Pogoda</h1>
                <h2 className="heading-secondary">Sprawdź pogodę w swoim mieście</h2>
                <input 
                    ref="input" 
                    className="input" 
                    placeholder='Wpisz miasto'
                    onClick={() => this.placeholderToggle()}
                    onKeyPress={this.props.inputOnKeyPress}>
                </input>
                <Button onClickHandle={this.props.onClickHandle}>Wyślij</Button>
            </div>

        );
    }
}
export default Card;