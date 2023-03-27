import React from 'react';
import {HomeWrap} from './styles';
import {useTranslation} from 'react-i18next';

function HomeSection({bgImg}) {
  const {t} = useTranslation();
  return (
    <HomeWrap>
      <div className="home-section">
        <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events home-slides swiper-backface-hidden">
          <div className="swiper-wrapper">
            <div className="main-banner" style={{ backgroundImage: bgImg }}>
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="main-banner-content">
                      <span className="sub-title">{t('premium_office_center')}</span>
                      <h1>{t('business_center_with_soul')}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-footer">
          <div className="container-fluid p-0">
            <div className="row m-0 align-items-center">
              <div className="col-lg-5 col-md-12 p-0 resized"></div>
              <div className="col-lg-7 col-md-12 p-0 resized-content">
                <div className="banner-contact-info">
                  <ul>
                    <li>
                      <i className="flaticon-location" />
                      <span>{t('office_address')}</span>
                      {t('address_text')}
                    </li>
                    <li>
                      <i className="flaticon-call" />
                      <span>{t('contacts')}</span>
                      <a href="tel:+38 097 080-30-22">+38 097 080 30 22</a>
                      <a href="mailto:info@arena-city.com">
                        info@arena-city.com
                      </a>
                    </li>
                    <li>
                      <i className="flaticon-calendar" />
                      <span>{t('working_hours')}</span>
                      {t('twenty_four_seven')}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeWrap>
  );
}

export default HomeSection;
