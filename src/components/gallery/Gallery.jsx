import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {gallery} from '../../data/gallery';
import useMediaQuery from '../../hooks/useMediaQuery';
import Carousel from 'react-bootstrap/Carousel';
import {GalleryWrapper} from './styles';
import Lightbox from 'react-awesome-lightbox';
import 'react-awesome-lightbox/build/style.css';

function Gallery() {
  const {t} = useTranslation();
  const isMobile = useMediaQuery('(max-width: 575px)');
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  
  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxIsOpen(true);
  };
  
  const closeLightbox = () => {
    setLightboxIsOpen(false);
  };
  
  return (
    <GalleryWrapper id={'gallery'}>
      <div className="gallery-area pt-100">
        <div className="container">
          <div className="section-title">
            <h2>{t('arenaCity')}</h2>
            <p>{t('arenaCityDesc')}</p>
          </div>
        </div>
        <div className="container-fluid">
          {isMobile ? (
            <Carousel>
              {gallery.map((image, index) => {
                return (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100 carousel-img"
                      src={image}
                      alt={"Business center in Kyiv" + index}
                      width="380px"
                      height="420px"
                      onClick={() => openLightbox(index)}
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          ) : (
            <div className="shorting">
              <div className="row">
                {gallery.map((image, index) => (
                  <div className="single-gallery-box" key={index}>
                    <img
                      src={image}
                      alt={"Business center in Kyiv" + index}
                      onClick={() => {
                        console.log('index', index);
                        openLightbox(index);
                      }}
                    />
                  </div>
                ))}
                {lightboxIsOpen && (
                  <Lightbox
                    startIndex={currentImage}
                    onClose={closeLightbox}
                    images={gallery.map((image) => ({ url: image }))}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </GalleryWrapper>
  );
}

export default Gallery;
