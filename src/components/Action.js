import React, { Component } from 'react';
const parse = require('html-react-parser');

const Action = ({ fetchedActions, actions, selectedAction }) => {
  // if fetchedActions is true, we should have actions
  if (fetchedActions) {
    // check to make sure the actions array is not empty
    if (!actions) {
      // if it is empty, display that we couldn't find any actions
      return (
        <div id="action-box">
          <h2>BASED ON YOUR ANSWERS, YOUR PLAN OF ACTION IS:</h2>
          <div id="action">
            <p>Sorry, we couldn't find any actions for you!</p>
          </div>
        </div>
      )
    } else { // otherwise, we've got at least one action to work with. awesome!
      // randomize which action we'll present to the user 
      const selectedAction = actions[Math.floor(Math.random() * actions.length)].action_text;
      // then render the action to the front-end
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
