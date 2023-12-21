import React from 'react';

import './Header.scss';
import { memo } from 'react';


const Header = () => {
  return (

      <div className="container">
      <header className="App-header">
        <div className="pageMenu">
          <a className="Page-Name" href="/gallery">Gallery</a>

        </div>


        <a
          className="App-link Title-Page"
          href="/"
        >
          Adinspiration
        </a>

        <div className="login-menu">
          <button className='log-btn'>Log in</button>
          <button className='sign-btn'>Sign up</button>
        </div>
      </header>
    </div>
    
  );
};

export default memo(Header);