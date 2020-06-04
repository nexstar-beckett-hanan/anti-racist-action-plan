import React, { Component } from 'react';
var parse = require('html-react-parser');
import { render } from "react-dom";

const Prompt = ({ actions }) => {
    // javascript can go here if we need to process anything before rendering
    const randomAction = actions[Math.floor(Math.random() * actions.length)].action_text;

    const queryString = 'SELECT * FROM actions WHERE '

    // collection of prompts. when a button is clicked, append the related text to the query string
    const prompts = [
      <div class="prompt">
        <h2>What resource is currently most available to you?</h2>
        <div class="buttons">
          <button>TIME</button> <button>MONEY</button>
        </div>
      </div>,
      <div class="prompt">
        <h2>How much money can you give today?</h2>
        <div class="buttons">
          <button>$5</button> <button>$20</button> <button>$100+</button> 
        </div>
      </div>,
      <div class="prompt">
      <h2>How much time can you give today?</h2>
      <div class="buttons">
        <button>15 MINUTES</button> <button>1 HOUR</button> <button>2+ HOURS</button> <button>LONG-TERM INVESTMENT</button> 
      </div>
    </div>
    ]

    // this is what gets rendered to the front-end
    return prompts[2];
      
    // <div>
    //   <p>{parse(randomAction)}</p>
    // </div>
    
  }
// }

export default Prompt;
