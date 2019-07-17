import React from 'react';
import { Router } from '@reach/router';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Articles from './components/Articles';
import Article from './components/Article';
import Topics from './components/Topics';
import TopicsArticles from './components/TopicsArticles';
import './App.css';

class App extends React.Component {
  state = {
    loggedInUser: 'jessjelly'
  };
  render() {
    const { loggedInUser } = this.state;
    return (
      <div className="App">
        <Navbar />
        <Router>
          <Home path="/" />
          <Articles path="/articles/" />
          <Article path="/articles/:id" username={loggedInUser} />
          <Topics path="/topics/" />
          <TopicsArticles path="/topics/:topic" />
        </Router>
      </div>
    );
  }
}

export default App;
