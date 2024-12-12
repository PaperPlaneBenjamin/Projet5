import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/* Ce composant réinitialise la position de défilement en haut de la page à chaque changement de route */

const ResetScroll = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ResetScroll;
