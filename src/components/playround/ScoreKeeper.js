import React, { Component } from 'react';

class ScoreKeeper extends Component {
  state = {
    score: 0
  }

  increment = (incBy) => {
    return this.setState(cst => ({score: cst.score + incBy}))
  }

  singleKill = () => {
    return this.increment(10)
  }

  tripleKill = () => {
    return this.increment(30)
  }
  render() {
    return (
      <div>
        <h1>Score is: {this.state.score} </h1>
        <button onClick={this.singleKill}>Single kill</button>
        <button onClick={this.tripleKill}>Triple kill</button>
      </div>
    )
  }
}

export default ScoreKeeper;
