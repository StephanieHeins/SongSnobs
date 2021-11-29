import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

const AppNavbar = () => {
  
  return (
    <>
      <nav>
        <div className="nav-wrapper blue-grey lighten-1">
          <div className="brand-logo" as={Link} to='/'>
            SongSnobs
          </div>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
              {/* if user is logged in show saved books and logout */}
              {Auth.loggedIn() ? (
                <>
                  <li as={Link} to='/Dashboard'>
                    Dashboard
                  </li>
                  <li as={Link} to='/CreateSong'>
                    Create
                  </li>
                  <li onClick={Auth.logout}>Logout</li>
                </>
              ) : (
                <li as={Link} to='/SignInUp'>
                Login/Signup
                </li>
              )}
            </ul>
        </div>
      </nav>
    </>
  );
};

export default AppNavbar;
