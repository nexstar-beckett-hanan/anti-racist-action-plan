import React, { Component } from 'react';
// could use this to redirect to different things to render based on the link
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Prompt from './Prompt';


class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actions: [],
      fetchedActions: false,
    }
  }

  componentDidMount() {
    fetch('/api/')
      .then(res => res.json())
      .then((actions) => {
        console.log(actions);
        return this.setState({
          actions,
          fetchedActions: true
        });
      })
      .catch(err => console.log('ERROR in MainContainer.componentDidMount while attempting to get actions table. Error is: ', err));
  }

  render () {
    // if we haven't fetched the actions yet, ask people to wait
    if (!this.state.fetchedActions) {
      return (
        <div>
          <h1>Loading, please wait...</h1>
        </div>
      ); 
    }

    const { actions } = this.state;
    // console.log(actions);

    if (!actions) return null;

    if (!actions.length) return (
      <div>Sorry, no actions found</div>
    );


    return (
    <div id="outer-container">
      <header>
        <h1>Do Something</h1>
      </header>
      <section id="main-section">
        <Prompt actions={actions}/>
      </section>
    </div>
    )
  }
}

export default MainContainer;