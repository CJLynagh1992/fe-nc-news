import React from 'react';
import { Router } from '@reach/router';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Articles from './components/Articles';
import Article from './components/Article';
import Topics from './components/Topics';
import './App.css';
import ErrorHandling from './components/ErrorHandling';

class App extends React.Component {
  state = {
    loggedInUser: 'jessjelly'
  };
  render() {
    const { loggedInUser } = this.state;
    return (
      <div className="App">
        <Navbar username={loggedInUser} />
        <Router>
          <Home path="/" setUser={this.setUser} />
          <Articles path="/articles/" />
          <Article path="/articles/:id" username={loggedInUser} />
          <Topics path="/topics/" />
          <Articles path="/topics/:topic" />

          <ErrorHandling default />
        </Router>
      </div>
    );
  }

  setUser = event => {
    const { value } = event.target;
    this.setState({ loggedInUser: value });
  };
}

export default App;
