import React from 'react';
import { Router } from '@reach/router';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Articles from './components/Articles';

class App extends React.Component {
  state = {
    loggedInUser: ''
  };
  render() {
    return (
      <div>
        <Navbar />
        <Router>
          <Home path="/" />
          <Articles path="/articles" />
        </Router>
      </div>
    );
  }
}

export default App;
