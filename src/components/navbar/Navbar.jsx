import React from 'react';
import { NavbarWrapper } from './styles';
import useOutsideAlerter from '../../hooks/useOutsideAlerter';
function Navbar() {
  const { refForOutside, isShowed, setIsShowed } = useOutsideAlerter(false);
  return (
    <NavbarWrapper>
      <div
        id='navbar'
        className='navbar-area navbar-style-two'
        ref={refForOutside}
      >
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
                  !isShowed ? 'collapsed' : ''
                }`}
                onClick={() => setIsShowed(!isShowed)}
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
                className={`collapse navbar-collapse ${isShowed ? 'show' : ''}`}
                id='navbarSupportedContent'
              >
                <ul
                  className='navbar-nav'
                  onClick={() => setIsShowed(!isShowed)}
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
                    Звя'затися:
                    <span className='number'>
                      <a href='tel:+38 097 080-30-22'>+38 097 080 30 22</a>
                    </span>
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
