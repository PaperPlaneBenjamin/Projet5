import Rating from '../components/Rating';
import Profile from '../components/Profile';
import Tag from '../components/Tag';
import { useParams } from 'react-router-dom';
import logements from '../data/logements.json';
import '../styles/pages/housing.scss';
import Collapse from '../components/Collapse';
import Error from './Error';
import Slider from '../components/Slider';

function Housing() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);
  if (!logement) {
    return <Error />;
  }
  return (
    <div className="housing">
      <div className="carousel">
        <Slider images={logement.pictures} />
      </div>
      <div className="housing-box">
        <div className="housing-information">
          <h2 className="housing-h2">{logement.title}</h2>
          <p>{logement.location}</p>
          <div className="tags">
            {logement.tags.map((tag, index) => (
              <Tag tag={tag} key={index} />
            ))}
          </div>
        </div>
        <div className="housing-profile">
          <Profile host={logement.host} />
          <Rating stars={logement.rating} />
        </div>
      </div>
      <div className="housing-collapses">
        <Collapse title="Description" content={logement.description} />
        <Collapse
          title="Équipements"
          content={
            <div>
              {logement.equipments.map((equipment, index) => (
                <p key={index} className="equipment-text">
                  {equipment}
                </p>
              ))}
            </div>
          }
        />
      </div>
    </div>
  );
}
export default Housing;