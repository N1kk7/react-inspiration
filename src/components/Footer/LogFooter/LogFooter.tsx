import './LogFooter.scss';
import '../MediaFooter.scss';
import React from 'react';
import { memo } from 'react';

const Footer = () => {
  return (
    <footer className="App-footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="top-footer">
            <div className="logoWrapper">
              <div className="logo">
                <div className='footerTitle'>
                  Adinspiration
                </div>

              </div>
              <div className="logo-description">
                <span>
                  The best video ad inspiration in one place
                </span>

              </div>

            </div>
            <div className="listWrapper">
              <div className="list">
                <span className='titleList'>Menu</span>
                <ul>
                  <li>Galerry</li>
                  <li>Support</li>
                </ul>
              </div>
              <div className="list">
                <span className='titleList'>Social</span>
                <ul>
                  <li>Facebook</li>
                  <li>Instagramm</li>
                  <li>Linkedin</li>
                </ul>
              </div>
            </div>

          </div>
          <hr />
          <div className="bottom-footer">
            <div className="buttonWrapper left-buttonWrapper">
              <button>Adinspiration</button>
              <div className="vLine"></div>
              <button>Copyright 2023</button>
            </div>
            <div className="buttonWrapper">
              <button>Privacy Policy</button>
              <div className="vLine"></div>

              <button>Terms of Service</button>

            </div>


          </div>
        </div>

      </div>

    </footer>
  );
};

export default memo(Footer);