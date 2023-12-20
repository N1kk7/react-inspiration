import './Footer.css';
import { memo } from 'react';

const Footer = () => {
  return (
    <footer className="App-footer">
      {/* routes start */}
      <a className="App-link" href="/gallery">Gallery</a>
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
    </footer>
  );
};

export default memo(Footer);