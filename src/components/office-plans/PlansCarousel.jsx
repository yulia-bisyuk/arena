import Carousel from 'react-bootstrap/Carousel';

function PlansCarousel({ images }) {
  return (
    <Carousel>
      {images.map((image, index) => {
        return (
          <Carousel.Item key={index}>
            <img
              className='d-block w-100'
              src={image}
              alt='Slide'
              width='380px'
              height='420px'
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default PlansCarousel;
