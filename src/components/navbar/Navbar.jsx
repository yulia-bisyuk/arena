import React from 'react';
import { NavbarWrapper } from './styles';
import useOutsideAlerter from '../../hooks/useOutsideAlerter';
import { useTranslation } from 'react-i18next';

function Navbar({ changeLanguage }) {
  const { t, i18n } = useTranslation();
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
              <div className='call-us-top'>
                <div className='call-us-top-icon-text-wrap'>
                  <div className='icon'>
                    <i className='flaticon-call' />
                  </div>
                  <span className='text'>{t('contact_us')}:</span>
                </div>
                <span className='number'>
                  <a href='tel:+38 097 080-30-22'>+38 097 080 30 22</a>
                </span>
              </div>
              <a
                onClick={() =>
                  changeLanguage(i18n.language === 'en' ? 'ua' : 'en')
                }
                className='default-btn small-scr'
                style={{ cursor: 'pointer' }}
              >
                {i18n.language === 'en' ? 'ua' : 'en'}
                <span />
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
                      {t('about_business_center')}
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#gallery'>
                      {t('gallery')}
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#contacts'>
                      {t('contacts')}
                    </a>
                  </li>
                </ul>
                <div className='others-option'>
                  <a
                    className='default-btn nav-presentation-btn'
                    // href="/files/arena-city.pdf"
                    href={
                      i18n.language === 'en'
                        ? 'files/Arena-City-11-2023-EN.pdf'
                        : 'files/Арена-Сіті-11-2023.pdf'
                    }
                    download
                    target='_blank'
                  >
                    {t('download_presentation')} <span />
                  </a>
                </div>
              </div>
              <a
                onClick={() =>
                  changeLanguage(i18n.language === 'en' ? 'ua' : 'en')
                }
                className='default-btn large-scr'
                style={{ cursor: 'pointer' }}
              >
                {i18n.language === 'en' ? 'ua' : 'en'}
                <span />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </NavbarWrapper>
  );
}

export default Navbar;
