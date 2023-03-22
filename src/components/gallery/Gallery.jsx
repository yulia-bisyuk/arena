import React from 'react';
import { gallery } from '../../data/gallery';
import useMediaQuery from '../../hooks/useMediaQuery';
import Carousel from 'react-bootstrap/Carousel';
import { GalleryWrapper } from './styles';

function Gallery() {
  const isMobile = useMediaQuery('(max-width: 575px)');

  return (
    <GalleryWrapper id={'gallery'}>
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
          {isMobile ? (
            <Carousel>
              {gallery.map((image, index) => {
                return (
                  <Carousel.Item key={index}>
                    <img
                      className='d-block w-100 carousel-img'
                      src={image}
                      alt='Slide'
                      width='380px'
                      height='420px'
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          ) : (
            <div className='shorting'>
              <div className='row'>
                {gallery.map((image, index) => (
                  <div className='single-gallery-box' key={index}>
                    <img src={image} alt='business-center' />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </GalleryWrapper>
  );
}

export default Gallery;
