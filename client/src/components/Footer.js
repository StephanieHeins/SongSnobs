import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

  return (

    <footer class="page-footer blue-grey lighten-1">
        <div class="footer-copyright">
            <div class="container">
            © 2021 SongSnobs
            </div>
            <a class="grey-text text-lighten-4 right" as={Link} to=''>
            Github
            </a>
        </div>
    </footer>

    )
};

export default Footer;