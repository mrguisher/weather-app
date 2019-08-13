import React, { Component } from 'react'
import { css } from '@emotion/core';
import { MoonLoader } from 'react-spinners';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: white;
`;

export default class Spinner extends Component {
  render() {
    return (
     <div className='box sweet-loading'>
     <MoonLoader
       css={override}
       sizeUnit={"px"}
       size={80}
       color={'#fff'}
       loading={this.props.loading}
     />
   </div> 
    )
  }
}
