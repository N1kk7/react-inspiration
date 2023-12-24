import React from 'react';

import './Header.scss';
import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { popup } from "../../redux/rootSlice";



const Header = () => {

  const dispatch = useDispatch();



  


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
            <button className='log-btn' onClick={() => dispatch(popup('open-logIn'))} >Log in</button>
            <button className='sign-btn' onClick={() => dispatch(popup('open-signIn'))}>Sign up</button>
          </div>
        </header>
        
    </div>
    
  );
};

export default memo(Header);