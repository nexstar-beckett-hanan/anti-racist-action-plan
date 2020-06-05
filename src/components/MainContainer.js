import React, { Component } from 'react';
// could use this to redirect to different things to render based on the link
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Prompt from './Prompt';
import Action from './Action';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actions: [],
      fetchedActions: false,
      prompts: [],
      activePrompt: 0,
      selectedAction: '',
    }

    // this.renderTime = this.renderTime.bind(this);
    // this.renderMoney = this.renderMoney.bind(this);
    this.loadPrompts = this.loadPrompts.bind(this);
  }

  loadPrompts () {
    this.setState({ prompts: [
      <div className="prompt">
        <h2>What resource is currently most available to you?</h2>
        <div className="buttons">
          <button onClick={() => this.renderTime()}>TIME</button>
          <button onClick={() => this.renderMoney()}>MONEY</button>
        </div>
      </div>,
      <div className="prompt">
        <h2>How much money can you give today?</h2>
        <div className="buttons">
          <button onClick={() => {
            this.getSpecificActions('money=5');
          }}>$5</button>
          <button onClick={() => {
            this.getSpecificActions('money=20');
          }}>$20</button>
          <button onClick={() => {
            this.getSpecificActions('money=100');
          }}>$100+</button> 
        </div>
      </div>,
      <div className="prompt">
        <h2>How much time can you give today?</h2>
          <div className="buttons">
            <button onClick={() => {
            this.getSpecificActions('time=15');
          }}>15-30 MINUTES</button>
            <button onClick={() => {
            this.getSpecificActions('time=30');
          }}>30-120 MINUTES</button>
            <button onClick={() => {
            this.getSpecificActions('time=120');
          }}>2+ HOURS</button>
            <button onClick={() => {
            this.getSpecificActions('time=240');
          }}>LONG-TERM INVESTMENT</button> 
          </div>
      </div>
    ]});
  }

  UNSAFE_componentWillMount() {
    this.loadPrompts();
  }

  getSpecificActions(matchCriteria) {
    fetch(`/api?${matchCriteria}`, {
      method: 'GET',
      headers: {
        "Content-Type": "Application/JSON"
      },
    })
      .then(res => res.json())
      .then((data) => {
        return this.setState({
            actions: data,
            fetchedActions: true
        })
      })
      .catch(err => console.log('ERROR in MainContainer.getSpecificActions while attempting to get actions table. Error is: ', err));
  }

  renderTime () {
    this.setState((state) => {
      return {
        activePrompt: 2
      };
    });
  }

  renderMoney () {
    this.setState({activePrompt: 1});
  }

  render () {
    const {prompts, activePrompt, fetchedActions, actions } = this.state;

    let showThis;
    if (!fetchedActions) {
      showThis = <Prompt prompts={prompts} activePrompt={activePrompt} />
    } else {
      showThis = <Action fetchedActions={fetchedActions} actions={actions}/>
    }

    return (
    <div id="outer-container">
      <header>
        <section className="subtitle">
          <h3>TAKE ANTI-RACIST ACTION</h3>
        </section>
        <section className="rounded-border">
          <h1>DO SOMETHING</h1>
        </section>
      </header>
      <section id="main-section">
        {showThis}
      </section>
    </div>
    )
  }
}

export default MainContainer;