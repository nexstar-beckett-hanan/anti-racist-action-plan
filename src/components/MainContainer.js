import React, { Component } from 'react';
import Prompt from './Prompt';
import Action from './Action';

const db = require('../../server/models/models');

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
        <h2>What resource is most available to you today?</h2>
        <div className="buttons">
          <button onClick={() => this.renderTime()}>TIME</button>
          <button onClick={() => this.renderMoney()}>MONEY</button>
        </div>
      </div>,
      <div className="prompt">
        <h2>How much money can you give today?</h2>
        <div className="buttons">
          <button onClick={() => {
            this.getSpecificActions({ money: 5 });
          }}>$5</button>
          <button onClick={() => {
            this.getSpecificActions({ money: 20 });
          }}>$20</button>
          <button onClick={() => {
            this.getSpecificActions({ money: 100 });
          }}>$100+</button> 
        </div>
      </div>,
      <div className="prompt">
        <h2>How much time can you give today?</h2>
          <div className="buttons">
            <button onClick={() => {
            this.getSpecificActions({ time: 15 });
          }}>15-30 MINUTES</button>
            <button onClick={() => {
            this.getSpecificActions({ time: 30 });
          }}>30-120 MINUTES</button>
            <button onClick={() => {
            this.getSpecificActions({ time: 120 });
          }}>2+ HOURS</button>
            <button onClick={() => {
            this.getSpecificActions({ time: 240 });
          }}>LONG-TERM INVESTMENT</button> 
          </div>
      </div>
    ]});
  }

  UNSAFE_componentWillMount() {
    this.loadPrompts();
  }

  // getSpecificActions(matchCriteria) {
  //   fetch(`/api?${matchCriteria}`, {
  //     method: 'GET',
  //     headers: {
  //       "Content-Type": "Application/JSON"
  //     },
  //   })
  //     .then(res => res.json())
  //     .then((data) => {
  //       return this.setState({
  //           actions: data,
  //           fetchedActions: true
  //       })
  //     })
  //     .catch(err => console.log('ERROR in MainContainer.getSpecificActions while attempting to get actions table. Error is: ', err));
  // }

  getSpecificActions(matchCriteria) {
      // start off our PostresSQL query
      let selection = 'SELECT * FROM actions';
    
      // right now we ONLY put money or time, you can't select both, so no AND is needed yet
      if (matchCriteria) {
        // in these first two cases, they selected money as their resource
        if (matchCriteria.money === 5) {
          selection = selection.concat(' WHERE money=', matchCriteria.money);
        }
        if (matchCriteria.money > 5) {
          selection = selection.concat(' WHERE money<=', matchCriteria.money);
        }
        // in this case, they selected time
        if (matchCriteria.time) {
          selection = selection.concat(' WHERE time=', matchCriteria.time);
        }
      }
      // finish it with a semicolon
      selection = selection.concat(';');
      
      db.query(selection)
        .then((results) => {
          console.log(`results from db query in controller are ${results}`);
          this.setState({actions: results.rows});
          console.log('saved actions');
        })
        .catch((error) => console.log(error));
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
      showThis = <Action fetchedActions={fetchedActions} actions={actions} />
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