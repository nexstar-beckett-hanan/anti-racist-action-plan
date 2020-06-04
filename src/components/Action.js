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
          <p>{parse(selectedAction)}</p>
        </div>
      );
    }
  } else {
    return null;
  }
}

export default Action;
