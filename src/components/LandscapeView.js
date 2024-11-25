import '../styles/components/landscape.scss';
import PropTypes from 'prop-types';

function LandscapeView({ image, text }) {
  LandscapeView.propTypes = {
    image: PropTypes.string.isRequired,
    text: PropTypes.string,
  };

  LandscapeView.defaultProps = {
    text: null,
  };

  return (
    <div className="landscape">
      <img src={image} alt="Landscape" />
      {text && <div className="text">{text}</div>}
    </div>
  );
}

export default LandscapeView;
