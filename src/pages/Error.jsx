import { NavLink } from 'react-router-dom';
import '../styles/pages/error.scss';

function Error() {
  return (
    <div className="error">
      <p className="error-code">404</p>
      <p className="error-text">
        Oups! La page que <span>vous demandez n'existe pas.</span>
      </p>
      <NavLink to="/">Retourner sur la page d’accueil</NavLink>
    </div>
  );
}
export default Error;
