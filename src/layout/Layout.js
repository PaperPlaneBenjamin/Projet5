import { NavLink, Outlet } from 'react-router-dom';
import kasa from '../assets/kasa-logo.svg';
import kasaFooter from '../assets/kasa-logo-footer.svg';
import '../styles/App.scss';
import '../styles/index.scss';

function Layout() {
  return (
    <div className="layout">
      <header className="layout-header">
        <NavLink to="/" className="logo-link">
          <img src={kasa} alt="logo de kasa" />
        </NavLink>
        <nav>
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/about">A Propos</NavLink>
        </nav>
      </header>
      <Outlet className="layout-content" />
      <footer className="layout-footer">
        <img src={kasaFooter} alt="logo de kasa sombre" />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </div>
  );
}
export default Layout;
