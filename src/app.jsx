import React, { Component } from "react";
import { render } from "react-dom";
import App from './components/App';

// so that webpack can bundle styles
import styles from './css/style.css';

render(<App />, document.querySelector("#root"));
