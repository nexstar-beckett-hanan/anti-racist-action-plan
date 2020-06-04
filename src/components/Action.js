import React, { Component } from 'react';
const parse = require('html-react-parser');

const Action = ({ fetchedActions, actions }) => {
  if (fetchedActions) {
    if (!actions) {
      return (
        <div>Sorry, no actions found</div>
      )
    } else {
      const selectedAction = actions[Math.floor(Math.random() * actions.length)].action_text;
  
      return (
        <div>
          <h2>BASED ON YOUR ANSWERS, YOUR PLAN OF ACTION IS:</h2>
          <div id="action">
            <p>{parse(selectedAction)}</p>
          </div>
        </div>
      );
    }
  } else {
    return null;
  }
}

export default Action;
