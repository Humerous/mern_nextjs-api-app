import React from 'react';
import Link from 'next/link';

//<--- NAVBAR FUNCTION --->
const Navbar = () => {
  return (
    <nav
      className='navbar is-primary'
      role='navigation'
      aria-label='main navigation'
    >
      <div className='navbar-brand'>
        <Link href='/'>
          <a className='navbar-item'>Github Repository 🗂️</a>
        </Link>
        <a
          role='button'
          className='navbar-burger burger'
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>

      <div className='navbar-menu'>
        <div className='navbar-start'>
          <Link href='/'>
            <a className='navbar-item'>Home</a>
          </Link>
          <Link href='/about'>
            <a className='navbar-item'>About</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

//<--- EXPORT FUNCTION --->
export default Navbar;
