import Card from './Card';
import logements from '../data/logements.json';
import { NavLink } from 'react-router-dom';

function Gallery() {
  return logements.map((logement) => {
    return (
      <NavLink key={logement.id} to={`/housing/${logement.id}`}>
        <Card
          id={logement.id}
          titleLogement={logement.title}
          imageLogement={logement.cover}
        />
      </NavLink>
    );
  });
}

export default Gallery;
