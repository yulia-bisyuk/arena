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
                      <span>Адреса офісу</span>вул. Басейна 1-3/2 літ. "А”,
                      Київ, 01001
                    </li>
                    <li>
                      <i className='flaticon-call' />
                      <span>Наші телефони</span>
                      <a href='tel:+38 044 456-34-56'>+38 044 456-34-56</a>
                      <a href='tel:+38 044 678-34-56'>+38 044 678-34-56</a>
                    </li>
                    <li>
                      <i className='flaticon-calendar' />
                      <span>Ми працюємо</span>Без вихідних <br /> 07:00 - 20:00
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
