import React, { Component } from 'react';
import { render } from "react-dom";

class Prompt extends Component {
  // will need to put props in constructor and super if we pass anything down from parent component
  constructor() {
    super();
    // put things here that are variables we want to have access to
    this.state = {
      
    };
    // any methods we create, we'll want to bind the "this" context here unless we use arrow functions when we invoke them
  }

  // methods go here
  

  // this is what I'm actually running on the front-end
  render() {
    // javascript can go here if we need to process anything before rendering

    // this is what gets rendered to the front-end
    return (
    <div>
      <p>Prompt</p>
    </div>
    )
  }
}

export default Prompt;
