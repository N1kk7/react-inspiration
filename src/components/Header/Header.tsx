import React from 'react';

import './Header.scss';
import { memo } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (

      <div className="container">
      <header className="App-header">
        {/* routes start */}
        <a className="App-link" href="/gallery">Gallery</a>
        <Link className="App-link" to="/gallery">My Collections</Link>

        {/* routes end */}

        <a
          className="App-link"
          href="/"
        >
          Adinspiration
        </a>

        <div className="login-menu">
          <button>Log in</button>
          <button>Sign up</button>
        </div>
      </header>
    </div>
    
  );
};

export default memo(Header);