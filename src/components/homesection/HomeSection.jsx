import React from 'react';
import { HomeWrap } from './styles';

function HomeSection() {
  return (
    <HomeWrap>
      <div className='home-section'>
        <div className='swiper swiper-initialized swiper-horizontal swiper-pointer-events home-slides swiper-backface-hidden'>
          <div className='swiper-wrapper'>
            <div className='main-banner item-bg5'>
              <div className='d-table'>
                <div className='d-table-cell'>
                  <div className='container'>
                    <div className='main-banner-content'>
                      <span className='sub-title'>
                        {' '}
                        Офісний центр преміум класу
                      </span>
                      <h1>Бізнес-центр з душею в самому серці міста</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='banner-footer'>
          <div className='container-fluid p-0'>
            <div className='row m-0 align-items-center'>
              <div className='col-lg-5 col-md-12 p-0'></div>
              <div className='col-lg-7 col-md-12 p-0'>
                <div className='banner-contact-info'>
                  <ul>
                    <li>
                      <i className='flaticon-location' />
                      <span>Адреса офісу</span>вул. Велика Васильківська / вул.
                      Басейна, 1-3/2
                    </li>
                    <li>
                      <i className='flaticon-call' />
                      <span>Контакти</span>
                      <a href='tel:+38 097 080-30-22'>+38 097 080 30 22</a>
                      <a href='mailto:info@arena-city.com'>
                        info@arena-city.com
                      </a>
                    </li>
                    <li>
                      <i className='flaticon-calendar' />
                      <span>Години роботи</span>
                      Цілодобово
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
