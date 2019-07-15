import React from 'react';
import { Link } from '@reach/router';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="headerstyle">
      <h2>Welcome to NC News</h2>
      <h4> "Fake news is cheap to produce. Genuine journalism is expensive." - Toomas Hendrik Ilves</h4>
      <Link className="linkbuttons" to="/">
        Home
      </Link>
      <Link className="linkbuttons" to="/articles">
        Articles
      </Link>
    </div>
  );
};

export default Navbar;
