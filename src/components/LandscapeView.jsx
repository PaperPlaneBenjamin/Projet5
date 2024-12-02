import '../styles/components/landscape.scss';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

function LandscapeView({ image, text = null }) {
  const [opacity, setOpacity] = useState('');

  useEffect(() => {
    if (image) {
      const calculateOpacity = () => {
        return image.includes('1') ? 'opacity-home' : '';
      };
      setOpacity(calculateOpacity());
    }
  }, [image]);

  return (
    <div className={`landscape ${opacity}`}>
      <img src={image} alt="Landscape" className={opacity} />
      {text && <div className="text">{text}</div>}
    </div>
  );
}
LandscapeView.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default LandscapeView;
