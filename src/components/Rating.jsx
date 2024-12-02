import star from '../assets/star.svg';
import starPink from '../assets/starPink.svg';
import PropTypes from 'prop-types';
import '../styles/components/rating.scss';

function Rating({ stars }) {
  const range = [1, 2, 3, 4, 5];
  stars = parseInt(stars, 10);
  return (
    <div className="rating">
      {range.map((element) => {
        return stars >= element ? (
          <img key={element} src={starPink} alt="starPink" />
        ) : (
          <img key={element} src={star} alt="star" />
        );
      })}
    </div>
  );
}
Rating.propTypes = {
  stars: PropTypes.string.isRequired,
};

export default Rating;
