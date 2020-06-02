import React, { Component } from 'react';
var parse = require('html-react-parser');
import { render } from "react-dom";

class Prompt extends Component {
  // will need to put props in constructor and super if we pass anything down from parent component
  constructor(props) {
    super(props);
    // put things here that are state-related variables we want to keep track of and access from this component
    this.state = {
  
    };
    // any methods we create, we'll want to bind the "this" context here unless we use arrow functions when we invoke them
  }

  // methods go here
  componentDidMount() {
    this.getActions();
  }

  async getActions () {
    const actions = [];
    // try {
    //   await fetch('../data/actions.json')
    //     .then((results) => results.json())
    //     .then((data) => {
    //       actions = data;
    //     });

    //     this.posts = actions.map((element) => (
    //       <p>{action.action}</p>
    //     ))

    //   console.log(`actions is ${actions}`);
    //   return actions;
    // } catch (err) {
    //     throw err;
    // }
  }

  // this is what I'm actually running on the front-end
  render() {
    // save the data from the actions file into our props
    const actions = [
      'Read <a href=\"https://www.theatlantic.com/ideas/archive/2020/05/americas-racial-contract-showing/611389/\">America’s Racial Contract Is Killing Us</a> by Adam Serwer | Atlantic (May 8, 2020)',
      'Read <a href=\"https://drive.google.com/a/glaze0101.com/file/d/0By2bSlBi5slDbXB2enJ0RzN6c3M/view?usp=sharing\">Ella Baker and the Black Freedom Movement</a> (Mentoring a New Generation of Activists)',
      'Read <a href=\"https://www.nytimes.com/2011/06/26/magazine/my-life-as-an-undocumented-immigrant.html\">My Life as an Undocumented Immigrant</a> by Jose Antonio Vargas | NYT Mag (June 22, 2011)'
    ]
      
    // javascript can go here if we need to process anything before rendering
    const randomAction = actions[Math.floor(Math.random() * actions.length)];

    // this is what gets rendered to the front-end
    return (
    <div>
      <p>{parse(randomAction)}</p>
    </div>
    )
  }
}

export default Prompt;
