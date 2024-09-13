import './Header.scss';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CloseButton from '../../assets/closebutton.svg';
import OpenButton from '../../assets/menubutton.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div>
          <p className="navbar-logo">Andrea René</p>
        </div>

        {/* Links for desktop */}
        <nav className={isMenuOpen ? 'navbar-links active' : 'navbar-links'}>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Who I Am
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
                onClick={() => setIsMenuOpen(false)}
              >
                What I’ve Done
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Let’s Connect
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resume"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Resumé
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Mobile menu toggle */}
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {isMenuOpen ? (
            <img src={CloseButton} alt="Close menu button" />
          ) : (
            <img src={OpenButton} alt="Open menu button" />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
