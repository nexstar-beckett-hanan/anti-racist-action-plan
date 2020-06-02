import React, { Component } from 'react';
import Prompt from './Prompt';

const MainContainer = () => {
    return (
    <div id="outer-container">
      <header>
        <h1>Do Something</h1>
      </header>
      <section id="main-section">
        <Prompt />
      </section>
    </div>
    )
}

export default MainContainer;