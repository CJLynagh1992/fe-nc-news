import React from 'react';
import { Link } from '@reach/router';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="headerstyle">
      <h2>Welcome to NC News</h2>
      <h4 className="quote">
        {' '}
        "Fake news is cheap to produce. Genuine journalism is expensive." - <a href="https://en.wikipedia.org/wiki/Toomas_Hendrik_Ilves">Toomas Hendrik Ilves</a>{' '}
      </h4>
      <div>
        <Link className="linkbuttons" to="/">
          Home
        </Link>
        <Link className="linkbuttons" to="/articles">
          Articles
        </Link>
        <Link className="linkbuttons" to="/topics">
          Topics
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
