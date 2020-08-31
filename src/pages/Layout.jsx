import React from 'react';

import Navbar from '../components/organisms/NavBar';

const Layout = ({ children }) => (
  <div className="layout">
    <Navbar />
    {children}
  </div>
);

export default Layout;
