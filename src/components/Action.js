import React, { Component } from 'react';
const parse = require('html-react-parser');

const Action = ({ fetchedActions, actions }) => {
  if (fetchedActions) {
    if (!actions) {
      return (
        <div id="action">
          <p>Sorry, no actions found</p>
        </div>
      )
    } else {
      const selectedAction = actions[Math.floor(Math.random() * actions.length)].action_text;
  
      return (
        <div id="action-box">
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
