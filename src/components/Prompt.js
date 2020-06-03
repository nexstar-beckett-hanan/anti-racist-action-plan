import React, { Component } from 'react';
var parse = require('html-react-parser');
import { render } from "react-dom";

const Prompt = ({ actions }) => {
    // javascript can go here if we need to process anything before rendering
    const randomAction = actions[Math.floor(Math.random() * actions.length)].action_text;

    // this is what gets rendered to the front-end
    return (
    <div>
      <p>{parse(randomAction)}</p>
    </div>
    )
  }
// }

export default Prompt;
