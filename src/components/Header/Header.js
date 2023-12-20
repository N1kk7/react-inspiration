import './Header.css';
import { memo } from 'react';

const Header = () => {
  return (
    <div className="container">
      <header className="App-header">
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
      </header>
    </div>
  );
};

export default memo(Header);