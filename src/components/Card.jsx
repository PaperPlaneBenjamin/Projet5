import PropTypes from 'prop-types';
import '../styles/components/card.scss';

function Card({ id, titleLogement, imageLogement }) {
  return (
    <div className="card" id={id}>
      <img src={imageLogement} alt={`photo_${titleLogement}`} />
      <div className="title-card">{titleLogement}</div>
    </div>
  );
}
Card.propTypes = {
  id: PropTypes.string.isRequired,
  titleLogement: PropTypes.string.isRequired,
  imageLogement: PropTypes.string.isRequired,
};

export default Card;
