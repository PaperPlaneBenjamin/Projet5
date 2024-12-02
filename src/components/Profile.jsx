import PropTypes from 'prop-types';
import '../styles/components/profile.scss';

function Profile({ host }) {
  const [firstName, lastName] = host.name.split(' ');
  return (
    <div className="profile">
      <div className="profile-name">
        <p className="first-name">{firstName}</p>
        <p className="last-name">{lastName}</p>
      </div>
      <div className="profile-picture">
        <img src={host.picture} alt={`photo_de_:_${host.name}`} />
      </div>
    </div>
  );
}
Profile.propTypes = {
  host: PropTypes.object.isRequired,
};
export default Profile;
