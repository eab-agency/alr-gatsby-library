import { Link } from 'gatsby';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <nav>
        <ul>
          <li>
            <Link to="/header">Headers</Link>
            <Link to="/socialproof">Social Proof</Link>
            <Link to="/apply">Apply</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default Layout;