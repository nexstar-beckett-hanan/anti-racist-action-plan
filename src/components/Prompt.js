import React, { Component } from 'react';
const parse = require('html-react-parser');

const Prompt = ({ prompts, activePrompt }) => {
  // javascript can go here if we need to process anything before rendering

  // this is what gets rendered to the front-end
  return prompts[activePrompt];
}

export default Prompt;
