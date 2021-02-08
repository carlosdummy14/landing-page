import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

function Header() {
  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
        </Link>
      </h1>
      <div className="Header-nav">
        <i className="fas fa-bars" />
      </div>
    </div>
  );
}

export default Header;
