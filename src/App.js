import React from 'react';
import { Router } from '@reach/router';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Articles from './components/Articles';
import Article from './components/Article';
import Topics from './components/Topics';
import TopicsArticles from './components/TopicsArticles';

class App extends React.Component {
  state = {
    loggedInUser: ''
  };
  render() {
    const { loggedInUser } = this.state;
    return (
      <div>
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
