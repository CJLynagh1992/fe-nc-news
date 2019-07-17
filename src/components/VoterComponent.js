import React from 'react';
import { vote } from './api';
import './votercomponent.css';

class VoterComponent extends React.Component {
  state = {
    voteModifier: 0,
    err: null
  };
  render() {
    const { voteModifier, err } = this.state;
    if (err) return <p>{err}</p>;
    return (
      <div className="votercomponent">
        <button className="votebuttons" onClick={() => this.vote(1)} disabled={voteModifier === 1}>
          +1
        </button>
        <p>{this.props.votes + this.state.voteModifier}</p>
        <button className="votebuttons" onClick={() => this.vote(-1)} disabled={voteModifier === -1}>
          -1
        </button>
      </div>
    );
  }

  vote = num => {
    vote(this.props.type, this.props.id, num).catch(err => {
      this.setState({ err });
    });
    this.setState(state => {
      return { voteModifier: state.voteModifier + num };
    });
  };
}

export default VoterComponent;
