import React from 'react';
import { Link } from 'react-router';

const Main = ({ children }) => (
  <div>
    <h1>
      <Link to="/">Reduxtagram</Link>
    </h1>
    {children}
  </div>
);

export default Main;
