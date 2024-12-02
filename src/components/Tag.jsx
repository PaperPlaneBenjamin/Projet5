import PropTypes from 'prop-types';
import '../styles/components/tag.scss';

function Tag({ tag }) {
  return <div className="tag">{tag}</div>;
}
Tag.propTypes = {
  tag: PropTypes.string.isRequired,
};
export default Tag;
