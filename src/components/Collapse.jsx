import PropTypes from 'prop-types';
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
        {title}
        <img
          src={chevron}
          alt="chevron"
          className={active ? 'animation' : null}
        />
      </div>
      {active && <div className="content">{content}</div>}
    </div>
  );
}
Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

export default Collapse;
