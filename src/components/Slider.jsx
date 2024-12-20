import PropTypes from 'prop-types';
import '../styles/components/slider.scss';
import next from '../assets/next.svg';
import prev from '../assets/prev.svg';
import { useState } from 'react';

function Slider({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">
      <div className="carousel-image">
        <img src={images[currentImage]} alt={`Image_${currentImage + 1}`} />
        <button
          className={`carousel-button prev ${
            images.length === 1 ? 'hidden' : ''
          }`}
          onClick={handlePrev}
        >
          <img src={prev} alt="bouton prédédent" />
        </button>
        <button
          className={`carousel-button next ${
            images.length === 1 ? 'hidden' : ''
          }`}
          onClick={handleNext}
        >
          <img src={next} alt="bouton suivant" />
        </button>
        <div
          className={`carousel-counter ${images.length === 1 ? 'hidden' : ''}`}
        >
          {currentImage + 1}/{images.length}
        </div>
      </div>
    </div>
  );
}

Slider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Slider;
