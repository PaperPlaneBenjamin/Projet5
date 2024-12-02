import { useState } from 'react';
import '../styles/components/collapse.scss';
import chevron from '../assets/Chevron.svg';

function Collapse({ title, content }) {
  const [active, setActive] = useState(false);
  const handleActive = () => {
    setActive(!active);
  };

  return (
    <div className="collapse">
      <div className="title" onClick={handleActive}>
        {title}{' '}
        <img
          src={chevron}
          alt="chevron"
          className={active ? 'animation' : ''}
        />
      </div>
      <div className={active ? 'content' : 'visibility'}>{content}</div>
    </div>
  );
}

export default Collapse;
