import React from 'react';
import { GalleryWrapper } from './styles';

function Gallery() {
  return (
    <GalleryWrapper>
      <div className='gallery-area pt-100'>
        <div className='container'>
          <div className='section-title'>
            <h2>Арена Сіті</h2>
            <p>
              Відчуйте комфорт та ефективність роботи в нашому бізнес-центрі, де
              кожен день - це нові можливості для розвитку вашого бізнесу.
            </p>
          </div>
        </div>
        <div className='container-fluid'>
          <div className='shorting'>
            <div className='row'>
              <div className='single-gallery-box'>
                <img src='/images/gallery/1.jpg' alt='business-center' />
              </div>
              <div className='single-gallery-box'>
                <img src='/images/gallery/2.jpg' alt='business-center' />
              </div>
              <div className='single-gallery-box'>
                <img src='/images/gallery/3.jpg' alt='business-center' />
              </div>
              <div className='single-gallery-box'>
                <img src='/images/gallery/4.jpg' alt='business-center' />
              </div>
              <div className='single-gallery-box'>
                <img src='/images/gallery/5.jpg' alt='business-center' />
              </div>
              <div className='single-gallery-box'>
                <img src='/images/gallery/6.jpg' alt='business-center' />
              </div>
              <div className='single-gallery-box'>
                <img src='/images/gallery/7.jpg' alt='business-center' />
              </div>
              <div className='single-gallery-box'>
                <img src='/images/gallery/8.jpg' alt='business-center' />
              </div>
              <div className='single-gallery-box'>
                <img src='/images/gallery/9.jpg' alt='business-center' />
              </div>
              <div className='single-gallery-box'>
                <img src='/images/gallery/10.jpg' alt='business-center' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </GalleryWrapper>
  );
}

export default Gallery;
