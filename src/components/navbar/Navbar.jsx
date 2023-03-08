import React, { useState } from 'react';
import { NavbarWrapper } from './styles';
// eslint-disable-next-line
import useOutside from '../../hoocks/useOutside';

function Navbar() {
  const [mobNavActive, setMobNavActive] = useState(false);
  // const {ref, isShow, setIsShow} = useOutside(false);

  return (
    <NavbarWrapper>
      <div id='navbar' className='navbar-area navbar-style-two'>
        <div className='tuam-nav'>
          <div className='container-fluid'>
            <nav className='navbar navbar-expand-md navbar-light'>
              <a className='navbar-brand' href='/'>
                <img
                  src='/images/white-logo.png'
                  alt='logo'
                  className='white-logo'
                />
                <img src='/images/logo.png' alt='logo' className='logo' />
              </a>
              <button
                className={`navbar-toggler navbar-toggler-right ${
                  !mobNavActive ? 'collapsed' : ''
                }`}
                onClick={() => setMobNavActive(!mobNavActive)}
                type='button'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='icon-bar top-bar' />
                <span className='icon-bar middle-bar' />
                <span className='icon-bar bottom-bar' />
              </button>
              <div
                className={`collapse navbar-collapse ${
                  mobNavActive ? 'show' : ''
                }`}
                id='navbarSupportedContent'
              >
                <ul
                  className='navbar-nav'
                  onClick={() => setMobNavActive(!mobNavActive)}
                >
                  <li className='nav-item'>
                    <a className='nav-link' href='#advantages'>
                      Про бізнес-центр
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#gallery'>
                      Галерея
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#contacts'>
                      Контакти
                    </a>
                  </li>
                </ul>
                <div className='others-option'>
                  <div className='call-us'>
                    <div className='icon'>
                      <i className='flaticon-call' />
                    </div>
                    Звязатися:<span className='number'>+38 044 456-34-56</span>
                  </div>
                  <a className='default-btn' href='/index2/#'>
                    Англійська
                    <span />
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </NavbarWrapper>
  );
}

export default Navbar;
